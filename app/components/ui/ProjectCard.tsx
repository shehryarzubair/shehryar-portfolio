import { FiArrowUpRight, FiLayers } from "react-icons/fi";
import type { Project } from "../../data/projects";
import { TechBadge } from "./TechIcon";
export function ProjectCard({
  project,
  featured = false,
  index = 0,
  wordpress = false,
}: {
  project: Project;
  featured?: boolean;
  index?: number;
  wordpress?: boolean;
}) {
  const Heading = featured ? "h3" : "h4";
  return (
    <article
      className={featured ? "project-card featured-project" : "project-card compact-project"}
    >
      {featured && (
        <div className="project-number" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
          <FiLayers />
        </div>
      )}
      <div className="project-card-content">
        <p className="tag">{project.tag}</p>
        <Heading>{project.title}</Heading>
        {(project.role || wordpress) && (
          <p className="project-role" aria-hidden={!project.role || undefined}>
            {project.role || "\u00a0"}
          </p>
        )}
        <p className="project-description">{project.description}</p>
        {project.points && (
          <ul className="pts">
            {project.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}
        <ul className="chips">
          {project.stack.map((name) => (
            <li key={name}>
              <TechBadge name={name} />
            </li>
          ))}
        </ul>
        {project.url ? (
          <a
            className="text-link"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${project.title} — ${project.tag} (opens in a new tab)`}
          >
            Visit website <FiArrowUpRight aria-hidden="true" />
          </a>
        ) : (
          <p className="project-private"></p>
        )}
        {project.linkNote && <p className="project-link-note">{project.linkNote}</p>}
      </div>
    </article>
  );
}
