"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ForgotPasswordModal } from "@/components/forgot-password-modal"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Handle login logic here
    console.log("Login attempt:", { email, password })
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)

    router.push("/dashboard")
  }

  const handleDemoLogin = () => {
    setEmail("demo@cosmolaser.com")
    setPassword("demo123")
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#1D3F4F] via-[#2A5A6B] to-[#1D3F4F] flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Header - matching signup page style */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-4xl sm:text-5xl font-light text-white tracking-[0.2em] mb-2">COSMO</h1>
            <p className="text-white/70 text-sm tracking-wide mb-6 sm:mb-8">ANSVARLIG SKÖNHED</p>
            <h2 className="text-white text-lg sm:text-xl font-medium">Already a member? Sign in.</h2>
          </div>

          <div className="space-y-6">
            <div className="text-center">
              <Button
                type="button"
                onClick={handleDemoLogin}
                variant="outline"
                className="bg-transparent border-[#DC7867] text-[#DC7867] hover:bg-[#DC7867] hover:text-white transition-all duration-200 px-6 py-2 rounded-lg"
              >
                Fill Demo Credentials
              </Button>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white text-sm font-medium">
                  E-mail:
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border-[#3A6A7B] text-white placeholder:text-white/50 focus:border-[#DC7867] focus:ring-[#DC7867]/20 rounded-lg h-12 transition-colors duration-200"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-white text-sm font-medium">
                  Password:
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-transparent border-[#3A6A7B] text-white placeholder:text-white/50 focus:border-[#DC7867] focus:ring-[#DC7867]/20 rounded-lg h-12 transition-colors duration-200"
                  required
                />
              </div>

              <div className="text-right">
                <button
                  type="button"
                  onClick={() => setShowForgotPassword(true)}
                  className="text-white/70 hover:text-[#DC7867] text-sm underline transition-colors duration-200"
                >
                  Forgot Password
                </button>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] hover:from-[#dc7867] hover:to-[#ec8a4a] text-white font-medium py-3 h-12 rounded-xl transition-all duration-200 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed mt-6 sm:mt-8"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    SIGNING IN...
                  </div>
                ) : (
                  "SIGN IN"
                )}
              </Button>
            </form>

            {/* Footer */}
            <div className="text-center mt-6 sm:mt-8">
              <p className="text-white/70 text-sm">
                New member?{" "}
                <Link
                  href="/signup"
                  className="text-[#DC7867] hover:text-[#E68B7A] underline transition-colors duration-200"
                >
                  Sign up here.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <ForgotPasswordModal isOpen={showForgotPassword} onClose={() => setShowForgotPassword(false)} />
    </>
  )
}
