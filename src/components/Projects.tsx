import { featuredProjects } from "../data/projects.ts";
import { profile } from "../data/profile.ts";
import { ExternalLink } from "./ExternalLink.tsx";
import { SectionHeading } from "./SectionHeading.tsx";

export function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <SectionHeading
        index="03"
        titleId="projects-title"
        title="Featured projects"
        lede="The repositories currently pinned on GitHub. Descriptions are drawn from each README. Nothing here is loaded from the GitHub API in the browser."
      />
      <ul className="project-grid">
        {featuredProjects.map((project) => (
          <li key={project.repoUrl} className="project-card">
            <div className="project-topline">
              {project.primaryLanguage ? (
                <span className="language">{project.primaryLanguage}</span>
              ) : (
                <span className="language">Write-up</span>
              )}
            </div>
            <h3>
              <ExternalLink href={project.repoUrl}>{project.name}</ExternalLink>
            </h3>
            <p>{project.description}</p>
            <div className="project-links">
              <ExternalLink href={project.repoUrl}>Repository</ExternalLink>
              {project.homepageUrl ? (
                <ExternalLink href={project.homepageUrl}>Live site</ExternalLink>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
      <p className="more-work">
        <ExternalLink href={profile.links.github}>All public repositories on GitHub</ExternalLink>
      </p>
    </section>
  );
}
