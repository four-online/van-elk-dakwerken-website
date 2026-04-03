'use client';

import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative bg-black overflow-hidden pt-16">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/vanelk-team.jpg"
          srcSet="/images/vanelk-team-p-800.jpg 800w, /images/vanelk-team-p-1080.jpg 1080w, /images/vanelk-team.jpg 1600w"
          sizes="100vw"
          alt="Het team van Van Elk Dakwerken aan het werk"
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Text */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-600/40 text-red-400 text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse flex-shrink-0" />
              15+ jaar ervaring in Den Haag &amp; omgeving
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-5">
              Uw dak in{' '}
              <span className="text-red-500">topconditie</span>
              {' '}—{' '}
              <span className="whitespace-nowrap">binnen 24 uur</span>{' '}
              een offerte
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-lg leading-relaxed">
              Van Elk Dakwerken repareert, renoveert en vernieuwt daken in Den Haag, Rijswijk en Zoetermeer.{' '}
              <strong className="text-white">Vakkundig, snel en met garantie.</strong>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-5">
              <a
                href="#contact"
                className="relative inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white text-base font-extrabold px-6 py-4 rounded-xl transition-all shadow-lg shadow-red-900/50"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Gratis offerte aanvragen
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-[10px] font-black px-1.5 py-0.5 rounded-full uppercase tracking-wide leading-none">
                  Snel!
                </span>
              </a>
              <a
                href="tel:0703456789"
                className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 border-2 border-white/40 hover:border-white text-white text-base font-bold px-6 py-4 rounded-xl transition-all"
              >
                <svg className="w-5 h-5 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Bel direct: 070 345 67 89
              </a>
            </div>

            {/* Response time */}
            <p className="text-yellow-400/80 text-xs font-medium mb-6 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse flex-shrink-0" />
              Reactietijd vandaag: gemiddeld 47 minuten
            </p>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-2">
              {['Gratis inspectie', '5 jaar garantie', 'Gecertificeerd'].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full"
                >
                  <svg className="w-3 h-3 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Quick quote card (desktop only) */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-2xl shadow-2xl p-7 max-w-sm ml-auto">
              <div className="flex items-center justify-between mb-1">
                <h2 className="text-lg font-bold text-gray-900">Snel een offerte?</h2>
                <span className="flex items-center gap-1 text-green-600 text-xs font-bold">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  Online
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-5">
                Reactie binnen <strong className="text-gray-800">2 uur</strong> — gratis &amp; vrijblijvend.
              </p>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Naam</label>
                  <input
                    type="text"
                    placeholder="Uw volledige naam"
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Telefoonnummer</label>
                  <input
                    type="tel"
                    placeholder="06 12 34 56 78"
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Type dakwerk</label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-white transition-shadow">
                    <option value="">Kies een dienst</option>
                    <option>Daklekkage reparatie</option>
                    <option>Dakrenovatie</option>
                    <option>Nieuw dak leggen</option>
                    <option>Dakgoot plaatsen</option>
                    <option>Zonnepanelen voorbereiding</option>
                    <option>Anders</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-colors text-sm shadow-md"
                >
                  Stuur mijn aanvraag →
                </button>
              </form>
              <p className="text-xs text-gray-400 text-center mt-3">
                Geen spam. Wij bellen u binnen 2 uur terug op werkdagen.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
