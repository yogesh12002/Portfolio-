import Nav from "../components/Nav";

function Hero() {
  return (
    <section className="hero">
      <div className="left">
        <h1>
          <span>Data Analyst &</span><br />
          <span>Storyteller</span>
        </h1>
        <p>
          I transform raw data into actionable strategies. With a background in statistics and a keen eye for detail, I uncover insights from complex datasets to help businesses make data‑driven decisions.
        </p>
        <a className="btn primary" href="/projects">View Projects</a>
      </div>
      <div className="right">
        <div className="card">
          <img src="/image.png" alt="Portrait illustration" />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <span>© 2024 Data Insights. All rights reserved.</span>
      <div className="social">
        <a href="#" aria-label="Twitter">🐦</a>
        <a href="#" aria-label="LinkedIn">in</a>
        <a href="#" aria-label="GitHub">🐙</a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Footer />
    </>
  );
}
