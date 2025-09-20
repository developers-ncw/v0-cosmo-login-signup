"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle forgot password logic here
    console.log("Forgot password request:", { email })
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#1D3F4F] flex items-center justify-center p-4">
        <div className="w-full max-w-md text-center">
          <div className="mb-8 sm:mb-12">
            <h1 className="text-4xl sm:text-5xl font-light text-white tracking-[0.2em] mb-2">COSMO</h1>
            <p className="text-white/70 text-sm tracking-wide">ANSVARLIG SKÖNHED</p>
          </div>

          <div className="bg-[#1D3F4F]/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-2xl border border-white/10">
            <h2 className="text-white text-lg sm:text-xl font-medium mb-4 sm:mb-6">Check your email</h2>
            <p className="text-white/70 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              We've sent a password reset link to {email}
            </p>
            <Link
              href="/login"
              className="inline-block bg-[#DC7867] hover:bg-[#DC7867]/90 text-white font-medium py-3 px-6 sm:px-8 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#DC7867]/25"
            >
              Back to Sign In
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#1D3F4F] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl font-light text-white tracking-[0.2em] mb-2">COSMO</h1>
          <p className="text-white/70 text-sm tracking-wide mb-6 sm:mb-8">ANSVARLIG SKÖNHED</p>
          <h2 className="text-white text-lg sm:text-xl font-medium">Reset your password</h2>
          <p className="text-white/70 mt-2 text-sm sm:text-base">Enter your email to receive a reset link</p>
        </div>

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
              className="bg-[#2A5A6B]/50 border-[#3A6A7B] text-white placeholder:text-white/50 focus:border-[#DC7867] focus:ring-[#DC7867]/20 rounded-lg h-12"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#DC7867] hover:bg-[#DC7867]/90 text-white font-medium py-3 h-12 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#DC7867]/25"
          >
            Send Reset Link
          </Button>
        </form>

        <div className="text-center mt-6 sm:mt-8">
          <Link href="/login" className="text-white/70 hover:text-white text-sm underline transition-colors">
            Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  )
}
