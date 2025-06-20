import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  color?: string;
  link: string;
}

export default function Button({ text, color, link }: ButtonProps) {
  return (
    <Link href={link} className={`px-4 py-2.5 rounded-full text-white font-black ${color}`}>
      {text}
    </Link>
  );
}