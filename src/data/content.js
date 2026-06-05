/**
 * content.js — Datos centralizados del portafolio
 *
 * Todo el texto, etiquetas y configuración de contenido vive aquí.
 * Así Jorge puede actualizar su información sin tocar los componentes.
 */

// =========================================================
// SECCIÓN 2 — QUIÉN SOY: Nodos de la constelación
// =========================================================

export const CONSTELLATION_NODES = [
  {
    id: 'astronomia',
    label: 'Astronomía',
    // Posición en el canvas de la constelación (porcentaje del área)
    // x e y van de 0 a 100
    x: 22,
    y: 28,
    color: '#00d4ff',   // quasar
    icon: '✦',
    tagline: 'Líder del Club de Astronomía — UVG',
    body: `Soy el líder académico del Club de Astronomía de la Universidad del Valle de Guatemala. Lo que más me fascina de la astronomía no es solo mirar el cielo, sino entender que estamos usando física, matemáticas y datos para inferir verdades sobre objetos que nunca podremos tocar. Eso es exactamente lo que quiero hacer con los datos en la Tierra.`,
    // Cuando Jorge tenga fotos, reemplazar estas rutas
    media: { type: 'image', src: null, placeholder: 'Fotos del club de astronomía — UVG' },
  },
  {
    id: 'estadistica',
    label: 'Estadística & Probabilidad',
    x: 68,
    y: 18,
    color: '#6b5de8',   // pulsar
    icon: '◈',
    tagline: 'Tomar decisiones con información incompleta',
    body: `Desde pequeño tuve obsesión por los datos y las estadísticas. Lo que me atrae de la probabilidad no es la certeza, sino todo lo contrario: cómo tomar la mejor decisión posible cuando la información es incompleta. Eso se aplica igual en el póker técnico, en el Pokémon competitivo, en los mercados, y en la ciencia.`,
    media: { type: 'image', src: null, placeholder: 'Foto: Pokémon competitivo + Póker técnico' },
  },
  {
    id: 'programacion',
    label: 'Programación Competitiva',
    x: 48,
    y: 52,
    color: '#3b6fd4',   // nebula
    icon: '⬡',
    tagline: 'ICPC — Algoritmos a La Tortrix 2.1',
    body: `Participante por tercer año consecutivo en el International Collegiate Programming Contest (ICPC), la competición más prestigiosa de programación competitiva universitaria del mundo. Mi equipo se llama Algoritmos a La Tortrix 2.1. Competir bajo presión con un problema que no entiendes todavía es la mejor forma de aprender a pensar.`,
    media: { type: 'image', src: null, placeholder: 'Foto de competición ICPC' },
  },
  {
    id: 'escritura',
    label: 'Escritura',
    x: 18,
    y: 68,
    color: '#e8eaf6',   // star
    icon: '◎',
    tagline: 'El presente como borrador del futuro',
    body: `Me gusta escribir y leer ciencia ficción porque es el único género que piensa en serio sobre hacia dónde va el mundo. Escribo artículos en el blog de computación de la universidad, y tengo un cuento corto que ganó un premio universitario. También creo que escribir bien es una de las habilidades más subestimadas en tecnología.`,
    // PDF del cuento — Jorge debe subirlo a public/
    media: { type: 'pdf', src: '/cuento-jorge-villeda.pdf', placeholder: 'PDF: Cuento corto premiado' },
  },
  {
    id: 'musica',
    label: 'Música',
    x: 75,
    y: 62,
    color: '#6b5de8',   // pulsar
    icon: '♩',
    tagline: 'Marimba, jazz, metal progresivo',
    body: `Toco marimba. Hay un video de una presentación en la Universidad del Valle que resume mejor que cualquier texto lo que siento cuando estoy frente a un instrumento. Mis géneros favoritos van del jazz al metal progresivo, pasando por la música clásica contemporánea. Todos tienen en común estructuras matemáticas que vale la pena descubrir.`,
    // Jorge debe reemplazar este link con el real de YouTube/Drive
    media: { type: 'video', src: 'https://www.youtube.com/embed/dQw4w9WgXcQ', placeholder: 'Video tocando marimba — UVG' },
  },
  {
    id: 'futbol',
    label: 'Fútbol',
    x: 38,
    y: 82,
    color: '#00d4ff',   // quasar
    icon: '⬟',
    tagline: 'El deporte más complejo del mundo',
    body: `El fútbol es el deporte más complejo que existe porque combina atletismo individual, sistemas colectivos, toma de decisiones en fracción de segundo y una cultura que conecta a toda la humanidad. Soy apasionado del fútbol y también lo veo como un sistema que puede analizarse con datos —xG, presión, redes de pases— igual que cualquier otro conjunto de datos.`,
    media: { type: 'image', src: null, placeholder: 'Fotos del Mundial' },
  },
]

// Aristas de la constelación — qué nodos están conectados entre sí
// Cada par [a, b] representa una conexión visual en el grafo
export const CONSTELLATION_EDGES = [
  ['astronomia',  'estadistica'],
  ['estadistica', 'programacion'],
  ['programacion','escritura'],
  ['escritura',   'musica'],
  ['musica',      'futbol'],
  ['futbol',      'estadistica'],
  ['astronomia',  'programacion'],
  ['musica',      'estadistica'],
]

// =========================================================
// SECCIÓN 3 — HERRAMIENTAS PARA CONSTRUIR IDEAS
// =========================================================

export const SKILL_CATEGORIES = [
  {
    id: 'desarrollo',
    label: 'Desarrollo',
    number: '01',
    description: 'El stack para convertir ideas en software real.',
    skills: [
      { name: 'Python',      level: 90 },
      { name: 'Java',        level: 75 },
      { name: 'C++',         level: 70 },
      { name: 'Kotlin',      level: 60 },
      { name: 'JavaScript',  level: 82 },
      { name: 'React',       level: 78 },
      { name: 'HTML / CSS',  level: 85 },
      { name: 'SQL',         level: 72 },
      { name: 'Git',         level: 80 },
    ],
  },
  {
    id: 'datos',
    label: 'Datos',
    number: '02',
    description: 'Herramientas para extraer señal del ruido.',
    skills: [
      { name: 'Estadística básica e intermedia', level: 85 },
      { name: 'Teoría de la probabilidad',       level: 80 },
      { name: 'Análisis de datos',               level: 75 },
      { name: 'Visualización',                   level: 70 },
    ],
  },
  {
    id: 'ia',
    label: 'Inteligencia Artificial',
    number: '03',
    description: 'El área hacia donde apunta todo lo anterior.',
    skills: [
      { name: 'Prompt Engineering',  level: 82 },
      { name: 'Herramientas de IA',  level: 78 },
      { name: 'Automatización',      level: 68 },
    ],
  },
]

// =========================================================
// SECCIÓN 3 — PROYECTOS DESTACADOS
// =========================================================
// Jorge: reemplaza image, repoUrl y completa los campos con tus proyectos reales.
// Puedes agregar o quitar proyectos; el componente se adapta automáticamente.

export const PROJECTS = [
  {
    id: 'proyecto-1',
    title: 'Nombre del proyecto',
    // Ruta relativa desde /public, ej: '/img/proyectos/proyecto-1.png'
    // o null para mostrar el placeholder
    image: null,
    description: 'Descripción breve del proyecto. Qué hace, para quién, en qué contexto surgió.',
    problem: 'El problema concreto que este proyecto resuelve o la necesidad que atiende.',
    learning: 'La cosa más importante que aprendiste construyendo esto.',
    techs: ['React', 'Python', 'SQL'],
    repoUrl: 'https://github.com/jorgevilleda/',
    // 'web' | 'data' | 'algoritmo' — define el color del badge
    category: 'web',
  },
  {
    id: 'proyecto-2',
    title: 'Nombre del proyecto',
    image: null,
    description: 'Descripción breve del proyecto. Qué hace, para quién, en qué contexto surgió.',
    problem: 'El problema concreto que este proyecto resuelve o la necesidad que atiende.',
    learning: 'La cosa más importante que aprendiste construyendo esto.',
    techs: ['Python', 'Pandas', 'Matplotlib'],
    repoUrl: 'https://github.com/jorgevilleda/',
    category: 'data',
  },
  {
    id: 'proyecto-3',
    title: 'Nombre del proyecto',
    image: null,
    description: 'Descripción breve del proyecto. Qué hace, para quién, en qué contexto surgió.',
    problem: 'El problema concreto que este proyecto resuelve o la necesidad que atiende.',
    learning: 'La cosa más importante que aprendiste construyendo esto.',
    techs: ['C++', 'Algoritmos'],
    repoUrl: 'https://github.com/jorgevilleda/',
    category: 'algoritmo',
  },
]

// =========================================================
// SECCIÓN 4 — TIMELINE
// =========================================================

export const TIMELINE_EVENTS = [
  {
    id: 'musica-inicio',
    year: '2010',
    title: 'Primer instrumento',
    category: 'Música',
    categoryColor: '#6b5de8',
    description: 'Comienzo a tocar marimba. Sin saberlo en ese momento, estoy aprendiendo que los patrones tienen estructura, y que dominarlos toma repetición disciplinada.',
  },
  {
    id: 'badminton',
    year: '2015',
    title: 'Federado en Bádminton',
    category: 'Deportes',
    categoryColor: '#00d4ff',
    description: 'Inicio una carrera de ocho años como jugador federado de bádminton. El deporte de alta velocidad que más depende de probabilidad, ángulos y anticipación.',
  },
  {
    id: 'astronomia-club',
    year: '2021',
    title: 'Club de Astronomía — UVG',
    category: 'Astronomía',
    categoryColor: '#00d4ff',
    description: 'Ingreso al Club de Astronomía de la Universidad del Valle y con el tiempo asumo el liderazgo académico. Empiezo a entender que observar el universo es, en el fondo, un problema de datos.',
  },
  {
    id: 'proyectos-web',
    year: '2022',
    title: 'Primeros proyectos web reales',
    category: 'Desarrollo',
    categoryColor: '#3b6fd4',
    description: 'Construyo mis primeras aplicaciones con stack completo. Descubro que tener las herramientas para implementar ideas es tan importante como tener las ideas.',
  },
  {
    id: 'ciencia-datos',
    year: '2023',
    title: 'Descubrimiento: Ciencia de Datos',
    category: 'Datos',
    categoryColor: '#6b5de8',
    description: 'Conectar estadística, programación y preguntas reales. Es la primera vez que siento que todos mis intereses apuntan en la misma dirección.',
  },
  {
    id: 'icpc',
    year: '2023',
    title: 'ICPC — Primer año',
    category: 'Competencia',
    categoryColor: '#3b6fd4',
    description: 'Primera participación en el International Collegiate Programming Contest con el equipo Algoritmos a La Tortrix. Inicio de tres años consecutivos compitiendo.',
  },
  {
    id: 'ia-ml',
    year: '2024',
    title: 'Deep dive: IA & Machine Learning',
    category: 'IA',
    categoryColor: '#6b5de8',
    description: 'Empiezo a estudiar en serio el álgebra lineal detrás del machine learning. Redes neuronales, optimización, gradientes. La matemática que siempre me gustó aplicada al problema más interesante del momento.',
  },
]
