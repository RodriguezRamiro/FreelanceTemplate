/* bizzTemplates/FreelanceTemplate/src/components/Navbar.jsx */

import { useState } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        <span className="logo-main">Vanta</span>
        <span className="logo-accent">Digital</span>
      </div>

      {/* Navigation */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#capabilities">Capabilities</a></li>
        <li><a href="#process">Process</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Actions */}
      <div className="nav-actions">
        <a href="#contact" className="nav-cta">
          Start Project
        </a>

        <button
          className="theme-toggle"
          aria-label="Toggle Theme"
        >
          <span className="theme-dot"></span>
        </button>
      </div>

      {/* Hamburger */}
      <button
        className={`hamburger ${menuOpen ? "active" : ""}`}
        aria-label="Menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </nav>
  );
}