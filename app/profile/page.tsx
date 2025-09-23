"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Edit, Star, LogOut } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ProfilePage() {
  const router = useRouter()

  const profileData = {
    name: "Annika Stevns",
    customerNo: "N/A",
    address: "Tingvej 30a, 3.tv",
    postalCode: "2300",
    city: "København S",
    telephone: "N/A",
    mobile: "42311618",
    email: "annika_stevns@hotmail.com",
    gender: "Female",
    birthDate: "8 - 8 - 1991",
    reminderEmail: "Yes",
    reminderSMS: "Yes",
    language: "Danish",
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1D3F4F] via-[#2A5A6B] to-[#1D3F4F]">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push("/dashboard")}
                className="p-2 text-white/70 hover:text-white transition-colors"
              >
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

            <div className="flex items-center space-x-2 sm:space-x-4">
              <select className="hidden sm:block bg-transparent text-white/70 text-sm border-none outline-none">
                <option>English</option>
              </select>
              <Button
                onClick={() => router.push("/book-time")}
                className="bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] hover:from-[#dc7867] hover:to-[#ec8a4a] text-white px-3 sm:px-6 py-2 rounded-xl transition-all duration-200 text-sm sm:text-base"
              >
                <span className="hidden sm:inline">BOOK A TIME</span>
                <span className="sm:hidden">BOOK</span>
              </Button>
              <button
                onClick={() => router.push("/login")}
                className="hidden sm:flex items-center gap-2 text-white/70 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span className="text-sm">Log Out</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4">
          <h1 className="text-white font-serif font-medium text-3xl sm:text-4xl">Personal Info</h1>
          <Button
            onClick={() => router.push("/profile/edit")}
            className="bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] hover:from-[#dc7867] hover:to-[#ec8a4a] text-white px-6 py-2 transition-all duration-200 flex items-center space-x-2 rounded-lg w-fit"
          >
            <Edit className="w-4 h-4" />
            <span>Edit</span>
          </Button>
        </div>

        {/* Profile Information */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <label className="text-white/70 text-sm font-medium">Customer Name</label>
                <p className="text-white text-lg font-semibold mt-1">{profileData.name}</p>
              </div>

              <div>
                <label className="text-white/70 text-sm font-medium">Customer Address</label>
                <p className="text-white mt-1">{profileData.address}</p>
              </div>

              <div>
                <label className="text-white/70 text-sm font-medium">City</label>
                <p className="text-white mt-1">{profileData.city}</p>
              </div>

              <div>
                <label className="text-white/70 text-sm font-medium">Mobile</label>
                <p className="text-white mt-1">{profileData.mobile}</p>
              </div>

              <div>
                <label className="text-white/70 text-sm font-medium">Gender</label>
                <p className="text-white mt-1">{profileData.gender}</p>
              </div>

              <div>
                <label className="text-white/70 text-sm font-medium">Customer Reminder Email</label>
                <p className="text-white mt-1">{profileData.reminderEmail}</p>
              </div>

              <div>
                <label className="text-white/70 text-sm font-medium">Customer Language Id</label>
                <p className="text-white mt-1">{profileData.language}</p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <label className="text-white/70 text-sm font-medium">Customer No</label>
                <p className="text-white mt-1">{profileData.customerNo}</p>
              </div>

              <div>
                <label className="text-white/70 text-sm font-medium">Postal Code</label>
                <p className="text-white mt-1">{profileData.postalCode}</p>
              </div>

              <div>
                <label className="text-white/70 text-sm font-medium">Telephone</label>
                <p className="text-white mt-1">{profileData.telephone}</p>
              </div>

              <div>
                <label className="text-white/70 text-sm font-medium">Email</label>
                <p className="text-white mt-1 break-all">{profileData.email}</p>
              </div>

              <div>
                <label className="text-white/70 text-sm font-medium">Birth Date</label>
                <p className="text-white mt-1">{profileData.birthDate}</p>
              </div>

              <div>
                <label className="text-white/70 text-sm font-medium">Customer Reminder SMS</label>
                <p className="text-white mt-1">{profileData.reminderSMS}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Reward Balance Section */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white mb-2 font-serif font-medium text-xl sm:text-2xl">Reward Balance</h3>
            <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] mb-2">
              10
            </div>
            <p className="text-white/70 text-sm sm:text-base">Points available for redemption</p>
          </div>
        </div>
      </div>
    </div>
  )
}
