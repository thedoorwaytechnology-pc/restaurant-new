import { describe, expect, it } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { GalleryGrid } from "./GalleryGrid";
import { OffCanvasMenu } from "@/components/layout/OffCanvasMenu";
import { UIStateProvider } from "@/components/layout/UIStateProvider";

const images = [
  { id: "a", category: "Signature Pizzas", src: "https://images.unsplash.com/photo-a", alt: "Pizza A" },
  { id: "b", category: "Curries", src: "https://images.unsplash.com/photo-b", alt: "Curry B" },
];

function renderGrid() {
  return render(
    <UIStateProvider>
      <GalleryGrid images={images} />
    </UIStateProvider>,
  );
}

describe("GalleryGrid", () => {
  it("renders every image as a button", () => {
    renderGrid();
    expect(screen.getByRole("button", { name: /pizza a/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /curry b/i })).toBeInTheDocument();
  });

  it("filters images by category", () => {
    renderGrid();
    fireEvent.click(screen.getByRole("button", { name: "Curries" }));
    expect(screen.queryByRole("button", { name: /pizza a/i })).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: /curry b/i })).toBeInTheDocument();
  });

  it("opens the lightbox when an image is clicked", () => {
    renderGrid();
    fireEvent.click(screen.getByRole("button", { name: /pizza a/i }));
    expect(screen.getByRole("dialog", { name: /image viewer/i })).toBeInTheDocument();
  });

  it("closes the lightbox on close button click", async () => {
    renderGrid();
    fireEvent.click(screen.getByRole("button", { name: /pizza a/i }));
    fireEvent.click(screen.getByRole("button", { name: /close image viewer/i }));
    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });

  it("does not also open the off-canvas nav menu when the lightbox opens", () => {
    render(
      <UIStateProvider>
        <GalleryGrid images={images} />
        <OffCanvasMenu />
      </UIStateProvider>,
    );
    fireEvent.click(screen.getByRole("button", { name: /pizza a/i }));
    expect(screen.getByRole("dialog", { name: /image viewer/i })).toBeInTheDocument();
    expect(screen.queryByRole("dialog", { name: /site navigation/i })).not.toBeInTheDocument();
  });
});
