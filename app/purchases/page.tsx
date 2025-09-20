"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  Calendar,
  MapPin,
  MoreVertical,
  ShoppingBag,
  Home,
  Gift,
  Percent,
  Package,
  CreditCard,
} from "lucide-react"
import { useRouter } from "next/navigation"

export default function PurchasesPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<"recent" | "history">("recent")

  const recentPurchases = [
    {
      id: 1,
      treatment: "Laser Facial Treatment",
      date: "Oct 15, 2025",
      amount: "2,450 DKK",
      status: "Completed",
      location: "Copenhagen Center",
      dateShort: "15/10",
      year: "2025",
    },
    {
      id: 2,
      treatment: "Premium Skin Care Package",
      date: "Sep 28, 2025",
      amount: "3,200 DKK",
      status: "Completed",
      location: "Østerbro Clinic",
      dateShort: "28/09",
      year: "2025",
    },
  ]

  const historyPurchases = [
    {
      id: 3,
      treatment: "Botox Treatment",
      date: "Aug 12, 2025",
      amount: "1,800 DKK",
      status: "Completed",
      location: "Copenhagen Center",
      dateShort: "12/08",
      year: "2025",
    },
    {
      id: 4,
      treatment: "Chemical Peel Session",
      date: "Jul 5, 2025",
      amount: "1,200 DKK",
      status: "Completed",
      location: "Vesterbro Clinic",
      dateShort: "05/07",
      year: "2025",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1D3F4F] via-[#2A5A6B] to-[#1D3F4F] pb-20">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push("/dashboard")}
                className="p-2 text-white/70 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">C</span>
                </div>
                <div>
                  <h1 className="text-white font-semibold">COSMO</h1>
                  <p className="text-white/60 text-xs">AESTHETIC SERVICES</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <select className="hidden sm:block bg-transparent text-white/70 text-sm border-none outline-none">
                <option>English</option>
              </select>
              <Button
                onClick={() => router.push("/book-time")}
                className="bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] hover:from-[#dc7867] hover:to-[#ec8a4a] text-white px-3 sm:px-6 py-2 rounded-xl transition-all duration-200 text-sm sm:text-base"
              >
                <span className="hidden sm:inline">Book a Time</span>
                <span className="sm:hidden">Book</span>
              </Button>
              <Button
                onClick={() => router.push("/signup")}
                variant="ghost"
                className="hidden sm:flex text-white/70 hover:text-white"
              >
                Log Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-48 sm:h-64 overflow-hidden">
        <img
          src="/flat-lay-medical-elements-arrangement-with-copy-space (1).jpg"
          alt="Luxury cosmetic products"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white font-serif font-medium leading-7 text-3xl sm:text-4xl lg:text-5xl">PURCHASES</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="bg-white/5 backdrop-blur-sm border-white/10 rounded-xl p-1 flex border flex-row gap-2 sm:gap-3 w-full max-w-md">
            <button
              onClick={() => setActiveTab("recent")}
              className={`flex-1 px-4 sm:px-6 py-2 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base ${
                activeTab === "recent"
                  ? "bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] text-white shadow-lg"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              Recent Purchases
            </button>
            <button
              onClick={() => setActiveTab("history")}
              className={`flex-1 px-4 sm:px-6 py-2 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base ${
                activeTab === "history"
                  ? "bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] text-white shadow-lg"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              Purchase History
            </button>
          </div>
        </div>

        {/* Purchases List */}
        <div className="space-y-4 mb-[60px]">
          {activeTab === "recent" &&
            recentPurchases.map((purchase) => (
              <div
                key={purchase.id}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex items-start space-x-4">
                    {/* Date Circle */}
                    <div className="bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] rounded-full w-14 h-14 sm:w-16 sm:h-16 flex flex-col items-center justify-center text-white flex-shrink-0">
                      <span className="text-xs font-medium">{purchase.dateShort}</span>
                      <span className="text-xs">{purchase.year}</span>
                    </div>

                    {/* Purchase Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 truncate">
                        {purchase.treatment}
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center text-white/70">
                          <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span className="text-sm truncate">{purchase.date}</span>
                        </div>
                        <div className="flex items-center text-white/70">
                          <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span className="text-sm truncate">{purchase.location}</span>
                        </div>
                        <div className="flex items-center text-white/70">
                          <CreditCard className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span className="text-sm font-semibold">{purchase.amount}</span>
                        </div>
                        <div className="flex items-center">
                          <div className="flex items-center text-green-400">
                            <Package className="w-4 h-4 mr-2 flex-shrink-0" />
                            <span className="text-sm font-medium">{purchase.status}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-end space-x-2 sm:flex-col sm:space-x-0 sm:space-y-2">
                    <Button className="bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] hover:from-[#dc7867] hover:to-[#ec8a4a] text-white px-4 py-2 rounded-xl transition-all duration-200 text-sm">
                      View Receipt
                    </Button>
                    <button className="p-2 text-white/70 hover:text-white transition-colors">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

          {activeTab === "history" &&
            historyPurchases.map((purchase) => (
              <div
                key={purchase.id}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex items-start space-x-4">
                    {/* Date Circle */}
                    <div className="bg-white/20 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex flex-col items-center justify-center text-white/70 flex-shrink-0">
                      <span className="text-xs font-medium">{purchase.dateShort}</span>
                      <span className="text-xs">{purchase.year}</span>
                    </div>

                    {/* Purchase Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-semibold text-white/80 mb-2 truncate">
                        {purchase.treatment}
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center text-white/60">
                          <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span className="text-sm truncate">{purchase.date}</span>
                        </div>
                        <div className="flex items-center text-white/60">
                          <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span className="text-sm truncate">{purchase.location}</span>
                        </div>
                        <div className="flex items-center text-white/60">
                          <CreditCard className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span className="text-sm font-semibold">{purchase.amount}</span>
                        </div>
                        <div className="flex items-center">
                          <div className="flex items-center text-green-400/70">
                            <Package className="w-4 h-4 mr-2 flex-shrink-0" />
                            <span className="text-sm font-medium">{purchase.status}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-end space-x-2 sm:flex-col sm:space-x-0 sm:space-y-2">
                    <Button className="bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] hover:from-[#dc7867] hover:to-[#ec8a4a] text-white px-4 py-2 rounded-xl transition-all duration-200 text-sm">
                      View Receipt
                    </Button>
                    <button className="p-2 text-white/70 hover:text-white transition-colors">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Empty State */}
        {((activeTab === "recent" && recentPurchases.length === 0) ||
          (activeTab === "history" && historyPurchases.length === 0)) && (
          <div className="text-center py-12">
            <ShoppingBag className="w-16 h-16 text-white/30 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white/70 mb-2">No purchases found</h3>
            <p className="text-white/50 mb-6 px-4">
              {activeTab === "recent"
                ? "You don't have any recent purchases."
                : "You don't have any purchase history yet."}
            </p>
            <Button
              onClick={() => router.push("/book-time")}
              className="bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] hover:from-[#dc7867] hover:to-[#ec8a4a] text-white px-6 py-3 rounded-xl transition-all duration-200"
            >
              Book Your First Treatment
            </Button>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#1D3F4F]/90 backdrop-blur-sm border-t border-[#3A6A7B]/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-around py-4">
            <button
              onClick={() => router.push("/dashboard")}
              className="flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors"
            >
              <Home className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-xs">Home</span>
            </button>
            <button
              onClick={() => router.push("/purchases")}
              className="flex flex-col items-center gap-1 text-[#DC7867]"
            >
              <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-xs">Purchases</span>
            </button>
            <button
              onClick={() => router.push("/booking")}
              className="flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors"
            >
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-xs">Booking</span>
            </button>
            <button
              onClick={() => router.push("/voucher")}
              className="flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors"
            >
              <Gift className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-xs">Voucher</span>
            </button>
            <button
              onClick={() => router.push("/coupon")}
              className="flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors"
            >
              <Percent className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-xs">Discount</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}
