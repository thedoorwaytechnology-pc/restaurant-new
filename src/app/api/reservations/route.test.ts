import { describe, expect, it } from "vitest";
import { POST } from "./route";

function makeRequest(body: unknown) {
  return new Request("http://localhost/api/reservations", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

const validPayload = {
  name: "Jordan Blake",
  email: "jordan@example.com",
  phone: "4165551234",
  date: "2099-01-01",
  time: "6:00 PM",
  guests: 4,
  occasion: "Birthday",
  specialRequests: "",
};

describe("POST /api/reservations", () => {
  it("returns success for a valid reservation payload", async () => {
    const response = await POST(makeRequest(validPayload));
    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
  });

  it("returns 400 with field errors for an invalid payload", async () => {
    const response = await POST(makeRequest({ ...validPayload, email: "not-an-email", name: "" }));
    const data = await response.json();
    expect(response.status).toBe(400);
    expect(data.success).toBe(false);
    expect(data.errors.email).toBeDefined();
    expect(data.errors.name).toBeDefined();
  });
});
