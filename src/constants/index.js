import {
  python,
  sql,
  canva,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  threejs,
  nids,
  movie,
  fashion,
  edu
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

const knowledges = [
  {
    title : "AI & ML Enthusiast",
    dec : "Exploring machine learning, deep learning, and NLP to create intelligent solutions."
  },
  {
    title : "Data Analysis",
    dec : "Skilled in data analysis, insight generation, and visualization for decision-making "
  },
  {
    title : "Frontend Explorer",
    dec : "Designing responsive and modern web apps using HTML, CSS, JavaScript, and React."
  },
  {
    title : "Backend Learner",
    dec : "Gaining experience with Node.js, Express, and databases to build complete applicati"
  }
]

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  
  {
    name: "Sql ",
    icon: sql,
  },
  {
    name: "figma",
    icon: figma,
  },
  
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  
  
  
];
const experience = [
  
  {
    title: "Python Full Stack Development Training",
    company_name: "QSpiders Technology, Chennai",
    iconBg: "#E6DEDD",
    date: "Mar 2025 - Jul 2025",
    points: [
      "Completed intensive hands-on training in Python, HTML, CSS, JavaScript, SQL, and Django.",
      "Developed dynamic web applications integrating frontend and backend using Django framework.",
      "Gained practical knowledge in CRUD operations, REST APIs, and responsive UI design.",
      "Collaborated in team-based projects to simulate real-world software development.",
    ],
    icon: edu,
  },
  {
    title: "B.Tech in Artificial Intelligence and Data Science",
    company_name: "Kathir College of Engineering, Coimbatore",
    iconBg: "#E6DEDD",
    date: "Dec 2021 - Aug 2025",
    points: [
      "Focused on core subjects like Deep Learning, Machine Learning, and Data Science.",
      "Completed hands-on projects including a Network Intrusion Detection System using Transformer models.",
      "Actively participated in AI workshops, hackathons, and technical events.",
      "Maintained a strong academic record with a GPA of 7.4/10.",
    ],
    icon: edu,
  },
  {
    title: "High School Education",
    company_name: "MIGROS KIDS Matric Hr Sec School, Chennai",
    iconBg: "#E6DEDD",
    date: "Jun 2017 - Mar 2019",
    points: [
      "Built early interest in programming, technology, and analytical problem-solving.",
      "Took part in school-level competitions and tech awareness programs.",
    ],
    icon: edu,
  },
  
]

const projects = [
  {
    name: "NIDS-using-Transformer ",
    description:
      "A hybrid network intrusion detection system combining packet capture, flow analysis, and Transformer-based deep learning for real-time threat detection.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Tenserflow",
        color: "green-text-gradient",
      },
      {
        name: "tinkiter",
        color: "pink-text-gradient",
      },
    ],
    image: nids,
    source_code_link: "https://github.com/mid-works/NIDS-using-Transformer",
  },
  {
    name: "Movie-Recommendation-With-Hybrid-Models",
    description:
      "A hybrid recommendation system combining matrix factorization and deep learning techniques to provide personalized movie suggestions",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "Deep Learning",
        color: "green-text-gradient",
      },
      {
        name: "Streamlit",
        color: "pink-text-gradient",
      },
      
    ],
    image: movie,
    source_code_link: "https://github.com/mid-works/Movie-Recommendation-With-Hybrid-Models",
  },
  {
    name: "Fashion-Data-Analysis",
    description:
      "A reproducible data analysis project exploring fashion trends, sales, sustainability and consumer behaviour across European countries during 2024-2025.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "Jyputer Notebook",
        color: "pink-text-gradient",
      },
    ],
    image: fashion,
    source_code_link: "https://github.com/mid-works/Fashion-Data-Analysis-2024-2025",
  },
];

export {  technologies,  projects,  knowledges, experience };