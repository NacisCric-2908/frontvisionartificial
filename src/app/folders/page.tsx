"use client";
import { useEffect, useState } from "react";
import axiosInstance from "@/lib/axios";
import Header from "@/components/header";
import Button from "@/components/button";
import Image from "next/image";
import Link from "next/link";

export default function Folders() {
  const [showModal, setShowModal] = useState(false);
  const folders = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const [subject, setSubject] = useState("");
  const [group, setGroup] = useState("");
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

  return (
    <div className="min-h-dvh bg-oxford-blue">
      <Header />

      <main className="h-full p-2.5">
        <section className="flex justify-between p-2.5 items-center">
          <Button text="Volver" link="/" color="button-purple" />
          <Button text="Eliminar" link="/folders" color="button-red" />
          <Button text="Crear" color="button-green" onClick={handleOpenModal} />
        </section>

        <section className="p-2.5 flex flex-wrap gap-2.5 justify-between">
          {folders.map((folder) => (
            <Link href={`/folders/${folder}`} key={folder} className="w-[30%] flex flex-col items-center text-center p-2.5">
              <Image src="/images/folder.svg" alt="Carpetas" width={100} height={100} priority />
              <p className="text-white mt-2">modelos-{folder}-2025-1</p>
            </Link>
          ))}

          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
              <div className="bg-platinum text-black p-6 rounded-lg w-4/5">
                <h2 className="text-xl font-bold mb-4 text-center">Crear carpeta</h2>

                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const name = `${subject}-${group}-${year}-${semester}`;
                    try {
                      await axiosInstance.post("/ruta-del-backend", { name });
                      console.log("Carpeta creada:", name);
                      setShowModal(false);
                      setSubject("");
                      setGroup("");
                      setYear("");
                      setSemester("");
                    } catch (error) {
                      console.error(error);
                    }
                  }}
                  className="flex flex-col items-center"
                >
                  <div className="inputGroup">
                    <input type="text" required maxLength={20} name="subject" id="subject" value={subject} onChange={e => setSubject(e.target.value.toLowerCase())} />
                    <label htmlFor="subject">Asignatura</label>
                  </div>

                  <div className="inputGroup">
                    <input type="number" required max={99} name="group" id="group" value={group} onChange={e => setGroup(e.target.value)} />
                    <label htmlFor="group">Grupo</label>
                  </div>

                  <div className="inputGroup">
                    <input type="number" required max={2099} name="year" id="year" value={year} onChange={e => setYear(e.target.value)} />
                    <label htmlFor="year">Año</label>
                  </div>

                  <div className="inputGroup">
                    <input type="number" required max={3} name="semester" id="semester" value={semester} onChange={e => setSemester(e.target.value)} />
                    <label htmlFor="semester">Semestre</label>
                  </div>

                  <div className="flex justify-between mt-4">
                    <button onClick={handleCloseModal} className="bg-red-600 text-white font-bold px-4 py-2 rounded-full w-1/2 mr-2">Cancelar</button>
                    <button type="submit" className="bg-green-600 text-white font-bold px-4 py-2 rounded-full w-1/2 ml-2">Crear</button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
