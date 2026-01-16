import { useState } from "react";
import { Building2, Dices } from "lucide-react";
import { ResortHomeScreen } from "@/app/components/ResortHomeScreen";
import { CasinoHomeScreen } from "@/app/components/CasinoHomeScreen";

type HomeMode = "resort" | "casino";

export function HomeScreen() {
  const [mode, setMode] = useState<HomeMode>("resort");

  return (
    <div className="min-h-full bg-gray-50">
      {/* Mode Switcher */}
      <div className="sticky top-0 z-10 border-b border-gray-200 bg-white px-6 pt-4 pb-3">
        <div className="flex gap-2 rounded-xl bg-gray-100 p-1">
          <button
            onClick={() => setMode("resort")}
            className={`flex flex-1 items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold transition ${
              mode === "resort"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <Building2 className="h-4 w-4" />
            <span>Resort</span>
          </button>
          <button
            onClick={() => setMode("casino")}
            className={`flex flex-1 items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold transition ${
              mode === "casino"
                ? "bg-white text-purple-600 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <Dices className="h-4 w-4" />
            <span>Casino</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="animate-fade-in">
        {mode === "resort" ? <ResortHomeScreen /> : <CasinoHomeScreen />}
      </div>
    </div>
  );
}
