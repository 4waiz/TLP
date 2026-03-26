import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { eventRegistrationSchema } from "@/lib/schemas";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const payload = eventRegistrationSchema.parse(json);

    await prisma.eventRegistration.create({
      data: payload,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, message: "Unable to process registration." },
      { status: 400 },
    );
  }
}
