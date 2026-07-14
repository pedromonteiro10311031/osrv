'use client'
const impactStyles = {
  wrap: { background: '#8B4513', padding: '120px 0', color: '#FAF8F4' },
  inner: { maxWidth: 'var(--container-wide)', margin: '0 auto', padding: '0 32px' },
  header: { display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 60, alignItems: 'end', marginBottom: 56 },
  eyebrow: { fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'rgba(255, 255, 255, 0.75)', marginBottom: 14 },
  h2: { fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(2rem, 3.6vw, 2.75rem)', lineHeight: 1.05, letterSpacing: '-0.025em', color: 'var(--paper-100)', margin: 0 },
  italic: { fontStyle: 'italic' as const, color: '#F39C2A' },
  lead: { fontSize: 16, lineHeight: 1.65, color: 'rgba(255, 255, 255, 0.85)', margin: 0, maxWidth: 460 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 },
  card: { background: 'rgba(255, 255, 255, 0.12)', border: 0, borderRadius: 12, padding: 28, display: 'flex', flexDirection: 'column' as const, gap: 16, transition: 'all 0.2s' },
  iconRing: { width: 48, height: 48, borderRadius: '50%', background: 'rgba(255, 255, 255, 0.18)', color: '#FAF8F4', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: 'none' as const },
  amount: { fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 52, color: '#FAF8F4', letterSpacing: '-0.025em', lineHeight: 1 },
  equals: { display: 'block', fontWeight: 600, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase' as const, color: '#F39C2A', marginTop: 8 },
  impactText: { fontFamily: 'var(--font-serif)', fontSize: 19, lineHeight: 1.35, fontWeight: 400, color: 'rgba(255, 255, 255, 0.90)', margin: 0 },
  cardFoot: { marginTop: 'auto' as const, paddingTop: 18, borderTop: '1px solid rgba(255, 255, 255, 0.18)', fontSize: 13, lineHeight: 1.5, color: 'rgba(255, 255, 255, 0.78)' },
  footnote: { marginTop: 40, paddingTop: 28, borderTop: '1px solid rgba(255, 255, 255, 0.20)', display: 'flex', alignItems: 'center', gap: 12, fontSize: 13, color: 'rgba(255, 255, 255, 0.60)', lineHeight: 1.6 },
}

const IMPACT_CARDS = [
  { value: 30, text: '1 aula de judô para uma criança.', foot: 'Mestre, quimono, tatame limpo, água — uma aula inteira de 60 minutos.' },
  { value: 50, text: '1 semana completa de programação.', foot: 'Uma criança nos seis projetos: esporte, estudo, lanche e escuta — por sete dias.' },
  { value: 100, text: 'Material escolar para 5 alunos.', foot: 'Caderno, lápis, mochila, kit de geometria. Tudo o que falta para o ano letivo começar.' },
  { value: 200, text: 'Acompanhamento psicológico por 1 mês.', foot: 'Quatro sessões individuais com psicóloga da equipe OSRV, escuta protegida e contínua.' },
]

export default function OQueSuaDoacaoFaz() {
  return (
    <section id="impacto" style={impactStyles.wrap} className="o-que-doacao">
      <style>{`
        @media (max-width: 768px) {
          .o-que-doacao {
            padding-top: 56px !important;
            padding-bottom: 56px !important;
          }
          .o-que-doacao .oqd-inner {
            padding: 0 20px !important;
            box-sizing: border-box;
            max-width: 100% !important;
          }
          .o-que-doacao .oqd-header {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .o-que-doacao .oqd-grid {
            grid-template-columns: 1fr !important;
            gap: 10px !important;
          }
          .o-que-doacao .oqd-card {
            flex-direction: row !important;
            align-items: center !important;
            padding: 16px !important;
            gap: 14px !important;
          }
          .o-que-doacao .oqd-icon {
            width: 40px !important;
            height: 40px !important;
            flex-shrink: 0 !important;
          }
          .o-que-doacao .oqd-content {
            display: flex !important;
            flex-direction: column !important;
            gap: 2px !important;
            flex: 1 !important;
            min-width: 0 !important;
          }
          .o-que-doacao .oqd-amount {
            font-size: 1.5rem !important;
          }
          .o-que-doacao .oqd-equals {
            font-size: 9px !important;
          }
          .o-que-doacao .oqd-impact-text {
            font-size: 0.9rem !important;
            margin-top: 2px !important;
          }
          .o-que-doacao .oqd-foot {
            display: none !important;
          }
        }
      `}</style>
      <div style={impactStyles.inner} className="oqd-inner">
        <div style={impactStyles.header} className="oqd-header">
          <div>
            <div style={impactStyles.eyebrow}>O QUE SUA DOAÇÃO FAZ</div>
            <h2 style={impactStyles.h2}>
              Valor traduzido em rotina.<br/>
              <span style={impactStyles.italic}>Tangível, todo mês.</span>
            </h2>
          </div>
          <p style={impactStyles.lead}>
            Não falamos em "ajudar". Falamos em quantas crianças, em qual
            projeto, por quantos dias. Aqui está o que cada faixa cobre — com
            base no custo real médio da OSRV em 2025.
          </p>
        </div>
        <div style={impactStyles.grid} className="oqd-grid">
          {IMPACT_CARDS.map((c) => (
            <article key={c.value} style={impactStyles.card} className="oqd-card"
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.18)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <div style={impactStyles.iconRing} className="oqd-icon">●</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }} className="oqd-content">
                <div>
                  <div style={impactStyles.amount} className="oqd-amount">R$ {c.value}</div>
                  <span style={impactStyles.equals} className="oqd-equals">equivale a</span>
                </div>
                <p style={impactStyles.impactText} className="oqd-impact-text">{c.text}</p>
              </div>
              <div style={impactStyles.cardFoot} className="oqd-foot">{c.foot}</div>
            </article>
          ))}
        </div>
        <div style={impactStyles.footnote}>
          🛡 Valores aproximados, calculados com base no custo médio por criança/atividade em 2025. Detalhamento completo no relatório anual.
        </div>
      </div>
    </section>
  )
}