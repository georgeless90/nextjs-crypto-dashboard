import { NextResponse } from "next/server";
// 2.1 Para llamar un endpoint de insersion se puede llamar un service desde el route asi: (aunque se puede usar solo este route.ts)
import { createTransaction } from "@/services/transactionService";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validación básica
    console.log("BODY", body);
    if (
      !body.symbol ||
      !body.type ||
      !body.amount ||
      !body.price
    ) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    //body.date = new Date().toISOString()

    
    // 2.1 Aqui se llamar el service encargado se enviar la data de insersion
    const result = await createTransaction(body);

    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}