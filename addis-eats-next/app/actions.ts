"use server";

import { ActionResponse, FormErrors } from "@/types";

export async function placeOrder(
  prevState: ActionResponse,
  formData: FormData
): Promise<ActionResponse> {
  const name = formData.get("name")?.toString();
  const phone = formData.get("phone")?.toString();
  const area = formData.get("area")?.toString();

  const errors: FormErrors = {};

  if (!name || name.trim() === "") {
    errors.name = "Full name is required.";
  }

  const phoneRegex = /^(09|07)\d{8}$/;
  if (!phone || !phoneRegex.test(phone)) {
    errors.phone = "Phone must be a valid TeleBirr number (e.g. 0911223344).";
  }

  if (!area || area.trim() === "") {
    errors.area = "Delivery area is required.";
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  return {
    success: true,
    message: `Thank you ${name}! Order placed successfully.`,
  };
}