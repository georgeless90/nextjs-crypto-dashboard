import { supabase } from "@/lib/supabaseClient";

type TransactionInput = {
  symbol: string;
  type: "buy" | "sell";
  amount: number;
  price_usd: number;
};

export async function createTransaction(data: TransactionInput) {
  const { error } = await supabase
    .from("transactions")
    .insert([
      {
        symbol: data.symbol,
        type: data.type,
        amount: data.amount,
        price_usd: data.price_usd,
      },
    ]);

  if (error) {
    throw new Error(error.message);
  }

  return { success: true };
}