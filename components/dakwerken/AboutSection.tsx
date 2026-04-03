import React from 'react';

export default function AboutSection() {
  return (
    <section id="over-ons" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">

          {/* Images block */}
          <div className="space-y-4">
            {/*
              PRIMARY: img_6600-groot.jpeg
              WHY: 5 team members laughing together on a rooftop — the warmest,
              most human photo in the set. Shows real people enjoying their work.
              This is what makes a visitor think "I want THESE guys on my roof."
              Converts through likability and authenticity.
            */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/img_6600-groot.jpeg"
                alt="Het team van Van Elk Dakwerken"
                className="w-full h-72 sm:h-80 object-cover object-top"
              />
              <div className="absolute -bottom-0 -right-0 bg-red-600 text-white rounded-tl-2xl px-5 py-3 shadow-xl">
                <div className="text-3xl font-extrabold leading-none">15+</div>
                <div className="text-xs font-semibold opacity-90">jaar ervaring</div>
              </div>
            </div>

            {/*
              SECONDARY: dji_08930.jpg
              WHY: Drone shot of 4 company vans lined up + team standing in front.
              This single image communicates: established company, multiple crews,
              professional equipment. Eliminates "is this a one-man operation?" doubt.
              Trust through scale evidence.
            */}
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="/images/dji_08930.jpg"
                srcSet="/images/dji_08930-p-800.jpg 800w, /images/dji_08930-p-1080.jpg 1080w"
                sizes="(max-width: 768px) 100vw, 50vw"
                alt="Wagenpark Van Elk Dakwerken — 4 bedrijfswagens"
                className="w-full h-44 object-cover object-center"
              />
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
                Van Elk Dakwerken is opgericht door <strong className="text-gray-900">Jan van Elk</strong>, een gedreven dakdekker die al van jongs af aan zijn vak heeft geleerd. Wat begon als eenmanszaak in Den Haag is uitgegroeid tot een betrouwbaar bedrijf met een eigen team van gecertificeerde dakspecialisten en vier bedrijfswagens.
              </p>
              <p>
                Wij werken uitsluitend met vaste medewerkers — geen onderaannemers of zzp'ers. Dat betekent dat u altijd dezelfde kwaliteit kunt verwachten en dat er bij eventuele problemen altijd iemand aanspreekbaar is.
              </p>
              <p>
                Eerlijkheid staat bij ons centraal. Wij adviseren alleen wat nodig is — geen onnodig dure oplossingen, geen verborgen kosten.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-100">
              {[
                { value: '8', label: 'Vaste medewerkers' },
                { value: '4', label: 'Bedrijfswagens' },
                { value: '100%', label: 'Eigen personeel' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-extrabold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#contact"
                className="flex-1 text-center bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-lg transition-colors">
                Offerte aanvragen
              </a>
              <a href="tel:0703456789"
                className="flex-1 text-center bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3.5 rounded-lg transition-colors">
                070 345 67 89
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
