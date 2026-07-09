import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("renders the current year in the copyright line", () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });

  it("renders opening hours and quick links", () => {
    render(<Footer />);
    expect(screen.getByText("Opening Hours")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Reservations" })).toBeInTheDocument();
  });
});
