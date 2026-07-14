const cfStyles = {
  wrap: { background: 'var(--paper-100)', padding: '120px 0 60px' },
  inner: { maxWidth: 'var(--container)', margin: '0 auto', padding: '0 32px' },
  head: { maxWidth: 780, marginBottom: 72 },
  eyebrow: { fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'var(--pine-700)', marginBottom: 18 },
  h2: { fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.04, letterSpacing: '-0.025em', color: 'var(--ink-900)', margin: '0 0 18px' },
  sub: { fontFamily: 'var(--font-serif)', fontStyle: 'italic' as const, fontWeight: 400, fontSize: 'clamp(1.25rem, 2.2vw, 1.6rem)', lineHeight: 1.35, color: 'var(--amber-500)', margin: 0, maxWidth: 600 },
  row: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, position: 'relative' as const },
  connector: { position: 'absolute' as const, top: 27.5, left: 28, right: 'calc(25% - 28px)', height: 1, background: 'var(--border-soft)', zIndex: 0 },
  step: { position: 'relative' as const, zIndex: 1, padding: '0 18px 0 0', display: 'flex', flexDirection: 'column' as const, gap: 18 },
  numWrap: { width: 56, height: 56, borderRadius: 999, background: 'var(--paper-100)', border: '1px solid var(--border-soft)', color: 'var(--pine-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-serif)', fontStyle: 'italic' as const, fontWeight: 500, fontSize: 22 },
  numLast: { background: 'var(--amber-500)', color: '#fff', border: '1px solid var(--amber-500)' },
  title: { fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 22, lineHeight: 1.2, letterSpacing: '-0.015em', color: 'var(--ink-900)', margin: 0, maxWidth: 240 },
  body: { fontSize: 15, lineHeight: 1.6, color: 'var(--fg-2)', margin: 0, maxWidth: 260 },
}

const STEPS = [
  { num: '01', title: 'Primeiro contato', body: 'Você preenche o formulário ou nos chama no WhatsApp. A gente responde em até 24h.' },
  { num: '02', title: 'Apresentação da OSRV', body: 'Agendamos uma visita ou videochamada para mostrar os projetos, números e necessidades reais.' },
  { num: '03', title: 'Proposta personalizada', body: 'Montamos juntos o modelo de parceria que faz mais sentido para sua empresa e para a comunidade.' },
  { num: '04', title: 'Parceria ativa', body: 'Com tudo formalizado, sua empresa passa a fazer parte da história da OSRV — com relatórios e reconhecimento.' },
]

export default function ParceiroComoFunciona() {
  return (
    <section style={cfStyles.wrap} className="parceiro-como-funciona">
      <style>{`
        @media (max-width: 768px) {
          .parceiro-como-funciona {
            padding-top: 56px !important;
            padding-bottom: 28px !important;
          }
          .parceiro-como-funciona .pcf-inner {
            padding: 0 20px !important;
            box-sizing: border-box;
            max-width: 100% !important;
          }
          .parceiro-como-funciona .pcf-row {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .parceiro-como-funciona .pcf-connector {
            display: none !important;
          }
          .parceiro-como-funciona .pcf-row > div {
            padding: 0 !important;
          }
          .parceiro-como-funciona .pcf-eyebrow {
            font-size: 9px !important;
            letter-spacing: 0.12em !important;
          }
        }
      `}</style>
      <div style={cfStyles.inner} className="pcf-inner">
        <div style={cfStyles.head}>
          <div style={cfStyles.eyebrow} className="pcf-eyebrow">COMO FUNCIONA</div>
          <h2 style={cfStyles.h2}>Do primeiro contato à parceria ativa.</h2>
          <p style={cfStyles.sub}>Simples, transparente e sem burocracia.</p>
        </div>
        <div style={cfStyles.row} className="pcf-row">
          <span style={cfStyles.connector} className="pcf-connector"></span>
          {STEPS.map((s, i) => (
            <div key={i} style={cfStyles.step}>
              <span style={{ ...cfStyles.numWrap, ...(i === STEPS.length - 1 ? cfStyles.numLast : {}) }}>
                {s.num}
              </span>
              <h3 style={cfStyles.title}>{s.title}</h3>
              <p style={cfStyles.body}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}