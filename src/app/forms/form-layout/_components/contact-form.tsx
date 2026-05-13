 "use client";

import InputGroup from "@/components/FormElements/InputGroup";
import { TextAreaGroup } from "@/components/FormElements/InputGroup/text-area";
import { Select } from "@/components/FormElements/select";
import { ShowcaseSection } from "@/components/Layouts/showcase-section";


//2.1 useState para menjera loas fields del formulario 
import { useState } from "react";
export function ContactForm() {

  //2.1 Asi se definen las variables con su set para que tome el valor del field
  const [symbol, setSymbol] = useState("");

  const [coin, setCoin] = useState("");

  const [typeTran, setType] = useState("");

  const [amount, setAmount] = useState("");

  const [price, setPrice] = useState("");
  

  //2.1 Aqui no es necesario importar el route del api, solo se crea la function y se invoca el enpoint definido en 
  // el file route.ts
  async function saveTransaction() {
    //2.1 El enpoint lo define la ruta del file route.ts
    // Es decir /api/transactions.route.ts, 
    // Pero se puede obviar el route.ts
    const res = await fetch("/api/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        symbol,
        coin,
        type: typeTran,
        amount,
        price,
      }),
    });

    const data = await res.json();

    console.log('hello again');
  }


  return (
    <ShowcaseSection title="Contact Form" className="!p-6.5">
      <form action="#">
        <div className="mb-4.5 flex flex-col gap-4.5 xl:flex-row">
          {/* 2.1 Este es un example como como se usan los fields con nextjs */}
          {/* 2.1 El event onChange debe estar llamado asi tambien en el component de input */}
          <InputGroup
            label="Symbol"
            type="text"
            placeholder="Enter the symbol coin"
            className="w-full xl:w-1/2"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
          />

          <InputGroup
            label="Coin Name"
            type="text"
            placeholder="Enter the name coin"
            className="w-full xl:w-1/2"
            value={coin}
            onChange={(e) => setCoin(e.target.value)}
          />
        </div>

        <InputGroup
          label="Type Transaction"
          type="text"
          placeholder="Enter the type transaction"
          className="w-full xl:w-1/2"
          value={typeTran}
          onChange={(e) => setType(e.target.value)}
        />

        <InputGroup
          label="Amount"
          type="text"
          placeholder="Type the amount"
          className="w-full xl:w-1/2"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <InputGroup
          label="Price"
          type="text"
          placeholder="Type the price USD"
          className="w-full xl:w-1/2"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />


        {/* <InputGroup
          label="Email"
          type="email"
          placeholder="Enter your email address"
          className="mb-4.5"
          required
        /> */}

        {/* <InputGroup
          label="Subject"
          type="text"
          placeholder="Enter your subject"
          className="mb-4.5"
        />

        <Select
          label="Subject"
          placeholder="Select your subject"
          className="mb-4.5"
          items={[
            { label: "United States", value: "USA" },
            { label: "United Kingdom", value: "UK" },
            { label: "Canada", value: "Canada" },
          ]}
        />

        <TextAreaGroup label="Message" placeholder="Type your message" /> */}

        <button  onClick={saveTransaction} type="button" className="mt-6 flex w-full justify-center rounded-lg bg-primary p-[13px] font-medium text-white hover:bg-opacity-90">
          Send Transaction
        </button>
      </form>
    </ShowcaseSection>
  );
}
