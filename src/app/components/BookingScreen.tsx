import { useState } from "react";
import { Hotel, Utensils, Music, Waves, Calendar, Clock, Users, ChevronRight, Search, Star } from "lucide-react";

type BookingCategory = "hotel" | "dining" | "entertainment" | "spa";

export function BookingScreen() {
  const [selectedCategory, setSelectedCategory] = useState<BookingCategory>("hotel");
  const [showDetail, setShowDetail] = useState(false);

  const categories = [
    { id: "hotel" as BookingCategory, name: "Hotel", icon: Hotel, color: "blue" },
    { id: "dining" as BookingCategory, name: "Dining", icon: Utensils, color: "orange" },
    { id: "entertainment" as BookingCategory, name: "Shows", icon: Music, color: "purple" },
    { id: "spa" as BookingCategory, name: "Spa", icon: Waves, color: "teal" },
  ];

  const hotelRooms = [
    {
      id: 1,
      name: "Deluxe Ocean View",
      price: "₩450,000",
      image: "🏖️",
      rating: 4.8,
      reviews: 324,
      size: "42㎡",
      beds: "King Bed",
      amenities: ["Ocean View", "Balcony", "Mini Bar"],
    },
    {
      id: 2,
      name: "Premium Suite",
      price: "₩780,000",
      image: "🏰",
      rating: 4.9,
      reviews: 156,
      size: "68㎡",
      beds: "King + Sofa Bed",
      amenities: ["Living Room", "Jacuzzi", "Butler Service"],
    },
    {
      id: 3,
      name: "Standard Double",
      price: "₩320,000",
      image: "🛏️",
      rating: 4.6,
      reviews: 521,
      size: "32㎡",
      beds: "2 Double Beds",
      amenities: ["City View", "Work Desk", "Coffee Maker"],
    },
  ];

  const restaurants = [
    {
      id: 1,
      name: "Sky Lounge",
      cuisine: "French Fine Dining",
      image: "🍷",
      rating: 4.9,
      priceRange: "₩₩₩₩",
      available: "Tonight 7:00 PM",
      features: ["Rooftop", "Wine Cellar", "Chef's Table"],
    },
    {
      id: 2,
      name: "Hana Sushi Bar",
      cuisine: "Japanese Omakase",
      image: "🍣",
      rating: 4.8,
      priceRange: "₩₩₩",
      available: "Tonight 8:30 PM",
      features: ["Bar Seating", "Premium Sake", "Live Preparation"],
    },
    {
      id: 3,
      name: "The Grill House",
      cuisine: "Premium Steakhouse",
      image: "🥩",
      rating: 4.7,
      priceRange: "₩₩₩₩",
      available: "Tomorrow 6:00 PM",
      features: ["Private Rooms", "Dry-Aged Beef", "Wine Pairing"],
    },
  ];

  const shows = [
    {
      id: 1,
      name: "Cirque Spectacular",
      type: "Acrobatic Show",
      image: "🎪",
      rating: 4.9,
      duration: "90 min",
      price: "₩120,000",
      nextShow: "Jan 20, 8:00 PM",
      seats: "Limited Seats",
    },
    {
      id: 2,
      name: "K-Pop Live Concert",
      type: "Music Concert",
      image: "🎤",
      rating: 4.8,
      duration: "120 min",
      price: "₩180,000",
      nextShow: "Jan 22, 7:30 PM",
      seats: "Available",
    },
    {
      id: 3,
      name: "Splash Bay Water Park",
      type: "Day Pass",
      image: "🌊",
      rating: 4.7,
      duration: "All Day",
      price: "₩65,000",
      nextShow: "Daily 10:00 AM",
      seats: "Available",
    },
  ];

  const renderCategoryContent = () => {
    switch (selectedCategory) {
      case "hotel":
        return (
          <div className="space-y-4">
            {hotelRooms.map((room) => (
              <button
                key={room.id}
                onClick={() => setShowDetail(true)}
                className="w-full overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="flex gap-4 p-4">
                  <div className="flex h-24 w-24 items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 text-4xl">
                    {room.image}
                  </div>
                  <div className="flex-1 text-left">
                    <div className="mb-1 flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900">{room.name}</h3>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-purple-600">{room.price}</div>
                        <div className="text-xs text-gray-500">per night</div>
                      </div>
                    </div>
                    <div className="mb-2 flex items-center gap-1 text-xs">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-gray-900">{room.rating}</span>
                      <span className="text-gray-500">({room.reviews} reviews)</span>
                    </div>
                    <div className="mb-2 flex gap-3 text-xs text-gray-600">
                      <span>📏 {room.size}</span>
                      <span>🛏️ {room.beds}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {room.amenities.slice(0, 2).map((amenity, idx) => (
                        <span
                          key={idx}
                          className="rounded-full bg-blue-50 px-2 py-0.5 text-xs text-blue-700"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        );

      case "dining":
        return (
          <div className="space-y-4">
            {restaurants.map((restaurant) => (
              <button
                key={restaurant.id}
                onClick={() => setShowDetail(true)}
                className="w-full overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="flex gap-4 p-4">
                  <div className="flex h-24 w-24 items-center justify-center rounded-lg bg-gradient-to-br from-orange-100 to-orange-50 text-4xl">
                    {restaurant.image}
                  </div>
                  <div className="flex-1 text-left">
                    <div className="mb-1 flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900">{restaurant.name}</h3>
                      <span className="text-sm font-medium text-gray-600">
                        {restaurant.priceRange}
                      </span>
                    </div>
                    <p className="mb-2 text-sm text-gray-600">{restaurant.cuisine}</p>
                    <div className="mb-2 flex items-center gap-1 text-xs">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-gray-900">{restaurant.rating}</span>
                    </div>
                    <div className="mb-2 flex items-center gap-1 text-xs text-green-600">
                      <Clock className="h-3 w-3" />
                      <span className="font-medium">{restaurant.available}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {restaurant.features.slice(0, 2).map((feature, idx) => (
                        <span
                          key={idx}
                          className="rounded-full bg-orange-50 px-2 py-0.5 text-xs text-orange-700"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        );

      case "entertainment":
        return (
          <div className="space-y-4">
            {shows.map((show) => (
              <button
                key={show.id}
                onClick={() => setShowDetail(true)}
                className="w-full overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="flex gap-4 p-4">
                  <div className="flex h-24 w-24 items-center justify-center rounded-lg bg-gradient-to-br from-purple-100 to-purple-50 text-4xl">
                    {show.image}
                  </div>
                  <div className="flex-1 text-left">
                    <div className="mb-1 flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900">{show.name}</h3>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-purple-600">{show.price}</div>
                      </div>
                    </div>
                    <p className="mb-2 text-sm text-gray-600">{show.type}</p>
                    <div className="mb-2 flex items-center gap-1 text-xs">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-gray-900">{show.rating}</span>
                      <span className="text-gray-500">• {show.duration}</span>
                    </div>
                    <div className="mb-1 flex items-center gap-1 text-xs text-gray-600">
                      <Calendar className="h-3 w-3" />
                      <span>{show.nextShow}</span>
                    </div>
                    <span className="rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
                      {show.seats}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        );

      case "spa":
        return (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="mb-4 text-6xl">🧖</div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">Spa & Wellness</h3>
            <p className="mb-6 text-sm text-gray-600">Premium spa services coming soon</p>
            <button className="rounded-lg bg-purple-600 px-6 py-2 text-sm font-semibold text-white">
              Request Callback
            </button>
          </div>
        );
    }
  };

  if (showDetail) {
    return (
      <div className="min-h-full bg-white">
        <div className="border-b border-gray-200 bg-white p-6">
          <button onClick={() => setShowDetail(false)} className="mb-2 text-sm text-purple-600">
            ← Back to Listings
          </button>
          <h1 className="text-xl font-bold text-gray-900">Booking Details</h1>
        </div>
        <div className="p-6">
          <div className="mb-6 flex h-48 items-center justify-center rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 text-6xl">
            🏖️
          </div>
          <h2 className="mb-2 text-2xl font-bold text-gray-900">Deluxe Ocean View</h2>
          <div className="mb-4 flex items-center gap-2">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium text-gray-900">4.8</span>
            <span className="text-sm text-gray-500">(324 reviews)</span>
          </div>

          <div className="mb-6 space-y-3">
            <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-3">
              <Calendar className="h-5 w-5 text-purple-600" />
              <div className="flex-1">
                <div className="text-xs text-gray-600">Check-in • Check-out</div>
                <div className="font-medium text-gray-900">Jan 25 - Jan 27, 2026</div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-3">
              <Users className="h-5 w-5 text-purple-600" />
              <div className="flex-1">
                <div className="text-xs text-gray-600">Guests</div>
                <div className="font-medium text-gray-900">2 Adults</div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="mb-3 font-semibold text-gray-900">Room Features</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg bg-blue-50 p-3 text-sm text-gray-700">📏 42㎡</div>
              <div className="rounded-lg bg-blue-50 p-3 text-sm text-gray-700">🛏️ King Bed</div>
              <div className="rounded-lg bg-blue-50 p-3 text-sm text-gray-700">🌊 Ocean View</div>
              <div className="rounded-lg bg-blue-50 p-3 text-sm text-gray-700">🍸 Mini Bar</div>
            </div>
          </div>

          <div className="mb-6 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-gray-700">2 nights</span>
              <span className="text-gray-900">₩900,000</span>
            </div>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-gray-700">Service charge</span>
              <span className="text-gray-900">₩90,000</span>
            </div>
            <div className="mb-2 flex items-center justify-between text-sm text-green-600">
              <span>VIP Discount (10%)</span>
              <span>-₩99,000</span>
            </div>
            <div className="border-t border-purple-200 pt-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-900">Total</span>
                <span className="text-xl font-bold text-purple-600">₩891,000</span>
              </div>
            </div>
          </div>

          <button className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 py-4 font-semibold text-white shadow-lg transition hover:shadow-xl">
            Confirm Booking
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-gray-50">
      {/* Header */}
      <div className="bg-white p-6">
        <h1 className="mb-4 text-2xl font-bold text-gray-900">Reservations</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search hotels, restaurants, shows..."
            className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 text-sm"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="border-b border-gray-200 bg-white px-6">
        <div className="flex gap-4 overflow-x-auto">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex flex-col items-center gap-1 border-b-2 pb-3 pt-2 transition ${
                  isActive
                    ? "border-purple-600 text-purple-600"
                    : "border-transparent text-gray-500"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="whitespace-nowrap text-xs font-medium">{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Category Content */}
      <div className="p-6">{renderCategoryContent()}</div>
    </div>
  );
}
