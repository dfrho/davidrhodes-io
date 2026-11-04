import { describe, expect, it } from "vitest";
import { featuredProjects } from "../data/projects.ts";

describe("featured projects", () => {
  it("hard-codes the four pinned repositories", () => {
    expect(featuredProjects.map((project) => project.name)).toEqual([
      "github-saas-lead-intelligence",
      "trends-summary",
      "async-python-and-js",
      "facecard",
    ]);

    for (const project of featuredProjects) {
      expect(project.repoUrl).toBe(`https://github.com/dfrho/${project.name}`);
      expect(project.description.length).toBeGreaterThan(40);
      if (project.homepageUrl) {
        expect(project.homepageUrl.startsWith("https://")).toBe(true);
      }
    }

    expect(featuredProjects[0]?.primaryLanguage).toBe("Python");
    expect(featuredProjects[1]?.primaryLanguage).toBe("TypeScript");
    expect(featuredProjects[2]?.primaryLanguage).toBeNull();
    expect(featuredProjects[2]?.homepageUrl).toBeNull();
    expect(featuredProjects[3]?.primaryLanguage).toBe("TypeScript");
    expect(featuredProjects[3]?.homepageUrl).toBe("https://facecard-amber.vercel.app");
  });
});
