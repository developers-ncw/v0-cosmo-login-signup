"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import Header from "@/components/header"
import { ArrowLeft, Calendar, ShoppingBag, Gift, Home, Percent } from "lucide-react"

export default function QuestionnairePage() {
  const router = useRouter()
  const [selectedTreatment, setSelectedTreatment] = useState("")
  const [skinConcerns, setSkinConcerns] = useState<string[]>([])
  const [previousTreatments, setPreviousTreatments] = useState("")

  const handleSkinConcernChange = (concern: string, checked: boolean) => {
    if (checked) {
      setSkinConcerns([...skinConcerns, concern])
    } else {
      setSkinConcerns(skinConcerns.filter((c) => c !== concern))
    }
  }

  const handleSave = () => {
    // Handle form submission
    console.log("Questionnaire data:", { selectedTreatment, skinConcerns, previousTreatments })
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1D3F4F] via-[#2A5A6B] to-[#1D3F4F] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pb-20">
      <Header />

      {/* Cover Image with Overlaid Heading */}
      <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
        <img src="/modern-medical-consultation-room-with-soft-lightin.jpg" alt="Health Assessment" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-white font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">Health Assessment</h1>
            <h2 className="text-white font-serif text-2xl sm:text-3xl lg:text-4xl">Questionnaire</h2>
          </div>
        </div>
      </div>

      {/* Subtitle Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto">
          Help us provide you with personalized treatment recommendations by completing this brief assessment.
        </p>
      </div>

      {/* Questionnaire Card */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-8 mb-8">
          <div className="space-y-8">
            {/* Treatment Interest */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">What treatment are you most interested in?</h3>
              <RadioGroup value={selectedTreatment} onValueChange={setSelectedTreatment}>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="laser-hair-removal"
                      id="laser-hair-removal"
                      className="border-white/30 text-[#dc7867]"
                    />
                    <Label htmlFor="laser-hair-removal" className="text-white/90">
                      Laser Hair Removal
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="skin-rejuvenation"
                      id="skin-rejuvenation"
                      className="border-white/30 text-[#dc7867]"
                    />
                    <Label htmlFor="skin-rejuvenation" className="text-white/90">
                      Skin Rejuvenation
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="acne-treatment"
                      id="acne-treatment"
                      className="border-white/30 text-[#dc7867]"
                    />
                    <Label htmlFor="acne-treatment" className="text-white/90">
                      Acne Treatment
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="anti-aging" id="anti-aging" className="border-white/30 text-[#dc7867]" />
                    <Label htmlFor="anti-aging" className="text-white/90">
                      Anti-Aging Treatments
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="consultation" id="consultation" className="border-white/30 text-[#dc7867]" />
                    <Label htmlFor="consultation" className="text-white/90">
                      General Consultation
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            {/* Skin Concerns */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">
                What are your main skin concerns? (Select all that apply)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Unwanted hair",
                  "Acne scars",
                  "Fine lines",
                  "Sun damage",
                  "Uneven skin tone",
                  "Large pores",
                  "Wrinkles",
                  "Dark spots",
                ].map((concern) => (
                  <div key={concern} className="flex items-center space-x-2">
                    <Checkbox
                      id={concern}
                      checked={skinConcerns.includes(concern)}
                      onCheckedChange={(checked) => handleSkinConcernChange(concern, checked as boolean)}
                      className="border-white/30 data-[state=checked]:bg-[#dc7867] data-[state=checked]:border-[#dc7867]"
                    />
                    <Label htmlFor={concern} className="text-white/90">
                      {concern}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Previous Treatments */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Have you had similar treatments before?</h3>
              <RadioGroup value={previousTreatments} onValueChange={setPreviousTreatments}>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes-recently" id="yes-recently" className="border-white/30 text-[#dc7867]" />
                    <Label htmlFor="yes-recently" className="text-white/90">
                      Yes, within the last 2 years
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes-long-ago" id="yes-long-ago" className="border-white/30 text-[#dc7867]" />
                    <Label htmlFor="yes-long-ago" className="text-white/90">
                      Yes, more than 2 years ago
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" className="border-white/30 text-[#dc7867]" />
                    <Label htmlFor="no" className="text-white/90">
                      No, this would be my first time
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="text-center">
          <Button
            onClick={handleSave}
            className="bg-gradient-to-r from-[#ec8a4a] to-[#dc7867] hover:from-[#dc7867] hover:to-[#ec8a4a] dark:from-orange-500 dark:to-orange-600 dark:hover:from-orange-600 dark:hover:to-orange-500 text-white px-12 py-4 rounded-xl text-lg font-semibold transition-all duration-200 hover:shadow-lg"
          >
            Save Assessment
          </Button>
        </div>
      </div>

      {/* Back Button */}
      

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#1D3F4F]/90 dark:bg-gray-900/90 backdrop-blur-sm border-t border-[#3A6A7B]/30 dark:border-gray-700/30 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-around py-4">
            <button
              onClick={() => router.push("/dashboard")}
              className="flex flex-col items-center gap-1 text-white/70 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors"
            >
              <Home className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-xs">Home</span>
            </button>
            <button
              onClick={() => router.push("/purchases")}
              className="flex flex-col items-center gap-1 text-white/70 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors"
            >
              <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-xs">Purchases</span>
            </button>
            <button
              onClick={() => router.push("/booking")}
              className="flex flex-col items-center gap-1 text-white/70 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors"
            >
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-xs">Booking</span>
            </button>
            <button
              onClick={() => router.push("/voucher")}
              className="flex flex-col items-center gap-1 text-white/70 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors"
            >
              <Gift className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-xs">Voucher</span>
            </button>
            <button
              onClick={() => router.push("/coupon")}
              className="flex flex-col items-center gap-1 text-white/70 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors"
            >
              <Percent className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-xs">Coupon</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}
