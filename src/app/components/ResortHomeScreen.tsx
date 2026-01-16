import { Hotel, Utensils, Music, Calendar, Gift, Sparkles, MapPin } from "lucide-react";

export function ResortHomeScreen() {
  return (
    <div className="min-h-full bg-gradient-to-b from-blue-50 to-white p-6">
      {/* Welcome Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Welcome to INSPIRE Resort</h1>
        <div className="mt-2 flex items-center gap-2">
          <div className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-1">
            <span className="text-xs font-semibold text-white">PLATINUM MEMBER</span>
          </div>
          <span className="text-sm text-gray-600">Park Ji-hoon</span>
        </div>
      </div>

      {/* Resort Points Card */}
      <div className="mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 p-6 text-white shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-sm opacity-90">Resort Points</p>
            <p className="text-3xl font-bold">68,200</p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
            <Sparkles className="h-6 w-6" />
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-white/20 pt-4">
          <div>
            <p className="text-xs opacity-75">Next Tier Benefit</p>
            <p className="text-sm font-semibold">1,800 points to Diamond</p>
          </div>
          <button className="rounded-lg bg-white/20 px-4 py-2 text-xs font-semibold backdrop-blur-sm transition hover:bg-white/30">
            View Details
          </button>
        </div>
      </div>

      {/* Current Stay */}
      <div className="mb-6">
        <h2 className="mb-3 text-lg font-semibold text-gray-900">Your Stay</h2>
        <div className="overflow-hidden rounded-xl bg-white p-4 shadow-sm">
          <div className="mb-3 flex items-start gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
              <Hotel className="h-6 w-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">Deluxe Ocean View</h3>
              <p className="text-sm text-gray-600">Room 1502 • Floor 15</p>
              <p className="mt-1 text-xs text-gray-500">Jan 25 - Jan 27, 2026 • 2 Nights</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button className="rounded-lg bg-blue-600 py-2 text-sm font-semibold text-white">
              Mobile Check-in
            </button>
            <button className="rounded-lg border border-blue-600 py-2 text-sm font-semibold text-blue-600">
              Room Service
            </button>
          </div>
        </div>
      </div>

      {/* Resort Services */}
      <div className="mb-6">
        <h2 className="mb-3 text-lg font-semibold text-gray-900">Resort Services</h2>
        <div className="grid grid-cols-3 gap-3">
          <button className="flex flex-col items-center gap-2 rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
              <Utensils className="h-6 w-6 text-orange-600" />
            </div>
            <span className="text-xs font-medium text-gray-700">Dining</span>
          </button>
          <button className="flex flex-col items-center gap-2 rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
              <Music className="h-6 w-6 text-purple-600" />
            </div>
            <span className="text-xs font-medium text-gray-700">Shows</span>
          </button>
          <button className="flex flex-col items-center gap-2 rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <MapPin className="h-6 w-6 text-green-600" />
            </div>
            <span className="text-xs font-medium text-gray-700">Concierge</span>
          </button>
        </div>
      </div>

      {/* Today's Schedule */}
      <div className="mb-6">
        <h2 className="mb-3 text-lg font-semibold text-gray-900">Today's Schedule</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-3 rounded-lg bg-white p-3 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100">
              <Utensils className="h-5 w-5 text-orange-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-gray-900">Sky Lounge Reservation</h3>
              <p className="text-xs text-gray-600">Tonight 7:00 PM • Table for 2</p>
            </div>
            <button className="text-xs text-blue-600 hover:underline">View</button>
          </div>
          <div className="flex items-center gap-3 rounded-lg bg-white p-3 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
              <Music className="h-5 w-5 text-purple-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-gray-900">Cirque Spectacular</h3>
              <p className="text-xs text-gray-600">Tomorrow 8:00 PM • Premium Seats</p>
            </div>
            <button className="text-xs text-blue-600 hover:underline">View</button>
          </div>
        </div>
      </div>

      {/* Special Offers */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-gray-900">Exclusive for You</h2>
        <div className="space-y-3">
          <div className="overflow-hidden rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                <Gift className="h-5 w-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">Spa Day Package</h3>
                <p className="text-xs text-gray-600">30% off for Platinum members</p>
              </div>
              <button className="rounded-lg bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                Book
              </button>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl bg-gradient-to-r from-orange-50 to-amber-50 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                <Calendar className="h-5 w-5 text-orange-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">Extended Stay Bonus</h3>
                <p className="text-xs text-gray-600">Add 1 night, get 2000 bonus points</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
