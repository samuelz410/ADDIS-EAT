import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, area } = body;

    const fieldErrors: Record<string, string> = {};
    if (!name) fieldErrors.name = "Name is required";

    const phoneRegex = /^(09|07)\d{8}$/;
    if (!phone || !phoneRegex.test(phone)) {
      fieldErrors.phone = "Invalid TeleBirr phone number format";
    }

    if (!area) fieldErrors.area = "Delivery area is required";

    if (Object.keys(fieldErrors).length > 0) {
      return NextResponse.json({ fieldErrors }, { status: 422 });
    }

    return NextResponse.json(
      { success: true, message: "Order created successfully" },
      { status: 201 }
    );
  } catch {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }
}