import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import App from "../App.tsx";
import { experience } from "../data/experience.ts";
import { metricGroups } from "../data/metrics.ts";
import { featuredProjects } from "../data/projects.ts";
import { contactMailto } from "../lib/contact.ts";

describe("portfolio", () => {
  it("states the positioning and every resume organization", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /technical wins across enterprise sales cycles/i,
      }),
    ).toBeInTheDocument();

    for (const role of experience) {
      expect(screen.getAllByText(role.organization).length).toBeGreaterThan(0);
    }

    expect(screen.getByText(/University of Missouri/)).toBeInTheDocument();
    expect(
      screen.getByText(/Supervised Machine Learning: Regression and Classification/),
    ).toBeInTheDocument();
  });

  it("renders impact figures and the pinned repositories", () => {
    render(<App />);

    for (const group of metricGroups) {
      for (const metric of group.metrics) {
        expect(screen.getAllByText(metric.value).length).toBeGreaterThan(0);
      }
    }

    for (const project of featuredProjects) {
      expect(
        screen.getByRole("heading", {
          name: (accessibleName) => accessibleName.includes(project.name),
        }),
      ).toBeInTheDocument();
    }

    expect(screen.getByText("Python")).toBeInTheDocument();
    expect(screen.getByText("Write-up")).toBeInTheDocument();
  });

  it("keeps external links safe and email behind a mailto link", () => {
    render(<App />);

    const emailLinks = screen.getAllByRole("link", { name: /email david/i });
    expect(emailLinks.length).toBeGreaterThan(0);
    for (const link of emailLinks) {
      expect(link).toHaveAttribute("href", contactMailto());
      expect(link).not.toHaveAttribute("target");
    }

    const external = screen.getAllByRole("link", { name: /opens in a new tab/i });
    expect(external.length).toBeGreaterThan(0);
    for (const link of external) {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
      expect(link.getAttribute("href")).toMatch(/^https:\/\//);
    }
  });

  it("has no form and does not publish a phone number", () => {
    const { container } = render(<App />);
    expect(container.querySelector("form")).toBeNull();
    expect(container.innerHTML.toLowerCase()).not.toContain("tel:");
    expect(container.innerHTML).not.toMatch(/\b\d{3}[-.)]\s*\d{3}[-.\s]\d{4}\b/);
    expect(screen.queryByRole("textbox")).toBeNull();
  });

  it("exposes the menu to the keyboard", async () => {
    const user = userEvent.setup();
    render(<App />);

    const menu = screen.getByRole("button", { name: /menu/i });
    expect(menu).toHaveAttribute("aria-expanded", "false");
    await user.click(menu);
    expect(menu).toHaveAttribute("aria-expanded", "true");
    await user.keyboard("{Escape}");
    expect(menu).toHaveAttribute("aria-expanded", "false");
  });
});
