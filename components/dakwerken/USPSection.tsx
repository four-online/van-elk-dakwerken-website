import React from 'react';

const usps = [
  {
    title: 'Binnen 24 uur een scherpe offerte',
    description: 'Dezelfde of volgende werkdag een transparante, vrijblijvende offerte zonder verborgen kosten.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: '5 jaar garantie op al ons werk',
    description: 'Vijf jaar garantie op alle uitgevoerde werkzaamheden en gebruikte materialen.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Transparante prijzen, geen verrassingen',
    description: 'Vaste prijsafspraken — nooit meer dan de offerte, tenzij u zelf aanpassingen doorvoert.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" />
      </svg>
    ),
  },
  {
    title: 'Gecertificeerde vakmannen',
    description: 'Gecertificeerde dakdekkers met tientallen jaren praktijkervaring. Geen zzp\'ers, maar vaste medewerkers.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Lokaal bedrijf, persoonlijk contact',
    description: 'Gevestigd in Den Haag. Altijd direct contact met de eigenaar — geen callcenter.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function USPSection() {
  return (
    <section className="py-16 sm:py-20 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left: sticky header on desktop */}
          <div className="lg:sticky lg:top-24">
            <span className="inline-block bg-red-900/30 text-red-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Waarom Van Elk Dakwerken?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5 leading-tight">
              Wij leveren kwaliteit die{' '}
              <span className="text-red-500">voor zichzelf spreekt</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Al meer dan 15 jaar het vertrouwde adres voor dakwerken in Den Haag, Rijswijk en Zoetermeer.
              Klanten kiezen ons omdat we onze beloftes nakomen.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3.5 rounded-lg transition-colors text-sm"
            >
              Vraag vrijblijvend een offerte aan
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right: USP list */}
          <div className="space-y-3">
            {usps.map((usp) => (
              <div
                key={usp.title}
                className="flex items-start gap-4 bg-gray-900 rounded-xl p-4 border border-gray-800 hover:border-red-800 transition-colors"
              >
                <div className="flex-shrink-0 w-9 h-9 bg-red-600/15 text-red-500 rounded-lg flex items-center justify-center mt-0.5">
                  {usp.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-white text-sm mb-0.5">{usp.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{usp.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
