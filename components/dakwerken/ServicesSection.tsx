import React from 'react';

const services = [
  {
    title: 'Daklekkage reparatie',
    description: 'Snelle en duurzame reparatie van lekkages — ook in spoedsituaties. Wij komen dezelfde dag nog langs.',
    urgent: true,
    href: '/diensten/daklekkage-reparatie',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'Dakrenovatie',
    description: 'Volledig vernieuwd dak met modern materiaal. Van bitumen tot EPDM — wij adviseren wat het beste bij uw woning past.',
    urgent: false,
    href: '/diensten/dakrenovatie',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Plat dak',
    description: 'Aanleg, renovatie en onderhoud van platte daken met bitumen, EPDM of PVC — inclusief garantie.',
    urgent: false,
    href: '/diensten/plat-dak',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: 'Pannendak',
    description: 'Plaatsen, repareren of vervangen van dakpannen — inclusief nokvorst, dakbedekking en ventilatie.',
    urgent: false,
    href: '/diensten/pannendak',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21H3a2 2 0 01-2-2V5a2 2 0 012-2h4m4 0h4m-4 0v18m0 0h4m-4 0H7m10 0h2a2 2 0 002-2V5a2 2 0 00-2-2h-2m-4-3H9" />
      </svg>
    ),
  },
  {
    title: 'Dakgoot & hemelwater',
    description: 'Reiniging, reparatie en vervanging van dakgoten. Voorkom wateroverlast en houtrot.',
    urgent: false,
    href: '/diensten/dakgoot',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: 'Dakisolatie',
    description: 'Bespaar tot 30% op uw energierekening. Inclusief advies over subsidies en terugverdientijd.',
    urgent: false,
    href: '/diensten/dakisolatie',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section id="diensten" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Centered header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-red-50 text-red-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Onze diensten
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            Alles voor uw dak —{' '}
            <span className="text-red-600">van reparatie tot renovatie</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Actief in Den Haag, Rijswijk, Zoetermeer en omgeving. Wij staan garant voor kwaliteit en transparantie bij elk project.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.href}
              className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:border-red-500 hover:shadow-xl transition-all duration-200 flex flex-col"
            >
              {/* Urgent badge */}
              {service.urgent && (
                <span className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                  Spoed mogelijk
                </span>
              )}

              {/* Icon */}
              <div className="w-10 h-10 bg-red-600 text-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{service.description}</p>

              {/* CTA link */}
              <span className="flex items-center gap-1.5 text-red-600 text-sm font-semibold group-hover:gap-3 transition-all duration-200 mt-auto">
                Meer informatie
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4 text-sm">Staat uw dienst er niet bij?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-black text-white font-bold px-8 py-3.5 rounded-xl transition-colors text-sm"
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
