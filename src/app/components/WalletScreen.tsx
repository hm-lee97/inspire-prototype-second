import { Wallet, TrendingUp, Gift, CreditCard, ChevronRight, QrCode } from "lucide-react";

export function WalletScreen() {
  const vouchers = [
    { id: 1, type: "Casino Chip", amount: "$500", expires: "Jan 30, 2026", source: "Welcome Bonus" },
    { id: 2, type: "F&B Credit", amount: "$150", expires: "Feb 15, 2026", source: "VIP Reward" },
    { id: 3, type: "Spa Voucher", amount: "$200", expires: "Feb 28, 2026", source: "Birthday Gift" },
  ];

  const transactions = [
    { id: 1, type: "Earned", description: "Hotel Stay Bonus", points: "+5,200", date: "Jan 15" },
    { id: 2, type: "Redeemed", description: "Restaurant Payment", points: "-2,500", date: "Jan 14" },
    { id: 3, type: "Earned", description: "Casino Play Reward", points: "+8,400", date: "Jan 13" },
  ];

  return (
    <div className="min-h-full bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 pb-12 text-white">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-xl font-bold">My Wallet</h1>
          <button className="rounded-full bg-white/20 p-2 backdrop-blur-sm">
            <Wallet className="h-5 w-5" />
          </button>
        </div>
        <div className="mb-2 text-sm opacity-90">Total Balance</div>
        <div className="mb-4 text-4xl font-bold">125,450</div>
        <div className="flex gap-4">
          <div className="flex-1 rounded-lg bg-white/10 p-3 backdrop-blur-sm">
            <div className="mb-1 text-xs opacity-75">Resort Points</div>
            <div className="text-lg font-semibold">68,200</div>
          </div>
          <div className="flex-1 rounded-lg bg-white/10 p-3 backdrop-blur-sm">
            <div className="mb-1 text-xs opacity-75">Casino Credits</div>
            <div className="text-lg font-semibold">57,250</div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="-mt-6 px-6">
        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-md transition hover:shadow-lg">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
              <TrendingUp className="h-5 w-5 text-purple-600" />
            </div>
            <div className="text-left">
              <div className="text-xs text-gray-600">Redeem</div>
              <div className="font-semibold text-gray-900">Points</div>
            </div>
          </button>
          <button className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-md transition hover:shadow-lg">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
              <QrCode className="h-5 w-5 text-orange-600" />
            </div>
            <div className="text-left">
              <div className="text-xs text-gray-600">Show</div>
              <div className="font-semibold text-gray-900">Barcode</div>
            </div>
          </button>
        </div>
      </div>

      {/* Vouchers */}
      <div className="mt-6 px-6">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Active Vouchers</h2>
          <button className="text-sm text-purple-600">See all</button>
        </div>
        <div className="space-y-3">
          {vouchers.map((voucher) => (
            <div
              key={voucher.id}
              className="overflow-hidden rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div className="flex gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-100 to-pink-100">
                    <Gift className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{voucher.type}</h3>
                    <p className="text-xs text-gray-600">{voucher.source}</p>
                    <p className="mt-1 text-xs text-orange-600">Expires {voucher.expires}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-purple-600">{voucher.amount}</div>
                  <button className="mt-1 text-xs text-purple-600 hover:underline">
                    Use Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Transactions */}
      <div className="mt-6 px-6 pb-6">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
          <button className="text-sm text-purple-600">View all</button>
        </div>
        <div className="space-y-2">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between rounded-lg bg-white p-4 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${
                    transaction.type === "Earned" ? "bg-green-100" : "bg-gray-100"
                  }`}
                >
                  <CreditCard
                    className={`h-5 w-5 ${
                      transaction.type === "Earned" ? "text-green-600" : "text-gray-600"
                    }`}
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{transaction.description}</div>
                  <div className="text-xs text-gray-600">{transaction.date}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`font-semibold ${
                    transaction.type === "Earned" ? "text-green-600" : "text-gray-900"
                  }`}
                >
                  {transaction.points}
                </span>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
