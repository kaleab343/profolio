/* Change this file to get your personal Portfolio */

// Portfolio customized for Kaleab Zelalem

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import { ReactComponent as CppLogo } from "./assets/images/cpp_logo.svg";
import { ReactComponent as SupabaseLogo } from "./assets/images/supabase_logo.svg";
import { ReactComponent as DockerLogo } from "./assets/images/docker_logo.svg";
import { ReactComponent as KubeLogo } from "./assets/images/kubernetes_logo.svg";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Kaleab Zelalem",
  title: "Hi, I'm Kaleab",
  subTitle: emoji(
    "Computer Science graduate. Freelance full‑stack developer and systems/architecture designer building end‑to‑end solutions: web apps, Windows apps, mobile apps, and backend integrations (REST APIs, webhooks, WebSocket realtime) using JavaScript, PHP, and SQL."
  ),
  resumeLink: "https://drive.google.com/file/d/1dCwgt_gXGVx9xqG0FnkwX4yVeLAgi3qd/view?usp=drive_link", // Google Drive CV link
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "",
  linkedin: "https://www.linkedin.com/in/kaleab-zelalem-297b091b8/",
  gmail: "kaleab.lala123@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  instagram: "",
  twitter: "",
  kaggle: "",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Computer Science graduate • Full‑stack developer • Systems and architecture design",
  skills: [
    emoji("⚡ Design and implement system architecture and full end‑to‑end solutions"),
    emoji("⚡ Build web apps, Windows apps, mobile apps, REST APIs, webhooks, and WebSocket realtime services"),
    emoji("⚡ E‑commerce platforms: product listing, auth, cart, orders"),
    emoji("⚡ Develop with JavaScript, PHP, and SQL; comfortable with Python and Java"),
    emoji("⚡ Strong problem‑solving, teamwork, communication, and leadership")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon */
  softwareSkills: [
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "PHP", fontAwesomeClassname: "fab fa-php" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "Supabase", svgComponent: SupabaseLogo },
    { skillName: "C++", svgComponent: CppLogo },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Docker", svgComponent: DockerLogo },
    { skillName: "Kubernetes", svgComponent: KubeLogo },
    { skillName: "VS Code", fontAwesomeClassname: "fas fa-terminal" },
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "St. Mary’s University",
      logo: "",
      subHeader: "Bachelor of Science in Computer Science",
      duration: "Graduated: 2025",
      desc: "GPA: 3.1/4.0 — Courses covered:",
      descBullets: [
        
        "CoSc 1011 — Introduction to Computing Science (4)",
        "CoSc 1012 — Programming Fundamentals I (3)",
        "CoSc 2011 — Programming Fundamentals II (3)",
        "CoSc 2052 — Object Oriented Programming (4)",
        "CoSc 2092 — Data Structure and Algorithm Analysis (4)",
        "CoSc 3091 — Introduction to Algorithms (3)",
        "CoSc 2041 — Fundamentals of Database Systems (4)",
        "CoSc 3041 — Advanced Database Systems (4)",
        "CoSc 2031 — Data Communication and Computer Networks (3)",
        "CoSc 2034 — Network and System Administration (3)",
        "CoSc 2021 — Computer Architecture and Organization (3)",
        "CoSc 2040 — Digital Electronics and Logic Design (3)",
        "CoSc 3021 — Machine Organization and Assembly Language (2)",
        "CoSc 3022 — Operating Systems Principles and Design (4)",
        "CoSc 3112 — Introduction to Artificial Intelligence (4)",
        "CoSc 3181 — Internet Programming I (3)",
        "CoSc 3082 — Internet Programming II (3)",
        "CoSc 4083 — Mobile Application Development (3)",
        "CoSc 3052 — Rapid Application Development (4)",
        "CoSc 3102 — Automata and Complexity Theory (3)",
        "CoSc 4101 — Compiler Design (4)",
        "CoSc 4031 — Computer and Network Security (3)",
        "CoSc 3121 — Internship (2)",
        "CoSc 4121 — Senior Project I (3)",
        "CoSc 4122 — Senior Project II (3)",
        "CoSc 4131 — Selected Topics in Computer Science (3)",
        "CoSc 4132 — Comprehensive Degree Exit Exam I (3)",
        "CoSc 4133 — Comprehensive Degree Exit Exam II (3)",
        "MATH 2041 — Calculus I (4)",
        "MATH 3051 — Discrete Mathematics and Combinatorics (3)",
        "Math 2012 — Introduction to Linear Algebra (3)",
        "Math 3081 — Numerical Analysis (3)",
        "STAT 2012 — Introduction to Statistics and Probability Theory (3)",
        "EmTe 1012 — Introduction to Emerging Technologies (3)",
        "CoSc 3122 — Research Methods in Computer Science (2)"
      ]
    },
    {
      schoolName: "Menelik Secondary School",
      logo: "",
      subHeader: "Intermediate/Secondary School",
      duration: "2019 - 2020",
      desc: "Addis Ababa, Ethiopia",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Frontend", progressPercentage: "70%" },
    { Stack: "Backend", progressPercentage: "60%" },
    { Stack: "Programming", progressPercentage: "65%" }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Freelance System Architecture", // updated
      company: "Self-Employed",
      companylogo: require("./containers/assets/image/image.jpg"),
      date: "2024 – Present",
      desc: "Addis Ababa Traffic Enforcement Platform\nFull‑stack platform for traffic enforcement analytics and operations with admin portal, user portal, and PHP/MySQL backend with Supabase migration/sync.\n\nBudget Manager Mobile App\nAndroid budgeting app to track income/expenses, categories, and analytics with offline-first storage. Tech: Java, XML, SQLite.",
      descBullets: []
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false",
  display: false
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Selected work across architecture, web, and mobile",
  projects: [
    {
      image: null,
      projectName: "MicroNote - Microservices Note & Todo Application",
      projectDesc: "Revolutionary hybrid architecture combining REST + gRPC for the ultimate note-taking and todo management experience. Features real-time collaboration, enterprise-grade performance, and infinite scalability with 10x faster internal communication.",
      projectUrl: "https://github.com/kaleab343/Microservice-Implementing-Note-Todo-page-.git",
      details: `🚀 Revolutionary Hybrid Architecture - The Perfect Fusion: REST for Simplicity + gRPC for Performance
      
• 10x faster internal communication with gRPC vs traditional REST
• Real-time collaborative editing like Google Docs with live typing indicators
• Enterprise-grade security with JWT authentication and Redis session management
• Microservices mesh with Auth, Notes, Todos, and User services
• Docker containerization with comprehensive monitoring (Prometheus, Grafana, Jaeger)
• Advanced features: offline support, version history, intelligent caching, auto-scaling

Tech Stack: Docker, Node.js, React, gRPC, MySQL, Redis, WebSocket
Performance: 10x throughput improvement, 90% smaller network payloads, 70% CPU reduction`,
      footerLink: [
        { name: "Docker" },
        { name: "Node.js" },
        { name: "React" },
        { name: "gRPC" },
        { name: "MySQL" },
        { name: "Redis" },
        { name: "WebSocket" },
        { name: "View Project", url: "https://github.com/kaleab343/Microservice-Implementing-Note-Todo-page-" }
      ]
    },
    {
      image: null,
      projectName: "መላ (Mela) - Ethiopian Block Management App",
      projectDesc: "Bilingual (English/Amharic) Android application for managing electricity billing and payment calculations for residential blocks in Ethiopia. Features Ethiopian calendar integration, PDF export, and complete payment history tracking.",
      projectUrl: "https://github.com/kaleab343/energy-counter-KWH.git",
      details: `A professional Android app for Ethiopian electricity block management with bilingual support.

Features:
• Bilingual UI - Seamlessly switch between English and Amharic
• Block Management - Manage blocks 355/01 to 355/66
• Smart Calculations - Automatic electricity bills with tariff, VAT, and additional payments
• Payment History - Complete tracking with search functionality
• Ethiopian Calendar - Built-in date converter for local context
• PDF Export - Generate and export payment records
• Offline-First - SQLite database for reliable data storage

Tech Stack: Java, AndroidX, SQLite, Material Design
Target: Residential electricity billing in Ethiopia
Min SDK: 24 (Android 7.0) | Target SDK: 35 (Android 15)`,
      footerLink: [
        { name: "Java" },
        { name: "Android" },
        { name: "SQLite" },
        { name: "Material Design" },
        { name: "View Project", url: "https://github.com/kaleab343/energy-counter-KWH.git" }
      ]
    },
    {
      image: null,
      projectName: "NetWatch Pro - Network Monitoring & Management",
      projectDesc: "Professional-grade network monitoring tool with device scanning, deep traffic analysis, and router control. Features 100% traffic capture with MITM analysis, protocol detection for 20+ protocols, and real-time network visibility.",
      projectUrl: "https://github.com/kaleab343/wifi-monitor.git",
      details: `Complete network visibility and management solution for administrators.

Core Features:
• Device Discovery - Quick ARP scan, Complete NetBIOS/mDNS/SSDP discovery
• MITM Traffic Analysis - 100% packet capture in promiscuous mode
• Protocol Detection - Identifies HTTP, HTTPS, DNS, SSH, FTP, RDP, mDNS, SSDP, ARP, and more
• Router Control - Block/unblock devices via router API
• Silent Device Detection - Finds connected but inactive devices
• Real-time Monitoring - Live traffic analysis with upload/download statistics
• Custom Device Management - Rename and categorize network devices

Tech Stack: Python, Scapy, Tkinter, C++ (ARP scanner)
Security: Administrator privileges, ARP spoofing with automatic state restoration
Platform: Windows 10/11`,
      footerLink: [
        { name: "Python" },
        { name: "Scapy" },
        { name: "C++" },
        { name: "Networking" },
        { name: "Tkinter" },
        { name: "View Project", url: "https://github.com/kaleab343/wifi-monitor.git" }
      ]
    },
    {
      image: null,
      projectName: "Whistle - Traffic Reporting & Notifications",
      projectDesc: "Android application for real-time traffic reporting with WebSocket notifications, audio recording, and wanted list management. Multi-flavor build system with dev, staging, and production environments.",
      projectUrl: "https://github.com/kaleab343/traffic-app.git",
      details: `Professional Android app for traffic violation reporting and citizen engagement.

Features:
• Real-time Notifications - WebSocket-based instant alerts
• Audio Reporting - Record and upload violation reports
• Wanted List - View and manage traffic violation records
• Multi-Environment - Dev, staging, prod build flavors with separate backends
• REST API Integration - Retrofit + OkHttp + Gson for networking
• Background Services - Audio recording and notification services
• Modern UI - Material Design with ConstraintLayout

Tech Stack: Java, AndroidX, Retrofit, OkHttp, WebSocket, Gson
Architecture: Multi-flavor builds, background services, REST APIs
Min SDK: 24 | Target SDK: 35 | ProGuard optimized`,
      footerLink: [
        { name: "Java" },
        { name: "Android" },
        { name: "WebSocket" },
        { name: "Retrofit" },
        { name: "Material Design" },
        { name: "View Project", url: "https://github.com/kaleab343/traffic-app.git" }
      ]
    },
    {
      image: null,
      projectName: "Addis Ababa Traffic Enforcement Platform",
      projectDesc: "Full‑stack platform for traffic enforcement analytics and operations with admin portal, user portal, and PHP/MySQL backend with Supabase migration/sync.",
      projectUrl: "https://github.com/kaleab343/traffic-admin-center-and-custer-feedback.git",
      details: `Admin + User platform for traffic enforcement.
Admin portal provides dashboards, officer/violation management, and analytics.
User portal enables citizen login, reporting (whistles), and status tracking.
Backend services power data ingestion, reporting, and real‑time updates across mobile, web, and Windows desktop apps.
Focus: simplify enforcement workflows, unify data, and give clear insights to both administrators and citizens.`, 
      privateNotice: "This document will be public on March 30, 2026. The data is private currently.",
      footerLink: [
        { name: "Java" },
        { name: "C#" },
        { name: "Node.js" },
        { name: "PHP" },
        { name: "XML" },
        { name: "Contact for details", url: "mailto:kaleab.lala123@gmail.com" }
      ]
    },
    {
      image: null,
      projectName: "Budget Manager Mobile App",
      projectDesc: "Android budgeting app to track income/expenses, categories, and analytics with offline-first storage. Tech: Java, XML, SQLite.",
      projectUrl: "https://github.com/kaleab343/Budget-manager-.git",
      footerLink: [
        { name: "Java" },
        { name: "XML" },
        { name: "SQLite" },
        { name: "View Project", url: "https://github.com/kaleab343/Budget-manager-.git" }
      ]
    },
    {
      image: null,
      projectName: "E‑commerce Web and Mobile App",
      projectDesc: "Responsive web and mobile store: catalog, auth, cart, checkout, orders, admin. Tech: HTML, CSS, PHP, JavaScript, MySQL.",
      projectUrl: "https://github.com/kaleab343/ecommerce-web-page-.git",
      footerLink: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "PHP" },
        { name: "JavaScript" },
        { name: "MySQL" },
        { name: "View Project", url: "https://github.com/kaleab343/ecommerce-web-page-.git" }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "",
  achievementsCards: [
    {
      title: "Natural Language Processing Training",
      subtitle: "Completed training in NLP",
      image: require("./assets/images/skill.svg"),
      imageAlt: "NLP",
      footerLink: []
    }
  ],
  display: false
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks Sections

const talkSection = {
  title: "Talks",
  subtitle: emoji(""),
  talks: [],
  display: false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? I’m available in Addis Ababa.",
  number: "0932097054",
  email_address: "kaleab.lala123@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true; // Open to opportunities

// Telegram Bot configuration (fill these in to enable Telegram sending)
const telegramConfig = {
 token: "8220132078:AAGKRnRm_MTHHPOdvqZ4zoWzAxIUvBFnhWk",
 chatId: "500761652"
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
 telegramConfig
};
