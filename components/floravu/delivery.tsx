const DELIVERY_AREAS = [
  'Borovo', 'Borovo Naselje', 'Bogdanovci', 'Trpinja', 'Negoslavci',
  'Nijemci', 'Ilok', 'Tovarnik', 'Lovas', 'Šarengrad',
]

export function Delivery() {
  return (
    <section id="dostava" className="py-24 bg-background" aria-labelledby="delivery-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block mb-3 text-accent font-semibold text-sm tracking-widest uppercase font-sans">
            Dostava
          </span>
          <h2
            id="delivery-heading"
            className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance"
          >
            Donosimo cvjetnu radost do vaših vrata
          </h2>
          <p className="mt-4 text-muted-foreground font-sans max-w-xl mx-auto text-pretty">
            Brza i pouzdana dostava — jer svježe sadnice ne smiju čekati predugo.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-14">
          {/* Free delivery */}
          <div className="relative bg-primary text-primary-foreground rounded-2xl p-8 shadow-md overflow-hidden">
            <div
              className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10"
              aria-hidden="true"
            />
            <div className="relative z-10">
              <div className="mb-4">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="9" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="12" cy="21" r="1" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="20" cy="21" r="1" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </div>
              <div className="text-3xl font-serif font-bold mb-1">BESPLATNO</div>
              <div className="text-lg font-semibold mb-3 font-sans">Dostava u Vukovaru</div>
              <p className="text-primary-foreground/80 text-sm font-sans leading-relaxed">
                Svi narudžbi unutar grada Vukovara dostavljaju se bez ikakvih troškova dostave.
              </p>
            </div>
          </div>

          {/* Paid delivery */}
          <div className="relative bg-secondary border border-border rounded-2xl p-8 shadow-sm overflow-hidden">
            <div
              className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-accent/10"
              aria-hidden="true"
            />
            <div className="relative z-10">
              <div className="mb-4 text-accent">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <div className="text-3xl font-serif font-bold text-foreground mb-1">2 EUR</div>
              <div className="text-lg font-semibold mb-3 font-sans text-foreground">Okolna mjesta</div>
              <p className="text-muted-foreground text-sm font-sans leading-relaxed">
                Pristupačna naknada za dostavu u okolna mjesta i gradove vukovarsko-srijemske
                županije.
              </p>
            </div>
          </div>
        </div>

        {/* Coverage */}
        <div className="max-w-3xl mx-auto bg-secondary border border-border rounded-2xl p-8">
          <div className="flex items-center gap-2 mb-5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-primary">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.8" />
              <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8" />
            </svg>
            <h3 className="font-serif text-xl font-semibold text-foreground">Područje dostave</h3>
          </div>
          <p className="text-sm text-muted-foreground font-sans mb-5">
            Dostavljamo u Vukovar (besplatno) te u sljedeća okolna mjesta (2 EUR):
          </p>
          <ul className="flex flex-wrap gap-2" aria-label="Mjesta dostave">
            {DELIVERY_AREAS.map((area) => (
              <li key={area}>
                <span className="inline-block px-3 py-1.5 rounded-full bg-background border border-border text-sm text-foreground font-sans">
                  {area}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-muted-foreground font-sans">
            Ne vidite vaš grad? Slobodno nas kontaktirajte —{' '}
            <a href="#kontakt" className="text-accent font-semibold hover:underline">
              dogovorit ćemo dostavu!
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
