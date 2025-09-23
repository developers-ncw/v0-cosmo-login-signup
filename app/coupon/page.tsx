"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import { Percent, Users, Gift, Calendar, Home, ShoppingBag } from "lucide-react"
import { useRouter } from "next/navigation"

export default function CouponPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<"available" | "used">("available")

  const availableCoupons = [
    {
      id: "1",
      title: "Spar 40% på behandling",
      discount: "40% OFF",
      description: "Gælder alle ansigtsbehandlinger",
      status: "Available For Use",
    },
    {
      id: "2",
      title: "50% off første besøg",
      discount: "50% OFF",
      description: "Kun for nye kunder",
      status: "Available For Use",
    },
    {
      id: "3",
      title: "Gratis konsultation",
      discount: "FREE",
      description: "Laser hårfjernelse konsultation",
      status: "Available For Use",
    },
  ]

  const usedCoupons = [
    {
      id: "4",
      title: "30% off behandling",
      discount: "30% OFF",
      description: "Brugt på laser behandling",
      status: "Used",
      usedDate: "15/08/2025",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1D3F4F] via-[#2A5A6B] to-[#1D3F4F] pb-20">
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8">
        {/* Page Title */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-white mb-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium">Coupon</h1>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1 flex gap-2 sm:gap-3 w-full max-w-md">
            <button
              onClick={() => setActiveTab("available")}
              className={`flex-1 px-4 sm:px-6 py-2 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base ${
                activeTab === "available"
                  ? "bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] text-white shadow-lg"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              Available for Use
            </button>
            <button
              onClick={() => setActiveTab("used")}
              className={`flex-1 px-4 sm:px-6 py-2 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base ${
                activeTab === "used"
                  ? "bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] text-white shadow-lg"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              Used
            </button>
          </div>
        </div>

        {/* Coupons Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {activeTab === "available" &&
            availableCoupons.map((coupon) => (
              <div
                key={coupon.id}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] rounded-full flex items-center justify-center">
                    <Percent className="w-6 h-6 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    {coupon.status}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{coupon.title}</h3>
                <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] mb-2">
                  {coupon.discount}
                </div>
                <p className="text-white/70 text-sm mb-4">{coupon.description}</p>

                <Button className="w-full bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] hover:from-[#dc7867] hover:to-[#ec8a4a] text-white py-2 rounded-xl font-medium transition-all duration-200 text-sm sm:text-base">
                  Use Coupon
                </Button>
              </div>
            ))}

          {activeTab === "used" &&
            usedCoupons.map((coupon) => (
              <div
                key={coupon.id}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 opacity-75 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Percent className="w-6 h-6 text-white/70" />
                  </div>
                  <span className="bg-white/20 text-white/70 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    {coupon.status}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-white/80 mb-2">{coupon.title}</h3>
                <div className="text-xl sm:text-2xl font-bold text-white/60 mb-2">{coupon.discount}</div>
                <p className="text-white/60 text-sm mb-2">{coupon.description}</p>
                <p className="text-white/50 text-xs mb-4">Used on {coupon.usedDate}</p>

                <Button
                  disabled
                  className="w-full bg-white/10 text-white/50 py-2 rounded-xl font-medium cursor-not-allowed text-sm sm:text-base"
                >
                  Already Used
                </Button>
              </div>
            ))}
        </div>

        {/* Invite Friends Section */}
        <div className="bg-gradient-to-r from-[#2A5A6B]/50 to-[#1D3F4F]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-white mb-2 font-serif font-medium text-xl sm:text-2xl lg:text-3xl">
            Invite Friends & Earn
          </h3>
          <p className="text-white/70 mb-4 sm:mb-6 text-sm sm:text-base">
            Refer friends and earn 10 points for each successful booking
          </p>
          <Button
            onClick={() => router.push("/refer-friend")}
            className="bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] hover:from-[#dc7867] hover:to-[#ec8a4a] text-white px-6 sm:px-8 py-3 rounded-xl font-medium transition-all duration-200 text-sm sm:text-base"
          >
            Refer a Friend
          </Button>
        </div>

        {/* Empty State */}
        {((activeTab === "available" && availableCoupons.length === 0) ||
          (activeTab === "used" && usedCoupons.length === 0)) && (
          <div className="text-center py-12">
            <Percent className="w-16 h-16 text-white/30 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white/70 mb-2">No {activeTab} coupons</h3>
            <p className="text-white/50 mb-6 px-4">
              {activeTab === "available"
                ? "You don't have any available coupons at the moment."
                : "You haven't used any coupons yet."}
            </p>
            <Button
              onClick={() => router.push("/book-time")}
              className="bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] hover:from-[#dc7867] hover:to-[#ec8a4a] text-white px-6 py-3 rounded-xl transition-all duration-200"
            >
              Get Your First Coupon
            </Button>
          </div>
        )}
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-[#1D3F4F]/90 backdrop-blur-sm border-t border-[#3A6A7B]/30 z-50">
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
              className="flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors"
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
            <button className="flex flex-col items-center gap-1 text-[#DC7867]">
              <Percent className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-xs">Discount</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}
