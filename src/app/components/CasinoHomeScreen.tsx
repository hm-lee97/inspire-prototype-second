import { Coins, TrendingUp, Trophy, Dice5, History, QrCode, Gift, Zap } from "lucide-react";

export function CasinoHomeScreen() {
  return (
    <div className="min-h-full bg-gradient-to-b from-purple-50 to-white p-6">
      {/* Welcome Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">INSPIRE Casino</h1>
        <div className="mt-2 flex items-center gap-2">
          <div className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-1">
            <span className="text-xs font-semibold text-white">VIP GOLD</span>
          </div>
          <span className="text-sm text-gray-600">Park Ji-hoon</span>
        </div>
      </div>

      {/* Casino Credits Card */}
      <div className="mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 p-6 text-white shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-sm opacity-90">Casino Credits</p>
            <p className="text-3xl font-bold">57,250</p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
            <Coins className="h-6 w-6" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 border-t border-white/20 pt-4">
          <div>
            <p className="text-xs opacity-75">Available Chips</p>
            <p className="text-lg font-semibold">$2,850</p>
          </div>
          <div>
            <p className="text-xs opacity-75">Comp Points</p>
            <p className="text-lg font-semibold">12,450</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-6">
        <h2 className="mb-3 text-lg font-semibold text-gray-900">Quick Access</h2>
        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
              <QrCode className="h-6 w-6 text-purple-600" />
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold text-gray-900">Casino Entry</div>
              <div className="text-xs text-gray-600">Generate QR</div>
            </div>
          </button>
          <button className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
              <Coins className="h-6 w-6 text-orange-600" />
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold text-gray-900">Chip Exchange</div>
              <div className="text-xs text-gray-600">Use vouchers</div>
            </div>
          </button>
        </div>
      </div>

      {/* Jackpot Alert */}
      <div className="mb-6 overflow-hidden rounded-xl bg-gradient-to-r from-yellow-50 via-amber-50 to-orange-50 p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-orange-500">
            <Trophy className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">Progressive Jackpot</h3>
            <p className="text-2xl font-bold text-orange-600">₩124,580,000</p>
          </div>
          <Zap className="h-6 w-6 animate-pulse text-orange-500" />
        </div>
      </div>

      {/* Active Vouchers */}
      <div className="mb-6">
        <h2 className="mb-3 text-lg font-semibold text-gray-900">Active Vouchers</h2>
        <div className="space-y-3">
          <div className="overflow-hidden rounded-xl bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-100 to-pink-100">
                  <Gift className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Casino Chip Voucher</h3>
                  <p className="text-xs text-gray-600">Welcome Bonus</p>
                  <p className="mt-1 text-xs text-orange-600">Expires Jan 30, 2026</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-purple-600">$500</div>
                <button className="mt-1 text-xs text-purple-600 hover:underline">Redeem</button>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100">
                  <Dice5 className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Free Play Credit</h3>
                  <p className="text-xs text-gray-600">VIP Reward</p>
                  <p className="mt-1 text-xs text-orange-600">Expires Feb 15, 2026</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-purple-600">$200</div>
                <button className="mt-1 text-xs text-purple-600 hover:underline">Use Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mb-6">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
          <button className="text-sm text-purple-600 hover:underline">View All</button>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between rounded-lg bg-white p-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                <TrendingUp className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">Slot Machine - Win</div>
                <div className="text-xs text-gray-600">Today 6:45 PM</div>
              </div>
            </div>
            <div className="text-sm font-semibold text-green-600">+$1,250</div>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-white p-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                <Dice5 className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">Blackjack Table</div>
                <div className="text-xs text-gray-600">Today 5:30 PM</div>
              </div>
            </div>
            <div className="text-sm font-semibold text-gray-900">-$500</div>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-white p-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                <Coins className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">Chip Purchase</div>
                <div className="text-xs text-gray-600">Today 4:00 PM</div>
              </div>
            </div>
            <div className="text-sm font-semibold text-gray-900">$2,000</div>
          </div>
        </div>
      </div>

      {/* Loyalty Progress */}
      <div className="rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 p-4">
        <h3 className="mb-3 font-semibold text-gray-900">VIP Progress</h3>
        <div className="mb-2 h-2 overflow-hidden rounded-full bg-white">
          <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"></div>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-700">Gold Tier</span>
          <span className="font-semibold text-purple-600">15,750 / 20,000 CP</span>
        </div>
        <p className="mt-2 text-xs text-gray-600">
          4,250 comp points to Platinum tier with exclusive benefits
        </p>
      </div>
    </div>
  );
}
