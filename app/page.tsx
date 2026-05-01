"use client";
import { useState } from "react";
import { Coins, Droplets, Map as MapIcon, Hammer } from "lucide-react";

export default function Game() {
  const [gold, setGold] = useState(1000);
  const [oil, setOil] = useState(500);

  return (
    <main className="h-screen w-screen relative select-none touch-none">
      {/* 🏛️ World Map Grid */}
      <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 gap-1 bg-stone-800 p-2">
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i} className="bg-stone-700/50 border border-stone-600 rounded-sm active:bg-amber-900/30 transition-colors" />
        ))}
      </div>

      {/* 💰 Top HUD */}
      <div className="absolute top-4 left-0 w-full px-6 flex justify-between pointer-events-none">
        <div className="flex gap-4">
          <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 border border-amber-500/50 shadow-lg">
            <Coins className="text-amber-500 w-5 h-5" />
            <span className="font-bold text-amber-50">{gold}</span>
          </div>
          <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 border border-blue-500/50 shadow-lg">
            <Droplets className="text-blue-500 w-5 h-5" />
            <span className="font-bold text-blue-50">{oil}</span>
          </div>
        </div>
      </div>

      {/* 🏗️ iPad Build Button */}
      <div className="absolute bottom-8 right-8">
        <button className="h-20 w-20 bg-amber-600 rounded-3xl shadow-2xl flex items-center justify-center active:scale-90 active:bg-amber-700 transition-all border-t-4 border-amber-400">
          <Hammer className="text-white w-10 h-10" />
        </button>
      </div>
    </main>
  );
}
