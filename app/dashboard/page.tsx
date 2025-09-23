"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import { Calendar, Users, Star, ShoppingBag, FileText, Gift, Home, Percent } from "lucide-react"

export default function DashboardPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1D3F4F] via-[#2A5A6B] to-[#1D3F4F] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pb-20">
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Hero Banner */}
        <div className="relative rounded-2xl overflow-hidden mb-8 sm:mb-12 h-64 sm:h-80">
          <div className="absolute inset-0">
            <img
              src="/professional-doctor-consulting-patient-in-modern-h.jpg"
              alt="Professional healthcare treatment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1D3F4F]/60 via-[#2A5A6B]/40 to-transparent dark:from-gray-900/60 dark:via-gray-800/40" />
          </div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <Button className="bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] hover:from-[#dc7867] hover:to-[#ec8a4a] dark:from-orange-500 dark:to-orange-600 dark:hover:from-orange-600 dark:hover:to-orange-500 text-white rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#DC7867]/25 dark:hover:shadow-orange-500/25 px-6 sm:px-8 leading-7 text-lg sm:text-xl lg:text-2xl font-normal font-serif py-4 sm:py-5">
              See Your Points
            </Button>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {/* Refer a Friend */}
          <div className="bg-[#2A5A6B]/30 dark:bg-gray-800/30 backdrop-blur-sm border border-[#3A6A7B]/30 dark:border-gray-700/30 rounded-2xl p-6 sm:p-8 hover:bg-[#2A5A6B]/40 dark:hover:bg-gray-800/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#DC7867]/10 dark:hover:shadow-orange-500/10">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#DC7867]/20 to-[#ec8a4a]/20 dark:from-orange-500/20 dark:to-orange-600/20 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-[#DC7867] dark:text-orange-400" />
              </div>
              <h3 className="text-white dark:text-gray-100 font-medium mb-2 font-serif text-xl sm:text-2xl lg:text-3xl">
                Refer a Friend
              </h3>
              <p className="text-white/70 dark:text-gray-300 text-sm mb-4 sm:mb-6">Share and earn rewards</p>
              <Button
                onClick={() => router.push("/refer-friend")}
                className="w-full bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] hover:from-[#dc7867] hover:to-[#ec8a4a] dark:from-orange-500 dark:to-orange-600 dark:hover:from-orange-600 dark:hover:to-orange-500 text-white py-3 rounded-xl transition-all duration-200 hover:shadow-lg text-sm sm:text-base"
              >
                Get Started
              </Button>
            </div>
          </div>

          {/* Become a Model */}
          <div className="bg-[#2A5A6B]/30 dark:bg-gray-800/30 backdrop-blur-sm border border-[#3A6A7B]/30 dark:border-gray-700/30 rounded-2xl p-6 sm:p-8 hover:bg-[#2A5A6B]/40 dark:hover:bg-gray-800/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#DC7867]/10 dark:hover:shadow-orange-500/10">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#DC7867]/20 to-[#ec8a4a]/20 dark:from-orange-500/20 dark:to-orange-600/20 rounded-full flex items-center justify-center mb-4">
                <Star className="w-8 h-8 text-[#DC7867] dark:text-orange-400" />
              </div>
              <h3 className="text-white dark:text-gray-100 font-medium mb-2 font-serif text-xl sm:text-2xl lg:text-3xl">
                Become a Model
              </h3>
              <p className="text-white/70 dark:text-gray-300 text-sm mb-4 sm:mb-6">Join our community</p>
              <Button className="w-full bg-gradient-to-r from-[#3A6A7B] to-[#2A5A6B] hover:from-[#2A5A6B] hover:to-[#3A6A7B] dark:from-gray-700 dark:to-gray-800 dark:hover:from-gray-800 dark:hover:to-gray-700 text-white py-3 rounded-xl transition-all duration-200 hover:shadow-lg border border-[#DC7867]/30 dark:border-orange-400/30 text-sm sm:text-base">
                Get Started
              </Button>
            </div>
          </div>

          {/* Bookings */}
          <div className="bg-[#2A5A6B]/30 dark:bg-gray-800/30 backdrop-blur-sm border border-[#3A6A7B]/30 dark:border-gray-700/30 rounded-2xl p-6 sm:p-8 hover:bg-[#2A5A6B]/40 dark:hover:bg-gray-800/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#DC7867]/10 dark:hover:shadow-orange-500/10">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#DC7867]/20 to-[#ec8a4a]/20 dark:from-orange-500/20 dark:to-orange-600/20 rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-8 h-8 text-[#DC7867] dark:text-orange-400" />
              </div>
              <h3 className="text-white dark:text-gray-100 font-medium mb-2 font-serif text-xl sm:text-2xl lg:text-3xl">
                Bookings
              </h3>
              <p className="text-white/70 dark:text-gray-300 text-sm mb-4 sm:mb-6">Manage appointments</p>
              <Button
                onClick={() => router.push("/booking")}
                className="w-full bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] hover:from-[#dc7867] hover:to-[#ec8a4a] dark:from-orange-500 dark:to-orange-600 dark:hover:from-orange-600 dark:hover:to-orange-500 text-white py-3 rounded-xl transition-all duration-200 hover:shadow-lg text-sm sm:text-base"
              >
                Get Started
              </Button>
            </div>
          </div>

          {/* Purchases */}
          <div className="bg-[#2A5A6B]/30 dark:bg-gray-800/30 backdrop-blur-sm border border-[#3A6A7B]/30 dark:border-gray-700/30 rounded-2xl p-6 sm:p-8 hover:bg-[#2A5A6B]/40 dark:hover:bg-gray-800/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#DC7867]/10 dark:hover:shadow-orange-500/10">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#DC7867]/20 to-[#ec8a4a]/20 dark:from-orange-500/20 dark:to-orange-600/20 rounded-full flex items-center justify-center mb-4">
                <ShoppingBag className="w-8 h-8 text-[#DC7867] dark:text-orange-400" />
              </div>
              <h3 className="text-white dark:text-gray-100 font-medium mb-2 font-serif text-xl sm:text-2xl lg:text-3xl">
                Purchases
              </h3>
              <p className="text-white/70 dark:text-gray-300 text-sm mb-4 sm:mb-6">View your orders</p>
              <Button
                onClick={() => router.push("/purchases")}
                className="w-full bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] hover:from-[#dc7867] hover:to-[#ec8a4a] dark:from-orange-500 dark:to-orange-600 dark:hover:from-orange-600 dark:hover:to-orange-500 text-white py-3 rounded-xl transition-all duration-200 hover:shadow-lg text-sm sm:text-base"
              >
                Get Started
              </Button>
            </div>
          </div>

          {/* Questionnaire */}
          <div className="bg-[#2A5A6B]/30 dark:bg-gray-800/30 backdrop-blur-sm border border-[#3A6A7B]/30 dark:border-gray-700/30 rounded-2xl p-6 sm:p-8 hover:bg-[#2A5A6B]/40 dark:hover:bg-gray-800/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#DC7867]/10 dark:hover:shadow-orange-500/10">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#DC7867]/20 to-[#ec8a4a]/20 dark:from-orange-500/20 dark:to-orange-600/20 rounded-full flex items-center justify-center mb-4">
                <FileText className="w-8 h-8 text-[#DC7867] dark:text-orange-400" />
              </div>
              <h3 className="text-white dark:text-gray-100 font-medium mb-2 font-serif text-xl sm:text-2xl lg:text-3xl">
                Questionnaire
              </h3>
              <p className="text-white/70 dark:text-gray-300 text-sm mb-4 sm:mb-6">Health assessment</p>
              <Button className="w-full bg-gradient-to-r from-[#3A6A7B] to-[#2A5A6B] hover:from-[#2A5A6B] hover:to-[#3A6A7B] dark:from-gray-700 dark:to-gray-800 dark:hover:from-gray-800 dark:hover:to-gray-700 text-white py-3 rounded-xl transition-all duration-200 hover:shadow-lg border border-[#DC7867]/30 dark:border-orange-400/30 text-sm sm:text-base">
                Get Started
              </Button>
            </div>
          </div>

          {/* Voucher */}
          <div className="bg-[#2A5A6B]/30 dark:bg-gray-800/30 backdrop-blur-sm border border-[#3A6A7B]/30 dark:border-gray-700/30 rounded-2xl p-6 sm:p-8 hover:bg-[#2A5A6B]/40 dark:hover:bg-gray-800/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#DC7867]/10 dark:hover:shadow-orange-500/10">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#DC7867]/20 to-[#ec8a4a]/20 dark:from-orange-500/20 dark:to-orange-600/20 rounded-full flex items-center justify-center mb-4">
                <Gift className="w-8 h-8 text-[#DC7867] dark:text-orange-400" />
              </div>
              <h3 className="text-white dark:text-gray-100 font-medium mb-2 font-serif text-xl sm:text-2xl lg:text-3xl">
                Voucher
              </h3>
              <p className="text-white/70 dark:text-gray-300 text-sm mb-4 sm:mb-6">Redeem rewards</p>
              <Button
                onClick={() => router.push("/voucher")}
                className="w-full bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] hover:from-[#dc7867] hover:to-[#ec8a4a] dark:from-orange-500 dark:to-orange-600 dark:hover:from-orange-600 dark:hover:to-orange-500 text-white py-3 rounded-xl transition-all duration-200 hover:shadow-lg text-sm sm:text-base"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>

        {/* Promotional Banners */}
        <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
          {/* Premium Treatments Banner */}
          <div className="relative rounded-2xl overflow-hidden h-40 sm:h-48">
            <div className="absolute inset-0">
              <img
                src="/professional-doctor-in-white-coat-consulting-with-.jpg"
                alt="Professional doctor consultation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#de7b64]/80 to-[#de7b64]/40 dark:from-orange-600/80 dark:to-orange-600/40" />
            </div>
            <div className="relative z-10 flex justify-center h-full text-center items-center px-4">
              <div>
                <h2 className="text-white mb-2 text-2xl sm:text-3xl lg:text-4xl font-normal">50-65%</h2>
                <p className="text-white/90 text-base sm:text-lg mb-4 leading-3 font-medium">
                  Save on Premium Treatments
                </p>
                <Button className="bg-gradient-to-r from-[#de7b64] to-[#de7b64]/80 hover:from-[#de7b64]/80 hover:to-[#de7b64] dark:from-orange-600 dark:to-orange-600/80 dark:hover:from-orange-600/80 dark:hover:to-orange-600 text-white px-6 sm:px-8 py-3 rounded-xl transition-all duration-200 hover:shadow-lg tracking-wide text-sm sm:text-base">
                  Learn More
                </Button>
              </div>
            </div>
          </div>

          {/* Facebook Banner */}
          <div className="relative rounded-2xl overflow-hidden h-40 sm:h-48">
            <div className="absolute inset-0">
              <img
                src="/facebook-community-banner.jpg"
                alt="Join our Facebook community"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10 flex justify-center h-full text-center px-4 items-center mt-10">
              <div>
                <Button
                  variant="default"
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 dark:bg-gray-800/20 dark:hover:bg-gray-800/30 text-white border border-white/30 dark:border-gray-300/30 px-6 sm:px-8 py-3 rounded-xl transition-all duration-200 hover:shadow-lg tracking-wide text-sm sm:text-base"
                >
                  Connect Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="text-center py-6 sm:py-8">
          <p className="text-white/50 dark:text-gray-400 text-sm mb-3.5">© 2025 Cosmo Laser App All rights reserved</p>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#1D3F4F]/90 dark:bg-gray-900/90 backdrop-blur-sm border-t border-[#3A6A7B]/30 dark:border-gray-700/30 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-around py-4">
            <button
              onClick={() => router.push("/dashboard")}
              className="flex flex-col items-center gap-1 text-[#DC7867] dark:text-orange-400"
            >
              <Home className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-xs">Home</span>
            </button>
            <button
              onClick={() => router.push("/purchases")}
              className="flex flex-col items-center gap-1 text-white/70 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors"
            >
              <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-xs">Purchases</span>
            </button>
            <button
              onClick={() => router.push("/booking")}
              className="flex flex-col items-center gap-1 text-white/70 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors"
            >
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-xs">Booking</span>
            </button>
            <button
              onClick={() => router.push("/voucher")}
              className="flex flex-col items-center gap-1 text-white/70 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors"
            >
              <Gift className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-xs">Voucher</span>
            </button>
            <button
              onClick={() => router.push("/coupon")}
              className="flex flex-col items-center gap-1 text-white/70 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors"
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
