import Image from 'next/image'

const SEEDLINGS = [
  {
    id: 'pelargonije',
    name: 'Pelargonije',
    latin: 'Pelargonium',
    desc: 'Klasično cvjetno blago balkona — obilno cvijeta kroz cijelo ljeto.',
    image: '/images/pelargonije.jpg',
    badge: 'Bestseler',
    badgeColor: 'bg-accent text-accent-foreground',
  },
  {
    id: 'petunije',
    name: 'Petunije',
    latin: 'Petunia',
    desc: 'Raskošno cvijeće intenzivnih boja, idealno za visoke lonce i gredice.',
    image: '/images/petunije.jpg',
    badge: 'Popularno',
    badgeColor: 'bg-primary text-primary-foreground',
  },
  {
    id: 'surfinije',
    name: 'Surfinije',
    latin: 'Surfinia',
    desc: 'Kaskadne sadnice savršene za viseće košarice i balkonske kutije.',
    image: '/images/surfinije.jpg',
    badge: 'Novo',
    badgeColor: 'bg-accent text-accent-foreground',
  },
  {
    id: 'begonija',
    name: 'Begonija',
    latin: 'Begonia',
    desc: 'Živopisne boje i otpornost na sjenu — savršena za manje osvijetljene prostore.',
    image: '/images/begonija.jpg',
    badge: null,
    badgeColor: '',
  },
  {
    id: 'kadife',
    name: 'Kadifice',
    latin: 'Tagetes',
    desc: 'Zlatne i narančaste kadifice koje tjeraju štetnike i uljepšavaju vrt.',
    image: '/images/kadife.jpg',
    badge: null,
    badgeColor: '',
  },
  {
    id: 'verbena',
    name: 'Verbena',
    latin: 'Verbena',
    desc: 'Nježne ljubičaste grozdove cvijeta s aromom koji privlači leptire.',
    image: '/images/verbena.jpg',
    badge: 'Ekskluzivinost',
    badgeColor: 'bg-primary text-primary-foreground',
  },
]

export function Products() {
  return (
    <section id="sadnice" className="py-24 bg-secondary" aria-labelledby="products-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block mb-3 text-accent font-semibold text-sm tracking-widest uppercase font-sans">
            Naše sadnice
          </span>
          <h2
            id="products-heading"
            className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance"
          >
            Cvijeće koje oduševljava
          </h2>
          <p className="mt-4 text-muted-foreground font-sans max-w-xl mx-auto text-pretty">
            Biramo samo najkvalitetnije sorte, uzgojene s pažnjom da vam donesu radost od prvog
            dana sadnje.
          </p>
        </div>

        {/* Grid */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          aria-label="Popis sadnica"
        >
          {SEEDLINGS.map((s) => (
            <li key={s.id}>
              <article className="group bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={s.image}
                    alt={`${s.name} (${s.latin}) sadnice`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {s.badge && (
                    <span
                      className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold font-sans ${s.badgeColor}`}
                    >
                      {s.badge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-0.5">
                    {s.name}
                  </h3>
                  <p className="text-xs text-muted-foreground italic font-sans mb-3">{s.latin}</p>
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed flex-1">
                    {s.desc}
                  </p>
                  <a
                    href="#naruci"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors font-sans group/link"
                    aria-label={`Naruči ${s.name}`}
                  >
                    Naruči
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      className="group-hover/link:translate-x-1 transition-transform"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export { SEEDLINGS }
