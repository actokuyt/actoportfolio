import { Javascript } from "@mui/icons-material";
import React from "react";

export const certs = [
  {
    img: "/certs/oasis-cert.png",
    title: "Oasis Infobyte Intern",
    date: "2024-03",
  },
  {
    img: "/certs/c-cert.jpg",
    title: "SoloLearn C Certified",
    date: "2024-02",
  },
  {
    img: "/certs/python-cert.jpg",
    title: "Sololearn Python Certified",
    date: "2024-01",
  },
  {
    img: "/certs/aws-cert.png",
    title: "AWS Certified Cloud Practitioner",
    date: "Aug 2023",
  },
  {
    img: "/certs/react-cert.jpg",
    title: "Sololearn React-Redux Certified",
    date: "2023-03",
  },
  {
    img: "/certs/css-cert.jpg",
    title: "Sololearn CSS Certified",
    date: "2018-11",
  },
  {
    img: "/certs/javascript-cert.jpg",
    title: "Sololearn JavaScript Certified",
    date: "2018-10",
  },
  {
    img: "/certs/html-cert.jpg",
    title: "Sololearn HTML Certified",
    date: "2018-07",
  },
];

export const webDevProjects = [
  {
    img: "/projects/next-auth.png",
    title: "NextJs Full Stack Authentication App",
    startDate: "February 2024",
    endDate: "March 2024",
    stack:["React", "NextJS", "Tailwind", "MUI", "MongoDB", "NodeMailer", "bcryptjs", "jwt", "TypeScript" ],
    desc: "This is collab project with Hitesh Choudhary, forked from his youtube tutorial project on authentication and nextjs. I have improved the UI and added a forgotten password feature. ",
    repo: "https://github.com/hiteshchoudhary/nextjs-fullstack-auth",
    demo: "https://nextjs-fullstack-auth-neon.vercel.app/",
  },
  {
    img: "/projects/next-dashboard.png",
    title: "NextJs Full Stack Dashboard App",
    startDate: "February 2024",
    endDate: "February 2024",
    stack:["React", "NextJS", "TypeScript", "Tailwind", "clsx", "PostgreSQL", "zod", "bcryptjs", "use-debounce"  ],
    desc: "This is tutorial project from learn next.js.",
    repo: "https://github.com/actokuyt/nextjs-dashboard",
    demo: "https://nextjs-dashboard-five-mocha-30.vercel.app/",
  },
  {
    img: "/projects/node-auth.png",
    title: "NodeJs Full Stack Authentication App ",
    startDate: "February 2024",
    endDate: "February 2024",
    stack: ["HTML", "CSS", "JavaScript", "NodeJS", "ExpressJS", "bcrypt", "EJS", ],
    desc: "This is part of the four project tasks required for the completion of the Oasis Infobyte Internship. It's a simple implementation of a NodeJS based authentication system. Note this project is hosted on a free instance on render and may take a moment to load up.",
    repo: "https://github.com/actokuyt/OIBSIP/tree/master/infobyte-auth",
    demo: "https://infobyte-auth.onrender.com/",
  },
  {
    img: "/projects/todo-v3.png",
    title: "Todo App v3 ",
    startDate: "February 2024",
    endDate: "February 2024",
    stack: ["HTML", "CSS", "Javascript", "Bootstrap"],
    desc: "This is part of the four project tasks required for the completion of the Oasis Infobyte Internship. It's a simple bootstrap todo app with features to add, edit, delete and complete/uncomplete tasks. ",
    repo: "https://github.com/actokuyt/OIBSIP/tree/master/infobyte-todo-webapp",
    demo: "https://actokuyt.github.io/OIBSIP/infobyte-todo-webapp/index.html",
  },
  {
    img: "/projects/fela.png",
    title: "Tribute Web Page ",
    startDate: "February 2024",
    endDate: "February 2024",
    stack: ["HTML", "CSS",],
    desc: " This is part of the four project tasks required for the completion of the Oasis Infobyte Internship. It's a simple tribute page developed using HTML and CSS.",
    repo: "https://github.com/actokuyt/OIBSIP/tree/master/infobyte-fela-tribute",
    demo: "https://actokuyt.github.io/OIBSIP/infobyte-fela-tribute/index.html",
  },
  {
    img: "/projects/calc-v2.png",
    title: "Calculator App v2",
    startDate: "February 2024",
    endDate: "February 2024",
    stack: ["HTML", "CSS", "JavaScript", "MathJS"],
    desc: "This is part of the four project tasks required for the completion of the Oasis Infobyte Internship. It's a simple calculator app devloped using mathjs to parse the problem string.",
    repo: "https://github.com/actokuyt/OIBSIP/tree/master/infobyte-calc",
    demo: "https://actokuyt.github.io/OIBSIP/infobyte-calc/index.html",
  },
  {
    img: "/projects/todo-v2.png",
    title: "Full Stack Todo App (v2) ",
    startDate: "January 2024",
    endDate: "January 2024",
    stack: ["HTML", "CSS", "JavaScript", "NodeJS", "ExpressJS", "axios", "PostgreSQL"],
    desc: "This is a simple todo web app that allows for adding, editing, deleting, and completing/uncompleting a todo task. Note, this app has a backend and postgresql hosted on a free instance on render and might take sometime to fully load.",
    repo: "https://github.com/actokuyt/fullstack-roadmap/tree/master/crud/todo-app-v2",
    demo: "https://actokuyt.github.io/fullstack-roadmap/crud/todo-app-v2/index.html",
  },
  {
    img: "/projects/world-clock.png",
    title: "World Clock App",
    startDate: "December 2023",
    endDate: "December 2023",
    stack: ["HTML", "CSS", "JavaScript", "dayjs", "micromodal" ],
    desc: "This is a simple world clock app which displays the current time in different cities of the world. ",
    repo: "https://github.com/actokuyt/fullstack-roadmap/tree/master/npm/international-clock",
    demo: "https://actokuyt.github.io/fullstack-roadmap/npm/international-clock/index.html",
  },
  {
    img: "/projects/profiler.png",
    title: "Github Profiler App",
    startDate: "December 2023",
    endDate: "December 2023",
    stack: ["HTML", "CSS", "JavaScript", "Octokit"],
    desc: "This is a simple web app based on octokit which grabs information on a user from github. ",
    repo: "https://github.com/actokuyt/fullstack-roadmap/tree/master/npm/github-profiler",
    demo: "https://actokuyt.github.io/fullstack-roadmap/npm/github-profiler/index.html",
  },
  {
    img: "/projects/accordion.png",
    title: "Social Media Accordion Web Component  ",
    startDate: "November 2023",
    endDate: "November 2023",
    stack: ["HTML", "CSS", "JavaScript",],
    desc: "Just a simple web component for an accordion.",
    repo: "https://github.com/actokuyt/fullstack-roadmap/tree/master/javascript/social-media-accordion",
    demo: "https://actokuyt.github.io/fullstack-roadmap/javascript/social-media-accordion/index.html",
  },
  {
    img: "/projects/todo-v1.png",
    title: "Todo App v1",
    startDate: "October 2023",
    endDate: "October 2023",
    stack: ["HTML", "CSS", "JavaScript"],
    desc: " Just a simple todo web app using only javascript.",
    repo: "https://github.com/actokuyt/fullstack-roadmap/tree/master/javascript/todo-app-v1",
    demo: "https://actokuyt.github.io/fullstack-roadmap/javascript/todo-app-v1/index.html",
  },
  {
    img: "/projects/calc-v1.png",
    title: "Calculator App v1",
    startDate: "September 2023",
    endDate: "September 2023",
    stack: ["HTML", "CSS", "JavaScript"],
    desc: " A simple web based calculator app with basic functionalities.",
    repo: "https://github.com/actokuyt/fullstack-roadmap/tree/master/javascript/calculator-app",
    demo: "https://actokuyt.github.io/fullstack-roadmap/javascript/calculator-app/index.html",
  },
  {
    img: "/projects/writings.png",
    title: "Sample Web Page Clone ~ Writings",
    startDate: "August 2023",
    endDate: "August 2023",
    stack: ["HTML", "CSS",],
    desc: "A clone of a sample figma design using only html and css.",
    repo: "https://github.com/actokuyt/fullstack-roadmap/tree/master/html-css/writings",
    demo: "https://actokuyt.github.io/fullstack-roadmap/html-css/writings/index.html",
  },
  {
    img: "/projects/loading.png",
    title: "Loading Animation Web Component",
    startDate: "August 2023",
    endDate: "August 2023",
    stack: ["HTML", "CSS"],
    desc: "A simple web component for a loading animation.",
    repo: "https://github.com/actokuyt/fullstack-roadmap/tree/master/html-css/loading-animation",
    demo: "https://actokuyt.github.io/fullstack-roadmap/html-css/loading-animation/index.html",
  },
  {
    img: "/projects/cs-fyi.png",
    title: "Sample Web Page Clone ~ CS-FYI",
    startDate: "August 2023",
    endDate: "August 2023",
    stack: ["HTML", "CSS"],
    desc: "A clone of a sample figma design using on html and css. ",
    repo: "https://github.com/actokuyt/fullstack-roadmap/tree/master/html-css/csfyi",
    demo: "https://actokuyt.github.io/fullstack-roadmap/html-css/csfyi/index.html",
  },
  {
    img: "/projects/portfolio-v1.png",
    title: "Personal Portfolio Web Page (React NodeJs ExpressJs)",
    startDate: "February 2023",
    endDate: "February 2023",
    stack: ["JavaScript", "React", "Emailjs", "Animate.css", "Axios", "React-Bootstrap", "ExpressJS", "NodeJs", "Formik", "Nodemailer", "Yup", "SweetAlert2"  ],
    desc : "My previous portfolio web app based on create react app.",
    repo: "https://github.com/actokuyt/actoportfolio",
    demo: "https://actoportfolio.netlify.app/",
  },
];

export const cvProjects = [
  {
    img: "/projects/obj-detection.png",
    title: "Object Detection (Ultralytics YOLOv8)",
    startDate: "March 2024",
    endDate: "March 2024",
    stack: ["Ultralytics", "YOLOv8", "Python", "OpenCV",],
    desc: "A simple python app to detect objects in an image and count them.",
    repo: "https://github.com/actokuyt/computer-vision-bootcamp/tree/master/assignment2-obj-detection",
    demo: "",
  },
  {
    img: "/projects/img-manipulation.png",
    title: "Image and Video Manipulations (OpenCV)",
    startDate: "March 2024",
    endDate: "March 2024",
    stack: ["OpenCV", "Python"],
    desc: "A simple python app to track colors, rotate and transform images or video ",
    repo: "https://github.com/actokuyt/computer-vision-bootcamp/tree/master/assignment1-img%26vid-manipulations",
    demo: "",
  },
];

export const blogArticles = [
  {
    img: "/articles/oasis-article.png",
    title: "The Oasis Infobyte Intern Experience",
    date: "March 2024",
  },
];

export const marqueeImages = [
  {
    img: "/marquee/next.png",
    alt: "nextjs",
  },
  {
    img: "/marquee/bootstrap.png",
    alt: "bootstrap",
  },
  {
    img: "/marquee/css.png",
    alt: "css",
  },
  {
    img: "/marquee/express.png",
    alt: "express",
  },
  {
    img: "/marquee/git.png",
    alt: "git",
  },
  {
    img: "/marquee/github.png",
    alt: "github",
  },
  {
    img: "/marquee/html.png",
    alt: "html",
  },
  {
    img: "/marquee/javascript.png",
    alt: "javascript",
  },
  {
    img: "/marquee/mongodb.png",
    alt: "mongodb",
  },
  {
    img: "/marquee/mui.png",
    alt: "mui",
  },
  {
    img: "/marquee/node.png",
    alt: "node",
  },
  {
    img: "/marquee/npm.png",
    alt: "npm",
  },
  {
    img: "/marquee/postgresql.png",
    alt: "postgresql",
  },
  {
    img: "/marquee/python.png",
    alt: "python",
  },
  {
    img: "/marquee/react.png",
    alt: "react",
  },
  {
    img: "/marquee/redux.png",
    alt: "redux",
  },
  {
    img: "/marquee/tailwind.png",
    alt: "tailwind",
  },
  {
    img: "/marquee/typescript.png",
    alt: "typescript",
  },
  {
    img: "/marquee/ultralytics.png",
    alt: "ultralytics",
  },
];
