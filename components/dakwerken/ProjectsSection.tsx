'use client';

import React, { useState } from 'react';

const projects = [
  {
    title: 'Plat dak renovatie',
    location: 'Den Haag, Benoordenhout',
    type: 'Plat dak',
    before: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=800&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    description: 'Volledig vernieuwd plat dak met EPDM folie, inclusief nieuwe dakrand en isolatie.',
  },
  {
    title: 'Pannendak herstel',
    location: 'Rijswijk',
    type: 'Pannendak',
    before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop',
    description: 'Vervanging van gebroken dakpannen en nokvorst, nieuwe dakbedekking onder de pannen.',
  },
  {
    title: 'Dakrenovatie jaren 30 woning',
    location: 'Zoetermeer',
    type: 'Renovatie',
    before: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=800&auto=format&fit=crop',
    description: 'Volledige dakrenovatie inclusief isolatie upgrade en nieuwe dakgoten.',
  },
  {
    title: 'Lekkage reparatie spoed',
    location: 'Den Haag, Centrum',
    type: 'Reparatie',
    before: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=800&auto=format&fit=crop',
    description: 'Spoedinterventie bij ernstige daklekkage — zelfde dag nog gerepareerd.',
  },
];

export default function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projecten" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-red-50 text-red-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Onze projecten
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Resultaten die voor zichzelf spreken
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Bekijk een selectie van onze recente dakwerkzaamheden in Den Haag en omgeving.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group rounded-2xl overflow-hidden border border-gray-200 hover:border-red-300 hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Before/After image */}
              <div className="relative h-56 overflow-hidden bg-gray-100">
                {/* Before image */}
                <img
                  src={project.before}
                  alt={`Voor - ${project.title}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    hoveredIndex === index ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                {/* After image */}
                <img
                  src={project.after}
                  alt={`Na - ${project.title}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                {/* Label */}
                <div className="absolute top-3 left-3 z-10">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full transition-colors duration-300 ${
                    hoveredIndex === index
                      ? 'bg-green-600 text-white'
                      : 'bg-black/70 text-white'
                  }`}>
                    {hoveredIndex === index ? 'NA' : 'VOOR'}
                  </span>
                </div>
                {/* Hover hint */}
                {hoveredIndex !== index && (
                  <div className="absolute bottom-3 right-3 z-10 bg-black/60 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Hover voor resultaat →
                  </div>
                )}
                {/* Type badge */}
                <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-full z-10">
                  {project.type}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-gray-900 text-lg mb-1">{project.title}</h3>
                <div className="flex items-center gap-1 text-gray-500 text-sm mb-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {project.location}
                </div>
                <p className="text-gray-500 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            Laat uw dak ook renoveren
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
