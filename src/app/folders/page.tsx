import Header from "@/components/header";
import Button from "@/components/button";
import Image from "next/image";
import Link from "next/link";

export default function Folders() {

  const folders = [1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13,14,15,16,17,18,19];

  return (
    <div className="min-h-dvh bg-oxford-blue">
      <Header />

      <main className="h-full p-2.5">
        <section className="flex justify-between p-2.5 items-center">
          <Button text="Eliminar" link="/folders" color="button-delete" />

          <Button text="Crear" link="/folders" color="button-create" />
        </section>

        <section className="p-2.5 flex flex-wrap gap-2.5 justify-between">
          {folders.map((folder) => (
            <Link href={`/folders/${folder}`} key={folder} className="w-[30%] flex flex-col items-center text-center p-2.5">
                <Image src="/images/folder.svg" alt="Carpetas" width={100} height={100} priority/>
                <p className="text-white mt-2">modelos-{folder}-2025-1</p>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}
