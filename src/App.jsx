/**
 * App.jsx — Componente raíz
 *
 * Estructura del portafolio:
 *   - Navbar (fija)
 *   - StarField + GridOverlay (fondos fijos)
 *   - Hero
 *   - Quien soy      [Día 2]
 *   - Herramientas   [Día 2]
 *   - Proyectos      [Día 3]
 *   - Timeline       [Día 2]
 *   - Próximamente   [Día 3]
 *   - Footer
 */

import Navbar      from './components/Navbar'
import Footer      from './components/Footer'
import StarField   from './components/ui/StarField'
import GridOverlay from './components/ui/GridOverlay'
import Hero        from './sections/Hero'
import {
  QuienSoy,
  Herramientas,
  Proyectos,
  Timeline,
  Proximamente,
} from './sections/Placeholders'

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
        <Proximamente />
      </main>

      {/* ---- Pie de página ---- */}
      <Footer />
    </>
  )
}
