/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

// ========== Greeting ==========
const greeting = {
  username: "Satvik Nayak",
  title: "Hi, I'm Satvik ",
  subTitle:
    "MS Computer Science @ UNC Charlotte |  Software Engineer | Software Engineer with experience building data pipelines, ML systems, and analytics solutions at scale.",
  resumeLink: "PASTE_YOUR_RESUME_LINK_HERE",
  displayGreeting: true,
};

// ========== Social Links ==========
const socialMediaLinks = {
  github: "https://github.com/Satviknayak2002",
  linkedin: "https://www.linkedin.com/in/satvik-nayak2002/",
  gmail: "satviknayak02@gmail.com",
  display: true,
};


// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "I focus on data analytics and data science workflows, working from raw datasets through analysis, visualization, and insight generation.",
  skills: [
    "I’m drawn to problems where data quality, assumptions, and interpretation matter as much as the final result.",
    "My work often involves exploring datasets, identifying meaningful patterns, and presenting findings in a way that is useful and understandable.",
    "I value thoughtful analysis over black-box results, and I aim to make data-driven conclusions easy to trust."
  ],
  softwareSkills: [],
  display: true
};

const groupedSoftwareSkills = [
  {
    title: "Core Skills",
    skills: [
      { skillName: "EDA", fontAwesomeClassname: "fas fa-search" },
      { skillName: "Data Cleaning", fontAwesomeClassname: "fas fa-broom" },
      { skillName: "Statistics", fontAwesomeClassname: "fas fa-square-root-alt" },
      { skillName: "Visualization", fontAwesomeClassname: "fas fa-chart-line" },
      { skillName: "Storytelling", fontAwesomeClassname: "fas fa-comments" }
    ]
  },
  {
    title: "Data & Technical Skills",
    skills: [
      { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
      { skillName: "R", fontAwesomeClassname: "fab fa-r-project" },
      { skillName: "SQL (MySQL)", fontAwesomeClassname: "fas fa-database" },
      { skillName: "SAS", fontAwesomeClassname: "fas fa-chart-area" },
      { skillName: "NumPy", fontAwesomeClassname: "fas fa-calculator" },
      { skillName: "Pandas", fontAwesomeClassname: "fas fa-table" },
      { skillName: "scikit-learn", fontAwesomeClassname: "fas fa-robot" },
      { skillName: "TensorFlow", fontAwesomeClassname: "fas fa-brain" },
      { skillName: "PyTorch", fontAwesomeClassname: "fas fa-fire" },
      { skillName: "Matplotlib", fontAwesomeClassname: "fas fa-chart-bar" },
      { skillName: "Seaborn", fontAwesomeClassname: "fas fa-water" },
      { skillName: "Streamlit", fontAwesomeClassname: "fas fa-window-maximize" },
      { skillName: "FastAPI", fontAwesomeClassname: "fas fa-bolt" },
      { skillName: "D3.js", fontAwesomeClassname: "fas fa-project-diagram" },
      { skillName: "GeoPandas", fontAwesomeClassname: "fas fa-globe" },
      { skillName: "LangChain", fontAwesomeClassname: "fas fa-link" },
      { skillName: "FAISS", fontAwesomeClassname: "fas fa-layer-group" }
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { skillName: "Tableau", fontAwesomeClassname: "fas fa-chart-pie" },
      { skillName: "Power BI", fontAwesomeClassname: "fas fa-chart-line" },
      { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
      { skillName: "Spark", fontAwesomeClassname: "fas fa-bolt" },
      { skillName: "Hadoop", fontAwesomeClassname: "fas fa-server" },
      { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
      { skillName: "GitHub", fontAwesomeClassname: "fab fa-github" },
      { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" }
    ]
  }
];


// Resume Section
const resumeDisplay = {
  title: "Resume",
  subtitle: "View and download my complete professional resume",
  items: [
    {
      image: require("./assets/images/resumePreview.png"), // Placeholder - update with actual resume preview image
      name: "My Resume",
      description: "Click to view and download my resume",
      link: "/Resume.pdf",
      openInNewTab: true
    }
  ],
  display: true
};

// Education Section
const bigProjects = {
  title: "Projects",
  subtitle: "A few projects that showcase end-to-end work — from raw data to usable insights.",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "PDF Assistant (Local RAG)",
      projectDesc:
        "Local RAG-powered PDF Q&A app with vector search, model selection, and a clean UI.",
      footerLink: [
        {
          name: "View Repo",
          url: "https://github.com/Satviknayak2002/RAG_LLM_PDF_Q-A"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Predicting Admission to Foreign Universities",
      projectDesc:
        "ML-driven analysis evaluating admission factors, model generalization, and data validation for predictive insights.",
      footerLink: [
        {
          name: "View Repo",
          url: "https://github.com/Satviknayak2002/Admission-Prediction-in-Foreign-Universities-using-Machine-Learning"
        }
      ]
    },
    {
      image: require("./assets/images/airbnbLogo.png"),
      projectName: "Bank Loan Status Analysis Using Data Mining Techniques",
      projectDesc:
        "Credit risk assessment processing 1M+ records, comparing classification models to balance approval rates and default risk.",
      footerLink: [
        {
          name: "View Repo",
          url: "https://github.com/Satviknayak2002/Bank-Loan-Status-Analysis-Using-Data-Mining-Techniques"
        }
      ]
    },
    {
      image: require("./assets/images/facebookLogo.png"),
      projectName: "Typing Speed Tester",
      projectDesc:
        "Web-based typing proficiency tool calculating WPM, accuracy, and time with real-time feedback and performance tracking.",
      footerLink: [
        {
          name: "View Repo",
          url: "https://github.com/Satviknayak2002/Typing-Speed-Tester"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  subTitle: "A quick snapshot of my core strengths and the tools I use day-to-day.",
  groupedSoftwareSkills,
  displayCodersrank: false
};


// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Engineer Intern",
      company: "Hackveda Limited",
      companylogo: require("./assets/images/hackvedalogo.png"),
      date: "Dec 2023 – Apr 2024",
      desc: "Built and deployed data pipelines and machine learning models for operational decisions, fraud detection, and academic performance analysis.",
      descBullets: [
        "Built and deployed a location prediction pipeline in Dataiku DSS using ensemble models to route operational decisions, achieving high-confidence predictions used by business stakeholders, reducing manual planning effort.",
        "Analyzed 500K+ anonymized banking transactions using Python (Pandas, NumPy) and SQL to engineer fraud-relevant features, enabling downstream ML models to reduce false positives and improve fraud detection effectiveness by 30%.",
        "Built predictive machine learning models in Python (Scikit-learn) on a 10,000+ record student dataset, analyzing socioeconomic and demographic factors impacting academic performance. Enhanced model accuracy by 3%, and designed data visualizations (Matplotlib, Seaborn) to present insights that informed data-driven educational policies."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on


const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "The University of North Carolina at Charlotte",
      logo: require("./assets/images/uncclogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2024 - May 2026",
      desc: "GPA: 3.77"
    },
    {
      schoolName: "Mukesh Patel School of Technology Management & Engineering, NMIMS University",
      logo: require("./assets/images/nmimslogo.png"),
      subHeader: "Bachelor of Technology in Computer Engineering",
      duration: "August 2020 - May 2024",
      desc: "GPA: 3.39"
    }
  ]
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true - Hidden until certifications are ready
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (704)299-3763",
  email_address: "satviknayak02@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  resumeDisplay,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
