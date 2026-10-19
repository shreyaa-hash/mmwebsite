"use client"

import React from "react"

type Slide = { src: string; alt?: string } | string

type AutoSlideshowProps = {
  images: Slide[]
  intervalMs?: number
  rounded?: string
  aspectClass?: string
  className?: string
  showArrows?: boolean
  disableAnimation?: boolean
}

export default function AutoSlideshow({
  images,
  intervalMs = 3000,
  rounded = "rounded-2xl",
  aspectClass = "aspect-[16/9]",
  className = "",
  showArrows = true,
  disableAnimation = true,
}: AutoSlideshowProps) {
  const items = React.useMemo(() => images.map((it) => (typeof it === "string" ? { src: it, alt: "" } : it)), [images])
  const [index, setIndex] = React.useState(0)
  const [paused, setPaused] = React.useState(false)

  React.useEffect(() => {
    if (disableAnimation || paused || items.length < 2) return
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), intervalMs)
    return () => clearInterval(id)
  }, [items.length, intervalMs, paused, disableAnimation])

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (items.length < 2) return
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % items.length)
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + items.length) % items.length)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [items.length])

  function goNext() {
    setIndex((i) => (i + 1) % items.length)
  }
  function goPrev() {
    setIndex((i) => (i - 1 + items.length) % items.length)
  }

  const startX = React.useRef<number | null>(null)
  function onTouchStart(e: React.TouchEvent) {
    startX.current = e.touches[0].clientX
  }
  function onTouchEnd(e: React.TouchEvent) {
    if (startX.current == null) return
    const dx = e.changedTouches[0].clientX - startX.current
    if (Math.abs(dx) > 40) setIndex((i) => (i + (dx < 0 ? 1 : -1) + items.length) % items.length)
    startX.current = null
  }

  return (
    <div
      className={`relative overflow-hidden ${rounded} ${aspectClass} ai-bg-red-gradient-soft ${
        disableAnimation ? "" : "mm-animated-border"
      } ${className}`}
      tabIndex={0}
      onMouseEnter={() => !disableAnimation && setPaused(true)}
      onMouseLeave={() => !disableAnimation && setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {items.map((img, i) => (
        <img
          key={`${img.src}-${i}`}
          src={img.src || "/placeholder.svg"}
          alt={img.alt || "Event image"}
          className={`absolute inset-0 h-full w-full object-cover ${
            disableAnimation
              ? i === index
                ? "opacity-100"
                : "opacity-0"
              : `transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`
          }`}
        />
      ))}
      {showArrows && items.length > 1 && (
        <>
          <button
            aria-label="Previous slide"
            onClick={goPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/70 hover:bg-white shadow-md border border-primary/30 grid place-items-center text-primary font-bold"
          >
            ‹
          </button>
          <button
            aria-label="Next slide"
            onClick={goNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/70 hover:bg-white shadow-md border border-primary/30 grid place-items-center text-primary font-bold"
          >
            ›
          </button>
        </>
      )}
      {items.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 rounded-full px-3 py-1 backdrop-blur-sm bg-[color-mix(in_oklab,white_70%,var(--primary))]/70 border border-[color-mix(in_oklab,var(--primary)_20%,white)]">
          {items.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === index
                  ? "bg-[color-mix(in_oklab,var(--primary)_85%,#ffcccc)] scale-110"
                  : "bg-[color-mix(in_oklab,var(--primary)_25%,white)]"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
