import { NextResponse } from "next/server";
import { reservationSchema } from "@/lib/validation/reservation";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = reservationSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { success: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  // Stub: no reservation system / email provider wired up yet.
  // This is the integration point for a future booking service.
  return NextResponse.json({ success: true, reservation: parsed.data });
}
