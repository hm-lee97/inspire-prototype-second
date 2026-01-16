import { useState } from "react";
import { Home, Calendar, Key, Bell, Menu } from "lucide-react";
import { HomeScreen } from "@/app/components/HomeScreen";
import { BookingScreen } from "@/app/components/BookingScreen";
import { CasinoEntryScreen } from "@/app/components/CasinoEntryScreen";
import { WalletScreen } from "@/app/components/WalletScreen";
import { OnboardingScreen } from "@/app/components/OnboardingScreen";
import { SplashScreen } from "@/app/components/SplashScreen";

type TabType = "home" | "booking" | "entry" | "wallet" | "menu";

export default function App() {
  /* SplashScreen State */
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState<TabType>("home");
  const [showOnboarding, setShowOnboarding] = useState(false);

  const renderContent = () => {
    if (showOnboarding) {
      return <OnboardingScreen onComplete={() => setShowOnboarding(false)} />;
    }

    switch (activeTab) {
      case "home":
        return <HomeScreen />;
      case "booking":
        return <BookingScreen />;
      case "entry":
        return <CasinoEntryScreen />;
      case "wallet":
        return <WalletScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100">
      {/* Mobile Frame */}
      <div className="relative h-[844px] w-[390px] overflow-hidden rounded-[60px] border-[14px] border-gray-900 bg-white shadow-2xl">
        {showSplash ? (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        ) : (
          <>
            {/* Status Bar */}
            <div className="flex h-11 items-center justify-between bg-white px-6 pt-2">
              <span className="text-sm font-semibold">9:41</span>
              <div className="flex items-center gap-1">
                <div className="h-3 w-4 rounded-sm border border-gray-900"></div>
                <div className="h-3 w-4 rounded-sm border border-gray-900"></div>
                <div className="h-3 w-2 rounded-sm border border-gray-900"></div>
              </div>
            </div>

            {/* Main Content */}
            <div className="h-[calc(100%-44px-88px)] overflow-y-auto bg-gray-50">
              {renderContent()}
            </div>

            {/* Bottom Navigation */}
            <div className="absolute bottom-0 left-0 right-0 flex h-[88px] items-start justify-around border-t border-gray-200 bg-white pb-6 pt-2">
              <button
                onClick={() => setActiveTab("home")}
                className={`flex flex-col items-center gap-1 ${activeTab === "home" ? "text-purple-600" : "text-gray-500"
                  }`}
              >
                <Home className="h-6 w-6" />
                <span className="text-xs">Home</span>
              </button>
              <button
                onClick={() => setActiveTab("booking")}
                className={`flex flex-col items-center gap-1 ${activeTab === "booking" ? "text-purple-600" : "text-gray-500"
                  }`}
              >
                <Calendar className="h-6 w-6" />
                <span className="text-xs">Booking</span>
              </button>
              <button
                onClick={() => setActiveTab("entry")}
                className="relative -mt-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg"
              >
                <Key className="h-7 w-7 text-white" />
              </button>
              <button
                onClick={() => setActiveTab("wallet")}
                className={`flex flex-col items-center gap-1 ${activeTab === "wallet" ? "text-purple-600" : "text-gray-500"
                  }`}
              >
                <Bell className="h-6 w-6" />
                <span className="text-xs">Wallet</span>
              </button>
              <button
                onClick={() => setShowOnboarding(true)}
                className={`flex flex-col items-center gap-1 ${activeTab === "menu" ? "text-purple-600" : "text-gray-500"
                  }`}
              >
                <Menu className="h-6 w-6" />
                <span className="text-xs">Menu</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}