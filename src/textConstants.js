// Home
export const name = "Theodosis Karataris";
export const role = "Front end developer";

// About
export const aboutTitle = "About me";
export const getAboutText = () => (
  <>
    Hi! I am a 20-year-old passionate software developer from Greece who is
    interested in <br />
    <span className="shinyText">Front End Development</span>
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
  "I am a self-taught software developer from Greece. I started my journey in 2020 learning the basics of HTML, CSS and Javascript as well as some Back End logic. I decided to move on to Front End Developement in the summer of 2021 when I started studying a very reputable Front End library called React.js. That's how I got my very first front-end development position and this helped me improve as a developer. I have gained a lot of new knowledge, not just in Javascript but in many other tools, such as Git, Figma and many more.";
export const skills = [
  "Javascript",
  "Typescript",
  "React.js",
  "Redux",
  "React Testing",
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
