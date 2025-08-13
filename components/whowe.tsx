import Image from "next/image"

export default function WhoAreWe() {
  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-2xl md:text-5xl font-bold text-center text-orange-500 mb-16">Who are we?</h2>

        {/* Photo Grid Layout */}
        <div className="relative min-h-[600px] md:min-h-[500px]">
          {/* Top Left - Solar panels team photo */}
          <div className="absolute top-0 left-0 md:left-8 w-64 h-80 rounded-3xl overflow-hidden shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300">
            <Image
              src="/placeholder.svg?height=320&width=256"
              alt="Team working with solar panels"
              fill
              className="object-cover"
            />
          </div>

          {/* Blue decorative square - top left */}
          <div className="absolute top-20 left-48 md:left-72 w-16 h-16 bg-blue-800 rounded-lg transform rotate-12"></div>

          {/* Middle Left - Three people in blue shirts */}
          <div className="absolute top-32 md:top-48 left-4 md:left-16 w-48 h-64 rounded-3xl overflow-hidden shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-300">
            <Image
              src="/placeholder.svg?height=256&width=192"
              alt="Three team members in blue shirts"
              fill
              className="object-cover"
            />
          </div>

          {/* Center Top - Large group photo */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-72 h-56 rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-12%20125213-5RmP6l4iCAc7EwgoyVFdTlDlTfF48O.png"
              alt="Large team group photo"
              fill
              className="object-cover"
            />
          </div>

          {/* Cyan decorative square - top right */}
          <div className="absolute top-16 right-32 md:right-48 w-12 h-12 bg-orange-800 rounded-lg transform -rotate-12"></div>

          {/* Top Right - Office meeting photo */}
          <div className="absolute top-24 right-0 md:right-8 w-64 h-72 rounded-3xl overflow-hidden shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <Image
              src="/placeholder.svg?height=288&width=256"
              alt="Team meeting in office"
              fill
              className="object-cover"
            />
          </div>

          {/* Bottom Center - Foosball photo */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-56 h-48 rounded-3xl overflow-hidden shadow-lg -rotate-2 hover:rotate-0 transition-transform duration-300">
            <Image
              src="/placeholder.svg?height=192&width=224"
              alt="Team playing foosball"
              fill
              className="object-cover"
            />
          </div>

          {/* Blue decorative square - bottom right */}
          <div className="absolute bottom-12 right-16 md:right-32 w-20 h-20 bg-blue-900 rounded-lg transform rotate-45"></div>

          {/* Additional orange accent - bottom left */}
          <div className="absolute bottom-32 left-16 md:left-24 w-8 h-8 bg-orange-600 rounded-lg transform rotate-12"></div>
        </div>
      </div>
    </section>
  )
}
