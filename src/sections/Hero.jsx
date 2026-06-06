/**
 * Hero.jsx — Sección 1
 */

import { motion } from 'framer-motion'

// Variantes de animación para el stagger de entrada del hero
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren:   0.3,
    },
  },
}

const itemVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Fondo estrellado  */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% -5%, rgba(59,111,212,0.12) 0%, transparent 65%),
            radial-gradient(ellipse 50% 40% at 85% 60%, rgba(107,93,232,0.08) 0%, transparent 55%)
          `,
        }}
        aria-hidden="true"
      />

      {/* LAYOUT PRINCIPAL */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center min-h-[80vh]">

          {/* ---- COLUMNA IZQUIERDA: Texto ---- */}
          <div className="lg:col-span-7 flex flex-col justify-center">

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-6"
            >
              {/* Etiqueta de ubicación */}
              <motion.div variants={itemVariants}>
                <span className="font-body text-dust" style={{ fontSize: '0.9rem' }}>
                  Universidad del Valle de Guatemala
                </span>
              </motion.div>

              {/* Nombre — el elemento más grande y memorable */}
              <motion.h1
                variants={itemVariants}
                className="font-display text-star"
                style={{
                  fontSize:      'clamp(3.5rem, 8vw, 7.5rem)',
                  lineHeight:    0.92,
                  letterSpacing: '-0.035em',
                  fontWeight:    800,
                }}
              >
                Jorge
                <br />
                <span style={{ color: 'var(--color-star)' }}>
                  Villeda
                </span>
              </motion.h1>

              {/* Línea divisora con gradiente */}
              <motion.div variants={itemVariants} className="line-gradient w-48" />

              {/* Subtítulo */}
              <motion.p
                variants={itemVariants}
                className="font-body text-dust"
                style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)', maxWidth: '44ch', lineHeight: 1.6 }}
              >
                Estudiante de{' '}
                <span className="text-star font-medium">Ingeniería en Ciencias de la Computación</span>
                {' '}en la Universidad del Valle de Guatemala.
              </motion.p>

              {/* Descripción / lema */}
              <motion.p
                variants={itemVariants}
                className="font-body text-star/80"
                style={{
                  fontSize:  'clamp(1rem, 1.8vw, 1.15rem)',
                  maxWidth:  '38ch',
                  lineHeight: 1.65,
                  fontStyle:  'italic',
                }}
              >
                "Trato de ser la persona más integral posible."
              </motion.p>

              {/* Botón Explorar */}
              <motion.div variants={itemVariants}>
                <a
                  href="#quien-soy"
                  className="group inline-flex items-center gap-3 mt-2"
                >
                  {/* Botón principal */}
                  <span
                    className="flex items-center gap-3 px-7 py-3.5 bg-nebula hover:bg-nebula/80 text-star font-display font-semibold tracking-wide transition-all duration-300"
                    style={{ fontSize: '0.85rem', letterSpacing: '0.08em', borderRadius: '2px' }}
                  >
                    EXPLORAR
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </a>
              </motion.div>

            </motion.div>
          </div>

          {/* ---- COLUMNA DERECHA: Foto + datos visuales ---- */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative"
            >
              {/* Marco de foto — limpio, sin decoraciones HUD */}
              <div
                className="relative w-64 h-80 lg:w-80 lg:h-96"
                style={{
                  border:       '1px solid rgba(59,111,212,0.25)',
                  borderRadius: '6px',
                  overflow:     'hidden',
                }}
              >
                {/* Foto — reemplazar con: import jorgeFoto from '../assets/jorge-photo.jpg'
                    y luego: <img src={jorgeFoto} alt="Jorge Villeda" className="w-full h-full object-cover" /> */}
                <div className="absolute inset-0 overflow-hidden">
                  <div
                    className="w-full h-full flex flex-col items-center justify-center gap-5"
                    style={{ background: '#0d1628' }}
                  >
                    <div
                      className="w-24 h-24 rounded-full flex items-center justify-center"
                      style={{ background: '#111d35', border: '1px solid rgba(59,111,212,0.25)' }}
                    >
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="rgba(59,111,212,0.5)" strokeWidth="1.2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                      </svg>
                    </div>
                    <p className="font-body text-dust/40" style={{ fontSize: '0.78rem' }}>
                      Foto próximamente
                    </p>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>

        {/* ---- Indicador de scroll ---- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-dust/40 uppercase tracking-widest" style={{ fontSize: '0.6rem' }}>
            scroll
          </span>
          <div className="w-px h-12 overflow-hidden" style={{ background: 'rgba(61,74,92,0.3)' }}>
            <motion.div
              className="w-full bg-nebula"
              animate={{ y: ['-100%', '200%'] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeIn' }}
              style={{ height: '40%' }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}


