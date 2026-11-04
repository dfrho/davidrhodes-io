import { expertiseAreas, technicalSkills } from "../data/skills.ts";
import { SectionHeading } from "./SectionHeading.tsx";

export function Expertise() {
  return (
    <section id="expertise" className="section" aria-labelledby="expertise-title">
      <SectionHeading
        index="04"
        titleId="expertise-title"
        title="Expertise"
        lede="Areas of practice and the technical stack used to build demos, integrations, and pre-sales tools."
      />
      <div className="skill-columns">
        <div>
          <h3>Areas of expertise</h3>
          <ul className="skill-list">
            {expertiseAreas.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Technical skills</h3>
          <ul className="skill-list">
            {technicalSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
