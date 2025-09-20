"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Phone, Mail, User, Star } from "lucide-react"
import { useRouter } from "next/navigation"

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1D3F4F] via-[#2A5A6B] to-[#1D3F4F]">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button onClick={() => router.back()} className="p-2 text-white/70 hover:text-white transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">C</span>
                </div>
                <div>
                  <h1 className="text-white font-semibold">COSMO</h1>
                  <p className="text-white/60 text-xs">AESTHETIC SERVICES</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <select className="bg-transparent text-white/70 text-sm border-none outline-none">
                <option>English</option>
              </select>
              <Button
                onClick={() => router.push("/dashboard")}
                className="bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] hover:from-[#dc7867] hover:to-[#ec8a4a] text-white px-6 py-2 rounded-xl transition-all duration-200"
              >
                Dashboard
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Book a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec8a4a] to-[#dc7867]">Free</span>
          </h1>
          <h2 className="text-5xl font-bold text-white mb-6">Consultation</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            Get personalized treatment guidance from our experienced aesthetics professionals. Discover the best
            solutions for your unique beauty goals.
          </p>
          <Button className="bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] hover:from-[#dc7867] hover:to-[#ec8a4a] text-white px-8 py-3 rounded-xl text-lg font-medium transition-all duration-200 hover:shadow-lg">
            Get Started Today
          </Button>
        </div>

        {/* Consultation Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* New Customer */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <span className="bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] text-white px-3 py-1 rounded-full text-sm font-medium">
                Available For Use
              </span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Free Consultation</h3>
            <p className="text-white/60 text-sm mb-6">New Customer</p>
            <p className="text-white/70 mb-6">
              If you are a new customer at Cosmo, we will first see you for a free and non-binding consultation.
            </p>
            <p className="text-white/70 mb-6 text-sm">
              For Lips, Brows and CO2 laser treatments, there is a 48-hour reflection period according to the Danish
              Patient Safety Authority. If you have not had the desired treatment previously, you must come in for a new
              consultation.
            </p>
            <p className="text-white/70 mb-8 text-sm">
              The consultation lasts 20 minutes, and you will get qualified professional advice from one of our
              experienced nurses or doctors, who will tailor a treatment plan based on your needs and wishes.
            </p>
            <Button className="w-full bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] hover:from-[#dc7867] hover:to-[#ec8a4a] text-white py-3 rounded-xl font-medium transition-all duration-200">
              Book a Free Consultation - New Customer
            </Button>
          </div>

          {/* Existing Customer */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <span className="bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] text-white px-3 py-1 rounded-full text-sm font-medium">
                Available For Use
              </span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Free Consultation</h3>
            <p className="text-white/60 text-sm mb-6">Existing Customer</p>
            <p className="text-white/70 mb-6">
              If you are already a Cosmo customer, you can book a new appointment or current your existing appointment
              here.
            </p>
            <p className="text-white/70 mb-8 text-sm">
              Remember that if you have not had the desired treatment previously, you must come in for a new
              consultation first. It is been more than two years since you had your last treatment, you must come in for
              a new consultation.
            </p>
            <div className="flex space-x-3 mb-8">
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
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-white mb-4">Are you in doubt?</h3>
          <p className="text-white/70 mb-8">
            If you have questions or need help booking an appointment, we are ready to help you further.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
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
              <p className="text-[#ec8a4a] font-medium">info@cosmolaser.dk</p>
            </div>
          </div>
        </div>

        {/* Consultation Image */}
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="/professional-doctor-consulting-patient-in-modern-h.jpg"
              alt="Professional consultation"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Subscribe to our newsletter</h3>
          <p className="text-white/70 mb-8">
            Sign up for our newsletter and receive information about treatments, our best customer offers, offers and
            much more.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="grid grid-cols-2 gap-4 mb-4">
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

            <div className="flex items-center space-x-2 mb-6 text-left">
              <Checkbox
                id="agree"
                checked={agreed}
                onCheckedChange={setAgreed}
                className="border-white/30 data-[state=checked]:bg-[#dc7867] data-[state=checked]:border-[#dc7867]"
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
