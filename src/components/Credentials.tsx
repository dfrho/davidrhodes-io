import { useState, type ReactNode } from "react";
import { certifications, education } from "../data/credentials.ts";
import { SectionHeading } from "./SectionHeading.tsx";

const credoSlogan = "“Truth Well Told,”";

function CredoParagraph({ text }: { text: string }) {
  const sloganAt = text.indexOf(credoSlogan);
  let body: ReactNode = text;
  if (sloganAt !== -1) {
    body = (
      <>
        {text.slice(0, sloganAt)}
        <em className="education-slogan">{credoSlogan}</em>
        {text.slice(sloganAt + credoSlogan.length)}
      </>
    );
  }

  return <p className="education-credo">{body}</p>;
}

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
        <EducationCard />
      </div>
    </section>
  );
}

function EducationCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={flipped ? "education is-flipped" : "education"}>
      <div className="education-scene">
        <div className="education-rotator">
          <div
            className="education-face education-front"
            inert={flipped || undefined}
            aria-hidden={flipped || undefined}
          >
            <h3>Education</h3>
            <p className="credential-name">{education.credential}</p>
            <p className="credential-meta">
              {education.school}, {education.place}
            </p>
            <p className="education-tab" aria-hidden="true">
              Why journalism? →
            </p>
          </div>
          <div
            className="education-face education-back"
            inert={!flipped || undefined}
            aria-hidden={!flipped || undefined}
          >
            <p className="education-headline">{education.story.headline}</p>
            <CredoParagraph text={education.story.credo} />
            <ul className="education-beats">
              {education.story.beats.map((beat) => (
                <li key={beat}>{beat}</li>
              ))}
            </ul>
            <p className="education-closer">{education.story.closer}</p>
            <p className="education-tab" aria-hidden="true">
              Flip back
            </p>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="education-hit"
        aria-pressed={flipped}
        onClick={() => {
          setFlipped((current) => !current);
        }}
      >
        <span className="sr-only">{flipped ? "Flip back" : "Why journalism?"}</span>
      </button>
    </div>
  );
}
