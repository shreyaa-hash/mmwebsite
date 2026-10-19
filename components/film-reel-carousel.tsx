"use client"

import React from "react"

type Slide = { src: string; alt?: string } | string

type FilmReelCarouselProps = {
  images: Slide[]
  // pixels per second
  speed?: number
  itemHeightRem?: number // tailwind h-36 (9rem) default
  className?: string
  itemAspect?: number // width / height ratio, default 16/9
}

export default function FilmReelCarousel({
  images,
  speed = 28,
  itemHeightRem = 9,
  className = "",
  itemAspect = 16 / 9,
}: FilmReelCarouselProps) {
  const items = React.useMemo(
    () => (images || []).map((it) => (typeof it === "string" ? { src: it, alt: "" } : it)).slice(0, 20),
    [images],
  )

  const [offset, setOffset] = React.useState(0)
  const [paused, setPaused] = React.useState(false)

  const itemHeightPx = itemHeightRem * 16 // 1rem = 16px
  const itemWidthPx = Math.max(1, itemHeightPx * itemAspect)
  const contentHeight = items.length * itemHeightPx

  // Auto upward scroll using rAF for smooth, looped motion
  React.useEffect(() => {
    let raf = 0
    let last = performance.now()
    const tick = (now: number) => {
      const dt = (now - last) / 1000
      last = now
      if (!paused && items.length > 0) {
        setOffset((prev) => {
          let next = prev + speed * dt
          if (next >= contentHeight && contentHeight > 0) {
            next -= contentHeight
          }
          return next
        })
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [paused, speed, contentHeight, items.length])

  function step(deltaItems: number) {
    setOffset((prev) => {
      let next = prev + deltaItems * itemHeightPx
      // normalize into [0, contentHeight)
      if (contentHeight === 0) return 0
      next = ((next % contentHeight) + contentHeight) % contentHeight
      return next
    })
  }

  return (
    <div
      className={`relative h-full w-full overflow-hidden rounded-2xl border-2 border-primary bg-card ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Event film reel"
    >
      {/* Red perforation rails */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-4 opacity-70"
        style={{
          backgroundImage:
            "repeating-linear-gradient(180deg, transparent 0 16px, color-mix(in oklab, var(--primary) 75%, transparent) 16px 28px)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-4 opacity-70"
        style={{
          backgroundImage:
            "repeating-linear-gradient(180deg, transparent 0 16px, color-mix(in oklab, var(--primary) 75%, transparent) 16px 28px)",
        }}
      />

      {/* Frames */}
      <div className="absolute inset-0 will-change-transform" style={{ transform: `translateY(-${offset}px)` }}>
        {[...items, ...items].map((img, i) => (
          <figure
            key={`${img.src}-${i}`}
            className="mx-auto box-border bg-background/40 border-b-2 border-primary rounded-xl shadow-sm"
            style={{ height: `${itemHeightPx}px`, width: `${itemWidthPx}px` }}
          >
            <img
              src={img.src || "/placeholder.svg?height=512&width=512&query=event%20landscape%20image"}
              alt={img.alt || "Event image"}
              className="h-full w-full object-cover rounded-lg"
              loading="lazy"
            />
            <figcaption className="sr-only">{img.alt || "Event image"}</figcaption>
          </figure>
        ))}
      </div>

      {/* Manual controls (kept) */}
      <div className="absolute right-3 top-16 z-10 flex flex-col gap-2">
        <button
          type="button"
          aria-label="Scroll up"
          onClick={() => step(1)}
          className="h-9 w-9 rounded-full bg-background/80 text-foreground border border-primary/60 shadow-sm hover:bg-background"
          title="Scroll up"
        >
          ▲
        </button>
        <button
          type="button"
          aria-label="Scroll down"
          onClick={() => step(-1)}
          className="h-9 w-9 rounded-full bg-background/80 text-foreground border border-primary/60 shadow-sm hover:bg-background"
          title="Scroll down"
        >
          ▼
        </button>
      </div>
    </div>
  )
}
