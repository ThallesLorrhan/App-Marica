"use client";
import BottomNav from "@/components/BottomNav";
import Header from "@/components/Header";
import MessageList from "@/components/MessageList";

export default function Message() {
  return (
    <div className="min-h-screen pb-20 bg-white flex flex-col  ">
     <Header />
      <MessageList />
      <BottomNav />
    </div>
  );
}
