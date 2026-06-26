'use client'

import { useState } from 'react'

const fazerStyles = {
  wrap: { background: 'var(--pine-900)', color: '#FAF8F4', padding: '112px 0', position: 'relative' as const, overflow: 'hidden' },
  glow: { position: 'absolute' as const, right: '-20%', bottom: '-30%', width: 720, height: 720, borderRadius: '50%', background: 'radial-gradient(circle, rgba(243,156,42,0.12) 0%, transparent 60%)', pointerEvents: 'none' as const },
  inner: { maxWidth: 'var(--container)', margin: '0 auto', padding: '0 32px', position: 'relative' as const },
  head: { marginBottom: 56, maxWidth: 920 },
  eyebrow: { fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'var(--amber-300)', marginBottom: 18 },
  h2: { fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(2.25rem, 4.4vw, 3.75rem)', lineHeight: 1.04, letterSpacing: '-0.03em', color: '#FAF8F4', margin: 0 },
  italic: { fontFamily: 'var(--font-serif)', fontStyle: 'italic' as const, color: 'var(--amber-500)', display: 'block', marginTop: 10, fontSize: 'clamp(1.4rem, 2.4vw, 2rem)', lineHeight: 1.15 },
  intro: { fontSize: 17, lineHeight: 1.55, color: 'rgba(250,248,244,0.78)', marginTop: 24, maxWidth: 620 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 },
  card: { background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 8, padding: '22px 22px 24px', display: 'flex', flexDirection: 'column' as const, gap: 12, transition: 'all 0.2s' },
  iconWrap: { width: 32, height: 32, borderRadius: 999, background: 'rgba(243,156,42,0.16)', color: 'var(--amber-300)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: 'none' as const, fontSize: 16 },
  cardNum: { fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', color: 'rgba(250,248,244,0.5)' },
  cardHead: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  cardTitle: { fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 18, lineHeight: 1.2, letterSpacing: '-0.015em', color: '#FAF8F4', margin: 0 },
  cardDesc: { fontSize: 14, lineHeight: 1.5, color: 'rgba(250,248,244,0.72)', margin: 0 },
}

const PROGRAMAS = [
  { n: '01', icon: '📖', title: 'Alfabetização e letramento matemático', desc: 'Fortalecem as bases educacionais e abrem portas para o conhecimento.' },
  { n: '02', icon: '♟', title: 'Xadrez', desc: 'Estimula o raciocínio lógico, a concentração e a tomada de decisões.' },
  { n: '03', icon: '🥋', title: 'Judô', desc: 'Ensina disciplina, respeito e autodefesa, além de promover saúde física e mental.' },
  { n: '04', icon: '🏔', title: 'Esportes radicais', desc: 'Slackline, skate e escalada incentivam superação de limites e trabalho em equipe.' },
  { n: '05', icon: '🍳', title: 'Culinária e artesanato', desc: 'Desenvolvem criatividade, coordenação motora e podem ser fonte de renda.' },
  { n: '06', icon: '💬', title: 'Acompanhamento psicológico', desc: 'Cuidado emocional individual e em grupo.' },
]

type Programa = typeof PROGRAMAS[0]

function ProgCard({ p }: { p: Programa }) {
  const [hover, setHover] = useState(false)
  return (
    <div style={{ ...fazerStyles.card, background: hover ? 'rgba(255,255,255,0.11)' : 'rgba(255,255,255,0.07)', borderColor: hover ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.12)', transform: hover ? 'translateY(-2px)' : 'translateY(0)' }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div style={fazerStyles.cardHead}>
        <span style={fazerStyles.iconWrap}>{p.icon}</span>
        <span style={fazerStyles.cardNum}>{p.n}</span>
      </div>
      <h3 style={fazerStyles.cardTitle}>{p.title}</h3>
      <p style={fazerStyles.cardDesc}>{p.desc}</p>
    </div>
  )
}

export default function OQueFazemos() {
  return (
    <section id="o-que-fazemos" style={fazerStyles.wrap} className="o-que-fazemos">
      <style>{`
        @media (max-width: 768px) {
          .o-que-fazemos .oqf-inner {
            padding: 0 20px !important;
            box-sizing: border-box;
            max-width: 100% !important;
          }
          .o-que-fazemos .oqf-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      <div style={fazerStyles.glow}></div>
      <div style={fazerStyles.inner} className="oqf-inner">
        <div style={fazerStyles.head}>
          <div style={fazerStyles.eyebrow}>O que fazemos</div>
          <h2 style={fazerStyles.h2}>
            Educação, esporte, arte e cuidado.
            <span style={fazerStyles.italic}>Tudo junto, todo dia.</span>
          </h2>
          <p style={fazerStyles.intro}>
            Oferecemos uma gama de atividades que promovem o desenvolvimento integral dos nossos atendidos — da educação básica à formação de cidadãos engajados e conscientes.
          </p>
        </div>
        <div style={fazerStyles.grid} className="oqf-grid">
          {PROGRAMAS.map((p) => <ProgCard key={p.n} p={p} />)}
        </div>
      </div>
    </section>
  )
}