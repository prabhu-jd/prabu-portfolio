export const profile = {
  name: 'Prabu A',
  title: 'Lead Java Full Stack Developer',
  availability: 'Open to Lead & Senior Java Full Stack roles',
  tagline: 'Lead engineer building scalable, resilient microservices and integration platforms for healthcare and fintech. 10+ years shipping production systems with Java, Spring Boot, Angular and Kafka on AWS and Google Cloud.',
  email: 'prabhuvijay28@gmail.com',
  linkedin: 'https://www.linkedin.com/in/prabhu324/',
  location: 'India',
};

// Phrases the hero types out under the name.
export const roles = ['Lead Java Full Stack Developer.'];

export const stats = [
  { value: '10+', label: 'Years building enterprise software' },
  { value: '4', label: 'Professional certifications' },
  { value: '2', label: 'Cloud platforms in production' },
  { value: '5', label: "Companies I've delivered for" },
];

// "What I do" focus areas: [icon, title, text]
export const focus = [
  ['springboot', 'Microservices & APIs', 'Designing and building Java 21 / Spring Boot microservices and REST and SOAP APIs that stay fast and stable under real production load.'],
  ['api', 'Enterprise Integration', 'Connecting systems that were never designed to talk to each other, over TCP, REST, SOAP, Kafka and Solace, with secure and reliable message flows.'],
  ['kubernetes', 'Cloud & Delivery', 'Shipping to AWS EKS and Google Kubernetes Engine with Docker, Terraform, CI/CD and GitOps, so releases are routine rather than risky.'],
  ['angular', 'Full Stack & Leadership', 'Angular front ends on top of the services I build, and team leadership through solution design, code reviews and steady delivery.'],
];

export const summary = [
  "I'm Prabu A, a Lead Software Engineer at TCS. I build the backend systems behind everyday transactions: a prescription being filled, a card payment going through, a visa application being processed.",
  'My work spans Java and Spring Boot microservices, event-driven design with Kafka, enterprise integrations and Angular front ends, deployed on AWS and Google Cloud with Docker, Kubernetes and GitOps.',
  'I enjoy taking complex, messy integration problems and turning them into clear, dependable software that teams can trust in production.',
];

// Working-style cards in the About section: [title, text]
export const traits = [
  ['Reliability first', 'I design for failure: circuit breakers, retries and monitoring are part of the plan, not an afterthought.'],
  ['End-to-end ownership', 'From solution design and code to deployment and production monitoring.'],
  ['Team leadership', 'Leading engineers through design discussions, code reviews and steady, predictable delivery.'],
];

export const experience = [
  {
    role: 'Assistant Consultant (Lead Software Engineer)',
    company: 'Tata Consultancy Services (TCS)',
    period: 'Jan 2026 – Present',
    current: true,
    client: 'CVS Health · RxLink',
    stack: ['Java 21', 'Spring Boot', 'Angular', 'MongoDB', 'GCP (GKE)', 'Argo CD', 'Grafana'],
    points: [
      'Developing RxLink, a Java and Spring Boot microservices integration platform for a Fortune 10 U.S. pharmacy benefit manager, connecting external pharmacies, adjudication systems and third-party vendors.',
      'Implementing and maintaining multi-protocol integrations over TCP, REST and SOAP for reliable, secure exchange of high-volume pharmacy transactions.',
      'Designing scalable, resilient microservices for real-time transaction processing, improving interoperability, performance and maintainability.',
      'Shipping through Argo CD (GitOps) to Google Kubernetes Engine, with Grafana dashboards and alerts on latency and error rates.',
    ],
  },
  {
    role: 'Lead Software Engineer',
    company: 'Virtusa Consulting Services',
    period: 'Dec 2021 – Dec 2025',
    client: 'Fiserv · Payment360',
    stack: ['Java 17', 'Spring Boot 3', 'Confluent Kafka', 'Resilience4j', 'AWS EKS', 'Terraform'],
    points: [
      'Led a four-engineer team building Payment360 for Fiserv: 8+ payment microservices for bill pay and card controls used by bank and credit-union customers.',
      'Built resilient services with Resilience4j circuit breakers, retries and rate limiters, holding a 99.9% availability SLA through downstream outages.',
      'Designed event-driven workflows on Confluent Kafka processing 100K+ payment events a day with zero message loss.',
      'Partnered with DevOps on GitLab CI/CD (SonarQube, Fortify, Docker) and Harness deployments to AWS EKS, cutting release cycles from about two weeks to about two days.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'TeleApps India Pvt. Ltd.',
    period: 'Dec 2020 – Dec 2021',
    client: 'Standard Chartered · DEWA',
    stack: ['Spring Boot', 'Solace', 'Quartz', 'ShedLock', 'Angular 8', 'Oracle'],
    points: [
      "Built Solace publish/subscribe modules for Standard Chartered's dialer, automating 50+ daily file exchanges with the CACS collections system.",
      'Implemented cluster-safe scheduled jobs with Quartz and ShedLock, so no job ever ran twice across nodes.',
      "Designed REST APIs and Angular 8 components for DEWA's voice-driven post-call customer survey.",
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Spinebiz Services Pvt. Ltd.',
    period: 'Sep 2018 – Dec 2020',
    client: 'VFS Tasheel · Onevasco',
    stack: ['Java 11', 'Spring Boot', 'Spring Security', 'Angular 8', 'MySQL', 'AWS'],
    points: [
      "Built full-stack modules for Onevasco, turning VFS Tasheel's static service site into an online visa application platform with 10+ services.",
      'Implemented secure REST APIs with Spring Security and back-office workflows for the operations team, hosted on AWS.',
      'Resolved production issues and shipped peer-reviewed code across the front end and back end.',
    ],
  },
  {
    role: 'Developer',
    company: 'SolvEdge Enabling Technology',
    period: 'May 2016 – Aug 2018',
    client: 'Stryker · RippleCare',
    stack: ['Spring MVC', 'Thymeleaf', 'JSF', 'jQuery', 'Tomcat'],
    points: [
      "Built web modules for RippleCare, Stryker's patient engagement platform that coaches patients through pre- and post-surgical care plans.",
      'Translated functional requirements into Spring MVC, Thymeleaf and JSF components, delivering 5+ care-plan modules.',
      'Kept quality high through peer code reviews and collaborative testing.',
    ],
  },
];

// category: the uppercase label on each card; tags: [icon, label]; flow: the diagram on the card's right side.
export const projects = [
  {
    name: 'RxLink',
    client: 'CVS Health',
    category: 'Pharmacy claims integration platform',
    period: '2026 – Present',
    text: 'Lets pharmacies, claim adjudication systems and vendors exchange high-volume pharmacy transactions in real time. I build its Java 21 microservices and multi-protocol integrations.',
    points: [
      '6+ Java 21 / Spring Boot microservices handling live pharmacy transactions',
      '10+ external systems connected over TCP, REST and SOAP',
      'GitOps releases to GKE with Argo CD, watched through Grafana',
    ],
    tags: [['java', 'Java 21'], ['springboot', 'Spring Boot'], ['mongodb', 'MongoDB'], ['gcp', 'GKE'], ['argo', 'Argo CD']],
    flow: ['Pharmacies', 'RxLink Gateway', 'Adjudication & Vendors'],
    protocols: ['TCP', 'REST', 'SOAP'],
  },
  {
    name: 'Payment360',
    client: 'Fiserv',
    category: 'Digital payments hub for banks',
    period: '2023 – 2025',
    text: 'Lets bank and credit-union customers pay bills, control cards and see every obligation in one place. I led the four-engineer team building its payment microservices.',
    points: [
      '8+ payment microservices for bill pay and card controls',
      '99.9% availability, protected by circuit breakers and retries',
      '100K+ Kafka events a day with zero message loss',
    ],
    tags: [['java', 'Java 17'], ['springboot', 'Spring Boot 3'], ['kafka', 'Kafka'], ['resilience', 'Resilience4j'], ['eks', 'AWS EKS'], ['terraform', 'Terraform']],
    flow: ['Bank Apps', 'Payment APIs', 'Kafka Events', 'Billers & Cards'],
    protocols: ['REST', 'Kafka', 'AWS EKS'],
  },
  {
    name: 'Dialer – CACS Integration',
    client: 'Standard Chartered',
    category: 'Collections file integration',
    period: '2021',
    text: "Moves upstream and downstream files between the bank's dialer and its CACS collections system through Solace topics and queues. I built the publish/subscribe modules and the scheduled jobs.",
    points: [
      '50+ file exchanges automated every day',
      'Cluster-safe scheduling, so no job ever runs twice',
      'Solace topics and queues for request-response messaging',
    ],
    tags: [['springboot', 'Spring Boot'], ['queue', 'Solace'], ['oracle', 'Oracle'], ['gitlab', 'GitLab']],
    flow: ['Dialer', 'Solace Queues', 'CACS'],
    protocols: ['Solace', 'Quartz', 'ShedLock'],
  },
  {
    name: 'Voice Survey',
    client: 'DEWA',
    category: 'Voice-driven customer feedback',
    period: '2020 – 2021',
    text: 'Invites Dubai Electricity and Water Authority callers into a voice-assisted survey the moment their call ends. I built the REST APIs and the front-end survey flow.',
    points: [
      'Smooth hand-off from the call to the voice survey',
      'REST APIs and Angular screens for survey handling',
      "Built for DEWA's 1M+ customer base",
    ],
    tags: [['springboot', 'Spring Boot'], ['angular', 'Angular 8'], ['mysql', 'MySQL']],
    flow: ['Call Ends', 'Survey Prompt', 'Voice Survey', 'Feedback'],
    protocols: ['REST', 'Angular'],
  },
  {
    name: 'Onevasco',
    client: 'VFS Tasheel',
    category: 'Online visa application platform',
    period: '2019 – 2020',
    text: 'A static service website rebuilt as a platform where customers apply online for visa services, with back-office workflows for the business team. I worked full stack, from Angular screens to secured Spring Boot APIs.',
    points: [
      '10+ visa services moved online',
      'Secure REST APIs built with Spring Security',
      'Back-office workflows for the operations team, hosted on AWS',
    ],
    tags: [['java', 'Java 11'], ['springboot', 'Spring Boot'], ['angular', 'Angular 8'], ['mysql', 'MySQL'], ['aws', 'AWS']],
    flow: ['Applicants', 'Angular UI', 'Spring Boot API', 'MySQL'],
    protocols: ['REST', 'Spring Security', 'AWS'],
  },
  {
    name: 'RippleCare',
    client: 'Stryker',
    category: 'Patient engagement platform',
    period: '2017 – 2018',
    text: 'Automated coaching, education and reminders that help patients follow their care plans before and after surgery. I built care-plan modules from functional requirements.',
    points: [
      '5+ care-plan modules delivered',
      'Requirements turned into working web components',
      'Quality kept high through peer reviews and joint testing',
    ],
    tags: [['spring', 'Spring MVC'], ['thymeleaf', 'Thymeleaf'], ['javascript', 'jQuery'], ['oracle', 'SQL']],
    flow: ['Care Plan', 'Coaching Engine', 'Patients'],
    protocols: ['Spring MVC', 'JSF'],
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
  {
    name: 'AWS Certified Solutions Architect – Associate',
    short: 'AWS Solutions Architect',
    issuer: 'Amazon Web Services',
    icon: 'aws',
    level: 'Associate',
    text: 'Proves I can design AWS systems that are secure, resilient, fast and cost-aware.',
    points: ['Choosing the right compute, storage and database services', 'Designing for high availability and fault tolerance', 'Controlling access with IAM and keeping costs in check'],
    tags: ['EKS', 'EC2', 'Lambda', 'S3', 'DynamoDB', 'IAM'],
  },
  {
    name: 'Google Cloud Professional Cloud Developer',
    short: 'GCP Cloud Developer',
    issuer: 'Google Cloud',
    icon: 'gcp',
    level: 'Professional',
    text: 'Proves I can build, deploy and run cloud-native applications on Google Cloud the way Google recommends.',
    points: ['Designing scalable, highly available applications', 'Deploying to GKE and managed services', 'Monitoring, logging and tuning in production'],
    tags: ['GKE', 'Artifact Registry', 'Cloud Logging', 'Cloud Monitoring', 'IAM'],
  },
  {
    name: 'Claude Certified Developer – Foundations',
    short: 'Claude Certified Developer',
    issuer: 'Anthropic',
    icon: 'claude',
    level: 'Foundations',
    text: "Covers building real applications on Anthropic's Claude models and API.",
    points: ['Writing effective prompts for Claude', 'Integrating the Claude API into applications', 'Using AI responsibly in software'],
    tags: ['Claude API', 'Prompt Design', 'AI Integration'],
  },
  {
    name: 'Oracle Certified Associate, Java SE 8 Programmer',
    short: 'Oracle Certified Java SE 8',
    issuer: 'Oracle',
    icon: 'oracle',
    level: 'Associate',
    text: 'My foundation in core Java, certified by Oracle.',
    points: ['Object-oriented design in Java', 'Data types, operators and control flow', 'Exceptions and the core Java APIs'],
    tags: ['Java SE 8', 'OOP', 'Core APIs'],
  },
];
