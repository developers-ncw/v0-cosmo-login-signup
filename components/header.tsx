"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Search, User, Globe, LogOut } from "lucide-react"

export default function Header() {
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <header className="bg-[#1D3F4F]/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-[#3A6A7B]/30 dark:border-gray-700/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl sm:text-2xl font-light text-white dark:text-gray-100 tracking-[0.2em]">COSMO</h1>
            <span className="ml-3 text-[#DC7867] dark:text-orange-400 text-xs sm:text-sm tracking-wide">
              AESTHETIC SERVICES
            </span>
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden sm:flex items-center gap-2 text-white/70 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors cursor-pointer">
              <Globe className="w-4 h-4" />
              <span className="text-sm">English</span>
            </div>

            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 dark:text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-[#2A5A6B]/50 dark:bg-gray-800/50 border border-[#3A6A7B] dark:border-gray-600 text-white dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 pl-10 pr-4 py-2 rounded-lg focus:border-[#DC7867] dark:focus:border-orange-400 focus:ring-0 focus:outline-none transition-colors duration-200 w-48 h-10"
              />
            </div>

            <button
              onClick={() => router.push("/profile")}
              className="text-white/70 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors"
            >
              <User className="w-5 h-5" />
            </button>

            <Button
              onClick={() => router.push("/book-time")}
              className="bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] hover:from-[#dc7867] hover:to-[#ec8a4a] dark:from-orange-500 dark:to-orange-600 dark:hover:from-orange-600 dark:hover:to-orange-500 text-white px-3 sm:px-6 py-2 rounded-lg transition-all duration-200 hover:shadow-lg text-sm sm:text-base"
            >
              <span className="hidden sm:inline">Book a Time</span>
              <span className="sm:hidden">Book</span>
            </Button>

            <button
              onClick={() => router.push("/login")} // Navigate to login page instead of signup
              className="hidden sm:flex items-center gap-2 text-white/70 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span className="text-sm">Log Out</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
