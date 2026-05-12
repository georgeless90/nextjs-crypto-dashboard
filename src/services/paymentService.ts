import { supabase } from "@/lib/supabaseClient";
//import { mapToChart } from "@/lib/cryptoMapper";

export async function getPaymentsOverviewData(timeFrame?: string) {
  const { data, error } = await supabase
    .from("crypto_prices")
    .select("*")
    .eq("symbol", "BTC")
    .order("date", { ascending: true });

 if (error) {
  console.error("SUPABASE ERROR:", error);
  return { received: [], due: [] };
}

//console.log("DATA:", data);

  const received = data.map((item) => ({
    x: new Date(item.date).toISOString().split("T")[0], // más seguro
    y: Number(item.price_usd),
  }));

  const due = data.map((item) => ({
    x: new Date(item.date).toISOString().split("T")[0],
    y: Number(item.price_usd) * 0.9,
  }));

  //console.log("FORMATTED", { received, due });

  return { received, due };
}