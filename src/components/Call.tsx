import Link from "next/link";
import React from "react";
import { IoCall } from "react-icons/io5";

function Call() {
  return (
    <div className="fixed bottom-20 lg:bottom-12 lg:left-3  left-4 z-20 cursor-pointer">
      <Link
        href="tel:+918533944444"
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-700 hover:bg-blue-800 hover:shadow-2xl transition-all"
      >
        <IoCall size={29} color="white" />
        <span className="sr-only">call</span>
      </Link>
    </div>
  );
}

export default Call;
