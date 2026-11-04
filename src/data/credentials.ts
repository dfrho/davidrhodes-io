export type Credential = {
  name: string;
  issuer: string;
  date: string;
};

export const certifications: readonly Credential[] = [
  {
    name: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI / Stanford University",
    date: "Apr 2025",
  },
  {
    name: "Radical Product Thinking: Vision Setting",
    issuer: "Pendo.io",
    date: "Feb 2025",
  },
  {
    name: "Hands-On Essentials: Data Warehousing Workshop",
    issuer: "Snowflake",
    date: "Feb 2024",
  },
  {
    name: "FullStory Fundamentals Product Certification",
    issuer: "FullStory",
    date: "Dec 2022",
  },
  {
    name: "Fullstack Academy of Code Certificate of Completion",
    issuer: "New York, NY",
    date: "Feb 2017",
  },
];

export const education = {
  school: "University of Missouri",
  place: "Columbia, MO",
  credential: "Bachelor of Journalism/Advertising",
} as const;
