import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9 21 9 15 12 15C15 15 15 21 15 21M9 21H15" />
                </svg>
              </div>
              <span className="text-white font-bold text-lg">Van Elk <span className="text-red-500">Dakwerken</span></span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Gecertificeerd dakdekkersbedrijf in Den Haag. Al 15 jaar uw vertrouwde partner voor alle dakwerkzaamheden.
            </p>
          </div>

          {/* Diensten */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Diensten</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              {['Daklekkage reparatie', 'Dakrenovatie', 'Plat dak', 'Pannendak', 'Dakgoot', 'Dakisolatie'].map((d) => (
                <li key={d}>
                  <a href={`/diensten/${d.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-red-400 transition-colors">
                    {d}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Werkgebied */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Werkgebied</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              {['Den Haag', 'Rijswijk', 'Zoetermeer', 'Delft', 'Leidschendam', 'Wateringen', 'Wassenaar'].map((city) => (
                <li key={city}>
                  <a href={`/dakwerken-${city.toLowerCase()}`} className="hover:text-red-400 transition-colors">
                    Dakwerken {city}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:0703456789" className="hover:text-red-400 transition-colors font-semibold text-white">070 345 67 89</a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@vanelkdakwerken.nl" className="hover:text-red-400 transition-colors">info@vanelkdakwerken.nl</a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Den Haag, Zuid-Holland</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Ma–Za: 07:00–19:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <span>© {currentYear} Van Elk Dakwerken · KvK: 12345678 · BTW: NL123456789B01</span>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-gray-400 transition-colors">Privacybeleid</a>
            <a href="/algemene-voorwaarden" className="hover:text-gray-400 transition-colors">Algemene voorwaarden</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
