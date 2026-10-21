export const profile = {
  name: 'Prabu A',
  title: 'Lead Java Full Stack Developer',
  tagline: 'I design and deliver cloud-native microservices for healthcare and financial services, from Java 21 and Spring Boot to Angular, running in production on AWS and GCP.',
  email: 'prabhuvijay28@gmail.com',
  linkedin: 'https://www.linkedin.com/in/prabhu324/',
};

export const stats = [
  { value: '10+', label: 'Years of experience' },
  { value: '4', label: 'Professional certifications' },
  { value: '2', label: 'Clouds in production (AWS, GCP)' },
  { value: '5', label: 'Companies delivered for' },
];

export const summary = [
  '10+ years of experience designing and delivering cloud-native microservices for healthcare and financial services clients, including CVS Health and Fiserv.',
  'Skilled in Java 21, Spring Boot, Angular, Kafka and Resilience4j, with production deployments on AWS (EKS) and GCP using Docker, Kubernetes and Argo CD.',
  'Experienced in leading engineering teams through solution design, code reviews and production delivery.',
];

export const experience = [
  {
    role: 'Assistant Consultant (Lead Software Engineer)',
    company: 'Tata Consultancy Services (TCS)',
    period: 'Jan 2026 – Present',
    client: 'CVS Health · RxLink',
    stack: ['Java 21', 'Spring Boot', 'Angular', 'MongoDB', 'GCP (GKE)', 'Argo CD', 'Grafana'],
    points: [
      'Built 6+ Java 21 Spring Boot microservices that route real-time pharmacy claim transactions for a Fortune 10 U.S. PBM across 3 protocols (TCP, REST, SOAP).',
      'Connected 10+ external pharmacy, adjudication and vendor systems to RxLink, moving millions of transactions a month through one secure integration layer.',
      'Removed manual production deployments by shipping every service through Argo CD (GitOps) to Google Kubernetes Engine (GKE).',
      'Built Grafana dashboards and alerts for latency and error rates across all RxLink services.',
    ],
  },
  {
    role: 'Lead Software Engineer',
    company: 'Virtusa Consulting Services',
    period: 'Dec 2021 – Dec 2025',
    client: 'Fiserv · Payment360',
    stack: ['Java 17', 'Spring Boot 3', 'Confluent Kafka', 'Resilience4j', 'AWS EKS', 'Terraform'],
    points: [
      'Led a 4-engineer team that delivered 8+ payment microservices (bill pay, card controls) for Fiserv’s bank and credit-union clients.',
      'Held a 99.9% availability SLA through downstream outages with Resilience4j circuit breakers, retries and rate limiters.',
      'Processed 100K+ payment events a day with zero message loss using event-driven workflows on Confluent Kafka.',
      'Cut release cycles from ~2 weeks to ~2 days with GitLab CI/CD (SonarQube, Fortify, Docker) and Harness deployments to AWS EKS.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'TeleApps India Pvt. Ltd.',
    period: 'Dec 2020 – Dec 2021',
    client: 'Standard Chartered · DEWA',
    stack: ['Spring Boot', 'Solace', 'Quartz', 'ShedLock', 'Angular 8', 'Oracle'],
    points: [
      'Automated 50+ daily file exchanges with CACS and zero duplicate job runs across clustered nodes, using Solace messaging and ShedLock-guarded Quartz jobs.',
      'Built REST APIs and Angular 8 screens for a voice-driven post-call survey serving DEWA’s 1M+ customer base.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Spinebiz Services Pvt. Ltd.',
    period: 'Sep 2018 – Dec 2020',
    client: 'VFS Tasheel · Onevasco',
    stack: ['Java 11', 'Spring Boot', 'Spring Security', 'Angular 8', 'MySQL', 'AWS'],
    points: [
      'Moved 10+ visa services online by rebuilding a static site as a Spring Boot, Spring Security and Angular 8 platform on AWS.',
    ],
  },
  {
    role: 'Developer',
    company: 'SolvEdge Enabling Technology',
    period: 'May 2016 – Aug 2018',
    client: 'Stryker · RippleCare',
    stack: ['Spring MVC', 'Thymeleaf', 'JSF', 'jQuery', 'Tomcat'],
    points: [
      'Delivered 5+ care-plan modules for a patient engagement platform that coaches surgical patients before and after surgery.',
    ],
  },
];

export const projects = [
  {
    name: 'RxLink',
    client: 'CVS Health',
    domain: 'Healthcare · PBM',
    text: 'Enterprise integration platform connecting external pharmacies, adjudication systems and third-party vendors for real-time pharmacy transactions over TCP, REST and SOAP.',
    tags: ['Java 21', 'Spring Boot', 'GKE', 'Argo CD', 'MongoDB'],
  },
  {
    name: 'Payment360',
    client: 'Fiserv',
    domain: 'FinTech · Payments',
    text: 'Payment hub that lets bank and credit-union customers pay bills, control cards and see all their financial obligations in one place.',
    tags: ['Spring Boot 3', 'Kafka', 'Resilience4j', 'AWS EKS', 'Terraform'],
  },
  {
    name: 'Dialer – CACS Integration',
    client: 'Standard Chartered',
    domain: 'Banking · Integration',
    text: 'Reliable upstream and downstream file exchange with the collections system using Solace topics and queues and clustered scheduled jobs.',
    tags: ['Solace', 'Quartz', 'ShedLock', 'Oracle'],
  },
  {
    name: 'Onevasco',
    client: 'VFS Tasheel',
    domain: 'Government services',
    text: 'Turned a static service website into a dynamic online visa application platform with back-office workflows for the business team.',
    tags: ['Spring Boot', 'Spring Security', 'Angular 8', 'AWS'],
  },
  {
    name: 'Voice Survey',
    client: 'DEWA',
    domain: 'Utilities · CX',
    text: 'Voice-interactive feedback flow that moves callers into a voice-assisted survey right after their call.',
    tags: ['REST APIs', 'Angular 8', 'MySQL'],
  },
  {
    name: 'RippleCare',
    client: 'Stryker',
    domain: 'Healthcare · Patient engagement',
    text: 'Automated coaching, education and communication that helps patients follow pre- and post-surgical care plans.',
    tags: ['Spring MVC', 'Thymeleaf', 'JSF'],
  },
];

// Logos in the auto-scrolling strip under the hero.
export const marquee = [
  ['java', 'Java'],
  ['springboot', 'Spring Boot'],
  ['angular', 'Angular'],
  ['typescript', 'TypeScript'],
  ['kafka', 'Kafka'],
  ['docker', 'Docker'],
  ['kubernetes', 'Kubernetes'],
  ['aws', 'AWS'],
  ['gcp', 'Google Cloud'],
  ['argo', 'Argo CD'],
  ['terraform', 'Terraform'],
  ['mongodb', 'MongoDB'],
  ['oracle', 'Oracle'],
  ['redis', 'Redis'],
  ['gitlab', 'GitLab'],
  ['jenkins', 'Jenkins'],
  ['grafana', 'Grafana'],
  ['hibernate', 'Hibernate'],
  ['junit', 'JUnit 5'],
  ['postman', 'Postman'],
];

export const skillCategories = [
  { id: 'backend', label: 'Backend' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'cloud', label: 'Cloud' },
  { id: 'devops', label: 'DevOps' },
  { id: 'data', label: 'Data & Messaging' },
  { id: 'quality', label: 'Quality & Security' },
];

// Work stack: [icon, label, categories]
export const workStack = [
  ['java', 'Java 21 / 17', ['backend']],
  ['springboot', 'Spring Boot', ['backend']],
  ['spring', 'Spring Cloud', ['backend', 'cloud']],
  ['spring', 'Spring Security', ['backend', 'quality']],
  ['hibernate', 'Hibernate / JPA', ['backend', 'data']],
  ['microservices', 'Microservices', ['backend']],
  ['api', 'REST & SOAP APIs', ['backend']],
  ['resilience', 'Resilience4j', ['backend', 'quality']],
  ['angular', 'Angular', ['frontend']],
  ['typescript', 'TypeScript', ['frontend']],
  ['javascript', 'JavaScript', ['frontend']],
  ['html5', 'HTML5', ['frontend']],
  ['css3', 'CSS3', ['frontend']],
  ['bootstrap', 'Bootstrap', ['frontend']],
  ['thymeleaf', 'Thymeleaf', ['frontend']],
  ['aws', 'AWS', ['cloud']],
  ['eks', 'Amazon EKS', ['cloud', 'devops']],
  ['lambda', 'AWS Lambda', ['cloud']],
  ['gcp', 'Google Cloud', ['cloud']],
  ['gcp', 'GKE', ['cloud', 'devops']],
  ['docker', 'Docker', ['devops']],
  ['kubernetes', 'Kubernetes', ['devops']],
  ['argo', 'Argo CD', ['devops']],
  ['terraform', 'Terraform', ['devops', 'cloud']],
  ['gitlab', 'GitLab CI/CD', ['devops']],
  ['githubactions', 'GitHub Actions', ['devops']],
  ['jenkins', 'Jenkins', ['devops']],
  ['git', 'Git', ['devops']],
  ['kafka', 'Apache Kafka', ['data']],
  ['queue', 'Solace / JMS', ['data']],
  ['mongodb', 'MongoDB', ['data']],
  ['oracle', 'Oracle', ['data']],
  ['mysql', 'MySQL', ['data']],
  ['redis', 'Redis', ['data']],
  ['dynamodb', 'DynamoDB', ['data', 'cloud']],
  ['grafana', 'Grafana', ['devops', 'quality']],
  ['splunk', 'Splunk', ['devops', 'quality']],
  ['sonarqube', 'SonarQube', ['quality']],
  ['fortify', 'Fortify', ['quality']],
  ['jwt', 'OAuth 2.0 / JWT', ['quality', 'backend']],
  ['junit', 'JUnit 5', ['quality']],
  ['postman', 'Postman', ['quality']],
  ['jira', 'Jira', ['devops']],
];

export const certifications = [
  { name: 'AWS Certified Solutions Architect – Associate', issuer: 'Amazon Web Services', mark: 'AWS' },
  { name: 'Professional Cloud Developer', issuer: 'Google Cloud', mark: 'GCP' },
  { name: 'Claude Certified Developer – Foundations', issuer: 'Anthropic', mark: 'AI' },
  { name: 'Oracle Certified Associate, Java SE 8 Programmer', issuer: 'Oracle', mark: 'OCA' },
];
