import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const ProfileHeader = () => {
  return (
    <header className="flex justify-between items-center border-b shadow-lg px-6 py-2 w-full text-center">
      <Link href="/">
        <ChevronLeft
          size={32}
          className="text-muted-foreground hover:cursor-pointer hover:opacity-50"
        />
      </Link>

      <h3 className="text-[18px] font-extrabold">Profile</h3>
      <div className=""></div>
    </header>
  );
};

export default ProfileHeader;
