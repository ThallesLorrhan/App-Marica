"use client";
import Image from "next/image";
import { MapPinIcon } from "@heroicons/react/24/outline";
import BottomNav from "@/components/BottomNav";

export default function FeedCardHome() {
  const menuItems = [
    { title: "Roupas de frio em bom estado", subtitle: "São José do Imbassaí", icon: <MapPinIcon className="h-5 w-5 text-gray-600" />, src: "/imgfeed4.png" },
    { title: "Livros de romance", subtitle: "Itaipuaçu", icon: <MapPinIcon className="h-5 w-5 text-gray-600" />, src: "/imgfeed5.png" },
  ];

  return (
    <div className="mt-10 pb-20 bg-white flex flex-col items-center">
      {/* Lista de cards em linha */}
      <div className="flex flex-wrap justify-center gap-6 w-full max-w-6xl px-4">
        {menuItems.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition w-40"
          >
            {/* Imagem ocupando topo do card */}
            <div className="w-full h-40 relative">
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Conteúdo */}
            <div className="p-4 flex flex-col gap-2">
              <h3 className="text-md font-semibold text-black">{item.title}</h3>
              <div className="flex items-center gap-2 text-gray-600">
                {item.icon}
                <p>{item.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Barra de navegação */}
      <BottomNav />
    </div>
  );
}
