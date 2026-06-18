'use client'

const heroDStyles = {
  wrap: { position: 'relative' as const, minHeight: 'min(78vh, 720px)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', overflow: 'hidden' },
  bgImage: { position: 'absolute' as const, inset: 0, backgroundSize: 'cover', backgroundPosition: 'center 35%', backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=2000&q=80')" },
  overlay: { position: 'absolute' as const, inset: 0, background: 'linear-gradient(180deg, rgba(30,66,24,0.55) 0%, rgba(26,42,30,0.72) 100%)' },
  inner: { position: 'relative' as const, width: '100%', maxWidth: 'var(--container-wide)', margin: '0 auto', padding: '48px', display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: 22, textAlign: 'center' as const },
  eyebrow: { fontSize: 12, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase' as const, color: 'rgba(250, 248, 244, 0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 },
  rule: { width: 36, height: 1, background: 'rgba(250, 248, 244, 0.35)' },
  h1: { fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(2.5rem, 5.8vw, 4.75rem)', lineHeight: 1.02, letterSpacing: '-0.03em', maxWidth: 920, margin: 0, color: '#FAF8F4' },
  green: { fontFamily: 'var(--font-serif)', fontWeight: 400, fontStyle: 'italic' as const, color: '#F39C2A', fontSize: 'clamp(1.5rem, 2.6vw, 2.1rem)', lineHeight: 1.25, maxWidth: 720, margin: 0 },
  jumpRow: { display: 'flex', flexWrap: 'wrap' as const, justifyContent: 'center', gap: 10, marginTop: 14 },
  jump: { display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.10)', color: '#FAF8F4', border: '1px solid rgba(255,255,255,0.22)', borderRadius: 999, padding: '9px 16px', fontSize: 13, fontWeight: 500, textDecoration: 'none' },
  caption: { position: 'absolute' as const, bottom: 16, right: 24, fontFamily: 'var(--font-serif)', fontStyle: 'italic' as const, fontSize: 12, color: 'rgba(255,255,255,0.40)', pointerEvents: 'none' as const },
}

const jumps = [
  ['modalidade', 'Doar agora'],
  ['transparencia', 'Para onde vai'],
  ['impacto', 'O que sua doação faz'],
  ['faq', 'Perguntas frequentes'],
]

export default function HeroDoar() {
  return (
    <header style={heroDStyles.wrap}>
      <div style={heroDStyles.bgImage}></div>
      <div style={heroDStyles.overlay}></div>
      <div style={heroDStyles.inner}>
        <div style={heroDStyles.eyebrow}>
          <span style={heroDStyles.rule}></span>
          QUERO SER DOADOR · OSRV CUIABÁ
        </div>
        <h1 style={heroDStyles.h1}>
          Sua doação faz uma criança<br/>sorrir hoje.
        </h1>
        <p style={heroDStyles.green}>Escolha como você quer transformar vidas.</p>
        <div style={heroDStyles.jumpRow}>
          {jumps.map(([id, label]) => (
            <a key={id} href={`#${id}`} style={heroDStyles.jump}>{label} →</a>
          ))}
        </div>
      </div>
      <div style={heroDStyles.caption}>foto · placeholder Unsplash</div>
    </header>
  )
}