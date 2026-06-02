/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // --- DESIGN SYSTEM ---
      // Paleta: espacio profundo + acentos fríos
      colors: {
        // Fondos
        void:    '#050810',   // negro espacial puro
        deep:    '#080d1a',   // fondo principal
        surface: '#0d1628',   // tarjetas / paneles
        panel:   '#111d35',   // elementos elevados

        // Acentos
        nebula:  '#3b6fd4',   // azul principal
        pulsar:  '#6b5de8',   // morado/violeta
        quasar:  '#00d4ff',   // cyan brillante (detalles)
        star:    '#e8eaf6',   // blanco frío (texto principal)
        dust:    '#8892a4',   // gris azulado (texto secundario)
        dim:     '#3d4a5c',   // bordes / separadores
      },
      fontFamily: {
        // Display: para títulos grandes, carácter fuerte
        display: ['"Syne"', 'sans-serif'],
        // Mono: datos, código, etiquetas técnicas
        mono:    ['"JetBrains Mono"', 'monospace'],
        // Body: lectura cómoda
        body:    ['"DM Sans"', 'sans-serif'],
      },
      fontSize: {
        // Escala tipográfica generosa
        'hero':  ['clamp(3rem, 8vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'xl2':   ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      // Grilla de 12 columnas base
      gridTemplateColumns: {
        '12': 'repeat(12, minmax(0, 1fr))',
      },
      backgroundImage: {
        // Gradientes de fondo atmosféricos
        'space-gradient': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(59,111,212,0.15) 0%, transparent 70%)',
        'nebula-glow':    'radial-gradient(ellipse 60% 40% at 80% 50%, rgba(107,93,232,0.1) 0%, transparent 60%)',
      },
      animation: {
        'twinkle':     'twinkle 3s ease-in-out infinite',
        'float':       'float 6s ease-in-out infinite',
        'scan-line':   'scanLine 8s linear infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%':      { opacity: '1',   transform: 'scale(1.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        scanLine: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
}
