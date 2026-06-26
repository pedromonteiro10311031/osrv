'use client'

import { useState } from 'react'

const modStyles = {
  wrap: { background: 'var(--paper-100)', padding: '120px 0 80px' },
  inner: { maxWidth: 'var(--container-wide)', margin: '0 auto', padding: '0 32px' },
  header: { maxWidth: 720, marginBottom: 56 },
  eyebrow: { fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'var(--pine-700)', marginBottom: 14 },
  h2: { fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(2rem, 3.6vw, 2.875rem)', lineHeight: 1.04, letterSpacing: '-0.025em', color: 'var(--ink-900)', margin: '0 0 18px' },
  lead: { fontSize: 17, lineHeight: 1.6, color: 'var(--fg-2)', maxWidth: 600, margin: 0 },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, alignItems: 'stretch' },
  card: { position: 'relative' as const, background: '#fff', borderRadius: 12, padding: '40px 36px 36px', border: '1px solid var(--border-soft)', display: 'flex', flexDirection: 'column' as const, transition: 'all 0.2s' },
  cardHi: { border: '2px solid #4A9B3E', boxShadow: '0 8px 32px rgba(0,0,0,0.10)' },
  ribbon: { position: 'absolute' as const, top: -14, left: 28, background: 'var(--pine-700)', color: '#fff', fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, padding: '7px 14px', borderRadius: 999 },
  modName: { fontFamily: 'var(--font-serif)', fontSize: 28, fontWeight: 500, color: 'var(--ink-900)', margin: 0, letterSpacing: '-0.015em' },
  modSub: { fontSize: 14, lineHeight: 1.55, color: 'var(--fg-2)', margin: '0 0 24px', maxWidth: 380 },
  amounts: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10, marginBottom: 12 },
  amt: { padding: '20px 14px', border: '1.5px solid var(--ink-200)', background: '#fff', borderRadius: 8, textAlign: 'left' as const, cursor: 'pointer', display: 'flex', flexDirection: 'column' as const, gap: 2 },
  amtVal: { fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 24, color: 'var(--ink-900)', letterSpacing: '-0.01em' },
  amtMeta: { fontSize: 12, color: 'var(--fg-3)' },
  amtSel: { borderColor: 'var(--pine-500)', background: 'var(--pine-100)' },
  amtSelMeta: { color: 'var(--pine-700)' },
  amtSelVal: { color: 'var(--pine-900)' },
  customRow: { display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 },
  prefix: { fontSize: 15, color: 'var(--fg-3)' },
  input: { flex: 1, fontSize: 16, color: 'var(--ink-900)', background: '#fff', padding: '13px 14px', border: '1px solid var(--ink-200)', borderRadius: 4, outline: 'none', width: '100%' },
  cta: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, width: '100%', background: 'var(--amber-500)', color: '#fff', border: 0, borderRadius: 999, padding: '17px', fontSize: 16, fontWeight: 500, cursor: 'pointer', marginTop: 'auto' as const },
  meta: { fontSize: 12, color: 'var(--fg-3)', textAlign: 'center' as const, marginTop: 12, lineHeight: 1.5 },
}

const tiers = [
  { v: 30, t: 'apoio' },
  { v: 50, t: 'frequente' },
  { v: 100, t: 'guardião' },
  { v: 200, t: 'pilar' },
]

function AmountCard({ variant, name, sub, hi, ribbonLabel, freqLabel }: { variant: string, name: string, sub: string, hi?: boolean, ribbonLabel?: string | null, freqLabel: string }) {
  const [amount, setAmount] = useState(50)
  const [custom, setCustom] = useState('')
  const finalAmount = custom ? Number(custom) || 0 : amount

  return (
    <article style={{ ...modStyles.card, ...(hi ? modStyles.cardHi : {}) }}>
      {ribbonLabel && <span style={modStyles.ribbon}>♥ {ribbonLabel}</span>}
      <h3 style={modStyles.modName}>{name}</h3>
      <p style={modStyles.modSub}>{sub}</p>
      <div style={modStyles.amounts}>
        {tiers.map(({ v, t }) => {
          const sel = amount === v && !custom
          return (
            <button key={v} style={{ ...modStyles.amt, ...(sel ? modStyles.amtSel : {}) }} onClick={() => { setAmount(v); setCustom('') }}>
              <span style={{ ...modStyles.amtVal, ...(sel ? modStyles.amtSelVal : {}) }}>R$ {v}</span>
              <span style={{ ...modStyles.amtMeta, ...(sel ? modStyles.amtSelMeta : {}) }}>{t}</span>
            </button>
          )
        })}
      </div>
      <div style={modStyles.customRow}>
        <span style={modStyles.prefix}>R$</span>
        <input style={modStyles.input} type="number" placeholder="Outro valor" value={custom} onChange={(e) => setCustom(e.target.value)} />
      </div>
      <button style={modStyles.cta}>
        Doar R$ {finalAmount} {freqLabel} →
      </button>
      <div style={modStyles.meta}>
        {variant === 'mensal' ? 'Cobrança automática · cancele a qualquer momento, 1 clique.' : 'Pagamento único · sem renovação automática.'}
      </div>
    </article>
  )
}

export default function ModalidadeDoacao() {
  return (
    <section id="modalidade" style={modStyles.wrap} className="modalidade-doacao">
      <style>{`
        @media (max-width: 768px) {
          .modalidade-doacao .modalidade-inner {
            padding: 0 20px !important;
            box-sizing: border-box;
            max-width: 100% !important;
          }
          .modalidade-doacao .modalidade-grid {
            grid-template-columns: 1fr !important;
          }
          .modalidade-doacao article {
            padding: 40px 24px 32px !important;
            box-sizing: border-box;
            max-width: 100% !important;
          }
        }
      `}</style>
      <div style={modStyles.inner} className="modalidade-inner">
        <div style={modStyles.header}>
          <div style={modStyles.eyebrow}>ESCOLHA SUA MODALIDADE</div>
          <h2 style={modStyles.h2}>Doe uma vez. Ou esteja com a gente todo mês.</h2>
          <p style={modStyles.lead}>
            A doação mensal é o que mantém a quadra aberta, o tatame preparado e o lanche servido sem sobressaltos. Mas qualquer valor, em qualquer formato, chega no Jardim Renascer.
          </p>
        </div>
        <div style={modStyles.grid} className="modalidade-grid">
          <AmountCard variant="mensal" name="Doação Mensal" sub="Você passa a ser madrinha ou padrinho de uma criança. Cobrança recorrente automática no cartão." hi ribbonLabel="Mais impacto" freqLabel="/ mês" />
          <AmountCard variant="unica" name="Doação Única" sub="Um gesto pontual — perfeito para campanhas, datas especiais ou para conhecer o trabalho da OSRV antes de assinar." ribbonLabel={null} freqLabel="" />
        </div>
      </div>
    </section>
  )
}