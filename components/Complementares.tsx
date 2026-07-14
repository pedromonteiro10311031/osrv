'use client'

import { useState } from 'react'

const compStyles = {
  wrap: { background: 'var(--bg-page)', padding: '120px 0' },
  inner: { maxWidth: 'var(--container)', margin: '0 auto', padding: '0 32px' },
  head: { marginBottom: 56 },
  eyebrow: { fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'var(--pine-700)', marginBottom: 16 },
  h2: { fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(2rem, 3.6vw, 3rem)', lineHeight: 1.05, letterSpacing: '-0.022em', color: 'var(--ink-900)', margin: 0, maxWidth: 720 },
  sub: { fontFamily: 'var(--font-serif)', fontStyle: 'italic' as const, color: 'var(--amber-500)', fontSize: 'clamp(1.0625rem, 1.4vw, 1.25rem)', marginTop: 12, maxWidth: 640 },
  list: { display: 'flex', flexDirection: 'column' as const, gap: 28 },
  row: { display: 'grid', gridTemplateColumns: '1fr 1.1fr', background: 'var(--paper-100)', border: '1px solid var(--border-soft)', borderRadius: 8, overflow: 'hidden', minHeight: 320, transition: 'box-shadow 0.2s, border-color 0.2s', textDecoration: 'none', color: 'inherit' },
  photo: { position: 'relative' as const, minHeight: 320, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.78, mixBlendMode: 'multiply' as const },
  photoScrim: { position: 'absolute' as const, inset: 0, background: 'linear-gradient(180deg, rgba(31,42,46,0.05) 0%, rgba(31,42,46,0.55) 100%)' },
  body: { padding: '48px 56px', display: 'flex', flexDirection: 'column' as const, gap: 18, justifyContent: 'center' },
  title: { fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(1.75rem, 2.6vw, 2.25rem)', lineHeight: 1.1, letterSpacing: '-0.018em', color: 'var(--ink-900)', margin: 0 },
  desc: { fontSize: 16.5, lineHeight: 1.6, color: 'var(--fg-2)', margin: 0, maxWidth: 480 },
  link: { display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600, color: 'var(--teal-700)', marginTop: 8 },
}

function ComplementoCard({ tag, title, desc, link, photo }: { tag: string, title: string, desc: string, link: string, photo: string }) {
  const [hover, setHover] = useState(false)
  return (
    <a href="#" style={{ ...compStyles.row, boxShadow: hover ? '0 8px 24px rgba(0,0,0,0.12)' : 'none', borderColor: hover ? 'var(--amber-500)' : 'var(--border-soft)' }} className="comp-row" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div style={{ ...compStyles.photo, backgroundImage: `url('${photo}'), #1E4218` }} className="comp-photo">
        <div style={compStyles.photoScrim}></div>

      </div>
      <div style={compStyles.body} className="comp-body">
        <h3 style={compStyles.title} className="comp-title">{title}</h3>
        <p style={compStyles.desc} className="comp-desc">{desc}</p>
        <span style={compStyles.link}>{link} →</span>
      </div>
    </a>
  )
}

export default function Complementares() {
  return (
    <section style={compStyles.wrap} id="complementos" className="complementares">
      <style>{`
        @media (max-width: 768px) {
          .complementares {
            padding-top: 56px !important;
            padding-bottom: 56px !important;
          }
          .complementares .comp-inner {
            padding: 0 20px !important;
            box-sizing: border-box;
            max-width: 100% !important;
          }
          .complementares .comp-row {
            grid-template-columns: 1fr !important;
            min-height: unset !important;
          }
          .complementares .comp-photo {
            min-height: unset !important;
            aspect-ratio: 16 / 9;
          }
          .complementares .comp-body {
            padding: 28px 24px 32px !important;
            gap: 12px !important;
          }
          .complementares .comp-title {
            font-size: 1.5rem !important;
          }
          .complementares .comp-desc {
            font-size: 15px !important;
          }
        }
      `}</style>
      <div style={compStyles.inner} className="comp-inner">
        <div style={compStyles.head}>
          <div style={compStyles.eyebrow}>COMPLEMENTOS</div>
          <h2 style={compStyles.h2}>Outras frentes que sustentam o trabalho.</h2>
          <p style={compStyles.sub}>Espaços que vivem junto com os projetos.</p>
        </div>
        <div style={compStyles.list}>
          <ComplementoCard tag="ECONOMIA SOLIDÁRIA" title="Brechó Solidário" desc="Vendas de roupas e itens doados que geram renda para os projetos e oferecem produtos acessíveis para a comunidade." link="Conhecer o Brechó" photo="/images/brecho.jpg" />
          <ComplementoCard tag="CULTURA" title="Biblioteca Comunitária" desc="Acervo aberto para crianças, jovens e famílias. Lugar de leitura, estudo e descoberta para todo o bairro." link="Conhecer a Biblioteca" photo="/images/biblioteca.jpg" />
        </div>
      </div>
    </section>
  )
}