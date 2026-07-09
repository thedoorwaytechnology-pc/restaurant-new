import { afterEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { ReservationForm } from "./ReservationForm";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("ReservationForm", () => {
  it("shows a validation error when required fields are missing", async () => {
    render(<ReservationForm />);
    fireEvent.click(screen.getByRole("button", { name: /request reservation/i }));
    expect(await screen.findByText(/please enter your full name/i)).toBeInTheDocument();
  });

  it("submits successfully and shows the confirmation state", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    });
    vi.stubGlobal("fetch", fetchMock);

    render(<ReservationForm />);

    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: "Jordan Blake" } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "jordan@example.com" } });
    fireEvent.change(screen.getByLabelText(/phone/i), { target: { value: "4165551234" } });
    fireEvent.change(screen.getByLabelText(/date/i), { target: { value: "2099-01-01" } });
    fireEvent.change(screen.getByLabelText(/time/i), { target: { value: "6:00 PM" } });
    fireEvent.change(screen.getByLabelText(/guests/i), { target: { value: "4" } });

    fireEvent.click(screen.getByRole("button", { name: /request reservation/i }));

    await waitFor(() => {
      expect(screen.getByText(/you.re all set, jordan\./i)).toBeInTheDocument();
    });
    expect(fetchMock).toHaveBeenCalledWith(
      "/api/reservations",
      expect.objectContaining({ method: "POST" }),
    );
  });
});
