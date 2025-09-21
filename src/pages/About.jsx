import Nav from "../components/Nav";

function Section({ icon, title, children }) {
  return (
    <section className="abt-section">
      <header className="abt-sec-head">
        <span className="abt-icon" aria-hidden="true">{icon}</span>
        <h3>{title}</h3>
      </header>
      {children}
    </section>
  );
}

export default function About() {
  const skills = ["Python", "SQL", "Tableau", "R", "Excel", "Cloud Computing"];

  const experience = [
    {
      role: "Data Analyst at Tech Innovators Inc.",
      period: "2021 – Present",
      desc: "Developed dashboards and reports to track key business metrics, leading to a 15% increase in operational efficiency."
    },
    {
      role: "Junior Analyst at Data Dynamics Co.",
      period: "2019 – 2021",
      desc: "Assisted senior analysts with data cleaning, exploratory analysis, and visualization for various client projects."
    },
    {
      role: "Freelance Data Consultant",
      period: "2018 – 2019",
      desc: "Provided analytics services to small businesses, helping them understand their customer base and market trends."
    }
  ];

  return (
    <>
      <Nav />

      <main className="container aboutv2">
        {/* Hero */}
        <header className="abt-hero">
          <div className="abt-hero-copy">
            <h1>About Me</h1>
            <p className="muted">
              I’m a data analyst with a passion for uncovering insights and driving data‑informed decisions. With a background in statistics and a knack for storytelling, complex data becomes actionable strategies.
            </p>
            <a className="btn primary" href="/resume.pdf" target="_blank" rel="noreferrer">
              ⬇️ Download Resume
            </a>
          </div>
        </header>

        {/* Biography */}
        <Section icon="📖" title="Biography">
          <p className="muted">
            Fascinated by patterns, the journey into data analysis blends statistical rigor with curiosity about hidden trends. The goal is to turn raw data into narratives that help stakeholders make informed choices—accurate, clear, and impactful.
          </p>
        </Section>

        {/* Skills */}
        <Section icon="🧰" title="Skills">
          <div className="abt-skill-grid">
            {skills.map((s) => (
              <span key={s} className="chip-lg abt-skill">
                {s}
              </span>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section icon="🧭" title="Experience">
          <ol className="abt-timeline">
            {experience.map((e) => (
              <li key={e.role} className="abt-tl-item">
                <div className="abt-tl-dot" />
                <div className="abt-tl-card">
                  <div className="abt-tl-top">
                    <h4>{e.role}</h4>
                    <small className="muted">{e.period}</small>
                  </div>
                  <p className="muted">{e.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {/* Philosophy */}
        <Section icon="💡" title="Philosophy">
          <blockquote className="abt-quote">
            “Great analysis is more than numbers; it is clear, relevant, and actionable. Findings must be understandable to non‑technical audiences and tied to outcomes that drive change.”
          </blockquote>
        </Section>

        <footer className="abt-footer muted">© 2024 Data Insights. All rights reserved.</footer>
      </main>
    </>
  );
}
