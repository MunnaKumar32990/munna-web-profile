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
    description: `I’m a Full Stack Developer dedicated to building efficient, scalable, and high-quality applications. My expertise spans Python, Java, and the MERN stack (MongoDB, Express.js, React.js, Node.js), with a strong emphasis on writing clean, maintainable, and optimized code. Having solved 189+ algorithmic problems on LeetCode, I bring strong analytical and problem-solving skills to every project I undertake. I’m deeply interested in cloud technologies, AI-driven solutions, and modern development practices that enhance system performance and innovation.`,
  
    timeline : [
      {
        year:"2025",
        title:"Infosys Springboard Virtual Internship 6.0",
        description: "Artificial Intelligence Intern — Infosys Springboard (Aug 2025 – Oct 2025)Worked on the project “AI-Powered Regulatory Compliance Checker”, leveraging AI and machine learning models to automate and streamline compliance verification. Collaborated in a team environment, managing end-to-end project development from model selection to deployment and testing. Strengthened skills in AI integration, teamwork, and problem-solving through real-world project exposure as part of the Infosys Springboard Virtual Internship in the AI domain."

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
      title: "AI-Rural Voice Assistant",
      description: "Built an AI-powered voice assistant for rural Indian farmers that provides weather, crop price, and government scheme information in local dialects. AI Integration: Used OpenAI GPT-4 and Azure Speech Services for multilingual Speech-to-Text and Text-to-Speech capabilities.",
      image: "./aivoice.png",
      tags: ["Python", "OpenAI", "Azure Speech Services", "Azure Cognitive Services","Socket.io"],
      liveUrl: "#",
      githubUrl: "https://github.com/MunnaKumar32990/AI-RURAL-VOICE-ASSISTANT",
      details: "Built an AI-powered voice assistant for rural Indian farmers using OpenAI GPT-4 and Azure Speech Services, enabling multilingual communication in local dialects for weather, crop prices, and government scheme information."
    },
    
    {
      id: 2,
      title: "AI-Powered Regulatory Compliance Checker",
      description: "An AI-powered regulatory compliance checker that checks if a company is compliant with the laws and regulations",
      image: "./ai-powered-regulatory-compliance-checker.png",
      tags: ["Python", "FastAPI", "Groq","gemini","slack","streamlit"],
      liveUrl: "#",
      githubUrl: "https://github.com/MunnaKumar32990/AI-Contract-Compliance-Checker",
      details: "Developed an AI-powered regulatory compliance checker using FastAPI, Groq, and Gemini to automate compliance verification for companies, ensuring adherence to laws and regulations."
    },
    {
      id: 3,
      title: "Real Time Chat Application",
      description: "A real-time chat application with user authentication and message history",
      image: "./chat.png",
      tags: ["React", "Node.js", "MongoDB", "Full Stack","Socket.io"],
      liveUrl: "#",
      githubUrl: "https://github.com/MunnaKumar32990/Chat-App",
      details: " • Engineered a real-time chat platform supporting 100+ concurrent users with Socket.io integration"
    },

    {
      id: 4,
      title: "AI-Notes Summarizer and Sharer",
      description: "Full Stack Project Using Flask And Groq (AI-powered meeting notes summarizer and sharer)",
      image: "./image.png",
      tags: ["Flask", "Groq","JavaScript","HTML","CSS"],
      liveUrl: "https://ai-powered-meeting-notes-summarizer-and-2ocg.onrender.com/",
      githubUrl: "https://github.com/MunnaKumar32990/AI-powered-meeting-notes-summarizer-and-sharer",
      details: "Full Stack Project Using Flask And Groq (AI-powered meeting notes summarizer and sharer)."
    },
    {
      id: 5,
      title: "AI-Powered Resume Builder",
      description: "An AI-driven resume builder that generates personalized resumes based on user input",
      image: "./airesume.png",
      tags: ["React", " Node.js", "OpenAI API ","Express", "Puppeteer"],
      liveUrl: "#",
      githubUrl: "https://github.com/MunnaKumar32990/AI-Resume-Builder",
      details: "Developed an AI-powered resume builder that generates personalized resumes using OpenAI API, enhancing user experience with automated content generation and formatting."
    },
    {
      id: 6,
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
      stats: "324+ problems solved",
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

