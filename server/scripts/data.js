// Portfolio data for migration
// This is a copy of the data from src/utils/data.js
export const personalData = {
  initials:"M",
  name: "Munna Kumar",
  role: "FullStack Developer",
  tagline: "Crafting beautiful, interactive web experiences",
  email: "munnakushw7@gmail.com",
  phone: "+91 6207693788",
  location: "India",
  profileImage: "./profile.png",

  education: [
  {
    year: "2018–2020",
    title: "Matriculation",
    description: "Completed 10th grade from Notre Dame Public School, Bettiah, scoring 76% in the final board examinations."
  },
  {
    year: "2020–2022",
    title: "Intermediate (PCM Stream)",
    description: "Completed higher secondary education with Physics, Chemistry, and Mathematics, scoring 81% in the final board exams."
  },
  {
    year: "2023–present",
    title: "Bachelor of Technology in Computer Science",
    description: "Pursuing B.Tech at KL University, Vijayawada, with a current CGPA of 9.55."
  }
],
  
  about: {
    description: `Detail-oriented Full Stack Developer with robust expertise in Python, JavaScript, Java, and C. Solved 155+ algorithmic
problems on LeetCode, showcasing strong analytical and problem-solving abilities. Proficient in developing scalable, secure
web applications using Django, React.js, and the MERN stack. Experienced with deploying cloud-native solutions leveraging
AWS services. Passionate about AI integration and cloud infrastructure, aiming to contribute meaningfully to dynamic and
innovative development teams.`,
  
    timeline : [
      {
        year:"2025",
        title:"Infosys Springboard Virtual Internship 6.0",
        description: "Artificial Intelligence Intern — Infosys Springboard (Aug 2025 – Oct 2025)Worked on the project \"AI-Powered Regulatory Compliance Checker\", focusing on leveraging AI models to automate and streamline compliance verification processes.Gained hands-on experience in applying various machine learning and AI techniques, collaborating within a team environment, and managing end-to-end project development — from model selection to deployment and testing.Strengthened skills in AI integration, teamwork, and problem-solving through real-world project exposure.Selected for the Infosys Springboard Virtual Internship starting on 25th August 2025 in the AI domain. Looking forward to gaining hands-on experience in artificial intelligence, contributing to innovative projects, and enhancing my technical and problem-solving skills."

      },
       {
        year: "2025",
        title: "AWS AI and ML Virtual Internship(Eduskills)",
        description: "Built and deployed a cost-optimization ML model on AWS SageMaker, reducing cloud resource expenses by 18% Designed automated ETL pipelines using AWS Lambda and Step Functions, processing over 10,000 records daily Enhanced model accuracy from 82% to 94% through advanced feature engineering."
      },
      {
        year: "2024",
        title: "Social Internship(HealthCare and Safety Domain)",
        description: "Analyzed health data for 50+ households to identify trends driving strategic resource planning Automated reporting tasks using Python scripts, saving 15+ manual work hours per week Boosted community engagement by 25% via targeted outreach and awareness campaigns."
      },
     
      
    ],
    

},

  projects: [
    {
      id: 1,
      title: "Real Time Chat Application",
      description: "A real-time chat application with user authentication and message history",
      image: "./chat.png",
      tags: ["React", "Node.js", "MongoDB", "Full Stack","Socket.io"],
      liveUrl: "#",
      githubUrl: "https://github.com/MunnaKumar32990/Chat-App",
      details: " • Engineered a real-time chat platform supporting 100+ concurrent users with Socket.io integration"
    },

    {
      id: 2,
      title: "AI-Notes Summarizer and Sharer",
      description: "Full Stack Project Using Flask And Groq (AI-powered meeting notes summarizer and sharer)",
      image: "./image.png",
      tags: ["Flask", "Groq","JavaScript","HTML","CSS"],
      liveUrl: "https://ai-powered-meeting-notes-summarizer-and-2ocg.onrender.com/",
      githubUrl: "https://github.com/MunnaKumar32990/AI-powered-meeting-notes-summarizer-and-sharer",
      details: "Full Stack Project Using Flask And Groq (AI-powered meeting notes summarizer and sharer)."
    },
    {
      id: 3,
      title: "AI-Powered Resume Builder",
      description: "An AI-driven resume builder that generates personalized resumes based on user input",
      image: "./airesume.png",
      tags: ["React", " Node.js", "OpenAI API ","Express", "Puppeteer"],
      liveUrl: "#",
      githubUrl: "https://github.com/MunnaKumar32990/AI-Resume-Builder",
      details: "Developed an AI-powered resume builder that generates personalized resumes using OpenAI API, enhancing user experience with automated content generation and formatting."
    },
    {
      id: 4,
      title: "Employee Management System",
      description: "A comprehensive employee management system with role-based access control",
      image: "./employee.png",
      tags: ["React", "node.js", "Express", "MongoDB", "Redux","jwt","Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/MunnaKumar32990/EmployeeManagementSystem",
      details: " Developed a full-stack employee management system with role-based access control, enabling efficient management of employee data and permissions."
    }
  ],

  skills: {
    frontend: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "HTML/CSS", level: 98 },
      { name: "Tailwind CSS", level: 92 }
    ],
    backend: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "REST APIs", level: 85 }
    ],
    tools: [
      { name: "Git", level: 90 },
      { name: "Webpack", level: 75 },
      { name: "Docker", level: 65 },
      { name: "AWS", level: 60 }
    ]
  },

  certifications: [
  {
    id: 1,
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "2025",
    image: "Azure.png",
    link: "https://learn.microsoft.com/en-in/users/munnakumar-8573/credentials/10d6c69351d85c67",
    category: "cloud"
  },
   {
    id: 2,
    title: "Oracle Certified AI Associate",
    issuer: "Oracle",
    date: "2025",
    image: "oracle.png",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=66863C11D088D857F5A035EAB49C0FFE6306273CDDAF76F36B925937FA0402DB",
    category: "ai"

  },
   {
    id: 3,
    title: "Salesforce Certified AI Associate",
    issuer: "Salesforce",
    date: "2024",
    image: "salesforce.png",
    link: "https://trailhead.salesforce.com/en/credentials/verification/",
    category: "ai"

  },
  {
    id: 4,
    title: "NPTEL Programming in Java",
    issuer: "NPTEL",
    date: "2024",
    image: "java.png",
    link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS105S55570014204153920",
    category: "development"
  },
  {
    id: 5,
    title: "NPTEL Operating System Fundamentals",
    issuer: "NPTEL",
    date: "2024",
    image: "os.png",
    link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS108S65570197204153920",
    category: "computer-science"
  },
  {
    id: 6,
    title: "LinguaSkill English Language Proficiency",
    issuer: "Cambridge University Press",
    date: "2024",
    image: "lingua.png",
    link: "https://results.linguaskill.com/home",
    category: "language"
  },
 

],


  codingPlatforms: [
    {
      name: "GitHub",
      username: "munnakumar32990",
      stats: "48+ repositories",
      icon: "Github",
      url: "https://github.com/munnakumar32990"
    },
    {
      name: "LeetCode",
      username: "munnakumar",
      stats: "189+ problems solved",
      icon: "Code",
      url: "https://leetcode.com/u/KLU2300032990/"
    },
    {
      name: "HackerRank",
      username: "munnakumar",
      stats: "Gold badge",
      icon: "Trophy",
      url: "https://www.hackerrank.com/profile/h2300032990"
    },
    {
      name: "Codeforces",
      username: "munna_kumar",
      icon: "Zap",
      url: "https://codeforces.com/profile/KLU2300032990"
    },
    {
      name: "CodeChef",
      username: "munnakumar32990",
      stats: "1-star rating",
      icon: "Code",
      url: "https://www.codechef.com/users/kl2300032990"
    },

    {
      name: "Spoj",
      username: "munnakumar32990",
      stats: "1-star rating",
      icon: "Code",
      url: "https://www.spoj.com/users/kl2300032990"
    },
  ]
};

