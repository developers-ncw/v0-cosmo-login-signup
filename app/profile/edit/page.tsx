"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Save } from "lucide-react"
import { useRouter } from "next/navigation"

export default function EditProfilePage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const [formData, setFormData] = useState({
    customerName: "Annika Stevns",
    customerNo: "Customer No",
    customerAddress: "Tingvej 30a, 3.tv",
    customerPostalCode: "2300",
    customerCity: "København S",
    customerTelephone: "Customer Telephone",
    customerMobile: "42311618",
    customerEmail: "annika_stevns@hotmail.com",
    customerNote: "Customer Note",
    customerImportantNote: "Customer Important Note",
    customerSSN: "0808912260",
    customerGroupId: "1656",
    customerGender: "2",
    customerBirthDay: "8",
    customerBirthMonth: "8",
    customerBirthYear: "1991",
    customerLanguage: "1",
    externalId: "0",
    customerNewsletterSMS: "yes",
    customerNewsletterEmail: "yes",
    customerReminderEmail: "yes",
    customerReminderSMS: "yes",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    router.push("/profile")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1D3F4F] via-[#2A5A6B] to-[#1D3F4F]">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push("/profile")}
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

            <div className="flex items-center space-x-4">
              <select className="bg-transparent text-white/70 text-sm border-none outline-none">
                <option>English</option>
              </select>
              <Button
                onClick={() => router.push("/book-time")}
                className="bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] hover:from-[#dc7867] hover:to-[#ec8a4a] text-white px-6 py-2 rounded-xl transition-all duration-200"
              >
                BOOK A TIME
              </Button>
              <Button onClick={() => router.push("/signup")} variant="ghost" className="text-white/70 hover:text-white">
                Log Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl text-white font-medium font-serif">Edit</h1>
          <Button onClick={() => router.push("/profile")} variant="ghost" className="text-white/70 hover:text-white">
            Back
          </Button>
        </div>

        {/* Edit Form */}
        <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Row 1 */}
            <div>
              <label className="block text-white/70 text-sm font-medium mb-2">Customer Name</label>
              <Input
                value={formData.customerName}
                onChange={(e) => handleInputChange("customerName", e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#dc7867] focus:ring-[#dc7867]"
              />
            </div>
            <div>
              <label className="block text-white/70 text-sm font-medium mb-2">Customer No</label>
              <Input
                value={formData.customerNo}
                onChange={(e) => handleInputChange("customerNo", e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#dc7867] focus:ring-[#dc7867]"
              />
            </div>
            <div>
              <label className="block text-white/70 text-sm font-medium mb-2">Customer Address</label>
              <Input
                value={formData.customerAddress}
                onChange={(e) => handleInputChange("customerAddress", e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#dc7867] focus:ring-[#dc7867]"
              />
            </div>

            {/* Row 2 */}
            <div>
              <label className="block text-white/70 text-sm font-medium mb-2">Customer Postal Code</label>
              <Input
                value={formData.customerPostalCode}
                onChange={(e) => handleInputChange("customerPostalCode", e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#dc7867] focus:ring-[#dc7867]"
              />
            </div>
            <div>
              <label className="block text-white/70 text-sm font-medium mb-2">Customer City</label>
              <Input
                value={formData.customerCity}
                onChange={(e) => handleInputChange("customerCity", e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#dc7867] focus:ring-[#dc7867]"
              />
            </div>
            <div>
              <label className="block text-white/70 text-sm font-medium mb-2">Customer Telephone</label>
              <Input
                value={formData.customerTelephone}
                onChange={(e) => handleInputChange("customerTelephone", e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#dc7867] focus:ring-[#dc7867]"
              />
            </div>

            {/* Row 3 */}
            <div>
              <label className="block text-white/70 text-sm font-medium mb-2">Customer Mobile</label>
              <Input
                value={formData.customerMobile}
                onChange={(e) => handleInputChange("customerMobile", e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#dc7867] focus:ring-[#dc7867]"
              />
            </div>
            <div>
              <label className="block text-white/70 text-sm font-medium mb-2">Customer Email</label>
              <Input
                type="email"
                value={formData.customerEmail}
                onChange={(e) => handleInputChange("customerEmail", e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#dc7867] focus:ring-[#dc7867]"
              />
            </div>
            <div>
              <label className="block text-white/70 text-sm font-medium mb-2">Customer Note</label>
              <Input
                value={formData.customerNote}
                onChange={(e) => handleInputChange("customerNote", e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#dc7867] focus:ring-[#dc7867]"
              />
            </div>

            {/* Row 4 */}
            <div>
              <label className="block text-white/70 text-sm font-medium mb-2">Customer Important Note</label>
              <Input
                value={formData.customerImportantNote}
                onChange={(e) => handleInputChange("customerImportantNote", e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#dc7867] focus:ring-[#dc7867]"
              />
            </div>
            <div>
              <label className="block text-white/70 text-sm font-medium mb-2">Customer SSN</label>
              <Input
                value={formData.customerSSN}
                onChange={(e) => handleInputChange("customerSSN", e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#dc7867] focus:ring-[#dc7867]"
              />
            </div>
            <div>
              <label className="block text-white/70 text-sm font-medium mb-2">Customer Group Id</label>
              <Input
                value={formData.customerGroupId}
                onChange={(e) => handleInputChange("customerGroupId", e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#dc7867] focus:ring-[#dc7867]"
              />
            </div>

            {/* Row 5 - Birth Date */}
            <div>
              <label className="block text-white/70 text-sm font-medium mb-2">
                Customer Gender Gender: 0 Unknown, 1 Male, 2 Female
              </label>
              <Input
                value={formData.customerGender}
                onChange={(e) => handleInputChange("customerGender", e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#dc7867] focus:ring-[#dc7867]"
              />
            </div>
            <div>
              <label className="block text-white/70 text-sm font-medium mb-2">Customer Birth Day</label>
              <Input
                value={formData.customerBirthDay}
                onChange={(e) => handleInputChange("customerBirthDay", e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#dc7867] focus:ring-[#dc7867]"
              />
            </div>
            <div>
              <label className="block text-white/70 text-sm font-medium mb-2">Customer Birth Month</label>
              <Input
                value={formData.customerBirthMonth}
                onChange={(e) => handleInputChange("customerBirthMonth", e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#dc7867] focus:ring-[#dc7867]"
              />
            </div>

            {/* Row 6 */}
            <div>
              <label className="block text-white/70 text-sm font-medium mb-2">Customer Birth Year</label>
              <Input
                value={formData.customerBirthYear}
                onChange={(e) => handleInputChange("customerBirthYear", e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#dc7867] focus:ring-[#dc7867]"
              />
            </div>
            <div>
              <label className="block text-white/70 text-sm font-medium mb-2">
                Customer Language Id 0 is no, 1 is danish, 2 is english
              </label>
              <Input
                value={formData.customerLanguage}
                onChange={(e) => handleInputChange("customerLanguage", e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#dc7867] focus:ring-[#dc7867]"
              />
            </div>
            <div>
              <label className="block text-white/70 text-sm font-medium mb-2">Externalid</label>
              <Input
                value={formData.externalId}
                onChange={(e) => handleInputChange("externalId", e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#dc7867] focus:ring-[#dc7867]"
              />
            </div>
          </div>

          {/* Newsletter and Reminder Options */}
          <div className="mt-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/70 text-sm font-medium mb-3">Customer Newsletter SMS</label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="newsletterSMS"
                      value="yes"
                      checked={formData.customerNewsletterSMS === "yes"}
                      onChange={(e) => handleInputChange("customerNewsletterSMS", e.target.value)}
                      className="w-4 h-4 text-[#dc7867] bg-white/10 border-white/30 focus:ring-[#dc7867] focus:ring-2"
                    />
                    <span className="ml-2 text-white">Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="newsletterSMS"
                      value="no"
                      checked={formData.customerNewsletterSMS === "no"}
                      onChange={(e) => handleInputChange("customerNewsletterSMS", e.target.value)}
                      className="w-4 h-4 text-[#dc7867] bg-white/10 border-white/30 focus:ring-[#dc7867] focus:ring-2"
                    />
                    <span className="ml-2 text-white">No</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-white/70 text-sm font-medium mb-3">Customer Newsletter Email</label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="newsletterEmail"
                      value="yes"
                      checked={formData.customerNewsletterEmail === "yes"}
                      onChange={(e) => handleInputChange("customerNewsletterEmail", e.target.value)}
                      className="w-4 h-4 text-[#dc7867] bg-white/10 border-white/30 focus:ring-[#dc7867] focus:ring-2"
                    />
                    <span className="ml-2 text-white">Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="newsletterEmail"
                      value="no"
                      checked={formData.customerNewsletterEmail === "no"}
                      onChange={(e) => handleInputChange("customerNewsletterEmail", e.target.value)}
                      className="w-4 h-4 text-[#dc7867] bg-white/10 border-white/30 focus:ring-[#dc7867] focus:ring-2"
                    />
                    <span className="ml-2 text-white">No</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-white/70 text-sm font-medium mb-3">Customer Reminder Email</label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="reminderEmail"
                      value="yes"
                      checked={formData.customerReminderEmail === "yes"}
                      onChange={(e) => handleInputChange("customerReminderEmail", e.target.value)}
                      className="w-4 h-4 text-[#dc7867] bg-white/10 border-white/30 focus:ring-[#dc7867] focus:ring-2"
                    />
                    <span className="ml-2 text-white">Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="reminderEmail"
                      value="no"
                      checked={formData.customerReminderEmail === "no"}
                      onChange={(e) => handleInputChange("customerReminderEmail", e.target.value)}
                      className="w-4 h-4 text-[#dc7867] bg-white/10 border-white/30 focus:ring-[#dc7867] focus:ring-2"
                    />
                    <span className="ml-2 text-white">No</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-white/70 text-sm font-medium mb-3">Customer Reminder SMS</label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="reminderSMS"
                      value="yes"
                      checked={formData.customerReminderSMS === "yes"}
                      onChange={(e) => handleInputChange("customerReminderSMS", e.target.value)}
                      className="w-4 h-4 text-[#dc7867] bg-white/10 border-white/30 focus:ring-[#dc7867] focus:ring-2"
                    />
                    <span className="ml-2 text-white">Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="reminderSMS"
                      value="no"
                      checked={formData.customerReminderSMS === "no"}
                      onChange={(e) => handleInputChange("customerReminderSMS", e.target.value)}
                      className="w-4 h-4 text-[#dc7867] bg-white/10 border-white/30 focus:ring-[#dc7867] focus:ring-2"
                    />
                    <span className="ml-2 text-white">No</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 flex justify-center">
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] hover:from-[#dc7867] hover:to-[#ec8a4a] text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 flex items-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Updating...</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Update</span>
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
