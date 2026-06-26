const statsStyles = {
  wrap: {
    maxWidth: 'var(--container)',
    margin: '0 auto',
    padding: '96px 32px',
  },
  eyebrow: {
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '0.14em',
    textTransform: 'uppercase' as const,
    color: 'var(--pine-700)',
    marginBottom: 14,
  },
  intro: {
    fontFamily: 'var(--font-serif)',
    fontWeight: 400,
    fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
    lineHeight: 1.1,
    letterSpacing: '-0.02em',
    color: 'var(--ink-900)',
    maxWidth: 780,
    marginBottom: 64,
  },
  italic: { fontStyle: 'italic' as const, color: 'var(--pine-700)' },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    borderTop: '1px solid var(--border-soft)',
    borderBottom: '1px solid var(--border-soft)',
  },
  stat: { padding: '32px 20px' },
  statBordered: { borderLeft: '1px solid var(--border-soft)' },
  n: {
    fontFamily: 'var(--font-serif)',
    fontWeight: 500,
    fontSize: 'clamp(2.75rem, 4.6vw, 4rem)',
    lineHeight: 1,
    color: 'var(--pine-700)',
    letterSpacing: '-0.03em',
    margin: 0,
  },
  sup: { fontSize: '0.35em', color: 'var(--pine-500)', verticalAlign: 'top' as const, marginLeft: 4 },
  lbl: {
    fontSize: 15,
    lineHeight: 1.5,
    color: 'var(--ink-700)',
    marginTop: 16,
    maxWidth: 240,
  },
  lblStrong: { color: 'var(--ink-900)', fontWeight: 600 },
}

export default function ImpactStats() {
  return (
    <section style={statsStyles.wrap} className="impact-stats">
      <style>{`
        @media (max-width: 768px) {
          .impact-stats {
            padding: 64px 20px !important;
            box-sizing: border-box;
            max-width: 100% !important;
          }
          .impact-stats .impact-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .impact-stats .impact-stat-bordered {
            border-left: none !important;
          }
          .impact-stats .impact-stat-bordered:nth-child(odd) {
            border-left: 1px solid var(--border-soft) !important;
          }
        }
      `}</style>
      <div style={statsStyles.eyebrow}>NOSSO IMPACTO</div>
      <h2 style={statsStyles.intro}>
        Doze anos atendendo o Jardim Renascer.
        <span style={statsStyles.italic}> Números que têm nome, rosto e terça-feira à tarde.</span>
      </h2>
      <div style={statsStyles.grid} className="impact-grid">
        <div style={statsStyles.stat}>
          <p style={statsStyles.n}>250<span style={statsStyles.sup}>+</span></p>
          <div style={statsStyles.lbl}>
            <b style={statsStyles.lblStrong}>crianças e adolescentes</b>{' '}
            atendidos no contraturno escolar
          </div>
        </div>
        <div style={{ ...statsStyles.stat, ...statsStyles.statBordered }} className="impact-stat-bordered">
          <p style={statsStyles.n}>12</p>
          <div style={statsStyles.lbl}>
            <b style={statsStyles.lblStrong}>anos</b> de atuação contínua no
            Jardim Renascer, Cuiabá / MT
          </div>
        </div>
        <div style={{ ...statsStyles.stat, ...statsStyles.statBordered }} className="impact-stat-bordered">
          <p style={statsStyles.n}>6</p>
          <div style={statsStyles.lbl}>
            <b style={statsStyles.lblStrong}>projetos ativos</b> — judô, xadrez,
            esportes radicais, yoga, reforço e psicologia
          </div>
        </div>
        <div style={{ ...statsStyles.stat, ...statsStyles.statBordered }} className="impact-stat-bordered">
          <p style={statsStyles.n}>80<span style={statsStyles.sup}>+</span></p>
          <div style={statsStyles.lbl}>
            <b style={statsStyles.lblStrong}>famílias</b> apoiadas, das casas
            ao tatame e de volta para casa
          </div>
        </div>
      </div>
    </section>
  )
}