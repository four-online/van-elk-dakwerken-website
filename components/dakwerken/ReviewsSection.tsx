'use client';

import React, { useState } from 'react';

const reviews = [
  {
    name: 'Peter van den Berg',
    location: 'Den Haag, Bezuidenhout',
    rating: 5,
    text: 'Na een hevige regenbui hadden we een ernstige lekkage. Van Elk Dakwerken stond dezelfde dag nog bij ons. Vakkundig, netjes en eerlijk geprijsd. Ik raad ze iedereen aan.',
    service: 'Daklekkage reparatie',
    date: 'Maart 2024',
    avatar: '/images/avatar-2.png',
  },
  {
    name: 'Sandra H.',
    location: 'Rijswijk',
    rating: 5,
    text: 'Compleet plat dak laten vernieuwen. Van offerte tot oplevering alles perfect geregeld. Ze kwamen op de afgesproken dag, werkten netjes en de prijs was exact zoals beloofd. Topbedrijf!',
    service: 'Plat dak renovatie',
    date: 'Januari 2024',
    avatar: '/images/avatar-1.png',
  },
  {
    name: 'Marcel de Groot',
    location: 'Zoetermeer',
    rating: 5,
    text: 'Meerdere dakpannen gebroken na storm. Van Elk was er snel bij, eerlijke beoordeling en goede prijs. Het werk was binnen een halve dag klaar. Professioneel en vriendelijk.',
    service: 'Pannendak herstel',
    date: 'November 2023',
    avatar: '/images/avatar-4.png',
  },
  {
    name: 'Ingrid V.',
    location: 'Den Haag, Benoordenhout',
    rating: 5,
    text: 'Al jaren klant bij Van Elk. Betrouwbaar, vakkundig en altijd eerlijk advies. Ze proberen niet onnodig werk te creëren. Absolute aanrader voor iedereen in Den Haag.',
    service: 'Onderhoud & inspectie',
    date: 'September 2023',
    avatar: null,
  },
  {
    name: 'Rob J.',
    location: 'Den Haag, Loosduinen',
    rating: 5,
    text: 'Dakisolatie laten plaatsen en gelijk de oude dakgoten vervangen. Geweldig werk geleverd. Merkbaar verschil in temperatuur binnenshuis.',
    service: 'Dakisolatie',
    date: 'Augustus 2023',
    avatar: '/images/avatar-3.png',
  },
  {
    name: 'Anja B.',
    location: 'Rijswijk',
    rating: 4,
    text: 'Goede service en netjes werk. Planning liep een dag uit maar ze communiceerden goed. Eindresultaat is prima en prijs was eerlijk. Zou ze zeker weer inschakelen.',
    service: 'Dakrenovatie',
    date: 'Juni 2023',
    avatar: null,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} van 5 sterren`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'}`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ src, name }: { src: string | null; name: string }) {
  if (src) {
    return (
      <img
        src={src}
        alt={name}
        className="w-9 h-9 rounded-full object-cover ring-2 ring-white shadow-sm"
      />
    );
  }
  return (
    <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0 ring-2 ring-white shadow-sm">
      {name.charAt(0)}
    </div>
  );
}

export default function ReviewsSection() {
  const [visibleCount, setVisibleCount] = useState(3);

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-700 border border-yellow-200 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            <svg className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            4.9 gemiddeld — 127 beoordelingen
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Wat onze klanten zeggen
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Honderden tevreden klanten in Den Haag, Rijswijk en Zoetermeer.
          </p>
        </div>

        {/* Score bar */}
        <div className="flex items-center justify-center gap-5 mb-12 bg-white border border-gray-200 rounded-2xl p-5 max-w-xs mx-auto shadow-sm">
          <div className="text-center">
            <div className="text-4xl font-extrabold text-gray-900 leading-none">4.9</div>
            <StarRating rating={5} />
            <div className="text-xs text-gray-400 mt-1.5">127 beoordelingen</div>
          </div>
          <div className="h-12 w-px bg-gray-200" />
          <div className="flex flex-col gap-1.5 text-sm text-gray-600">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              Google Reviews
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              Werkspot
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              Trustpilot
            </span>
          </div>
        </div>

        {/* Testimonial cards — 21st Testimonials Stars pattern */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.slice(0, visibleCount).map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-2xl p-5 ring-1 ring-gray-200 hover:ring-red-200 hover:shadow-md transition-all duration-200 flex flex-col"
            >
              {/* Stars + date */}
              <div className="flex items-center justify-between mb-3">
                <StarRating rating={review.rating} />
                <span className="text-xs text-gray-400">{review.date}</span>
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-4">
                "{review.text}"
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between gap-2 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2.5">
                  <Avatar src={review.avatar} name={review.name} />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm leading-tight">{review.name}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{review.location}</div>
                  </div>
                </div>
                <span className="text-xs bg-red-50 text-red-600 px-2 py-0.5 rounded-full font-medium whitespace-nowrap flex-shrink-0">
                  {review.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < reviews.length && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setVisibleCount(reviews.length)}
              className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 hover:border-red-500 hover:text-red-600 font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              Meer reviews tonen
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
