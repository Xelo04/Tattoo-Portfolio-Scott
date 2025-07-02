import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="oregano-regular">
      <div className="footer-header">
        <div className="quick-contact">
          <span className="title">Napisz do mnie</span>
          <a href="tel:+48123456789">123456789</a>
          <a href="https://www.instagram.com/fillscott/" target="blank">
            @Fillscott
          </a>
          <a href="mailto:example@email.com">Email@email.com</a>
        </div>
        <ul className="nav-links">
          <Link to="/">
            <li>
              <span>STRONA GŁÓWNA</span>
            </li>
          </Link>
          <Link to="/about">
            <li>
              <span>MOJA HISTORIA</span>
            </li>
          </Link>
          <Link to="/gallery">
            <li>
              <span>GALERIA</span>
            </li>
          </Link>
          <Link to="/contact">
            <li>
              <span>KONTAKT</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="footer-info">
        <span>Flip Scott Skotarczak © 2025</span>
        <span>
          Site by <a href="https://github.com/Xelo04">Xelo04</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
