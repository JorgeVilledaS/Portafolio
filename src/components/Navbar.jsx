/**
 * Navbar.jsx
 * Barra de navegación fija.
 */

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// Items de navegación — el href debe coincidir con el id de cada sección
const NAV_ITEMS = [
  { label: 'Quién soy',    href: '#quien-soy'    },
  { label: 'Herramientas', href: '#herramientas'  },
  { label: 'Proyectos',    href: '#proyectos'     },
  { label: 'Timeline',     href: '#timeline'      },
  { label: 'Próximamente', href: '#proximamente'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  // Detectar scroll para cambiar estilo del nav
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0,   opacity: 1  }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-deep/90 backdrop-blur-md border-b border-dim/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">

        {/* Logo / monograma */}
        <a
          href="#hero"
          className="font-display text-star font-bold tracking-tight hover:text-quasar transition-colors duration-200"
          style={{ fontSize: '1.1rem', letterSpacing: '-0.02em' }}
        >
          JV
          <span className="text-nebula">.</span>
        </a>

        {/* Links de navegación — ocultos en mobile, visibles en md+ */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="font-body text-dust hover:text-star transition-colors duration-200 text-sm tracking-wide"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA — botón de contacto */}
        <a
          href="mailto:jorge@example.com"
          className="hidden md:flex items-center gap-2 px-4 py-2 border border-nebula/40 text-nebula hover:bg-nebula/10 transition-all duration-200 font-body"
          style={{ borderRadius: '2px', fontSize: '0.85rem', fontWeight: 500 }}
        >
          Contacto
        </a>

      </div>
    </motion.nav>
  )
}
