"use client";

import { useState } from "react";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  ChatBubbleLeftEllipsisIcon,
  UserIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

export default function BottomNav() {
  const [active, setActive] = useState("home");

  const navItems = [
    { name: "home", icon: <HomeIcon className="h-6 w-6" /> },
    { name: "buscar", icon: <MagnifyingGlassIcon className="h-6 w-6" /> },
    { name: "mensagens", icon: <ChatBubbleLeftEllipsisIcon className="h-6 w-6" /> },
    { name: "perfil", icon: <UserIcon className="h-6 w-6" /> },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-100 shadow-md flex justify-between items-center px-4 py-2">
    {navItems.map((item) => (
        <button
        key={item.name}
        onClick={() => setActive(item.name)}
        className={`flex flex-col items-center text-sm ${
            active === item.name ? "text-green-500" : "text-gray-500"
        }`}
        >
        {item.icon}
        {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
        </button>
    ))}

    {/* Botão central de adição */}
    <div className="absolute left-1/2 transform -translate-x-1/2 -top-6">
        <button className="bg-orange-500 p-4 rounded-full shadow-lg text-white">
        <PlusIcon className="h-6 w-6" />
        </button>
    </div>
    </div>
  );
}
