/**
 * SectionLabel.jsx
 * Encabezado de sección con número estilo dashboard y título.
 * Uso: <SectionLabel number="01" label="Quién soy" />
 */

export default function SectionLabel({ number, label, align = 'left' }) {
  return (
    <div className={`flex flex-col gap-2 ${align === 'center' ? 'items-center' : 'items-start'}`}>
      {/* Número de sección — identidad de dashboard */}
      <span className="section-number">[ {number} ]</span>

      {/* Línea decorativa */}
      <div className={`h-px w-12 bg-nebula opacity-60 ${align === 'center' ? 'mx-auto' : ''}`} />

      {/* Título de sección */}
      <h2
        className="font-display text-star"
        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
      >
        {label}
      </h2>
    </div>
  )
}
