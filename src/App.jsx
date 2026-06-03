/**
 * App.jsx — Componente raíz
 *
 */

import Navbar       from './components/Navbar'
import Footer       from './components/Footer'
import StarField    from './components/ui/StarField'
import GridOverlay  from './components/ui/GridOverlay'
import Hero         from './sections/Hero'
import QuienSoy     from './sections/QuienSoy'
import Herramientas from './sections/Herramientas'
import Timeline     from './sections/Timeline'
import { Proyectos } from './sections/Placeholders'

export default function App() {
  return (
    <>
      {/* ---- Capas de fondo globales (fixed) ---- */}
      <StarField count={200} />
      <GridOverlay />

      {/* ---- Navegación fija ---- */}
      <Navbar />

      {/* ---- Contenido principal ---- */}
      <main>
        <Hero />
        <QuienSoy />
        <Herramientas />
        <Proyectos />
        <Timeline />
      </main>

      {/* ---- Pie de página ---- */}
      <Footer />
    </>
  )
}
