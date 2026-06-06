/**
 * Timeline.jsx — Sección 4: Línea de tiempo
 */

import { motion } from 'framer-motion'
import FadeInView  from '../components/ui/FadeInView'
import { TIMELINE_EVENTS } from '../data/content'

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-24 lg:py-32 overflow-hidden">

      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 60% at 20% 50%, rgba(107,93,232,0.05) 0%, transparent 60%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">

        {/* ---- Encabezado ---- */}
        <FadeInView>
          <div className="mb-16">
            <span className="section-number">[ 04 ]</span>
            <div className="h-px w-12 bg-nebula opacity-60 my-2" />
            <h2
              className="font-display text-star"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}
            >
              Cronología académica
            </h2>
          </div>
        </FadeInView>

        {/* ---- Línea de tiempo ---- */}
        <div className="relative">

          {/* Línea vertical central */}
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px"
            style={{
              background: 'linear-gradient(180deg, transparent, rgba(59,111,212,0.4) 10%, rgba(59,111,212,0.4) 90%, transparent)',
              transform:  'translateX(-50%)',
            }}
            aria-hidden="true"
          />

          {/* Eventos */}
          <div className="flex flex-col gap-0">
            {TIMELINE_EVENTS.map((event, index) => (
              <TimelineEvent
                key={event.id}
                event={event}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>

          {/* ---- Nodo final: Próximamente ---- */}
          <FadeInView delay={0.3}>
            <ProximamenteNode />
          </FadeInView>

        </div>
      </div>
    </section>
  )
}

// =========================================================
// EVENTO INDIVIDUAL
// =========================================================

function TimelineEvent({ event, index, isLeft }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.6,
        delay:    0.05,
        ease:     [0.25, 0.1, 0.25, 1],
      }}
      className={`
        relative flex items-start gap-6
        pl-12 md:pl-0
        mb-10
        ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'}
      `}
    >
      {/* ---- Nodo en la línea ---- */}
      <div
        className="absolute left-4 md:left-1/2 top-1 flex items-center justify-center"
        style={{ transform: 'translate(-50%, 0)', zIndex: 10 }}
        aria-hidden="true"
      >
        {/* Anillo exterior */}
        <div
          className="absolute w-5 h-5 rounded-full"
          style={{ background: `${event.categoryColor}15`, border: `1px solid ${event.categoryColor}50` }}
        />
        {/* Punto interior */}
        <div
          className="relative w-2 h-2 rounded-full"
          style={{ background: event.categoryColor }}
        />
      </div>

      {/* ---- Tarjeta del evento ---- */}
      {/* Mitad vacía para alternancia en desktop */}
      <div className="hidden md:block md:w-[calc(50%-2rem)]" />

      {/* Tarjeta */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
        className="md:w-[calc(50%-2rem)] flex flex-col gap-2"
        style={{
          border:        `1px solid rgba(59,111,212,0.15)`,
          borderRadius:  '4px',
          background:    '#0d1628',
          padding:       '1rem 1.25rem',
        }}
      >
        {/* Año + categoría */}
        <div className="flex items-center gap-3 flex-wrap">
          <span
            className="font-display text-star font-bold"
            style={{ fontSize: '0.9rem' }}
          >
            {event.year}
          </span>
          <span
            className="font-body"
            style={{
              color:        event.categoryColor,
              fontSize:     '0.75rem',
              fontWeight:   500,
              border:       `1px solid ${event.categoryColor}30`,
              padding:      '0.1rem 0.6rem',
              borderRadius: '2px',
              background:   '#111d35',
            }}
          >
            {event.category}
          </span>
        </div>

        {/* Título */}
        <h3
          className="font-display text-star font-bold"
          style={{ fontSize: '1rem', letterSpacing: '-0.01em' }}
        >
          {event.title}
        </h3>

        {/* Descripción */}
        <p
          className="font-body text-dust"
          style={{ fontSize: '0.85rem', lineHeight: 1.75, fontWeight: 500 }}
        >
          {event.description}
        </p>
      </motion.div>

    </motion.div>
  )
}

// =========================================================
// NODO FINAL:
// =========================================================

function ProximamenteNode() {
  const GOALS = [
    { label: 'Ciencia de Datos',      icon: '◈', color: '#6b5de8' },
    { label: 'Machine Learning',       icon: '⬡', color: '#3b6fd4' },
    { label: 'Inteligencia Artificial',icon: '✦', color: '#00d4ff' },
    { label: 'Física aplicada',        icon: '◎', color: '#6b5de8' },
  ]

  return (
    <div
      id="proximamente"
      className="relative mt-6 ml-12 md:ml-0"
    >
      {/* Nodo especial en la línea */}
      <div
        className="absolute left-[-2rem] md:left-1/2 top-6 flex items-center justify-center"
        style={{ transform: 'translate(-50%, 0)', zIndex: 10 }}
        aria-hidden="true"
      >
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center"
          style={{
            background:   'rgba(107,93,232,0.15)',
            border:       '1.5px solid rgba(107,93,232,0.7)',
            boxShadow:    '0 0 16px rgba(107,93,232,0.3)',
          }}
        >
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#6b5de8' }} />
        </div>
      </div>

      {/* Tarjeta "Próximamente" — centrada, no alternada */}
      <div
        className="md:mx-auto md:max-w-lg"
        style={{
          border:        '1px solid rgba(107,93,232,0.25)',
          borderRadius:  '6px',
          background:    '#0d1628',
          padding:       '2rem',
          overflow:      'hidden',
          position:      'relative',
        }}
      >
        {/* Línea superior de color */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, #6b5de8, #00d4ff, transparent)' }}
        />

        {/* Etiqueta de sección */}
        <div className="flex items-center gap-3 mb-4">
          <span className="section-number">[ 05 ]</span>
          <div className="h-px flex-1" style={{ background: 'rgba(107,93,232,0.2)' }} />
        </div>

        <h3
          className="font-display text-star font-bold mb-4"
          style={{ fontSize: '1.3rem', letterSpacing: '-0.02em' }}
        >
          El futuro
        </h3>

        <p
          className="font-body text-dust mb-6"
          style={{ fontSize: '0.88rem', lineHeight: 1.75, fontWeight: 500 }}
        >
          Mi plan a futuro es seguir explorando y aprendiendo paralelamente con la carrera, tratando de abrir oportunidades, de cara a ganar experiencia en el campo y ver hasta donde pueden llegar mis ideas, y qué tanto es posible mejorar al mundo.
        </p>

        {/* Grid de metas */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          {GOALS.map(goal => (
            <div
              key={goal.label}
              className="flex items-center gap-2 px-3 py-2"
              style={{
                border:       `1px solid ${goal.color}20`,
                borderRadius: '3px',
                background:   '#111d35',
              }}
            >
              <span style={{ color: goal.color, fontSize: '0.75rem' }}>{goal.icon}</span>
              <span className="font-body text-star" style={{ fontSize: '0.82rem', fontWeight: 500 }}>
                {goal.label}
              </span>
            </div>
          ))}
        </div>

        {/* Cita de John Nash */}
        <blockquote
          style={{
            borderLeft: '2px solid rgba(107,93,232,0.4)',
            paddingLeft: '1rem',
            margin: 0,
          }}
        >
          <p
            className="font-body text-dust"
            style={{
              fontSize:   '0.88rem',
              lineHeight: 1.75,
              fontStyle:  'italic',
              fontWeight: 500,
            }}
          >
            "Caballeros, debo recordarles que mis probabilidades de éxito
            aumentan en cada nuevo intento."
          </p>
          <footer
            className="font-body mt-2"
            style={{ color: 'rgba(107,93,232,0.8)', fontSize: '0.78rem', fontWeight: 500 }}
          >
            — John Nash
          </footer>
        </blockquote>

      </div>
    </div>
  )
}
