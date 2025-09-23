"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import { Calendar, ShoppingBag, Gift, Home, Percent, Check, Copy, Star } from "lucide-react"

export default function DiscountPage() {
  const router = useRouter()
  const [copied, setCopied] = useState(false)
  const discountCode = "FRIEND20"

  const handleCopyCode = () => {
    navigator.clipboard.writeText(discountCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1D3F4F] via-[#2A5A6B] to-[#1D3F4F] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pb-20">
      <Header />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#DC7867] to-[#ec8a4a] dark:from-orange-500 dark:to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <Check className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white dark:text-gray-100 mb-4">
            Referral Sent Successfully!
          </h1>
          <p className="text-white/70 dark:text-gray-300 text-base sm:text-lg">
            Your friend will receive an invitation to join Cosmo
          </p>
        </div>

        {/* Discount Code Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 mb-6 sm:mb-8">
          <div className="text-center mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-100 mb-2">
              Your Exclusive Discount
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              Share this code with your friend for their first treatment
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#DC7867]/10 to-[#ec8a4a]/10 dark:from-orange-500/10 dark:to-orange-600/10 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Discount Code</p>
                <p className="text-2xl sm:text-3xl font-bold text-[#DC7867] dark:text-orange-400 tracking-wider break-all">
                  {discountCode}
                </p>
              </div>
              <Button
                onClick={handleCopyCode}
                className="bg-[#DC7867] hover:bg-[#ec8a4a] dark:bg-orange-500 dark:hover:bg-orange-600 text-white px-4 sm:px-6 py-3 rounded-lg transition-all duration-200 w-full sm:w-auto"
              >
                {copied ? <Check className="w-5 h-5 mr-2" /> : <Copy className="w-5 h-5 mr-2" />}
                {copied ? "Copied!" : "Copy"}
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="p-4">
              <div className="text-xl sm:text-2xl font-bold text-[#DC7867] dark:text-orange-400 mb-1">20%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Discount</div>
            </div>
            <div className="p-4">
              <div className="text-xl sm:text-2xl font-bold text-[#DC7867] dark:text-orange-400 mb-1">30</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Days Valid</div>
            </div>
            <div className="p-4">
              <div className="text-xl sm:text-2xl font-bold text-[#DC7867] dark:text-orange-400 mb-1">1x</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Use Only</div>
            </div>
          </div>
        </div>

        {/* Rewards Card */}
        <div className="bg-[#2A5A6B]/30 dark:bg-gray-700/30 backdrop-blur-sm border border-[#3A6A7B]/30 dark:border-gray-600/30 rounded-2xl p-6 sm:p-8">
          <div className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#DC7867]/20 to-[#ec8a4a]/20 dark:from-orange-500/20 dark:to-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-6 h-6 sm:w-8 sm:h-8 text-[#DC7867] dark:text-orange-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-medium text-white dark:text-gray-100 mb-4">Earn 10 Points</h3>
            <p className="text-white/70 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base px-4">
              You'll automatically receive 10 reward points when your friend books their first treatment using this
              discount code.
            </p>
            <Button
              onClick={() => router.push("/dashboard")}
              className="bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] hover:from-[#dc7867] hover:to-[#ec8a4a] dark:from-orange-500 dark:to-orange-600 dark:hover:from-orange-600 dark:hover:to-orange-500 text-white px-6 sm:px-8 py-3 rounded-lg transition-all duration-200 hover:shadow-lg w-full sm:w-auto"
            >
              Back to Dashboard
            </Button>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#1D3F4F]/90 dark:bg-gray-900/90 backdrop-blur-sm border-t border-[#3A6A7B]/30 dark:border-gray-700/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-around py-4">
            <button
              onClick={() => router.push("/dashboard")}
              className="flex flex-col items-center gap-1 text-white/70 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors"
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
              className="flex flex-col items-center gap-1 text-[#DC7867] dark:text-orange-400"
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
