import React from 'react';

const galleryItems = [
  {
    src: '/images/project-steiger-banner.jpeg',
    alt: 'Dakrenovatie Den Haag — Van Elk steiger met banner',
    caption: 'Dakrenovatie Den Haag',
    span: 'col-span-2 row-span-2',
  },
  {
    src: '/images/vanelk-platdak.jpg',
    alt: 'Plat dak aanleg Rijswijk — bitumen brander',
    caption: 'Plat dak Rijswijk',
    span: '',
  },
  {
    src: '/images/pannendak-werk.jpeg',
    alt: 'Pannendak herstel Zoetermeer',
    caption: 'Pannendak Zoetermeer',
    span: '',
  },
  {
    src: '/images/project-delft.jpg',
    alt: 'Grootschalig dakproject Delft — kraanwerk',
    caption: 'Groot project Delft',
    span: 'col-span-2',
  },
  {
    src: '/images/vanelk-team.jpg',
    alt: 'Van Elk Dakwerken team in actie',
    caption: 'Ons team',
    span: '',
  },
  {
    src: '/images/vanelk-platdak.jpg',
    alt: 'EPDM dakbedekking plaatsen',
    caption: 'EPDM aanleg',
    span: '',
  },
];

export default function ImpressionGallery() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
          <div>
            <span className="inline-block bg-red-50 text-red-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Indrukwekkende projecten
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Ons werk in{' '}
              <span className="text-red-600">beeld</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold px-5 py-3 rounded-xl transition-all text-sm whitespace-nowrap self-start sm:self-auto"
          >
            Bekijk alle projecten
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Mosaic grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-3">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${item.span}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white text-sm font-semibold">{item.caption}</p>
              </div>
              {/* Red corner accent */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  Van Elk
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div className="mt-10 grid grid-cols-3 gap-4">
          {[
            { value: '500+', label: 'Projecten voltooid' },
            { value: '15+', label: 'Jaar in Den Haag' },
            { value: '100%', label: 'Gecertificeerd werk' },
          ].map((stat) => (
            <div key={stat.label} className="text-center bg-gray-50 rounded-2xl py-5 px-3 border border-gray-200">
              <div className="text-2xl sm:text-3xl font-extrabold text-red-600 mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
