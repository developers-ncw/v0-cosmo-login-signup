"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Phone, Mail, User, Star, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import Header from "@/components/header"

export default function BookTimePage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [agreed, setAgreed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log("Newsletter signup:", { email, name, agreed })
  }

  const handleBack = () => {
    router.back()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1D3F4F] via-[#2A5A6B] to-[#1D3F4F]">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        <div className="mb-6">
          <Button
            onClick={handleBack}
            variant="ghost"
            className="text-white hover:bg-white/10 p-2 rounded-xl transition-all duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </Button>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Book a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec8a4a] to-[#dc7867]">Free</span>
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">Consultation</h2>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
            Get personalized treatment guidance from our experienced aesthetics professionals. Discover the best
            solutions for your unique beauty goals.
          </p>
          <Button className="bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] hover:from-[#dc7867] hover:to-[#ec8a4a] text-white px-6 sm:px-8 py-3 rounded-xl text-base sm:text-lg font-medium transition-all duration-200 hover:shadow-lg">
            Get Started Today
          </Button>
        </div>

        {/* Consultation Options */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* New Customer */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <span className="bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] text-white px-3 py-1 rounded-full text-sm font-medium">
                Available For Use
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Free Consultation</h3>
            <p className="text-white/60 text-sm mb-4 sm:mb-6">New Customer</p>
            <p className="text-white/70 mb-4 sm:mb-6 text-sm sm:text-base">
              If you are a new customer at Cosmo, we will first see you for a free and non-binding consultation.
            </p>
            <p className="text-white/70 mb-4 sm:mb-6 text-sm">
              For Lips, Brows and CO2 laser treatments, there is a 48-hour reflection period according to the Danish
              Patient Safety Authority. If you have not had the desired treatment previously, you must come in for a new
              consultation.
            </p>
            <p className="text-white/70 mb-6 sm:mb-8 text-sm">
              The consultation lasts 20 minutes, and you will get qualified professional advice from one of our
              experienced nurses or doctors, who will tailor a treatment plan based on your needs and wishes.
            </p>
            <Button className="w-full bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] hover:from-[#dc7867] hover:to-[#ec8a4a] text-white py-3 rounded-xl font-medium transition-all duration-200 text-sm sm:text-base">
              Book a Free Consultation - New Customer
            </Button>
          </div>

          {/* Existing Customer */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <span className="bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] text-white px-3 py-1 rounded-full text-sm font-medium">
                Available For Use
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Free Consultation</h3>
            <p className="text-white/60 text-sm mb-4 sm:mb-6">Existing Customer</p>
            <p className="text-white/70 mb-4 sm:mb-6 text-sm sm:text-base">
              If you are already a Cosmo customer, you can book a new appointment or current your existing appointment
              here.
            </p>
            <p className="text-white/70 mb-6 sm:mb-8 text-sm">
              Remember that if you have not had the desired treatment previously, you must come in for a new
              consultation first. It is been more than two years since you had your last treatment, you must come in for
              a new consultation.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 mb-6 sm:mb-8">
              <Button className="flex-1 bg-white/10 hover:bg-white/20 text-white border border-white/20 py-3 rounded-xl font-medium transition-all duration-200">
                Book a Time
              </Button>
              <Button className="flex-1 bg-white/10 hover:bg-white/20 text-white border border-white/20 py-3 rounded-xl font-medium transition-all duration-200">
                Try Our App
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Are you in doubt?</h3>
          <p className="text-white/70 mb-6 sm:mb-8 text-sm sm:text-base px-4">
            If you have questions or need help booking an appointment, we are ready to help you further.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">Call Us</h4>
              <p className="text-white/60 text-sm mb-3">Call by phone</p>
              <p className="text-[#ec8a4a] font-medium">+45 33 44 09</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">Email Us</h4>
              <p className="text-white/60 text-sm mb-3">Send us email</p>
              <p className="text-[#ec8a4a] font-medium break-all">info@cosmolaser.dk</p>
            </div>
          </div>
        </div>

        {/* Consultation Image */}
        <div className="mb-12 sm:mb-16">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="/professional-doctor-consulting-patient-in-modern-h.jpg"
              alt="Professional consultation"
              className="w-full h-48 sm:h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Subscribe to our newsletter</h3>
          <p className="text-white/70 mb-6 sm:mb-8 text-sm sm:text-base px-4">
            Sign up for our newsletter and receive information about treatments, our best customer offers, offers and
            much more.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <Input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#dc7867] focus:ring-[#dc7867]"
              />
              <Input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#dc7867] focus:ring-[#dc7867]"
              />
            </div>

            <div className="flex items-start space-x-2 mb-6 text-left">
              <Checkbox
                id="agree"
                checked={agreed}
                onCheckedChange={setAgreed}
                className="border-white/30 data-[state=checked]:bg-[#dc7867] data-[state=checked]:border-[#dc7867] mt-1"
              />
              <label htmlFor="agree" className="text-white/70 text-sm">
                I agree to receive Cosmo Laser's newsletter. I can always unsubscribe with a few clicks.
              </label>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] hover:from-[#dc7867] hover:to-[#ec8a4a] text-white py-3 rounded-xl font-medium transition-all duration-200"
            >
              Yes, please - send me good offers
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
