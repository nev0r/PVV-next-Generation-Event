export default function PVVNextGenerationEventLandingPage() {
  const highlights = [
    {
      title: "Netzwerk auf neuem Niveau",
      text: "Treffen Sie die nächste Generation von Unternehmer:innen, Investor:innen und Entscheider:innen in einer besonderen Atmosphäre.",
    },
    {
      title: "Sport trifft Business",
      text: "Eine markante Event-Inszenierung zwischen Dynamik, Exzellenz und persönlichem Austausch – inspiriert vom Spirit des Spiels.",
    },
    {
      title: "Exklusive Location",
      text: "Villa Bredeney bietet den passenden Rahmen für einen hochwertigen Abend mit Stil, Inhalt und bleibenden Gesprächen.",
    },
  ];

    return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.35),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(220,38,38,0.25),transparent_30%)]" />
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(135deg,transparent_0%,transparent_35%,rgba(255,255,255,0.08)_35.5%,transparent_36%,transparent_100%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <div className="flex items-center justify-between">
            <div className="text-3xl font-black tracking-tight text-red-600">PVV</div>
            <a
              href="https://www.pvv-ag.de"
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur hover:bg-white/10"
            >
              www.pvv-ag.de
            </a>
          </div>

          <div className="grid gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1 text-sm font-medium text-red-300">
                PVV Kundenveranstaltung
              </div>
              <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                <span className="text-red-600">PVV</span>{" "}
                <span className="text-white">Next Generation Event</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
                Ein geselliger Nachmittag mit Freunden und Familie der PVV AG – mit starkem Event-Auftritt, entspannter Atmosphäre und einem Rahmenprogramm für Groß und Klein.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#anmeldung"
                  className="rounded-2xl bg-red-600 px-6 py-4 text-center text-base font-semibold shadow-2xl shadow-red-900/30 transition hover:-translate-y-0.5 hover:bg-red-500"
                >
                  Jetzt Interesse anmelden
                </a>
                <a
                  href="#event"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-center text-base font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
                >
                  Mehr zum Event
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-red-600/15 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur">
                <div className="grid h-[520px] grid-cols-2 gap-3">
                  <div
                    className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "linear-gradient(to top, rgba(0,0,0,.28), rgba(0,0,0,.08)), url('/mnt/data/940-626-max.jpg')",
                      clipPath: "polygon(0 0, 100% 0, 76% 100%, 0 100%)",
                    }}
                  />
                  <div
                    className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "linear-gradient(to top, rgba(0,0,0,.18), rgba(0,0,0,.02)), url('/mnt/data/aussenaufnahme-01.jpg')",
                      clipPath: "polygon(24% 0, 100% 0, 100% 100%, 0 100%)",
                    }}
                  />
                </div>
                <div className="pointer-events-none absolute inset-x-6 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-red-500/80 to-transparent" />
                <div className="pointer-events-none absolute inset-x-10 bottom-8 rounded-2xl border border-white/10 bg-black/40 px-5 py-4 backdrop-blur-md">
                  <div className="text-sm uppercase tracking-[0.24em] text-red-400">Family & Friends Event</div>
                  <div className="mt-1 text-2xl font-bold">Gemeinsam. Persönlich. Besonders.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="event" className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7 shadow-xl shadow-black/20"
            >
              <div className="mb-4 h-1.5 w-14 rounded-full bg-red-600" />
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-white/70">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-4 lg:px-10 lg:py-8">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-8">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-red-400">Event Story</div>
            <h2 className="mt-4 text-4xl font-black tracking-tight">Ein geselliger Nachmittag mit Freunden und Familie der PVV AG.</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
              Das PVV Next Generation Event ist als entspannter, hochwertiger Nachmittag für Kundinnen und Kunden, Freunde und Familien der PVV AG gedacht. Die Veranstaltung findet am <span className="font-semibold text-white">Uhlenhorst</span> statt. Start ist um <span className="font-semibold text-white">15:00 Uhr</span> am <span className="font-semibold text-white">03.07.2026</span>.
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-white/75">
              Für <span className="font-semibold text-white">Musik, Essen und Getränke</span> ist selbstverständlich gesorgt. Gleichzeitig bietet der <span className="font-semibold text-white">Uhlenhorst</span> für Kinder <span className="font-semibold text-white">Tennis- und Hockey-Unterricht mit Trainern</span> an – damit auch die jüngeren Gäste einen besonderen Nachmittag erleben.
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-white/75">
              <span className="font-semibold text-white">Adresse:</span> Uhlenhorstweg 19, 45479 Mülheim an der Ruhr. Am Uhlenhorst sowie gegenüber der Anlage stehen ausreichend Parkplätze zur Verfügung.
            </p>
          </div>

          <div className="rounded-[2rem] border border-red-500/20 bg-red-600/10 p-8">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-red-300">Kurzvorstellung PVV AG</div>
            <p className="mt-6 text-base leading-7 text-white/85">
              Die PVV AG mit Sitz in Essen versteht sich als persönlicher Ansprechpartner in allen Vermögensfragen. Laut Unternehmenswebsite umfasst das Leistungsspektrum unter anderem Vermögensverwaltung, Finanzplanung, Vermögenscontrolling, Fund Advisory, Stiftungsmanagement sowie Lösungen rund um Vorsorge und Beteiligungen. Die PVV betont dabei generationenübergreifende Beratung, persönliche Betreuung und individuelle Konzepte für Privatpersonen, Institutionen und Stiftungen.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 lg:p-10">
          <div className="text-sm font-semibold uppercase tracking-[0.24em] text-red-400">Location</div>
          <h2 className="mt-4 text-3xl font-black tracking-tight">Uhlenhorst – Mülheim an der Ruhr</h2>
          <p className="mt-4 max-w-3xl text-white/75">
            Uhlenhorstweg 19, 45479 Mülheim an der Ruhr. Am Uhlenhorst sowie gegenüber der Anlage stehen ausreichend Parkplätze zur Verfügung.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
            <iframe
              src="https://www.google.com/maps?q=Uhlenhorstweg+19,+45479+Mülheim+an+der+Ruhr&output=embed"
              width="100%"
              height="380"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section id="anmeldung" className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-20">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 lg:p-12">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-red-600/20 blur-3xl" />
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-red-400">Anmeldung</div>
              <h2 className="mt-4 text-4xl font-black tracking-tight">Teilnahme bequem vormerken.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
                Bitte tragen Sie hier Ihre Daten ein. So lässt sich die Teilnahme für Erwachsene und Kinder einfach planen.
              </p>
              <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-black/20 p-6 text-white/75">
                <div className="text-sm uppercase tracking-[0.24em] text-red-300">Wichtige Info</div>
                <p className="mt-3 text-base leading-7">
                  Start der Veranstaltung ist um <span className="font-semibold text-white">15:00 Uhr</span>. Für Musik, Essen und Getränke ist gesorgt. Der Uhlenhorst bietet für Kinder Tennis- und Hockey-Unterricht mit Trainern an.
                </p>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-black/30 p-6">
              <form className="space-y-4" action="https://formspree.io/f/mexample" method="POST">
                <input
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/35 outline-none"
                  placeholder="Name"
                />
                <input
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/35 outline-none"
                  placeholder="E-Mail-Adresse"
                />
                <input
                  type="number"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/35 outline-none"
                  placeholder="Personenanzahl"
                />
                <input
                  type="number"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/35 outline-none"
                  placeholder="Anzahl der Kinder"
                />
                <div>
                  <div className="mb-3 text-sm font-medium text-white/70">Alter der Kinder</div>
                  <div className="grid grid-cols-2 gap-3">
                    {['0-3', '3-6', '6-10', '+10'].map((range) => (
                      <label key={range} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
                        <input type="checkbox" className="h-4 w-4 accent-red-600" />
                        {range}
                      </label>
                    ))}
                  </div>
                </div>
                <button className="w-full rounded-xl bg-red-600 px-5 py-3 font-semibold transition hover:bg-red-500">
                  Anmeldung absenden (wird an julian.kampmann@pvv-ag.de gesendet)
                </button>
              </form>
              <p className="mt-4 text-sm leading-6 text-white/45">
                Dieses Formular kann über Formspree oder einen ähnlichen Dienst direkt an julian.kampmann@pvv-ag.de weitergeleitet werden.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
