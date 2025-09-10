"use client";

import BottomNav from "@/components/BottomNav";
import ProfileInfo from "@/components/ProfileInfo";

export default function Profile() {

  return (
    <div className="min-h-screen pb-20 bg-white flex flex-col items-center">
      <ProfileInfo />
      <BottomNav />
    </div>
  );
}
