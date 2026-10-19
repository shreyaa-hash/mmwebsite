"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Home" },
    { href: "/leadership", label: "Leadership" },
    { href: "/events", label: "Events" },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b-2 border-primary/20 bg-card/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 py-3">
          {links.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  "px-5 py-2 rounded-full font-semibold transition-all duration-300",
                  isActive
                    ? "gradient-red text-white shadow-lg shadow-[rgba(233,45,45,0.25)] border-2 border-white/20"
                    : "text-foreground hover:bg-accent hover:text-accent-foreground border border-transparent hover:border-primary/20",
                ].join(" ")}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
