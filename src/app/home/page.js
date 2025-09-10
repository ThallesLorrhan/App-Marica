"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import BottomNav from "@/components/BottomNav";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import ActionButtonsMain from "@/components/ActionButtonsMain";
import FeedCardHome from "@/components/FeedCardHome";

export default function Message() {

  return (
    <div className="min-h-screen pb-20 bg-white flex flex-col items-center">
        <Header />
        <SearchBar />
        <ActionButtonsMain />
        <FeedCardHome />
        <BottomNav  />
    </div>
  );
}
