const howStyles = {
  wrap: { background: 'var(--paper-200)', padding: '120px 0' },
  inner: { maxWidth: 'var(--container)', margin: '0 auto', padding: '0 32px' },
  head: { textAlign: 'left' as const, marginBottom: 72, display: 'flex', flexDirection: 'column' as const, alignItems: 'flex-start', gap: 16 },
  eyebrow: { fontSize: 12, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase' as const, color: 'var(--pine-700)' },
  h2: { fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', lineHeight: 1.04, letterSpacing: '-0.028em', color: 'var(--ink-900)', margin: 0, maxWidth: 760 },
  sub: { fontFamily: 'var(--font-serif)', fontStyle: 'italic' as const, color: 'var(--amber-500)', fontSize: 'clamp(1.05rem, 1.7vw, 1.35rem)', margin: 0, maxWidth: 620 },
  track: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, borderTop: '1px solid var(--border-soft)', borderBottom: '1px solid var(--border-soft)' },
  step: { padding: '40px 32px 44px', borderRight: '1px solid var(--border-soft)', display: 'flex', flexDirection: 'column' as const, gap: 14 },
  stepLast: { borderRight: 0 },
  numRow: { display: 'flex', alignItems: 'baseline', gap: 12 },
  num: { fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 44, lineHeight: 1, letterSpacing: '-0.03em', color: 'rgb(45, 104, 38)' },
  dot: { width: 6, height: 6, borderRadius: 999, background: 'var(--amber-500)', display: 'inline-block', transform: 'translateY(-6px)' },
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
          .how-it-works .hiw-inner {
            padding: 0 20px !important;
            box-sizing: border-box;
            max-width: 100% !important;
          }
          .how-it-works .hiw-track {
            grid-template-columns: 1fr !important;
            border-bottom: none !important;
          }
          .how-it-works .hiw-track > div {
            border-right: none !important;
            border-bottom: 1px solid var(--border-soft);
            padding: 28px 0 !important;
          }
          .how-it-works .hiw-track > div:last-child {
            border-bottom: none !important;
          }
        }
      `}</style>
      <div style={howStyles.inner} className="hiw-inner">
        <div style={howStyles.head}>
          <div style={howStyles.eyebrow}>COMO FUNCIONA</div>
          <h2 style={howStyles.h2}>Simples, humano e sem burocracia.</h2>
          <p style={howStyles.sub}>Do formulário ao tatame em poucos passos.</p>
        </div>
        <div style={howStyles.track} className="hiw-track">
          {STEPS.map((s, i) => (
            <div key={s.n} style={{ ...howStyles.step, ...(i === STEPS.length - 1 ? howStyles.stepLast : {}) }}>
              <div style={howStyles.numRow}>
                <span style={howStyles.num}>{s.n}</span>
                <span style={howStyles.dot}></span>
              </div>
              <h3 style={howStyles.title}>{s.t}</h3>
              <p style={howStyles.desc}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}