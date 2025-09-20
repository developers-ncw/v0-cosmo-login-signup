"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X } from "lucide-react"

interface ForgotPasswordModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ForgotPasswordModal({ isOpen, onClose }: ForgotPasswordModalProps) {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Handle forgot password logic here
    console.log("Forgot password request:", { email })
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
    setIsSuccess(true)
  }

  const handleClose = () => {
    setEmail("")
    setIsSuccess(false)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-br from-[#1D3F4F] via-[#2A5A6B] to-[#1D3F4F] p-8 rounded-2xl shadow-2xl border border-white/10 w-full max-w-md relative">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors duration-200"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-light text-white tracking-[0.2em] mb-2">COSMO</h1>
          <p className="text-white/70 text-xs tracking-wide mb-4">ANSVARLIG SKÖNHED</p>
          <h2 className="text-white text-lg font-medium">Reset your password</h2>
        </div>

        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="reset-email" className="text-white text-sm font-medium">
                E-mail address
              </Label>
              <Input
                id="reset-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="bg-transparent border-[#3A6A7B] text-white placeholder:text-white/50 focus:border-[#DC7867] focus:ring-[#DC7867]/20 rounded-lg h-12 transition-colors duration-200"
                required
              />
            </div>

            <p className="text-white/60 text-sm leading-relaxed">
              Enter your email address and we'll send you a link to reset your password.
            </p>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] hover:from-[#dc7867] hover:to-[#ec8a4a] text-white font-medium py-3 h-12 rounded-xl transition-all duration-200 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  SENDING...
                </div>
              ) : (
                "SEND RESET LINK"
              )}
            </Button>
          </form>
        ) : (
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-white text-lg font-medium">Check your email</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              We've sent a password reset link to <span className="text-[#DC7867]">{email}</span>
            </p>
            <Button
              onClick={handleClose}
              className="w-full bg-transparent border border-[#3A6A7B] text-white hover:bg-white/5 font-medium py-3 h-12 rounded-xl transition-all duration-200"
            >
              CLOSE
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
