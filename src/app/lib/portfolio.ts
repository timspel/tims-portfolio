export const profile = {
  name: "Tim Do",
  title: "Aspiring Full Stack Developer",
  location: "Sweden",
  summary: "I build fast, accessible web experiences with React.",
  email: "tim.matthew.do@gmail.com",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/-tim-do" },
    { label: "Resume", href: "#" }
  ]
};

export const skills = ["React", "TypeScript", "Next.js", "Tailwind", "Node.js"];

export const projects = [
  {
    name: "Bachelors Thesis Project - Interactive Tool for Visualization of Edge Flips",
    description: "A web application that visualizes edge flips in triangulated meshes, allowing users to interactively explore and understand the concept through dynamic graphics and user-friendly controls.",
    tags: ["Next.js", "UI", "UX", "TypeScript"," Tailwind CSS", "Graph Theory" ,"Vercel"],
    links: [{ label: "Code", href: "https://github.com/timspel/da391a_artefact" }, { label: "Live", href: "https://da391a-artefact.vercel.app/" },{ label: "Thesis", href: "https://mau.diva-portal.org/smash/get/diva2:1963912/FULLTEXT02.pdf" }]
  },
  {
    name: "GymTime - Workout Generator App",
    description: "A workout generator using OpenAI's GPT-4o to create personalized exercise routines based on user preferences, fitness levels, and goals. The app provides a seamless experience for users to receive tailored workout plans quickly. This project focus was to optimize the make it compatible for different devices and screen sizes using responsive design principles.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "OpenAI", "React"],
    links: [{ label: "Code", href: "https://github.com/timspel/portfolio" }]
  }
];

export const experience = [

  {
    role: "Freelance Full-stack Developer & AI Product builder",
    company: "XYZ Works",
    period: "August 2024 - July 2025",
    bullets: [
      "Developed a custom internal automation tool from scratch using AI tools to integrate Notion and Slack APIs to automate daily task progress checks and team updates in Slack. ",
      "Built AI-powered “Virtual CEO Coach” using OpenAI GPT-4o, enabling proactive follow-ups on stagnant tasks, task prioritization based on OKRs, and intelligent coaching conversations through Slack. ",
      "Implemented secure user authentication with Supabase (Google OAuth and email/password) and workspace integrations for Notion and Slack.",
      "Designed and deployed scheduled Supabase functions for non-AI daily reports with interactive Slack buttons and AI-driven coaching triggers, improving team accountability, and reducing blocked tasks.",
      "Created a web dashboard for managing automations, monitoring activity logs, and configuring schedules, resulting in streamlined project momentum for the internal team. "
    ]
  },
  {
    role: "Project Leader and Full-Stack Developer",
    company: "Cura-Ami",
    period: "June 2025 - August 2025",
    bullets: ["Led a team of five developers to design and implement a mobile application simulating life with diabetes, aimed at educating users on its causes and treatments. ",
       "Collaborated with stakeholders from Gothenburg University and Malmö University to ensure the app meets research standards and user needs.", 
       "Contributed to both back-end and front-end development using React-Native, including database schema design using Firestore, application logic, and UI/UX design, while using Agile methods to plan and meet milestones.", 
       "Focused on refining core features, improving user experience, and deploying app on the Apple App Store and prepared to launch app to Google Play Store."]
  }
];

export const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" }
] as const;

export type SectionId = (typeof nav)[number]["id"];