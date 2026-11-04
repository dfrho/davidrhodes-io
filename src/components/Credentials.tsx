import { certifications, education } from "../data/credentials.ts";
import { SectionHeading } from "./SectionHeading.tsx";

export function Credentials() {
  return (
    <section id="credentials" className="section" aria-labelledby="credentials-title">
      <SectionHeading
        index="05"
        titleId="credentials-title"
        title="Credentials"
        lede="Certifications, training, and formal education."
      />
      <div className="credential-layout">
        <div>
          <h3>Certifications and training</h3>
          <ul className="credential-list">
            {certifications.map((item) => (
              <li key={item.name}>
                <p className="credential-name">{item.name}</p>
                <p className="credential-meta">
                  <span>{item.issuer}</span>
                  <span aria-hidden="true"> · </span>
                  <time>{item.date}</time>
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="education">
          <h3>Education</h3>
          <p className="credential-name">{education.credential}</p>
          <p className="credential-meta">
            {education.school}, {education.place}
          </p>
        </div>
      </div>
    </section>
  );
}
