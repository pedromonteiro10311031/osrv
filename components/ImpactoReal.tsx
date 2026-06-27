const impStyles = {
  wrap: { background: 'var(--pine-900)', color: 'var(--paper-100)', padding: '120px 0' },
  inner: { maxWidth: 'var(--container)', margin: '0 auto', padding: '0 32px' },
  eyebrow: {
    fontSize: 12, fontWeight: 600, letterSpacing: '0.14em',
    textTransform: 'uppercase' as const, color: 'var(--amber-300)',
    marginBottom: 16,
  },
  h2: {
    fontFamily: 'var(--font-serif)',
    fontWeight: 400,
    fontSize: 'clamp(2.25rem, 4.4vw, 3.5rem)',
    lineHeight: 1.04,
    letterSpacing: '-0.025em',
    color: 'var(--paper-100)',
    margin: 0,
    maxWidth: 760,
  },
  sub: {
    fontFamily: 'var(--font-serif)',
    fontStyle: 'italic' as const,
    color: 'var(--amber-500)',
    fontSize: 'clamp(1.125rem, 1.6vw, 1.375rem)',
    lineHeight: 1.4,
    marginTop: 14,
    maxWidth: 640,
  },
  grid: {
    marginTop: 72,
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    borderTop: '1px solid rgba(255,255,255,0.16)',
    borderBottom: '1px solid rgba(255,255,255,0.16)',
  },
  stat: { padding: '40px 28px', borderLeft: '1px solid rgba(255,255,255,0.16)' },
  statFirst: { padding: '40px 28px 40px 0' },
  n: {
    fontFamily: 'var(--font-serif)',
    fontWeight: 500,
    fontSize: 'clamp(3rem, 5.4vw, 4.8rem)',
    lineHeight: 1,
    color: 'var(--amber-500)',
    letterSpacing: '-0.03em',
    margin: 0,
  },
  sup: { fontSize: '0.42em', color: 'var(--amber-300)', verticalAlign: 'top' as const, marginLeft: 4, fontWeight: 400 },
  lbl: { fontSize: 14, lineHeight: 1.55, color: 'rgba(250,248,244,0.78)', marginTop: 18, maxWidth: 220 },
  lblBold: { color: 'var(--paper-100)', fontWeight: 600 },
  foot: {
    marginTop: 28,
    fontSize: 13,
    color: 'rgba(250,248,244,0.55)',
    letterSpacing: '0.04em',
    display: 'inline-flex', alignItems: 'center', gap: 8,
  },
}

const stats = [
  ['250', '+', 'crianças e adolescentes', 'atendidos regularmente no contraturno.'],
  ['6', '', 'projetos ativos', 'no Jardim Renascer, todos os dias úteis.'],
  ['12', '+', 'anos de atuação', 'contínua, da fundação aos dias atuais.'],
  ['80', '+', 'famílias acompanhadas', 'integradas à rede de apoio OSRV.'],
]

export default function ImpactoReal() {
  return (
    <section style={impStyles.wrap} id="impacto" className="impacto-real">
      <style>{`
        @media (max-width: 768px) {
          .impacto-real .ir-inner {
            padding: 0 20px !important;
            box-sizing: border-box;
            max-width: 100% !important;
          }
          .impacto-real .ir-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .impacto-real .ir-grid > div {
            padding: 28px 16px !important;
            border-left: 1px solid rgba(255,255,255,0.16) !important;
          }
          .impacto-real .ir-grid > div:nth-child(odd) {
            border-left: none !important;
            padding-left: 0 !important;
          }
        }
      `}</style>
      <div style={impStyles.inner} className="ir-inner">
        <div style={impStyles.eyebrow}>IMPACTO REAL</div>
        <h2 style={impStyles.h2}>Por trás dos projetos, vidas transformadas.</h2>
        <p style={impStyles.sub}>Cada número é uma história.</p>
        <div style={impStyles.grid} className="ir-grid">
          {stats.map(([n, sup, bold, rest], i) => (
            <div key={n + bold} style={i === 0 ? { ...impStyles.stat, ...impStyles.statFirst } : impStyles.stat}>
              <p style={impStyles.n}>{n}{sup && <span style={impStyles.sup}>{sup}</span>}</p>
              <div style={impStyles.lbl}><b style={impStyles.lblBold}>{bold}</b> {rest}</div>
            </div>
          ))}
        </div>
        <div style={impStyles.foot}>📍 DADOS · MARÇO 2026</div>
      </div>
    </section>
  )
}