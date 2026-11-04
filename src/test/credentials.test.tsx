import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import App from "../App.tsx";
import { education } from "../data/credentials.ts";

function faceFor(text: string) {
  const node = screen.getByText(text);
  const face = node.closest(".education-face");
  if (!(face instanceof HTMLElement)) {
    throw new Error("expected education copy to sit on a card face");
  }
  return face;
}

describe("education card", () => {
  it("flips on click and keyboard and exposes only the visible face", async () => {
    const user = userEvent.setup();
    render(<App />);

    const card = screen.getByRole("button", { name: /why journalism/i });
    expect(card).toHaveAttribute("aria-pressed", "false");
    expect(screen.getByRole("heading", { name: "Education" })).toBeInTheDocument();
    expect(screen.getByText("Bachelor of Journalism/Advertising")).toBeInTheDocument();
    expect(screen.getByText(/University of Missouri, Columbia, MO/)).toBeInTheDocument();

    const front = faceFor("Bachelor of Journalism/Advertising");
    const back = faceFor("I was trained to find the story.");
    expect(front).not.toHaveAttribute("aria-hidden");
    expect(front).not.toHaveAttribute("inert");
    expect(back).toHaveAttribute("aria-hidden", "true");
    expect(back).toHaveAttribute("inert");

    await user.click(card);
    expect(card).toHaveAttribute("aria-pressed", "true");
    expect(card).toHaveAccessibleName(/flip back/i);
    expect(screen.getByText("I was trained to find the story.")).toBeInTheDocument();
    expect(screen.getByText(education.story.bridge)).toBeInTheDocument();
    expect(
      screen.getByText("Reporters interview before they write. I run discovery the same way."),
    ).toBeInTheDocument();
    expect(
      screen.getByText("News leads with what matters most. So do my executive demos."),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Deadlines teach you to cut everything else. That's how I keep a demo tight.",
      ),
    ).toBeInTheDocument();
    expect(screen.getByText("Same craft, different newsroom.")).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Education" })).not.toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Education", hidden: true })).toBeInTheDocument();
    expect(front).toHaveAttribute("aria-hidden", "true");
    expect(front).toHaveAttribute("inert");
    expect(back).not.toHaveAttribute("aria-hidden");
    expect(back).not.toHaveAttribute("inert");

    await user.keyboard("{Enter}");
    expect(card).toHaveAttribute("aria-pressed", "false");
    expect(card).toHaveAccessibleName(/why journalism/i);
    expect(screen.getByRole("heading", { name: "Education" })).toBeInTheDocument();
    expect(front).not.toHaveAttribute("aria-hidden");
    expect(front).not.toHaveAttribute("inert");
    expect(back).toHaveAttribute("aria-hidden", "true");
    expect(back).toHaveAttribute("inert");

    await user.keyboard(" ");
    expect(card).toHaveAttribute("aria-pressed", "true");
    expect(front).toHaveAttribute("aria-hidden", "true");
    expect(front).toHaveAttribute("inert");
    expect(back).not.toHaveAttribute("aria-hidden");
    expect(back).not.toHaveAttribute("inert");

    await user.click(screen.getByRole("button", { name: /flip back/i }));
    expect(card).toHaveAttribute("aria-pressed", "false");
    expect(screen.getByRole("heading", { name: "Education" })).toBeInTheDocument();
  });

  it("does not render deal ACV for FullStory or Feedonomics", () => {
    const { container } = render(<App />);
    const text = container.textContent ?? "";

    expect(text).not.toMatch(/ACV/);
    expect(text).not.toMatch(/\$212K/);
    expect(text).not.toMatch(/\$195K/);
    expect(text).not.toMatch(/deal size/i);
    expect(text).not.toMatch(/Supported deal/);

    expect(
      screen.getByText(
        "Own technical strategy and execution across pre-sales, expansion, and renewal cycles for five North American sellers (4 enterprise / 1 corporate).",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Recruited as a workhorse to drive enterprise pre-sales, expansion, and renewal deals for four North American/European sellers (3 enterprise / 1 mid-market), selling eCommerce analytics solutions to drive conversions.",
      ),
    ).toBeInTheDocument();
  });
});
