'use client'

import { useState } from 'react'

const MOTIVOS = [
  'Conhecer o trabalho',
  'Avaliar parceria empresarial',
  'Interesse em voluntariar',
  'Visita de grupo / escola',
  'Imprensa',
  'Outro',
]

const PESSOAS = ['1', '2 a 5', '6 a 15', 'Mais de 15']

type FormData = {
  nome: string
  email: string
  telefone: string
  motivo: string
  pessoas: string
  data: string
  mensagem: string
}

type FormErrors = Partial<Record<keyof FormData, string>>

const EMPTY: FormData = { nome: '', email: '', telefone: '', motivo: '', pessoas: '', data: '', mensagem: '' }

const vf = {
  card: {
    background: '#fff', borderRadius: 12, boxShadow: 'var(--shadow-card)',
    padding: 'clamp(28px, 4vw, 48px)', maxWidth: 760, margin: '0 auto', width: '100%',
  } as React.CSSProperties,
  eyebrow: { fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'var(--pine-700)', marginBottom: 14 },
  title:   { fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 'clamp(1.875rem, 3vw, 2.5rem)', lineHeight: 1.06, letterSpacing: '-0.02em', color: 'var(--ink-900)', margin: '0 0 14px' },
  subtitle:{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' as const, fontWeight: 400, fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', lineHeight: 1.2, color: 'var(--amber-500)', margin: '0 0 16px' },
  intro:   { fontSize: 16, lineHeight: 1.6, color: 'var(--fg-2)', margin: 0, maxWidth: '56ch' },

  grid:      { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px 24px' } as React.CSSProperties,
  field:     { display: 'flex', flexDirection: 'column', gap: 7 } as React.CSSProperties,
  fieldFull: { gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: 7 } as React.CSSProperties,
  label:     { fontSize: 13, fontWeight: 600, color: 'var(--ink-700)' } as React.CSSProperties,
  req:       { color: 'var(--amber-700)', marginLeft: 2 },
  control:   {
    fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--ink-900)', background: '#fff',
    padding: '12px 14px', border: '1px solid var(--ink-200)', borderRadius: 4,
    outline: 'none', width: '100%',
    transition: 'border-color 0.12s ease, box-shadow 0.12s ease',
    boxSizing: 'border-box',
  } as React.CSSProperties,
  err: { fontSize: 12, color: 'var(--danger)', display: 'flex', alignItems: 'center', gap: 6 } as React.CSSProperties,
  submit: {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
    background: 'var(--amber-500)', color: '#fff', border: 0, borderRadius: 999,
    padding: '15px 30px', fontFamily: 'var(--font-sans)', fontSize: 16, fontWeight: 500,
    cursor: 'pointer', transition: 'background 0.12s ease',
  } as React.CSSProperties,
  lgpd: { display: 'flex', alignItems: 'center', gap: 8, fontSize: 12.5, color: 'var(--fg-3)' } as React.CSSProperties,
  successIcon: {
    width: 60, height: 60, borderRadius: '50%', background: 'var(--pine-100)',
    color: 'var(--pine-700)', display: 'inline-flex', alignItems: 'center',
    justifyContent: 'center', marginBottom: 20, fontSize: 28,
  } as React.CSSProperties,
  successH: { fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 500, color: 'var(--ink-900)', margin: '0 0 12px', letterSpacing: '-0.02em' },
}

function ctrlStyle(errors: FormErrors, key: keyof FormData): React.CSSProperties {
  return errors[key]
    ? { ...vf.control, borderColor: 'var(--danger)', boxShadow: '0 0 0 3px rgba(179,58,58,.12)' }
    : vf.control
}

function onFocus(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
  e.target.style.borderColor = 'var(--pine-500)'
  e.target.style.boxShadow   = '0 0 0 3px var(--pine-100)'
}

function onBlur(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
  e.target.style.borderColor = 'var(--ink-200)'
  e.target.style.boxShadow   = 'none'
}

function validate(form: FormData): FormErrors {
  const er: FormErrors = {}
  if (!form.nome.trim())     er.nome     = 'Conte pra gente seu nome.'
  if (!form.email.trim())    er.email    = 'Precisamos de um e-mail para confirmar.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) er.email = 'E-mail inválido — verifique.'
  if (!form.telefone.trim()) er.telefone = 'Um telefone ou WhatsApp para combinar.'
  if (!form.motivo)          er.motivo   = 'Selecione o motivo da visita.'
  if (!form.pessoas)         er.pessoas  = 'Quantas pessoas vêm?'
  if (!form.data)            er.data     = 'Escolha uma data preferida.'
  return er
}

export default function VisitForm() {
  const [form, setForm]           = useState<FormData>(EMPTY)
  const [errors, setErrors]       = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function set(k: keyof FormData) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [k]: e.target.value }))
      setErrors((er) => ({ ...er, [k]: undefined }))
    }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const er = validate(form)
    setErrors(er)
    if (Object.keys(er).length === 0) setSubmitted(true)
  }

  if (submitted) {
    return (
      <div style={{ ...vf.card, textAlign: 'center' }}>
        <div style={vf.successIcon}>✓</div>
        <h3 style={vf.successH}>Recebemos seu pedido, {form.nome.split(' ')[0]}.</h3>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--fg-2)', margin: '0 auto 26px', maxWidth: '46ch' }}>
          Nossa equipe entra em contato em até 24 horas pelo e-mail{' '}
          <b style={{ color: 'var(--ink-900)' }}>{form.email}</b> ou WhatsApp para combinar o melhor
          dia e horário. Já deixamos o café passando.
        </p>
        <button
          type="button"
          style={{ ...vf.submit, background: 'transparent', color: 'var(--ink-900)', border: '1px solid var(--border-hard)' }}
          onClick={() => { setForm(EMPTY); setSubmitted(false) }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--paper-200)' }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent' }}
        >
          Agendar outra visita
        </button>
      </div>
    )
  }

  return (
    <div style={vf.card}>
      <div style={{ marginBottom: 28 }}>
        <div style={vf.eyebrow}>VAMOS MARCAR?</div>
        <h2 style={vf.title}>Agende sua visita.</h2>
        <p style={vf.subtitle}>Respondemos em até 24 horas para confirmar.</p>
        <p style={vf.intro}>Preencha o formulário e nossa equipe entra em contato para combinar o melhor dia e horário.</p>
      </div>

      <form style={vf.grid} onSubmit={onSubmit} noValidate>
        <div style={vf.fieldFull}>
          <label style={vf.label}>Nome completo<span style={vf.req}>*</span></label>
          <input style={ctrlStyle(errors, 'nome')} type="text" placeholder="Como podemos te chamar?" value={form.nome} onChange={set('nome')} onFocus={onFocus} onBlur={onBlur} />
          {errors.nome && <span style={vf.err}>{errors.nome}</span>}
        </div>

        <div style={vf.field}>
          <label style={vf.label}>E-mail<span style={vf.req}>*</span></label>
          <input style={ctrlStyle(errors, 'email')} type="email" placeholder="voce@exemplo.com" value={form.email} onChange={set('email')} onFocus={onFocus} onBlur={onBlur} />
          {errors.email && <span style={vf.err}>{errors.email}</span>}
        </div>

        <div style={vf.field}>
          <label style={vf.label}>Telefone / WhatsApp<span style={vf.req}>*</span></label>
          <input style={ctrlStyle(errors, 'telefone')} type="tel" placeholder="(65) 9 0000-0000" value={form.telefone} onChange={set('telefone')} onFocus={onFocus} onBlur={onBlur} />
          {errors.telefone && <span style={vf.err}>{errors.telefone}</span>}
        </div>

        <div style={vf.field}>
          <label style={vf.label}>Motivo da visita<span style={vf.req}>*</span></label>
          <select style={ctrlStyle(errors, 'motivo')} value={form.motivo} onChange={set('motivo')} onFocus={onFocus} onBlur={onBlur}>
            <option value="" disabled>Selecione…</option>
            {MOTIVOS.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
          {errors.motivo && <span style={vf.err}>{errors.motivo}</span>}
        </div>

        <div style={vf.field}>
          <label style={vf.label}>Número de pessoas<span style={vf.req}>*</span></label>
          <select style={ctrlStyle(errors, 'pessoas')} value={form.pessoas} onChange={set('pessoas')} onFocus={onFocus} onBlur={onBlur}>
            <option value="" disabled>Selecione…</option>
            {PESSOAS.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
          {errors.pessoas && <span style={vf.err}>{errors.pessoas}</span>}
        </div>

        <div style={vf.fieldFull}>
          <label style={vf.label}>Data preferida<span style={vf.req}>*</span></label>
          <input style={ctrlStyle(errors, 'data')} type="date" value={form.data} onChange={set('data')} onFocus={onFocus} onBlur={onBlur} />
          {errors.data && <span style={vf.err}>{errors.data}</span>}
        </div>

        <div style={vf.fieldFull}>
          <label style={vf.label}>Mensagem <span style={{ fontWeight: 400, color: 'var(--fg-3)' }}>(opcional)</span></label>
          <textarea
            style={{ ...ctrlStyle(errors, 'mensagem'), resize: 'vertical', minHeight: 96 }}
            rows={3}
            placeholder="Algo que você gostaria de ver ou saber na visita?"
            value={form.mensagem}
            onChange={set('mensagem')}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </div>

        <div style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginTop: 4 }}>
          <span style={vf.lgpd}>🔒 Seus dados são protegidos pela LGPD.</span>
          <button
            type="submit"
            style={vf.submit}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--amber-700)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--amber-500)' }}
          >
            Agendar visita →
          </button>
        </div>
      </form>
    </div>
  )
}
