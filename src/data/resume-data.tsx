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
import { GitHubIcon, LinkedInIcon, XIcon, ScholarIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Fabian Perez",
  initials: "FP",
  location: "Bucaramanga, Colombia, GMT-5",
  locationLink: "https://www.google.com/maps/place/Bucaramanga",
  about:
  "AI researcher, i like to train deep neural nets 🧠🤖",
  summary:
    " I am a computer science student at Universidad Industrial de Santander (UIS) in Colombia. I am currently a master student in computer science. I have strong skills in software development and deep learning. My expertise across both these areas allows me to create innovative solutions by bringing them together",
  avatarUrl: Fabian.src,
  personalWebsiteUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  contact: {
    email: "nelsonfabiancs8@gmail.com",
    tel: "+573134140675",
    social: [
      {
        name: "Scholar",
        url: "https://scholar.google.com/citations?user=59gy5p8AAAAJ&hl=en",
        icon: ScholarIcon
      },
      {
        name: "GitHub",
        url: "https://github.com/Factral",
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
      degree: "MSc(s) Computer Science",
      start: "2025",
      end: "2027?",
    },
    {
      school: "University of Delaware",
      degree: "Summer Research Program",
      start: "June 2025",
      end: "August 2025",
    },
    {
      school: "King Abdullah University of Science and Technology",
      degree: "Research Internship",
      start: "September 2024",
      end: "February 2025",
    },
    {
      school: "Universidad Industrial de Santander",
      degree: "BSc Computer Science",
      start: "2020",
      end: "2024",
    }
  ],
  skills: [
    "Deep Learning",
    "Privacy Preserving Deep Learning",
    "Vision Transformers",
    "Generative AI",
    "Applied Machine Learning",
    "Software Development",
  ],
  papers: [
    {
      title: "Set-Based Transformer for Atmospheric Compensation in Standoff LWIR Hyperspectral Imaging",
      authors: "Fabian Perez, Nicolas Quintero, Jeferson Acevedo, Hoover Rueda-Chacón",
      conferenceTag: "IGARSS 2026 (Oral)",
      description: "A lightweight set-based deep learning framework that takes multiple radiance measurements at different standoff ranges as input and jointly estimates transmittance, atmospheric path radiance, and a shared downwelling spectrum for passive LWIR hyperspectral imaging compensation.",
      tags: ["Atmospheric Compensation", "LWIR Hyperspectral Imaging", "Transformers", "Remote Sensing"],
      pdfLink: "https://arxiv.org/pdf/2606.08324",
      previewLink: "saelwir.png",
      codeLink: "https://github.com/Factral/SAE-LWIR",
      homepageLink: "https://factral.co/SAE-LWIR/",
    },
    {
      title: "UnMix-NeRF: Spectral Unmixing Meets Neural Radiance Fields",
      authors: "Fabian Perez, Sara Rojas Martinez, Carlos Hinojosa, Hoover Rueda-Chacón, Bernard Ghanem",
      conferenceTag: "ICCV 2025",
      description: "UnMix-NeRF integrates spectral unmixing with NeRFs to enable simultaneous hyperspectral view synthesis and unsupervised material segmentation. Unlike traditional NeRFs that rely solely on RGB, our approach captures the intrinsic spectral properties of materials, allowing precise material segmentation and scene editing.",
      tags: ["Neural Radiance Fields", "Spectral Unmixing", "Hyperspectral Imaging", "Material Segmentation"],
      pdfLink: "https://www.arxiv.org/pdf/2506.21884",
      previewLink: "unmix.png",
      codeLink: "https://github.com/factral/UnMix-NeRF/",
      homepageLink: "https://www.factral.co/UnMix-NeRF/",
    },
    {
      title: "Beyond Appearances: Material Segmentation with Embedded Spectral Information from RGB-D imagery",
      authors: "Fabian perez, Hoover Rueda-Chacon",
      conferenceTag: "CVPR 2024 LatinX Workshop",
      description: "Pioneered a cutting-edge deep learning framework enhancing material segmentation by embedding spectral data into RGB-D images",
      tags: ["Material Segmentation", "RGB-D imagery", "Multimodal learning"],
      pdfLink: "https://openaccess.thecvf.com/content/CVPR2024W/LXCV/papers/Perez_Beyond_Appearances_Material_Segmentation_with_Embedded_Spectral_Information_from_RGB-D_CVPRW_2024_paper.pdf",
      previewLink: "beyondapperances.png",
      codeLink: "https://github.com/Factral/Spectral-Material-Segmentation",
      homepageLink: "https://factral.co/Spectral-material-segmentation/",
    },
    {
      title: "Privacy-Preserving Deep Learning Using Deformable Operators for Secure Task Learning",
      authors: "Fabian perez, Jhon Lopez, Henry Arguello",
      conferenceTag: "ICASSP 2024",
      description: "we propose a novel Privacy-Preserving framework that uses a set of deformable operators for secure task learning. Our method involves shuffling pixels during the analog-to-digital conversion process to generate visually protected data",
      tags: ["Image Privacy", "Deformable Operators", "Computational Imaging"],
      pdfLink: "https://arxiv.org/pdf/2404.05828",
      previewLink: "privdl.png",
      codeLink: "https://github.com/Factral/PrivDL",
      homepageLink: "http://factral.co/PrivDL/",
    },
    // Add more paper objects as needed
  ],
  projects: [
    {
      title: "Lineas Hospitalarias web",
      techStack: [
        "React",  "TailwindCSS", "Firebase"
      ],
      description: "A platform for the management of products and services of the entity",
      link: {
        label: "demo vercel",
        href: "https://biomedical-unab.vercel.app/",
      },
    },
    {
      title: "SkyWatch App",
      techStack: [
        "Flutter", "Dart", "Firebase"
      ],
      description: "An app for the control of the personal and the devices installed by the company",
      link: {
        label: "demo web",
        href: "https://sky-watch-app.web.app/",
      },
    },
    {
      title: "Segmentation of wounds",
      techStack: [
        "Pytorch", "Deep Learning", "Computer Vision"
      ],
      description: "A project for the segmentation of wounds in images",
      link: {
        label: "github repo",
        href: "https://github.com/Factral/segmentacion-automatica-de-heridas",
      },
    },
    {
      title: "Image stitching with superglue",
      techStack: [
        "Stitching", "Feature Matching", "Computer Vision"
      ],
      description: "Robust image stitching that leverages advanced feature matching techniques to achieve high-quality results",
      link: {
        label: "github repo",
        href: "https://github.com/Factral/image-stitching-supeglue",
      },
    },
    {
      title: "Spotify song recommender",
      techStack: [
        "Deep Learning", "API", "Tabular data"
      ],
      description: "Spotify song recommendation system based on music tastes ",
      link: {
        label: "github repo",
        href: "https://github.com/Factral/spotify-song-recommender",
      },
    },
    {
      title: "Google Translate Dark theme",
      techStack: [
        "CSS", "userstyle", "Dark theme"
      ],
      description: "A custom dark theme for Google Translate webpage",
      link: {
        label: "github repo",
        href: "https://github.com/Factral/GoogleTranslateDarkTheme",
      },
    }

  ],
  awards: [
    {
      "award": "SoccerNet Monocular Depth Estimation Challenge 2025",
      "title": "HOCV",
      "images": [
        "awards/soccernet.png"
      ],
      "description": "First place in the SoccerNet Monocular Depth Estimation Challenge 2025 presented at the CVSports Workshop during CVPR 2025",
      "homepageLink": "https://arxiv.org/pdf/2508.19182",
      "position": "First Place"
    },
    {
      "award": "Google Cloud Vertex AI Agent Builder Hackathon 2024",
      "title": "Yipao",
      "images": [
        "awards/yipao.jpg",
        "awards/yipao_model.jpg"
      ],
      "description": "Revolutionizing business intelligence with AI-driven SQL interactions. Simplify complex queries and enhance database efficiency effortlessly",
      "homepageLink": "https://devpost.com/software/yipao",
      "position": "First Place"
    },
    {
      "award": "Indra Hackday 2024",
      "title": "Hunter",
      "images": [
        "awards/hunterteam.jpeg",
        "awards/hunter.jpeg"
      ],
      "description": "Artificial Intelligence model-as-a-service tool that facilitates the process of facilitates the process of recruitment and human talent management in companies, and companies,",
      "homepageLink": "https://comunicaciones.uis.edu.co/estudiantes-uis-obtienen-el-primer-puesto-en-la-competencia-internacional-hackday-2024-de-indra/",
      "position": "First Place"
    },
    {
      "award": "AMB Geo2Code 2023",
      "title": "DeepBeauty",
      "images": [
        "awards/deepbeauty.jpeg",
        "awards/deepbeauty_amigopaula.jpg",
        "awards/deepbeauty_team.jpg"
      ],
      "description": "My favorite hackathon, a deep learning model for automatic semantic segmentation for aerial imagery in Bucaramanga ",
      "homepageLink": "https://comunicaciones.uis.edu.co/estudiantes-de-ingenieria-de-sistemas-uis-ganadores-del-hackathon-metropolitana-organizada-por-el-amb/",
      "position": "Second Place"
    },
    {
      "award": "Financiera Comultrasan Fedesoft Hackathon 2023",
      "title": "FcPay",
      "images": [
        "awards/fcpay.jpg",
        "awards/fcpay_winners.jpg",
        "awards/fcpay_expo.jpg"
      ],
      "description": "payment code creation and money management application",
      "homepageLink": "https://www.linkedin.com/posts/fedesoft_hackathon-softictransformandoindustrias-activity-7120839573647052800-UE26/?originalSubdomain=es",
      "position": "Second Place"
    }
    
    
    
  ]
} as const;
