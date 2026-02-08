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
    id: 6,
    title: "Amusement Hub",
    description:
      "An backend amusement hub project developed using express.js and node.js with postgresql database .",
    technologies: ["Express.js", "Node.js", "PostgreSQL"],
    image: "/assets/images/amusement-hub2.webp",
    fallbackImage: "/assets/images/amusement-hub2.png",
    githubLink: "https://github.com/Alaindeve1/amusement-hub",
    category: "backend",
  },
];

export default projectsData;
