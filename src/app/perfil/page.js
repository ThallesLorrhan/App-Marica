"use client";
import Image from "next/image";
import {
  UserIcon,
  HeartIcon,
  CalendarDaysIcon,
  PencilIcon,
  BellIcon,
  QuestionMarkCircleIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";

import BottomNav from "@/components/BottomNav";

export default function Perfil() {
  const menuItems = [
    { label: "Minhas Publicações", icon: <UserIcon className="h-6 w-6 text-green-600" /> },
    { label: "Meus Interesses", icon: <HeartIcon className="h-6 w-6 text-green-600" /> },
    { label: "Eventos Confirmados", icon: <CalendarDaysIcon className="h-6 w-6 text-green-600" /> },
    { label: "Editar Perfil", icon: <PencilIcon className="h-6 w-6 text-green-600" /> },
    { label: "Notificação", icon: <BellIcon className="h-6 w-6 text-green-600" /> },
    { label: "Ajuda", icon: <QuestionMarkCircleIcon className="h-6 w-6 text-green-600" /> },
    { label: "Sair", icon: <PowerIcon className="h-6 w-6 text-green-600" /> },
  ];

  return (
    <div className="min-h-screen pb-20 bg-white flex flex-col items-center">
      {/* Cabeçalho com avatar */}
      <div className="flex flex-col items-center mt-10 ">
        <Image
          src="/jussara.png" // Coloque sua imagem em public/avatar.png
          alt="Foto do usuário"
          width={100}
          height={100}
          className="rounded-full mt-5 object-cover"
        />
        <h2 className="text-xl font-bold mt-4 text-black">Jussara M.</h2>
        <p className="text-gray-500 text-xs">Engajada com a comunidade</p>
      </div>

      {/* Lista de opções */}
      <div className=" flex text-aling items-center justify-between w-80 p-4 rounded-xl flex-col gap-4">
        {menuItems.map((item, idx) => (
          <button
            key={idx}
            className="w-full text-green-500 flex items-center   bg-white rounded-xl shadow-md p-4 hover:bg-gray-100 transition"
          >
            {item.icon}
            <span className="text-black">{item.label}</span>
          </button>
        ))}
      </div>

      {/* Barra de navegação */}
      <BottomNav />
    </div>
  );
}
