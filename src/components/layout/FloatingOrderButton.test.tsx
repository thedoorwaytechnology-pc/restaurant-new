import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { FloatingOrderButton } from "./FloatingOrderButton";
import { UIStateProvider } from "./UIStateProvider";
import { restaurantInfo } from "@/data/restaurant-info";

describe("FloatingOrderButton", () => {
  it("links to the order online destination", () => {
    render(
      <UIStateProvider>
        <FloatingOrderButton />
      </UIStateProvider>,
    );
    const link = screen.getByRole("link", { name: /order online/i });
    expect(link).toHaveAttribute("href", restaurantInfo.orderOnlineHref);
  });
});
