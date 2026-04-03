'use client';

import React, { useState } from 'react';

const projects = [
  {
    title: 'Dakrenovatie met steiger',
    location: 'Den Haag',
    type: 'Renovatie',
    /*
      thumb_auto-12.jpeg: BEST project photo — Van Elk branded banner visible on scaffold.
      WHY: Company logo on a real jobsite = undeniable proof they did the work.
      The branding in-context creates more trust than any testimonial.
    */
    image: '/images/project-steiger-banner.jpeg',
    description: 'Complete dakrenovatie op woonhuis inclusief nieuwe isolatie en dakgoten. Van Elk banner zichtbaar op de steiger.',
  },
  {
    title: 'Plat dak aanleg',
    location: 'Rijswijk',
    type: 'Plat dak',
    /*
      vanelk-platdak.jpg: Craftsman actively applying bitumen with torch.
      WHY: Action shot of real work being done = competence signal.
      Visitors see the actual technique, not a finished photo — this builds
      confidence in the process, not just the result.
    */
    image: '/images/vanelk-platdak.jpg',
    description: 'Nieuw plat dak met bitumen dakbedekking. Professionele aanleg met brander voor optimale hechting.',
  },
  {
    title: 'Pannendak herstel',
    location: 'Zoetermeer',
    type: 'Pannendak',
    /*
      pannendak-werk.jpeg (whatsapp-2024-08-28): Roofer on pantile roof with nail gun, smiling.
      WHY: The smile + tool in hand = confident craftsman. Smile reduces anxiety
      about "will this be a stressful process?" — turns a service into an experience.
    */
    image: '/images/pannendak-werk.jpeg',
    description: 'Herstel en vervanging van beschadigde dakpannen. Nokvorst vernieuwd en dakbedekking gecontroleerd.',
  },
  {
    title: 'Grootschalig dakproject',
    location: 'Delft',
    type: 'Groot project',
    /*
      Delft1.JPG: Night-time aerial of large apartment building + crane.
      WHY: Scale proof. Most visitors wonder "can they handle my job?"
      A multi-floor apartment + crane answers: yes, even the big ones.
      The dramatic night light adds emotional impact.
    */
    image: '/images/project-delft.jpg',
    description: 'Dakrenovatie op meerdere etages in Delft. Inzet van kraan voor efficiënte materiaaltoevoer.',
  },
];

export default function ProjectsSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="projecten" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-red-50 text-red-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Onze projecten
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Resultaten die voor zichzelf spreken
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Echte projecten van ons team in Den Haag, Rijswijk, Zoetermeer en Delft.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group rounded-2xl overflow-hidden border border-gray-200 hover:border-red-300 hover:shadow-xl transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
            >
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: project.type === 'Groot project' ? 'center 30%' : 'center center' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-full z-10">
                  {project.type}
                </span>
              </div>
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

        {/* Video proof block */}
        <div className="mt-12 rounded-2xl overflow-hidden bg-gray-950 border border-gray-800">
          <div className="grid md:grid-cols-2 gap-0 items-center">
            {/*
              VIDEO: van-der-elk-dakdekking-video-2-1.mp4
              WHY: Close-up of craftsman burning bitumen — hands, tools, technique visible.
              Placed here (after photo grid) as the final convincing proof layer.
              Video shows PROCESS, not just result → converts undecided visitors
              who want to see "how do they actually work?"
              NOT a background video — inline, controlled, no distraction.
            */}
            <div className="relative aspect-video bg-black">
              <video
                className="w-full h-full object-cover"
                poster="/videos/video-poster.jpg"
                controls
                preload="none"
                playsInline
              >
                <source src="/videos/van-der-elk-dakdekking-video-2-1.mp4" type="video/mp4" />
                <source src="/videos/van-der-elk-dakdekking-video-2-1-transcode.webm" type="video/webm" />
              </video>
            </div>
            <div className="p-8 text-white">
              <span className="inline-block bg-red-600/20 text-red-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                Bekijk ons vakmanschap
              </span>
              <h3 className="text-2xl font-extrabold mb-3">Zo werkt ons team</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Professionele aanleg van bitumendakbedekking. Onze dakdekkers gebruiken de juiste technieken en materialen voor een duurzaam resultaat met 5 jaar garantie.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg transition-colors"
              >
                Vraag een offerte aan
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
