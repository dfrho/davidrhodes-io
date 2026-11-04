export const profile = {
  name: "David Rhodes",
  location: "Nashville, TN",
  role: "Senior Solutions Engineer",
  domain: "https://davidrhodes.io",
  summary:
    "Enterprise Solutions Engineer operating at the intersection of MarTech, AI, and sales. Specializes in turning complex use cases into technical wins across enterprise sales cycles with C-level buyers. Hands-on expertise in React/JavaScript and delivering custom demos that shorten deal cycles.",
  availability: "Open to the next Solutions Engineer role",
  links: {
    linkedin: "https://linkedin.com/in/rhodesdavid",
    lastMileStack: "https://lastmilestack.com",
    github: "https://github.com/dfrho",
  },
} as const;

export const salesCycle = [
  {
    label: "Technical discovery",
    text: "Champions and C-level buyers, across pre-sales, expansion, and renewal.",
  },
  {
    label: "Solution architecture",
    text: "eCommerce, marketplace, CDP, PIM, ERP, OMS, and WMS ecosystems.",
  },
  {
    label: "Demos and POCs",
    text: "Custom React and TypeScript demos, and POCs with defined success metrics.",
  },
  {
    label: "Security conversations",
    text: "PII, PCI, HIPAA, SOC 2, GDPR, and ISO 27001.",
  },
] as const;
