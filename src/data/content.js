/**
 * content.js — Datos centralizados del portafolio
 *
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
    tagline: 'Liderazgo en el Club de Astronomía — UVG',
    body: `Una de las cosas que más me apasiona es la astronomía, y como es un campo tan amplio e interdisciplinario, he aprendido mucho sobre computación, física, mecánica, aeronáutica, y he podido poner en práctica mi pasión formulando actividades, conversatorios y talleres en la universidad gracias a mi segundo año formando parte de la junta directiva del club.`,
    // Cuando Jorge tenga fotos, reemplazar estas rutas
    media: { type: 'image', src: '/astronomia.jpg', placeholder: 'Fotos del club de astronomía — UVG' },
  },
  {
    id: 'estadistica',
    label: 'Estadística & Probabilidad',
    x: 68,
    y: 18,
    color: '#6b5de8',   // pulsar
    icon: '◈',
    tagline: 'Una de mis mayores fortalezas es el pensamiento estadístico.',
    body: `Desde chiquito tuve obsesión por los datos y las estadísticas. Es lo que suelo hacer para entretenerme en las vacaciones. Lo que me atrae de la probabilidad no es el azar, sino todo lo contrario: cómo tomar la mejor decisión posible cuando la información es incompleta, y no ser resultadista: Es posible tomar la decisión correcta en base a la información recopilada. Eso se aplica en juegos que me apasionan como Pokémon competitivo y Póker técnico, y me encanta pensar que en todas las decisiones de la vida también.`,
    media: { type: 'image', src: '/estadistica.jpg', placeholder: 'Foto: Pokémon competitivo + Póker técnico' },
  },
  {
    id: 'programacion',
    label: 'Programación Competitiva',
    x: 48,
    y: 52,
    color: '#3b6fd4',   // nebula
    icon: '⬡',
    tagline: 'ICPC — Algoritmos a La Tortrix 2.1',
    body: `Participante por tercer año consecutivo en el International Collegiate Programming Contest (ICPC), la competición más prestigiosa de programación competitiva universitaria del mundo. Mi equipo se llama Algoritmos a La Tortrix 2.1. Esta competición me emociona mucho, me hace sacar lo mejor de mí, y me siento orgulloso de los aprendizajes adicionales a la carrera universitaria adquiridos. Hemos llegado a las dos finales nacionales, y hemos quedado a un solo problema de representar a Guatemala en el mundial`,
    media: { type: 'image', src: '/icpc3.jpeg', placeholder: 'Foto de competición ICPC' },
  },
  {
    id: 'escritura',
    label: 'Escritura',
    x: 18,
    y: 68,
    color: '#e8eaf6',   // star
    icon: '◎',
    tagline: 'El presente como borrador del futuro',
    body: `Siento que leer y escribir es una de las capacidades que los programadores más deberíamos cultivar. Mi mamá es escritora, entonces me ha inculcado mucho el área humanística que está al mismo nivel que la técnica y científica para mí. Me gusta escribir y leer ciencia ficción porque es el único género que piensa en serio sobre hacia dónde va el mundo. Escribo artículos en el blog de computación de la universidad, y tengo un cuento corto que ganó un concurso literario en 2023. Estoy seguro que la razón y sentido de mi vida la encontraré pensando sobre el futuro, escribiendo en el presente y creando algo que cambie la historia.`,
    // PDF del cuento — Jorge debe subirlo a public/
    media: { type: 'pdf', src: '/cuento.docx', placeholder: 'PDF: Cuento corto premiado' },
    media: { type: 'image', src: '/libro.jpg', placeholder: 'PDF: Cuento corto premiado' }
  },
  {
    id: 'musica',
    label: 'Música',
    x: 75,
    y: 62,
    color: '#6b5de8',   // pulsar
    icon: '♩',
    tagline: 'Miembro de la marimba de concierto de la universidad.',
    body: `Toco marimba desde los 7 años y forma un papel muy importante en mi educación integral. Considero a la música uno de los mayores placeres de la vida y considero que mi playlist de Spotify es mi posesión más preciada. Últimamente me ha gustado mucho el Math Rock, Folk Rock, Post Punk y la corriente chilena de artistas jovenes y muy talentosos. Me gusta decir que disfruto de todo. Me encanta Bad Bunny y Chopin.`,
    // Jorge debe reemplazar este link con el real de YouTube/Drive
    media: { type: 'video', src: 'https://youtu.be/XT3YqHZFv7k?si=C9K8YHbdPjUCPcwg', placeholder: 'Video tocando marimba — UVG' },
  },
  {
    id: 'futbol',
    label: 'Fútbol',
    x: 38,
    y: 82,
    color: '#00d4ff',   // quasar
    icon: '⬟',
    tagline: 'La pasión global por excelencia',
    body: `Me apasiona el fútbol de una manera peculiar. Junta absolutamente todas las cosas que me apasionan. La competitividad de conquistarlo todo, la pasión que los aficionados y países sentimos casi culturalmente, la complejidad de un sistema colectivo, con todas las historias independientes de cada jugador. Esta cantidad absurda de información me mantiene pendiente de noticias, analizando datos y emocionandome semana a semana. El mundial es tan importante para mí que lo utilizo de referencia cronológica para saber en qué año hice qué cosa.`,
    media: { type: 'image', src: '/mundial.jpg', placeholder: 'Fotos del Mundial' },
  },

    {
    id: 'curiosidad',
    label: 'Un poco de todo',
    x: 60,
    y: 75,
    color: '#00d4ff',   // quasar
    icon: '⬟',
    tagline: 'Por sobre todas las cosas, estoy abierto a aprender de todo lo que me rodea, y adaptarme a la situación en la que esté.',
    body: `La vida es muy corta como para vivir dos años, dos meses, dos días de la misma forma, entonces me gusta cambiar continuamente y aceptar las cosas que no puedo controlar. Cuando una meta se cruza en mi camino, hago todo lo posible por conseguirla, como el año pasado que me aprendí 244 dígitos de Pi en una semana para una competencia.`,
    media: { type: 'image', src: '/pi.jpg', placeholder: 'Concurso de digitos de Pi' },
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
  ['curiosidad',      'estadistica'],
]

// =========================================================
// SECCIÓN 3 — HERRAMIENTAS
// =========================================================

export const SKILL_CATEGORIES = [
  {
    id: 'desarrollo',
    label: 'Desarrollo',
    number: '01',
    description: 'Tomar con discreción. Esta lista seguirá creciendo',
    skills: [
      { name: 'Python',      level: 90 },
      { name: 'Java',        level: 65 },
      { name: 'C++',         level: 50 },
      { name: 'Kotlin',      level: 65 },
      { name: 'JavaScript',  level: 85 },
      { name: 'React',       level: 70 },
      { name: 'HTML / CSS',  level: 85 },
      { name: 'SQL',         level: 90 },
      { name: 'Git',         level: 90 },
    ],
  },
  {
    id: 'datos',
    label: 'Datos',
    number: '02',
    description: 'Herramientas estadísticas que domino',
    skills: [
      { name: 'Estadística básica e intermedia', level: 80 },
      { name: 'Teoría de la probabilidad',       level: 90 },
      { name: 'Análisis de datos',               level: 70 },
      { name: 'Visualización',                   level: 70 },
      { name: 'Excel (clave)',                           level: 99 },
    ],    
  },
  {
    id: 'ia',
    label: 'Inteligencia Artificial',
    number: '03',
    description: 'Actualmente, es indispensable esta área.',
    skills: [
      { name: 'Prompt Engineering',  level: 90 },
      { name: 'Herramientas de IA',  level: 70 },
      { name: 'Automatización',      level: 60 },
    ],
  },
]

// =========================================================
// SECCIÓN 3 — PROYECTOS DESTACADOS
// =========================================================

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
    id: 'nacimiento',
    year: '2005',
    title: 'Nacimiento',
    category: 'Biografía',
    categoryColor: '#6b5de8',
    description: 'Nací el 10 de Septiembre de 2005',
  },
  {
    id: 'marimba',
    year: '2013',
    title: 'Inicié en la marimba',
    category: 'Música',
    categoryColor: '#6b5de8',
    description: 'Comienzo a tocar marimba.',
  },
  {
    id: 'olimpiada',
    year: '2018',
    title: 'Olimpiada de Matemática',
    category: 'Académico',
    categoryColor: '#6b5de8',
    description: 'En 2018 gané unas olimpiadas de matemática a nivel departamental, y fui abanderado de mi colegio por primera vez',
  },

      {
    id: 'Interes',
    year: '2020',
    title: 'Pandemia e interés por la computación',
    category: 'Académico',
    categoryColor: '#6b5de8',
    description: 'Durante la pandemia, me interesé por la teoría de computación, machine learning y algoritmos básicos. Ahí comencé a pensar en estudiar computación.',
  },

  {
    id: 'Excelencia',
    year: '2023',
    title: 'Discurso de graduación',
    category: 'Académico',
    categoryColor: '#6b5de8',
    description: 'Tuve el honor de dar el discurso de graduación de mi promoción en el colegio',
  },
  {
    id: 'Carrera',
    year: '2024',
    title: 'Inicio de la carrera universitaria',
    category: 'Académico',
    categoryColor: '#6b5de8',
    description: 'Inicio de la carrera universitaria en la Universidad del Valle de Guatemala gracias a beca PotenciaT',
  },
  {
    id: 'icpc',
    year: '2024',
    title: 'ICPC — Primer año',
    category: 'Competencia',
    categoryColor: '#3b6fd4',
    description: 'Primera participación en el International Collegiate Programming Contest con el equipo Algoritmos a La Tortrix. Inicio de tres años consecutivos compitiendo.',
  },
  {
    id: 'proyectos-web',
    year: '2026',
    title: 'Primeros proyectos web reales',
    category: 'Desarrollo',
    categoryColor: '#3b6fd4',
    description: 'Construyo mis primeras aplicaciones con un stack más completo. Los cursos de Web, Sosftware y Bases de Datos me abren los ojos en una buena parte de lo que es el desarrollo de software.',
  },
]
