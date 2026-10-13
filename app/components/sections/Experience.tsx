import { experience } from "../../data/experience";

export function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <h2 className="title">Work experience</h2>
        <p className="lede">My journey from web design to full stack software engineering.</p>
        <div className="xp">
          {experience.map((e) => (
            <article key={e.role} className={e.now ? "now" : ""}>
              <div className="when">{e.when}</div>
              <h3>
                {e.role}, {e.org}
              </h3>
              <p>{e.text}</p>
            </article>
          ))}
        </div>
        <p className="education">
          Diploma in Computer Information Technology · Aligarh Institute of Technology, 2021
        </p>
      </div>
    </section>
  );
}
