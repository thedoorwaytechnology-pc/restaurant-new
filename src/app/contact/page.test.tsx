import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ContactPage from "./page";

describe("ContactPage", () => {
  it("renders the page heading, contact info, and form", () => {
    render(<ContactPage />);
    expect(
      screen.getByRole("heading", { level: 1, name: /we.d love to hear from you\./i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Call" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Directions" })).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });
});
