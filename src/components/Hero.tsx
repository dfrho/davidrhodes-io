import { profile, salesCycle } from "../data/profile.ts";
import { contactMailto } from "../lib/contact.ts";
import { ExternalLink } from "./ExternalLink.tsx";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">
          {profile.role}
          <span aria-hidden="true"> · </span>
          <span className="sr-only"> in </span>
          {profile.location}
        </p>
        <h1 id="hero-title">
          Technical wins across enterprise sales cycles.
        </h1>
        <p className="summary">{profile.summary}</p>
        <p className="availability">{profile.availability} in MarTech, AI, and eCommerce.</p>
        <div className="hero-actions">
          <ExternalLink href={contactMailto()} className="button button-primary">
            Email David
          </ExternalLink>
          <ExternalLink href={profile.links.linkedin} className="button button-secondary">
            LinkedIn
          </ExternalLink>
        </div>
        <ul className="hero-links">
          <li>
            <ExternalLink href={profile.links.lastMileStack}>lastmilestack.com</ExternalLink>
          </li>
          <li>
            <ExternalLink href={profile.links.github}>github.com/dfrho</ExternalLink>
          </li>
        </ul>
      </div>
      <aside className="dossier" aria-label="Where a sales cycle usually goes">
        <p className="dossier-kicker">On a sales cycle</p>
        <ol>
          {salesCycle.map((item, index) => (
            <li key={item.label}>
              <span className="dossier-index">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <p className="dossier-label">{item.label}</p>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </aside>
    </section>
  );
}
