export const profile = {
  name: "Yogesh Gupta",
  title: "Java + Spring Boot | Data Analytics",
  location: "Vadodara, Gujarat",
  email: "yogeshgupta12002@gmail.com",
  phone: "+91-8141829858",
  links: {
    linkedin: "https://linkedin.com/in/001-yogesh-gupta",
    github: "https://github.com/yogesh12002",
    resume: "/Yogesh_Gupta_Resume_Merged.pdf"
  },
  summary:
    "Final‑year CSE student building reliable REST APIs and insightful analytics—ETL pipelines, dimensional modeling, and interactive dashboards.",
  skills: {
    languages: ["Java", "Python", "SQL"],
    frameworks: ["Spring Boot", "Hibernate"],
    web: ["HTML", "CSS", "JavaScript", "React"],
    data: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI"],
    databases: ["MySQL", "PostgreSQL", "MongoDB"],
    tools: ["Git", "VS Code", "IntelliJ IDEA", "Postman", "Maven", "JUnit", "Android Studio"],
    concepts: ["OOP", "DSA", "REST APIs", "ETL", "Data Warehousing"]
  },
  experience: [
    {
      role: "Lab Tech Intern",
      company: "Parul University",
      period: "May 2023 – Nov 2023",
      location: "Vadodara, India",
      bullets: [
        "Deployed APs and switches to improve hostel/campus Wi‑Fi stability and coverage.",
        "Optimized router/switch configs to reduce disconnections and interference.",
        "Assisted firmware/security updates, preventive maintenance, and wrote SOPs."
      ]
    }
  ],
  projects: [
    {
      name: "Employee Management REST API",
      tags: ["Spring Boot", "MySQL", "Swagger", "JUnit"],
      description:
        "CRUD with DTO validation, exception handlers, and Swagger docs; tested via Postman/Swagger.",
      link: "#"
    },
    {
      name: "E‑commerce Sales ETL + Star Schema",
      tags: ["Python", "SQLite", "Pandas"],
      description:
        "Transformed raw orders to a dimensional model; ran SQL for category trends and top customers.",
      link: "#"
    },
    {
      name: "Amazon Sales Analysis",
      tags: ["Pandas", "Seaborn"],
      description:
        "Analyzed seasonal revenue, top categories, and profitability with visuals.",
      link: "#"
    },
    {
      name: "Blinkit Dashboard",
      tags: ["Power BI"],
      description:
        "KPI dashboard with slicers and drill‑downs for business insights.",
      link: "#"
    },
    {
      name: "Sentiment Analysis Tool",
      tags: ["Python", "Transformers"],
      description:
        "Simple pipeline to classify sentiment with sample inputs/outputs.",
      link: "#"
    },
    {
      name: "Chess.com Clone",
      tags: ["Node", "Express", "Socket.io"],
      description:
        "Real‑time play with move validation and dynamic board updates.",
      link: "#"
    }
  ],
  education: [
    { title: "B.Tech (Integrated) CSE, Parul University", period: "2020–2026", detail: "CGPA 7.14/10" },
    { title: "Diploma CSE, Parul University", period: "2023", detail: "CGPA 7.67/10" },
    { title: "CBSE 10th, Shree Swaminarayan School", period: "2018", detail: "" }
  ],
  certifications: [
    "Tata Group Data Analytics Job Simulation — Forage (Jun 2025)",
    "HPE Software Engineering Job Simulation — Forage",
    "Java Programming — Oracle Academy (in progress)",
    "Spring Boot REST API Development — Udemy"
  ]
};
