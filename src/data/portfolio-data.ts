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
  title: 'Software Developer',
  tagline: "ICT '27 @ PDEU  |  Backend • Full Stack • Cloud & DevOps • Gen AI",
  bio: "I'm a Pre final year ICT student at PDEU who loves building products from scratch, taking full ownership and scaling them into something that lasts. I work with the MERN stack, Node.js, and RESTful APIs on the backend, and have integrated LLMs and RAG pipelines to solve problems that actually matter. I've deployed and managed infrastructure with AWS, Docker, and CI/CD pipelines, and I know what it takes to ship software that holds up in production. But engineering is only one side of me. I think in systems and products, not just code. I thrive in the chaos and uncertainty of building something from zero, obsess over the problem being solved, and naturally gravitate toward owning the full arc of a product. Whether I'm deep in a codebase or thinking through what to build and why, I bring the same drive: build things that scale, solve real problems, and actually matter.",
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
      { name: 'System Design' },
    ],
  },
  {
    category: 'Databases',
    icon: 'Database',
    skills: [{ name: 'MongoDB' }, { name: 'MySQL' }, { name: 'PostgreSQL' }],
  },
  {
    category: 'AI & Generative AI',
    icon: 'Cpu',
    skills: [
      { name: 'Large Language Models (LLMs)' },
      { name: 'RAG (Retrieval Augmented Generation)' },
      { name: 'LangChain' },
      { name: 'AWS Bedrock' },
      { name: 'Prompt Engineering' },
    ],
  },
  {
    category: 'DevOps & Cloud',
    icon: 'Network',
    skills: [
      { name: 'AWS EC2' },
      { name: 'AWS S3' },
      { name: 'AWS Lambda' },
      { name: 'AWS CloudWatch' },
      { name: 'Docker' },
      { name: 'Docker Compose' },
      { name: 'CI/CD Pipelines' },
      { name: 'Linux' },
      { name: 'Redis' },
    ],
  },
  {
    category: 'Tools & Platforms',
    icon: 'Wrench',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'GitLab' },
      { name: 'Vercel' },
      { name: 'Postman' },
    ],
  },
  {
    category: 'Core CS',
    icon: 'Sparkles',
    skills: [
      { name: 'Data Structures & Algorithms' },
      { name: 'Object-Oriented Programming (OOP)' },
      { name: 'Operating Systems' },
      { name: 'Computer Networks' },
      { name: 'DBMS' },
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
      'AI legal assistant that makes court orders understandable for everyone.',
    longDescription:
      "NyaySaar tackles one of India's biggest accessibility problems — most citizens can't understand the court orders that affect their lives. Built a custom RAG pipeline from scratch using Groq (Llama 3), Pinecone, and HuggingFace embeddings that chunks, indexes, and retrieves relevant legal context in real-time. Users can upload court documents and get plain-language summaries or ask questions conversationally — cutting analysis time from minutes to under 5 seconds.",
    techStack: [
      'Python',
      'FastAPI',
      'React',
      'Tailwind CSS',
      'Groq (Llama 3)',
      'Pinecone',
      'HuggingFace Embeddings',
      'RAG',
      'PyMuPDF',
    ],
    imageUrl: '/Nyay-Saar.png',
    githubUrl: 'https://github.com/rishabhxnandekar21/NyaySaar',
    liveUrl: '',
    featured: true,
  },

  {
    id: '2',
    title: 'VibeChat',
    description:
      'VibeChat is a real-time chat application that allows users to send and receive messages instantly in a secure environment. It is built to handle multiple active users at the same time while maintaining consistent performance.',
    longDescription:
      'VibeChat is a real-time messaging platform developed to support smooth communication between users with reliable message delivery and secure access control. During testing, the application handled over 200 concurrent users with average message latency between 150–180 ms.The system includes user authentication and protected routes to ensure secure session management. To improve performance under concurrent usage, the backend was optimized to reduce unnecessary database calls and improve response consistency.',
    techStack: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Socket.io',
      'JWT Authentication',
      'Redis',
    ],
    imageUrl: '/placeholder.svg',
    githubUrl: 'r',
    liveUrl: '',
    featured: true,
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
    role: 'SDE Intern',
    company: 'InstaPrepAI',
    companyUrl: 'https://instapreps.com/',
    duration: '2 Months',
    startDate: 'Feb 2026',
    endDate: 'April 2026',
    responsibilities: [
      'Owned and shipped 5+ full-stack features end-to-end using Next.js, Node.js, and Ruby on Rails — from system design to production deployment across core platform modules.',
      'Integrated and optimized RESTful APIs in a production environment serving 1000+ concurrent users, reducing average response latency by 20–30% through targeted backend improvements.',
      'Collaborated cross-functionally with the AI team to improve chatbot efficiency and deployed an LLM model to AWS Bedrock, supporting model hosting and inference pipelines.',
      'Managed CI/CD pipelines via GitLab CI, resolved merge conflicts across parallel branches, and maintained clean version history through active code reviews.',
    ],
    achievements: [
      'Reduced API response latency by 20 – 30% in a production system handling 1000+ concurrent users — directly improving platform performance at scale.',
      'Deployed an LLM model to AWS Bedrock in collaboration with the AI team, contributing to a measurable improvement in AI chatbot response efficiency.',
      'Gained hands-on exposure to AWS EC2, S3, Bedrock, Lambda, and CloudWatch — supporting deployment pipelines and production infrastructure monitoring.',
      'Independently managed feature branches, merge requests, and CI/CD workflows in a high-autonomy startup environment with real production impact.',
    ],
    type: 'internship',
  },

  /*
  {
    id: '2',
    role: 'Frontend Developer (Contract)',
    company: 'StartupXYZ',
    companyUrl: 'https://startupxyz.com',
    duration: '3 months',
    startDate: 'Jan 2024',
    endDate: 'Mar 2024',
    responsibilities: [
      "Led the redesign of the company's main product dashboard",
      'Implemented responsive design patterns for mobile optimization',
      'Created reusable component library using React and Storybook',
    ],
    achievements: [
      'Improved user engagement by 35% with the new dashboard design',
      'Delivered project 2 weeks ahead of schedule',
    ],
    type: 'work',
  },*/
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
      'Led a team of 40+ tech students to organize technical events, workshops, and seminars on campus. Worked closely with the team to plan and execute activities, learn new technologies together, and helped make IEEE the most active student chapter on campus during 2024–2025.',
    type: 'leadership',
  },
  {
    id: '2',
    title: 'General Secretary',
    organization: 'VGA- The filmmaking Club of PDEU',
    date: '2025-26',
    description:
      'Being part of VGA allowed me to truly follow my passion for filmmaking. As the General Secretary, I helped with the daily working of the club, coordinated with the team, and took important decisions to keep everything running smoothly. This role gave me the chance to work on creative ideas while also handling responsibilities and learning how to manage a team effectively',
    type: 'leadership',
  },
  {
    id: '3',
    title: 'Certified Full Stack Web Developer',
    organization: '100xDevs',
    date: '2025',
    description:
      'Completed an end-to-end full stack web development course covering frontend, backend, databases, and real-world project building. Gained hands-on experience in building scalable web applications from scratch.',
    type: 'certification',
  },

  /*
  {
    id: '4',
    title: 'Technical Lead - Developer Club',
    organization: 'University Developer Club',
    date: '2023 - 2024',
    description:
      'Led a team of 15 students in organizing workshops and hackathons.',
    type: 'leadership',
  },
  {
    id: '5',
    title: 'Open Source Contributor',
    organization: 'Various Projects',
    date: '2023 - Present',
    description:
      'Active contributor to open-source projects with 50+ merged pull requests.',
    type: 'volunteer',
  },*/
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
