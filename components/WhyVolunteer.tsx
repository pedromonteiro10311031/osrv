const whyStyles = {
  wrap: { background: 'var(--paper-100)', padding: '120px 0' },
  inner: { maxWidth: 'var(--container)', margin: '0 auto', padding: '0 32px' },
  head: { textAlign: 'left' as const, marginBottom: 72, display: 'flex', flexDirection: 'column' as const, alignItems: 'flex-start', gap: 16 },
  eyebrow: { fontSize: 12, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase' as const, color: 'var(--pine-700)' },
  h2: { fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', lineHeight: 1.04, letterSpacing: '-0.028em', color: 'var(--ink-900)', margin: 0, maxWidth: 760 },
  sub: { fontFamily: 'var(--font-serif)', fontStyle: 'italic' as const, color: 'var(--amber-500)', fontSize: 'clamp(1.05rem, 1.7vw, 1.35rem)', margin: 0, maxWidth: 620 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 },
  card: { background: 'var(--paper-50)', borderRadius: 8, padding: '40px 32px', border: '1px solid var(--border-soft)', display: 'flex', flexDirection: 'column' as const, gap: 18 },
  iconWrap: { width: 56, height: 56, borderRadius: 999, background: 'rgb(227, 240, 223)', color: 'var(--pine-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 6 },
  cardTitle: { fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 24, lineHeight: 1.18, letterSpacing: '-0.018em', color: 'var(--ink-900)', margin: 0 },
  cardDesc: { fontSize: 16, lineHeight: 1.6, color: 'var(--fg-2)', margin: 0 },
}

const WHY_CARDS = [
  { icon: '📈', title: 'Impacto real e mensurável', desc: 'Você acompanha de perto as mudanças que provoca. Aqui não é só "ajudar" — é construir junto.' },
  { icon: '👥', title: 'Comunidade que acolhe', desc: 'Nossos voluntários viram parte da família da OSRV. A troca vai muito além do que você veio oferecer.' },
  { icon: '✨', title: 'Experiência que transforma', desc: 'Quem entra como voluntário sai diferente. É isso que nossos ex-voluntários dizem, sem exceção.' },
]

export default function WhyVolunteer() {
  return (
    <section style={whyStyles.wrap} className="why-volunteer">
      <style>{`
        @media (max-width: 768px) {
          .why-volunteer .wv-inner {
            padding: 0 20px !important;
            box-sizing: border-box;
            max-width: 100% !important;
          }
          .why-volunteer .wv-grid {
            grid-template-columns: 1fr !important;
          }
          .why-volunteer .wv-eyebrow {
            font-size: 9px !important;
            letter-spacing: 0.12em !important;
          }
        }
      `}</style>
      <div style={whyStyles.inner} className="wv-inner">
        <div style={whyStyles.head}>
          <div style={whyStyles.eyebrow} className="wv-eyebrow">POR QUE VOLUNTARIAR</div>
          <h2 style={whyStyles.h2}>Seu tempo vale mais do que você imagina.</h2>
          <p style={whyStyles.sub}>E a gente prova isso todo dia.</p>
        </div>
        <div style={whyStyles.grid} className="wv-grid">
          {WHY_CARDS.map((c) => (
            <article key={c.title} style={whyStyles.card}>
              <span style={whyStyles.iconWrap}>{c.icon}</span>
              <h3 style={whyStyles.cardTitle}>{c.title}</h3>
              <p style={whyStyles.cardDesc}>{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}