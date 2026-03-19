export function Contact() {
  return (
    <section id="kontakt" className="py-24 bg-background" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block mb-3 text-accent font-semibold text-sm tracking-widest uppercase font-sans">
            Kontakt
          </span>
          <h2
            id="contact-heading"
            className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance"
          >
            Tu smo za vas
          </h2>
          <p className="mt-4 text-muted-foreground font-sans max-w-md mx-auto text-pretty">
            Imate pitanje ili posebnu želju? Slobodno nas kontaktirajte — rado ćemo vam pomoći!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Email */}
          <a
            href="mailto:floravu032@gmail.com"
            className="group flex flex-col items-center gap-4 p-8 bg-secondary border border-border rounded-2xl hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 text-center"
            aria-label="Pošalji email na floravu032@gmail.com"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 group-hover:bg-white/20 flex items-center justify-center text-primary group-hover:text-white transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.8" />
                <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            </div>
            <div>
              <div className="font-serif font-semibold text-foreground group-hover:text-primary-foreground mb-1 text-lg">E-mail</div>
              <div className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 font-sans">floravu032@gmail.com</div>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+385959981732"
            className="group flex flex-col items-center gap-4 p-8 bg-secondary border border-border rounded-2xl hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 text-center"
            aria-label="Nazovi na +385 95 998 1732"
          >
            <div className="w-12 h-12 rounded-full bg-accent/10 group-hover:bg-white/20 flex items-center justify-center text-accent group-hover:text-white transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.72a16 16 0 0 0 6 6l1.06-1.06a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            </div>
            <div>
              <div className="font-serif font-semibold text-foreground group-hover:text-accent-foreground mb-1 text-lg">Telefon</div>
              <div className="text-sm text-muted-foreground group-hover:text-accent-foreground/80 font-sans">+385 95 998 1732</div>
            </div>
          </a>

          {/* Location */}
          <div className="flex flex-col items-center gap-4 p-8 bg-secondary border border-border rounded-2xl text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            </div>
            <div>
              <div className="font-serif font-semibold text-foreground mb-1 text-lg">Lokacija</div>
              <div className="text-sm text-muted-foreground font-sans">Vukovar, Hrvatska</div>
              <div className="text-xs text-muted-foreground font-sans mt-1">Vukovarsko-srijemska županija</div>
            </div>
          </div>
        </div>

        {/* Social + closing message */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground font-sans text-base mb-6 text-pretty max-w-md mx-auto">
            Pratite nas na društvenim mrežama za savjete o uzgoju i novosti iz FloraVu vrta!
          </p>
          <div className="flex items-center justify-center gap-4">
            {/* Instagram */}
            <a
              href="#"
              aria-label="FloraVu na Instagramu"
              className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="#"
              aria-label="FloraVu na Facebooku"
              className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
