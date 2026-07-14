const howStyles = {
  wrap: { background: 'var(--paper-200)', padding: '120px 0 60px' },
  inner: { maxWidth: 'var(--container)', margin: '0 auto', padding: '0 32px' },
  head: { textAlign: 'left' as const, marginBottom: 72, display: 'flex', flexDirection: 'column' as const, alignItems: 'flex-start', gap: 16 },
  eyebrow: { fontSize: 12, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase' as const, color: 'var(--pine-700)' },
  h2: { fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', lineHeight: 1.04, letterSpacing: '-0.028em', color: 'var(--ink-900)', margin: 0, maxWidth: 760 },
  sub: { fontFamily: 'var(--font-serif)', fontStyle: 'italic' as const, color: 'var(--amber-500)', fontSize: 'clamp(1.05rem, 1.7vw, 1.35rem)', margin: 0, maxWidth: 620 },
  row: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, position: 'relative' as const },
  connector: { position: 'absolute' as const, top: 27.5, left: 28, right: 'calc(25% - 28px)', height: 1, background: 'var(--border-soft)', zIndex: 0 },
  step: { position: 'relative' as const, zIndex: 1, padding: '0 18px 0 0', display: 'flex', flexDirection: 'column' as const, gap: 18 },
  numWrap: { width: 56, height: 56, borderRadius: 999, background: 'var(--paper-200)', border: '1px solid var(--border-soft)', color: 'var(--pine-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-serif)', fontStyle: 'italic' as const, fontWeight: 500, fontSize: 22 },
  numLast: { background: 'var(--amber-500)', color: '#fff', border: '1px solid var(--amber-500)' },
  title: { fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 22, lineHeight: 1.18, letterSpacing: '-0.018em', color: 'var(--ink-900)', margin: '4px 0 0' },
  desc: { fontSize: 15, lineHeight: 1.6, color: 'var(--fg-2)', margin: 0 },
}

const STEPS = [
  { n: '01', t: 'Preencha o formulário', d: 'Conta um pouco sobre você, suas habilidades e disponibilidade.' },
  { n: '02', t: 'Bate-papo informal', d: 'A gente entra em contato para uma conversa rápida e descontraída.' },
  { n: '03', t: 'Primeira visita', d: 'Você conhece a OSRV, os projetos e as crianças pessoalmente.' },
  { n: '04', t: 'Começa a transformar', d: 'Com agenda combinada, você passa a fazer parte da nossa rotina.' },
]

export default function HowItWorks() {
  return (
    <section style={howStyles.wrap} className="how-it-works">
      <style>{`
        @media (max-width: 768px) {
          .how-it-works {
            padding-top: 56px !important;
            padding-bottom: 28px !important;
          }
          .how-it-works .hiw-inner {
            padding: 0 20px !important;
            box-sizing: border-box;
            max-width: 100% !important;
          }
          .how-it-works .hiw-row {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .how-it-works .hiw-connector {
            display: none !important;
          }
          .how-it-works .hiw-row > div {
            padding: 0 !important;
          }
          .how-it-works .hiw-eyebrow {
            font-size: 9px !important;
            letter-spacing: 0.12em !important;
          }
        }
      `}</style>
      <div style={howStyles.inner} className="hiw-inner">
        <div style={howStyles.head}>
          <div style={howStyles.eyebrow} className="hiw-eyebrow">COMO FUNCIONA</div>
          <h2 style={howStyles.h2}>Simples, humano e sem burocracia.</h2>
          <p style={howStyles.sub}>Do formulário ao tatame em poucos passos.</p>
        </div>
        <div style={howStyles.row} className="hiw-row">
          <span style={howStyles.connector} className="hiw-connector"></span>
          {STEPS.map((s, i) => (
            <div key={s.n} style={howStyles.step}>
              <span style={{ ...howStyles.numWrap, ...(i === STEPS.length - 1 ? howStyles.numLast : {}) }}>
                {s.n}
              </span>
              <h3 style={howStyles.title}>{s.t}</h3>
              <p style={howStyles.desc}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
