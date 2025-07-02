// Dynamic Navbar component using React Router to display the current page title

import "./navbar.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="navbar-header">
        <button
          className="hamburger"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className="material-icons">{menuOpen ? "close" : "menu"}</span>
        </button>
      </div>
      <ul className={`nav-links${menuOpen ? " open" : ""}`}>
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="oregano-regular"
        >
          <li>
            <span>STRONA GŁÓWNA</span>
          </li>
        </Link>
        <Link
          to="/about"
          onClick={() => setMenuOpen(false)}
          className="oregano-regular"
        >
          <li>
            <span>MOJA HISTORIA</span>
          </li>
        </Link>
        <Link
          to="/gallery"
          onClick={() => setMenuOpen(false)}
          className="oregano-regular"
        >
          <li>
            <span>GALERIA</span>
          </li>
        </Link>
        <Link
          to="/contact"
          onClick={() => setMenuOpen(false)}
          className="oregano-regular"
        >
          <li>
            <span>KONTAKT</span>
          </li>
        </Link>
      </ul>
      {/* Optional: overlay to close menu when clicking outside */}
      {menuOpen && (
        <div className="nav-overlay" onClick={() => setMenuOpen(false)} />
      )}
    </nav>
  );
};

export default Navbar;
