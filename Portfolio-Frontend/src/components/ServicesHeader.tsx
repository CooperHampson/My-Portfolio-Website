import { Link } from "react-router";
import './ServicesHeader.css'

export function ServicesHeader() {
  return (
    <div className="header">
      <div className="left-section">
        <div className="my-name">
          <Link to="/" className="link-general">
            <p className="ls-text">Cooper Hampson</p>
          </Link>
        </div>
      </div>
      <div className="right-section">
        <div className="services-top">
          <Link to="/services" className="link-general">
            <p className="rs-text">Services</p>
          </Link>
        </div>
      </div>
    </div>
  );
}