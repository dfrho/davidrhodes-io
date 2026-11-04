import { metricGroups } from "../data/metrics.ts";
import { SectionHeading } from "./SectionHeading.tsx";

export function Metrics() {
  return (
    <section id="impact" className="section" aria-labelledby="impact-title">
      <SectionHeading
        index="01"
        titleId="impact-title"
        title="Impact"
        lede="Each figure belongs to the role named on the card. Nothing here is blended across jobs."
      />
      <div className="metric-groups">
        {metricGroups.map((group) => (
          <div key={group.id} className="metric-group">
            <h3>{group.title}</h3>
            <ul className="metric-grid">
              {group.metrics.map((metric) => (
                <li key={`${group.id}-${metric.value}-${metric.label}`} className="metric">
                  <p className={metric.value.length > 5 ? "metric-value is-wide" : "metric-value"}>
                    {metric.value}
                  </p>
                  <p className="metric-label">{metric.label}</p>
                  <p className="metric-detail">{metric.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
