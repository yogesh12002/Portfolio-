import Nav from "../components/Nav";
import { useMemo, useState } from "react";

// Example data; if you already centralize in profile.js, import from there.
const projects = [
  {
    name: "Customer Segmentation Analysis",
    desc: "Analyzed customer data to identify distinct segments using clustering techniques. Helped tailor marketing strategies for different customer groups.",
    tags: ["Python", "Pandas", "Scikit‑learn"],
    img: "/assets/segmentation.jpeg",
    link: "#",
    demo: "#",
    code: "#"
  },
  {
    name: "Sales Forecasting Model",
    desc: "Time‑series model to forecast future sales from historical data with seasonality and trend components for better accuracy.",
    tags: ["Forecasting", "Prophet", "SQL"],
    img: "/assets/forecast.jpeg",
    link: "#",
    demo: "#",
    code: "#"
  },
  {
    name: "Website Traffic Analysis",
    desc: "Web analytics to understand user behavior and surface areas for improvement: bounce rate, session duration, conversion funnels.",
    tags: ["Tableau", "Schema", "Google Analytics"],
    img: "/assets/traffic.jpeg",
    link: "#",
    demo: "#",
    code: "#"
  },
  {
    name: "Social Media Engagement Analysis",
    desc: "Measured campaign performance and identified key content drivers using NLP sentiment and engagement metrics.",
    tags: ["NLP", "Python", "Seaborn"],
    img: "/assets/social.jpg",
    link: "#",
    demo: "#",
    code: "#"
  }
];

function ProjectRow({ p, reverse }) {
  return (
    <article className={`prj-row ${reverse ? "reverse" : ""}`}>
      <div className="prj-media">
        <div className="thumb">
          <img src={p.img} alt={`${p.name} thumbnail`} loading="lazy" />
        </div>
      </div>

      <div className="prj-body">
        <h3 className="prj-title">{p.name}</h3>
        <p className="muted">{p.desc}</p>

        <ul className="chips prj-chips">
          {p.tags.map(t => <li key={t}>{t}</li>)}
        </ul>

        <div className="prj-cta">
          <a className="btn small" href={p.link} target="_blank" rel="noreferrer">
            View Project <span aria-hidden="true">→</span>
          </a>
          <div className="prj-links">
            {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Demo</a>}
            {p.code && <a href={p.code} target="_blank" rel="noreferrer">Code</a>}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [q, setQ] = useState("");
  const list = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return projects;
    return projects.filter(p =>
      [p.name, p.desc, ...(p.tags || [])].join(" ").toLowerCase().includes(t)
    );
  }, [q]);

  return (
    <>
      <Nav />
      <main className="container prj">
        <header className="prj-header">
          <h1>My Projects</h1>
          <p className="muted">
            A collection of data analysis projects demonstrating skills in data manipulation, visualization, and interpretation.
          </p>
          <div className="prj-tools">
            <input
              className="prj-search"
              placeholder="Filter by name or tech…"
              value={q}
              onChange={e => setQ(e.target.value)}
            />
          </div>
        </header>

        <section className="prj-list">
          {list.map((p, i) => (
            <ProjectRow key={p.name} p={p} reverse={i % 2 === 1} />
          ))}
        </section>

        <footer className="prj-footer muted">
          © 2024 Data Insights. All rights reserved.
        </footer>
      </main>
    </>
  );
}
