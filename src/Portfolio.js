/* Change this file to get your personal Porfolio */
import { FaHtml5, FaCss3, FaBootstrap, FaReact, FaNodeJs, FaAws } from 'react-icons/fa';
import { DiJavascript1, DiMongodb, DiGithubBadge } from 'react-icons/di';
import { SiFirebase } from 'react-icons/si';
import { ImNpm } from 'react-icons/im';


// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};


const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/amshinde941",
  linkedin: "https://www.linkedin.com/in/amit-shinde-95b9601a3/",
  gmail: "amshinde941@gmail.com",
  resume: "https://drive.google.com/file/d/1DJXmj8-kLdOKJWlcG6sgLJ93klVQTLp1/view?usp=sharing",
};

const skillsSection = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  skills: [
    "⚡ Develop highly interactive Front end / User Interfaces for your web applications using React and React-Redux",
    "⚡ Building scalable backends using Node and Express",
    "⚡ Integration of third party services such as Firebase/ AWS / git"
  ],

  softwareSkills: [
    {
      skillName: 'html-5',
      icon: FaHtml5,
      backgroundcolor: 'rgb(227, 79, 38)'
    },
    {
      skillName: 'css3',
      icon: FaCss3,
      backgroundcolor: 'rgb(21, 114, 182)'
    },
    {
      skillName: 'JavaScript',
      icon: DiJavascript1,
      backgroundcolor: 'rgb(247, 223, 30)'
    },
    {
      skillName: 'bootstrap',
      icon: FaBootstrap,
      backgroundcolor: '#6610f2'
    },
    {
      skillName: 'reactjs',
      icon: FaReact,
      backgroundcolor: 'rgb(97, 218, 251)'
    },
    {
      skillName: 'nodejs',
      icon: FaNodeJs,
      backgroundcolor: 'rgb(51, 153, 51)'
    },
    {
      skillName: 'npm',
      icon: ImNpm,
      backgroundcolor: 'rgb(203, 56, 55)'
    },
    {
      skillName: 'firebase',
      icon: SiFirebase,
      backgroundcolor: 'rgb(255, 202, 40)'
    },
    {
      skillName: 'mongoDB',
      icon: DiMongodb,
      backgroundcolor: 'rgb(71, 162, 72)'
    },
    {
      skillName: 'aws',
      icon: FaAws,
      backgroundcolor: 'rgb(255, 153, 0)'
    },
    {
      skillName: 'git',
      icon: DiGithubBadge,
      backgroundcolor: 'black'
    }
  ],
};

// projects Page
const projects = {
  title: "Projects",
  subtitle: "MY PROJECTS",
  description: "I have also contributed to some event projects and also done some on my own. I am open for other opportunities.",
  sections: [
    {
      title: "Magnate21",
      subTitle: "contributed for front-end",
      duration: "May 2021",
      description: [
        ' Contributed for these event for developing event website.',
        ' Developed with React, React-redux',
      ],
    },
    {
      title: "Hostel accommodation system",
      subTitle: "individual project",
      link: "https://github.com/amshinde941/justay",
      linktitle: "project-git-repository",
      duration: "May-June 2021",
      description: [
        ' Developed this web site with react, react-redux and json server.',
        ' It will fetch the information of places stored in json-server.',
        " This will help people's to find place to live.",
      ],    
    },
    {
      title: "Pict Acm Student Chapter website",
      subTitle: "contributing",
      duration: "Working",
      description: [
        ' Currently working with Acm team and redeveloping official website.',
        ' Using React, React-redux, mongo dB, node-js, Gatsby, git, figma(designing).',
      ],
    },
  ]
};
const college = {
  title: "Pune Institute of Computer Technology",
  subtitle: "B.E. in Information Technology",
  alt_name: "PICT Pune",
  duration: "2019 - Present",
  marks: "FE CGPA 9.59/10",
  website_link: "http://pict.edu",
};

const webjourney = {
  title: "Web Development",
  subTitle: "React-Js | Node-Js | Firebase",
  description: "Started web development journey with HTML, CSS, JS. After that completed courses in React-Js, Node-Js.",
  certifications: [
    {
      title: "Front-End Web Development with React",
      platform: "Coursera",
      certificate_link: "https://www.coursera.org/account/accomplishments/certificate/GV8BGKZAVSVP",
    },
    {
      title: "Server-side Development with NodeJS, Express and MongoDB",
      platform: "Coursera",
      certificate_link: "https://www.coursera.org/account/accomplishments/certificate/7EVNR6QYX7LE",
    }

  ]
};
const additionals = [
  {
    title: "Programming Languages - C++, Python",
    link: "https://drive.google.com/file/d/1FIRHQkwOGf3cocdcqpizGZ26MqB4GG1u/view?usp=sharing"
  },
  {
    title: "DevOps and Cloud Automation workshop at Xenstack.",
    link: "https://drive.google.com/file/d/11fVG4AZGaRxeUhkDaPQ1v1WyooNnkMsS/view?usp=sharing"
  },
  {
    title: "UI/UX designing on figma.",
    link:""
  },
  {
    title: " Pursuing AWS educate.",
    link:""
  }
]

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    description: "I am available for new opportunities related to web development. You can message me using any of below option.",
  },
  addressSection: {
    title: "Address",
    subtitle: "SantoshNagar, Khed, Pune-410501",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 7798583871",
  },
};

export {
  settings,
  socialMediaLinks,
  skillsSection,
  projects,
  college,
  webjourney,
  additionals,
  contactPageData,
};