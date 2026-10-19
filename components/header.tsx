export default function Header() {
  return (
    <header className="gradient-red text-white border-b-4 border-primary/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white to-transparent" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between py-4">
          {/* Left: Club Logo (animated in from left) */}
          <img
            src="/club logo.jpg"
            alt="Machine Magnets Logo"
            className="h-20 w-20 md:h-24 md:w-24 rounded-lg object-contain animate-in slide-in-from-left fade-in-50 duration-700 border-2 border-white/30"
          />

          {/* Center: Title (smaller than before) */}
          <div className="text-center">
            <h1 className="text-balance text-2xl md:text-4xl font-bold leading-tight animate-in fade-in-50 zoom-in-95 duration-700 drop-shadow-lg">
              Machine Magnets
            </h1>
            <p className="text-sm md:text-base opacity-90 animate-in fade-in-50 duration-700 [animation-delay:120ms]">
              Attracted to Innovation, Wired for Impact
            </p>
          </div>

          {/* Right: College Logo (animated in from right) */}
          <img
            src="/Niet logo.jpg"
            alt="NIET College Logo"
            className="h-20 w-20 md:h-24 md:w-24 rounded-lg object-contain animate-in slide-in-from-left fade-in-50 duration-700 border-2 border-white/30"
          />
        </div>
      </div>
    </header>
  )
}
