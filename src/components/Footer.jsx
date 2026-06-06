/**
 * Footer.jsx
 * Footer minimalista con coordenadas, redes sociales y crédito.
 */

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative border-t border-dim/40"
      style={{ background: 'var(--color-void)' }}
    >
      {/* Línea superior con gradiente */}
      <div className="line-gradient" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo / nombre */}
          <div className="flex flex-col gap-1">
            <span
              className="font-display text-star font-bold"
              style={{ letterSpacing: '-0.02em' }}
            >
              Jorge Villeda<span className="text-nebula">.</span>
            </span>
            <span className="font-mono text-dust/50 text-xs tracking-wide">
              Ingeniería · UVG · Guatemala
            </span>
          </div>

          {/* Links de redes*/}
          <div className="flex items-center gap-6">
            {[
              { label: 'GitHub',   href: 'https://github.com/JorgeVilledaS/Portafolio' },
              { label: 'Email',    href: 'mailto:jvilledasolis@gmail.com' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-dust/60 hover:text-star text-xs tracking-wide transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Año + crédito */}
          <span className="font-mono text-dust/30 text-xs">
            © {year} Jorge Villeda
          </span>

        </div>
      </div>
    </footer>
  )
}
