"use client"

import { useEffect, useMemo, useRef, useState } from "react"

type Slide = {
  src: string
  alt: string
}

const slides: Slide[] = [
  {
    src: "/highlight1.jpg",
    alt: "Club workshop with students collaborating on laptops",
  }
]

export default function ImageCarousel() {
  const [index, setIndex] = useState(0)
  const timerRef = useRef<number | null>(null)
  const length = slides.length
  const ids = useMemo(() => slides.map((_, i) => `carousel-slide-${i}`), [])

  const goTo = (i: number) => setIndex((i + length) % length)
  const next = () => goTo(index + 1)
  const prev = () => goTo(index - 1)

  // autoplay
  useEffect(() => {
    timerRef.current && window.clearInterval(timerRef.current)
    timerRef.current = window.setInterval(next, 4000)
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  return (
    <div className="relative" role="region" aria-roledescription="carousel" aria-label="Club image slideshow">
      {/* Slides */}
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <figure key={i} id={ids[i]} aria-hidden={index !== i} className="min-w-full">
              <img
                src={slide.src || "/placeholder.svg"}
                alt={slide.alt}
                className="h-[240px] w-full object-cover md:h-[420px]"
                loading="lazy"
              />
              <figcaption className="sr-only">{slide.alt}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="absolute inset-0 flex items-center justify-between p-2">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={prev}
          className="rounded-md bg-background/70 text-foreground hover:bg-background px-3 py-2 border shadow-sm"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={next}
          className="rounded-md bg-background/70 text-foreground hover:bg-background px-3 py-2 border shadow-sm"
        >
          ›
        </button>
      </div>

      {/* Indicators */}
      <div className="mt-3 flex items-center justify-center gap-2">
        {slides.map((_, i) => {
          const active = i === index
          return (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-controls={ids[i]}
              aria-current={active ? "true" : "false"}
              onClick={() => goTo(i)}
              className={[
                "h-2 w-2 rounded-full transition-colors",
                active ? "bg-primary" : "bg-muted-foreground/30",
              ].join(" ")}
            />
          )
        })}
      </div>
    </div>
  )
}
