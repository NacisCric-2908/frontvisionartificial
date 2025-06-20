"use client";
import { useParams } from "next/navigation";
import Header from "@/components/header";
import Button from "@/components/button";
import Image from "next/image";

export default function FolderPage() {
  const params = useParams();
  const { id } = params;
  const images = [1,2,3,4,5,6,7,8,9,10];

  return (
    <div className="min-h-dvh bg-oxford-blue">
      <Header />

      <main className="h-full p-2.5">
        <section className="flex justify-between p-2.5 items-center">
          <Button text="Volver" link="/folders" color="button-back" />
          <Button text="Enviar" link="/folders" color="button-send" />
          <Button text="Tomar foto" link={`/folders/${id}/upload`} color="button-create" />
        </section>

        <p className="text-center font-bold text-xl my-2">modelos-{id}-2025-1</p>

        <section className="p-2.5 flex flex-wrap gap-2.5 justify-between">
          {images.map((image) => (
            <div key={image} className="w-[48%] flex flex-col items-center text-center p-2.5">
              <div className="relative w-full h-auto aspect-[3/4]">
                <Image src="/images/exam.jpeg" fill className="object-contain" sizes="(max-width: 768px) 100vw, 400px" alt="Examen" priority/>
              </div>
                <p className="text-white mt-2">imagen-{image}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
