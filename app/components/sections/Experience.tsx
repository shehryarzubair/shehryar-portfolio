import { experience } from "../../data/experience";
export function Experience() {
  const companies = ["Weuno Technologies", "DigiTan DigiTal"];
  return (
    <section id="experience">
      <div className="wrap">
        <h2 className="title">Work experience</h2>
        <p className="lede">My journey from web design to full stack software engineering.</p>
        <div className="xp">
          {companies.map((company) => (
            <article className="company-experience" key={company}>
              <h3>{company}</h3>
              <div className="career-progression">
                {experience
                  .filter((role) => role.org === company)
                  .map((role) => (
                    <div className="career-role" key={role.role}>
                      <div className="when">{role.when}</div>
                      <h4>{role.role}</h4>
                      <p>{role.text}</p>
                    </div>
                  ))}
              </div>
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
