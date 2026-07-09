import { afterEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { ContactForm } from "./ContactForm";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("ContactForm", () => {
  it("shows validation errors when required fields are missing", async () => {
    render(<ContactForm />);
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));
    expect(await screen.findByText(/please enter your full name/i)).toBeInTheDocument();
  });

  it("submits successfully and shows the confirmation state", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    });
    vi.stubGlobal("fetch", fetchMock);

    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: "Jordan Blake" } });
    fireEvent.change(screen.getByLabelText(/^email/i), { target: { value: "jordan@example.com" } });
    fireEvent.change(screen.getByLabelText(/subject/i), { target: { value: "Catering inquiry" } });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: "We would like a quote for a private event." },
    });

    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByText(/message sent\./i)).toBeInTheDocument();
    });
    expect(fetchMock).toHaveBeenCalledWith("/api/contact", expect.objectContaining({ method: "POST" }));
  });
});
