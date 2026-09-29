import caremindImg from "@/assets/project-caremind.jpg";
import smsImg from "@/assets/project-sms.jpg";
import eduportfolioImg from "@/assets/project-eduportfolio.jpg";
import moviesImg from "@/assets/project-movies.jpg";
import automotiveImg from "@/assets/project-automotive.jpg";
import blockchainImg from "@/assets/project-blockchain.jpg";
import resumeAsset from "@/assets/resume.pdf.asset.json";

export const profile = {
  name: "Sai Srinivas Patibandla",
  shortName: "Sai Srinivas",
  role: "Aspiring Software Developer",
  rolesLine: "Fresher | Full-Stack Developer | Backend Developer | AI/ML Builder",
  intro:
    "Computer Science (AI & ML) graduate with hands-on project experience across the .NET ecosystem, Java/Spring Boot, full-stack development, Python, AI/ML, REST APIs, databases, and modern software engineering practices. Passionate about building practical, scalable applications and exploring AI-powered solutions.",
  aboutText: [
    "Sai Srinivas Patibandla is a B.Tech Computer Science (AI & ML) graduate with hands-on project experience across .NET, Java/Spring Boot, Python, machine learning, full-stack development, APIs, databases, and AI/LLM technologies.",
    "He is interested in technical and developer-oriented IT roles and is focused on applying his development knowledge to real-world software problems.",
  ],
  tagline: "Building Practical Software with Modern Technology",
  rotatingPhrases: [
    "Full-Stack Development",
    ".NET & Java Development",
    "Backend & API Development",
    "AI / ML Applications",
    "Always Learning. Always Building.",
  ],
  email: "ping2saas145@gmail.com",
  phone: "+91 7799224679",
  location: "Hyderabad, Telangana",
  github: "https://github.com/Sai-Developer-1405",
  linkedin: "https://www.linkedin.com/",
  resumePath: resumeAsset.url,
  resumeFileName: "SAI_SRINIVAS_PATIBANDLA_RESUME.pdf",
};

export const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Education", id: "education" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Certifications", id: "certifications" },
  { label: "Profiles", id: "profiles" },
  { label: "Contact", id: "contact" },
];

export const stats = [
  { value: "6", label: "Projects Completed" },
  { value: "10", label: "Certifications" },
  { value: "8.0", label: "CGPA (B.Tech)" },
  { value: "Fresher", label: "Seeking Opportunities" },
];

export const currentGoal = [
  "Entry-level Software Developer",
  ".NET Developer",
  "Full-Stack Developer",
  "Backend Developer",
  "Java Developer",
  "Other developer-oriented IT roles",
];

export const education = [
  {
    title: "B.Tech in Computer Science (AI & ML)",
    school: "Ace Engineering College",
    period: "2021 – 2025",
    grade: "CGPA: 8.0 / 10",
    detail:
      "Focused on computer science fundamentals, AI/ML, software development, and real-world project implementation.",
  },
  {
    title: "Intermediate (MPC)",
    school: "Tapasya Junior College",
    period: "2019 – 2021",
    grade: "90%",
    detail:
      "Completed intermediate with Mathematics, Physics and Chemistry with excellent academic performance.",
  },
];

export type SkillCategory = {
  title: string;
  icon: "code" | "box" | "globe" | "coffee" | "brain" | "database" | "cog" | "wrench" | "sparkles";
  skills: string[];
  highlights: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "code",
    skills: ["C", "Java", "C#", "Python", "OOP"],
    highlights: ["C#", "Java", "Python"],
  },
  {
    title: ".NET Ecosystem",
    icon: "box",
    skills: [".NET", ".NET Core", "ASP.NET Core", "MVC", "Web API", "ADO.NET", "Entity Framework", "LINQ"],
    highlights: [".NET", "ASP.NET Core", "Web API", "Entity Framework"],
  },
  {
    title: "Web Development",
    icon: "globe",
    skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "React.js"],
    highlights: ["React.js", "JavaScript"],
  },
  {
    title: "Java / Backend",
    icon: "coffee",
    skills: ["Spring Boot", "JUnit", "RESTful APIs"],
    highlights: ["Spring Boot", "RESTful APIs"],
  },
  {
    title: "AI / Machine Learning",
    icon: "brain",
    skills: ["ML.NET", "OpenAI API", "LLMs", "RAG", "Generative AI", "Deep Learning", "NLP", "CNN", "RNN"],
    highlights: ["OpenAI API", "LLMs", "RAG", "Generative AI"],
  },
  {
    title: "Databases",
    icon: "database",
    skills: ["SQL Server", "MySQL"],
    highlights: ["SQL Server"],
  },
  {
    title: "Software Engineering",
    icon: "cog",
    skills: ["Data Structures & Algorithms", "SDLC", "Unit Testing", "SOLID Principles", "Design Patterns", "Azure Basics"],
    highlights: ["Data Structures & Algorithms", "SOLID Principles"],
  },
  {
    title: "Tools & Platforms",
    icon: "wrench",
    skills: ["Visual Studio", "Visual Studio Code", "SQL Server Management Studio", "Eclipse", "Git", "GitHub", "Linux", "Microsoft Office"],
    highlights: ["Git", "GitHub"],
  },
  {
    title: "AI Assistants",
    icon: "sparkles",
    skills: ["ChatGPT", "Microsoft Copilot", "Gemini", "Claude"],
    highlights: ["ChatGPT", "Claude"],
  },
];

export type Project = {
  id: string;
  title: string;
  short: string;
  filters: string[];
  image: string;
  tech: string[];
  overview: string;
  features: string[];
  architecture?: string[];
  repo: string;
  disclaimer?: string;
  highlightNote?: string;
};

export const projectFilters = [".NET", "Java", "Full Stack", "AI / ML", "Python", "Blockchain", "Backend", "Database"];

export const projects: Project[] = [
  {
    id: "care-mind-ai-healthcare-platform",
    title: "CARE-MIND AI Healthcare Platform",
    short:
      "A healthcare management API with role-based access for patients, doctors, and admins — appointments, medical records, medications, and AI assistance.",
    filters: [".NET", "Backend", "Database", "AI / ML"],
    image: caremindImg,
    tech: [
      "C#", ".NET 10", "ASP.NET Core Web API", "Entity Framework Core", "SQL Server",
      "JWT Authentication", "OpenAI API", "Docker", "xUnit", "GitHub Actions",
    ],
    overview:
      "CARE-MIND is a .NET 10 Web API project designed to manage healthcare operations efficiently. It provides role-based access with features for patient management, doctor management, appointment scheduling, medical records, medications, and AI-powered assistance.",
    features: [
      "Admin, Doctor, and Patient roles with JWT-secured access",
      "Patient and doctor management",
      "Appointment scheduling",
      "Medical records and medications",
      "AI assistance and AI-powered visit preparation",
      "Database migrations with Entity Framework Core",
      "Automated testing with xUnit",
      "Docker Compose and CI integration",
    ],
    architecture: [
      "Layered API / Domain / Infrastructure architecture",
      "Global exception handling",
      "Health checks",
      "Audit logging",
      "JWT authentication and authorization pipeline",
      "Docker Compose for local orchestration",
    ],
    repo: "https://github.com/Sai-Developer-1405/CARE-MIND-AI-HEALTHCARE-PLATFORM",
    disclaimer:
      "This is an educational software project. The AI assistant is not a substitute for professional medical care.",
  },
  {
    id: "student-management-system",
    title: "Student Management System",
    short:
      "A desktop academic-management application for student records, courses, registrations, and grades with persistent MySQL storage.",
    filters: [".NET", "Database"],
    image: smsImg,
    tech: ["C#", "WinForms", ".NET Framework", "MySQL", "Visual Studio"],
    overview:
      "A desktop application built with C# and Windows Forms for managing academic operations — students, courses, registrations, performance, and grades — backed by a persistent MySQL database.",
    features: [
      "Student information management",
      "Course management",
      "Registration handling",
      "Academic performance tracking",
      "Grade management",
      "Full CRUD operations",
      "Persistent database storage",
      "Reusable C# database-access components",
    ],
    repo: "https://github.com/Sai-Developer-1405/STUDENT_MANAGEMENT_SYSTEM",
  },
  {
    id: "eduportfolio-vision-hub",
    title: "EduPortfolio Vision Hub",
    short:
      "A role-based student portfolio and project-monitoring platform for admins, teachers, and students with authentication and progress tracking.",
    filters: ["Java", "Full Stack", "Database"],
    image: eduportfolioImg,
    tech: [
      "Spring Boot", "Java", "Spring Security", "Hibernate", "MySQL", "JSP", "JSTL",
      "HTML", "CSS", "Bootstrap", "React", "Maven",
    ],
    overview:
      "A role-based student portfolio and project-monitoring platform involving admin/institution, teacher, and student workflows with authentication, authorization, and database-backed CRUD operations.",
    features: [
      "Admin / institution workflows",
      "Teacher workflows and feedback",
      "Student workflows",
      "Authentication and authorization",
      "Project and portfolio management",
      "Project-progress tracking",
      "Responsive UI",
      "Database-backed workflows",
    ],
    highlightNote:
      "Reported improvements: faster data access, reduced faculty review workload, and reduced navigation time.",
    repo: "https://github.com/Sai-Developer-1405/EDUPORTFOLIO-VISION-HUB",
  },
  {
    id: "digital-movie-ticket-portal",
    title: "Digital Movie Ticket Portal",
    short:
      "A full-stack movie ticket booking platform with Spring Boot REST APIs, seat availability, booking validation, and a responsive React interface.",
    filters: ["Java", "Full Stack", "Backend", "Database"],
    image: moviesImg,
    tech: ["Java", "Spring Boot", "Spring MVC / REST", "Spring Data JPA", "H2 Database", "ReactJS", "HTML", "CSS", "Bootstrap"],
    overview:
      "A full-stack ticket booking platform that covers movie browsing, theatre browsing, show management, and an end-to-end online booking workflow, backed by a layered Spring Boot architecture.",
    features: [
      "Movie browsing",
      "Theatre browsing",
      "Show management",
      "Seat availability",
      "Online ticket booking workflow",
      "Booking validation",
      "Automatic show-status handling",
      "Responsive React interface",
      "Layered backend architecture",
      "Database integration",
    ],
    repo: "https://github.com/Sai-Developer-1405/DIGITAL-MOVIE-TICKET-PORTAL",
  },
  {
    id: "automotive-anomaly-detection-system",
    title: "Automotive Anomaly Detection System",
    short:
      "An AI-powered automotive cybersecurity project detecting anomalous or intrusive activity in intra-vehicle CAN-bus communication.",
    filters: ["AI / ML", "Python"],
    image: automotiveImg,
    tech: [
      "Python", "TensorFlow", "Scikit-learn", "Keras", "NumPy", "Pandas", "OpenCV",
      "Matplotlib", "Seaborn", "Grafana", "CAN Bus", "SVM", "Social Spider Optimization",
    ],
    overview:
      "An AI-powered automotive cybersecurity project designed to detect anomalous or intrusive activity in intra-vehicle CAN-bus communication using machine-learning-based threat identification.",
    features: [
      "AI-based anomaly detection",
      "Intrusion detection",
      "CAN-bus communication analysis",
      "SVM classification",
      "Social Spider Optimization",
      "DoS / spoofing threat detection",
      "Real-time monitoring",
      "Machine-learning-based threat identification",
      "Data preprocessing",
      "Model evaluation",
    ],
    highlightNote:
      "Built on 14,000 CAN-bus records with seven attributes, multiple ML algorithms, feature selection, and multiple evaluation metrics.",
    repo: "https://github.com/Sai-Developer-1405/AUTOMOTIVE-ANOMALY-DETECTION-SYSTEM",
  },
  {
    id: "blockchain-organ-donation-system",
    title: "Securing Organ Donation Using Blockchain",
    short:
      "A decentralized application concept using smart contracts, IPFS storage, and Ethereum to keep donor records secure and verifiable.",
    filters: ["Blockchain", "Backend", "Full Stack"],
    image: blockchainImg,
    tech: [
      "HTML", "CSS", "JavaScript", "Node.js", "Express.js", "Ethereum", "Solidity",
      "Smart Contracts", "IPFS", "Web3.js", "Truffle", "Ganache",
    ],
    overview:
      "A decentralized application concept focused on securing the organ donation process using blockchain-backed transparency, smart contracts, and decentralized storage.",
    features: [
      "Secure donor records",
      "Recipient verification",
      "Organ matching",
      "Smart contracts",
      "Blockchain-backed transparency",
      "Tamper-resistant information",
      "Real-time verification",
      "Decentralized storage through IPFS",
      "Ethereum development",
    ],
    repo: "https://github.com/Sai-Developer-1405/BLOCKCHAIN-DONATION-FRAMEWORK",
  },
];

export const certifications = [
  { name: "MePro English Level 10", issuer: "Pearson", date: "Jan 2025" },
  { name: "Java SE 8 Programmer", issuer: "Oracle", date: "Jul 2025" },
  { name: "Full Stack Web Development", issuer: "GeeksforGeeks", date: "Oct 2025" },
  { name: "Azure Administrator Associate", issuer: "Microsoft", date: "Nov 2025" },
  { name: "Generative AI Fundamentals", issuer: "Databricks", date: "Nov 2025" },
  { name: "Azure AI Engineer Associate", issuer: "Microsoft", date: "Nov 2025" },
  { name: "C# Foundational Certification", issuer: "freeCodeCamp", date: "Jan 2026" },
  { name: "SQL Associate Certification", issuer: "DataCamp", date: "Aug 2026" },
  { name: "Agentic AI Certified Foundations Associate", issuer: "Oracle", date: "Aug 2026" },
  { name: "Applied Data Science Certification", issuer: "IBM", date: "Sep 2026" },
];

export const codingProfiles = [
  {
    platform: "GitHub",
    username: "Sai-Developer-1405",
    url: "https://github.com/Sai-Developer-1405",
    monogram: "GH",
    accent: "text-primary",
    ring: "ring-primary/40",
  },
  {
    platform: "GeeksforGeeks",
    username: "saideveloper145",
    url: "https://www.geeksforgeeks.org/profile/saideveloper145",
    monogram: "GfG",
    accent: "text-chart-4",
    ring: "ring-chart-4/40",
  },
  {
    platform: "LeetCode",
    username: "CodeKing666",
    url: "https://leetcode.com/u/CodeKing666/",
    monogram: "LC",
    accent: "text-chart-3",
    ring: "ring-chart-3/40",
  },
  {
    platform: "HackerRank",
    username: "saidev15",
    url: "https://www.hackerrank.com/profile/saidev15",
    monogram: "HR",
    accent: "text-chart-4",
    ring: "ring-chart-4/40",
  },
];

export const projectExperienceNote =
  "Although I am a fresher without formal industry employment experience, I have built multiple hands-on academic and personal projects across .NET, Java, full-stack development, AI/ML, blockchain, APIs, and databases.";
