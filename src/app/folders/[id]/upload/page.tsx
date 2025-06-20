"use client";
import { useParams } from "next/navigation";
import Header from "@/components/header";
import Button from "@/components/button";
import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { Camera } from 'lucide-react';

export default function CamaraPage() {
    const params = useParams();
    const { id } = params;
    const webcamRef = useRef<Webcam>(null);
    const [capturedImage, setCapturedImage] = useState<string | null>(null);
    const [showModal, setShowModal] = useState(false);
    const aspectRatio = 3 / 5;
    const width = 300;
    const height = Math.round(width / aspectRatio);

    const capture = () => {
        const imageSrc = webcamRef.current?.getScreenshot();
        if (imageSrc) {
            setCapturedImage(imageSrc);
            setShowModal(true);
        }
    };

    const confirmImage = () => {
        // Aquí enviar la imagen al backend o guardarla
        console.log('Imagen confirmada:', capturedImage);

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
                    <Button text="Volver" link={`/folders/${id}`} color="button-back" />
                </section>

                <p className="text-center font-bold text-xl my-2">Tomar foto</p>

                <section className="flex flex-col items-center justify-center p-2.5">
                    {!capturedImage && (
                        <div className="relative w-[300px] h-[500px] mb-4">
                            <Webcam
                                audio={false}
                                ref={webcamRef}
                                screenshotFormat="image/jpeg"
                                className="rounded-md"
                                width={width}
                                height={height}
                                videoConstraints={{
                                    width,
                                    height,
                                    aspectRatio,
                                    facingMode: 'environment',
                                }}
                            />
                        </div>
                    )}

                    {!capturedImage && (
                        <button onClick={capture} className="mt-4 bg-blue-500 text-white p-4 rounded-full">
                            <Camera className="w-10 h-auto" />
                        </button>
                    )}


                    {showModal && capturedImage && (
                        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                            <div className="bg-blue-200 text-black p-6 rounded-lg w-[320px]">
                                <h2 className="text-xl font-semibold mb-4 text-center">¿Deseas guardar esta foto?</h2>
                                <img
                                    src={capturedImage}
                                    alt="Previsualización"
                                    className="rounded-md w-[300px] h-auto aspect-[3/5] mb-4"
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
