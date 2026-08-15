// Portfolio Configuration - Edit this file to update your portfolio content
// All content is centralized here for easy maintenance

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  avatarUrl: string;
  resumeUrl: string;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  duration: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  achievements: string[];
  type: 'work' | 'internship';
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  type: 'award' | 'certification' | 'leadership' | 'competition' | 'volunteer';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl?: string;
  url?: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  leetcode: string;
  twitter?: string;
  email: string;
}

// ============================================
// PERSONAL INFORMATION
// ============================================
export const personalInfo: PersonalInfo = {
  name: 'Rishabh Nandekar',
  title: 'Software Engineer | Backend & Cloud',
  tagline: "ICT '27 @ PDEU | Backend • Full Stack • Cloud & DevOps • Gen AI",

  bio: `I got into engineering because I wanted to build things people actually use — but somewhere along the way, I got just as curious about what keeps those things running at 2 AM without falling over.\n I'm a final-year B.Tech ICT student at PDEU, building across the intersection of Software Development and DevOps/Cloud Engineering.\n I work with backend systems, full-stack applications, AWS, Docker, and CI/CD, while going deeper into Kubernetes and cloud infrastructure.\n I like understanding systems beyond the surface — not just writing features, but figuring out how they work, how they scale, and how they hold up in production.`,

  email: 'rishabhnandekar380@gmail.com',
  phone: '+91 8878535377',
  location: 'Ahmedabad, Gujarat, India',
  avatarUrl: '/profile.png',
  resumeUrl: '/rishabh_nandekar_resume.pdf',
};
// ============================================
// SKILLS
// ============================================
export const skills: SkillCategory[] = [
  {
    category: 'Frontend',
    icon: 'Monitor',
    skills: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    category: 'Backend',
    icon: 'Server',
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'Python' },
      { name: 'FastAPI' },
      //{ name: 'Ruby on Rails' },
      { name: 'REST APIs' },
      { name: 'JWT Authentication' },
      { name: 'RBAC' },
    ],
  },
  {
    category: 'Databases',
    icon: 'Database',
    skills: [
      { name: 'MongoDB' },
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
      { name: 'Redis' },
    ],
  },

  {
    category: 'Cloud & DevOps',
    icon: 'Wrench',
    skills: [
      { name: 'AWS' },
      { name: 'AWS EC2' },
      { name: 'AWS EKS' },
      { name: 'AWS S3' },
      { name: 'AWS IAM' },
      { name: 'AWS Lambda' },
      { name: 'AWS CloudWatch' },
      { name: 'Docker' },
      { name: 'Kubernetes' },
      { name: 'Helm' },
      { name: 'Terraform' },
      { name: 'Jenkins' },
      { name: 'CI/CD' },
      { name: 'GitOps' },
      { name: 'Argo CD' },
      { name: 'Prometheus/Grafana' },
    ],
  },

  {
    category: 'AI & RAG',
    icon: 'Cpu',
    skills: [
      { name: 'RAG Pipelines' },
      { name: 'LLM Applications' },
      { name: 'Vector Search' },
      { name: 'Embeddings' },
      { name: 'Pinecone' },
      { name: 'LangChain' },
      { name: 'Prompt Engineering' },
      { name: 'LLM based Retrieval Systems' },
    ],
  },

  {
    category: 'Core CS & Tools',
    icon: 'Sparkles',
    skills: [
      { name: 'Data Structures & Algorithms' },
      { name: 'Object Oriented Programming (OOP)' },
      { name: 'DBMS' },
      { name: 'Operating Systems' },
      { name: 'Computer Networks' },
      { name: 'System Design' },
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Linux' },
      { name: 'Postman' },
    ],
  },
];
// ============================================
// PROJECTS
// ============================================
export const projects: Project[] = [
  {
    id: '1',
    title: 'NyaySaar',
    description:
      'AI-powered legal document analysis platform that turns complex court orders into clear, grounded answers.',
    longDescription:
      'Built a full-stack legal document analysis platform using a retrieval-augmented generation architecture. Court PDFs are parsed and chunked, converted into HuggingFace embeddings, indexed in Pinecone, and retrieved at query time to ground summaries and conversational answers. The platform uses FastAPI and React with Groq-hosted LLM inference and supports document-based Q&A and persona-aware responses.',
    techStack: [
      'Python',
      'FastAPI',
      'React',
      'Tailwind CSS',
      'RAG',
      'Groq',
      'Llama 3',
      'Pinecone',
      'HuggingFace Embeddings',
      'PyMuPDF',
    ],
    imageUrl: '/Nyay-Saar.png',
    githubUrl: 'https://github.com/rishabhxnandekar21/NyaySaar',
    liveUrl: '',
    featured: true,
  },

  {
    id: '2',
    title: 'End to End DevSecOps Pipeline',
    description:
      'Production-style CI/CD and GitOps pipeline with automated security, Kubernetes deployments, and AWS infrastructure.',
    longDescription:
      'Designed an end-to-end DevSecOps workflow for a containerized three-tier application. Jenkins drives an 11-stage CI pipeline with GitLeaks, SonarQube, OWASP Dependency-Check, and Trivy security checks before Docker images are published. Terraform provisions AWS infrastructure including EKS, while Helm and Kubernetes manage deployments. GitOps with Argo CD separates CI from continuous delivery, enabling automated synchronization, auditable releases, and rollback through Git.',
    techStack: [
      'Jenkins',
      'Docker',
      'Kubernetes',
      'AWS EKS',
      'Terraform',
      'Helm',
      'Argo CD',
      'GitOps',
      'GitLeaks',
      'SonarQube',
      'Trivy',
      'CI/CD',
    ],
    imageUrl: '/devsecops.png',
    githubUrl:
      'https://github.com/rishabhxnandekar21/End-to-End-DevSecOps-Pipeline',
    liveUrl: '',
    featured: true,
  },

  {
    id: '3',
    title: 'SafeBridge',
    description:
      'Secure, encrypted file-transfer utility designed for private peer-to-peer file sharing.',
    longDescription:
      'Built a lightweight cross-platform file-transfer utility that encrypts files locally before transmission. SafeBridge uses AES-256 encryption, PBKDF2 with HMAC-SHA256 for password-based key derivation, and unique initialization vectors per session. The application uses Python, Tkinter, and socket-based communication to transfer files directly between sender and recipient without relying on external storage services.',
    techStack: [
      'Python',
      'Tkinter',
      'Socket Programming',
      'AES-256',
      'PBKDF2',
      'HMAC-SHA256',
      'Cryptography',
    ],
    imageUrl: '/safebridge.png',
    githubUrl:
      'https://github.com/rishabhxnandekar21/ShareBridge---A-Secure-File-Sharing-Tool',
    liveUrl: '',
    featured: false,
  },
  /*
  {
    id: '3',
    title: 'AI Content Generator',
    description:
      "An AI-powered application that generates and optimizes content using OpenAI's GPT models.",
    longDescription:
      "Created an intelligent content generation platform that leverages OpenAI's API to help users create blog posts, social media content, and marketing copy. Includes features like tone adjustment, SEO optimization, and content scheduling.",
    techStack: ['Python', 'FastAPI', 'React', 'OpenAI API', 'MongoDB'],
    imageUrl: '/placeholder.svg',
    githubUrl: 'https://github.com/username/ai-content',
    featured: true,
  },*/
];

// ============================================
// WORK EXPERIENCE
// ============================================
export const experiences: Experience[] = [
  {
    id: '1',
    role: 'Full Stack Developer Intern',
    company: 'iTech Brains',
    companyUrl: 'https://www.itechbrains.com/',
    duration: '2 Months',
    startDate: 'May 2026',
    endDate: 'Jun 2026',
    responsibilities: [
      'Built and deployed a MERN-based e-commerce platform spanning 10+ responsive pages and integrating 10+ REST APIs across authentication, product management, categories, reviews, and cart workflows.',
      'Implemented JWT authentication, protected routes, and server-side validation to secure user and product-management workflows.',
      'Developed and integrated full-stack features across the frontend and backend, taking features from implementation through deployment.',
      'Worked in an Agile, Git-based development workflow involving feature development, testing, debugging, and code review cycles.',
    ],
    achievements: [
      'Delivered a complete e-commerce application covering authentication, product management, reviews, categories, and cart functionality.',
      'Integrated 10+ REST APIs across core application workflows.',
      'Built 10+ responsive application pages using the MERN stack.',
      'Gained hands-on experience in full-stack development, API integration, authentication, and deployment.',
    ],
    type: 'internship',
  },

  {
    id: '2',
    role: 'Software Developer Intern',
    company: 'InstaPrepAI',
    companyUrl: 'https://instapreps.com/',
    duration: '3 Months',
    startDate: 'Feb 2026',
    endDate: 'Apr 2026',
    responsibilities: [
      'Redesigned the semantic retrieval pipeline for an AI chatbot using Pinecone metadata filtering to narrow candidates before vector search, reducing response time from ~4–5s to ~2–3s (~45% faster).',
      'Built a live leaderboard system across 3 categories, integrating 4 backend APIs with deduplication and top-3 filtering logic to eliminate manual winner updates.',
      'Analyzed backend performance using AWS CloudWatch logs to identify bottlenecks and improve application reliability and debuggability.',
      'Tightened IAM access policies across AWS EC2 and S3 infrastructure, improving deployment reliability and access control.',
    ],
    achievements: [
      'Reduced AI chatbot retrieval response time by approximately 45% through Pinecone metadata filtering and retrieval optimization.',
      'Automated leaderboard updates across 3 categories by integrating 4 backend APIs with filtering and deduplication logic.',
      'Gained hands-on experience with AWS EC2, S3, IAM, and CloudWatch in a production development environment.',
      'Worked across backend systems, AI retrieval, and cloud infrastructure in a real-world development environment.',
    ],
    type: 'internship',
  },
];

// ============================================
// ACHIEVEMENTS
// ============================================
export const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Vice Chairperson',
    organization: 'IEEE Computer Society PDEU',
    date: '2024-2025',
    description:
      'Led a team of 40+ tech students to organize technical events, workshops, and seminars on campus. Worked closely with the team to plan and execute activities, learn new technologies together, and helped make IEEE one of the most active student chapters on campus during 2024–2025.',
    type: 'leadership',
  },
  {
    id: '2',
    title: 'General Secretary',
    organization: 'VGA - The Filmmaking Club of PDEU',
    date: '2025-2026',
    description:
      'Helped manage the day-to-day operations of the club, coordinated with team members, and contributed to planning and executing filmmaking and cultural activities. Balanced creative work with team coordination, decision-making, and organizational responsibilities.',
    type: 'leadership',
  },
  {
    id: '3',
    title: 'Google India Tech Summit Innovate Hackathon',
    organization: 'Google India Tech Summit',
    date: '2025',
    description:
      'Selected among PDEU’s top teams to advance to the National Level, backed by the Google Student Ambassador Community.',
    type: 'achievement',
  },
  {
    id: '4',
    title: 'Cisco Campus Ambassador',
    organization: 'Cisco',
    date: '2026 - Present',
    description:
      'Representing Cisco on campus and leading student outreach and technical initiatives. Driving awareness and engagement around Cisco programs, learning opportunities, and technology initiatives among students.',
    type: 'leadership',
  },
  {
    id: '5',
    title: 'Certified Full Stack Web Developer',
    organization: '100xDevs',
    date: '2025',
    description:
      'Completed an end-to-end full stack web development course covering frontend, backend, databases, and real-world project development. Gained hands-on experience building web applications across the full development stack.',
    type: 'certification',
  },
];

// ============================================
// BLOG POSTS (Empty - Ready for future content)
// ============================================
export const blogPosts: BlogPost[] = [
  // Add blog posts here when ready
  // Example:
  // {
  //   id: "1",
  //   title: "Getting Started with React Hooks",
  //   excerpt: "A comprehensive guide to understanding and using React Hooks effectively...",
  //   category: "React",
  //   date: "2024-01-15",
  //   readTime: "5 min read",
  //   imageUrl: "/blog/react-hooks.jpg",
  //   url: "/blog/react-hooks",
  // },
];

// ============================================
// SOCIAL LINKS
// ============================================
export const socialLinks: SocialLinks = {
  github: 'https://github.com/rishabhxnandekar21',
  linkedin: 'https://www.linkedin.com/in/rishabhnandekar211',
  leetcode: 'https://leetcode.com/',
  twitter: 'https://twitter.com/',
  email: 'mailto:rishabhnandekar@gmail.com',
};

// ============================================
// NAVIGATION ITEMS
// ============================================
export const navItems = [
  { id: 'home', label: 'Home', icon: 'Home' },
  { id: 'skills', label: 'Skills', icon: 'Code' },
  { id: 'projects', label: 'Projects', icon: 'FolderOpen' },
  { id: 'experience', label: 'Experience', icon: 'Briefcase' },
  { id: 'achievements', label: 'Achievements', icon: 'Trophy' },
  { id: 'blog', label: 'Blog', icon: 'BookOpen' },
  { id: 'contact', label: 'Contact', icon: 'Mail' },
];
