import { useState } from 'react';
import '../Navbar.css';

export default function Navbar({ setActiveSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/logo.png" alt="Logo" className="navbar-logo" />
        <span className="site-title">Course-Recommendation</span>
      </div>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="/" onClick={() => setActiveSection("home")}>Home</a></li>
        <li><a href="#" onClick={() => setActiveSection("courses")}>Courses</a></li>
        <li><a href="#" onClick={() => setActiveSection("about")}>About</a></li>
        <li><a href="#" onClick={() => setActiveSection("contact")}>Contact</a></li>
      </ul>
    </nav>
  );
}