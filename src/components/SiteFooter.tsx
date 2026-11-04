import { profile } from "../data/profile.ts";
import { ExternalLink } from "./ExternalLink.tsx";

const year = new Date().getFullYear();

export function SiteFooter() {

  return (
    <footer className="site-footer">
      <div>
        <p className="footer-name">{profile.name}</p>
        <p>
          {profile.role}, {profile.location}
        </p>
      </div>
      <ul>
        <li>
          <ExternalLink href={profile.links.linkedin}>LinkedIn</ExternalLink>
        </li>
        <li>
          <ExternalLink href={profile.links.lastMileStack}>Last Mile Stack</ExternalLink>
        </li>
        <li>
          <ExternalLink href={profile.links.github}>GitHub</ExternalLink>
        </li>
      </ul>
      <p className="colophon">
        © {year} {profile.name}. Static site, no contact form, no trackers.
      </p>
    </footer>
  );
}
