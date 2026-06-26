'use client'

import { useState } from 'react'

const formStyles = {
  wrap: { background: 'var(--paper-100)', padding: '120px 0' },
  inner: { maxWidth: 880, margin: '0 auto', padding: '0 32px' },
  head: { textAlign: 'left' as const, marginBottom: 48, display: 'flex', flexDirection: 'column' as const, alignItems: 'flex-start', gap: 16 },
  eyebrow: { fontSize: 12, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase' as const, color: 'var(--pine-700)' },
  h2: { fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(2.2rem, 4vw, 3rem)', lineHeight: 1.04, letterSpacing: '-0.028em', color: 'var(--ink-900)', margin: 0 },
  sub: { fontFamily: 'var(--font-serif)', fontStyle: 'italic' as const, color: 'var(--amber-500)', fontSize: 'clamp(1.05rem, 1.7vw, 1.35rem)', margin: 0 },
  card: { background: '#fff', border: '1px solid var(--border-soft)', borderRadius: 12, padding: '48px 48px 40px', boxShadow: '0 2px 16px rgba(0,0,0,0.06)' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '22px 24px' },
  field: { display: 'flex', flexDirection: 'column' as const, gap: 8 },
  fieldFull: { gridColumn: '1 / -1' },
  label: { fontSize: 13, fontWeight: 600, color: 'var(--ink-700)' },
  input: { fontSize: 15, color: 'var(--ink-900)', background: '#fff', padding: '12px 14px', border: '1px solid var(--ink-200)', borderRadius: 4, outline: 'none', width: '100%', boxSizing: 'border-box' as const },
  textarea: { fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--ink-900)', background: '#fff', padding: '12px 14px', border: '1px solid var(--ink-200)', borderRadius: 4, outline: 'none', width: '100%', minHeight: 120, boxSizing: 'border-box' as const, resize: 'vertical' as const },
  daysRow: { display: 'flex', flexWrap: 'wrap' as const, gap: 8 },
  submit: { display: 'inline-flex', alignItems: 'center', gap: 10, background: 'var(--amber-500)', color: '#fff', border: 0, borderRadius: 999, padding: '16px 30px', fontSize: 16, fontWeight: 500, cursor: 'pointer' },
  footerRow: { marginTop: 32, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' as const },
  lgpd: { display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, color: 'var(--fg-3)', maxWidth: 380 },
  success: { background: '#fff', border: '1px solid var(--border-soft)', borderRadius: 12, padding: '64px 48px', textAlign: 'center' as const },
  successTitle: { fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 32, lineHeight: 1.12, letterSpacing: '-0.02em', color: 'var(--ink-900)', margin: '0 0 12px' },
  successBody: { fontSize: 17, lineHeight: 1.55, color: 'var(--fg-2)', maxWidth: 480, margin: '0 auto' },
}

const DAYS = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
const AREAS_OPTS = ['Ensino', 'Esporte', 'Comunicação', 'Eventos', 'Saúde', 'Administrativo', 'Outro']
const TIME_OPTS = ['Manhã', 'Tarde', 'Noite', 'Flexível']

export default function VolunteerForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [area, setArea] = useState('')
  const [time, setTime] = useState('')
  const [days, setDays] = useState<string[]>([])
  const [about, setAbout] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const toggleDay = (d: string) => setDays((prev) => prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d])

  const handleSubmit = async () => {
  try {
    const response = await fetch('/api/volunteer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, phone, area, time, days, about }),
    })

    if (response.ok) {
      setSubmitted(true)
    } else {
      alert('Algo deu errado. Tenta novamente.')
    }
  } catch (error) {
    alert('Erro ao enviar. Verifica sua conexão.')
  }
}

  if (submitted) {
    return (
      <section id="inscricao" style={formStyles.wrap}>
        <div style={formStyles.inner}>
          <div style={formStyles.success}>
            <h2 style={formStyles.successTitle}>Inscrição recebida, {name.split(' ')[0] || 'voluntário'}. ✅</h2>
            <p style={formStyles.successBody}>
              A gente entra em contato em até <em>48 horas</em> pelo telefone que você cadastrou.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="inscricao" style={formStyles.wrap} className="volunteer-form">
      <style>{`
        @media (max-width: 768px) {
          .volunteer-form .vf-inner {
            padding: 0 20px !important;
            box-sizing: border-box;
            max-width: 100% !important;
          }
          .volunteer-form .vf-card {
            padding: 32px 20px 28px !important;
            box-sizing: border-box;
          }
          .volunteer-form .vf-grid {
            grid-template-columns: 1fr !important;
            gap: 18px !important;
          }
          .volunteer-form .vf-grid input,
          .volunteer-form .vf-grid select,
          .volunteer-form .vf-grid textarea {
            padding: 14px !important;
            font-size: 16px !important;
          }
          .volunteer-form .vf-footer {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 16px !important;
            margin-top: 24px !important;
          }
          .volunteer-form .vf-submit {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
      <div style={formStyles.inner} className="vf-inner">
        <div style={formStyles.head}>
          <div style={formStyles.eyebrow}>QUERO ME INSCREVER</div>
          <h2 style={formStyles.h2}>Pronto para começar?</h2>
          <p style={formStyles.sub}>A gente entra em contato em até 48 horas.</p>
        </div>
        <div style={formStyles.card} className="vf-card">
          <div style={formStyles.grid} className="vf-grid">
            <div style={{ ...formStyles.field, ...formStyles.fieldFull }}>
              <label style={formStyles.label}>Nome completo</label>
              <input style={formStyles.input} type="text" placeholder="Como você quer ser chamado" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div style={formStyles.field}>
              <label style={formStyles.label}>E-mail</label>
              <input style={formStyles.input} type="email" placeholder="voce@exemplo.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div style={formStyles.field}>
              <label style={formStyles.label}>Telefone / WhatsApp</label>
              <input style={formStyles.input} type="tel" placeholder="(65) 9 0000-0000" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>
            <div style={formStyles.field}>
              <label style={formStyles.label}>Área de interesse</label>
              <select style={formStyles.input} value={area} onChange={(e) => setArea(e.target.value)} required>
                <option value="" disabled>Escolha uma área</option>
                {AREAS_OPTS.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
            <div style={formStyles.field}>
              <label style={formStyles.label}>Horário preferido</label>
              <select style={formStyles.input} value={time} onChange={(e) => setTime(e.target.value)} required>
                <option value="" disabled>Escolha um turno</option>
                {TIME_OPTS.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
            <div style={{ ...formStyles.field, ...formStyles.fieldFull }}>
              <label style={formStyles.label}>Disponibilidade na semana</label>
              <div style={formStyles.daysRow}>
                {DAYS.map((d) => {
                  const active = days.includes(d)
                  return (
                    <button type="button" key={d} onClick={() => toggleDay(d)} style={{ padding: '9px 14px', border: `1px solid ${active ? 'var(--pine-500)' : 'var(--ink-200)'}`, background: active ? 'var(--pine-100)' : '#fff', color: active ? 'var(--pine-900)' : 'var(--ink-700)', fontSize: 14, fontWeight: 500, borderRadius: 999, cursor: 'pointer' }}>
                      {active ? '✓ ' : ''}{d}
                    </button>
                  )
                })}
              </div>
            </div>
            <div style={{ ...formStyles.field, ...formStyles.fieldFull }}>
              <label style={formStyles.label}>Conte um pouco sobre você</label>
              <textarea style={formStyles.textarea} placeholder="Sua formação, o que te trouxe até aqui, o que você gostaria de fazer na OSRV…" value={about} onChange={(e) => setAbout(e.target.value)} />
            </div>
          </div>
          <div style={formStyles.footerRow} className="vf-footer">
            <span style={formStyles.lgpd}>🔒 Seus dados são protegidos pela LGPD.</span>
            <button type="button" style={formStyles.submit} className="vf-submit" onClick={handleSubmit}>
              Quero ser voluntário →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}