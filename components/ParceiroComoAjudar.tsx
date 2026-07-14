'use client'

const caStyles = {
  wrap: { background: 'var(--pine-900)', color: 'var(--paper-100)', padding: '120px 0' },
  inner: { maxWidth: 'var(--container)', margin: '0 auto', padding: '0 32px' },
  head: { maxWidth: 780, marginBottom: 64 },
  eyebrow: { fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'var(--amber-300)', marginBottom: 18 },
  h2: { fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.04, letterSpacing: '-0.025em', color: 'var(--paper-100)', margin: '0 0 18px' },
  sub: { fontFamily: 'var(--font-serif)', fontStyle: 'italic' as const, fontWeight: 400, fontSize: 'clamp(1.25rem, 2.2vw, 1.6rem)', lineHeight: 1.35, color: 'var(--amber-500)', margin: 0, maxWidth: 600 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 12, overflow: 'hidden' },
  card: { background: 'var(--pine-900)', padding: '36px 32px 32px', display: 'flex', flexDirection: 'column' as const, gap: 14, transition: 'background 0.2s', cursor: 'default' },
  num: { fontFamily: 'var(--font-serif)', fontStyle: 'italic' as const, fontWeight: 400, fontSize: 30, color: 'var(--amber-500)', lineHeight: 1, marginBottom: 4 },
  title: { fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 22, lineHeight: 1.2, letterSpacing: '-0.015em', color: 'var(--paper-100)', margin: 0 },
  body: { fontSize: 15, lineHeight: 1.6, color: 'rgba(250, 248, 244, 0.78)', margin: 0 },
}

const HELP_OPTIONS = [
  ['01', 'Doação financeira recorrente', 'Contribuição mensal que garante a continuidade dos projetos ao longo do ano.'],
  ['02', 'Patrocínio de projeto', 'Sua empresa financia integralmente um projeto específico (ex: Judô, Xadrez, Psicológico).'],
  ['03', 'Doação de materiais', 'Equipamentos esportivos, material escolar, alimentos ou insumos para as atividades.'],
  ['04', 'Cessão de serviços', 'Profissionais da sua empresa prestam serviços voluntários (contabilidade, jurídico, TI, marketing).'],
  ['05', 'Ação de engajamento', 'Sua equipe participa de mutirões, eventos ou ações diretas na comunidade.'],
  ['06', 'Parceria de mídia', 'Divulgação da OSRV nos canais da sua empresa em troca de visibilidade mútua.'],
]

export default function ParceiroComoAjudar() {
  return (
    <section style={caStyles.wrap} className="parceiro-como-ajudar">
      <style>{`
        @media (max-width: 768px) {
          .parceiro-como-ajudar {
            padding-top: 56px !important;
            padding-bottom: 56px !important;
          }
          .parceiro-como-ajudar .pca-inner {
            padding: 0 20px !important;
            box-sizing: border-box;
            max-width: 100% !important;
          }
          .parceiro-como-ajudar .pca-grid {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
          .parceiro-como-ajudar .pca-grid article {
            padding: 28px 0 !important;
            border-bottom: 1px solid rgba(255,255,255,0.12);
          }
          .parceiro-como-ajudar .pca-grid article:last-child {
            border-bottom: none;
          }
          .parceiro-como-ajudar .pca-eyebrow {
            font-size: 9px !important;
            letter-spacing: 0.12em !important;
          }
        }
      `}</style>
      <div style={caStyles.inner} className="pca-inner">
        <div style={caStyles.head}>
          <div style={caStyles.eyebrow} className="pca-eyebrow">FORMAS DE APOIO</div>
          <h2 style={caStyles.h2}>Cada empresa tem um jeito de fazer parte.</h2>
          <p style={caStyles.sub}>Escolha o modelo que faz mais sentido para vocês.</p>
        </div>
        <div style={caStyles.grid} className="pca-grid">
          {HELP_OPTIONS.map(([num, title, body], i) => (
            <article key={i} style={caStyles.card}
              onMouseEnter={(e) => e.currentTarget.style.background = '#1A3814'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'var(--pine-900)'}
            >
              <span style={caStyles.num}>{num}</span>
              <h3 style={caStyles.title}>{title}</h3>
              <p style={caStyles.body}>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}