import { AboutPage } from '../About/AboutPage';
import { PortfolioPage } from '../Portfolio/PortfolioPage';
import { ProjectsPage } from '../Projects/ProjectsPage';
import './HomePage.css';

export function HomePage() {
  return (
    <>
      <AboutPage />
      <PortfolioPage />
      <ProjectsPage />
    </>
  );
}