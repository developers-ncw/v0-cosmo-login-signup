"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    birthday: "",
    countryCode: "+45",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Handle signup logic here
    console.log("Signup attempt:", formData)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1D3F4F] via-[#2A5A6B] to-[#1D3F4F] flex">
      {/* Left Side - Professional Doctor Consulting Image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1D3F4F] via-[#2A5A6B] to-[#1D3F4F]">
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/professional-doctor-consulting-patient-in-modern-h.jpg"
              alt="Professional doctor consulting with patient in modern healthcare setting"
              className="w-full h-full object-cover opacity-90"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1D3F4F]/40 to-transparent" />
        </div>

        {/* Left side content - updated for healthcare theme */}
        <div className="relative z-10 flex flex-col justify-center p-12 text-white">
          <h1 className="text-6xl font-light tracking-[0.2em] mb-4">COSMO</h1>
          <p className="text-white/80 text-lg tracking-wide mb-8">ANSVARLIG SKÖNHED</p>
          <h2 className="text-2xl font-light mb-4">Experience the art of responsible healthcare</h2>
          <p className="text-white/70 text-lg leading-relaxed">Join our community of conscious health enthusiasts</p>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-[#1D3F4F]">
        <div className="w-full max-w-md">
          {/* Mobile Header */}
          <div className="lg:hidden text-center mb-8">
            <h1 className="text-4xl font-light text-white tracking-[0.2em] mb-2">COSMO</h1>
            <p className="text-white/70 text-sm tracking-wide">ANSVARLIG SKÖNHED</p>
          </div>

          {/* Desktop Header */}
          <div className="hidden lg:block text-right mb-8">
            <h1 className="text-4xl font-light text-white tracking-[0.2em] mb-2">COSMO</h1>
            <p className="text-white/70 text-sm tracking-wide">ANSVARLIG SKÖNHED</p>
          </div>

          <div className="space-y-6">
            <h2 className="text-white text-2xl font-medium mb-8">Create profile & sign up</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white text-sm font-medium">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="bg-transparent border-[#3A6A7B] text-white placeholder:text-white/50 focus:border-[#DC7867] focus:ring-[#DC7867]/20 rounded-lg h-12 transition-colors duration-200"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white text-sm font-medium">
                  E-mail
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="bg-transparent border-[#3A6A7B] text-white placeholder:text-white/50 focus:border-[#DC7867] focus:ring-[#DC7867]/20 rounded-lg h-12 transition-colors duration-200"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white text-sm font-medium">
                  Phone
                </Label>
                <div className="flex gap-2">
                  <Select
                    value={formData.countryCode}
                    onValueChange={(value) => handleInputChange("countryCode", value)}
                  >
                    
                    <SelectContent className="bg-[#2A5A6B] border-[#3A6A7B] text-white rounded-lg">
                      <SelectItem value="+45">DK +45</SelectItem>
                      <SelectItem value="+1">US +1</SelectItem>
                      <SelectItem value="+44">UK +44</SelectItem>
                      <SelectItem value="+49">DE +49</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="32 12 34 56"
                    className="flex-1 bg-transparent border-[#3A6A7B] text-white placeholder:text-white/50 focus:border-[#DC7867] focus:ring-[#DC7867]/20 rounded-lg h-12 transition-colors duration-200"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-white text-sm font-medium">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className="bg-transparent border-[#3A6A7B] text-white placeholder:text-white/50 focus:border-[#DC7867] focus:ring-[#DC7867]/20 rounded-lg h-12 transition-colors duration-200"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="birthday" className="text-white text-sm font-medium">
                  Birthday
                </Label>
                <Input
                  id="birthday"
                  type="date"
                  value={formData.birthday}
                  onChange={(e) => handleInputChange("birthday", e.target.value)}
                  placeholder="mm/dd/yyyy"
                  className="bg-transparent border-[#3A6A7B] text-white placeholder:text-white/50 focus:border-[#DC7867] focus:ring-[#DC7867]/20 rounded-lg h-12 [color-scheme:dark] transition-colors duration-200"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] hover:from-[#dc7867] hover:to-[#ec8a4a] text-white font-medium py-3 h-12 rounded-xl transition-all duration-200 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed mt-8"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    CREATING ACCOUNT...
                  </div>
                ) : (
                  "SIGN UP"
                )}
              </Button>
            </form>

            <div className="text-center mt-6">
              <p className="text-white/70 text-sm">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-[#DC7867] hover:text-[#E68B7A] underline transition-colors duration-200"
                >
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
