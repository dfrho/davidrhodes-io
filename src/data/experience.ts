export type Role = {
  id: string;
  organization: string;
  period: string;
  start: string;
  end?: string;
  title: string;
  context: string;
  highlights: readonly string[];
};

export const experience: readonly Role[] = [
  {
    id: "feedonomics",
    organization: "Feedonomics",
    period: "2025–Present",
    start: "2025",
    title: "Senior Solutions Engineer",
    context:
      "Senior Solutions Engineer for a full-service eCommerce middleware platform, a division of Commerce, Inc.",
    highlights: [
      "Own technical strategy and execution across pre-sales, expansion, and renewal cycles for five North American sellers (4 enterprise / 1 corporate).",
      "Scaled performance rapidly: exceeded 6-month ramp quota by 112%, then ranked #1–2 revenue-generating SE from Q1–Q3 2026.",
      "Lead end-to-end technical discovery, solution architecture, and demo execution for product listing advertising feed optimization, AI data enrichment, and marketplace listing/order orchestration leveraging SQL-based SaaS products.",
      "Contributed to the feature set of the AI Data Enrichment product that generates product-specific attributes and AEO/GEO question-and-answer content to build discoverability and credibility with LLMs.",
      "Created partnership enablement tools for the team including AI-powered news compilers for strategic advertising and marketplace channel partners, the agentic commerce segment, and competitors.",
      "Established a demo and training environment for GSIs Deloitte and Accenture to scale one-to-many customer growth.",
      "Architected and data modeled integrations across eCommerce, marketplace, CDP, PIM, ERP, OMS, and WMS ecosystems.",
      "Built out a custom demo framework based on the book Demonstrating to Win! by Robert Riefstahl.",
    ],
  },
  {
    id: "bloomforge",
    organization: "Bloomforge",
    period: "2024–2025",
    start: "2024",
    end: "2025",
    title: "Fractional Forward-Deployed Engineer",
    context: "Fractional forward-deployed engineering.",
    highlights: [
      "Founded the consultancy to drive rapid solutions engineering and product engineering workflows, driving accelerated product-market fit and revenue growth.",
      "Selected by a VC studio to engineer an AI-powered social application.",
    ],
  },
  {
    id: "fullstory",
    organization: "FullStory",
    period: "2022–2024",
    start: "2022",
    end: "2024",
    title: "Senior Solutions Engineer",
    context:
      "Senior Solutions Engineer for an AI-powered digital experience platform.",
    highlights: [
      "Recruited as a workhorse to drive enterprise pre-sales, expansion, and renewal deals for four North American/European sellers (3 enterprise / 1 mid-market), selling eCommerce analytics solutions to drive conversions.",
      "Delivered high-impact customer and webinar demos that surpassed team average win rate by 22% and exceeded revenue quotas by 46%.",
      "Implemented POCs with partner integrations, including Google Analytics and LaunchDarkly, with clearly defined success metrics.",
      "Drove prototype and launch of StoryAI Session Summary, recognized by leadership as a standout demo feature.",
      "Innovated onboarding usage dashboards, reducing customer churn rate by 16%.",
      "Led a customer hackathon for the largest client, which was threatening to churn, solidifying a new product and saving the renewal.",
      "Created sales enablement materials for a pivotal data warehouse integration product launch, featuring analytics streaming webhook integrations with Google BigQuery, Snowflake, RedShift, and Amazon S3.",
    ],
  },
  {
    id: "shogun",
    organization: "Shogun",
    period: "2021–2022",
    start: "2021",
    end: "2022",
    title: "Senior Solutions Engineer",
    context: "Senior Solutions Engineer for a CMS for eCommerce.",
    highlights: [
      "Tapped to establish a scalable pre-sales implementation framework, eliminate technical blockers in customer adoption, and accelerate time-to-value by 50% or more.",
      "Engineered a standardized implementation playbook, reducing onboarding friction for enterprise clients and decreasing deployment time-to-value by over one third.",
      "Revamped technical evaluation methodology by designing a universal QA template, increasing implementation efficiency by 67%.",
      "Built a real-time issue tracker for pre-sales environments, shrinking average troubleshooting time from 4 hours to 45 minutes.",
    ],
  },
  {
    id: "autozone",
    organization: "AutoZone",
    period: "2019–2021",
    start: "2019",
    end: "2021",
    title: "Senior Frontend Software Engineer",
    context:
      "Senior Frontend Software Engineer for a Fortune 500 enterprise eCommerce site.",
    highlights: [
      "Brought in to lead the turnaround of the rebuild using React/TypeScript, ensuring on-time delivery and boosting year-on-year revenue by 8%.",
      "Converted a content-rich database of parts by year, make, model, and engine into the Garage product to personalize every parts query for purchase, service reminder subscriptions, and vehicle-specific DIY blog content for SEO relevance.",
      "Debugged enterprise frontend performance, reducing loading times by 23%, lowering bounce rates by 16%, and improving user experience and SEM rankings.",
      "Led the engineering and architecture team joint effort to establish a CI/CD pipeline, accelerating the SDLC by 34%.",
      "Teamed up with leadership to shift from external consultants to a dedicated internal development team, improving software integrity through agile workflows and a robust testing suite.",
    ],
  },
  {
    id: "dfrho",
    organization: "DFRho",
    period: "2015–2019",
    start: "2015",
    end: "2019",
    title: "Freelance Software Engineer",
    context: "Freelance software engineering with startups.",
    highlights: [
      "Partnered with startups to accelerate product launches and optimize technical execution.",
      "Engineered five successful SaaS MVPs, accelerating market entry timelines by an average of 31%.",
      "Collaborated across fintech, e-commerce, mobile apps, and healthcare, delivering consistent performance improvements.",
    ],
  },
  {
    id: "winmo",
    organization: "Winmo",
    period: "2004–2015",
    start: "2004",
    end: "2015",
    title: "Account Manager",
    context:
      "Account Manager for a GTM business intelligence platform for the media and ad tech space.",
    highlights: [
      "Consistently exceeded quota and earned top-seller performance by pairing consultative selling with solution-oriented execution on enterprise-level new business and renewal accounts in media and advertising technology.",
      "Prototyped a Salesforce integration that was shipped, increasing customer retention by 31%.",
    ],
  },
];
