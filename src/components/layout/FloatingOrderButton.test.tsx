import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { FloatingOrderButton } from "./FloatingOrderButton";
import { UIStateProvider } from "./UIStateProvider";
import { restaurantInfo } from "@/data/restaurant-info";

describe("FloatingOrderButton", () => {
  it("links to WhatsApp", () => {
    render(
      <UIStateProvider>
        <FloatingOrderButton />
      </UIStateProvider>,
    );
    const link = screen.getByRole("link", { name: /chat with us on whatsapp/i });
    expect(link).toHaveAttribute("href", restaurantInfo.whatsappHref);
    expect(link).toHaveAttribute("target", "_blank");
  });
});
