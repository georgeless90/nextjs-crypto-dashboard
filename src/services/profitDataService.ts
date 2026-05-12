
import { supabase } from "@/lib/supabaseClient";


export async function getWeeksProfitData() {
  const { data } = await supabase
    .from("transactions")
    .select("*")
    .order("date", { ascending: true })
    .limit(7);

  console.log("DATA three:", data);

  let profitData =  {
    sales: data.map((t) => ({
      x: new Date(t.date).toLocaleDateString("en-US", { weekday: "short" }),
      y: t.amount * 2000,
    })),
    revenue: data.map((t) => ({
      x: new Date(t.date).toLocaleDateString("en-US", { weekday: "short" }),
      y: t.price,
    })),
  };

  console.log("FORMATTED three", profitData);

  return profitData;
}