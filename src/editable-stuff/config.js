// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Aditya",
  middleName: "Pratap Singh",
  lastName: "Negi",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/adityanaegi",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/adityapratapsinghnegi/",
    },
  ],
};


const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/adityanaegi.jpeg"),
  imageSize: 375,
  message:
    "My name is Aditya Pratap Singh Negi. I’m currently pursuing B.Tech in Computer Science Engineering from NIIT University. I am eager to contribute my skills and enthusiasm to tackle complex challenges and deliver exceptional user experiences. Looking for ways to extend my skillset and move up the ladder as efficient as possible.",
  resume: require("../editable-stuff/resume.pdf"),
};


const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "adityanaegi", //i.e."johnDoe12Gh"
  reposLength: 2,
  specificRepos: [""],
};


// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 80 },
    { name: "HTML/CSS", value: 65 },
    { name: "React", value: 55 },
    { name: "JavaScript", value: 50 },
    { name: "SQL", value: 65 },
    { name: "Docker", value: 49 },
    { name: "MongoDB", value: 45 },
  ],

  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION

const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for an internship opportunity as a frontend developer. If you know of any positions available, feel free to email me at",
  email: "aditya1820027@gmail.com",
};


export { navBar, mainBody, about, repos, skills, getInTouch };
