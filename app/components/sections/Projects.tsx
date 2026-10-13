import { TechBadge } from "../ui/TechIcon";
import type { CSSProperties } from "react";
import { projects } from "../../data/projects";

export function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <h2 className="title">Selected projects</h2>
        <p className="lede">
          A selection of platforms I've helped build, from AI assessments to ticketing and
          investment workflows.
        </p>
        {projects.map((p) => (
          <article className="proj" key={p.title}>
            <div className="mock" style={{ "--h": p.h } as CSSProperties} aria-hidden="true">
              <div className="win">
                <b />
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
            <div>
              <h3>{p.title}</h3>
              <p className="tag">{p.tag}</p>
              <ul className="pts">
                {p.points.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <ul className="chips">
                {p.stack.map((s) => (
                  <li key={s}>
                    <TechBadge name={s} />
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
