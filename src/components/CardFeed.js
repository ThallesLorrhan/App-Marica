"use client";

import Image from "next/image";

export default function CardFeed({ items }) {
  return (
    <div className="flex flex-col mt-5 gap-4 max-w-xl">
         <h1 className="text-2xl font-bold text-black">Resultados</h1>
        <div
          className="bg-green-200 flex items-center justify-between w-80 p-4 rounded-xl shadow-md"
        >
          {/* Imagem */}
          <div className="flex-shrink-0">
            <Image
              src="/imgfeed1.png"
              alt=""
              width={70}
              height={70}
              className="rounded-lg object-cover"
            />
          </div>

          {/* Conteúdo */}
          <div className="flex-1 ml-4">
            <h2 className="font-bold text-gray-800">Vestido amarelo</h2>
            <p className="text-gray-400">Centro</p>
          </div>

          {/* Ícone */}
          <div
            className="w-8 h-8 flex items-center justify-center rounded-full text-white"
          >
            <Image src="/doacao.png" alt="Icon" width={30} height={30} />
          </div>
        </div>
        <div
          className="bg-orange-200 flex items-center justify-between w-80 p-4 rounded-xl shadow-md"
        >
          {/* Imagem */}
          <div className="flex-shrink-0">
            <Image
              src="/imgfeed2.png"
              alt=""
              width={70}
              height={70}
              className="rounded-lg object-cover"
            />
          </div>

          {/* Conteúdo */}
          <div className="flex-1 ml-4">
            <h2 className="font-bold text-gray-800">Vestido amarelo</h2>
            <p className="text-gray-400">Ponta Grossa</p>
          </div>

          {/* Ícone */}
          <div
            className="w-8 h-8 flex items-center justify-center rounded-full text-white"
          >
            <Image src="/eventos.png" alt="Icon" width={30} height={30} />
          </div>
        </div>
        <div
          className="bg-blue-200 flex items-center justify-between w-80 p-4 rounded-xl shadow-md"
        >
          {/* Imagem */}
          <div className="flex-shrink-0">
            <Image
              src="/imgfeed3.png"
              alt=""
              width={70}
              height={70}
              className="rounded-lg object-cover"
            />
          </div>

          {/* Conteúdo */}
          <div className="flex-1 ml-4">
            <h2 className="font-bold text-gray-800">Jardinagem</h2>
            <p className="text-gray-400">Centro</p>
          </div>

          {/* Ícone */}
          <div
            className="w-8 h-8 flex items-center justify-center rounded-full text-white"
          >
            <Image src="/servicos.png" alt="Icon" width={30} height={30} />
          </div>
        </div>
        
    </div>
  );
}
