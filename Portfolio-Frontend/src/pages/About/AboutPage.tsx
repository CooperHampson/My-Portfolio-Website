import { ObservedParagraph } from './AboutPageAnim';
import './AboutPage.css';

export const AboutPage: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <ObservedParagraph className="about-title">About Me</ObservedParagraph>

        <ObservedParagraph>Hi! I'm Cooper Hampson, a Freelance Web Designer and Developer based in Kyoto, Japan.</ObservedParagraph>

        <ObservedParagraph>I have a passion for designing and developing - finding solutions for all sorts of day to day problems.</ObservedParagraph>

        <ObservedParagraph>My work focuses in on key visuals built with perfect functionality. I strive to build exactly to the clients ideas.</ObservedParagraph>
      </div>
    </section>
  );
}