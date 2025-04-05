import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  python,
  html,
  css,
  tailwind,
  django,
  nodejs,
  mongodb,
  postgres,
  postman,
  git,
  figma,
  docker,
  taquana,
  digicraft,
  finest,
  jobit,
  tripguide,
  crime,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
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
    name: "Python",
    icon: python,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: postgres,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Taquana",
    icon: taquana,
    iconBg: "#383E56",
    date: "May 2024 - August 2024",
    points: [
      "Worked with MongoDB Atlas Charts to visually represent data for the admin dashboard.",
      "Assisted in implementing new user greeting email using nodemailer.",
      "Contributed to the development of the user interface and back-end integration.",
      "Participated in implementing MongoDB Atlas Search on the user interface.",
      "Assisted in implementing real-time notification using pusher.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Digicraft Kenya",
    icon: digicraft,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Developing and maintaining web applications using Django and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I really admire everything you are doing. Thank you for your services.",
    name: "Samwel Mathenge",
    designation: "Founder",
    company: "Digicraft",
    image: "https://digicrafts.co.ke/static/resources/img/team/portfolio.jpeg",
  },
  {
    testimonial:
      "Amazing services.",
    name: "Dotty",
    designation: "Owner",
    company: "Softlife Luxury Spa",
    image: "https://softlifespa.com/static/img/dotty.jpeg",
  },
];

const projects = [
  {
    name: "Finest",
    description:
      "A responsive web application platform that allows users to submit projects done to be reviewed by other users developed on Django, DRF, and TailwindCSS, featuring social login via Django Allauth, real-time review submissions with AJAX, and robust user authentication and rating systems.",
    tags: [
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "postgres",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "text-red-500",
      },
    ],
    image: finest,
    live_url: "https://github.com/MuliJob/finest.github.io",
    source_code_link: "https://github.com/MuliJob/finest.github.io",
  },
  {
    name: "Stylecube clothing",
    description:
      "Developed a fully functional e-commerce platform using WooCommerce, enabling easy product management, secure checkout, and seamless integration with WordPress. Leveraged CMS flexibility for content updates and provided a responsive user experience across all devices.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
          name: "woocommerce",
          color: "green-text-gradient",
      },
      {
          name: "css",
          color: "pink-text-gradient",
      },
      {
          name: "mysql",
          color: "text-yellow-500",
      },
      {
          name: "javascript",
          color: "text-orange-500",
      },
      {
          name: "php",
          color: "text-gray-300",
      },
    ],
    image: jobit,
    live_url: "https://stylecubeclothing.com/",
    source_code_link: "https://stylecubeclothing.com",
  },
  {
    name: "E-security",
    description:
      "A fully feature web application that allows citizens to report crimes to the authorities providing the location of the incidences reported and insights through heatmaps and graphs.",
    tags: [
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
          name: "mysql",
          color: "green-text-gradient",
      },
      {
          name: "bootstrap",
          color: "text-purple-500",
      },
      {
          name: "javascript",
          color: "text-yellow-500",
      },
    ],
    image: crime,
    live_url: "https://crimereportsystem.onrender.com/",
    source_code_link: "https://github.com/MuliJob/Crime_Report_System",
  },
  {
    name: "Fruitables",
    description:
      "Built a responsive e-commerce platform using Django for selling fruits and vegetables. Features include a dynamic product catalog, secure authentication, integrated payments, and an easy-to-use admin panel for product and order management. Optimized for seamless user experience across all devices.",
    tags: [
      {
        name: "javascript",
        color: "text-yellow-500",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    live_url: "https://github.com/MuliJob/fruitables",
    source_code_link: "https://github.com/MuliJob/fruitables",
  },
];

export { services, technologies, experiences, testimonials, projects };