/**
 * QuienSoy.jsx — Sección 2: Quién soy
 *
 * Muestra una constelación SVG interactiva donde cada nodo es un hobbie. Al hacer clic en un nodo, se despliega un panel
 * lateral con imagen/video + tagline + texto descriptivo.
 *
 * Estructura:
 *   - <ConstellationCanvas>  → SVG con aristas y nodos
 *   - <NodePanel>            → Panel de detalle del nodo seleccionado
 */

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence }      from 'framer-motion'
import FadeInView                       from '../components/ui/FadeInView'
import { CONSTELLATION_NODES, CONSTELLATION_EDGES } from '../data/content'

// =========================================================
// COMPONENTE PRINCIPAL
// =========================================================

export default function QuienSoy() {
  // Nodo actualmente seleccionado (null = ninguno)
  const [activeNode, setActiveNode] = useState(null)

  const selectedNode = CONSTELLATION_NODES.find(n => n.id === activeNode) ?? null

  return (
    <section id="quien-soy" className="relative py-24 lg:py-32 overflow-hidden">

      {/* Gradiente de fondo sutil para esta sección */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 30% 60%, rgba(107,93,232,0.06) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* ---- Encabezado ---- */}
        <FadeInView>
          <div className="mb-14">
            <span className="section-number">[ 01 ]</span>
            <div className="h-px w-12 bg-nebula opacity-60 my-2" />
            <h2
              className="font-display text-star"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}
            >
              Quién soy
            </h2>
            <p className="font-body text-dust mt-3" style={{ maxWidth: '52ch', fontSize: '0.95rem', lineHeight: 1.7 }}>
              Lo que más me gusta de apasionarme de diferentes cosas, es que la educación integral termina mostrando el mundo desde una perspectiva más rica y todo termina entrelazandose de alguna manera, como se puede ver en esta constelación de los temas que me apasionan.
            </p>
          </div>
        </FadeInView>

        {/* ---- Layout: constelación + panel ---- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Constelación SVG */}
          <div className="lg:col-span-7">
            <FadeInView delay={0.2}>
              <ConstellationCanvas
                activeNode={activeNode}
                onNodeClick={setActiveNode}
              />
            </FadeInView>
          </div>

          {/* Panel de detalle */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              {selectedNode ? (
                <NodePanel
                  key={selectedNode.id}
                  node={selectedNode}
                  onClose={() => setActiveNode(null)}
                />
              ) : (
                <EmptyPanelHint key="hint" />
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}

// =========================================================
// CONSTELACIÓN SVG
// =========================================================

function ConstellationCanvas({ activeNode, onNodeClick }) {
  // El SVG usa un viewBox fijo; los nodos tienen coordenadas en % del viewBox
  const VW = 600
  const VH = 420

  // Convertir coordenadas de % a px del viewBox
  const px = (node) => ({ x: (node.x / 100) * VW, y: (node.y / 100) * VH })

  return (
    <div
      className="relative w-full"
      style={{
        border:        '1px solid rgba(59,111,212,0.15)',
        borderRadius:  '6px',
        background:    '#0a1020',
      }}
    >
      <svg
        viewBox={`0 0 ${VW} ${VH}`}
        className="w-full h-auto"
        style={{ display: 'block' }}
        aria-label="Constelación interactiva de intereses de Jorge Villeda"
      >
        {/* ---- Aristas / conexiones ---- */}
        {CONSTELLATION_EDGES.map(([aId, bId]) => {
          const a = CONSTELLATION_NODES.find(n => n.id === aId)
          const b = CONSTELLATION_NODES.find(n => n.id === bId)
          if (!a || !b) return null

          const pa = px(a)
          const pb = px(b)
          const isActive = activeNode === aId || activeNode === bId

          return (
            <line
              key={`${aId}-${bId}`}
              x1={pa.x} y1={pa.y}
              x2={pb.x} y2={pb.y}
              stroke={isActive ? 'rgba(59,111,212,0.5)' : 'rgba(59,111,212,0.15)'}
              strokeWidth={isActive ? 1.2 : 0.8}
              strokeDasharray={isActive ? 'none' : '4 6'}
              style={{ transition: 'all 0.3s ease' }}
            />
          )
        })}

        {/* ---- Nodos ---- */}
        {CONSTELLATION_NODES.map((node) => {
          const { x, y } = px(node)
          const isActive = activeNode === node.id

          return (
            <ConstellationNode
              key={node.id}
              node={node}
              cx={x}
              cy={y}
              isActive={isActive}
              onClick={() => onNodeClick(isActive ? null : node.id)}
            />
          )
        })}
      </svg>

      {/* Leyenda inferior */}
      <div className="px-4 pb-3 flex items-center gap-2">
        <span className="font-body text-dust/50" style={{ fontSize: '0.78rem' }}>
          Haz clic en un nodo para explorar
        </span>
      </div>
    </div>
  )
}

// ---- Nodo individual (SVG) ----
function ConstellationNode({ node, cx, cy, isActive, onClick }) {
  const outerR = isActive ? 22 : 16
  const innerR = isActive ? 7  : 5

  return (
    <g
      onClick={onClick}
      style={{ cursor: 'pointer' }}
      role="button"
      aria-label={`Explorar: ${node.label}`}
    >
      {/* Halo exterior animado cuando está activo */}
      {isActive && (
        <circle
          cx={cx} cy={cy}
          r={outerR + 8}
          fill="none"
          stroke={node.color}
          strokeWidth="0.5"
          opacity="0.3"
          style={{
            animation: 'ping 1.5s ease-in-out infinite',
          }}
        />
      )}

      {/* Círculo de fondo con gradiente */}
      <circle
        cx={cx} cy={cy}
        r={outerR}
        fill={isActive ? `${node.color}18` : 'rgba(8,13,26,0.6)'}
        stroke={node.color}
        strokeWidth={isActive ? 1.5 : 0.8}
        strokeOpacity={isActive ? 1 : 0.5}
        style={{ transition: 'all 0.3s ease' }}
      />

      {/* Punto central */}
      <circle
        cx={cx} cy={cy}
        r={innerR}
        fill={node.color}
        fillOpacity={isActive ? 0.9 : 0.5}
        style={{ transition: 'all 0.3s ease' }}
      />

      {/* Etiqueta de texto debajo del nodo */}
      <text
        x={cx} y={cy + outerR + 13}
        textAnchor="middle"
        fill={isActive ? node.color : 'rgba(136,146,164,0.9)'}
        fontSize={isActive ? '10.5' : '9.5'}
        fontFamily="DM Sans, sans-serif"
        fontWeight={isActive ? '500' : '400'}
        style={{ transition: 'all 0.3s ease', userSelect: 'none' }}
      >
        {node.label}
      </text>
    </g>
  )
}

// =========================================================
// PANEL DE DETALLE
// =========================================================

function NodePanel({ node, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0  }}
      exit={{    opacity: 0, x: 20 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative"
      style={{
        border:        `1px solid ${node.color}30`,
        borderRadius:  '6px',
        background:    '#0d1628',
        overflow:      'hidden',
      }}
    >
      {/* Línea de color en el borde superior */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${node.color}, transparent)` }}
      />

      {/* Botón cerrar */}
      <button
        onClick={onClose}
        className="absolute top-3 right-3 z-10 text-dust/40 hover:text-star transition-colors p-1"
        aria-label="Cerrar panel"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M1 1l12 12M13 1L1 13"/>
        </svg>
      </button>

      {/* ---- Área de media ---- */}
      <MediaBlock node={node} />

      {/* ---- Texto ---- */}
      <div className="p-5 flex flex-col gap-3">

        {/* Icono + nombre del nodo */}
        <div className="flex items-center gap-2">
          <span style={{ color: node.color, fontSize: '1rem' }}>{node.icon}</span>
          <h3
            className="font-display text-star font-bold"
            style={{ fontSize: '1.1rem', letterSpacing: '-0.01em' }}
          >
            {node.label}
          </h3>
        </div>

        {/* Tagline */}
        <p
          className="font-body"
          style={{ color: node.color, fontSize: '0.82rem', fontWeight: 500 }}
        >
          {node.tagline}
        </p>

        {/* Línea divisora */}
        <div className="h-px" style={{ background: `${node.color}20` }} />

        {/* Texto libre */}
        <p
          className="font-body text-dust"
          style={{ fontSize: '0.88rem', lineHeight: 1.75, fontWeight: 500 }}
        >
          {node.body}
        </p>

        {/* Enlace al PDF si aplica */}
        {node.media.type === 'pdf' && node.media.src && (
          <a
            href={node.media.src}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-1 font-mono hover:text-star transition-colors"
            style={{ color: node.color, fontSize: '0.7rem', letterSpacing: '0.08em' }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
            </svg>
            LEER CUENTO →
          </a>
        )}

      </div>
    </motion.div>
  )
}

// ---- Bloque de media: imagen, video o placeholder ----
function MediaBlock({ node }) {
  const { media } = node

  const containerStyle = {
    width:      '100%',
    height:     '180px',
    overflow:   'hidden',
    position:   'relative',
    background: `linear-gradient(135deg, rgba(13,22,40,0.9), rgba(8,13,26,0.95))`,
    borderBottom: `1px solid ${node.color}20`,
  }

  // Video embed (YouTube)
  if (media.type === 'video' && media.src) {
    return (
      <div style={containerStyle}>
        <iframe
          src={media.src}
          title={node.label}
          className="w-full h-full"
          style={{ border: 'none' }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  // Imagen real
  if (media.type === 'image' && media.src) {
    return (
      <div style={containerStyle}>
        <img
          src={media.src}
          alt={node.label}
          className="w-full h-full object-cover"
          style={{ opacity: 0.85 }}
        />
      </div>
    )
  }

  // PDF — mostrar banner con icono
  if (media.type === 'pdf') {
    return (
      <div
        style={{ ...containerStyle, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '0.5rem' }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={node.color} strokeWidth="1.2" opacity="0.6">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
        </svg>
        <span className="font-body text-dust/40" style={{ fontSize: '0.78rem', textAlign: 'center', padding: '0 1rem' }}>
          {media.placeholder}
        </span>
      </div>
    )
  }

  // Placeholder genérico (imagen pendiente)
  return (
    <div
      style={{ ...containerStyle, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '0.5rem' }}
    >
      <div
        className="w-10 h-10 flex items-center justify-center"
        style={{
          border:       `1px solid ${node.color}40`,
          borderRadius: '50%',
          color:        node.color,
          fontSize:     '1.2rem',
          opacity:      0.6,
        }}
      >
        {node.icon}
      </div>
      <span className="font-body text-dust/40" style={{ fontSize: '0.78rem', textAlign: 'center', padding: '0 1rem' }}>
        {media.placeholder}
      </span>
    </div>
  )
}

// ---- Hint cuando no hay nodo seleccionado ----
function EmptyPanelHint() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{    opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center justify-center gap-4 py-16 px-6"
      style={{
        border:        '1px dashed rgba(59,111,212,0.15)',
        borderRadius:  '6px',
        minHeight:     '300px',
      }}
    >
      {/* Constelación decorativa pequeña */}
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" aria-hidden="true">
        <circle cx="30" cy="30" r="2"  fill="#3b6fd4" opacity="0.8"/>
        <circle cx="10" cy="15" r="1.5" fill="#6b5de8" opacity="0.6"/>
        <circle cx="50" cy="12" r="1.5" fill="#00d4ff" opacity="0.6"/>
        <circle cx="48" cy="48" r="1.5" fill="#3b6fd4" opacity="0.5"/>
        <circle cx="12" cy="50" r="1.5" fill="#6b5de8" opacity="0.5"/>
        <line x1="30" y1="30" x2="10" y2="15" stroke="#3b6fd4" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="3 4"/>
        <line x1="30" y1="30" x2="50" y2="12" stroke="#3b6fd4" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="3 4"/>
        <line x1="30" y1="30" x2="48" y2="48" stroke="#3b6fd4" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="3 4"/>
        <line x1="30" y1="30" x2="12" y2="50" stroke="#3b6fd4" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="3 4"/>
      </svg>

      <p className="font-body text-dust/50 text-center" style={{ fontSize: '0.88rem', lineHeight: 1.7 }}>
        Selecciona un nodo para explorar esa faceta
      </p>
    </motion.div>
  )
}
