import { experience } from "../data/experience.ts";
import { SectionHeading } from "./SectionHeading.tsx";

export function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <SectionHeading
        index="02"
        titleId="experience-title"
        title="Experience"
        lede="Pre-sales leadership from Feedonomics back through enterprise eCommerce engineering and earlier quota-carrying work."
      />
      <ol className="timeline">
        {experience.map((role) => (
          <li key={role.id} className="role">
            <div className="role-meta">
              <p className="role-period">
                <span aria-hidden="true">{role.period}</span>
                <span className="sr-only">
                  {role.end ? `${role.start} to ${role.end}` : `${role.start} to present`}
                </span>
              </p>
              <p className="role-org">{role.organization}</p>
            </div>
            <article className="role-body" aria-labelledby={`role-${role.id}`}>
              <h3 id={`role-${role.id}`}>{role.title}</h3>
              <p className="role-context">{role.context}</p>
              <ul>
                {role.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
