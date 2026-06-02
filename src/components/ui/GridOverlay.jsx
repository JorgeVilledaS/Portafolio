/**
 * GridOverlay.jsx
 * Cuadrícula de líneas muy sutiles inspirada en dashboards de datos.
 * Da profundidad y contexto visual sin distraer.
 */

export default function GridOverlay() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
      style={{
        backgroundImage: `
          linear-gradient(rgba(59, 111, 212, 0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 111, 212, 0.04) 1px, transparent 1px)
        `,
        backgroundSize: '64px 64px',
      }}
    />
  )
}
