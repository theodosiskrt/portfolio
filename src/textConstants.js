// Home
export const name = "Theodosis Karataris";
export const role = "Software Engineer";

// About
export const aboutTitle = "About me";
export const getAboutText = () => (
  <>
    Hi! I am a 23-year-old passionate software developer from Greece who is
    interested in <br />
    <span className="shinyText">Software Engineering</span>
    <br /> as well as <br />
    <span className="shinyText">Mobile and Desktop Design.</span>
    <br /> I am constantly looking for the next brain-stimulating project.
    Always excited to work with new frameworks and tools.
    <br />
    Obsessed with designing and developing perfectly optimized applications with
    clean and readable code.
  </>
);
export const downloadCVButtonText = "Download CV";

// Background
export const backgroundTitle = "Background";
export const skillsTitle = "Skills";
export const backgroundText =
  "As a 23-year-old software engineer, I began my studies at the University of West Attica, where I built a strong foundation in technology. However, I made the deliberate decision to leave before graduating in order to pursue hands-on, real-world experience that better matched my learning style and career ambitions. Since then, I have thrived in both startup and established teams, delivering clean, maintainable code and collaborating closely with colleagues to create visually appealing, user-friendly applications. I am a fast learner who enjoys taking on new challenges, and I am eager to bring my technical skills and enthusiasm to a team that values innovation and continuous growth.";
export const skills = [
  "Javascript",
  "Typescript",
  "React.js",
  "Redux",
  "React Testing Library",
  "Material UI",
  "Plotly",
  "Figma",
  "Express.js",
  "MongoDB",
  "Git",
];

// Projects
export const projectsTitle = "Projects";
export const projects = [
  {
    name: "Score Counter",
    description:
      "This is a simple score counter I created using Typescript, my very first Typescript project.",
    url: "https://github.com/theodosiskrt/Score-Counter-Typescript",
  },
  {
    name: "Graph",
    description:
      "This is a simple plot application I created using Plotly and Material UI, as well as redux for the management of some parts of the state.",
    url: "https://github.com/theodosiskrt/Graph",
  },
  {
    name: "Peterest",
    description:
      "This is a CRUD application where you can create an account and upload posts/images of your pets! Since authorization is included, you have to be signed in to create a post. You have to be the author of a post in order to delete or edit it.",
    url: "https://github.com/theodosiskrt/Peterest",
  },
  {
    name: "Delivery App User Flow",
    description: "This is a user flow design for an imaginary delivery app.",
    url: "https://github.com/theodosiskrt/Delivery-App-User-Flow",
  },
  {
    name: "Social Media Backend",
    description:
      "This is a social media Back-End-Only application with minimal Front-End so that you can use it on your browser. You can create an account, create posts, reply to posts, reply to replies, send/accept/delete friend requests and see your friends' posts only!",
    url: "https://github.com/theodosiskrt/social-media-backend/tree/main/social-media-backend",
  },
];
export const projectButtonText = "Source Code";
export const notSelProjectDesc = "Select a project to view its details";

// Contact
export const contactTitle = "Contact";
export const sendEmailText = "Email Me!";
export const sendEmailHref = "mailto: karataristheodosis@gmail.com";
