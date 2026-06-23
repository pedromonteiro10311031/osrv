'use client'

import { useState } from 'react'

const fmStyles = {
  wrap: { background: 'var(--paper-100)', padding: '120px 0', borderTop: '1px solid #E5E0D8' },
  inner: { maxWidth: 860, margin: '0 auto', padding: '0 32px' },
  head: { textAlign: 'left' as const, marginBottom: 48, maxWidth: 720 },
  eyebrow: { fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'var(--pine-700)', marginBottom: 18 },
  h2: { fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.04, letterSpacing: '-0.025em', color: 'var(--ink-900)', margin: '0 0 18px' },
  sub: { fontFamily: 'var(--font-serif)', fontStyle: 'italic' as const, fontWeight: 400, fontSize: 'clamp(1.25rem, 2.2vw, 1.6rem)', lineHeight: 1.35, color: 'var(--amber-500)', margin: 0 },
  card: { background: '#fff', border: '1px solid var(--border-soft)', borderRadius: 12, padding: '48px', boxShadow: '0 2px 16px rgba(0,0,0,0.06)' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 },
  full: { gridColumn: '1 / -1' },
  field: { display: 'flex', flexDirection: 'column' as const, gap: 8 },
  label: { fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' as const, color: 'var(--fg-2)' },
  input: { fontSize: 16, color: 'var(--ink-900)', background: '#fff', padding: '14px 16px', border: '1px solid var(--ink-200)', borderRadius: 4, outline: 'none', width: '100%' },
  select: { fontSize: 16, color: 'var(--ink-900)', background: '#fff', padding: '14px 16px', border: '1px solid var(--ink-200)', borderRadius: 4, outline: 'none', width: '100%' },
  textarea: { fontSize: 16, lineHeight: 1.55, color: 'var(--ink-900)', background: '#fff', padding: '14px 16px', border: '1px solid var(--ink-200)', borderRadius: 4, outline: 'none', minHeight: 140, resize: 'vertical' as const, width: '100%' },
  submitRow: { display: 'flex', flexDirection: 'column' as const, gap: 14, marginTop: 32 },
  submit: { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, alignSelf: 'flex-start' as const, background: 'var(--amber-500)', color: '#fff', border: 0, borderRadius: 999, padding: '16px 32px', fontSize: 16, fontWeight: 500, cursor: 'pointer' },
  fine: { fontSize: 13, color: 'var(--fg-3)', margin: 0, display: 'inline-flex', alignItems: 'center', gap: 8 },
  success: { background: '#fff', borderRadius: 12, padding: '64px', boxShadow: '0 2px 16px rgba(0,0,0,0.06)', border: '1px solid var(--border-soft)', textAlign: 'center' as const, display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: 18 },
  successH: { fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 32, lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--ink-900)', margin: 0 },
  successP: { fontSize: 16, lineHeight: 1.6, color: 'var(--fg-2)', margin: 0, maxWidth: 460 },
}

const SEGMENTOS = ['Comércio', 'Indústria', 'Serviços', 'Saúde', 'Educação', 'Tecnologia', 'Outro']
const CONTRIB = ['Doação financeira', 'Patrocínio de projeto', 'Materiais', 'Serviços', 'Ação de engajamento', 'Parceria de mídia', 'Ainda não sei']

export default function ParceiroFormulario() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ nome: '', email: '', tel: '', empresa: '', segmento: '', contrib: '', msg: '' })
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setForm({ ...form, [k]: e.target.value })

  const handleSubmit = async () => {
  try {
    const response = await fetch('/api/partner', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })

    if (response.ok) {
      setSubmitted(true)
    } else {
      alert('Algo deu errado. Tente novamente.')
    }
  } catch (error) {
    console.error(error)
    alert('Erro ao enviar. Verifique sua conexão.')
  }
}

  if (submitted) {
    return (
      <section id="formulario" style={fmStyles.wrap}>
        <div style={fmStyles.inner}>
          <div style={fmStyles.success}>
            <span style={{ fontSize: 48 }}>✅</span>
            <h3 style={fmStyles.successH}>Recebemos sua mensagem.</h3>
            <p style={fmStyles.successP}>
              Obrigado, <b style={{ color: 'var(--ink-900)' }}>{form.nome || 'parceiro'}</b>. Vamos responder em até 24 horas úteis no e-mail informado.
            </p>
            <button type="button" style={{ ...fmStyles.submit, background: 'var(--ink-900)' }} onClick={() => setSubmitted(false)}>
              Voltar ao formulário
            </button>
          </div>
        </div>
      </section>
    )
  }

 return (
  <section id="formulario" style={fmStyles.wrap}>
    <div style={fmStyles.inner}>
      <div style={fmStyles.head}>
        <div style={fmStyles.eyebrow}>QUERO SER PARCEIRO</div>
        <h2 style={fmStyles.h2}>Vamos conversar?</h2>
        <p style={fmStyles.sub}>
          Preencha e a gente entra em contato em até 24 horas.
        </p>
      </div>

      <div style={fmStyles.card}>
        <div style={fmStyles.grid}>
          <div style={{ ...fmStyles.field, ...fmStyles.full }}>
            <label style={fmStyles.label}>Nome completo</label>
            <input
              style={fmStyles.input}
              type="text"
              required
              value={form.nome}
              onChange={set('nome')}
              placeholder="Como devemos te chamar?"
            />
          </div>

          <div style={fmStyles.field}>
            <label style={fmStyles.label}>E-mail corporativo</label>
            <input
              style={fmStyles.input}
              type="email"
              required
              value={form.email}
              onChange={set('email')}
              placeholder="voce@empresa.com.br"
            />
          </div>

          <div style={fmStyles.field}>
            <label style={fmStyles.label}>Telefone / WhatsApp</label>
            <input
              style={fmStyles.input}
              type="tel"
              required
              value={form.tel}
              onChange={set('tel')}
              placeholder="(65) 9 0000-0000"
            />
          </div>

          <div style={fmStyles.field}>
            <label style={fmStyles.label}>Nome da empresa</label>
            <input
              style={fmStyles.input}
              type="text"
              required
              value={form.empresa}
              onChange={set('empresa')}
              placeholder="Razão social ou marca"
            />
          </div>

          <div style={fmStyles.field}>
            <label style={fmStyles.label}>Segmento da empresa</label>
            <select
              style={fmStyles.select}
              required
              value={form.segmento}
              onChange={set('segmento')}
            >
              <option value="" disabled>
                Selecione um segmento
              </option>
              {SEGMENTOS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div style={{ ...fmStyles.field, ...fmStyles.full }}>
            <label style={fmStyles.label}>Como quer contribuir</label>
            <select
              style={fmStyles.select}
              required
              value={form.contrib}
              onChange={set('contrib')}
            >
              <option value="" disabled>
                Escolha uma forma de apoio
              </option>
              {CONTRIB.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div style={{ ...fmStyles.field, ...fmStyles.full }}>
            <label style={fmStyles.label}>Mensagem</label>
            <textarea
              style={fmStyles.textarea}
              value={form.msg}
              onChange={set('msg')}
              placeholder="Conte um pouco sobre sua empresa e como imagina a parceria"
            />
          </div>
        </div>

        <div style={fmStyles.submitRow}>
          <button
            type="button"
            style={fmStyles.submit}
            onClick={handleSubmit}
          >
            Quero ser parceiro →
          </button>

          <p style={fmStyles.fine}>
            🔒 Seus dados são protegidos pela LGPD. Retornamos em até 24 horas
            úteis.
          </p>
        </div>
      </div>
    </div>
  </section>
 )
}