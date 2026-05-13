//1.1 Este es el service encargado de llamar y recibir datos de la DDBB

//1.1 Ya habiendo instalado supabase, se importa asi: 
import { supabase } from "@/lib/supabaseClient";
//import { mapToChart } from "@/lib/cryptoMapper";


//1.1 Este es el endpoint, el filtro de consulta depende de los datos en la DDBB
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

  // 1.1 Asi se mapea la data
  const received = data.map((item) => ({
    x: new Date(item.date).toISOString().split("T")[0], // más seguro
    y: Number(item.price_usd),
  }));

  const due = data.map((item) => ({
    x: new Date(item.date).toISOString().split("T")[0],
    y: Number(item.price_usd) * 0.9,
  }));

  return { received, due };
}