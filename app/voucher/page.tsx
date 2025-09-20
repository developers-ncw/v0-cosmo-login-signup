"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Eye, EyeOff, Gift, Calendar, Home, ShoppingBag, Percent } from "lucide-react"
import { useRouter } from "next/navigation"

export default function VoucherPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<"active" | "used">("active")
  const [visibleCodes, setVisibleCodes] = useState<{ [key: string]: boolean }>({})

  const toggleCodeVisibility = (voucherId: string) => {
    setVisibleCodes((prev) => ({
      ...prev,
      [voucherId]: !prev[voucherId],
    }))
  }

  const activeVouchers = [
    {
      id: "1",
      type: "Giftcard",
      code: "abc72458...",
      fullCode: "abc72458xyz123",
      validFrom: "08/22/25",
    },
    {
      id: "2",
      type: "Treatment Voucher",
      code: "def45678...",
      fullCode: "def45678abc456",
      validFrom: "06/15/25",
    },
  ]

  const usedVouchers = [
    {
      id: "3",
      type: "Giftcard",
      code: "ghi78901...",
      fullCode: "ghi78901def789",
      validFrom: "03/10/25",
      usedDate: "04/15/25",
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

            <div className="flex items-center space-x-4">
              <select className="bg-transparent text-white/70 text-sm border-none outline-none">
                <option>English</option>
              </select>
              <Button
                onClick={() => router.push("/book-time")}
                className="bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] hover:from-[#dc7867] hover:to-[#ec8a4a] text-white px-6 py-2 rounded-xl transition-all duration-200"
              >
                BOOK A TIME
              </Button>
              <Button onClick={() => router.push("/signup")} variant="ghost" className="text-white/70 hover:text-white">
                Log Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-64 overflow-hidden">
        <img
          src="/professional-doctor-consulting-patient-in-modern-h.jpg"
          alt="Professional treatment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white font-serif font-medium text-5xl">VOUCHER</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1 flex gap-3">
            <button
              onClick={() => setActiveTab("active")}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeTab === "active"
                  ? "bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] text-white shadow-lg"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              Active
            </button>
            <button
              onClick={() => setActiveTab("used")}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeTab === "used"
                  ? "bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] text-white shadow-lg"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              Used
            </button>
          </div>
        </div>

        {/* Vouchers List */}
        <div className="space-y-6">
          {activeTab === "active" &&
            activeVouchers.map((voucher) => (
              <div
                key={voucher.id}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] rounded-full flex items-center justify-center">
                      <Gift className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Voucher Type: {voucher.type}</h3>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Code:</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-mono">
                        {visibleCodes[voucher.id] ? voucher.fullCode : voucher.code}
                      </span>
                      <button
                        onClick={() => toggleCodeVisibility(voucher.id)}
                        className="p-1 text-white/70 hover:text-white transition-colors"
                      >
                        {visibleCodes[voucher.id] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Valid From:</span>
                    <span className="text-white">{voucher.validFrom}</span>
                  </div>
                </div>
              </div>
            ))}

          {activeTab === "used" &&
            usedVouchers.map((voucher) => (
              <div
                key={voucher.id}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 opacity-75 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Gift className="w-6 h-6 text-white/70" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white/80">Voucher Type: {voucher.type}</h3>
                      <span className="text-sm text-white/50">Used on {voucher.usedDate}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Code:</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-white/70 font-mono">
                        {visibleCodes[voucher.id] ? voucher.fullCode : voucher.code}
                      </span>
                      <button
                        onClick={() => toggleCodeVisibility(voucher.id)}
                        className="p-1 text-white/60 hover:text-white/80 transition-colors"
                      >
                        {visibleCodes[voucher.id] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Valid From:</span>
                    <span className="text-white/70">{voucher.validFrom}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Empty State */}
        {((activeTab === "active" && activeVouchers.length === 0) ||
          (activeTab === "used" && usedVouchers.length === 0)) && (
          <div className="text-center py-12">
            <Gift className="w-16 h-16 text-white/30 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white/70 mb-2">No {activeTab} vouchers</h3>
            <p className="text-white/50 mb-6">
              {activeTab === "active"
                ? "You don't have any active vouchers at the moment."
                : "You don't have any used vouchers yet."}
            </p>
            <Button
              onClick={() => router.push("/book-time")}
              className="bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] hover:from-[#dc7867] hover:to-[#ec8a4a] text-white px-6 py-3 rounded-xl transition-all duration-200"
            >
              Get Your First Voucher
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
              <Home className="w-6 h-6" />
              <span className="text-xs">Home</span>
            </button>
            <button
              onClick={() => router.push("/purchases")}
              className="flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors"
            >
              <ShoppingBag className="w-6 h-6" />
              <span className="text-xs">Purchases</span>
            </button>
            <button
              onClick={() => router.push("/booking")}
              className="flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors"
            >
              <Calendar className="w-6 h-6" />
              <span className="text-xs">Booking</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-[#DC7867]">
              <Gift className="w-6 h-6" />
              <span className="text-xs">Voucher</span>
            </button>
            <button
              onClick={() => router.push("/coupon")}
              className="flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors"
            >
              <Percent className="w-6 h-6" />
              <span className="text-xs">Discount</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}
