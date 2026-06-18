'use client'

import { useState } from 'react'

const donStyles = {
  wrap: { background: 'var(--paper-100)', padding: '120px 0' },
  inner: {
    maxWidth: 'var(--container)',
    margin: '0 auto',
    padding: '0 32px',
    display: 'grid',
    gridTemplateColumns: '1fr 1.1fr',
    gap: 80,
    alignItems: 'center',
  },
  left: { maxWidth: 460 },
  eyebrow: { fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'var(--pine-700)', marginBottom: 14 },
  h2: {
    fontFamily: 'var(--font-serif)',
    fontWeight: 400,
    fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
    lineHeight: 1.04,
    letterSpacing: '-0.025em',
    color: 'var(--ink-900)',
    margin: '0 0 22px',
  },
  subtitle: {
    fontFamily: 'var(--font-serif)',
    fontStyle: 'italic' as const,
    fontWeight: 400,
    fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)',
    lineHeight: 1.15,
    letterSpacing: '-0.015em',
    color: '#F39C2A',
    margin: '0 0 24px',
  },
  lead: { fontSize: 17, lineHeight: 1.65, color: 'var(--fg-2)', margin: '0 0 18px' },
  bullet: { display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 15, lineHeight: 1.55, color: 'var(--fg-2)', margin: '10px 0' },
  card: { background: '#fff', borderRadius: 12, padding: 32, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' },
  toggleRow: { display: 'inline-flex', background: 'var(--paper-200)', borderRadius: 999, padding: 4, marginBottom: 22, fontSize: 14, fontWeight: 500 },
  toggleBtn: { border: 0, background: 'transparent', padding: '10px 22px', borderRadius: 999, cursor: 'pointer', color: 'var(--ink-700)' },
  toggleActive: { background: '#fff', color: 'var(--ink-900)', boxShadow: '0 1px 4px rgba(0,0,0,0.1)' },
  amounts: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, marginBottom: 18 },
  amt: {
    padding: '18px 10px',
    border: '1.5px solid var(--ink-200)',
    background: '#fff',
    borderRadius: 8,
    textAlign: 'center' as const,
    cursor: 'pointer',
    fontFamily: 'var(--font-serif)',
    fontWeight: 500,
    fontSize: 22,
    color: 'var(--ink-900)',
  },
  amtSelected: { borderColor: 'var(--pine-500)', background: 'var(--pine-100)', color: 'var(--pine-900)' },
  amtMeta: { display: 'block', fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: 12, color: 'var(--fg-3)', marginTop: 4 },
  amtMetaSel: { color: 'var(--pine-700)' },
  customRow: { display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 },
  prefix: { fontSize: 15, color: 'var(--fg-3)' },
  input: {
    flex: 1,
    fontSize: 16,
    color: 'var(--ink-900)',
    background: '#fff',
    padding: '12px 14px',
    border: '1px solid var(--ink-200)',
    borderRadius: 4,
    outline: 'none',
    width: '100%',
  },
  impact: { display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.5, margin: '0 0 20px', padding: '14px 16px', background: 'var(--amber-100)', borderRadius: 8, border: '1px solid var(--amber-300)' },
  impactStrong: { color: 'var(--amber-900)', fontWeight: 600 },
  cta: {
    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
    width: '100%',
    background: 'var(--amber-500)',
    color: '#fff',
    border: 0,
    borderRadius: 999,
    padding: '16px',
    fontSize: 16,
    fontWeight: 500,
    cursor: 'pointer',
  },
  secure: { display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center', marginTop: 14, fontSize: 12, color: 'var(--fg-3)' },
  success: { background: '#fff', borderRadius: 12, padding: 48, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', textAlign: 'center' as const },
  successH3: { fontFamily: 'var(--font-serif)', fontSize: 28, fontWeight: 500, color: 'var(--ink-900)', margin: '0 0 10px' },
}

const IMPACTS: Record<number, Record<string, string>> = {
  30: { mensal: '1 lanche reforçado para uma criança, por uma semana.', unica: '1 lanche reforçado para 30 crianças.' },
  50: { mensal: '1 criança na OSRV por uma semana inteira — judô, estudo, lanche, escuta.', unica: '1 criança em uma semana completa de programação.' },
  100: { mensal: '1 criança nos seis projetos por um mês inteiro.', unica: '2 semanas de programação para 1 criança.' },
  200: { mensal: 'Uma turma de judô inteira, por uma semana.', unica: 'Uma turma de judô, por uma semana.' },
}

export default function DonationBlock() {
  const [freq, setFreq] = useState('mensal')
  const [amount, setAmount] = useState(50)
  const [custom, setCustom] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const finalAmount = custom ? Number(custom) : amount
  const impactText = IMPACTS[amount]?.[freq] || 'Sua doação mantém crianças nos projetos OSRV.'

  if (submitted) {
    return (
      <section id="doar" style={donStyles.wrap}>
        <div style={{ ...donStyles.inner, gridTemplateColumns: '1fr', justifyItems: 'center' }}>
          <div style={{ ...donStyles.success, maxWidth: 520 }}>
            <h3 style={donStyles.successH3}>Obrigado, de verdade.</h3>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--fg-2)', margin: '0 auto', maxWidth: 380 }}>
              Sua doação de <b style={{ color: 'var(--ink-900)' }}>R$ {finalAmount}</b> {freq === 'mensal' ? 'por mês' : 'única'} foi recebida.
            </p>
            <button style={{ ...donStyles.cta, width: 'auto', padding: '12px 24px', marginTop: 24 }} onClick={() => setSubmitted(false)}>
              Voltar
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="doar" style={donStyles.wrap}>
      <div style={donStyles.inner}>
        <div style={donStyles.left}>
          <div style={donStyles.eyebrow}>COMO AJUDAR</div>
          <h2 style={donStyles.subtitle}>Escolha como você quer transformar vidas.</h2>
          <p style={donStyles.lead}>
            Você escolhe o valor. A gente mantém o tatame aberto, o tabuleiro
            de xadrez montado, e a família atendida no Jardim Renascer.
          </p>
          <p style={donStyles.bullet}>✓ Recibo dedutível do IR (CEBAS · OSCIP)</p>
          <p style={donStyles.bullet}>✓ Cancele a qualquer momento, 1 clique</p>
          <p style={donStyles.bullet}>✓ Relatório financeiro anual público</p>
        </div>
        <div style={donStyles.card}>
          <div style={donStyles.toggleRow}>
            <button style={{ ...donStyles.toggleBtn, ...(freq === 'mensal' ? donStyles.toggleActive : {}) }} onClick={() => setFreq('mensal')}>
              Doar todo mês
            </button>
            <button style={{ ...donStyles.toggleBtn, ...(freq === 'unica' ? donStyles.toggleActive : {}) }} onClick={() => setFreq('unica')}>
              Doar uma vez
            </button>
          </div>
          <div style={donStyles.amounts}>
            {[30, 50, 100, 200].map((v) => {
              const sel = amount === v && !custom
              return (
                <button key={v} style={{ ...donStyles.amt, ...(sel ? donStyles.amtSelected : {}) }} onClick={() => { setAmount(v); setCustom('') }}>
                  R${v}
                  <span style={{ ...donStyles.amtMeta, ...(sel ? donStyles.amtMetaSel : {}) }}>
                    {v === 30 ? 'apoio' : v === 50 ? 'frequente' : v === 100 ? 'guardião' : 'pilar'}
                  </span>
                </button>
              )
            })}
          </div>
          <div style={donStyles.customRow}>
            <span style={donStyles.prefix}>R$</span>
            <input style={donStyles.input} type="number" placeholder="Outro valor" value={custom} onChange={(e) => setCustom(e.target.value)} />
          </div>
          <div style={donStyles.impact}>
            <div><b style={donStyles.impactStrong}>R$ {finalAmount} {freq === 'mensal' ? '/ mês' : 'única'}</b> — {impactText}</div>
          </div>
          <button style={donStyles.cta} onClick={() => setSubmitted(true)}>
            Doar R$ {finalAmount} {freq === 'mensal' ? '/ mês' : 'agora'} →
          </button>
          <div style={donStyles.secure}>
            🔒 Pagamento seguro · Pix, cartão, boleto · SSL 256-bit
          </div>
        </div>
      </div>
    </section>
  )
}