import { supabase } from "@/lib/supabaseClient";

type TransactionInput = {
  symbol: string;
  coin: string;
  type: "buy" | "sell";
  amount: number;
  price: number;
};

//2.1 Esta es la function de insersion para guardar el nuevo registro en la DDBB.
export async function createTransaction(data: TransactionInput) {
  const { error } = await supabase
    .from("transactions")
    .insert([
      {
        symbol: data.symbol,
        coin: data.coin,
        type: data.type,
        amount: data.amount,
        price: data.price,
      },
    ]);

  if (error) {
    throw new Error(error.message);
  }

  return { success: true };
}