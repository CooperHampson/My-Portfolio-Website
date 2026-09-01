import { Header } from '../../components/Header';
import { AboutPage } from '../About/AboutPage';
import { PortfolioPage } from '../Portfolio/PortfolioPage';
import { ProjectsPage } from '../Projects/ProjectsPage';
import { ContactPage } from '../Contact/ContactPage';
import './HomePage.css';

export function HomePage() {
  return (
    <>
      <Header />

      <AboutPage />
      <PortfolioPage />
      <ProjectsPage />
      <ContactPage />
    </>
  );
}