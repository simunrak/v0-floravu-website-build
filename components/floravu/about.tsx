export function About() {
  return (
    <section id="o-nama" className="py-24 bg-background" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <span className="inline-block mb-4 text-accent font-semibold text-sm tracking-widest uppercase font-sans">
              O nama
            </span>
            <h2
              id="about-heading"
              className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight text-balance mb-6"
            >
              Iz vukovarske zemlje — s ljubavlju prema cvijetu
            </h2>
            <p className="text-muted-foreground font-sans leading-relaxed text-base mb-5">
              Smo mala, obiteljska rasadnica smještena u srcu Vukovara, grad koji nas svakodnevno
              inspirira svojom snagom i ljepotom. Naša strast prema bilju pretvorila se u poziv —
              pomagati vam da vaši domovi, balkoni i vrtovi zasjaju bojama.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed text-base mb-8">
              Svaka sadnica koju uzgojimo prolazi kroz pažljiv uzgoj u optimalnim uvjetima.
              Vjerujemo da je ljepota dostupna svima — zato nudimo pristupačne cijene i brzu
              dostavu na vaše kućne pragove.
            </p>

            {/* Values */}
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M12 2C8 2 4 5.5 4 10c0 3.5 2 6.5 5 8.5V22h6v-3.5c3-2 5-5 5-8.5 0-4.5-4-8-8-8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                  title: 'Lokalni uzgoj',
                  desc: 'Svaka biljka uzgojena u Vukovaru',
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M12 22s8-4.5 8-11.5A8 8 0 0 0 4 10.5C4 17.5 12 22 12 22z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                  title: 'Vrhunska kvaliteta',
                  desc: 'Zdrave sadnice garantirane',
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" stroke="currentColor" strokeWidth="1.8" />
                      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="currentColor" strokeWidth="1.8" />
                    </svg>
                  ),
                  title: 'Brza dostava',
                  desc: 'Do vas u najkraćem roku',
                },
              ].map((v) => (
                <li key={v.title} className="flex flex-col items-start gap-2 p-4 rounded-xl bg-secondary border border-border">
                  <span className="text-primary">{v.icon}</span>
                  <span className="font-semibold text-sm text-foreground font-sans">{v.title}</span>
                  <span className="text-xs text-muted-foreground font-sans">{v.desc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual */}
          <div className="relative" aria-hidden="true">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5] bg-secondary">
              {/* Decorative quote */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center z-10">
                <div className="text-6xl mb-4" aria-hidden="true">🌿</div>
                <blockquote className="font-serif text-2xl font-semibold text-foreground leading-relaxed italic text-balance">
                  &ldquo;Svaki cvijet je duša koja cvjeta prema prirodi.&rdquo;
                </blockquote>
                <p className="mt-6 text-muted-foreground text-sm font-sans">— S ljubavlju iz Vukovara</p>
                {/* Decorative dots */}
                <div className="mt-8 flex gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="w-2 h-2 rounded-full bg-accent" />
                </div>
              </div>
              {/* Background pattern */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `radial-gradient(circle, var(--color-primary) 1.5px, transparent 1.5px)`,
                  backgroundSize: '28px 28px',
                }}
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-accent text-accent-foreground rounded-2xl p-4 shadow-lg">
              <div className="text-2xl font-serif font-bold">5★</div>
              <div className="text-xs font-sans mt-0.5">Zadovoljni kupci</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
