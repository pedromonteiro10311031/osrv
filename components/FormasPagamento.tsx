'use client'
const payStyles = {
  wrap: { background: 'var(--paper-100)', padding: '120px 0 60px' },
  inner: { maxWidth: 'var(--container)', margin: '0 auto', padding: '0 32px' },
  header: { maxWidth: 720, marginBottom: 48 },
  eyebrow: { fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'var(--pine-700)', marginBottom: 14 },
  h2: { fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(2rem, 3.4vw, 2.5rem)', lineHeight: 1.05, letterSpacing: '-0.025em', color: 'var(--ink-900)', margin: '0 0 14px' },
  lead: { fontSize: 16, lineHeight: 1.6, color: 'var(--fg-2)', margin: 0, maxWidth: 580 },
  row: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 32 },
  card: { background: '#fff', border: '1px solid var(--border-soft)', borderRadius: 12, padding: '32px 24px', display: 'flex', flexDirection: 'column' as const, gap: 14, transition: 'all 0.2s', cursor: 'default' },
  glyph: { width: 56, height: 56, borderRadius: 12, background: 'var(--paper-200)', color: 'var(--ink-900)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: 'none' as const, fontSize: 28 },
  name: { fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 20, color: 'var(--ink-900)', margin: 0, letterSpacing: '-0.01em' },
  sub: { fontSize: 13, lineHeight: 1.5, color: 'var(--fg-2)', margin: 0 },
  badge: { marginTop: 'auto' as const, paddingTop: 14, borderTop: '1px solid var(--border-soft)', fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: 'var(--pine-700)', display: 'inline-flex', alignItems: 'center', gap: 6 },
  secureRow: { display: 'flex', alignItems: 'flex-start', gap: 16, padding: '20px 24px', background: 'var(--paper-200)', border: '1px solid var(--border-soft)', borderRadius: 12 },
  secureIcon: { width: 40, height: 40, borderRadius: '50%', background: 'var(--pine-100)', color: 'var(--pine-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: 'none' as const },
  secureText: { fontSize: 14, lineHeight: 1.6, color: 'var(--fg-2)', margin: 0, flex: 1 },
  secureStrong: { color: 'var(--ink-900)', fontWeight: 600 },
  secureBadges: { display: 'flex', gap: 8, flexWrap: 'wrap' as const, flex: 'none' as const },
  secureBadge: { display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 12px', background: '#fff', border: '1px solid var(--border-soft)', borderRadius: 4, fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: 'var(--ink-700)' },
}

const METHODS = [
  { icon: '⚡', name: 'PIX', sub: 'Confirmação imediata. QR Code ou chave CNPJ.', badge: 'Mais usado' },
  { icon: '💳', name: 'Cartão de Crédito', sub: 'Visa, Mastercard, Elo, Amex. Recorrência mensal disponível.', badge: 'Recorrente' },
  { icon: '📄', name: 'Boleto Bancário', sub: 'Compensação em até 3 dias úteis. Sem taxa.', badge: null },
  { icon: '🏦', name: 'Transferência', sub: 'TED ou DOC direto para a conta jurídica da OSRV.', badge: null },
]

export default function FormasPagamento() {
  return (
    <section id="pagamento" style={payStyles.wrap} className="formas-pagamento">
      <style>{`
        @media (max-width: 768px) {
          .formas-pagamento {
            padding-top: 56px !important;
            padding-bottom: 28px !important;
          }
          .formas-pagamento .fp-inner {
            padding: 0 20px !important;
            box-sizing: border-box;
            max-width: 100% !important;
          }
          .formas-pagamento .fp-row {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important;
          }
          .formas-pagamento .fp-card {
            padding: 18px 16px !important;
            gap: 8px !important;
          }
          .formas-pagamento .fp-glyph {
            width: 40px !important;
            height: 40px !important;
            border-radius: 10px !important;
            font-size: 20px !important;
          }
          .formas-pagamento .fp-name {
            font-size: 1.05rem !important;
          }
          .formas-pagamento .fp-sub {
            font-size: 0.8rem !important;
            line-height: 1.4 !important;
          }
          .formas-pagamento .fp-secure {
            flex-direction: column !important;
            gap: 14px !important;
          }
          .formas-pagamento .fp-secure-badges {
            flex-wrap: wrap !important;
          }
        }
      `}</style>
      <div style={payStyles.inner} className="fp-inner">
        <div style={payStyles.header}>
          <div style={payStyles.eyebrow}>FORMAS DE PAGAMENTO</div>
          <h2 style={payStyles.h2}>Pague do jeito que for melhor para você.</h2>
          <p style={payStyles.lead}>
            Quatro formas de doar, todas processadas em ambiente seguro fora do nosso site. A OSRV não armazena dados de cartão em nenhum momento.
          </p>
        </div>
        <div style={payStyles.row} className="fp-row">
          {METHODS.map((m) => (
            <div key={m.name} style={payStyles.card} className="fp-card"
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--border-hard)'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-soft)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <div style={payStyles.glyph} className="fp-glyph">{m.icon}</div>
              <h3 style={payStyles.name} className="fp-name">{m.name}</h3>
              <p style={payStyles.sub} className="fp-sub">{m.sub}</p>
            </div>
          ))}
        </div>
        <div style={payStyles.secureRow} className="fp-secure">
          <div style={payStyles.secureIcon}>🔒</div>
          <p style={payStyles.secureText}>
            <span style={payStyles.secureStrong}>Pagamento processado por gateway externo seguro (PCI-DSS).</span>{' '}
            Você será redirecionado para concluir a doação. A OSRV não armazena dados sensíveis do seu cartão ou conta.
          </p>
          <div style={payStyles.secureBadges} className="fp-secure-badges">
            <span style={payStyles.secureBadge}>🛡 PCI-DSS</span>
            <span style={payStyles.secureBadge}>SSL 256</span>
            <span style={payStyles.secureBadge}>LGPD</span>
          </div>
        </div>
      </div>
    </section>
  )
}