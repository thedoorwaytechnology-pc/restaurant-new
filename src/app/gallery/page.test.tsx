import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import GalleryPage from "./page";
import { UIStateProvider } from "@/components/layout/UIStateProvider";

describe("GalleryPage", () => {
  it("renders the gallery heading and category filters", () => {
    render(
      <UIStateProvider>
        <GalleryPage />
      </UIStateProvider>,
    );
    expect(
      screen.getByRole("heading", { level: 1, name: /a glimpse inside white tiger/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "All" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Kitchen Craftsmanship" })).toBeInTheDocument();
  });
});
