"use client";

import { useActionState } from "react";
import { placeOrder } from "../actions";
import { ActionResponse } from "@/types";

const initialState: ActionResponse = {
  success: false,
};

export default function CheckoutForm() {
  const [state, formAction, isPending] = useActionState(placeOrder, initialState);

  if (state.success) {
    return (
      <div className="p-4 border border-green-500 bg-green-50 text-green-700 rounded">
        <h2 className="font-bold text-lg">🎉 Order Placed!</h2>
        <p>{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <input
          name="name"
          type="text"
          placeholder="Full Name"
          className="w-full p-2 border rounded"
        />
        {state.errors?.name && (
          <p className="text-red-500 text-xs mt-1">{state.errors.name}</p>
        )}
      </div>

      <div>
        <input
          name="phone"
          type="text"
          placeholder="TeleBirr Phone (09... or 07...)"
          className="w-full p-2 border rounded"
        />
        {state.errors?.phone && (
          <p className="text-red-500 text-xs mt-1">{state.errors.phone}</p>
        )}
      </div>

      <div>
        <input
          name="area"
          type="text"
          placeholder="Delivery Area"
          className="w-full p-2 border rounded"
        />
        {state.errors?.area && (
          <p className="text-red-500 text-xs mt-1">{state.errors.area}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-black text-white p-2 rounded hover:bg-gray-800 disabled:opacity-50"
      >
        {isPending ? "Submitting..." : "Place Order"}
      </button>
    </form>
  );
}