import { describe, expect, it } from "vitest";
import { POST } from "./route";

function makeRequest(body: unknown) {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

const validPayload = {
  name: "Jordan Blake",
  email: "jordan@example.com",
  phone: "4165551234",
  subject: "Catering inquiry",
  message: "We'd like a quote for a 40-person birthday event next month.",
};

describe("POST /api/contact", () => {
  it("returns success for a valid contact payload", async () => {
    const response = await POST(makeRequest(validPayload));
    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
  });

  it("returns 400 with field errors for an invalid payload", async () => {
    const response = await POST(makeRequest({ ...validPayload, email: "nope", message: "hi" }));
    const data = await response.json();
    expect(response.status).toBe(400);
    expect(data.success).toBe(false);
    expect(data.errors.email).toBeDefined();
    expect(data.errors.message).toBeDefined();
  });
});
