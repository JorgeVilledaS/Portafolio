/**
 * FadeInView.jsx
 * Wrapper que aplica fade-in + leve subida al entrar en viewport.
 * Esta es la ÚNICA animación de scroll en todo el proyecto.
 *
 */

import { motion } from 'framer-motion'

export default function FadeInView({ children, delay = 0, y = 24, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // ease-in-out cubic
      }}
    >
      {children}
    </motion.div>
  )
}
