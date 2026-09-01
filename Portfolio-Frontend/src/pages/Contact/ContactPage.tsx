import { Link } from 'react-router';
import { ScrollAnimate } from './ContactPageAnim';
import './ContactPage.css';

export function ContactPage() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <ScrollAnimate className="colour-section">
          <ScrollAnimate className="contact-title">Contact Me</ScrollAnimate>
          <Link to="mailto:cooper.hampson07@gmail.com" className="mail-link">
            <ScrollAnimate className="contact-details">COOPER.HAMPSON07@GMAIL.COM</ScrollAnimate>
          </Link>
          <Link to="https://www.instagram.com/cooper_hampson19/" target="_blank" className="insta-link">
            <ScrollAnimate className="instagram-me">Instagram</ScrollAnimate>
          </Link>
        </ScrollAnimate>
      </div>
    </section>
  );
}