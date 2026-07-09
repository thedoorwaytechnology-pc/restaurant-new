import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ReservationsPage from "./page";

describe("ReservationsPage", () => {
  it("renders the page heading and reservation form", () => {
    render(<ReservationsPage />);
    expect(
      screen.getByRole("heading", { level: 1, name: /reserve your table\./i }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/special requests/i)).toBeInTheDocument();
  });
});
