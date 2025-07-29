import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="oregano-regular">
      <div className="footer-header">
        <div className="quick-contact">
          <span className="title">Napisz do mnie</span>
          <a href="tel:+48692166586">Telefon: 692 166 586</a>
          <a href="https://www.instagram.com/fillscott/" target="blank">
            Instagram: @Fillscott
          </a>
          <a href="https://www.facebook.com/filip.skotarczak" target="blank">
            Facebook: Filip Scott Skotarczak
          </a>

          <a href="mailto:madmidking@gmail.com">Mail: madmidking@gmail.com</a>
        </div>
        <ul className="nav-links">
          <Link to="/">
            <li>
              <span>STRONA GŁÓWNA</span>
            </li>
          </Link>
          <Link to="/my-history">
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
