import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src="/logo.png" alt="Logo" className="navbar-logo" />
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="#courses">Courses</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
}