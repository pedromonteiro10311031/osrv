'use client'

import { useState } from 'react'

const stStyles = {
  wrap: { background: '#1B2B1E', color: 'var(--paper-100)', display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'stretch' as const, minHeight: 640 },
  content: { padding: '120px 64px 120px 80px', maxWidth: 640, alignSelf: 'center' as const, width: '100%', boxSizing: 'border-box' as const },
  eyebrow: { fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'var(--amber-300)', marginBottom: 18 },
  h2: { fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(2rem, 3.4vw, 2.875rem)', lineHeight: 1.1, letterSpacing: '-0.022em', color: 'var(--paper-100)', margin: 0, maxWidth: 540 },
  sub: { fontFamily: 'var(--font-serif)', fontStyle: 'italic' as const, color: 'var(--amber-500)', fontSize: 'clamp(1.0625rem, 1.4vw, 1.25rem)', marginTop: 14, marginBottom: 36 },
  body: { fontSize: 17, lineHeight: 1.7, color: 'rgba(250, 248, 244, 0.9)', margin: '0 0 20px', maxWidth: 520 },
  meta: { display: 'flex', alignItems: 'center', gap: 14, marginTop: 32, marginBottom: 28, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.12)' },
  avatar: { width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(140deg, var(--amber-300), var(--amber-700))', flex: 'none' as const },
  metaName: { fontSize: 14, fontWeight: 600, color: 'var(--paper-100)', lineHeight: 1.2 },
  metaRole: { fontSize: 12, color: 'rgba(250,248,244,0.65)', marginTop: 2, letterSpacing: '0.04em' },
  cta: { display: 'inline-flex', alignItems: 'center', gap: 10, borderRadius: 999, padding: '14px 24px', fontSize: 15, fontWeight: 600, textDecoration: 'none', cursor: 'pointer', marginTop: 8, color: '#1F2A2E', border: 0 },
  portrait: { position: 'relative' as const, width: '100%', minHeight: 640, overflow: 'hidden' },
  portraitImg: { position: 'absolute' as const, inset: 0, backgroundSize: 'cover', backgroundPosition: 'center 25%', backgroundImage: "url('https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=1200&q=80')" },
  caption: { position: 'absolute' as const, top: 24, right: 24, background: 'rgba(0,0,0,0.4)', color: 'rgba(255,255,255,0.92)', fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, padding: '6px 10px', borderRadius: 4 },
}

export default function HistoriaDestaque() {
  const [hover, setHover] = useState(false)
  return (
    <section style={stStyles.wrap} id="historia">
      <div style={stStyles.content}>
        <div style={stStyles.eyebrow}>UMA HISTÓRIA · JARDIM RENASCER</div>
        <h2 style={stStyles.h2}>Ela começou no Judô. Hoje ensina as mais novas.</h2>
        <p style={stStyles.sub}>O ciclo que a OSRV planta.</p>
        <p style={stStyles.body}>Joana chegou na OSRV aos 8 anos, levada pela tia. Começou no Judô meio tímida, sem saber direito o que fazer. Em pouco tempo, virou a "capitã" do grupo — sempre a primeira a chegar e a última a sair.</p>
        <p style={stStyles.body}>Hoje, aos 17, ela continua treinando — só que agora também ajuda a ensinar as crianças mais novas. Para muitas delas, Joana é a referência mais próxima do que querem ser quando crescerem.</p>
        <div style={stStyles.meta}>
          <div style={stStyles.avatar}></div>
          <div>
            <div style={stStyles.metaName}>Joana, 17 anos</div>
            <div style={stStyles.metaRole}>FAIXA ROXA · MONITORA DE JUDÔ</div>
          </div>
        </div>
        <a href="#" style={{ ...stStyles.cta, background: hover ? 'var(--amber-700)' : 'var(--amber-500)' }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
          Ler a história completa →
        </a>
      </div>
      <div style={stStyles.portrait}>
        <div style={stStyles.portraitImg}></div>
        <span style={stStyles.caption}>2014 → 2026 · 12 ANOS NO TATAME</span>
      </div>
    </section>
  )
}