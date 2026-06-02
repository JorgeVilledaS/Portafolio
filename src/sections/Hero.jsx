/**
 * Hero.jsx — Sección 1
 *
 * Pantalla completa con:
 *   - Foto profesional (placeholder hasta que la suba)
 *   - Nombre grande con tipografía de display
 *   - Subtítulo y descripción
 *   - Botón "Explorar"
 *   - Coordenadas ficticias estilo observatorio (detalle de carácter)
 *   - Líneas de datos sutiles
 *
 * Animación: solo el stagger de entrada (Framer Motion, una vez).
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
      {/* Gradiente radial de profundidad — nebulosa de fondo */}
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

      {/* Línea horizontal decorativa — estilo instrumento de medición */}
      <div
        className="absolute left-0 right-0 pointer-events-none"
        style={{ top: '50%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(59,111,212,0.15), transparent)' }}
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
              {/* Etiqueta de categoría — estilo terminal */}
              <motion.div variants={itemVariants} className="flex items-center gap-3">
                <span className="section-number">[ 00 ]</span>
                <span className="text-dust font-mono text-xs tracking-widest uppercase">
                  Sistema iniciado
                </span>
                {/* Indicador de estado — punto parpadeante */}
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-quasar opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-quasar" />
                </span>
              </motion.div>

              {/* Nombre — el elemento más grande y memorable */}
              <motion.h1
                variants={itemVariants}
                className="font-display text-star glow-nebula"
                style={{
                  fontSize:      'clamp(3.5rem, 8vw, 7.5rem)',
                  lineHeight:    0.92,
                  letterSpacing: '-0.035em',
                  fontWeight:    800,
                }}
              >
                Jorge
                <br />
                <span
                  style={{
                    WebkitTextStroke: '1px rgba(59,111,212,0.6)',
                    color:            'transparent',
                  }}
                >
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
              {/* Marco de foto con efecto de panel de datos */}
              <div
                className="relative w-64 h-80 lg:w-80 lg:h-96"
                style={{
                  border:       '1px solid rgba(59,111,212,0.3)',
                  borderRadius: '4px',
                }}
              >
                {/* Esquinas decorativas — estilo HUD / observatorio */}
                <HudCorner position="top-left"     />
                <HudCorner position="top-right"    />
                <HudCorner position="bottom-left"  />
                <HudCorner position="bottom-right" />

                {/* Foto — placeholder hasta que Jorge suba la suya */}
                <div className="absolute inset-2 overflow-hidden" style={{ borderRadius: '2px' }}>
                  <div
                    className="w-full h-full flex flex-col items-center justify-center gap-4"
                    style={{ background: 'linear-gradient(160deg, rgba(13,22,40,0.8), rgba(8,13,26,0.9))' }}
                  >
                    {/* Icono placeholder */}
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(59,111,212,0.15)', border: '1px solid rgba(59,111,212,0.3)' }}
                    >
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(59,111,212,0.8)" strokeWidth="1.5">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                      </svg>
                    </div>

                    {/* Instrucción para Jorge */}
                    <p
                      className="text-center font-mono text-dust/60 px-4"
                      style={{ fontSize: '0.65rem', lineHeight: 1.6 }}
                    >
                      // Reemplazar con foto profesional
                      <br />
                      // src/assets/jorge-photo.jpg
                    </p>
                  </div>
                </div>

                {/* Etiqueta de datos — esquina inferior */}
                <div
                  className="absolute -bottom-3 left-4 right-4 flex justify-between items-center"
                  style={{
                    background:   'var(--color-deep)',
                    padding:      '0.25rem 0.75rem',
                    border:       '1px solid rgba(59,111,212,0.3)',
                    borderRadius: '2px',
                  }}
                >
                  <span className="font-mono text-dust" style={{ fontSize: '0.6rem', letterSpacing: '0.1em' }}>
                    UVG · GT
                  </span>
                  <span className="font-mono text-nebula" style={{ fontSize: '0.6rem' }}>
                    ●  activo
                  </span>
                </div>
              </div>

              {/* Tarjeta flotante de estadística — detalle de dashboard */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-6 top-1/3 hidden lg:block"
                style={{
                  background:   'rgba(13,22,40,0.92)',
                  border:       '1px solid rgba(59,111,212,0.25)',
                  backdropFilter: 'blur(8px)',
                  padding:      '0.75rem 1rem',
                  borderRadius: '4px',
                  minWidth:     '130px',
                }}
              >
                <p className="font-mono text-dust/60 uppercase tracking-widest" style={{ fontSize: '0.55rem' }}>
                  Intereses
                </p>
                <p className="font-display text-star font-bold mt-1" style={{ fontSize: '1.4rem', lineHeight: 1 }}>
                  7
                </p>
                <p className="font-mono text-nebula" style={{ fontSize: '0.6rem', marginTop: '0.25rem' }}>
                  áreas activas
                </p>
              </motion.div>

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

/* ---- Subcomponente: Esquinas decorativas estilo HUD ---- */
function HudCorner({ position }) {
  const posClasses = {
    'top-left':     'top-0 left-0',
    'top-right':    'top-0 right-0 rotate-90',
    'bottom-left':  'bottom-0 left-0 -rotate-90',
    'bottom-right': 'bottom-0 right-0 rotate-180',
  }

  return (
    <div className={`absolute w-4 h-4 pointer-events-none ${posClasses[position]}`} aria-hidden="true">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M0 8 L0 0 L8 0" stroke="rgba(59,111,212,0.7)" strokeWidth="1.5" fill="none"/>
      </svg>
    </div>
  )
}
