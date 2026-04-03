import React from 'react';

const plans = [
  {
    name: 'Dakonderzoek',
    subtitle: 'Inspectie & advies',
    price: 'Gratis',
    priceNote: 'vrijblijvend',
    highlight: false,
    description: 'Professionele dakcontrole door een gecertificeerde dakdekker. Inclusief schriftelijk rapport met aanbevelingen.',
    features: [
      'Visuele inspectie van het gehele dak',
      'Controle dakbedekking & aansluitingen',
      'Schriftelijk inspectierapport',
      'Advies zonder verkoopdruk',
      'Binnen 24 uur reactie',
    ],
    cta: 'Inspectie aanvragen',
    href: '#contact',
  },
  {
    name: 'Dakreparatie',
    subtitle: 'Onderhoud & herstel',
    price: 'Vanaf €295',
    priceNote: 'incl. BTW',
    highlight: true,
    badge: 'Meest gevraagd',
    description: 'Gerichte reparatie van lekkages, losse dakpannen of beschadigde dakbedekking. Snel, vakkundig en met garantie.',
    features: [
      'Lekkage diagnose & reparatie',
      'Vervangen beschadigde dakpannen',
      'Afdichten naden & aansluitingen',
      'Dakgoot reiniging & herstel',
      '2 jaar garantie op reparaties',
    ],
    cta: 'Reparatie aanvragen',
    href: '#contact',
  },
  {
    name: 'Dakrenovatie',
    subtitle: 'Complete vernieuwing',
    price: 'Op maat',
    priceNote: 'gratis offerte',
    highlight: false,
    description: 'Volledige renovatie van uw plat of schuin dak. Van nieuwe dakbedekking tot isolatie en dakgoten — alles geregeld.',
    features: [
      'Complete vervanging dakbedekking',
      'Nieuwe dakisolatie (tot 30% besparing)',
      'Dakgoten & hemelwaterafvoer',
      'Nieuwe nokvorst & aansluitingen',
      '5 jaar garantie op het werk',
    ],
    cta: 'Offerte aanvragen',
    href: '#contact',
  },
];

export default function RenovationPlans() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-red-50 text-red-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Onze aanpak
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            Van inspectie tot{' '}
            <span className="text-red-600">complete renovatie</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Elk dak is anders. Wij bieden transparante diensten — van een gratis check tot een volledige dakrenovatie.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl flex flex-col overflow-hidden transition-all duration-200
                ${plan.highlight
                  ? 'bg-gray-950 border-2 border-red-600 shadow-2xl shadow-red-900/20 scale-[1.02]'
                  : 'bg-white border border-gray-200 hover:border-red-300 hover:shadow-lg'
                }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-red-600 text-white text-xs font-extrabold px-4 py-1 rounded-full uppercase tracking-wide whitespace-nowrap shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="p-7 flex flex-col flex-1">
                {/* Plan name */}
                <div className="mb-5">
                  <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${plan.highlight ? 'text-red-400' : 'text-red-600'}`}>
                    {plan.subtitle}
                  </p>
                  <h3 className={`text-2xl font-extrabold mb-3 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1.5">
                    <span className={`text-3xl font-extrabold ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-sm ${plan.highlight ? 'text-gray-400' : 'text-gray-400'}`}>
                      {plan.priceNote}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className={`text-sm leading-relaxed mb-6 ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <svg
                        className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.highlight ? 'text-red-400' : 'text-red-500'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`text-sm ${plan.highlight ? 'text-gray-300' : 'text-gray-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={plan.href}
                  className={`w-full flex items-center justify-center gap-2 font-bold py-3 rounded-xl transition-all text-sm mt-auto
                    ${plan.highlight
                      ? 'bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-900/30'
                      : 'bg-gray-900 hover:bg-black text-white'
                    }`}
                >
                  {plan.cta}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm text-gray-400 mt-8">
          Alle prijzen zijn inclusief BTW. Gratis inspectie en vrijblijvende offerte bij elk project.
        </p>
      </div>
    </section>
  );
}
