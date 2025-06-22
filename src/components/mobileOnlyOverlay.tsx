"use client";
import React, { useEffect, useState } from "react";

export default function MobileOnlyOverlay() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const checkScreen = () => setShow(window.innerWidth > 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex flex-col items-center justify-center">
      <div className="bg-white rounded-lg p-8 shadow-lg text-center max-w-xs">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Ups! Solo para móviles</h2>
        <p className="text-gray-700">Esta aplicación está diseñada para usarse en dispositivos móviles.</p>
      </div>
    </div>
  );
}