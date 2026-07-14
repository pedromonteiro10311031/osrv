const paStyles = {
  wrap: { background: 'var(--paper-100)', padding: '120px 0' },
  inner: { maxWidth: 'var(--container)', margin: '0 auto', padding: '0 32px' },
  head: { maxWidth: 780, marginBottom: 64 },
  eyebrow: { fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'var(--pine-700)', marginBottom: 18 },
  h2: { fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.04, letterSpacing: '-0.025em', color: 'var(--ink-900)', margin: '0 0 18px' },
  sub: { fontFamily: 'var(--font-serif)', fontStyle: 'italic' as const, fontWeight: 400, fontSize: 'clamp(1.25rem, 2.2vw, 1.6rem)', lineHeight: 1.35, color: 'var(--amber-500)', margin: 0, maxWidth: 620 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 1, background: 'var(--border-soft)', border: '1px solid var(--border-soft)', borderRadius: 12, overflow: 'hidden', marginBottom: 88 },
  cell: { background: 'var(--paper-200)', padding: '44px 18px', minHeight: 132, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' as const, gap: 8, color: 'var(--fg-3)' },
  cellMark: { width: 44, height: 44, borderRadius: 6, background: 'rgba(31, 42, 46, 0.08)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--fg-3)', fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 16 },
  cellLabel: { fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'var(--fg-3)' },
  quoteWrap: { display: 'grid', gridTemplateColumns: '60px 1fr', gap: 32, maxWidth: 920, margin: '0 auto', paddingTop: 16 },
  quoteIcon: { color: 'var(--amber-500)', fontFamily: 'var(--font-serif)', fontStyle: 'italic' as const, fontWeight: 400, fontSize: 96, lineHeight: 0.7, paddingTop: 6, flex: 'none' as const },
  blockquote: { margin: 0, padding: 0 },
  quoteText: { fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(1.4rem, 2.4vw, 1.875rem)', lineHeight: 1.35, letterSpacing: '-0.015em', color: 'var(--ink-900)', margin: '0 0 24px' },
  cite: { display: 'block', fontStyle: 'normal' as const, fontSize: 14, fontWeight: 500, color: 'var(--ink-700)', letterSpacing: '0.02em' },
  citeMute: { color: 'var(--fg-3)', fontWeight: 400 },
}

export default function ParceiroAtuais() {
  return (
    <section id="parceiros-atuais" style={paStyles.wrap} className="parceiro-atuais">
      <style>{`
        @media (max-width: 768px) {
          .parceiro-atuais {
            padding-top: 56px !important;
            padding-bottom: 56px !important;
          }
        }
      `}</style>
      <div style={paStyles.inner}>
        <div style={paStyles.head}>
          <div style={paStyles.eyebrow}>QUEM JÁ FAZ PARTE</div>
          <h2 style={paStyles.h2}>Empresas que acreditam no Jardim Renascer.</h2>
          <p style={paStyles.sub}>Cada logo aqui representa crianças com mais oportunidades.</p>
        </div>
        <div style={paStyles.grid}>
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} style={paStyles.cell}>
              <span style={paStyles.cellMark}>L{n}</span>
              <span style={paStyles.cellLabel}>Parceiro {String(n).padStart(2, '0')}</span>
            </div>
          ))}
        </div>
        <div style={paStyles.quoteWrap}>
          <div style={paStyles.quoteIcon}>"</div>
          <blockquote style={paStyles.blockquote}>
            <p style={paStyles.quoteText}>
              A parceria com a OSRV foi uma das decisões mais significativas que tomamos como empresa. Ver o impacto direto na comunidade mudou como nossa equipe enxerga responsabilidade social.
            </p>
            <cite style={paStyles.cite}>
              [Nome], [Cargo]&nbsp;
              <span style={paStyles.citeMute}>· [Empresa parceira]</span>
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  )
}