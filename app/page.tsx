import Header from "@/components/header"
import Navigation from "@/components/navigation"
import ParticlesBackground from "@/components/particles-background"
import ScrollProgress from "@/components/scroll-progress"
import ImageCarousel from "@/components/image-carousel"
import AboutMachineMagnets from "@/components/sections/about-machine-magnets"
import AboutNIET from "@/components/sections/about-niet"

export default function HomePage() {
  const highlightImages = [
  
  ]

  return (
    <>
      <ParticlesBackground />
      <ScrollProgress />

      <div className="relative z-10">
        {/* Header (smaller height + animated logos and title) */}
        <Header />

        <Navigation />

        <main className="space-y-12 py-8">
          {/* Interactive picture show (carousel of club images) */}
          <section aria-label="Club Highlights" className="container mx-auto px-4">
            <div className="rounded-xl border bg-card text-card-foreground p-6 shadow-lg">
              <h2 className="text-gradient-red text-balance text-xl md:text-2xl font-bold mb-4">Highlights</h2>
              <div className="mx-auto max-w-[1200px]">
                <ImageCarousel />
              </div>
            </div>
          </section>

          {/* About Machine Magnets (placed before NIET as requested) */}
          <section className="container mx-auto px-4">
            <AboutMachineMagnets />
          </section>

          {/* About NIET */}
          <section className="container mx-auto px-4">
            <AboutNIET />
          </section>

          <section className="container mx-auto px-4">
            <div className="gradient-red text-white rounded-xl p-8 text-center shadow-xl">
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <a
                  href="mailto:machine-magnets@niet.co.in"
                  className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full font-semibold hover:bg-white/30 transition-all hover:scale-105 border-2 border-white/30"
                >
                  Email Us
                </a>
                <a
                  href="https://www.instagram.com/machinemagnets"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full font-semibold hover:bg-white/30 transition-all hover:scale-105 border-2 border-white/30"
                >
                  Instagram
                </a>
                <a
                  href="https://chat.whatsapp.com/F6PwUIO6qU3EFi1HGbCBus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full font-semibold hover:bg-white/30 transition-all hover:scale-105 border-2 border-white/30"
                >
                  Join WhatsApp
                </a>
              </div>
              <p className="mt-6 opacity-90">
                Empowering the next generation of AI/ML innovators
                <br />© 2026 Machine Magnets Club, NIET
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
