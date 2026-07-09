import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation/contact";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { success: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  // Stub: no email/CRM provider wired up yet.
  // This is the integration point for a future contact routing service.
  return NextResponse.json({ success: true });
}
