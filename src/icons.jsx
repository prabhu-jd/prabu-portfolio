import {
  siOpenjdk,
  siSpring,
  siSpringboot,
  siHibernate,
  siAngular,
  siTypescript,
  siJavascript,
  siHtml5,
  siCss3,
  siBootstrap,
  siThymeleaf,
  siAmazonwebservices,
  siAmazoneks,
  siAwslambda,
  siGooglecloud,
  siDocker,
  siKubernetes,
  siArgo,
  siTerraform,
  siGitlab,
  siGithubactions,
  siJenkins,
  siApachekafka,
  siMongodb,
  siOracle,
  siMysql,
  siRedis,
  siAmazondynamodb,
  siGrafana,
  siSplunk,
  siSonarqube,
  siJsonwebtokens,
  siJunit5,
  siPostman,
  siGit,
  siJira,
  siClaude,
} from 'simple-icons';

// Generic glyphs (24x24) for tools that have no brand icon.
const generic = {
  microservices: 'M3 3h7.5v7.5H3zM13.5 3H21v7.5h-7.5zM3 13.5h7.5V21H3zM13.5 13.5H21V21h-7.5z',
  api: 'M13 2 4 14h7l-1 8 9-12h-7l1-8z',
  shield: 'M12 2 4 5v6c0 5.25 3.4 9.74 8 11 4.6-1.26 8-5.75 8-11V5l-8-3z',
  queue: 'M3 5h18v3.5H3zM3 10.25h18v3.5H3zM3 15.5h18V19H3z',
};

const brand = (icon, hex) => ({ path: icon.path, hex: hex || `#${icon.hex}` });
const glyph = (name, hex) => ({ path: generic[name], hex });

export const icons = {
  java: brand(siOpenjdk, '#E76F00'),
  spring: brand(siSpring),
  springboot: brand(siSpringboot),
  hibernate: brand(siHibernate),
  microservices: glyph('microservices', '#cb2d3e'),
  api: glyph('api', '#f5a524'),
  resilience: glyph('shield', '#2f9e77'),
  angular: brand(siAngular, '#DD0031'),
  typescript: brand(siTypescript),
  javascript: brand(siJavascript, '#e3c51a'),
  html5: brand(siHtml5),
  css3: brand(siCss3),
  bootstrap: brand(siBootstrap),
  thymeleaf: brand(siThymeleaf),
  aws: brand(siAmazonwebservices, '#FF9900'),
  eks: brand(siAmazoneks),
  lambda: brand(siAwslambda),
  gcp: brand(siGooglecloud),
  docker: brand(siDocker),
  kubernetes: brand(siKubernetes),
  argo: brand(siArgo),
  terraform: brand(siTerraform),
  gitlab: brand(siGitlab),
  githubactions: brand(siGithubactions),
  jenkins: brand(siJenkins),
  kafka: brand(siApachekafka),
  queue: glyph('queue', '#00a1e0'),
  mongodb: brand(siMongodb),
  oracle: brand(siOracle),
  mysql: brand(siMysql),
  redis: brand(siRedis),
  dynamodb: brand(siAmazondynamodb),
  grafana: brand(siGrafana),
  splunk: brand(siSplunk),
  sonarqube: brand(siSonarqube),
  fortify: glyph('shield', '#2a6ebb'),
  jwt: brand(siJsonwebtokens, '#d63aff'),
  junit: brand(siJunit5),
  postman: brand(siPostman),
  git: brand(siGit),
  jira: brand(siJira),
  claude: brand(siClaude),
};

export function Icon({ name, size = 20, color, className }) {
  const icon = icons[name];
  if (!icon) return null;
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color || icon.hex}
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}
