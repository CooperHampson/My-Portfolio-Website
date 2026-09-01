import { ScrollAnimate } from './ProjectsPageAnim';
import './ProjectsPage.css';

export function ProjectsPage() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <ScrollAnimate className="projects-title">Current Projects</ScrollAnimate>

        <div className="projects-grid">
          <ScrollAnimate className="test-project">
            <div className="test-text-container">
              <p className="test-title">Test Project</p>

              <p className="test-proj-desc">This is a test project, click on the project to find more info!</p>
            </div>

            <div className="test-img-container">

            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
}