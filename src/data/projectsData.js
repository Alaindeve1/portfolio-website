// Centralized projects data so both Projects and Home pages stay in sync
const projectsData = [
  {
    id: 1,
    title: "STUDENT-STAFF PORTAL",
    description: "Java Swing project to manage students and staff with database connection using XAMPP (MySQL)",
    technologies: ["Java", "Swing", "MySQL", "XAMPP"],
    image: "/assets/images/student-portal-screenshot.webp",
    fallbackImage: "/assets/images/student-portal-screenshot.png",
    githubLink: "https://github.com/Alaindeve1/java-swing-application",
    category: "backend",
  },
  {
    id: 2,
    title: "AUCTION MANAGMENT SYSTEM",
    description:
      "A fullstack project using springboot framework and java with postgreSQL to manage auctions for both buyers and sellers in a realtime environment.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Springboot",
      "Java",
      "PostgreSQL",
      "WebSocket",
    ],
    image: "/assets/images/Screenshot 2025-06-12 141855.webp",
    fallbackImage: "/assets/images/Screenshot 2025-06-12 141855.png",
    githubLink: "https://github.com/Alaindeve1/AUCTION-MANAGMENT-SYSTEM",
    category: "fullstack",
  },
  {
    id: 3,
    title: "THE FOX WEB ",
    description: "A static website using HTML, CSS, and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/assets/images/the fox.webp",
    fallbackImage: "/assets/images/the fox.png",
    githubLink: "https://github.com/Alaindeve1/the-fox-website",
    category: "frontend",
  },

  {
    id: 4,
    title: "WeatherDash App",
    description:
      "A weather dashboard app that uses OpenWeatherMap API to display current weather conditions and forecasts.",
    technologies: ["React JS", "Tailwind CSS", "openweathermap API"],
    image: "/assets/images/weatherdash1.webp",
    fallbackImage: "/assets/images/weatherdash2.png",
    githubLink: "https://github.com/Alaindeve1/frontend-intermediate-codveda",
    category: "frontend",
  },
  {
    id: 5,
    title: "Amusement Hub",
    description:
      "A scalable backend system for amusement park management developed with Node.js and Express.js. Implements RESTful API architecture with PostgreSQL database integration for efficient data persistence. Features robust server-side logic for handling attractions, visitor management, and operational workflows, demonstrating proficiency in asynchronous programming and database design.",
    technologies: ["Express.js", "Node.js", "PostgreSQL"],
    image: "/assets/images/amusement-hub2.webp",
    fallbackImage: "/assets/images/amusement-hub2.png",
    githubLink: "https://github.com/Alaindeve1/amusement-hub",
    category: "backend",
  },
  {
    id: 6,
    title: "Health-Connect",
    description:
      "An Android telehealth platform bridging rural Community Health Workers and hospital doctors through real-time WebRTC video consultations, with live patient vital sign sharing during calls. Built in Java with Firebase (Authentication, Firestore, Cloud Messaging, Crashlytics), Room Database, Retrofit, WebRTC, and Socket.IO. Follows MVVM architecture with offline-first design and background synchronization via WorkManager.",
    technologies: ["Java", "Android", "Firebase", "WebRTC", "Socket.IO", "Room Database", "Retrofit", "WorkManager", "MVVM"],
    image: "/assets/images/health-connect.png",
    fallbackImage: "/assets/images/health-connect.png",
    githubLink: "https://github.com/Alaindeve1/Telehealth-SRS-Project",
    category: "fullstack",
  },
  {
    id: 7,
    title: "AI-Enhanced SDA Community Platform",
    description:
      "A hybrid intelligent system for the Rwanda Seventh-day Adventist Union providing personalized multilingual devotionals, AI-powered prayer sentiment analysis, and smart content recommendations. Combines traditional ML (TF-IDF, cosine similarity with scikit-learn) and Google Gemini AI. Built with Python FastAPI, Spring Boot, React/Tailwind CSS, PostgreSQL, and Docker. Features an intelligent caching system achieving 70% cost reduction, MVVM-inspired separation, offline capability, and full API documentation. Deployed to Railway.",
    technologies: ["Python", "FastAPI", "Spring Boot", "React", "Tailwind CSS", "PostgreSQL", "Docker", "Google Gemini AI", "scikit-learn", "Railway"],
    image: "/assets/images/sda-platform.webp",
    fallbackImage: "/assets/images/sda-platform.png",
    githubLink: "https://github.com/Alaindeve1/AI-enhanced-sda-community-platform",
    category: "fullstack",
  },
];

export default projectsData;
