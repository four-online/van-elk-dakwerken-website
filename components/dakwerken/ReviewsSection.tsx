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
  },
  {
    name: 'Sandra Hoekstra',
    location: 'Rijswijk',
    rating: 5,
    text: 'Compleet plat dak laten vernieuwen. Van offerte tot oplevering alles perfect geregeld. Ze kwamen op de afgesproken dag, werkten netjes en de prijs was exact zoals beloofd. Topbedrijf!',
    service: 'Plat dak renovatie',
    date: 'Januari 2024',
  },
  {
    name: 'Marcel de Groot',
    location: 'Zoetermeer',
    rating: 5,
    text: 'Meerdere dakpannen gebroken na storm. Van Elk was er snel bij, eerlijke beoordeling en goede prijs. Het werk was binnen een halve dag klaar. Professioneel en vriendelijk.',
    service: 'Pannendak herstel',
    date: 'November 2023',
  },
  {
    name: 'Ingrid Vermeer',
    location: 'Den Haag, Benoordenhout',
    rating: 5,
    text: 'Al jaren klant bij Van Elk. Betrouwbaar, vakkundig en altijd eerlijk advies. Ze proberen niet onnodig werk te creëren. Absolute aanrader voor iedereen in Den Haag.',
    service: 'Onderhoud & inspectie',
    date: 'September 2023',
  },
  {
    name: 'Rob Janssen',
    location: 'Den Haag, Loosduinen',
    rating: 5,
    text: 'Dakisolatie laten plaatsen en gelijk de oude dakgoten vervangen. Geweldig werk geleverd. Merkbaar verschil in temperatuur binnenshuis. Aanrader!',
    service: 'Dakisolatie',
    date: 'Augustus 2023',
  },
  {
    name: 'Anja Bos',
    location: 'Rijswijk',
    rating: 4,
    text: 'Goede service en netjes werk. Planning liep een dag uit maar ze communiceerden goed. Eindresultaat is prima en prijs was eerlijk. Zou ze zeker weer inschakelen.',
    service: 'Dakrenovatie',
    date: 'Juni 2023',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 fill-gray-300'}`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const [visibleCount, setVisibleCount] = useState(3);

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-yellow-50 text-yellow-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 border border-yellow-200">
            ★ 4.9 gemiddeld — 127 reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Wat onze klanten zeggen
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Honderden tevreden klanten in Den Haag, Rijswijk en Zoetermeer.
          </p>
        </div>

        {/* Review aggregate bar */}
        <div className="flex items-center justify-center gap-4 mb-12 bg-white border border-gray-200 rounded-2xl p-5 max-w-sm mx-auto shadow-sm">
          <div className="text-center">
            <div className="text-4xl font-extrabold text-gray-900">4.9</div>
            <StarRating rating={5} />
            <div className="text-xs text-gray-500 mt-1">127 beoordelingen</div>
          </div>
          <div className="h-12 w-px bg-gray-200" />
          <div className="flex flex-col gap-1 text-sm text-gray-600">
            <span className="flex items-center gap-2"><span className="text-green-600 font-bold">✓</span> Google Reviews</span>
            <span className="flex items-center gap-2"><span className="text-green-600 font-bold">✓</span> Werkspot</span>
            <span className="flex items-center gap-2"><span className="text-green-600 font-bold">✓</span> Trustpilot</span>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, visibleCount).map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <StarRating rating={review.rating} />
                <span className="text-xs text-gray-400">{review.date}</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">"{review.text}"</p>
              <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{review.name}</div>
                  <div className="text-xs text-gray-500">{review.location}</div>
                </div>
                <span className="text-xs bg-red-50 text-red-600 px-2 py-0.5 rounded-full font-medium">
                  {review.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Show more */}
        {visibleCount < reviews.length && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setVisibleCount(reviews.length)}
              className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 hover:border-red-500 hover:text-red-600 font-semibold px-6 py-3 rounded-lg transition-colors"
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
