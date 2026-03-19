export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="font-serif text-3xl font-bold mb-3">
              Flora<span className="text-accent">Vu</span>
            </div>
            <p className="text-primary-foreground/75 text-sm font-sans leading-relaxed">
              Kvalitetne sadnice cvijeća uzgojene s ljubavlju u srcu Vukovara.
              Neka vaš vrt procvjeta!
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Brze veze">
            <h3 className="font-serif font-semibold text-lg mb-4">Brze veze</h3>
            <ul className="flex flex-col gap-2">
              {[
                { href: '#o-nama', label: 'O nama' },
                { href: '#sadnice', label: 'Sadnice' },
                { href: '#dostava', label: 'Dostava' },
                { href: '#naruci', label: 'Naruči sada' },
                { href: '#kontakt', label: 'Kontakt' },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-primary-foreground/75 hover:text-primary-foreground transition-colors font-sans"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact info */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Kontakt</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:floravu032@gmail.com"
                  className="flex items-center gap-2 text-sm text-primary-foreground/75 hover:text-primary-foreground transition-colors font-sans"
                  aria-label="E-mail: floravu032@gmail.com"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" />
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  floravu032@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+385959981732"
                  className="flex items-center gap-2 text-sm text-primary-foreground/75 hover:text-primary-foreground transition-colors font-sans"
                  aria-label="Telefon: +385 95 998 1732"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.72a16 16 0 0 0 6 6l1.06-1.06a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  +385 95 998 1732
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/75 font-sans">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2" />
                </svg>
                Vukovar, Hrvatska
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="mt-12 pt-6 border-t border-primary-foreground/20 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-primary-foreground/60 font-sans">
            © {year} FloraVu. Sva prava pridržana.
          </p>
          <p className="text-xs text-primary-foreground/60 font-sans italic">
            Napravljeno s ljubavlju u Vukovaru 🌸
          </p>
        </div>
      </div>
    </footer>
  )
}
