/**
 * Herramientas.jsx — Sección 3: Herramientas para construir ideas
 *
 * Tres categorías de habilidades presentadas como paneles de datos.
 * Cada skill tiene una barra de nivel que se anima al entrar en viewport.
 * El diseño evita deliberadamente el look genérico de "progress bars".
 */

import { motion } from 'framer-motion'
import FadeInView  from '../components/ui/FadeInView'
import { SKILL_CATEGORIES } from '../data/content'

export default function Herramientas() {
  return (
    <section id="herramientas" className="relative py-24 lg:py-32">

      {/* Gradiente de separación entre secciones */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 70% 50%, rgba(59,111,212,0.05) 0%, transparent 65%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* ---- Encabezado ---- */}
        <FadeInView>
          <div className="mb-14">
            <span className="section-number">[ 02 ]</span>
            <div className="h-px w-12 bg-nebula opacity-60 my-2" />
            <h2
              className="font-display text-star"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}
            >
              Conocimiento técnico - Stack
            </h2>
            <p className="font-body text-dust mt-3" style={{ maxWidth: '52ch', fontSize: '0.95rem', lineHeight: 1.7 }}>
              Considero que las ideas son más importantes que las herramientas, pero sin estas últimas, las primeras no pueden materializarse. Estas son las que manejo actualmente, aunque intento aprender nuevas constantemente.
            </p>
          </div>
        </FadeInView>

        {/* ---- Grid de categorías ---- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, catIndex) => (
            <FadeInView key={cat.id} delay={catIndex * 0.12}>
              <SkillCategory category={cat} />
            </FadeInView>
          ))}
        </div>

      </div>
    </section>
  )
}

// =========================================================
// PANEL DE CATEGORÍA
// =========================================================

function SkillCategory({ category }) {
  // Color de acento varía por categoría para dar personalidad
  const accentColors = {
    desarrollo: '#3b6fd4',
    datos:      '#6b5de8',
    ia:         '#00d4ff',
  }
  const accent = accentColors[category.id] ?? '#3b6fd4'

  return (
    <motion.div
      whileHover={{ y: -4, borderColor: `${accent}50` }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="flex flex-col"
      style={{
        border:        `1px solid rgba(59,111,212,0.18)`,
        borderRadius:  '6px',
        background:    'rgba(13,22,40,0.6)',
        backdropFilter:'blur(6px)',
        overflow:      'hidden',
        height:        '100%',
      }}
    >
      {/* ---- Header del panel ---- */}
      <div
        className="px-5 py-4 flex items-start justify-between"
        style={{ borderBottom: `1px solid rgba(59,111,212,0.12)` }}
      >
        <div>
          {/* Número de categoría */}
          <span className="font-mono" style={{ color: accent, fontSize: '0.65rem', letterSpacing: '0.15em' }}>
            {category.number}
          </span>
          <h3
            className="font-display text-star font-bold mt-1"
            style={{ fontSize: '1.05rem', letterSpacing: '-0.01em' }}
          >
            {category.label}
          </h3>
        </div>
        {/* Indicador de cantidad */}
        <span
          className="font-mono text-dust/50"
          style={{ fontSize: '0.65rem', paddingTop: '2px' }}
        >
          {category.skills.length} items
        </span>
      </div>

      {/* Descripción breve */}
      <p
        className="px-5 pt-3 pb-2 font-body text-dust/70"
        style={{ fontSize: '0.8rem', lineHeight: 1.6 }}
      >
        {category.description}
      </p>

      {/* ---- Lista de skills con barras ---- */}
      <div className="px-5 pb-5 pt-3 flex flex-col gap-3 flex-1">
        {category.skills.map((skill, i) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            accent={accent}
            index={i}
          />
        ))}
      </div>
    </motion.div>
  )
}

// =========================================================
// BARRA DE SKILL INDIVIDUAL
// =========================================================

function SkillBar({ skill, accent, index }) {
  return (
    <div className="flex flex-col gap-1">
      {/* Nombre + porcentaje */}
      <div className="flex items-center justify-between">
        <span
          className="font-body text-star/80"
          style={{ fontSize: '0.8rem' }}
        >
          {skill.name}
        </span>
        <span
          className="font-mono text-dust/40"
          style={{ fontSize: '0.6rem', letterSpacing: '0.05em' }}
        >
          {skill.level}%
        </span>
      </div>

      {/* Barra de fondo */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          height:        '3px',
          background:    'rgba(61,74,92,0.4)',
          borderRadius:  '2px',
        }}
      >
        {/* Barra de nivel — se anima al entrar en viewport */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{
            duration: 0.9,
            delay:    index * 0.06,
            ease:     [0.25, 0.1, 0.25, 1],
          }}
          style={{
            position:     'absolute',
            top:          0,
            left:         0,
            height:       '100%',
            background:   `linear-gradient(90deg, ${accent}90, ${accent})`,
            borderRadius: '2px',
          }}
        />
      </div>
    </div>
  )
}
