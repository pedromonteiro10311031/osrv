'use client'

import { useState } from 'react'
import { sharedFormStyles, formMobileCSS } from '@/lib/formStyles'

const s = {
  wrap: { background: 'var(--paper-100)', padding: '120px 0' },
  inner: { maxWidth: 860, margin: '0 auto', padding: '0 32px' },
  head: { textAlign: 'left' as const, marginBottom: 48, maxWidth: 720 },
  eyebrow: { fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'var(--pine-700)', marginBottom: 18 },
  h2: { fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.04, letterSpacing: '-0.025em', color: 'var(--ink-900)', margin: '0 0 18px' },
  sub: { fontFamily: 'var(--font-serif)', fontStyle: 'italic' as const, fontWeight: 400, fontSize: 'clamp(1.25rem, 2.2vw, 1.6rem)', lineHeight: 1.35, color: 'var(--amber-500)', margin: 0 },
  submitRow: { display: 'flex', flexDirection: 'column' as const, gap: 14, marginTop: 32 },
  fine: { fontSize: 13, color: 'var(--fg-3)', margin: 0, display: 'inline-flex', alignItems: 'center', gap: 8 },
  success: { background: '#fff', borderRadius: 12, padding: '64px', boxShadow: '0 2px 16px rgba(0,0,0,0.06)', border: '1px solid var(--border-soft)', textAlign: 'center' as const, display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: 18 },
  successH: { fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 32, lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--ink-900)', margin: 0 },
  successP: { fontSize: 16, lineHeight: 1.6, color: 'var(--fg-2)', margin: 0, maxWidth: 460 },
}

const SEGMENTOS = ['Comércio', 'Indústria', 'Serviços', 'Saúde', 'Educação', 'Tecnologia', 'Outro']
const CONTRIB = ['Doação financeira', 'Patrocínio de projeto', 'Materiais', 'Serviços', 'Ação de engajamento', 'Parceria de mídia', 'Ainda não sei']

export default function ParceiroFormulario() {
  const [submitted, setSubmitted] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  const [form, setForm] = useState({ nome: '', email: '', tel: '', empresa: '', segmento: '', contrib: '', msg: '' })
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setForm({ ...form, [k]: e.target.value })

  const handleTelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, tel: e.target.value.replace(/[^\d\s()\-+]/g, '') })
  }

  const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

  const handleSubmit = async () => {
    setFormError(null)
    if (!form.nome.trim()) {
      setFormError('Informe seu nome completo.')
      return
    }
    if (!isValidEmail(form.email)) {
      setFormError('Informe um e-mail válido (ex: voce@empresa.com.br).')
      return
    }
    if (!form.tel.trim()) {
      setFormError('Informe seu telefone.')
      return
    }
    if (!form.empresa.trim()) {
      setFormError('Informe o nome da empresa.')
      return
    }
    if (!form.segmento) {
      setFormError('Selecione o segmento da empresa.')
      return
    }
    if (!form.contrib) {
      setFormError('Selecione como quer contribuir.')
      return
    }
    if (!form.msg.trim()) {
      setFormError('Escreva uma mensagem antes de enviar.')
      return
    }
    try {
      const response = await fetch('/api/partner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (response.ok) {
        setSubmitted(true)
      } else {
        setFormError('Algo deu errado. Tente novamente.')
      }
    } catch {
      setFormError('Erro ao enviar. Verifique sua conexão.')
    }
  }

  if (submitted) {
    return (
      <section id="formulario" style={s.wrap}>
        <div style={s.inner}>
          <div style={s.success}>
            <span style={{ fontSize: 48 }}>✅</span>
            <h3 style={s.successH}>Recebemos sua mensagem.</h3>
            <p style={s.successP}>
              Obrigado, <b style={{ color: 'var(--ink-900)' }}>{form.nome || 'parceiro'}</b>. Vamos responder em até 24 horas úteis no e-mail informado.
            </p>
            <button type="button" style={{ ...sharedFormStyles.submit, background: 'var(--ink-900)' }} onClick={() => setSubmitted(false)}>
              Voltar ao formulário
            </button>
          </div>
        </div>
      </section>
    )
  }

 return (
  <section id="formulario" style={s.wrap} className="parceiro-form">
    <style>{formMobileCSS('parceiro-form', 'pf')}</style>
    <div style={s.inner} className="pf-inner">
      <div style={s.head}>
        <div style={s.eyebrow}>QUERO SER PARCEIRO</div>
        <h2 style={s.h2}>Vamos conversar?</h2>
        <p style={s.sub}>
          Preencha e a gente entra em contato em até 24 horas.
        </p>
      </div>

      <div style={sharedFormStyles.card} className="pf-card">
        <div style={sharedFormStyles.grid} className="pf-grid">
          <div style={{ ...sharedFormStyles.field, ...sharedFormStyles.fieldFull }}>
            <label style={sharedFormStyles.label}>Nome completo</label>
            <input
              style={sharedFormStyles.input}
              type="text"
              required
              value={form.nome}
              onChange={set('nome')}
              placeholder="Como devemos te chamar?"
            />
          </div>

          <div style={sharedFormStyles.field}>
            <label style={sharedFormStyles.label}>E-mail corporativo</label>
            <input
              style={sharedFormStyles.input}
              type="email"
              required
              value={form.email}
              onChange={set('email')}
              placeholder="voce@empresa.com.br"
            />
          </div>

          <div style={sharedFormStyles.field}>
            <label style={sharedFormStyles.label}>Telefone / WhatsApp</label>
            <input
              style={sharedFormStyles.input}
              type="tel"
              required
              value={form.tel}
              onChange={handleTelChange}
              placeholder="(65) 9 0000-0000"
            />
          </div>

          <div style={sharedFormStyles.field}>
            <label style={sharedFormStyles.label}>Nome da empresa</label>
            <input
              style={sharedFormStyles.input}
              type="text"
              required
              value={form.empresa}
              onChange={set('empresa')}
              placeholder="Razão social ou marca"
            />
          </div>

          <div style={sharedFormStyles.field}>
            <label style={sharedFormStyles.label}>Segmento da empresa</label>
            <select
              style={sharedFormStyles.input}
              required
              value={form.segmento}
              onChange={set('segmento')}
            >
              <option value="" disabled>
                Selecione um segmento
              </option>
              {SEGMENTOS.map((seg) => (
                <option key={seg} value={seg}>
                  {seg}
                </option>
              ))}
            </select>
          </div>

          <div style={{ ...sharedFormStyles.field, ...sharedFormStyles.fieldFull }}>
            <label style={sharedFormStyles.label}>Como quer contribuir</label>
            <select
              style={sharedFormStyles.input}
              required
              value={form.contrib}
              onChange={set('contrib')}
            >
              <option value="" disabled>
                Escolha uma forma de apoio
              </option>
              {CONTRIB.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div style={{ ...sharedFormStyles.field, ...sharedFormStyles.fieldFull }}>
            <label style={sharedFormStyles.label}>Mensagem</label>
            <textarea
              style={sharedFormStyles.textarea}
              value={form.msg}
              onChange={set('msg')}
              placeholder="Conte um pouco sobre sua empresa e como imagina a parceria"
              required
            />
          </div>
        </div>

        <div style={s.submitRow} className="pf-footer">
          <button
            type="button"
            style={sharedFormStyles.submit}
            className="pf-submit"
            onClick={handleSubmit}
          >
            Quero ser parceiro →
          </button>
          {formError && (
            <p style={{ margin: '8px 0 0', fontSize: 14, color: '#DC2626' }}>{formError}</p>
          )}

          <p style={s.fine}>
            🔒 Seus dados são protegidos pela LGPD. Retornamos em até 24 horas
            úteis.
          </p>
        </div>
      </div>
    </div>
  </section>
 )
}
