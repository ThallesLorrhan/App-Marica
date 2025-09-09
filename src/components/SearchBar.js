"use client";

import { useState } from "react";
import Image from "next/image";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleChange(e) {
    const value = e.target.value;
    setQuery(value);
    if (onSearch) onSearch(value);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      if (onSearch) onSearch(query);
    }
  }

  return (
    <div className="relative w-70 mt-1">
      {/* Imagem de pesquisa */}
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
        <Image src="/tabler-icon-search.png" alt="Pesquisar" width={20} height={20} />
      </div>

      {/* Imagem de filtro */}
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
        <Image src="/tabler-icon-filter.png" alt="Filtro" width={20} height={20} />
      </div>

      <input
        type="text"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Buscar..."
        style={{ borderColor: "#2196F3", color: "#2196F3" }}
        className="w-full bg-blue-200 p-2 pl-10 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
