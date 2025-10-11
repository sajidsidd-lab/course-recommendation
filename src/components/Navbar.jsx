import '../Navbar.css';

export default function Navbar({ setActiveSection }) {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src="/logo.png" alt="Logo" className="navbar-logo" />
                <span className="site-title">CourseRec</span>
            </div>
            <ul className="navbar-links">
                <ul className="navbar-links">
                    <li><a href="/" onClick={() => setActiveSection("home")}>Home</a></li>
                    <li><a href="#" onClick={() => setActiveSection("courses")}>Courses</a></li>
                    <li><a href="#" onClick={() => setActiveSection("about")}>About</a></li>
                    <li><a href="#" onClick={() => setActiveSection("contact")}>Contact</a></li>
                </ul>
            </ul>
        </nav>
    );
}