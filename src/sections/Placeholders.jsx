/**
 * PlaceholderSection.jsx
 * Sección temporal mientras se construye el contenido real.
 * Día 2: QuienSoy, Herramientas, Timeline
 * Día 3: Proyectos, Proximamente
 */

import FadeInView from '../components/ui/FadeInView'

export function QuienSoy() {
  return (
    <section id="quien-soy" className="relative py-32">
      <FadeInView>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div
            className="p-12 flex flex-col items-center gap-4 text-center"
            style={{ border: '1px dashed rgba(59,111,212,0.2)', borderRadius: '4px' }}
          >
            <span className="section-number">[ 01 ]</span>
            <h2 className="font-display text-star" style={{ fontSize: '2rem' }}>Quién soy</h2>
            <p className="font-mono text-dust text-sm">
              // Constelación interactiva — se construye en Día 2
            </p>
          </div>
        </div>
      </FadeInView>
    </section>
  )
}

export function Herramientas() {
  return (
    <section id="herramientas" className="relative py-32">
      <FadeInView>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div
            className="p-12 flex flex-col items-center gap-4 text-center"
            style={{ border: '1px dashed rgba(59,111,212,0.2)', borderRadius: '4px' }}
          >
            <span className="section-number">[ 02 ]</span>
            <h2 className="font-display text-star" style={{ fontSize: '2rem' }}>Herramientas para construir ideas</h2>
            <p className="font-mono text-dust text-sm">
              // Grid de skills — se construye en Día 2
            </p>
          </div>
        </div>
      </FadeInView>
    </section>
  )
}

export function Proyectos() {
  return (
    <section id="proyectos" className="relative py-32">
      <FadeInView>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div
            className="p-12 flex flex-col items-center gap-4 text-center"
            style={{ border: '1px dashed rgba(59,111,212,0.2)', borderRadius: '4px' }}
          >
            <span className="section-number">[ 03 ]</span>
            <h2 className="font-display text-star" style={{ fontSize: '2rem' }}>Proyectos destacados</h2>
            <p className="font-mono text-dust text-sm">
              // Tarjetas de proyectos — se construyen en Día 3
            </p>
          </div>
        </div>
      </FadeInView>
    </section>
  )
}

export function Timeline() {
  return (
    <section id="timeline" className="relative py-32">
      <FadeInView>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div
            className="p-12 flex flex-col items-center gap-4 text-center"
            style={{ border: '1px dashed rgba(59,111,212,0.2)', borderRadius: '4px' }}
          >
            <span className="section-number">[ 04 ]</span>
            <h2 className="font-display text-star" style={{ fontSize: '2rem' }}>Timeline</h2>
            <p className="font-mono text-dust text-sm">
              // Línea de tiempo animada — se construye en Día 2
            </p>
          </div>
        </div>
      </FadeInView>
    </section>
  )
}

export function Proximamente() {
  return (
    <section id="proximamente" className="relative py-32">
      <FadeInView>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div
            className="p-12 flex flex-col items-center gap-4 text-center"
            style={{ border: '1px dashed rgba(59,111,212,0.2)', borderRadius: '4px' }}
          >
            <span className="section-number">[ 05 ]</span>
            <h2 className="font-display text-star" style={{ fontSize: '2rem' }}>Próximamente</h2>
            <p className="font-mono text-dust text-sm">
              // Sección de metas — se construye en Día 3
            </p>
          </div>
        </div>
      </FadeInView>
    </section>
  )
}
