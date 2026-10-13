import { TechIcon, TechBadge } from "../ui/TechIcon";
import { CopyEmail } from "../ui/CopyEmail";
import { EMAIL } from "../../data/profile";
import {
  FiArrowRight,
  FiActivity,
  FiGlobe,
  FiSend,
  FiLayout,
  FiServer,
  FiDatabase,
  FiCheck,
} from "react-icons/fi";
import { marquee } from "../../data/technologies";

export function About() {
  return (
    <section id="about">
      <div className="wrap">
        <h2 className="title">A little about me</h2>
        <p className="lede">
          I work across frontend and backend, building web applications and WordPress websites. I
          care about clear interfaces and dependable systems.
        </p>
        <div className="bento">
          <div className="tile s4 featured-tile">
            <div className="art architecture">
              <div className="architecture-flow">
                <div className="flow-node">
                  <FiLayout aria-hidden="true" />
                  <strong>Frontend</strong>
                  <span>React / Next.js</span>
                </div>
                <FiArrowRight className="flow-arrow" aria-hidden="true" />
                <div className="flow-node">
                  <FiServer aria-hidden="true" />
                  <strong>Backend</strong>
                  <span>Node.js / NestJS</span>
                </div>
                <FiArrowRight className="flow-arrow" aria-hidden="true" />
                <div className="flow-node">
                  <FiDatabase aria-hidden="true" />
                  <strong>Database</strong>
                  <span>PostgreSQL / MySQL</span>
                </div>
              </div>
            </div>
            <h3>Complete products, end to end</h3>
            <p>
              I connect responsive frontends with APIs, databases and integrations, including SaaS
              platforms with separate workspaces for each client.
            </p>
            <div className="feature-notes">
              <span>
                <FiCheck aria-hidden="true" /> Responsive UI
              </span>
              <span>
                <FiCheck aria-hidden="true" /> API development
              </span>
              <span>
                <FiCheck aria-hidden="true" /> Multi-tenant systems
              </span>
            </div>
          </div>
          <div className="tile s2">
            <div className="art big">5+</div>
            <h3>Years of experience</h3>
            <p>
              From building frontend interfaces to owning backend architecture and full stack
              features.
            </p>
          </div>
          <div className="tile s2">
            <div className="art card-symbol">
              <FiActivity aria-hidden="true" />
              <span className="signal-bars" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
                <i />
              </span>
            </div>
            <h3>Real-time features</h3>
            <p>Live assessment transcripts over WebSockets and queued background scoring jobs.</p>
          </div>
          <div className="tile s2">
            <ul className="chips art">
              {["Stripe", "DocuSign", "monday.com", "beehiiv", "Fritidskortet"].map((c) => (
                <li key={c}>
                  <TechBadge name={c} />
                </li>
              ))}
            </ul>
            <h3>Integrations</h3>
            <p>
              Connecting payments, contract signing, customer management and email in one workflow.
            </p>
          </div>
          <div className="tile s2">
            <div className="art card-symbol">
              <FiGlobe aria-hidden="true" />
            </div>
            <h3>International products</h3>
            <p>Building for international clients, including a ticketing platform in Sweden.</p>
          </div>
          <div className="tile s3">
            <div className="marquee art" aria-hidden="true">
              <div className="track">
                {[...marquee, ...marquee].map((m, i) => (
                  <span className="chip" key={i}>
                    <TechBadge name={m} />
                  </span>
                ))}
              </div>
            </div>
            <h3>My tech stack</h3>
            <p>
              React and Next.js for interfaces. NestJS and PostgreSQL for the systems behind them.
            </p>
          </div>
          <div className="tile s3">
            <div className="art card-symbol">
              <FiSend aria-hidden="true" />
            </div>
            <h3>Let's work together</h3>
            <p style={{ marginBottom: 16 }}>I'm open to full stack and backend roles.</p>
            <div>
              <CopyEmail email={EMAIL} primary />
            </div>
          </div>
          <div className="tile s3 wordpress-tile">
            <div className="art wordpress-mark">
              <TechIcon name="WordPress" />
            </div>
            <h3>WordPress, front to back</h3>
            <p>
              From custom themes and plugins to dynamic content and API integrations, I work across
              the WordPress frontend and backend.
            </p>
            <a className="text-link" href="#wordpress">
              Explore my WordPress experience <FiArrowRight aria-hidden="true" />
            </a>
          </div>
          <div className="tile s3">
            <div className="art card-symbol">
              <FiLayout aria-hidden="true" />
              <FiServer aria-hidden="true" />
            </div>
            <h3>One engineer. Both sides.</h3>
            <p>
              From the first screen to the last API call, I work across the stack to keep the user
              experience and application logic connected.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
