import { CopyEmail } from "../ui/CopyEmail";
import { EMAIL, GITHUB, LINKEDIN } from "../../data/profile";

export function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="cta">
          <h2 className="title">Have a project in mind?</h2>
          <p className="lede" style={{ marginBottom: 28 }}>
            I'm open to full stack and backend opportunities. Get in touch to discuss your project
            or team.
          </p>
          <div className="row">
            <a className="btn primary" href={`mailto:${EMAIL}`}>
              Email me
            </a>
            <CopyEmail email={EMAIL} />
            <a className="btn" href={LINKEDIN} target="_blank" rel="noopener">
              LinkedIn
            </a>
            <a className="btn" href={GITHUB} target="_blank" rel="noopener">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
