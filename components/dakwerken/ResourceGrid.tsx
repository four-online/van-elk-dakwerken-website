'use client';

import React, { useState } from 'react';

const faqs = [
  {
    question: 'Hoe snel kan Van Elk Dakwerken bij mij langskomen?',
    answer: 'Bij spoedsituaties zoals een actieve lekkage proberen wij dezelfde dag nog langs te komen. Voor reguliere inspecties en offertes plannen we binnen 24-48 uur een afspraak in.',
    category: 'Service',
  },
  {
    question: 'Geeft u garantie op uw dakwerk?',
    answer: 'Ja. Wij geven 5 jaar garantie op alle uitgevoerde werkzaamheden en gebruikte materialen. Bij reparaties geldt een garantie van minimaal 2 jaar. Dit leggen we altijd schriftelijk vast.',
    category: 'Garantie',
  },
  {
    question: 'Wat kost een daklekkage reparatie?',
    answer: 'De kosten zijn afhankelijk van de oorzaak en omvang van de lekkage. Eenvoudige reparaties starten vanaf €295 incl. BTW. Na een gratis inspectie ontvangt u een vaste prijsopgave — nooit meer dan afgesproken.',
    category: 'Kosten',
  },
  {
    question: 'In welke regio zijn jullie actief?',
    answer: 'Wij werken voornamelijk in Den Haag, Rijswijk, Zoetermeer, Delft en de direct omliggende gemeenten. Voor grootschalige projecten werken wij ook in de rest van de regio Haaglanden.',
    category: 'Regio',
  },
  {
    question: 'Werken jullie ook bij slecht weer?',
    answer: 'Dakwerkzaamheden worden bij zware regen of storm uitgesteld om kwaliteit en veiligheid te garanderen. Noodreparaties om verdere waterschade te voorkomen voeren wij ook bij minder ideaal weer uit.',
    category: 'Praktisch',
  },
  {
    question: 'Wat is het verschil tussen plat dak en schuin dak?',
    answer: 'Een plat dak heeft een helling van minder dan 15° en wordt afgedicht met EPDM, PVC of bitumen dakbedekking. Een schuin dak heeft dakpannen, leien of metaalplaten. Beide daktypes vragen om specifieke materialen en technieken.',
    category: 'Dakkennis',
  },
  {
    question: 'Moet ik zelf aanwezig zijn tijdens de werkzaamheden?',
    answer: 'Dat is niet altijd nodig. Voor buitenwerkzaamheden zijn wij niet afhankelijk van uw aanwezigheid. Bij binnenwerken (zoals dakbeschot) of bij de oplevering is uw aanwezigheid gewenst.',
    category: 'Praktisch',
  },
  {
    question: 'Kan ik subsidie krijgen voor dakisolatie?',
    answer: 'Ja. Voor dakisolatie zijn er meerdere subsidies beschikbaar via het ISDE (Investeringssubsidie Duurzame Energie) en via uw gemeente. Wij adviseren u gratis over de mogelijkheden en helpen u bij de aanvraag.',
    category: 'Subsidie',
  },
];

const categories = ['Alle', 'Service', 'Garantie', 'Kosten', 'Praktisch', 'Dakkennis', 'Subsidie', 'Regio'];

export default function ResourceGrid() {
  const [activeCategory, setActiveCategory] = useState('Alle');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = activeCategory === 'Alle'
    ? faqs
    : faqs.filter((f) => f.category === activeCategory);

  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-red-900/30 text-red-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Veelgestelde vragen
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Alles wat u wilt weten
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Geen antwoord gevonden? Bel ons direct of stuur een berichtje via WhatsApp.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide transition-colors
                ${activeCategory === cat
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ accordion grid */}
        <div className="grid sm:grid-cols-2 gap-3">
          {filtered.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className={`rounded-xl border transition-all duration-200 overflow-hidden
                  ${isOpen
                    ? 'border-red-700 bg-gray-900'
                    : 'border-gray-800 bg-gray-900 hover:border-gray-700'
                  }`}
              >
                <button
                  className="w-full flex items-start justify-between gap-3 p-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <span className="flex-shrink-0 mt-0.5 text-xs font-bold text-red-500 bg-red-900/30 px-2 py-0.5 rounded-full">
                      {faq.category}
                    </span>
                    <span className="font-semibold text-white text-sm leading-snug">{faq.question}</span>
                  </div>
                  <svg
                    className={`w-4 h-4 flex-shrink-0 text-gray-400 mt-0.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5">
                    <div className="border-t border-gray-800 pt-4">
                      <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-5 text-sm">Staat uw vraag er niet bij?</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:0703456789"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Bel direct: 070 345 67 89
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-transparent border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              Stel uw vraag via het formulier
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
