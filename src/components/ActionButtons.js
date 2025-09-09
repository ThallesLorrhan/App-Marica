"use client";

import React from "react";
import Image from "next/image";

const buttons = [
  { text: "Doações", color: "bg-green-600", icon: "/tabler-icon-gift.png" },
  { text: "Serviços", color: "bg-blue-400", icon: "/tabler-icon-tool.png" },
  { text: "Eventos", color: "bg-orange-400", icon: "/tabler-icon-calendar.png" },
];

export default function ActionButtons() {
  return (
    <div className="flex gap-2 justify-center mt-6 w-50">
      {buttons.map((btn) => (
        <button
          key={btn.text}
          className={`${btn.color} flex items-center gap-2 px-4 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition`}
        >
          <Image src={btn.icon} alt={btn.text} width={100} height={100} />
          {btn.text}
        </button>
      ))}
    </div>
  );
}
