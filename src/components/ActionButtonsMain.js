"use client";

import React from "react";
import {
  GiftIcon,
  WrenchIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";

const buttons = [
  { text: "Doações", color: "bg-green-300", icon: <GiftIcon className="w-10 text-green-700" /> },
  { text: "Serviços", color: "bg-blue-200", icon: <WrenchIcon className="w-10 text-blue-700" /> },
  { text: "Eventos", color: "bg-orange-300", icon: <CalendarIcon className="w-10 text-orange-700" /> },
];

export default function ActionButtonsMain() {
  return (
    <div className="flex gap-4 justify-center mt-6">
      {buttons.map((btn) => (
        <button
          key={btn.text}
          className={`${btn.color} flex flex-col items-center gap-2 px-5 py-5 rounded-lg font-semibold hover:opacity-90 transition`}
        >
          {btn.icon}
          <span className="text-black">{btn.text}</span>
        </button>
      ))}
    </div>
  );
}
