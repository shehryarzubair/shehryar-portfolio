import { projects, clientProjects, wordpressProjects } from "../../data/projects";
import { ProjectCard } from "../ui/ProjectCard";
export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title">
      <div className="wrap">
        <h2 className="title" id="projects-title">
          Featured Engineering Projects
        </h2>
        <p className="lede">
          Full stack platforms, backend systems and frontend integrations I've worked on.
        </p>
        <div className="featured-projects">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} featured index={index} />
          ))}
        </div>
        <div className="project-group" id="client-projects">
          <h3 className="group-title">Additional Web Development Projects</h3>
          <p className="group-description">
            Frontend development and website work across events, commerce, services and education.
          </p>
          <details className="project-disclosure">
            <summary>
              View {clientProjects.length} client projects <span aria-hidden="true">+</span>
            </summary>
            <div className="client-project-grid">
              {clientProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </details>
        </div>
        <div className="project-group" id="wordpress-projects">
          <h3 className="group-title">WordPress Projects</h3>
          <p className="group-description">
            Corporate and marketing websites, separate from the engineering applications above.
          </p>
          <div className="wordpress-project-grid">
            {wordpressProjects.map((project) => (
              <ProjectCard key={project.title + project.tag} project={project} wordpress />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
