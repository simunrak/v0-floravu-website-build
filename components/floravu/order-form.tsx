'use client'

import { useState } from 'react'

const SEEDLING_OPTIONS = [
  'Pelargonije',
  'Petunije',
  'Surfinije',
  'Begonija',
  'Kadifice',
  'Verbena',
]

type FormData = {
  ime: string
  telefon: string
  adresa: string
  grad: string
  sadnica: string
  kolicina: string
  napomena: string
}

const EMPTY_FORM: FormData = {
  ime: '',
  telefon: '',
  adresa: '',
  grad: '',
  sadnica: '',
  kolicina: '1',
  napomena: '',
}

export function OrderForm() {
  const [form, setForm] = useState<FormData>(EMPTY_FORM)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validate = () => {
    const e: Partial<FormData> = {}
    if (!form.ime.trim()) e.ime = 'Ime i prezime su obvezni.'
    if (!form.telefon.trim()) e.telefon = 'Telefon je obvezan.'
    if (!form.adresa.trim()) e.adresa = 'Adresa je obvezna.'
    if (!form.grad.trim()) e.grad = 'Grad je obvezan.'
    if (!form.sadnica) e.sadnica = 'Odaberite vrstu sadnice.'
    if (!form.kolicina || Number(form.kolicina) < 1) e.kolicina = 'Unesite ispravnu količinu.'
    return e
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    const subject = encodeURIComponent('Nova narudžba - FloraVu')
    const body = encodeURIComponent(
      `Ime: ${form.ime}\nTelefon: ${form.telefon}\nAdresa: ${form.adresa}\nGrad: ${form.grad}\nVrsta sadnice: ${form.sadnica}\nKoličina: ${form.kolicina}\nNapomena: ${form.napomena || '(bez napomene)'}`
    )
    window.location.href = `mailto:floravu032@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
    setForm(EMPTY_FORM)
  }

  const fieldClass = (name: keyof FormData) =>
    `w-full px-4 py-3 rounded-xl border font-sans text-sm text-foreground bg-background placeholder-muted-foreground outline-none transition-all focus:ring-2 focus:ring-primary/40 ${
      errors[name] ? 'border-destructive' : 'border-input focus:border-primary'
    }`

  return (
    <section id="naruci" className="py-24 bg-secondary" aria-labelledby="order-heading">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block mb-3 text-accent font-semibold text-sm tracking-widest uppercase font-sans">
            Narudžba
          </span>
          <h2
            id="order-heading"
            className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance"
          >
            Naručite Sada
          </h2>
          <p className="mt-4 text-muted-foreground font-sans max-w-md mx-auto text-pretty">
            Ispunite obrazac i mi ćemo vas kontaktirati u najkraćem roku za potvrdu narudžbe.
          </p>
        </div>

        {submitted ? (
          <div className="bg-primary text-primary-foreground rounded-2xl p-10 text-center shadow-md">
            <div className="text-5xl mb-5" aria-hidden="true">🌸</div>
            <h3 className="font-serif text-2xl font-bold mb-3">Hvala na narudžbi!</h3>
            <p className="font-sans text-primary-foreground/85 leading-relaxed">
              Otvara se vaš e-mail klijent s popunjenom porukom. Pošaljite je i mi ćemo vas uskoro
              kontaktirati za potvrdu.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 px-6 py-2.5 rounded-full bg-white text-primary font-semibold text-sm hover:bg-accent hover:text-accent-foreground transition-colors font-sans"
            >
              Nova narudžba
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-card border border-border rounded-2xl p-8 shadow-sm"
            aria-label="Obrazac za narudžbu"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Ime */}
              <div className="sm:col-span-2">
                <label htmlFor="ime" className="block text-sm font-semibold text-foreground mb-1.5 font-sans">
                  Ime i Prezime <span className="text-accent" aria-label="obavezno">*</span>
                </label>
                <input
                  id="ime"
                  name="ime"
                  type="text"
                  value={form.ime}
                  onChange={handleChange}
                  placeholder="npr. Ana Horvat"
                  className={fieldClass('ime')}
                  aria-required="true"
                  aria-describedby={errors.ime ? 'ime-error' : undefined}
                />
                {errors.ime && <p id="ime-error" className="mt-1 text-xs text-destructive font-sans" role="alert">{errors.ime}</p>}
              </div>

              {/* Telefon */}
              <div>
                <label htmlFor="telefon" className="block text-sm font-semibold text-foreground mb-1.5 font-sans">
                  Telefon <span className="text-accent" aria-label="obavezno">*</span>
                </label>
                <input
                  id="telefon"
                  name="telefon"
                  type="tel"
                  value={form.telefon}
                  onChange={handleChange}
                  placeholder="+385 91 234 5678"
                  className={fieldClass('telefon')}
                  aria-required="true"
                  aria-describedby={errors.telefon ? 'telefon-error' : undefined}
                />
                {errors.telefon && <p id="telefon-error" className="mt-1 text-xs text-destructive font-sans" role="alert">{errors.telefon}</p>}
              </div>

              {/* Grad */}
              <div>
                <label htmlFor="grad" className="block text-sm font-semibold text-foreground mb-1.5 font-sans">
                  Grad <span className="text-accent" aria-label="obavezno">*</span>
                </label>
                <input
                  id="grad"
                  name="grad"
                  type="text"
                  value={form.grad}
                  onChange={handleChange}
                  placeholder="npr. Vukovar"
                  className={fieldClass('grad')}
                  aria-required="true"
                  aria-describedby={errors.grad ? 'grad-error' : undefined}
                />
                {errors.grad && <p id="grad-error" className="mt-1 text-xs text-destructive font-sans" role="alert">{errors.grad}</p>}
              </div>

              {/* Adresa */}
              <div className="sm:col-span-2">
                <label htmlFor="adresa" className="block text-sm font-semibold text-foreground mb-1.5 font-sans">
                  Adresa <span className="text-accent" aria-label="obavezno">*</span>
                </label>
                <input
                  id="adresa"
                  name="adresa"
                  type="text"
                  value={form.adresa}
                  onChange={handleChange}
                  placeholder="npr. Ulica braće Radić 12"
                  className={fieldClass('adresa')}
                  aria-required="true"
                  aria-describedby={errors.adresa ? 'adresa-error' : undefined}
                />
                {errors.adresa && <p id="adresa-error" className="mt-1 text-xs text-destructive font-sans" role="alert">{errors.adresa}</p>}
              </div>

              {/* Vrsta sadnice */}
              <div>
                <label htmlFor="sadnica" className="block text-sm font-semibold text-foreground mb-1.5 font-sans">
                  Vrsta sadnice <span className="text-accent" aria-label="obavezno">*</span>
                </label>
                <select
                  id="sadnica"
                  name="sadnica"
                  value={form.sadnica}
                  onChange={handleChange}
                  className={`${fieldClass('sadnica')} appearance-none cursor-pointer`}
                  aria-required="true"
                  aria-describedby={errors.sadnica ? 'sadnica-error' : undefined}
                >
                  <option value="">-- Odaberite sadnicu --</option>
                  {SEEDLING_OPTIONS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors.sadnica && <p id="sadnica-error" className="mt-1 text-xs text-destructive font-sans" role="alert">{errors.sadnica}</p>}
              </div>

              {/* Kolicina */}
              <div>
                <label htmlFor="kolicina" className="block text-sm font-semibold text-foreground mb-1.5 font-sans">
                  Količina <span className="text-accent" aria-label="obavezno">*</span>
                </label>
                <input
                  id="kolicina"
                  name="kolicina"
                  type="number"
                  min={1}
                  value={form.kolicina}
                  onChange={handleChange}
                  className={fieldClass('kolicina')}
                  aria-required="true"
                  aria-describedby={errors.kolicina ? 'kolicina-error' : undefined}
                />
                {errors.kolicina && <p id="kolicina-error" className="mt-1 text-xs text-destructive font-sans" role="alert">{errors.kolicina}</p>}
              </div>

              {/* Napomena */}
              <div className="sm:col-span-2">
                <label htmlFor="napomena" className="block text-sm font-semibold text-foreground mb-1.5 font-sans">
                  Napomena{' '}
                  <span className="text-muted-foreground font-normal text-xs">(nije obavezno)</span>
                </label>
                <textarea
                  id="napomena"
                  name="napomena"
                  value={form.napomena}
                  onChange={handleChange}
                  placeholder="Posebne želje, preferencije boja, pitanja..."
                  rows={3}
                  className={`${fieldClass('napomena')} resize-none`}
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-base font-sans hover:bg-accent transition-colors shadow-md hover:shadow-lg active:scale-[0.99]"
            >
              Pošalji Narudžbu 🌸
            </button>

            <p className="mt-4 text-xs text-muted-foreground text-center font-sans">
              Kontaktirat ćemo vas za potvrdu narudžbe i detalje o dostavi.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
