'use client'

import { useState } from 'react'

const grStyles = {
  wrap: { background: '#F3EFE7', padding: '24px 0 120px' },
  inner: { maxWidth: 'var(--container)', margin: '0 auto', padding: '0 32px' },
  head: { marginBottom: 64 },
  eyebrow: { fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'var(--pine-700)', marginBottom: 16 },
  h2: { fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(2.25rem, 4.4vw, 3.5rem)', lineHeight: 1.04, letterSpacing: '-0.025em', color: 'var(--ink-900)', margin: 0, maxWidth: 760 },
  sub: { fontFamily: 'var(--font-serif)', fontStyle: 'italic' as const, color: 'var(--amber-500)', fontSize: 'clamp(1.125rem, 1.6vw, 1.375rem)', lineHeight: 1.4, marginTop: 14, maxWidth: 600 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 },
  card: { background: 'var(--paper-100)', borderRadius: 8, overflow: 'hidden', border: '1px solid var(--border-soft)', transition: 'box-shadow 0.2s, transform 0.2s', cursor: 'pointer', textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' as const },
  band: { aspectRatio: '5/4', position: 'relative' as const, overflow: 'hidden', display: 'block' },
  bandPhoto: { position: 'absolute' as const, inset: 0, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.78, mixBlendMode: 'multiply' as const, transition: 'transform 600ms' },
  bandScrim: { position: 'absolute' as const, inset: 0, background: 'linear-gradient(180deg, rgba(31,42,46,0.05) 0%, rgba(31,42,46,0.55) 100%)' },
  cardNumber: { position: 'absolute' as const, top: 18, left: 22, fontFamily: 'var(--font-serif)', fontStyle: 'italic' as const, fontSize: 14, color: 'rgba(255,255,255,0.7)' },
  cardTag: { position: 'absolute' as const, top: 18, right: 22, fontSize: 10, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase' as const, color: '#fff', background: 'rgba(0,0,0,0.28)', padding: '5px 9px', borderRadius: 4 },
  cardBandTitle: { position: 'absolute' as const, left: 22, right: 22, bottom: 20, fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 32, lineHeight: 1.05, letterSpacing: '-0.018em', color: '#FAF8F4', margin: 0 },
  body: { padding: '26px 26px 28px', display: 'flex', flexDirection: 'column' as const, gap: 14, flex: 1 },
  desc: { fontSize: 15.5, lineHeight: 1.55, color: 'var(--fg-2)', margin: 0 },
  stats: { display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--pine-700)', fontWeight: 500, padding: '6px 0', borderTop: '1px solid var(--border-soft)', paddingTop: 14, marginTop: 'auto' as const },
  statsDot: { width: 4, height: 4, borderRadius: 999, background: 'var(--pine-300)' },
  link: { display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600, color: 'var(--teal-700)' },
}

const PROJECTS = [
  { n: '01', tag: 'ESPORTE', title: 'Judô', desc: 'Disciplina, respeito e autodefesa. O carro-chefe da OSRV desde os primeiros dias.', stats: '60+ crianças · 3x por semana', bg: 'linear-gradient(160deg, #4A9B3E 0%, #1E4218 100%)', photo: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&w=1200&q=80', id: 'judo' },
  { n: '02', tag: 'EDUCAÇÃO', title: 'Xadrez', desc: 'Raciocínio lógico, concentração e tomada de decisão estratégica.', stats: '40+ crianças · 2x por semana', bg: 'linear-gradient(160deg, #2E86AB 0%, #15445A 100%)', photo: 'https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&w=1200&q=80', id: 'xadrez' },
  { n: '03', tag: 'ESPORTE', title: 'Esportes Radicais', desc: 'Slackline, skate e escalada incentivam superação de limites e trabalho em equipe.', stats: '35+ crianças · 1x por semana', bg: 'linear-gradient(160deg, #BC7715 0%, #7A4A0F 100%)', photo: 'https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?auto=format&fit=crop&w=1200&q=80', id: 'radicais' },
  { n: '04', tag: 'EDUCAÇÃO', title: 'Alfabetização e letramento matemático', desc: 'Reforço escolar que fortalece as bases e abre portas para o conhecimento.', stats: '70+ crianças · 4x por semana', bg: 'linear-gradient(160deg, #D85A8B 0%, #5C2440 100%)', photo: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80', id: 'educacao' },
  { n: '05', tag: 'CUIDADO', title: 'Yoga', desc: 'Consciência corporal, respiração e equilíbrio emocional para crianças e adolescentes.', stats: '30+ crianças · 2x por semana', bg: 'linear-gradient(160deg, #7B5EA7 0%, #3F2E5C 100%)', photo: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80', id: 'yoga' },
  { n: '06', tag: 'CUIDADO', title: 'Acompanhamento psicológico', desc: 'Escuta individual e em grupo, em parceria com profissionais locais.', stats: '50+ crianças · agendamento contínuo', bg: 'linear-gradient(160deg, #E66060 0%, #5A1F1F 100%)', photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80', id: 'psicologia' },
]

type Project = typeof PROJECTS[0]

function ProjectHubCard({ p }: { p: Project }) {
  const [hover, setHover] = useState(false)
  const cardStyle = { ...grStyles.card, boxShadow: hover ? '0 8px 24px rgba(0,0,0,0.12)' : 'none', transform: hover ? 'translateY(-3px)' : 'translateY(0)', borderColor: hover ? 'var(--amber-500)' : 'var(--border-soft)' }
  const photoStyle = { ...grStyles.bandPhoto, backgroundImage: `url("${p.photo}"), ${p.bg}`, transform: hover ? 'scale(1.04)' : 'scale(1)' }
  return (
    <a href={`/programas-e-projetos#${p.id}`} style={cardStyle} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div style={grStyles.band}>
        <div style={photoStyle}></div>
        <div style={grStyles.bandScrim}></div>
        <span style={grStyles.cardNumber}>· {p.n}</span>
        <span style={grStyles.cardTag}>{p.tag}</span>
        <h3 style={grStyles.cardBandTitle}>{p.title}</h3>
      </div>
      <div style={grStyles.body}>
        <p style={grStyles.desc}>{p.desc}</p>
        <div style={grStyles.stats}><span style={grStyles.statsDot}></span>{p.stats}</div>
        <span style={grStyles.link}>Conhecer o projeto →</span>
      </div>
    </a>
  )
}

export default function ProjetosHub() {
  return (
    <section style={grStyles.wrap} id="projetos" className="projetos-hub">
      <style>{`
        @media (max-width: 768px) {
          .projetos-hub .ph-inner {
            padding: 0 20px !important;
            box-sizing: border-box;
            max-width: 100% !important;
          }
          .projetos-hub .ph-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
      <div style={grStyles.inner} className="ph-inner">
        <div style={grStyles.head}>
          <div style={grStyles.eyebrow}>NOSSOS PROJETOS</div>
          <h2 style={grStyles.h2}>Conheça cada um deles.</h2>
          <p style={grStyles.sub}>Clique para mergulhar fundo.</p>
        </div>
        <div style={grStyles.grid} className="ph-grid">
          {PROJECTS.map((p) => <ProjectHubCard key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  )
}