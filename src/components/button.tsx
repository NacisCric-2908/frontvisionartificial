import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  color?: string;
  link?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({ text, color, link, onClick, type = "button" }: ButtonProps) {
  if (link) {
    return (
      <Link href={link} className={`px-4 py-2.5 rounded-full text-white font-black ${color} active:opacity-80 transition-opacity duration-200`}>
        {text}
      </Link>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2.5 rounded-full text-white font-black ${color} active:opacity-60 transition-opacity duration-200`}
    >
      {text}
    </button>
  );
}