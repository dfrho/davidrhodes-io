export type Metric = {
  value: string;
  label: string;
  detail: string;
};

export type MetricGroup = {
  id: string;
  title: string;
  metrics: readonly Metric[];
};

/** Figures are taken from named roles. They are not a single blended score. */
export const metricGroups: readonly MetricGroup[] = [
  {
    id: "revenue",
    title: "Quota and revenue",
    metrics: [
      {
        value: "112%",
        label: "Exceeded 6-month ramp quota by",
        detail:
          "Feedonomics. Then ranked #1–2 revenue-generating SE from Q1–Q3 2026.",
      },
      {
        value: "46%",
        label: "Exceeded revenue quota by",
        detail: "FullStory enterprise pre-sales, expansion, and renewal.",
      },
      {
        value: "22%",
        label: "Surpassed team-average win rate by",
        detail: "FullStory customer and webinar demos.",
      },
      {
        value: "31%",
        label: "Increased customer retention by",
        detail: "Winmo. A Salesforce integration that was prototyped and shipped.",
      },
    ],
  },
  {
    id: "delivery",
    title: "Delivery and adoption",
    metrics: [
      {
        value: "16%",
        label: "Reduced customer churn by",
        detail: "FullStory onboarding usage dashboards.",
      },
      {
        value: "67%",
        label: "Increased implementation efficiency by",
        detail: "Shogun. A universal QA template for technical evaluation.",
      },
      {
        value: "50%+",
        label: "Faster time-to-value",
        detail:
          "Shogun pre-sales implementation framework. The implementation playbook also cut deployment time-to-value by over one third.",
      },
      {
        value: "4h → 45m",
        label: "Cut average troubleshooting time",
        detail: "Shogun real-time issue tracker for pre-sales environments. From 4 hours to 45 minutes.",
      },
      {
        value: "23%",
        label: "Reduced loading times by",
        detail: "AutoZone. Bounce rate lowered by 16%.",
      },
      {
        value: "8%",
        label: "Boosted year-on-year revenue by",
        detail: "AutoZone React/TypeScript rebuild, brought in to lead the turnaround and delivered on time.",
      },
      {
        value: "34%",
        label: "Accelerated the SDLC by",
        detail: "AutoZone. CI/CD pipeline with the engineering and architecture team.",
      },
      {
        value: "31%",
        label: "Faster average market entry",
        detail: "Five SaaS MVPs engineered as a freelance software engineer.",
      },
    ],
  },
];
