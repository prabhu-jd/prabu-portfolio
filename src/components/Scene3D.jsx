import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const ACCENT = '#e0475a';
const SOFT = '#f3b8c0';

// Points spread evenly over a sphere: each one is a "microservice" node.
function fibonacciSphere(count, radius) {
  const points = [];
  const offset = 2 / count;
  const increment = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = i * offset - 1 + offset / 2;
    const r = Math.sqrt(1 - y * y);
    const phi = i * increment;
    points.push(new THREE.Vector3(Math.cos(phi) * r * radius, y * radius, Math.sin(phi) * r * radius));
  }
  return points;
}

function buildEdges(points, maxDistance) {
  const edges = [];
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      if (points[i].distanceTo(points[j]) < maxDistance) edges.push([i, j]);
    }
  }
  return edges;
}

// Small glowing packets travelling along the edges, like transactions between services.
function Pulses({ points, edges, count }) {
  const refs = useRef([]);
  const state = useMemo(
    () => Array.from({ length: count }, () => ({
      edge: edges[Math.floor(Math.random() * edges.length)],
      t: Math.random(),
      speed: 0.25 + Math.random() * 0.45,
    })),
    [edges, count]
  );

  useFrame((_, delta) => {
    state.forEach((p, i) => {
      p.t += delta * p.speed;
      if (p.t >= 1) {
        p.t = 0;
        p.edge = edges[Math.floor(Math.random() * edges.length)];
      }
      const mesh = refs.current[i];
      if (mesh) mesh.position.lerpVectors(points[p.edge[0]], points[p.edge[1]], p.t);
    });
  });

  return state.map((_, i) => (
    <mesh key={i} ref={(el) => (refs.current[i] = el)}>
      <sphereGeometry args={[0.045, 12, 12]} />
      <meshBasicMaterial color={i % 3 === 0 ? ACCENT : SOFT} toneMapped={false} />
    </mesh>
  ));
}

function Network({ compact, reducedMotion }) {
  const group = useRef();
  const nodeCount = compact ? 26 : 42;
  const radius = 2.4;
  const points = useMemo(() => fibonacciSphere(nodeCount, radius), [nodeCount]);
  const edges = useMemo(() => buildEdges(points, compact ? 1.75 : 1.45), [points, compact]);

  const lineGeometry = useMemo(() => {
    const positions = new Float32Array(edges.length * 6);
    edges.forEach(([a, b], i) => {
      positions.set([points[a].x, points[a].y, points[a].z, points[b].x, points[b].y, points[b].z], i * 6);
    });
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, [edges, points]);

  useFrame((state, delta) => {
    if (!group.current) return;
    if (!reducedMotion) group.current.rotation.y += delta * 0.12;
    // Gentle tilt toward the pointer.
    const targetX = state.pointer.y * 0.25;
    const targetZ = -state.pointer.x * 0.15;
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.05;
    group.current.rotation.z += (targetZ - group.current.rotation.z) * 0.05;
  });

  return (
    <group ref={group}>
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color={SOFT} transparent opacity={0.28} />
      </lineSegments>
      {points.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[i % 7 === 0 ? 0.09 : 0.06, 16, 16]} />
          <meshStandardMaterial
            color={i % 7 === 0 ? ACCENT : '#ffffff'}
            emissive={i % 7 === 0 ? ACCENT : SOFT}
            emissiveIntensity={i % 7 === 0 ? 1.4 : 0.6}
          />
        </mesh>
      ))}
      {!reducedMotion && <Pulses points={points} edges={edges} count={compact ? 10 : 18} />}
    </group>
  );
}

function Core({ reducedMotion }) {
  return (
    <Float speed={reducedMotion ? 0 : 1.4} rotationIntensity={0.6} floatIntensity={0.8}>
      <mesh>
        <icosahedronGeometry args={[1.05, 1]} />
        <meshBasicMaterial color={ACCENT} wireframe transparent opacity={0.35} />
      </mesh>
      <mesh scale={0.78}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#2b2f36"
          emissive="#4a1520"
          roughness={0.25}
          metalness={0.8}
          distort={reducedMotion ? 0 : 0.35}
          speed={1.6}
        />
      </mesh>
    </Float>
  );
}

export default function Scene3D({ compact = false }) {
  const reducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <Canvas
      camera={{ position: [0, 0, 6.6], fov: 45 }}
      dpr={[1, compact ? 1.5 : 2]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={40} color={ACCENT} />
      <pointLight position={[-5, -3, 2]} intensity={30} color={SOFT} />
      <Core reducedMotion={reducedMotion} />
      <Network compact={compact} reducedMotion={reducedMotion} />
      {!reducedMotion && <Sparkles count={compact ? 30 : 60} scale={8} size={2} speed={0.3} color={ACCENT} opacity={0.5} />}
    </Canvas>
  );
}
