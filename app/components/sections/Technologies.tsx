import { TechIcon, TechBadge } from "../ui/TechIcon";
import { tech } from "../../data/technologies";
import { wordpressSkills } from "../../data/wordpress";

export function Technologies() {
  return (
    <section id="stack">
      <div className="wrap">
        <h2 className="title">Technologies I work with</h2>
        <p className="lede">The tools I use to build, connect and maintain web applications.</p>
        <div className="techgrid">
          {tech.map((g) => (
            <article className="tile tech-card" key={g.name}>
              <div className="tech-card-heading">
                <span className="category-icon">
                  <g.icon aria-hidden="true" />
                </span>
                <h3>{g.name}</h3>
              </div>
              <p className="tech-description">{g.description}</p>
              <ul className="chips">
                {g.items.map((i) => (
                  <li key={i}>
                    <TechBadge name={i} />
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div id="wordpress" className="wordpress-detail">
          <div className="wordpress-intro">
            <span className="wordpress-detail-logo">
              <TechIcon name="WordPress" />
            </span>
            <div>
              <h3>WordPress beyond page builders</h3>
              <p>
                Hands-on development and ongoing care, from custom PHP functionality to content
                workflows and site maintenance.
              </p>
            </div>
          </div>
          <div className="wordpress-skill-grid">
            {wordpressSkills.map((skill) => (
              <article className="wordpress-skill" key={skill.title}>
                <skill.icon aria-hidden="true" />
                <h4>{skill.title}</h4>
                <p>{skill.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
