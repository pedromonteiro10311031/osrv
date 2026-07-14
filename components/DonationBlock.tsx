'use client'

import { useState } from 'react'

const donStyles = {
  wrap: { background: 'var(--paper-100)', padding: '120px 0 60px' },
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
    borderWidth: '1.5px',
    borderStyle: 'solid' as const,
    borderColor: 'var(--ink-200)',
    background: '#fff',
    borderRadius: 8,
    textAlign: 'center' as const,
    cursor: 'pointer',
    fontFamily: 'var(--font-serif)',
    fontWeight: 500,
    fontSize: 22,
    color: 'var(--ink-900)',
  },
  amtSelected: { borderWidth: '1.5px', borderStyle: 'solid' as const, borderColor: 'var(--pine-500)', background: 'var(--pine-100)', color: 'var(--pine-900)' },
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

interface DonationBlockProps {
  eyebrow?: string
  subtitle?: string
  lead?: string
  bullets?: string[]
}

export default function DonationBlock({
  eyebrow = 'COMO AJUDAR',
  subtitle = 'Escolha como você quer transformar vidas.',
  lead = 'Você escolhe o valor. A gente mantém o tatame aberto, o tabuleiro de xadrez montado, e a família atendida no Jardim Renascer.',
  bullets = [
    '✓ Recibo dedutível do IR (CEBAS · OSCIP)',
    '✓ Cancele a qualquer momento, 1 clique',
    '✓ Relatório financeiro anual público',
  ],
}: DonationBlockProps) {
  const [freq, setFreq] = useState('mensal')
  const [amount, setAmount] = useState(50)
  const [custom, setCustom] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const customValid = custom !== '' && Number(custom) >= 1
  const finalAmount = custom !== '' ? Number(custom) : amount
  const donateDisabled = loading || (custom !== '' && !customValid)
  const impactText = IMPACTS[amount]?.[freq] || 'Sua doação mantém crianças nos projetos OSRV.'

  const handleDonate = async () => {
    if (finalAmount <= 0) {
      setError('Informe um valor maior que zero para continuar.')
      return
    }
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/donation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          value: custom ? Number(custom) : amount,
          billingType: freq === 'mensal' ? 'RECURRENT' : 'DETACHED',
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Erro desconhecido')
      window.location.href = data.url
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Algo deu errado. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="doar" style={donStyles.wrap} className="donation-block">
      <style>{`
        @media (max-width: 768px) {
          .donation-block {
            padding-top: 56px !important;
            padding-bottom: 28px !important;
          }
          .donation-block .donation-inner {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding: 0 20px !important;
          }
          .donation-block .donation-left {
            max-width: 100% !important;
          }
          .donation-block .donation-subtitle {
            font-size: clamp(1.3rem, 6vw, 1.55rem) !important;
            line-height: 1.15 !important;
          }
          .donation-block .donation-card {
            max-width: 100% !important;
            box-sizing: border-box !important;
            padding: 16px !important;
            display: flex !important;
            flex-direction: column !important;
            gap: 18px !important;
          }
          .donation-block .donation-toggle {
            width: 100% !important;
            display: flex !important;
            margin-bottom: 0 !important;
          }
          .donation-block .donation-toggle button {
            flex: 1 !important;
          }
          .donation-block .donation-toggle-btn {
            padding: 8px 12px !important;
            font-size: 0.9rem !important;
          }
          .donation-block .donation-amounts {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important;
            margin-bottom: 0 !important;
          }
          .donation-block .donation-amt-btn {
            padding: 14px !important;
            font-size: 1.25rem !important;
          }
          .donation-block .donation-amt-meta {
            font-size: 0.8rem !important;
          }
          .donation-block .donation-custom-row {
            margin-bottom: 0 !important;
            gap: 10px !important;
            align-items: center !important;
          }
          .donation-block .donation-input {
            padding: 10px 14px !important;
            font-size: 0.95rem !important;
          }
          .donation-block .donation-impact {
            display: none !important;
          }
          .donation-block .donation-cta {
            padding: 12px !important;
            font-size: 1rem !important;
          }
          .donation-block .donation-secure {
            font-size: 0.75rem !important;
            margin-top: 8px !important;
          }
        }
      `}</style>
      <div style={donStyles.inner} className="donation-inner">
        <div style={donStyles.left} className="donation-left">
          <div style={donStyles.eyebrow}>{eyebrow}</div>
          <h2 style={donStyles.subtitle} className="donation-subtitle">{subtitle}</h2>
          <p style={donStyles.lead}>{lead}</p>
          {bullets.map((b, i) => <p key={i} style={donStyles.bullet}>{b}</p>)}
        </div>
        <div style={donStyles.card} className="donation-card">
          <div style={donStyles.toggleRow} className="donation-toggle">
            <button style={{ ...donStyles.toggleBtn, ...(freq === 'mensal' ? donStyles.toggleActive : {}) }} className="donation-toggle-btn" onClick={() => setFreq('mensal')}>
              Doar todo mês
            </button>
            <button style={{ ...donStyles.toggleBtn, ...(freq === 'unica' ? donStyles.toggleActive : {}) }} className="donation-toggle-btn" onClick={() => setFreq('unica')}>
              Doar uma vez
            </button>
          </div>
          <div style={donStyles.amounts} className="donation-amounts">
            {[30, 50, 100, 200].map((v) => {
              const sel = amount === v && !custom
              return (
                <button key={v} style={{ ...donStyles.amt, ...(sel ? donStyles.amtSelected : {}) }} className="donation-amt-btn" onClick={() => { setAmount(v); setCustom('') }}>
                  R${v}
                  <span style={{ ...donStyles.amtMeta, ...(sel ? donStyles.amtMetaSel : {}) }} className="donation-amt-meta">
                    {v === 30 ? 'apoio' : v === 50 ? 'frequente' : v === 100 ? 'guardião' : 'pilar'}
                  </span>
                </button>
              )
            })}
          </div>
          <div style={donStyles.customRow} className="donation-custom-row">
            <span style={donStyles.prefix}>R$</span>
            <input
              style={donStyles.input}
              className="donation-input"
              type="number"
              min="1"
              step="1"
              placeholder="Outro valor"
              value={custom}
              onChange={(e) => {
                const digits = e.target.value.replace(/[^0-9]/g, '')
                setCustom(digits === '0' ? '' : digits)
              }}
            />
          </div>
          <div style={donStyles.impact} className="donation-impact">
            <div><b style={donStyles.impactStrong}>R$ {finalAmount} {freq === 'mensal' ? '/ mês' : 'única'}</b> — {impactText}</div>
          </div>
          <button
            style={{ ...donStyles.cta, ...(donateDisabled ? { opacity: 0.5, cursor: 'not-allowed' } : {}) }}
            className="donation-cta"
            onClick={handleDonate}
            disabled={donateDisabled}
          >
            {loading ? 'Processando...' : `Doar R$ ${finalAmount} ${freq === 'mensal' ? '/ mês' : 'agora'} →`}
          </button>
          {error && (
            <p style={{ color: 'var(--terracota-600)', fontSize: 14, marginTop: 12 }}>
              {error}
            </p>
          )}
          <div style={donStyles.secure} className="donation-secure">
            🔒 Pagamento seguro · Pix, cartão, boleto · SSL 256-bit
          </div>
        </div>
      </div>
    </section>
  )
}