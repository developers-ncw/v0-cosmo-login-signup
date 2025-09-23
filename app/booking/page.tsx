"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Phone, Eye, Trash2, Clock, Home, ShoppingBag, Gift, Percent, X } from "lucide-react"
import { useRouter } from "next/navigation"
import Header from "@/components/header"

export default function BookingPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<"active" | "finished">("active")
  const [openMenuId, setOpenMenuId] = useState<number | null>(null)
  const [showDetailsModal, setShowDetailsModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [selectedBooking, setSelectedBooking] = useState<any>(null)

  const activeBookings = [
    {
      id: 1,
      treatment: "Kamilla | KBH",
      date: "Oct 2, 2025 1:40 pm",
      location: "Copenhagen Center",
      phone: "+45 33 12 34 56",
      dateShort: "02/10",
      year: "2025",
    },
  ]

  const finishedBookings = [
    {
      id: 2,
      treatment: "Laser Facial Treatment",
      date: "Oct 15, 2025 3:20 pm",
      location: "Østerbro Clinic",
      phone: "+45 35 45 67 89",
      dateShort: "15/10",
      year: "2025",
    },
  ]

  const handleViewDetails = (booking: any) => {
    setSelectedBooking(booking)
    setShowDetailsModal(true)
    setOpenMenuId(null)
  }

  const handleDeleteBooking = (booking: any) => {
    setSelectedBooking(booking)
    setShowDeleteModal(true)
    setOpenMenuId(null)
  }

  const confirmDelete = () => {
    // Handle delete logic here
    setShowDeleteModal(false)
    setSelectedBooking(null)
  }

  const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      action()
    }
  }

  const handleModalKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setShowDetailsModal(false)
      setShowDeleteModal(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1D3F4F] via-[#2A5A6B] to-[#1D3F4F] pb-20">
      <Header />

      {/* Hero Section */}
      <div className="relative h-48 sm:h-64 overflow-hidden">
        <img
          src="/professional-doctor-consulting-patient-in-modern-h.jpg"
          alt="Professional treatment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white font-serif font-medium leading-7 text-3xl sm:text-4xl lg:text-5xl">BOOKINGS</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="bg-white/5 backdrop-blur-sm border-white/10 rounded-xl p-1 flex border flex-row gap-2 sm:gap-3 w-full max-w-md">
            <button
              onClick={() => setActiveTab("active")}
              className={`flex-1 px-4 sm:px-6 py-2 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base ${
                activeTab === "active"
                  ? "bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] text-white shadow-lg"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              Active bookings
            </button>
            <button
              onClick={() => setActiveTab("finished")}
              className={`flex-1 px-4 sm:px-6 py-2 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base ${
                activeTab === "finished"
                  ? "bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] text-white shadow-lg"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              Finished
            </button>
          </div>
        </div>

        {/* Bookings List */}
        <div className="space-y-4">
          {activeTab === "active" &&
            activeBookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex items-start space-x-4">
                    {/* Date Circle */}
                    <div className="bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] rounded-full w-14 h-14 sm:w-16 sm:h-16 flex flex-col items-center justify-center text-white flex-shrink-0">
                      <span className="text-xs font-medium">{booking.dateShort}</span>
                      <span className="text-xs">{booking.year}</span>
                    </div>

                    {/* Booking Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 truncate">{booking.treatment}</h3>
                      <div className="space-y-2">
                        <div className="flex items-center text-white/70">
                          <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span className="text-sm truncate">{booking.date}</span>
                        </div>
                        <div className="flex items-center text-white/70">
                          <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span className="text-sm truncate">{booking.location}</span>
                        </div>
                        <div className="flex items-center text-white/70">
                          <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span className="text-sm">{booking.phone}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-end">
                    <div className="relative">
                      <button
                        onClick={() => setOpenMenuId(openMenuId === booking.id ? null : booking.id)}
                        onKeyDown={(e) =>
                          handleKeyDown(e, () => setOpenMenuId(openMenuId === booking.id ? null : booking.id))
                        }
                        className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                        aria-label="Booking actions"
                      >
                        <div className="flex items-center space-x-1">
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                        </div>
                      </button>

                      {openMenuId === booking.id && (
                        <div className="absolute right-0 top-full mt-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-2 flex space-x-2 z-10">
                          <button
                            onClick={() => handleViewDetails(booking)}
                            onKeyDown={(e) => handleKeyDown(e, () => handleViewDetails(booking))}
                            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                            aria-label="View details"
                          >
                            <Eye className="w-4 h-4 text-white" />
                          </button>
                          <button
                            onClick={() => handleDeleteBooking(booking)}
                            onKeyDown={(e) => handleKeyDown(e, () => handleDeleteBooking(booking))}
                            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                            aria-label="Delete booking"
                          >
                            <Trash2 className="w-4 h-4 text-white" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {activeTab === "finished" &&
            finishedBookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex items-start space-x-4">
                    {/* Date Circle */}
                    <div className="bg-white/20 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex flex-col items-center justify-center text-white/70 flex-shrink-0">
                      <span className="text-xs font-medium">{booking.dateShort}</span>
                      <span className="text-xs">{booking.year}</span>
                    </div>

                    {/* Booking Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-semibold text-white/80 mb-2 truncate">
                        {booking.treatment}
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center text-white/60">
                          <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span className="text-sm truncate">{booking.date}</span>
                        </div>
                        <div className="flex items-center text-white/60">
                          <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span className="text-sm truncate">{booking.location}</span>
                        </div>
                        <div className="flex items-center text-white/60">
                          <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span className="text-sm">{booking.phone}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-end">
                    <div className="relative">
                      <button
                        onClick={() => setOpenMenuId(openMenuId === booking.id ? null : booking.id)}
                        onKeyDown={(e) =>
                          handleKeyDown(e, () => setOpenMenuId(openMenuId === booking.id ? null : booking.id))
                        }
                        className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                        aria-label="Booking actions"
                      >
                        <div className="flex items-center space-x-1">
                          <div className="w-1 h-1 bg-white/70 rounded-full"></div>
                          <div className="w-1 h-1 bg-white/70 rounded-full"></div>
                          <div className="w-1 h-1 bg-white/70 rounded-full"></div>
                        </div>
                      </button>

                      {openMenuId === booking.id && (
                        <div className="absolute right-0 top-full mt-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-2 flex space-x-2 z-10">
                          <button
                            onClick={() => handleViewDetails(booking)}
                            onKeyDown={(e) => handleKeyDown(e, () => handleViewDetails(booking))}
                            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                            aria-label="View details"
                          >
                            <Eye className="w-4 h-4 text-white/70" />
                          </button>
                          <button
                            onClick={() => handleDeleteBooking(booking)}
                            onKeyDown={(e) => handleKeyDown(e, () => handleDeleteBooking(booking))}
                            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                            aria-label="Delete booking"
                          >
                            <Trash2 className="w-4 h-4 text-white/70" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {((activeTab === "active" && activeBookings.length > 0) ||
          (activeTab === "finished" && finishedBookings.length > 0)) && (
          <div className="mt-8 text-center">
            <Button
              onClick={() => router.push("/book-time")}
              className="bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] hover:from-[#dc7867] hover:to-[#ec8a4a] text-white px-8 py-3 rounded-xl transition-all duration-200 text-base font-medium"
            >
              Book Time
            </Button>
          </div>
        )}

        {/* Empty State */}
        {((activeTab === "active" && activeBookings.length === 0) ||
          (activeTab === "finished" && finishedBookings.length === 0)) && (
          <div className="text-center py-12">
            <Clock className="w-16 h-16 text-white/30 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white/70 mb-2">No {activeTab} bookings</h3>
            <p className="text-white/50 mb-6 px-4">
              {activeTab === "active"
                ? "You don't have any active bookings at the moment."
                : "You don't have any finished bookings yet."}
            </p>
            <Button
              onClick={() => router.push("/book-time")}
              className="bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] hover:from-[#dc7867] hover:to-[#ec8a4a] text-white px-6 py-3 rounded-xl transition-all duration-200"
            >
              Book Your First Appointment
            </Button>
          </div>
        )}
      </div>

      {showDetailsModal && selectedBooking && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setShowDetailsModal(false)}
          onKeyDown={handleModalKeyDown}
          tabIndex={-1}
        >
          <div
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Booking Details</h2>
              <button
                onClick={() => setShowDetailsModal(false)}
                onKeyDown={(e) => handleKeyDown(e, () => setShowDetailsModal(false))}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-white mb-2">{selectedBooking.treatment}</h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-white/70">
                  <Calendar className="w-4 h-4 mr-3 flex-shrink-0" />
                  <span className="text-sm">{selectedBooking.date}</span>
                </div>
                <div className="flex items-center text-white/70">
                  <MapPin className="w-4 h-4 mr-3 flex-shrink-0" />
                  <span className="text-sm">{selectedBooking.location}</span>
                </div>
                <div className="flex items-center text-white/70">
                  <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                  <span className="text-sm">{selectedBooking.phone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showDeleteModal && selectedBooking && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setShowDeleteModal(false)}
          onKeyDown={handleModalKeyDown}
          tabIndex={-1}
        >
          <div
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <h2 className="text-xl font-semibold text-white mb-4">Delete Booking</h2>
              <p className="text-white/70 mb-6">Are you sure you want to delete this booking?</p>

              <div className="flex space-x-3">
                <Button
                  onClick={() => setShowDeleteModal(false)}
                  className="flex-1 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl py-2 transition-all duration-200"
                >
                  Cancel
                </Button>
                <Button
                  onClick={confirmDelete}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white rounded-xl py-2 transition-all duration-200"
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#1D3F4F]/90 backdrop-blur-sm border-t border-[#3A6A7B]/30 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-around py-4">
            <button
              onClick={() => router.push("/dashboard")}
              className="flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors"
            >
              <Home className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-xs">Home</span>
            </button>
            <button
              onClick={() => router.push("/purchases")}
              className="flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors"
            >
              <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-xs">Purchases</span>
            </button>
            <button onClick={() => router.push("/booking")} className="flex flex-col items-center gap-1 text-[#DC7867]">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-xs">Booking</span>
            </button>
            <button
              onClick={() => router.push("/voucher")}
              className="flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors"
            >
              <Gift className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-xs">Voucher</span>
            </button>
            <button
              onClick={() => router.push("/coupon")}
              className="flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors"
            >
              <Percent className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-xs">Discount</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}
