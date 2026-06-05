/**
 * Proyectos.jsx — Sección 3: Proyectos destacados
 *
 * Cada proyecto se muestra como una tarjeta con:
 *   - Imagen (o placeholder con el nombre del proyecto)
 *   - Descripción + categoría
 *   - Tecnologías usadas (tech tags)
 *   - Problema resuelto
 *   - Aprendizaje principal
 *   - Link al repositorio
 *
 *
 * El layout usa una cuadrícula que se adapta:
 *   - 1 proyecto  → centrado ancho completo
 *   - 2 proyectos → dos columnas
 *   - 3+          → primer proyecto destacado (ancho completo), el resto en grid
 */

import { useState }          from 'react'
import { motion }            from 'framer-motion'
import FadeInView            from '../components/ui/FadeInView'
import { PROJECTS }          from '../data/content'

// Color y etiqueta de cada categoría de proyecto
const CATEGORY_META = {
  web:       { label: 'Desarrollo Web',   color: '#3b6fd4' },
  data:      { label: 'Datos',            color: '#6b5de8' },
  algoritmo: { label: 'Algoritmos',       color: '#00d4ff' },
}

export default function Proyectos() {
  // El primer proyecto puede estar "destacado" (featured) si hay 3 o más
  const featured = PROJECTS.length >= 3 ? PROJECTS[0]       : null
  const rest      = PROJECTS.length >= 3 ? PROJECTS.slice(1) : PROJECTS

  return (
    <section id="proyectos" className="relative py-24 lg:py-32">

      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 55% 45% at 50% 40%, rgba(59,111,212,0.05) 0%, transparent 65%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* ---- Encabezado ---- */}
        <FadeInView>
          <div className="mb-14">
            <span className="section-number">[ 03 ]</span>
            <div className="h-px w-12 bg-nebula opacity-60 my-2" />
            <h2
              className="font-display text-star"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}
            >
              Proyectos destacados
            </h2>
            <p className="font-body text-dust mt-3" style={{ maxWidth: '52ch', fontSize: '0.95rem', lineHeight: 1.7 }}>
              Cada proyecto es una pregunta que quería responder.
              El código es el medio; el aprendizaje, el resultado.
            </p>
          </div>
        </FadeInView>

        {/* ---- Proyecto destacado (solo si hay 3 o más) ---- */}
        {featured && (
          <FadeInView delay={0.1}>
            <div className="mb-6">
              <ProjectCard project={featured} featured />
            </div>
          </FadeInView>
        )}

        {/* ---- Grid del resto de proyectos ---- */}
        <div className={`grid gap-6 ${rest.length === 1 ? 'grid-cols-1 max-w-2xl' : 'grid-cols-1 md:grid-cols-2'}`}>
          {rest.map((project, i) => (
            <FadeInView key={project.id} delay={0.1 + i * 0.1}>
              <ProjectCard project={project} />
            </FadeInView>
          ))}
        </div>

      </div>
    </section>
  )
}

// =========================================================
// TARJETA DE PROYECTO
// =========================================================

function ProjectCard({ project, featured = false }) {
  // Controla si el panel de detalle (problema + aprendizaje) está expandido
  const [expanded, setExpanded] = useState(false)

  const meta    = CATEGORY_META[project.category] ?? CATEGORY_META.web
  const hasRepo = project.repoUrl && !project.repoUrl.endsWith('/')

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      style={{
        border:        `1px solid rgba(59,111,212,0.18)`,
        borderRadius:  '6px',
        background:    'rgba(13,22,40,0.7)',
        backdropFilter:'blur(6px)',
        overflow:      'hidden',
        height:        '100%',
        display:       'flex',
        flexDirection: featured ? 'row' : 'column',
      }}
    >
      {/* ---- Imagen ---- */}
      <ProjectImage
        project={project}
        meta={meta}
        featured={featured}
      />

      {/* ---- Contenido textual ---- */}
      <div className={`flex flex-col gap-4 p-6 ${featured ? 'flex-1' : ''}`}>

        {/* Categoría + título */}
        <div className="flex flex-col gap-2">
          <span
            className="font-mono self-start"
            style={{
              color:        meta.color,
              fontSize:     '0.62rem',
              letterSpacing:'0.12em',
              border:       `1px solid ${meta.color}35`,
              padding:      '0.15rem 0.55rem',
              borderRadius: '2px',
              background:   `${meta.color}10`,
            }}
          >
            {meta.label.toUpperCase()}
          </span>

          <h3
            className="font-display text-star font-bold"
            style={{ fontSize: featured ? '1.35rem' : '1.1rem', letterSpacing: '-0.01em' }}
          >
            {project.title}
          </h3>
        </div>

        {/* Descripción */}
        <p className="font-body text-dust/85" style={{ fontSize: '0.87rem', lineHeight: 1.75 }}>
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.techs.map(tech => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>

        {/* Separador */}
        <div className="h-px" style={{ background: 'rgba(59,111,212,0.12)' }} />

        {/* Botón expandir detalles */}
        <button
          onClick={() => setExpanded(v => !v)}
          className="flex items-center gap-2 font-mono text-dust/60 hover:text-star transition-colors self-start"
          style={{ fontSize: '0.68rem', letterSpacing: '0.1em' }}
          aria-expanded={expanded}
          aria-label={expanded ? 'Ocultar detalles' : 'Ver problema y aprendizaje'}
        >
          <svg
            width="10" height="10" viewBox="0 0 10 10"
            fill="none"
            style={{
              transform:  expanded ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s ease',
            }}
          >
            <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {expanded ? 'MENOS DETALLES' : 'PROBLEMA + APRENDIZAJE'}
        </button>

        {/* Panel expandible: problema y aprendizaje */}
        <motion.div
          initial={false}
          animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ overflow: 'hidden' }}
        >
          <div className="flex flex-col gap-4 pt-1">

            {/* Problema */}
            <DetailBlock
              icon={
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 8v4M12 16h.01"/>
                </svg>
              }
              label="Problema resuelto"
              color={meta.color}
              text={project.problem}
            />

            {/* Aprendizaje */}
            <DetailBlock
              icon={
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              }
              label="Aprendizaje principal"
              color={meta.color}
              text={project.learning}
            />

          </div>
        </motion.div>

        {/* Link al repositorio — empujado al fondo */}
        <div className="mt-auto pt-2">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono transition-colors"
            style={{
              color:        hasRepo ? meta.color : 'rgba(136,146,164,0.4)',
              fontSize:     '0.7rem',
              letterSpacing:'0.08em',
              pointerEvents: hasRepo ? 'auto' : 'none',
            }}
            aria-disabled={!hasRepo}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            {hasRepo ? 'VER REPOSITORIO →' : 'REPOSITORIO PRÓXIMAMENTE'}
          </a>
        </div>

      </div>
    </motion.article>
  )
}

// =========================================================
// IMAGEN DEL PROYECTO
// =========================================================

function ProjectImage({ project, meta, featured }) {
  // Dimensiones según si es featured o card normal
  const height   = featured ? '100%'  : '180px'
  const minWidth = featured ? '280px' : 'auto'
  const maxWidth = featured ? '320px' : 'auto'

  const containerStyle = {
    position:   'relative',
    height:     featured ? 'auto' : height,
    minHeight:  featured ? '220px' : height,
    minWidth,
    maxWidth,
    overflow:   'hidden',
    flexShrink: 0,
    background: `linear-gradient(135deg, rgba(13,22,40,0.95), rgba(8,13,26,0.98))`,
    borderRight: featured ? `1px solid rgba(59,111,212,0.12)` : 'none',
    borderBottom: !featured ? `1px solid rgba(59,111,212,0.12)` : 'none',
  }

  // Imagen real subida por Jorge
  if (project.image) {
    return (
      <div style={containerStyle}>
        <img
          src={project.image}
          alt={`Captura de ${project.title}`}
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}
        />
        {/* Overlay degradado sobre la imagen */}
        <div
          style={{
            position:   'absolute',
            inset:      0,
            background: `linear-gradient(to bottom, transparent 50%, rgba(8,13,26,0.6))`,
          }}
        />
      </div>
    )
  }

  // Placeholder elegante cuando no hay imagen
  return (
    <div
      style={{
        ...containerStyle,
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        flexDirection:  'column',
        gap:            '0.75rem',
        padding:        '1.5rem',
      }}
    >
      {/* Icono de la categoría */}
      <div
        style={{
          width:        '48px',
          height:       '48px',
          borderRadius: '50%',
          border:       `1px solid ${meta.color}35`,
          background:   `${meta.color}10`,
          display:      'flex',
          alignItems:   'center',
          justifyContent:'center',
          color:        meta.color,
          opacity:      0.7,
        }}
      >
        <CategoryIcon category={meta.label} />
      </div>

      {/* Nombre del proyecto como texto grande */}
      <p
        style={{
          fontFamily:  'Syne, sans-serif',
          fontWeight:  700,
          fontSize:    featured ? '1.1rem' : '0.9rem',
          color:       'rgba(232,234,246,0.2)',
          textAlign:   'center',
          lineHeight:  1.3,
          letterSpacing: '-0.02em',
        }}
      >
        {project.title}
      </p>

      <p
        style={{
          fontFamily:  'JetBrains Mono, monospace',
          fontSize:    '0.6rem',
          color:       'rgba(136,146,164,0.3)',
          letterSpacing:'0.1em',
          textAlign:   'center',
        }}
      >
        // imagen pendiente
      </p>
    </div>
  )
}

// ---- Icono SVG por categoría ----
function CategoryIcon({ category }) {
  if (category === 'Datos') {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 20V10M12 20V4M6 20v-6"/>
      </svg>
    )
  }
  if (category === 'Algoritmos') {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    )
  }
  // Web (default)
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <path d="M3 9h18M9 21V9"/>
    </svg>
  )
}

// ---- Bloque de detalle (problema / aprendizaje) ----
function DetailBlock({ icon, label, color, text }) {
  return (
    <div
      className="flex flex-col gap-1.5 p-3"
      style={{
        border:       `1px solid ${color}18`,
        borderRadius: '3px',
        background:   `${color}06`,
      }}
    >
      <div className="flex items-center gap-1.5" style={{ color }}>
        {icon}
        <span className="font-mono" style={{ fontSize: '0.62rem', letterSpacing: '0.1em' }}>
          {label.toUpperCase()}
        </span>
      </div>
      <p className="font-body text-dust/80" style={{ fontSize: '0.83rem', lineHeight: 1.7 }}>
        {text}
      </p>
    </div>
  )
}
