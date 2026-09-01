import { ScrollAnimate } from './PortfolioPageAnim';
import './PortfolioPage.css';

export function PortfolioPage() {
  return (

    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <ScrollAnimate className ="portfolio-title" >Portfolio Projects</ScrollAnimate>

        <div className="portfolio-grid">
          <ScrollAnimate className="xoxxly-project">
            <div className="xox-text-container">
              <p className="xox-title">Xoxxly Website</p>

              <p className="xox-proj-desc">This project was a Landing page combined with a Merch store for popular Rocket League Twitch streamer Xoxxly.
                It was my first portfolio project, built with simplicity in mind. It features a few easily navigateable pages and a fully isolated Merch store.
                To visit the page, click on this project!
              </p>
            </div>

            <div className="xox-img-container">
              <img className="xox-img-home" src="Images/Xox-home.png" />
              <img className="xox-img-news" src="Images/Xox-news.png" />
              <img className="xox-img-socials" src="Images/Xox-Socials.png" />
              <img className="xox-img-community" src="Images/Xox-community.png" />
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>

  );
}