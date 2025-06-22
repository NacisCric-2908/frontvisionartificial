import Button from "@/components/button";
import { BookImage } from "lucide-react";

export default function Home() {

  return (
    <div className="min-h-dvh bg-oxford-blue flex flex-col items-center justify-center">
      <main className="w-4/5 h-auto aspect-[3/5] p-4 rounded-2xl glassmorphism flex flex-col items-center">
          <h1 className="text-2xl font-black mb-2 mt-32">DigitalAssist</h1>
          <BookImage className="w-10 h-auto mb-8"/>
          <Button text="Entrar" link="/folders" color="button-green" />
      </main>
    </div>
  );
}
