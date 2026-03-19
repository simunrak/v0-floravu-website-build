'use client'

import { useState, useEffect } from 'react'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#o-nama', label: 'O nama' },
    { href: '#sadnice', label: 'Sadnice' },
    { href: '#dostava', label: 'Dostava' },
    { href: '#naruci', label: 'Naruči' },
    { href: '#kontakt', label: 'Kontakt' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-card/95 backdrop-blur-md shadow-sm border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-2xl font-serif font-bold text-primary group-hover:text-accent transition-colors">
              Flora<span className="text-accent group-hover:text-primary transition-colors">Vu</span>
            </span>
            <span className="text-xs text-muted-foreground hidden sm:block font-sans tracking-widest uppercase mt-1">
              Vukovar
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Navigacija">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#naruci"
              className="ml-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-semibold hover:bg-primary transition-colors"
            >
              Naruči sada
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            aria-label="Otvori izbornik"
            aria-expanded={mobileOpen}
            className="md:hidden p-2 rounded-md text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              {mobileOpen ? (
                <>
                  <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-b border-border shadow-md">
          <nav className="flex flex-col px-4 py-4 gap-3" aria-label="Mobilna navigacija">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-foreground/80 hover:text-primary transition-colors py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#naruci"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-semibold text-center hover:bg-primary transition-colors"
            >
              Naruči sada
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
