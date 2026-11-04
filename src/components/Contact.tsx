import { profile } from "../data/profile.ts";
import { contactMailto } from "../lib/contact.ts";
import { ExternalLink } from "./ExternalLink.tsx";

export function Contact() {
  return (
    <section id="contact" className="contact-band" aria-labelledby="contact-title">
      <p className="section-index">06</p>
      <h2 id="contact-title">Hiring a Solutions Engineer who can carry the technical win?</h2>
      <p>
        David is based in {profile.location} and is {profile.availability.toLowerCase()} across
        MarTech, AI, eCommerce, and enterprise pre-sales. Email or LinkedIn. There is no form on
        this site.
      </p>
      <div className="hero-actions">
        <ExternalLink href={contactMailto()} className="button button-primary">
          Email David
        </ExternalLink>
        <ExternalLink href={profile.links.linkedin} className="button button-secondary">
          LinkedIn
        </ExternalLink>
      </div>
    </section>
  );
}
