import Image from 'next/image'

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Naslovna sekcija"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Šareni cvjetni vrt u punom cvatu"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/60" />
      </div>

      {/* Decorative floral pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
            radial-gradient(circle at 80% 20%, white 1px, transparent 1px),
            radial-gradient(circle at 60% 80%, white 1px, transparent 1px)`,
          backgroundSize: '120px 120px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32 pt-40">
        {/* Badge */}
        <span className="inline-block mb-6 px-4 py-1.5 rounded-full bg-accent/90 text-accent-foreground text-xs font-semibold tracking-widest uppercase">
          🌸 Vukovar, Hrvatska
        </span>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance mb-6">
          Neka vaš vrt
          <br />
          <span className="text-accent italic">procvjeta</span> ovog proljeća
        </h1>

        <p className="text-lg sm:text-xl text-white/85 font-sans leading-relaxed max-w-2xl mx-auto mb-10 text-pretty">
          Kvalitetne sadnice cvijeća uzgojene s ljubavlju — za balkone, vrtove i terase
          diljem Vukovara i okolice.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#sadnice"
            className="px-8 py-3.5 rounded-full bg-accent text-accent-foreground font-semibold text-base hover:bg-white hover:text-primary transition-all shadow-lg hover:shadow-xl"
          >
            Pogledajte sadnice
          </a>
          <a
            href="#naruci"
            className="px-8 py-3.5 rounded-full border-2 border-white text-white font-semibold text-base hover:bg-white hover:text-primary transition-all"
          >
            Naručite odmah
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-sm mx-auto sm:max-w-none sm:flex sm:gap-12 sm:justify-center">
          {[
            { value: '6+', label: 'Vrsta sadnica' },
            { value: '100%', label: 'Lokalni uzgoj' },
            { value: 'Besplatno', label: 'Dostava Vukovar' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-serif font-bold text-white">{stat.value}</div>
              <div className="text-xs text-white/70 mt-0.5 font-sans">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white/70">
          <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  )
}
