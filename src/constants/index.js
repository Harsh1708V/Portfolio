import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate Full Stack Web & Android developer with a knack for crafting robust and scalable applications. With 1 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js and MongoDB alongwith Android Studio as well. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Jr. Android Developer",
    company: "Trank tec",
    description: `Joined under a team in developing and maintaining android applications using Java, Kotlin. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Java", "Kotlin", "MongoDB"],
  },
];

export const PROJECTS = [
  {
    title: "Posture-Detection",
    image: project1,
    description:
      "A Realtime Posture Detection project with YOLOv5 model that detects Good Vs Bad Posture Classification.",
    technologies: ["Python", "OpenCv", "Torch", "YOLOv5", "Numpy"],
  },
  {
    title: "RealTime Device Tracker",
    image: project2,
    description:
      "An application for mapping and real-time live tracking of locations.",
    technologies: ["Node.js", "Socket.io", "Leaflet", "OpenStreetMap"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["ReactJS", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Drowsiness-Detection",
    image: project4,
    description:
      "A Project created for alerting drivers while driving if drowsiness in eyes detected.",
    technologies: ["Python", "OpenCv", "Dlib", "Numpy"],
  },
  {
    title: "Endless-Game Automation",
    image: project4,
    description:
      "A Project to automate the endless running or driving games with body gestures & hand movements.",
    technologies: ["Python", "OpenCv", "Dlib", "Numpy"],
  },
];

export const CONTACT = {
  linkedin: "https://www.linkedin.com/in/harshwaibhav1708",
  github: "https://github.com/Harsh1708V",
};
