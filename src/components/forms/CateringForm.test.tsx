import { afterEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { CateringForm } from "./CateringForm";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("CateringForm", () => {
  it("shows a validation error when required fields are missing", async () => {
    render(<CateringForm />);
    fireEvent.click(screen.getByRole("button", { name: /request catering quote/i }));
    expect(await screen.findByText(/please enter your full name/i)).toBeInTheDocument();
  });

  it("submits successfully and shows the confirmation state", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    });
    vi.stubGlobal("fetch", fetchMock);

    render(<CateringForm />);

    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: "Jordan Blake" } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "jordan@example.com" } });
    fireEvent.change(screen.getByLabelText(/phone/i), { target: { value: "4165551234" } });
    fireEvent.change(screen.getByLabelText(/event date/i), { target: { value: "2099-01-01" } });
    fireEvent.change(screen.getByLabelText(/estimated guest count/i), { target: { value: "40" } });

    fireEvent.click(screen.getByRole("button", { name: /request catering quote/i }));

    await waitFor(() => {
      expect(screen.getByText(/thanks, jordan\./i)).toBeInTheDocument();
    });
    expect(fetchMock).toHaveBeenCalledWith(
      "/api/catering",
      expect.objectContaining({ method: "POST" }),
    );
  });
});
