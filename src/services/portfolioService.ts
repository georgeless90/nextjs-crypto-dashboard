import { supabase } from "@/lib/supabaseClient";

export async function getPortfolioDistribution() {
  const { data, error} = await supabase.from("portfolio").select("*").order("buy_date", { ascending: true });;

  const total = data.reduce((acc, item) => acc + item.value, 0);

   if (error) {
    console.error("SUPABASE ERROR:", error);
    return { received: [], due: [] };
  }

  //console.log("DATA two:", data);


  let distributionData = data.map((item) => ({
    name: item.symbol, // BTC, ETH, SOL
    amount: item.amount,
    percentage: item.buy_price / total,
  }));

  //console.log("FORMATTED two", distributionData);

  return distributionData;
}