import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import HomePage from "./page";

describe("HomePage", () => {
  it("renders the hero headline", () => {
    render(<HomePage />);
    expect(
      screen.getByRole("heading", { level: 1, name: /timeless hospitality/i }),
    ).toBeInTheDocument();
  });

  it("renders the catering and order CTAs", () => {
    render(<HomePage />);
    expect(screen.getAllByRole("link", { name: /order online/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: /inquire about catering/i }).length).toBeGreaterThan(0);
  });
});
