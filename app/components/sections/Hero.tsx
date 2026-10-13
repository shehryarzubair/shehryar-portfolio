import { TechBadge } from "../ui/TechIcon";
import { HeroGlow } from "../ui/HeroGlow";
import { GITHUB, LINKEDIN } from "../../data/profile";

export function Hero() {
  return (
    <HeroGlow>
      <div className="wrap">
        <p className="rise pill" style={{ animationDelay: "0ms" }}>
          Full Stack Software Engineer
        </p>
        <h1 className="rise" style={{ animationDelay: "120ms" }}>
          Hi, I'm Shehryar.
          <br />
          <span className="grad">I build reliable web apps.</span>
        </h1>
        <p className="rise sub" style={{ animationDelay: "240ms" }}>
          I work with React, Next.js and NestJS to turn ideas into complete products, from
          responsive interfaces to APIs, databases and payments.
        </p>
        <div className="rise row" style={{ animationDelay: "360ms" }}>
          <a className="btn primary" href="#projects">
            View my work
          </a>
          <a className="btn" href={GITHUB} target="_blank" rel="noopener">
            GitHub
          </a>
          <a className="btn" href={LINKEDIN} target="_blank" rel="noopener">
            LinkedIn
          </a>
        </div>
        <div className="hero-stack rise" style={{ animationDelay: "480ms" }}>
          <span className="stack-caption">My everyday toolkit</span>
          <ul className="chips">
            {["React.js", "Next.js", "NestJS", "PostgreSQL", "WordPress"].map((name) => (
              <li key={name}>
                <TechBadge name={name} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </HeroGlow>
  );
}
