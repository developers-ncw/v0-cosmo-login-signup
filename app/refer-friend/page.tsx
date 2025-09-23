"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Search, User, Globe, LogOut, Calendar, ShoppingBag, Gift, Home, Percent, ChevronDown } from "lucide-react"

export default function ReferFriendPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [friendName, setFriendName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [countryCode, setCountryCode] = useState("+45")

  const handleSendReferral = () => {
    // Navigate to discount screen after sending referral
    router.push("/discount")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1D3F4F] via-[#2A5A6B] to-[#1D3F4F] pb-20">
      {/* Header - Fixed header positioning to stay at top */}
      <header className="bg-[#1D3F4F]/95 backdrop-blur-sm border-b border-[#3A6A7B]/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-xl sm:text-2xl font-light text-white tracking-[0.2em]">COSMO</h1>
              <span className="ml-3 text-[#DC7867] text-xs sm:text-sm tracking-wide">AESTHETIC SERVICES</span>
            </div>

            {/* Right side controls */}
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="hidden sm:flex items-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer">
                <Globe className="w-4 h-4" />
                <span className="text-sm">English</span>
              </div>

              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-[#2A5A6B]/50 border border-[#3A6A7B] text-white placeholder:text-white/50 pl-10 pr-4 py-2 rounded-lg focus:border-[#DC7867] focus:ring-[#DC7867]/20 transition-colors duration-200 w-48"
                />
              </div>

              <button
                onClick={() => router.push("/profile")}
                className="text-white/70 hover:text-white transition-colors"
              >
                <User className="w-5 h-5" />
              </button>

              <Button
                onClick={() => router.push("/book-time")}
                className="bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] hover:from-[#dc7867] hover:to-[#ec8a4a] text-white px-3 sm:px-6 py-2 rounded-lg transition-all duration-200 hover:shadow-lg text-sm sm:text-base"
              >
                <span className="hidden sm:inline">BOOK A TIME</span>
                <span className="sm:hidden">BOOK</span>
              </Button>

              <button
                onClick={() => router.push("/login")} // Navigate to login page instead of signup
                className="hidden sm:flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span className="text-sm">Log Out</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner - Added referral/friendship themed banner image */}
      <div className="relative h-64 sm:h-80 overflow-hidden mb-6 sm:mb-8">
        <div className="absolute inset-0">
          <img
            src="/happy-friends-sharing-rewards-and-referrals-togeth.jpg"
            alt="Friends sharing rewards"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1D3F4F]/70 via-[#2A5A6B]/50 to-[#1D3F4F]/70" />
        </div>

        {/* Banner Content */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="text-white">
            <h1 className="mb-4 font-serif font-medium text-3xl sm:text-4xl lg:text-5xl">Refer a Friend</h1>
            <p className="text-base sm:text-xl text-white/90">Share the beauty experience with your friends</p>
          </div>
        </div>
      </div>

      {/* Main Content - Repositioned content box to not overlap banner */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border-gray-100 border mx-0 my-0 leading-7 tracking-normal mb-8 sm:mb-10">
          {/* Send Referral Form */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-medium text-gray-800 mb-6 sm:mb-8 text-center">Send Referral</h2>

            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Enter friend's name"
                  value={friendName}
                  onChange={(e) => setFriendName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DC7867] focus:border-[#DC7867] transition-colors text-secondary-foreground"
                />
              </div>

              {/* Mobile Number Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative">
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-8 focus:ring-2 focus:ring-[#DC7867] focus:border-[#DC7867] transition-colors w-full sm:w-auto text-secondary-foreground"
                    >
                      <option value="+45">+45</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+49">+49</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                  <input
                    type="tel"
                    placeholder="12 34 56 78"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DC7867] focus:border-[#DC7867] transition-colors text-secondary-foreground"
                  />
                </div>
              </div>

              {/* Send Referral Button */}
              <Button
                onClick={handleSendReferral}
                className="w-full bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] hover:from-[#dc7867] hover:to-[#ec8a4a] text-white rounded-lg text-base sm:text-lg font-medium transition-all duration-200 hover:shadow-lg py-3 px-0 h-auto"
              >
                Send Referral
              </Button>
            </div>
          </div>

          {/* Earn Rewards Section */}
          <div className="text-center border-t border-gray-200 pt-6 sm:pt-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#DC7867]/20 to-[#ec8a4a]/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Gift className="w-8 h-8 sm:w-10 sm:h-10 text-[#DC7867]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-medium text-gray-800 mb-4">Earn Rewards</h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed px-4">
              Refer a friend and earn <span className="text-[#DC7867] font-semibold">10 points</span>. Your points are
              automatically added to your profile when your friend has booked their first treatment at Cosmo.
            </p>
          </div>
        </div>
      </main>

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
            <button
              onClick={() => router.push("/coupon")}
              className="flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors"
            >
              <Percent className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-xs">Coupon</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}
