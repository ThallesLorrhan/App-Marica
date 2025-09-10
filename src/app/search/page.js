"use client";

import ActionButtons from "@/components/ActionButtons";
import BottomNav from "@/components/BottomNav";
import CardFeed from "@/components/CardFeed";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";

export default function Search() {

  return (
    <div className="min-h-screen pb-20 bg-white flex flex-col items-center">
        <Header />
        <SearchBar />
        <ActionButtons />
        <CardFeed />
        <BottomNav  />
    </div>
  );
}
