# Jorge Villeda — Portafolio Personal

**[🌐 Ver portafolio publicado →](https://jorge-villeda.vercel.app)**

---

## Stack

React · Vite · Tailwind CSS 3 · Framer Motion · Vercel

---

## Reflexión

### ¿A quién le estoy hablando?

Este portafolio está dirigido a una startup técnica o a un equipo de ingeniería dentro de una empresa mediana que busca contratar a alguien que pueda crecer. No una agencia creativa que evalúa portafolios por su estética ante todo, ni una corporación grande que quiere un perfil estandarizado. Me interesa el tipo de empresa donde la persona que te entrevista también escribe código, donde importa cómo piensas, no solo qué sabes, y donde la multidisciplinariedad es importante. Creo que ese concepto es el central en todo este portfaolio.

La narrativa central del portafolio no es "soy un desarrollador web". Es "soy una persona con muchos intereses y que se apasiona en todo lo que descubre, y que descubrió en el código la herramienta más poderosa para conseguir crear cosas". Esa distinción me importó desde el diseño de la primera sección hasta la última frase de la página.

El visitante ideal termina entendiendo que hay una persona coherente detrás del código. Alguien que lidera en la universidad, compite en programación desde hace tres años, disfruta de juegos matemáticos y probabilísticos con teoría de juegos y quiere especializarse en ciencia de datos o inteligencia artificial. Esa coherencia es lo que quería demostrar. Un reclutador que solo busca "React + 2 años de experiencia" probablemente no es mi audiencia, y me siento firme en esa postura.

---

### ¿Qué tecnologías elegí y por qué?

**React + Vite** era la elección obvia dado lo que vimos en clase, pero la justificación real es otra: la estructura en componentes me permitió construir el portafolio como si fuera una aplicación, no una página estática. Cada sección es un componente independiente, los datos están centralizados en un archivo separado (`src/data/content.js`), y la lógica de interacción está encapsulada donde corresponde. Cuando en el Día 4 necesite actualizar mis proyectos o subir fotos reales, solo toco ese archivo.

**Tailwind CSS** lo elegí porque quería un sistema de diseño consistente sin escribir CSS suelto que se vuelve difícil de mantener. Definí todos los colores, fuentes y valores del proyecto como tokens en `tailwind.config.js`. Eso garantiza coherencia, así los cambios que hago los debo hacer solo en un lugra nada más. No lo usé como sustituto del diseño, pues tomé todas las decisiones, sino como herramienta para ejecutar ese diseño de forma más ordenada y rápida.

**Framer Motion** con una restricción explícita: solo cuatro tipos de animación. Fade-in al hacer scroll, hover en tarjetas, la timeline animada y la constelación interactiva. Nada más. Esa restricción fue intencional, porque sentí que el exceso de animaciones se me saldría de las manos y de mis capacidaes.

**Vercel** para el deploy porque el flujo de GitHub → deploy automático es exactamente lo que usaría en un proyecto real. Cada push a `main` actualiza el sitio. No hay configuración manual.

---

### ¿Qué tecnología del curso decidí no usar?

Decidí no usar CSS puro / vanilla CSS para los estilos, y usé tailwind que me facilitó muchísimo la vida. Durante el curso vimos varios fundamentos, y más o menos los entiendo. Pero en este proyecto tomé la decisión consciente de no mezclarlos con React: si el proyecto usa un framework declarativo, la lógica de UI debe vivir ahí completamente. Mezclar paradigmas habría producido código más difícil de leer y mantener, y siento que el frontend no es una de mis fortalezas.

También opté por no usar WordPress ni ningún CMS a pesar de que lo vimos. Mi portafolio tiene contenido que yo controlo mejor y que no necesita edición frecuente por parte de terceros. Un CMS habría añadido complejidad sin beneficio real para este caso de uso específico.

---

### ¿Dónde me arriesgué y dónde jugué seguro?

**Jugué seguro** con el stack base. React, Vite y Tailwind son herramientas que conozco bien y que el mercado valida. No tiene sentido arriesgarse en las herramientas cuando el riesgo real está en el diseño y la narrativa.

**Me arriesgué** en dos decisiones que no son técnicas pero que definen todo el portafolio:

La primera fue la narrativa. Lo más fácil era hacer un portafolio estándar de desarrollador: foto, skills, proyectos, contacto, pero tras reflexionar me di cuenta de que las cosas en las que destacó no están en ese stack ni en esos proyectos. Factores como el liderazgo o la creatividad. En cambio construí la identidad central alrededor del concepto de "persona multidisciplinaria". Eso funciona o no funciona dependiendo de la audiencia. Si el visitante busca un perfil técnico estrecho, este portafolio probablemente no le habla. Asumí ese riesgo conscientemente.

La segunda fue la constelación interactiva. Una constelación SVG donde cada nodo representa una faceta de mi identidad. astronomía, estadística, programación competitiva, escritura, música, fútbol, y al hacer clic se abre un panel con imagen, tagline y texto, es una apuesta de diseño. Podría haber puesto una sección "Sobre mí" con texto y una foto. Pero eso no comunica la idea de que todas estas áreas están conectadas. El grafo lo hace de forma inmediata y sin explicación.Además de que me gustan mucho los grafos.

También me arriesgué con la paleta y la estética. Un fondo negro con estrellas generadas proceduralmente en canvas, cuadrícula de dashboard, tipografía Syne para los títulos y JetBrains Mono para las etiquetas técnicas. Es un lenguaje visual que no es el de un portafolio genérico de desarrollador, y puede no gustarle a todo el mundo. Pero coherencia y memorabilidad me importaban más que neutralidad.Y lo más importante es que me gusta a mí.

---

### Si tuviera otra semana, ¿qué mejoraría?

**Primero**, Me habría gustado elegir de mejor manera la forma de mostrar los proyectos realizados, pues siento que me fui por lo fácil, y podría haber hecho algo más interesante al respecto, en lugar de adjuntar archivos o links.

**Segundo**, trabajar más profundo el rendimiento en mobile. La constelación SVG funciona bien en desktop pero en pantallas pequeñas el área de interacción de los nodos es pequeña y el panel lateral se convierte en panel inferior. Funciona, pero hay margen para mejorar la experiencia táctil con nodos más grandes en touch, gestos de swipe para navegar entre nodos, y potencialmente un layout completamente diferente para móvil en lugar de solo adaptar el de desktop.

---

## Estructura del proyecto

```
src/
├── components/
│   ├── Navbar.jsx            # Navegación fija, scroll-aware
│   ├── Footer.jsx            # Pie de página
│   └── ui/
│       ├── StarField.jsx     # Canvas de estrellas procedural
│       ├── GridOverlay.jsx   # Cuadrícula de datos (fondo)
│       ├── FadeInView.jsx    # Animación de scroll (única)
│       └── SectionLabel.jsx  # Encabezado de sección reutilizable
├── sections/
│   ├── Hero.jsx              # Pantalla completa de entrada
│   ├── QuienSoy.jsx          # Constelación interactiva SVG
│   ├── Herramientas.jsx      # Skills por categoría con barras animadas
│   ├── Proyectos.jsx         # Tarjetas con panel expandible
│   └── Timeline.jsx          # Línea de tiempo + sección Próximamente
├── data/
│   └── content.js            # Todo el contenido centralizado aquí
├── App.jsx
├── main.jsx
└── index.css                 # Tokens de diseño globales
```

## Correr en local

```bash
npm install
npm run dev
# → http://localhost:5173
```

## Deploy

Cada push a `main` en GitHub actualiza el sitio automáticamente vía Vercel.
El archivo `vercel.json` en la raíz ya tiene la configuración necesaria.