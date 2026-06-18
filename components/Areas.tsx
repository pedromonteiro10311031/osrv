'use client'

import { useState } from 'react'

const areasStyles = {
  wrap: { background: 'var(--pine-900)', padding: '120px 0', color: 'var(--paper-100)' },
  inner: { maxWidth: 'var(--container)', margin: '0 auto', padding: '0 32px' },
  head: { textAlign: 'left' as const, marginBottom: 72, display: 'flex', flexDirection: 'column' as const, alignItems: 'flex-start', gap: 16 },
  eyebrow: { fontSize: 12, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase' as const, color: 'var(--amber-300)' },
  h2: { fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', lineHeight: 1.04, letterSpacing: '-0.028em', color: 'var(--paper-100)', margin: 0, maxWidth: 760 },
  sub: { fontFamily: 'var(--font-serif)', fontStyle: 'italic' as const, color: 'var(--amber-500)', fontSize: 'clamp(1.05rem, 1.7vw, 1.35rem)', margin: 0, maxWidth: 620 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 },
  card: { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 8, padding: '28px 26px', display: 'flex', flexDirection: 'column' as const, gap: 14, transition: 'all 0.2s', cursor: 'default' },
  iconRow: { display: 'flex', alignItems: 'center', gap: 14 },
  iconBubble: { width: 44, height: 44, borderRadius: 999, background: 'rgba(243, 156, 42, 0.14)', color: 'var(--amber-300)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: 'none' as const, fontSize: 20 },
  num: { fontFamily: 'var(--font-serif)', fontStyle: 'italic' as const, fontSize: 13, color: 'rgba(250, 248, 244, 0.4)' },
  title: { fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 21, lineHeight: 1.2, letterSpacing: '-0.018em', color: 'var(--paper-100)', margin: 0 },
  desc: { fontSize: 15, lineHeight: 1.55, color: 'rgba(250, 248, 244, 0.7)', margin: 0 },
}

const AREAS = [
  { id: 1, icon: '📖', title: 'Ensino e reforço escolar', desc: 'Apoio a crianças em matemática, português e letramento.' },
  { id: 2, icon: '🏅', title: 'Esporte e movimento', desc: 'Auxílio nos projetos de judô, xadrez e esportes radicais.' },
  { id: 3, icon: '📷', title: 'Comunicação e redes sociais', desc: 'Produção de conteúdo, fotografia, vídeo e gestão do Instagram.' },
  { id: 4, icon: '📅', title: 'Eventos e ações sociais', desc: 'Organização e apoio em campanhas, bazares e eventos comunitários.' },
  { id: 5, icon: '🌿', title: 'Saúde e bem-estar', desc: 'Apoio nas aulas de yoga e atividades de cuidado emocional.' },
  { id: 6, icon: '💼', title: 'Apoio administrativo', desc: 'Gestão, captação de recursos, financeiro e documentação.' },
]

type Area = typeof AREAS[0]

function AreaCard({ a }: { a: Area }) {
  const [hover, setHover] = useState(false)
  const num = String(a.id).padStart(2, '0')
  return (
    <article
      style={{ ...areasStyles.card, background: hover ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.04)', borderColor: hover ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.10)', transform: hover ? 'translateY(-2px)' : 'translateY(0)' }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={areasStyles.iconRow}>
        <span style={areasStyles.iconBubble}>{a.icon}</span>
        <span style={areasStyles.num}>— {num}</span>
      </div>
      <h3 style={areasStyles.title}>{a.title}</h3>
      <p style={areasStyles.desc}>{a.desc}</p>
    </article>
  )
}

export default function Areas() {
  return (
    <section id="areas" style={areasStyles.wrap}>
      <div style={areasStyles.inner}>
        <div style={areasStyles.head}>
          <div style={areasStyles.eyebrow}>ONDE VOCÊ PODE ATUAR</div>
          <h2 style={areasStyles.h2}>Tem espaço para o seu talento.</h2>
          <p style={areasStyles.sub}>Qualquer habilidade é bem-vinda.</p>
        </div>
        <div style={areasStyles.grid}>
          {AREAS.map((a) => <AreaCard key={a.id} a={a} />)}
        </div>
      </div>
    </section>
  )
}