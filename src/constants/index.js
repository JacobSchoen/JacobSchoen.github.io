import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  angular,
  vueJs,
  reactjs,
  tailwind,
  git,
  docker,
  colsa,
  millennium,
  ludem,
  port,
  construction,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web App Developer",
    icon: web,
  },
  {
    title: "Vue.js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Wannabe Game Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Vue JS",
    icon: vueJs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer II",
    company_name: "Millennium Corporation",
    icon: millennium,
    iconBg: "#E6DEDD",
    date: "Nov 2020 - Present",
    points: [
      "Front-end engineer on event planning and management web app using Vue.js and Golang postgreSQL tech stack.",
      "Expeditiously develop engineering prototypes to pitch as solutions to client needs/problems.",
      "Provide guidance and knowledge transfer to junior developers for development tasks and unit testing.",
      "Design & implement comprehensive unit tests using Vue Test Utils along with sonarqube to help increase unit test coverage on projects, overall increasing code quality and reducing code smell.",
      "Lead sprint review meetings for a cross-functional team of developers, designers, and product managers, resulting in increased alignment on project goals and improved collaboration.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "COLSA corporation",
    icon: colsa,
    iconBg: "#E6DEDD",
    date: "Feb 2019 - Nov 2020",
    points: [
      "Developed, tested, and implemented software in an Agile team environment.",
      "Contributed with team to develop and maintain a contract management software to help  streamline and improve efficiency for large user base using a Angular and C# tech stack.",
      "Used Angular framework to develop and improve user experience on the front end.",
      "Operated in a software development process that is accredited against ISO 9001 and CMMI Dev Level 3.",
      "Communicated concisely and regularly with daily stand-ups to team members. Help provide, present, and explain information professionally to clients during sprint reviews.",
      "Created REST endpoints using C# for interacting with the databases.",
    ],
  },
];

const projects = [
  {
    name: "Ludem Dare 45 entry",
    description:
      "Web-based Unity mini game that was created in 24 hour game Jam. You control a ball with shields and you try to survive by avoiding the incoming enemy balls while not letting your own ball get to large.",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "CSharp",
        color: "green-text-gradient",
      },
      {
        name: "WebGL",
        color: "pink-text-gradient",
      },
    ],
    image: ludem,
    demo_link: "https://jacobschoen.itch.io/ludum-dare-45-nothing-ball",
  },
  {
    name: "Portfolio webstie",
    description:
      "This is the site that your currently on! This was made to show off my frontend skills and software development life cycle skills. It was created with react which this project is the first time messing with that framework",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: port,
    demo_link: "https://JacobSchoen.github.io/Portfolio",
    source_code_link: "https://github.com/JacobSchoen/Portfolio",
  },
  {
    name: "A State Of Antiquity",
    description:
      "Online website I created for my wife's artwork! Has a blog and Shop that is getting its products and posts from a CMS. The shop is connected with Stripe for purchase of products. Not currently finished with development so not deployed at the moment",
    tags: [
      {
        name: "Vue",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Stripe",
        color: "green-text-gradient",
      },
      {
        name: "PrimeVue",
        color: "pink-text-gradient",
      },
      {
        name: "Sanity CMS",
        color: "orange-text-gradient",
      },
    ],
    image: construction,
    source_code_link: "https://github.com/JacobSchoen/a-state-of-antiquity-vue",
  },
];

export { services, technologies, experiences, projects };
