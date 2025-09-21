import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <header className="nav">
      <Link className="brand" to="/">
        <span className="logo" aria-hidden="true">✷</span>
        <span>Data Insights</span>
      </Link>
      <nav className="nav-links">
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <button className="avatar" aria-label="Profile" />
    </header>
  );
}
