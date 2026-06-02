# Jorge Villeda — Portfolio Personal

Stack: React + Vite + Tailwind CSS 3 + Framer Motion
Deploy: Vercel

## Estructura del proyecto

```
src/
├── components/
│   ├── Navbar.jsx           # Navegacion fija
│   ├── Footer.jsx           # Pie de pagina
│   └── ui/
│       ├── StarField.jsx    # Canvas de estrellas (fondo)
│       ├── GridOverlay.jsx  # Cuadricula (fondo)
│       ├── FadeInView.jsx   # Wrapper animacion scroll
│       └── SectionLabel.jsx # Encabezado de seccion
├── sections/
│   ├── Hero.jsx             # Seccion 1 
│   ├── Placeholders.jsx     # Secciones temporales
│   ├── QuienSoy.jsx         # Seccion 2 [Me falta todavía]
│   ├── Herramientas.jsx     # Seccion 3 [[Me falta todavía]]
│   ├── Timeline.jsx         # Seccion 4 [[Me falta todavía]]
│   ├── Proyectos.jsx        # Seccion 5 [[Me falta todavía]]
│   └── Proximamente.jsx     # Seccion 6 [[Me falta todavía]]
├── data/
│   └── content.js           # Datos centralizados [[Me falta todavía]]
├── assets/
│   └── jorge-photo.jpg      # pendiente
└── index.css                # Estilos globales + tokens
```

## Tokens de diseño

- void    #050810  negro espacial
- deep    #080d1a  fondo principal
- nebula  #3b6fd4  azul principal / CTAs
- pulsar  #6b5de8  violeta / acentos
- quasar  #00d4ff  cyan / detalles
- star    #e8eaf6  texto principal
- dust    #8892a4  texto secundario

Fuentes: Syne (titulos) / DM Sans (cuerpo) / JetBrains Mono (datos)

## Animaciones 

- Fade-in al scroll  -> FadeInView wrapper
- Hover en tarjetas  -> Framer Motion whileHover
- Timeline animada   -> seccion Timeline
- Constelacion       -> seccion QuienSoy (click en nodo)

## Local dev

  npm install
  npm run dev


