import './PortfolioPage.css';

export function PortfolioPage() {
  return (

    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <p className="portfolio-title">Portfolio</p>

        <div className="portfolio-grid">
          <div className="xoxxly-project">
            <div className="xox-text-container">
              <p className="xox-title">Xoxxly Website</p>

              <p className="xox-proj-desc">This project was a Landing page combined with a Merch store for popular Rocket League Twitch streamer Xoxxly.
                It was my first portfolio project, built with simplicity in mind. It features a few easily navigateable pages and a fully isolated Merch store.
                To visit the page, click on the images or type in https://ttvxoxxly.com
              </p>
            </div>

            <div className="xox-img-container">
              <img className="xox-img-home" src="Images/Xox-home.png" />
              <img className="xox-img-news" src="Images/Xox-news.png" />
              <img className="xox-img-socials" src="Images/Xox-Socials.png" />
              <img className="xox-img-community" src="Images/Xox-community.png" />
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}