import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like HTML, CSS, JS, and React JS, as well as back-end technologies like Node.js, MySQL, MongoDB, and Express.js.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have honed my skills in front-end technologies like HTML, CSS, JS, and React JS, as well as back-end technologies like Node.js, MySQL, MongoDB, and Express.js. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active and exploring new technologies. I continuously seek opportunities to expand my knowledge and skill set."`;

export const EXPERIENCES = [
  {
    year: "2021 - Present",
    stream: "Bachelor of Engineering in Computer Science and Technology(CST)",
    college: "Narula Institute of technology(NIT)",
    description: `I am a 4th-year student at Narula Institute of Technology, pursuing a B.Tech in Computer Science and Technology. I will complete my B.Tech course in 2025.`,
    completed: "2021-2025 Pursuing",
    technologies: ["Btech", "MAKAUT(Autonomous)", "CGPA-8.5(till 5th sem)"],
  },
  {
    year: "2013 - 2021",
    stream: "Science",
    college: "Dum Dum Kishore Bharati High School",
    description: `I completed my schooling (10th and 12th) from Dum Dum Kishore Bharati High School. I scored 79% in 10th and 81% in 12th.`,
    completed: "2013-2021 Completed",
    technologies: ["Class 12th", "WBCHSE", "2021", "Percentage-81%"],
  },
];

export const PROJECTS = [
  {
    title: "EatsOnWheels",
    link: "https://food-delivery-frontend-zrfy.onrender.com",
    image: project1,
    description:
      "Build a fully authenticated food delivery website for ordering some foods with conditional searching.Use React JS and CSS to create the structure and design of the frontend page and admin panel.Use Node.js and Express to create the backend and the project's APIs.Integrated payment gateway with stripe. Use MongoDB Atlas to store all details of the ordered products and user information.",
    technologies: ["React Js", "Node.js", "MongoDB atlas", "Express.js"],
  },
  {
    title: "VidTube",
    link: "https://bubai-009.github.io/vidtube/",
    image: project2,
    description:
      "Build a fully functional website to show some recently popular videos on YouTube.Developed and designed using HTML, CSS, React.js, react-router-dom, and the moment package provided by node.js.",
    technologies: ["HTML", "CSS", "React.js", "React-router-dom"],
  },
  {
    title: "News App",
    link: "https://github.com/bubai-009/news-app2",
    image: project3,
    description:
      "Build a functional news website to show recent news, including technology-related news, business-related news, and sports-related news.Developed and designed using HTML, BOOSTRAP, React.js.",
    technologies: ["HTML", "Bootstrap", "Js", "React.js"],
  },
  {
    title: "Weather App",
    link: "https://bubai-009.github.io/weather-app/",
    image: project4,
    description:
      "Build a weather website to show the current temperature of a particular place. Use HTML, CSS, and JavaScript to make this beautiful website, and also utilize a weather API.",
    technologies: ["HTML", "CSS", "Js"],
  },
];
