'use client'

const pqStyles = {
  wrap: { background: 'var(--paper-100)', padding: '120px 0 96px' },
  inner: { maxWidth: 'var(--container)', margin: '0 auto', padding: '0 32px' },
  head: { maxWidth: 760, marginBottom: 64 },
  eyebrow: { fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'var(--pine-700)', marginBottom: 18 },
  h2: { fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.04, letterSpacing: '-0.025em', color: 'var(--ink-900)', margin: '0 0 18px' },
  sub: { fontFamily: 'var(--font-serif)', fontStyle: 'italic' as const, fontWeight: 400, fontSize: 'clamp(1.25rem, 2.2vw, 1.6rem)', lineHeight: 1.35, color: 'var(--amber-500)', margin: 0, maxWidth: 600 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 },
  card: { background: '#FFFFFF', border: '1px solid var(--border-soft)', borderRadius: 12, padding: '40px 32px 36px', display: 'flex', flexDirection: 'column' as const, gap: 18, transition: 'border-color 0.2s' },
  iconWrap: { width: 52, height: 52, borderRadius: 999, background: 'var(--pine-100)', color: 'var(--pine-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: 'none' as const, fontSize: 24 },
  cardH: { fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 24, lineHeight: 1.2, letterSpacing: '-0.015em', color: 'var(--ink-900)', margin: 0 },
  cardP: { fontSize: 16, lineHeight: 1.6, color: 'var(--fg-2)', margin: 0 },
  rule: { width: 32, height: 2, background: 'var(--amber-500)', marginTop: 4 },
}

const cards = [
  { icon: '📄', title: 'Impacto documentado', body: 'Relatórios periódicos com dados reais de atendimento, fotos e histórias. Você sabe exatamente onde seu investimento chega.' },
  { icon: '👁', title: 'Visibilidade com propósito', body: 'Sua marca associada a uma causa genuína, reconhecida pela comunidade e por outras empresas parceiras.' },
  { icon: '🛡', title: 'Incentivos fiscais', body: 'Empresas podem deduzir doações no Imposto de Renda conforme legislação vigente. Nossa equipe orienta o processo.' },
]

export default function ParceiroPorQue() {
  return (
    <section id="beneficios" style={pqStyles.wrap}>
      <div style={pqStyles.inner}>
        <div style={pqStyles.head}>
          <div style={pqStyles.eyebrow}>POR QUE PARCERIA</div>
          <h2 style={pqStyles.h2}>Mais que responsabilidade social.</h2>
          <p style={pqStyles.sub}>Uma parceria que transforma dos dois lados.</p>
        </div>
        <div style={pqStyles.grid}>
          {cards.map((c, i) => (
            <article key={i} style={pqStyles.card}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--pine-300)' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-soft)' }}
            >
              <span style={pqStyles.iconWrap}>{c.icon}</span>
              <h3 style={pqStyles.cardH}>{c.title}</h3>
              <span style={pqStyles.rule}></span>
              <p style={pqStyles.cardP}>{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}