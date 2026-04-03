import React from 'react';

const services = [
  {
    number: '001',
    title: 'Daklekkage reparatie',
    description: 'Snelle en duurzame reparatie van lekkages — ook in spoedsituaties. Wij komen dezelfde dag nog langs in Den Haag en omgeving.',
    urgent: true,
    href: '/diensten/daklekkage-reparatie',
    gradient: 'from-red-950 to-red-900',
    iconPath: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z',
  },
  {
    number: '002',
    title: 'Dakrenovatie',
    description: 'Volledig vernieuwd dak met modern materiaal. Van bitumen tot EPDM — wij adviseren wat het beste bij uw woning past.',
    urgent: false,
    href: '/diensten/dakrenovatie',
    gradient: 'from-gray-900 to-gray-800',
    iconPath: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  },
  {
    number: '003',
    title: 'Plat dak',
    description: 'Aanleg, renovatie en onderhoud van platte daken met bitumen, EPDM of PVC — inclusief garantie op alle materialen.',
    urgent: false,
    href: '/diensten/plat-dak',
    gradient: 'from-gray-900 to-gray-800',
    iconPath: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
  },
  {
    number: '004',
    title: 'Pannendak',
    description: 'Plaatsen, repareren of vervangen van dakpannen — inclusief nokvorst, dakbedekking en goede ventilatie.',
    urgent: false,
    href: '/diensten/pannendak',
    gradient: 'from-gray-900 to-gray-800',
    iconPath: 'M7 21H3a2 2 0 01-2-2V5a2 2 0 012-2h4m4 0h4m-4 0v18m0 0h4m-4 0H7m10 0h2a2 2 0 002-2V5a2 2 0 00-2-2h-2m-4-3H9',
  },
  {
    number: '005',
    title: 'Dakgoot & hemelwater',
    description: 'Reiniging, reparatie en vervanging van dakgoten. Voorkom wateroverlast en houtrot met goed functionerende afvoer.',
    urgent: false,
    href: '/diensten/dakgoot',
    gradient: 'from-gray-900 to-gray-800',
    iconPath: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
  },
  {
    number: '006',
    title: 'Dakisolatie',
    description: 'Bespaar tot 30% op uw energierekening met professionele dakisolatie. Inclusief advies over subsidies en terugverdientijd.',
    urgent: false,
    href: '/diensten/dakisolatie',
    gradient: 'from-gray-900 to-gray-800',
    iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
];

export default function ServicesSection() {
  return (
    <section id="diensten" className="py-20 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-14">
          <span className="inline-block bg-red-900/30 text-red-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Onze diensten
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight max-w-xl">
              Alles voor uw dak —{' '}
              <span className="text-red-500">van reparatie tot renovatie</span>
            </h2>
            <a
              href="#contact"
              className="flex-shrink-0 inline-flex items-center gap-2 text-sm font-bold text-red-400 hover:text-red-300 transition-colors"
            >
              Offerte aanvragen
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Service cards — numbered gradient pattern from 21st.dev */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <a
              key={service.number}
              href={service.href}
              className={`group relative flex flex-col justify-between h-56 overflow-hidden rounded-2xl p-6 bg-gradient-to-br ${service.gradient} border border-white/5 hover:border-red-700/50 hover:shadow-xl hover:shadow-red-950/40 transition-all duration-300`}
            >
              {/* Number */}
              <div className="flex items-start justify-between">
                <span className="font-mono text-sm text-white/30">( {service.number} )</span>
                {service.urgent && (
                  <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    Spoed mogelijk
                  </span>
                )}
              </div>

              {/* Icon */}
              <div className="flex-1 flex items-center">
                <svg
                  className="w-10 h-10 text-white/40 group-hover:text-red-400 transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.iconPath} />
                </svg>
              </div>

              {/* Title + description */}
              <div>
                <h3 className="font-bold text-white text-base mb-1 uppercase tracking-wide">
                  {service.title}
                </h3>
                <p className="text-white/50 text-xs leading-relaxed line-clamp-2">
                  {service.description}
                </p>
              </div>

              {/* Bottom arrow */}
              <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-1 group-hover:translate-x-0">
                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="text-gray-500 mb-4 text-sm">Staat uw dienst er niet bij?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 font-bold px-7 py-3.5 rounded-lg transition-colors text-sm"
          >
            Neem contact op voor meer mogelijkheden
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
