'use client'

import { useState } from 'react'
import { sharedFormStyles, formMobileCSS } from '@/lib/formStyles'

const s = {
  wrap: { background: 'var(--paper-100)', padding: '120px 0' },
  inner: { maxWidth: 880, margin: '0 auto', padding: '0 32px' },
  head: { textAlign: 'left' as const, marginBottom: 48, display: 'flex', flexDirection: 'column' as const, alignItems: 'flex-start', gap: 16 },
  eyebrow: { fontSize: 12, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase' as const, color: 'var(--pine-700)' },
  h2: { fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(2.2rem, 4vw, 3rem)', lineHeight: 1.04, letterSpacing: '-0.028em', color: 'var(--ink-900)', margin: 0 },
  sub: { fontFamily: 'var(--font-serif)', fontStyle: 'italic' as const, color: 'var(--amber-500)', fontSize: 'clamp(1.05rem, 1.7vw, 1.35rem)', margin: 0 },
  daysRow: { display: 'flex', flexWrap: 'wrap' as const, gap: 8 },
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
  const [formError, setFormError] = useState<string | null>(null)

  const toggleDay = (d: string) => setDays((prev) => prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d])

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value.replace(/[^\d\s()\-+]/g, ''))
  }

  const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

  const handleSubmit = async () => {
    setFormError(null)
    if (!name.trim()) {
      setFormError('Informe seu nome completo.')
      return
    }
    if (!isValidEmail(email)) {
      setFormError('Informe um e-mail válido (ex: voce@exemplo.com).')
      return
    }
    if (!phone.trim()) {
      setFormError('Informe seu telefone.')
      return
    }
    if (!area) {
      setFormError('Selecione uma área de interesse.')
      return
    }
    if (!time) {
      setFormError('Selecione um horário preferido.')
      return
    }
    if (days.length === 0) {
      setFormError('Selecione pelo menos um dia de disponibilidade.')
      return
    }
    if (!about.trim()) {
      setFormError('Conte um pouco sobre você antes de enviar.')
      return
    }
    try {
      const response = await fetch('/api/volunteer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, area, time, days, about }),
      })
      if (response.ok) {
        setSubmitted(true)
      } else {
        setFormError('Algo deu errado. Tenta novamente.')
      }
    } catch {
      setFormError('Erro ao enviar. Verifica sua conexão.')
    }
  }

  if (submitted) {
    return (
      <section id="inscricao" style={s.wrap}>
        <div style={s.inner}>
          <div style={s.success}>
            <h2 style={s.successTitle}>Inscrição recebida, {name.split(' ')[0] || 'voluntário'}. ✅</h2>
            <p style={s.successBody}>
              A gente entra em contato em até <em>48 horas</em> pelo telefone que você cadastrou.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="inscricao" style={s.wrap} className="volunteer-form">
      <style>{formMobileCSS('volunteer-form', 'vf')}</style>
      <div style={s.inner} className="vf-inner">
        <div style={s.head}>
          <div style={s.eyebrow}>QUERO ME INSCREVER</div>
          <h2 style={s.h2}>Pronto para começar?</h2>
          <p style={s.sub}>A gente entra em contato em até 48 horas.</p>
        </div>
        <div style={sharedFormStyles.card} className="vf-card">
          <div style={sharedFormStyles.grid} className="vf-grid">
            <div style={{ ...sharedFormStyles.field, ...sharedFormStyles.fieldFull }}>
              <label style={sharedFormStyles.label}>Nome completo</label>
              <input style={sharedFormStyles.input} type="text" placeholder="Como você quer ser chamado" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div style={sharedFormStyles.field}>
              <label style={sharedFormStyles.label}>E-mail</label>
              <input style={sharedFormStyles.input} type="email" placeholder="voce@exemplo.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div style={sharedFormStyles.field}>
              <label style={sharedFormStyles.label}>Telefone / WhatsApp</label>
              <input style={sharedFormStyles.input} type="tel" placeholder="(65) 9 0000-0000" value={phone} onChange={handlePhoneChange} required />
            </div>
            <div style={sharedFormStyles.field}>
              <label style={sharedFormStyles.label}>Área de interesse</label>
              <select style={sharedFormStyles.input} value={area} onChange={(e) => setArea(e.target.value)} required>
                <option value="" disabled>Escolha uma área</option>
                {AREAS_OPTS.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
            <div style={sharedFormStyles.field}>
              <label style={sharedFormStyles.label}>Horário preferido</label>
              <select style={sharedFormStyles.input} value={time} onChange={(e) => setTime(e.target.value)} required>
                <option value="" disabled>Escolha um turno</option>
                {TIME_OPTS.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
            <div style={{ ...sharedFormStyles.field, ...sharedFormStyles.fieldFull }}>
              <label style={sharedFormStyles.label}>Disponibilidade na semana</label>
              <div style={s.daysRow}>
                {DAYS.map((d) => {
                  const active = days.includes(d)
                  return (
                    <button type="button" key={d} onClick={() => { toggleDay(d); setFormError(null) }} style={{ padding: '9px 14px', border: `1px solid ${active ? 'var(--pine-500)' : 'var(--ink-200)'}`, background: active ? 'var(--pine-100)' : '#fff', color: active ? 'var(--pine-900)' : 'var(--ink-700)', fontSize: 14, fontWeight: 500, borderRadius: 999, cursor: 'pointer' }}>
                      {active ? '✓ ' : ''}{d}
                    </button>
                  )
                })}
              </div>
              {formError?.includes('dia') && (
                <p style={{ margin: '8px 0 0', fontSize: 14, color: '#DC2626' }}>{formError}</p>
              )}
            </div>
            <div style={{ ...sharedFormStyles.field, ...sharedFormStyles.fieldFull }}>
              <label style={sharedFormStyles.label}>Conte um pouco sobre você</label>
              <textarea style={sharedFormStyles.textarea} placeholder="Sua formação, o que te trouxe até aqui, o que você gostaria de fazer na OSRV…" value={about} onChange={(e) => setAbout(e.target.value)} required />
            </div>
          </div>
          <div style={s.footerRow} className="vf-footer">
            <span style={s.lgpd}>🔒 Seus dados são protegidos pela LGPD.</span>
            <button type="button" style={sharedFormStyles.submit} className="vf-submit" onClick={handleSubmit}>
              Quero ser voluntário →
            </button>
            {formError && !formError.includes('dia') && (
              <p style={{ margin: '8px 0 0', fontSize: 14, color: '#DC2626' }}>{formError}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
