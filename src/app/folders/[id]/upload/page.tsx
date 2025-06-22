"use client";
import { useParams } from "next/navigation";
import Header from "@/components/header";
import Button from "@/components/button";
import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { Camera } from 'lucide-react';
import Image from "next/image";

export default function CamaraPage() {
    const params = useParams();
    const { id } = params;

    const webcamRef = useRef<Webcam>(null);
    const [capturedImage, setCapturedImage] = useState<string | null>(null);
    const [showModal, setShowModal] = useState(false);
    const videoConstraints = {
        width: 1200,
        height: 720,
        facingMode: "environment"
    };

    const capture = () => {
        const imageSrc = webcamRef.current?.getScreenshot({ width: 720, height: 1200 });
        if (imageSrc) {
            setCapturedImage(imageSrc);
            setShowModal(true);
        }
    };

    const confirmImage = () => {
        if (capturedImage) {
            // Crear un enlace temporal para descargar la imagen
            const link = document.createElement('a');
            link.href = capturedImage;
            link.download = 'foto.webp'; // nombre del archivo
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        setCapturedImage(null);
        setShowModal(false);
        // ... seguir con el flujo
    };

    const cancelImage = () => {
        setCapturedImage(null);
        setShowModal(false);
    };

    return (
        <div className="min-h-dvh bg-oxford-blue">
            <Header />

            <main className="h-full p-2.5">
                <section className="flex justify-between p-2.5 items-center">
                    <Button text="Volver" link={`/folders/${id}`} color="button-purple" />
                </section>

                <p className="text-center font-bold my-2">Asegurate de estar en un lugar iluminado y tomar la foto con claridad</p>

                <section className="flex flex-col items-center justify-center p-2.5">
                    {!capturedImage && (
                        <div className="relative w-4/5 aspect-[3/5] mb-4">
                            <Webcam
                                audio={false}
                                ref={webcamRef}
                                screenshotFormat="image/webp"
                                className="rounded-md"
                                width={720}
                                height={1200}
                                videoConstraints={videoConstraints}
                            />
                        </div>
                    )}

                    {!capturedImage && (
                        <button onClick={capture} className="mt-4 bg-blue-500 text-white p-4 rounded-full">
                            <Camera className="w-8 h-auto" />
                        </button>
                    )}


                    {showModal && capturedImage && (
                        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                            <div className="bg-platinum text-black p-6 rounded-lg w-4/5">
                                <p className="text-xl font-bold mb-4 text-center">¿Deseas guardar esta foto?</p>
                                <Image
                                    src={capturedImage}
                                    alt="Previsualización"
                                    className="rounded-md mb-4"
                                    width={720}
                                    height={720}
                                />
                                <div className="flex justify-between">
                                    <button
                                        onClick={cancelImage}
                                        className="bg-red-600 text-white font-bold px-4 py-2 rounded-full w-1/2 mr-2"
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        onClick={confirmImage}
                                        className="bg-green-600 text-white font-bold px-4 py-2 rounded-full w-1/2 ml-2"
                                    >
                                        Confirmar
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                </section>
            </main>
        </div>
    );
}
