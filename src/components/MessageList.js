"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
  

const MessageList = () => {
    const menuItems = [
        { name: "Marisa", src: "/marisa.png", mensagem: "Oiá Dona Jussara, tudo bem?...", time: "13:12" },
        { name: "Pedro", src: "/pedro.png", mensagem: "Bom dia, Pedro! Quero o seu se...", time: "09:30" },
        { name: "João", src: "/joao.png", mensagem: "Boa tarde, João! Os livros já foram...", time: "13:12" },
    ];

  return (
    <div className="min-h-screen pb-20 bg-white flex flex-col ">
      <div className=" flex text-aling justify-between w-80 p-4 rounded-xl flex-col gap-4">
        <h1 className="text-2xl font-bold text-black">Mensagens</h1>
      </div>
        {menuItems.map((item, idx) => (
        <div
          key={idx}
          className="flex items-center justify-center mx-auto w-80 p-4 border-b-1 border-gray-600"
        >
          {/* Imagem */}
          <div className="flex-shrink-0">
            <Image
              src={item.src}
              alt=""
              width={100}
              height={100}
              className="rounded-full object-cover"
            />
          </div>

          {/* Conteúdo */}
          <div className="flex-1 ml-4">
            <h2 className="font-bold text-black">{item.name}</h2>
            <p className="text-gray-600">{item.mensagem}</p>
          </div>

          {/* Ícone */}
          <div
            className="w-0 h-20 flex justify-center"
          >
            <p className="text-gray-400">{item.time}</p>
          </div>
        </div>
            ))}
    </div>
  )
}

export default MessageList
