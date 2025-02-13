"use client"
import React from "react";
import dynamic from "next/dynamic";

// use dynamic import to prevent SSR issues with the globe
const World = dynamic(() => import("../ui/globe").then((m) => m.World), {
  ssr: false,
});

export default function FamilyIntro() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#0041A3",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.15,
    emissive: "#0047AB",
    emissiveIntensity: 0.2,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 14.5995, lng: 120.9842 }, // Manila
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const colors = ["#06b6d4", "#3b82f6", "#6366f1"]; // cyan, blue, indigo

  const journeyArcs = [
    {
      order: 1,
      startLat: 14.5995, // Manila
      startLng: 120.9842,
      endLat: 40.7128, // New Jersey
      endLng: -74.0060,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      order: 2,
      startLat: 40.7128,
      startLng: -74.0060,
      endLat: 14.5995,
      endLng: 120.9842,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      order: 3,
      startLat: 14.5995,
      startLng: 120.9842,
      endLat: 40.7128,
      endLng: -74.0060,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      order: 4,
      startLat: 40.7128,
      startLng: -74.0060,
      endLat: 14.5995,
      endLng: 120.9842,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
    }
  ];

  return (
    <div className="flex flex-col items-center justify-start w-full min-h-screen py-16 px-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
                <span className="bg-gradient-to-r from-gray-400 to-white text-transparent bg-clip-text">
                  From Manila to<br />New Jersey.
                </span>
              </h2>
              <p className="text-md md:text-md font-normal opacity-80 text-neutral-300 leading-relaxed text-left">
                My parents emigrated to create a better life for their future children. Through perseverance, they built not just a living, but a family and a foundation their children could lean on. With two older brothers leading the way, I was the one who sat back and observed.
              </p>
            </div>
          </div>

          <div className="relative h-[450px] md:h-[600px] rounded-2xl p-4">
            <World data={journeyArcs} globeConfig={globeConfig} />
            <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent to-black z-40" />
          </div>
        </div>
      </div>
    </div>
  );
}