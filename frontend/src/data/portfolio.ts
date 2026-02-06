export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  thumbnail: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  problem: string;
  solution: string;
  techStack: string[];
  highlights: string[];
  impact: string[];
}

export interface ProfileData {
  name: string;
  role: string;
  tagline: string;
  yearsOfExperience: number;
  about: string;
  email: string;
  github?: string;
  linkedin?: string;
  avatar: string;
}

export const profileData: ProfileData = {
  name: 'Mohamed Jamal M',
  role: 'Frontend Developer | React.js • TypeScript',
  tagline: 'Frontend Developer who transforms complex business requirements into intuitive, maintainable, and high-performing web applications using modern React-based technologies.',
  yearsOfExperience: 3,
  about: `I'm a Frontend Developer with 3 years of professional experience building large-scale, enterprise-grade web applications using React.js and TypeScript. I specialize in designing dynamic, configurable, and data-intensive UIs that translate complex business workflows into intuitive user experiences.

My experience spans across full-fledged enterprise systems including HRMS, Help Desk (Ticketing), and Material Management platforms, where I've built metadata-driven interfaces, dynamic form engines, advanced search and reporting modules, and end-to-end workflow solutions. I have strong expertise in component architecture, state management, role-based access control, bulk operations, and performance optimization.

I enjoy solving complex problems, working closely with backend and product teams, and building scalable frontend systems that are flexible, maintainable, and future-ready. Currently, I'm focused on mastering modern UI frameworks, design systems, and intelligent UI integrations to deliver polished, high-impact applications.`,
  email: 'jamalmohamed1575@gmail.com',
  github: 'https://github.com/jamal',
  linkedin: 'https://linkedin.com/in/mohamed-jamal-m-3976bb243',
  avatar: '/assets/images/Professional Image.png'
};

export const skillCategories: SkillCategory[] = [
  {
    category: 'Core Technologies',
    skills: ['React.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS']
  },
  {
    category: 'UI Frameworks & Libraries',
    skills: ['Bootstrap', 'Tailwind CSS', "Material UI", "Ant Design", "Apex Charts"]
  },
  {
    category: 'State Management & Data',
    skills: ['Redux', 'Context API', 'React Query Builder', 'React Query']
  },
  {
    category: 'Tools & Integrations',
    skills: ["VS Code", "VS Community", "MySQL Workbench", 'Excel Import Utilities', 'Schema-Based UI Rendering', 'Dynamic Form Engines', 'Python AI Chatbot Integration']
  },
  {
    category: 'Version Control',
    skills: ["TFVC (Team Foundation Version Control) in Azure", "Git/GitHub" ]
  }
];

export const projects: Project[] = [
  {
    id: 'project-1',
    name: 'HRMS (Human Resource Management System)',
    description: `A full-scale HRMS built to streamline employee lifecycle management and complex payroll operations.
Designed dynamic salary calculation using configurable wage grades, wage types, and calculation rules.
Implemented role-based access, HR document management, and employee master data handling.
Improved HR efficiency, reduced manual payroll errors, and ensured scalable business rule management.`,
    techStack: ['React.js', "TypeScript", 'JavaScript', 'Bootstrap'],
    thumbnail: "/assets/images/hrms_image.jpg"
  },
  {
    id: 'project-2',
    name: 'Material Management System',
    description: `A centralized system developed to manage material procurement, inventory, and consumption workflows.
Enabled real-time tracking of materials with structured master data and transaction history.
Implemented validations and status-based workflows to avoid stock mismatches and data inconsistency.
Helped teams improve inventory visibility, reduce wastage, and optimize operational planning.`,
    techStack: ['React.js', "TypeScript", 'JavaScript', 'Bootstrap'],
    thumbnail: '/assets/images/mms-image.jpg'
  },
  {
    id: 'project-3',
    name: 'Help Desk (Ticketing System)',
    description: `A robust ticketing platform designed to manage internal and external support requests efficiently.
Built end-to-end ticket lifecycle management including creation, assignment, priority, and resolution.
Implemented role-based dashboards, status tracking, and SLA-oriented workflows.
Enhanced issue resolution speed, accountability, and overall support transparency.`,
    techStack: ['React.js', "TypeScript", 'JavaScript', 'Bootstrap'],
     thumbnail: '/assets/images/helpdesk-image.jpg'
  }
];

export const experience: ExperienceItem[] = [
  {
    id: 'exp-1',
    title: 'HRMS (Human Resource Management System)',
    problem: 'HR operations involved multiple disconnected processes for employee management, salary calculation, performance tracking, document distribution, and reporting, leading to inefficiencies and manual overhead.',
    solution: 'Developed a comprehensive, end-to-end HRMS with modular architecture covering employee lifecycle, payroll logic, performance management, and self-service automation. The system supports dynamic workflows, role-based access, bulk operations, and intelligent data filtering.',
    techStack: ['React', 'TypeScript', "JavaScript", "HTML5 & CSS3", "Bootstrap 5", "Redux", 'React Query Builder'],
    highlights: [
      'Built employee management, dynamic salary calculation, suspension handling, accommodation management, and document distribution modules',
      'Implemented role- and user-based document upload and access control',
      'Developed a full Performance Management System with KPI owner assignment, approval flows, level generation, and KPI lifecycle management',
      'Enabled bulk employee, attendance, and payment operations via Excel imports',
      'Created advanced employee search using React Query Builder for dynamic filtering and bulk actions',
      'Built custom report generation with user-driven field and column selection',
      'Integrated a Python-based HR chatbot with drill-down conversational flow for ESS automation'
    ],
    impact: [
      'Reduced manual HR effort through automation and bulk operations',
      'Improved data accuracy and visibility across HR processes',
      'Enabled scalable HR workflows adaptable to organizational changes'
    ]
  },
  {
    id: 'exp-2',
    title: 'Help Desk (Ticketing System)',
    problem: 'Traditional ticketing systems required frequent code changes for new ticket types, fields, and workflows, slowing down operations and limiting flexibility.',
    solution: 'Built a fully metadata-driven Help Desk system where administrators can configure ticket types, fields, tabs, and workflows without code changes, enabling rapid customization and scalability.',
    techStack: ['React', 'TypeScript', "JavaScript", "HTML5 & CSS3", "Bootstrap 5", "Redux", 'Schema-Based UI Rendering', 'Dynamic Form Engine'],
    highlights: [
      'Developed a configuration engine for defining ticket types, tabs, and fields dynamically',
      'Implemented schema-based UI rendering for member profiles and ticket workflows',
      'Built metadata-driven forms and layouts for maximum flexibility',
      'Developed advanced task management with ordered, grouped, and dependency-based task execution'
    ],
    impact: [
      'Eliminated development dependency for ticket configuration changes',
      'Enabled faster onboarding of new ticket workflows',
      'Significantly improved maintainability and scalability of the system'
    ]
  },
  {
    id: 'exp-3',
    title: 'Material Management System',
    problem: 'Procurement processes were fragmented across multiple systems, making vendor comparison, audit tracking, and purchase workflows inefficient and error-prone.',
    solution: 'Developed a unified Material Management System handling end-to-end procurement workflows with data-intensive vendor management and transparent audit trails.',
    techStack: ['React', 'TypeScript', "JavaScript", "HTML5 & CSS3", "Bootstrap 5", "Redux", 'Data-Driven UI Components', 'Workflow-Based State Management'],
    highlights: [
      'Built procurement modules including Business Partner, Purchase Requisition, Enquiry, and Purchase Order workflows',
      'Developed multi-tab, data-heavy vendor management UIs handling banking, accounting, contact, and transaction data',
      'Implemented complete procurement flow with vendor comparison, lowest-bidder selection, counter offers, and audit traceability'
    ],
    impact: [
      'Streamlined procurement operations with a single unified system',
      'Improved decision-making through transparent vendor comparison',
      'Enhanced audit compliance and traceability'
    ]
  }
];
