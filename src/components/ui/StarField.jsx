/**
 * StarField.jsx
 * Fondo de estrellas procedural usando canvas.
 * Se renderiza una sola vez al montar el componente.
 * Tres capas: estrellas pequeñas, medianas, grandes (profundidad).
 */

import { useEffect, useRef } from 'react'

export default function StarField({ count = 180 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')

    // Ajustar tamaño al viewport
    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
      draw()
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Generar estrellas con seed fija para consistencia visual
      // (usamos Math.random simple; en Día 2 podemos seedear si queremos)
      for (let i = 0; i < count; i++) {
        const x       = Math.random() * canvas.width
        const y       = Math.random() * canvas.height
        const radius  = Math.random() * 1.2 + 0.2
        const opacity = Math.random() * 0.7 + 0.1

        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(232, 234, 246, ${opacity})`
        ctx.fill()
      }

      // Unas pocas estrellas más brillantes (primer plano)
      for (let i = 0; i < 12; i++) {
        const x  = Math.random() * canvas.width
        const y  = Math.random() * canvas.height
        const r  = Math.random() * 0.8 + 1.2

        // Halo
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, r * 4)
        gradient.addColorStop(0, 'rgba(0, 212, 255, 0.5)')
        gradient.addColorStop(1, 'rgba(0, 212, 255, 0)')
        ctx.beginPath()
        ctx.arc(x, y, r * 4, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Punto central
        ctx.beginPath()
        ctx.arc(x, y, r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(200, 240, 255, 0.9)'
        ctx.fill()
      }
    }

    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [count])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  )
}
