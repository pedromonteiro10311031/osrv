import Link from 'next/link'

const transpStyles = {
  wrap: { background: 'var(--paper-100)', padding: '120px 0 60px' },
  inner: { maxWidth: 'var(--container)', margin: '0 auto', padding: '0 32px' },
  header: { display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 60, alignItems: 'end', marginBottom: 48 },
  eyebrow: { fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'var(--pine-700)', marginBottom: 14 },
  h2: { fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(2rem, 3.4vw, 2.625rem)', lineHeight: 1.05, letterSpacing: '-0.025em', color: 'var(--ink-900)', margin: 0 },
  italic: { fontStyle: 'italic' as const, color: 'var(--pine-700)' },
  lead: { fontSize: 16, lineHeight: 1.65, color: 'var(--fg-2)', margin: 0, maxWidth: 460 },
  chartWrap: { background: '#fff', border: '1px solid var(--border-soft)', borderRadius: 12, padding: '40px 40px 36px' },
  bar: { display: 'flex', height: 22, borderRadius: 999, overflow: 'hidden', background: 'var(--paper-300)', marginBottom: 36 },
  seg: { height: '100%' },
  legend: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 28 },
  legendItem: { paddingTop: 18, borderTop: '1px solid var(--border-soft)', display: 'flex', flexDirection: 'column' as const, gap: 6 },
  legendBarStub: { width: 36, height: 4, borderRadius: 2, marginBottom: 6 },
  pct: { fontFamily: 'var(--font-serif)', fontSize: 40, fontWeight: 500, color: 'var(--ink-900)', letterSpacing: '-0.025em', lineHeight: 1 },
  pctSign: { fontSize: 24, color: 'var(--fg-3)', marginLeft: 2 },
  legendLabel: { fontSize: 14, fontWeight: 600, color: 'var(--ink-900)', marginTop: 4 },
  legendSub: { fontSize: 13, lineHeight: 1.5, color: 'var(--fg-2)' },
  footer: { marginTop: 36, paddingTop: 28, borderTop: '1px solid var(--border-soft)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' as const },
  footerLeft: { fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.55, maxWidth: 460 },
  footerStrong: { color: 'var(--ink-900)', fontWeight: 600 },
  reportLink: { display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--ink-900)', background: 'transparent', border: '1px solid var(--border-hard)', borderRadius: 999, padding: '11px 20px', fontSize: 14, fontWeight: 500, textDecoration: 'none', cursor: 'pointer' },
}

const SEGMENTS = [
  { pct: 60, label: 'Projetos sociais', sub: 'Judô, vôlei, xadrez, programação, reforço escolar, escuta psicológica.', color: 'var(--pine-500)' },
  { pct: 20, label: 'Manutenção do espaço', sub: 'Quadra, tatame, biblioteca, refeitório, energia e água.', color: 'var(--pine-300)' },
  { pct: 15, label: 'Alimentação', sub: 'Lanche reforçado servido todos os dias para 240+ crianças.', color: 'var(--teal-500)' },
  { pct: 5, label: 'Administrativo', sub: 'Equipe de gestão, contabilidade, prestação de contas.', color: 'var(--ink-300)' },
]

export default function ParaOndeVai() {
  return (
    <section id="transparencia" style={transpStyles.wrap} className="para-onde-vai">
      <style>{`
        @media (max-width: 768px) {
          .para-onde-vai {
            padding-top: 56px !important;
            padding-bottom: 28px !important;
          }
          .para-onde-vai .pov-inner {
            padding: 0 20px !important;
            box-sizing: border-box;
            max-width: 100% !important;
          }
          .para-onde-vai .pov-header {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .para-onde-vai .pov-chart {
            padding: 28px 20px 24px !important;
            box-sizing: border-box;
          }
          .para-onde-vai .pov-bar {
            max-width: 100% !important;
          }
          .para-onde-vai .pov-bar {
            height: 14px !important;
          }
          .para-onde-vai .pov-legend {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
          }
          .para-onde-vai .pov-legend-item {
            flex-direction: row !important;
            align-items: flex-start !important;
            gap: 12px !important;
            padding-top: 14px !important;
          }
          .para-onde-vai .pov-legend-left {
            flex-shrink: 0 !important;
          }
          .para-onde-vai .pov-bar-stub {
            width: 24px !important;
            height: 3px !important;
          }
          .para-onde-vai .pov-pct {
            font-size: 1.75rem !important;
          }
          .para-onde-vai .pov-pct-sign {
            font-size: 1rem !important;
          }
          .para-onde-vai .pov-legend-label {
            font-size: 0.9rem !important;
          }
          .para-onde-vai .pov-legend-sub {
            font-size: 0.8rem !important;
            line-height: 1.4 !important;
          }
          .para-onde-vai .pov-report-link {
            padding: 10px 18px !important;
            font-size: 0.875rem !important;
          }
        }
      `}</style>
      <div style={transpStyles.inner} className="pov-inner">
        <div style={transpStyles.header} className="pov-header">
          <div>
            <div style={transpStyles.eyebrow}>TRANSPARÊNCIA · ONDE VAI O DINHEIRO</div>
            <h2 style={transpStyles.h2}>
              Cada real é rastreado.<br/>
              <span style={transpStyles.italic}>A gente abre os números.</span>
            </h2>
          </div>
          <p style={transpStyles.lead}>
            Esta é a destinação média da OSRV nos últimos três anos. Auditoria externa, balanço anual público, e o detalhamento mês a mês fica disponível para download.
          </p>
        </div>
        <div style={transpStyles.chartWrap} className="pov-chart">
          <div style={transpStyles.bar} role="img" aria-label="Destinação dos recursos" className="pov-bar">
            {SEGMENTS.map((s) => (
              <div key={s.label} style={{ ...transpStyles.seg, flex: s.pct, background: s.color }} />
            ))}
          </div>
          <div style={transpStyles.legend} className="pov-legend">
            {SEGMENTS.map((s) => (
              <div key={s.label} style={transpStyles.legendItem} className="pov-legend-item">
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }} className="pov-legend-left">
                  <div style={{ ...transpStyles.legendBarStub, background: s.color }} className="pov-bar-stub" />
                  <div>
                    <span style={transpStyles.pct} className="pov-pct">{s.pct}</span>
                    <span style={transpStyles.pctSign} className="pov-pct-sign">%</span>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }} className="pov-legend-right">
                  <div style={transpStyles.legendLabel} className="pov-legend-label">{s.label}</div>
                  <div style={transpStyles.legendSub} className="pov-legend-sub">{s.sub}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={transpStyles.footer}>
            <div style={transpStyles.footerLeft}>
              <span style={transpStyles.footerStrong}>Cada real é rastreado.</span>{' '}
              Veja nossos relatórios financeiros completos, auditados e publicados todo ano.
            </div>
            <Link href="/transparencia" style={transpStyles.reportLink} className="pov-report-link">
              🛡 Ver relatórios →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}