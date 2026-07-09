import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import HomePage from "./page";

describe("HomePage", () => {
  it("renders the hero headline", () => {
    render(<HomePage />);
    expect(
      screen.getByRole("heading", { level: 1, name: /bold flavors/i }),
    ).toBeInTheDocument();
  });

  it("renders the reservation and order CTAs", () => {
    render(<HomePage />);
    expect(screen.getAllByRole("link", { name: /order online/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: /reserve a table/i }).length).toBeGreaterThan(0);
  });
});
