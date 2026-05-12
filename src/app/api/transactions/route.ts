import { NextResponse } from "next/server";
import { createTransaction } from "@/services/transactionService";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validación básica
    if (
      !body.symbol ||
      !body.type ||
      !body.amount ||
      !body.price_usd
    ) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    const result = await createTransaction(body);

    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}