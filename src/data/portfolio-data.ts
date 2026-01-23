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
  title: 'Full Stack Developer',
  tagline: 'ICT’27 @ PDEU | MERN • Java • Generative AI (RAG, LLMs)',
  bio: 'Pre-final year ICT student at Pandit Deendayal Energy University building scalable and reliable software systems through hands-on projects. I work across full-stack development and backend systems using MERN, Java, and RESTful APIs, and explore how Generative AI (LLMs and RAG) can be integrated into real-world applications. I enjoy solving problems involving system design, performance, and practical constraints.',
  email: 'rishabhnandekar380@gmail.com',
  phone: '+91 8878535377',
  location: 'Ahmedabad, Gujarat, India',
  avatarUrl: '/profile.jpg',
  resumeUrl: '/resume.pdf',
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
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'Next.js' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'Tailwind CSS' },
      { name: 'Redux' },
    ],
  },
  {
    category: 'Backend',
    icon: 'Server',
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'Python' },
      { name: 'Django' },
      { name: 'REST APIs' },
      { name: 'GraphQL' },
    ],
  },
  {
    category: 'Databases',
    icon: 'Database',
    skills: [
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
      { name: 'MySQL' },
      { name: 'Redis' },
      { name: 'Supabase' },
    ],
  },
  {
    category: 'DevOps & Tools',
    icon: 'Wrench',
    skills: [
      { name: 'Git' },
      { name: 'Docker' },
      { name: 'AWS' },
      { name: 'CI/CD' },
      { name: 'Linux' },
      { name: 'Vercel' },
    ],
  },
  {
    category: 'Other Skills',
    icon: 'Sparkles',
    skills: [
      { name: 'Problem Solving' },
      { name: 'Data Structures' },
      { name: 'Algorithms' },
      { name: 'Agile/Scrum' },
      { name: 'Technical Writing' },
    ],
  },
];

// ============================================
// PROJECTS
// ============================================
export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution with real-time inventory management and secure payment processing.',
    longDescription:
      'Built a comprehensive e-commerce platform featuring user authentication, product catalog management, shopping cart functionality, and integration with Stripe for secure payments. The platform includes an admin dashboard for inventory management and order tracking.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'Docker'],
    imageUrl: '/placeholder.svg',
    githubUrl: 'https://github.com/username/ecommerce',
    liveUrl: 'https://ecommerce-demo.com',
    featured: true,
  },
  {
    id: '2',
    title: 'Task Management App',
    description:
      'A collaborative project management tool with real-time updates and team collaboration features.',
    longDescription:
      'Developed a real-time task management application that enables teams to collaborate effectively. Features include drag-and-drop task boards, real-time notifications, file attachments, and progress tracking with analytics dashboard.',
    techStack: [
      'Next.js',
      'TypeScript',
      'Supabase',
      'Tailwind CSS',
      'WebSocket',
    ],
    imageUrl: '/placeholder.svg',
    githubUrl: 'https://github.com/username/taskmanager',
    liveUrl: 'https://taskmanager-demo.com',
    featured: true,
  },
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
  },
  {
    id: '4',
    title: 'Real-time Chat Application',
    description:
      'A scalable messaging platform supporting private and group conversations with file sharing.',
    longDescription:
      'Built a real-time messaging application with support for one-on-one and group chats. Features include message encryption, file and image sharing, read receipts, typing indicators, and push notifications.',
    techStack: ['React', 'Socket.io', 'Express', 'MongoDB', 'AWS S3'],
    imageUrl: '/placeholder.svg',
    githubUrl: 'https://github.com/username/chat-app',
    liveUrl: 'https://chat-demo.com',
    featured: false,
  },
];

// ============================================
// WORK EXPERIENCE
// ============================================
export const experiences: Experience[] = [
  {
    id: '1',
    role: 'Software Engineer Intern',
    company: 'Tech Innovations Inc.',
    companyUrl: 'https://techinnovations.com',
    duration: '6 months',
    startDate: 'Jun 2024',
    endDate: 'Dec 2024',
    responsibilities: [
      'Developed and maintained RESTful APIs using Node.js and Express',
      'Built responsive frontend components with React and TypeScript',
      'Collaborated with senior developers on database optimization',
      'Participated in code reviews and agile sprint planning',
    ],
    achievements: [
      'Reduced API response time by 40% through query optimization',
      'Implemented automated testing that increased code coverage by 25%',
    ],
    type: 'internship',
  },
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
  },
];

// ============================================
// ACHIEVEMENTS
// ============================================
export const achievements: Achievement[] = [
  {
    id: '1',
    title: "Dean's List - Academic Excellence",
    organization: 'State University',
    date: '2024',
    description:
      'Achieved top 5% academic standing for four consecutive semesters.',
    type: 'award',
  },
  {
    id: '2',
    title: 'First Place - Hackathon',
    organization: 'TechFest 2024',
    date: 'March 2024',
    description:
      'Won first place in a 48-hour hackathon with a team project focused on sustainability.',
    type: 'competition',
  },
  {
    id: '3',
    title: 'AWS Certified Cloud Practitioner',
    organization: 'Amazon Web Services',
    date: '2024',
    description:
      'Earned certification demonstrating foundational cloud computing knowledge.',
    type: 'certification',
  },
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
  github: 'https://github.com/alexjohnson',
  linkedin: 'https://linkedin.com/in/alexjohnson',
  leetcode: 'https://leetcode.com/alexjohnson',
  twitter: 'https://twitter.com/alexjohnson',
  email: 'mailto:alex.johnson@email.com',
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
