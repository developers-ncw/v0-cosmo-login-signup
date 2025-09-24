"use client"
import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Search, User, Globe, LogOut, Menu, X } from "lucide-react"

export default function Header() {
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const [searchQuery, setSearchQuery] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("keydown", handleEscapeKey)
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscapeKey)
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  return (
    <>
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

              <div className={`${isMobileMenuOpen ? "hidden" : "hidden sm:flex"} items-center gap-2 sm:gap-4`}>
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
                  className="flex items-center gap-2 text-white/70 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="text-sm">Log Out</span>
                </button>
              </div>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="sm:hidden text-white/70 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors p-2"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 sm:hidden">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

          {/* Slide-out panel */}
          <div
            ref={mobileMenuRef}
            className="fixed right-0 top-0 h-full w-80 max-w-[85vw] bg-[#1D3F4F] dark:bg-gray-900 border-l border-[#3A6A7B]/30 dark:border-gray-700/30 shadow-xl transform transition-transform duration-300 ease-in-out"
          >
            {/* Panel header */}
            <div className="flex items-center justify-between p-4 border-b border-[#3A6A7B]/30 dark:border-gray-700/30">
              <h2 className="text-lg font-light text-white dark:text-gray-100 tracking-[0.1em]">Menu</h2>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white/70 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors p-1"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Panel content */}
            <div className="flex flex-col p-4 space-y-4">
              <button
                onClick={() => {
                  router.push("/profile")
                  setIsMobileMenuOpen(false)
                }}
                className="flex items-center gap-3 text-white/90 dark:text-gray-100 hover:text-white dark:hover:text-white hover:bg-[#2A5A6B]/30 dark:hover:bg-gray-800/30 p-3 rounded-lg transition-all duration-200 text-left"
              >
                <User className="w-5 h-5" />
                <span className="text-base">Profile</span>
              </button>

              <button
                onClick={() => {
                  router.push("/book-time")
                  setIsMobileMenuOpen(false)
                }}
                className="flex items-center gap-3 text-white/90 dark:text-gray-100 hover:text-white dark:hover:text-white hover:bg-[#2A5A6B]/30 dark:hover:bg-gray-800/30 p-3 rounded-lg transition-all duration-200 text-left"
              >
                <span className="w-5 h-5 bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] rounded-sm flex items-center justify-center text-xs font-bold">
                  B
                </span>
                <span className="text-base">Book a Time</span>
              </button>

              <button
                onClick={() => {
                  router.push("/login")
                  setIsMobileMenuOpen(false)
                }}
                className="flex items-center gap-3 text-white/90 dark:text-gray-100 hover:text-white dark:hover:text-white hover:bg-[#2A5A6B]/30 dark:hover:bg-gray-800/30 p-3 rounded-lg transition-all duration-200 text-left"
              >
                <LogOut className="w-5 h-5" />
                <span className="text-base">Log Out</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
