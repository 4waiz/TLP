import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { contactSchema } from "@/lib/schemas";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const payload = contactSchema.parse(json);

    await prisma.contactInquiry.create({
      data: payload,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, message: "Unable to process inquiry." },
      { status: 400 },
    );
  }
}
