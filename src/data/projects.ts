/**
 * Pinned repositories on https://github.com/dfrho as of 2026-11-04.
 * Captured from the public profile (PINNED_REPO) and GitHub repository
 * metadata. Blurbs are summarized from each repository README.
 * This module is static. The site does not call the GitHub API.
 */
export type FeaturedProject = {
  name: string;
  description: string;
  primaryLanguage: string | null;
  repoUrl: string;
  homepageUrl: string | null;
};

export const featuredProjects: readonly FeaturedProject[] = [
  {
    name: "github-saas-lead-intelligence",
    description:
      "Monitors public GitHub repositories for engineering activity and turns those changes into structured SaaS sales leads. Claude summarizes what a team is building and classifies the domain, then a deterministic score weighs activity, pain points, dependencies, team size, and growth.",
    primaryLanguage: "Python",
    repoUrl: "https://github.com/dfrho/github-saas-lead-intelligence",
    homepageUrl: "https://github-saas-lead-intelligence.vercel.app",
  },
  {
    name: "trends-summary",
    description:
      "An interactive U.S. map of real-time Google Trends by state, with a short plain-language summary written by Claude next to the raw feed. The Next.js app stores nothing: no database, no auth, just a live lookup.",
    primaryLanguage: "TypeScript",
    repoUrl: "https://github.com/dfrho/trends-summary",
    homepageUrl: "https://state-search-trends-summary.vercel.app/",
  },
  {
    name: "async-python-and-js",
    description:
      "A side-by-side comparison of asynchronous functions and HTTP calls in JavaScript and Python, covering async/await, fetch, asyncio, aiohttp, and requests. The notes find the two languages similarly verbose for these examples.",
    primaryLanguage: null,
    repoUrl: "https://github.com/dfrho/async-python-and-js",
    homepageUrl: null,
  },
  {
    name: "facecard",
    description:
      "A Next.js and TypeScript app for a 15–30 second video introduction. Claude writes a spoken-word script from a profile, Loom records it in the browser, and the result is a shareable link.",
    primaryLanguage: "TypeScript",
    repoUrl: "https://github.com/dfrho/facecard",
    homepageUrl: "https://facecard-amber.vercel.app",
  },
];
