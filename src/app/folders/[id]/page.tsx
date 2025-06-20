"use client";
import { useParams } from "next/navigation";
import Header from "@/components/header";
import Button from "@/components/button";

export default function FolderPage() {
  const params = useParams();
  const { id } = params; // id será el parámetro de la URL

  return (
    <div className="h-dvh">
      <Header />

      <main className="h-full bg-oxford-blue p-2.5">
        <section className="flex justify-between p-2.5 items-center">
          <Button text="Volver" link="/folders" color="button-back" />
          <Button text="Enviar" link="/folders" color="button-send" />
          <Button text="Tomar foto" link="/folders" color="button-create" />
        </section>

        <section className="p-2.5 flex flex-wrap gap-2.5 justify-between">
          
        </section>
      </main>
    </div>
  );
}
