"use client";

import Image from "next/image";
import {
  GiftIcon,
  CalendarIcon,
  WrenchIcon,
} from "@heroicons/react/24/outline";

export default function CardFeed({ items }) {
  const menuItems = [
    { 
      title: "Vestido amarelo", 
      subtitle: "Centro", 
      src: "/imgfeed1.png", 
      icon: <GiftIcon className="w-5 text-white" />, 
      color: "bg-green-500",
      category: "doacao" 
    },
    { 
      title: "Arraía de Ponta Grossa", 
      subtitle: "Ponta Grossa",  
      src: "/imgfeed2.png", 
      icon: <CalendarIcon className="w-5 text-white" />,
      color: "bg-orange-500",
      category: "evento" 
    },
    { 
      title: "Jardinagem", 
      subtitle: "Itaipuaçu",  
      src: "/imgfeed3.png", 
      icon: <WrenchIcon className="w-5 text-white" />, 
      color: "bg-blue-500",
      category: "servico" 
    },
  ];

  // Cores do fundo do card por categoria
  const categoryColors = {
    doacao: "bg-green-200",
    evento: "bg-orange-200",
    servico: "bg-blue-200",
  };

  return (
    <div className="flex flex-col mt-5 gap-4 max-w-xl">
      <h1 className="text-2xl font-bold text-black">Resultados</h1>
      {menuItems.map((item, idx) => (
        <div
          key={idx}
          className={`flex items-center justify-between w-80 p-4 rounded-xl shadow-md ${categoryColors[item.category]}`}
        >
          {/* Imagem */}
          <div className="flex-shrink-0">
            <Image
              src={item.src}
              alt=""
              width={70}
              height={70}
              className="rounded-lg object-cover"
            />
          </div>

          {/* Conteúdo */}
          <div className="flex-1 ml-4">
            <h2 className="font-bold text-gray-800">{item.title}</h2>
            <p className="text-gray-600">{item.subtitle}</p>
          </div>

          {/* Ícone com cor dinâmica */}
          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full text-white ${item.color}`}
          >
            {item.icon}
          </div>
        </div>
      ))}
    </div>
  );
}
