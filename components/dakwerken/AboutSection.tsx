import React from 'react';

export default function AboutSection() {
  return (
    <section id="over-ons" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1470&auto=format&fit=crop"
                alt="Van Elk Dakwerken team aan het werk"
                className="w-full h-96 object-cover"
              />
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-4 bg-red-600 text-white rounded-xl p-5 shadow-xl">
              <div className="text-4xl font-extrabold">15+</div>
              <div className="text-sm font-semibold opacity-90">jaar ervaring</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block bg-red-50 text-red-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Over ons
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Een familiebedrijf dat staat voor{' '}
              <span className="text-red-600">eerlijk vakmanschap</span>
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed text-base">
              <p>
                Van Elk Dakwerken is opgericht door <strong className="text-gray-900">Jan van Elk</strong>, een gedreven dakdekker die al van jongs af aan zijn vak heeft geleerd. Wat begon als eenmanszaak in Den Haag is uitgegroeid tot een betrouwbaar bedrijf met een team van gecertificeerde dakspecialisten.
              </p>
              <p>
                Wij werken uitsluitend met vaste medewerkers — geen onderaannemers of zzp'ers. Dat betekent dat u altijd dezelfde kwaliteit kunt verwachten en dat er bij eventuele problemen altijd iemand aanspreekbaar is.
              </p>
              <p>
                Eerlijkheid staat bij ons centraal. Wij adviseren alleen wat nodig is — geen onnodig dure oplossingen, geen verborgen kosten. Dat is waarom onze klanten ons al meer dan 15 jaar terugvinden.
              </p>
            </div>

            {/* Team stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-100">
              {[
                { value: '8', label: 'Vaste medewerkers' },
                { value: 'Den Haag', label: 'Gevestigd in' },
                { value: '100%', label: 'Eigen personeel' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-extrabold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="flex-1 text-center bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-lg transition-colors"
              >
                Offerte aanvragen
              </a>
              <a
                href="tel:0703456789"
                className="flex-1 text-center bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3.5 rounded-lg transition-colors"
              >
                070 345 67 89
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
