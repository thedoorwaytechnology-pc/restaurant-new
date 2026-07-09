import { NextResponse } from "next/server";
import { cateringSchema } from "@/lib/validation/catering";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = cateringSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { success: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  // Stub: no CRM / email provider wired up yet.
  // This is the integration point for a future catering-inquiry pipeline.
  return NextResponse.json({ success: true, inquiry: parsed.data });
}
