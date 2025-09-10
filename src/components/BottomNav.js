"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  ChatBubbleLeftEllipsisIcon,
  UserIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

export default function BottomNav() {
  const pathname = usePathname(); // pega a rota atual
  const [active, setActive] = useState("home");

  const navItems = [
    { name: "home", icon: <HomeIcon className="h-6 w-6" />, href: "/" },
    { name: "buscar", icon: <MagnifyingGlassIcon className="h-6 w-6" />, href: "/buscar" },
    { name: "mensagens", icon: <ChatBubbleLeftEllipsisIcon className="h-6 w-6" />, href: "/message" },
    { name: "perfil", icon: <UserIcon className="h-6 w-6" />, href: "/perfil" },
  ];

  // Atualiza o item ativo automaticamente ao carregar a página
  useEffect(() => {
    const current = navItems.find((item) => item.href === pathname);
    if (current) setActive(current.name);
  }, [pathname]);

  return (
    <div className="max-h-full flex flex-col">
      {/* Navbar fixa */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-100 shadow-md flex justify-between items-center px-4 py-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex flex-col items-center text-sm ${
              active === item.name ? "text-green-500" : "text-gray-500"
            }`}
            onClick={() => setActive(item.name)}
          >
            {item.icon}
            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
          </Link>
        ))}

        {/* Botão central flutuante */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-6">
          <button className="bg-orange-500 p-4 rounded-full shadow-lg text-white">
            <PlusIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
