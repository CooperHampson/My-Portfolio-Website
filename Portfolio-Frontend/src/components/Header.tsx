import { HashLink as Link } from 'react-router-hash-link';
import './Header.css';

export function Header() {
  return (
    <>
      <div className="header">
        <div className="left-section">
          <div className="my-name">
            <Link smooth to="/" className="link-general">
              <p className="ls-text">Cooper Hampson</p>
            </Link>
          </div>
        </div>
        <div className="right-section">
          <div className="about-me">
            <Link smooth to="#about" className="link-general">
              <p className="rs-text">About</p>
            </Link>
          </div>
          <div className="portfolio-me">
            <Link smooth to="#portfolio" className="link-general">
              <p className="rs-text">Portfolio</p>
            </Link>
          </div>
          <div className="projects-me">
            <Link smooth to="#projects" className="link-general">
              <p className="rs-text">Projects</p>
            </Link>
          </div>
          <div className="contact-me">
            <Link smooth to="#contact" className="link-general">
              <p className="rs-text">Contact</p>
            </Link>
          </div>
          <div className="services-me">
            <Link to="/services" className="link-general">
              <p className="rs-text">Services</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}