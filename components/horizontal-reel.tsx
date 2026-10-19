"use client"

import React from "react"

type Slide = { src: string; alt?: string } | string

type HorizontalReelProps = {
  images: Slide[]
  heightRem?: number // square frame size; default 9rem
  speed?: number // px per second
  className?: string
  pingPongIntervalMs?: number // how often to flip direction automatically
  maxItems?: number
  aspect?: number // width / height ratio, default 16/9
}

export default function HorizontalReel({
  images,
  heightRem = 9,
  speed = 48,
  className = "",
  pingPongIntervalMs = 6000,
  maxItems = 15,
  aspect = 16 / 9,
}: HorizontalReelProps) {
  const items = React.useMemo(
    () => (images || []).map((it) => (typeof it === "string" ? { src: it, alt: "" } : it)).slice(0, maxItems),
    [images, maxItems],
  )

  const [offset, setOffset] = React.useState(0)
  const [paused, setPaused] = React.useState(false)
  const [dir, setDir] = React.useState<1 | -1>(1) // 1 => LTR, -1 => RTL

  const itemSizePx = heightRem * 16 // height in px
  const gapPx = 12 // visual separation between frames
  const itemWidthPx = Math.max(1, itemSizePx * aspect)
  const frameWidth = itemWidthPx + gapPx
  const contentWidth = items.length * frameWidth

  React.useEffect(() => {
    let raf = 0
    let last = performance.now()
    const tick = (now: number) => {
      const dt = (now - last) / 1000
      last = now
      if (!paused && items.length > 0) {
        setOffset((prev) => {
          let next = prev + dir * speed * dt
          if (contentWidth === 0) return 0
          next = ((next % contentWidth) + contentWidth) % contentWidth
          return next
        })
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [paused, speed, contentWidth, dir, items.length])

  React.useEffect(() => {
    const id = window.setInterval(() => setDir((d) => (d === 1 ? -1 : 1)), pingPongIntervalMs)
    return () => window.clearInterval(id)
  }, [pingPongIntervalMs])

  function step(frames: number) {
    setOffset((prev) => {
      if (contentWidth === 0) return 0
      let next = prev + frames * frameWidth
      next = ((next % contentWidth) + contentWidth) % contentWidth
      return next
    })
  }

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl border-2 border-primary bg-card ${className}`}
      style={{ height: `${itemSizePx + 8}px` }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Highlights film reel"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent opacity-80" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent opacity-80" />

      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translateX(-${offset}px)` }}
        aria-hidden="true"
      >
        <div className="flex items-center" style={{ gap: `${gapPx}px` }}>
          {[...items, ...items].map((img, i) => (
            <figure
              key={`${img.src}-${i}`}
              className="box-border bg-background/40 border-2 border-primary rounded-xl shadow-sm"
              style={{ width: `${itemWidthPx}px`, height: `${itemSizePx}px` }}
            >
              <img
                src={img.src || "/placeholder.svg?height=512&width=912&query=highlight%20landscape%20image"}
                alt={img.alt || "Highlight image"}
                className="h-full w-full object-cover rounded-lg"
                loading="lazy"
              />
              <figcaption className="sr-only">{img.alt || "Highlight image"}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-between px-2">
        <button
          type="button"
          aria-label="Scroll left"
          onClick={() => step(-1)}
          className="rounded-md bg-background/70 text-foreground hover:bg-background px-3 py-2 border border-primary/60 shadow-sm"
          title="Scroll left"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Scroll right"
          onClick={() => step(1)}
          className="rounded-md bg-background/70 text-foreground hover:bg-background px-3 py-2 border border-primary/60 shadow-sm"
          title="Scroll right"
        >
          ›
        </button>
      </div>
    </div>
  )
}
