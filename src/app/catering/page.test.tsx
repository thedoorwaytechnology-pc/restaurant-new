import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import CateringPage from "./page";

describe("CateringPage", () => {
  it("renders the page heading and catering form", () => {
    render(<CateringPage />);
    expect(
      screen.getByRole("heading", { level: 1, name: /bring white tiger to your event\./i }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/estimated guest count/i)).toBeInTheDocument();
  });
});
