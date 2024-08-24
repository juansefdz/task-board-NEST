"use client";

import { useState } from "react";
export default function Home() {
  const [temporal, setTemporal] = useState(2);
  console.log("hola");
  return (
    <>
      <div className="min-h-screen flex justify-center items-center flex-col">
        <h1 className="text-3xl font-bold">{temporal}</h1>
        <div className="flex gap-10">
          <button
            className="bg-green-500 m-5 p-5 rounded-md"
            onClick={() => setTemporal(temporal + 1)}
          >
            increment
          </button>
          <button
            className="bg-red-500 m-5 p-5 rounded-md"
            onClick={() => setTemporal(temporal - 1)}
          >
            decrement
          </button>
        </div>
      </div>
    </>
  );
}
