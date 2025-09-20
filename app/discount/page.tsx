"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Search,
  User,
  Globe,
  LogOut,
  Calendar,
  ShoppingBag,
  Gift,
  Home,
  Percent,
  Check,
  Copy,
  Star,
} from "lucide-react"

export default function DiscountPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [copied, setCopied] = useState(false)
  const discountCode = "FRIEND20"

  const handleCopyCode = () => {
    navigator.clipboard.writeText(discountCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1D3F4F] via-[#2A5A6B] to-[#1D3F4F]">
      {/* Header */}
      <header className="bg-[#1D3F4F]/80 backdrop-blur-sm border-b border-[#3A6A7B]/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-light text-white tracking-[0.2em]">COSMO</h1>
              <span className="ml-3 text-[#DC7867] text-sm tracking-wide">AESTHETIC SERVICES</span>
            </div>

            {/* Right side controls */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer">
                <Globe className="w-4 h-4" />
                <span className="text-sm">English</span>
              </div>

              <div className="relative">
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
                className="bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] hover:from-[#dc7867] hover:to-[#ec8a4a] text-white px-6 py-2 rounded-lg transition-all duration-200 hover:shadow-lg"
              >
                BOOK A TIME
              </Button>

              <button
                onClick={() => router.push("/signup")}
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span className="text-sm">Log Out</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-[#DC7867] to-[#ec8a4a] rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-light text-white mb-4">Referral Sent Successfully!</h1>
          <p className="text-white/70 text-lg">Your friend will receive an invitation to join Cosmo</p>
        </div>

        {/* Discount Code Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-medium text-gray-800 mb-2">Your Exclusive Discount</h2>
            <p className="text-gray-600">Share this code with your friend for their first treatment</p>
          </div>

          <div className="bg-gradient-to-r from-[#DC7867]/10 to-[#ec8a4a]/10 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Discount Code</p>
                <p className="text-3xl font-bold text-[#DC7867] tracking-wider">{discountCode}</p>
              </div>
              <Button
                onClick={handleCopyCode}
                className="bg-[#DC7867] hover:bg-[#ec8a4a] text-white px-6 py-3 rounded-lg transition-all duration-200"
              >
                {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                {copied ? "Copied!" : "Copy"}
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-4">
              <div className="text-2xl font-bold text-[#DC7867] mb-1">20%</div>
              <div className="text-sm text-gray-600">Discount</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-[#DC7867] mb-1">30</div>
              <div className="text-sm text-gray-600">Days Valid</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-[#DC7867] mb-1">1x</div>
              <div className="text-sm text-gray-600">Use Only</div>
            </div>
          </div>
        </div>

        {/* Rewards Card */}
        <div className="bg-[#2A5A6B]/30 backdrop-blur-sm border border-[#3A6A7B]/30 rounded-2xl p-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#DC7867]/20 to-[#ec8a4a]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-[#DC7867]" />
            </div>
            <h3 className="text-xl font-medium text-white mb-4">Earn 10 Points</h3>
            <p className="text-white/70 mb-6">
              You'll automatically receive 10 reward points when your friend books their first treatment using this
              discount code.
            </p>
            <Button
              onClick={() => router.push("/dashboard")}
              className="bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] hover:from-[#dc7867] hover:to-[#ec8a4a] text-white px-8 py-3 rounded-lg transition-all duration-200 hover:shadow-lg"
            >
              Back to Dashboard
            </Button>
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
            <button
              onClick={() => router.push("/voucher")}
              className="flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors"
            >
              <Gift className="w-6 h-6" />
              <span className="text-xs">Voucher</span>
            </button>
            <button onClick={() => router.push("/coupon")} className="flex flex-col items-center gap-1 text-[#DC7867]">
              <Percent className="w-6 h-6" />
              <span className="text-xs">Coupon</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}
