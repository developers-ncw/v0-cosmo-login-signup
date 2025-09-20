import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#1D3F4F] flex items-center justify-center">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl font-light text-white tracking-[0.2em]">COSMO</h1>
          <p className="text-white/80 text-lg tracking-wide">ANSVARLIG SKÖNHED</p>
        </div>

        <div className="space-y-4">
          <Link
            href="/login"
            className="block w-64 mx-auto bg-[#DC7867] hover:bg-[#DC7867]/90 text-white font-medium py-3 px-8 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#DC7867]/25"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="block w-64 mx-auto border border-white/30 hover:border-white/50 text-white font-medium py-3 px-8 rounded-lg transition-all duration-200 hover:bg-white/5"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  )
}
