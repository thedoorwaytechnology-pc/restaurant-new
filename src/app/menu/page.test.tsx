import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import MenuPage from "./page";
import { menuCategories } from "@/data/menu";

describe("MenuPage", () => {
  it("renders the page heading", () => {
    render(<MenuPage />);
    expect(
      screen.getByRole("heading", { level: 1, name: /two kitchens\. one table\./i }),
    ).toBeInTheDocument();
  });

  it("renders all 11 required menu categories", () => {
    render(<MenuPage />);
    expect(menuCategories).toHaveLength(11);
    for (const category of menuCategories) {
      expect(screen.getByRole("heading", { name: category.title })).toBeInTheDocument();
    }
  });
});
