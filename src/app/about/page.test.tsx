import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import AboutPage from "./page";

describe("AboutPage", () => {
  it("renders the about hero heading", () => {
    render(<AboutPage />);
    expect(
      screen.getByRole("heading", { level: 1, name: /two traditions, one kitchen/i }),
    ).toBeInTheDocument();
  });

  it("covers every required storytelling topic", () => {
    render(<AboutPage />);
    for (const heading of [
      "Born from two kitchens, one obsession.",
      "A passion for authentic cuisine.",
      "Nothing sits. Nothing is rushed.",
      "A room built to make you feel expected.",
      "Every plate is a small act of discipline.",
    ]) {
      expect(screen.getByText(heading)).toBeInTheDocument();
    }
  });
});
