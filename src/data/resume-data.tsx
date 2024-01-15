import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import Fabian  from "@/images/fabian.png";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Fabian Perez",
  initials: "FP",
  location: "Bucaramanga, Colombia, GMT-5",
  locationLink: "https://www.google.com/maps/place/Bucaramanga",
  about:
  "AI researcher, programmer, i like to train neural nets",
  summary:
    " I am a computer science student at Universidad Industrial de Santander (UIS) in Colombia. I am currently an undergraduate pursuing my bachelor's degree in computer science. I have strong skills in software development and deep learning. My expertise across both these areas allows me to create innovative solutions by bringing them together",
  avatarUrl: Fabian.src,
  personalWebsiteUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  contact: {
    email: "nelsonfabiancs8@gmail.com",
    tel: "+573134140675",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Factrak",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/fabianprzz/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/fabianprzz",
        icon: XIcon,
      }
    ],
  },
  education: [
    {
      school: "Universidad Industrial de Santander",
      degree: "Bachelor's Degree in Computer Science",
      start: "2020",
      end: "2024",
    },
  ],
  skills: [
    "Deep Learning",
    "Privacy Preserving Deep Learning",
    "Vision Transformers",
    "Node.js",
    "Applied Machine Learning",
    "Software Development",
  ],
  projects: [
    {
      title: "Project 1",
      techStack: [
        "React"
      ],
      description: "A web platform",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    }
  ],
} as const;
