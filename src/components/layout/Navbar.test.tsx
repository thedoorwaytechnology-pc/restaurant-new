import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Navbar } from "./Navbar";
import { UIStateProvider } from "./UIStateProvider";

function renderNavbar() {
  return render(
    <UIStateProvider>
      <Navbar />
    </UIStateProvider>,
  );
}

describe("Navbar", () => {
  it("renders all primary nav links", () => {
    renderNavbar();
    for (const label of ["Home", "About", "Menu", "Gallery", "Catering", "Contact"]) {
      expect(screen.getByRole("link", { name: label })).toBeInTheDocument();
    }
  });

  it("renders the Order Online CTA", () => {
    renderNavbar();
    expect(screen.getAllByRole("link", { name: /order online/i }).length).toBeGreaterThan(0);
  });

  it("toggles the menu button's expanded state on click", () => {
    renderNavbar();
    const toggle = screen.getByRole("button", { name: /open menu/i });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(toggle);
    expect(screen.getByRole("button", { name: /close menu/i })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
  });
});
