'use client'

const heroVStyles = {
  wrap: { position: 'relative' as const, minHeight: 'min(78vh, 680px)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', overflow: 'hidden', textAlign: 'center' as const },
  bg: { position: 'absolute' as const, inset: 0, background: '#1E4218' },
  bgImage: { position: 'absolute' as const, inset: 0, backgroundSize: 'cover', backgroundPosition: 'center 40%', backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=2000&q=80')" },
  greenScrim: { position: 'absolute' as const, inset: 0, background: 'linear-gradient(180deg, rgba(30,66,24,0.55) 0%, rgba(26,42,30,0.72) 100%)' },
  inner: { position: 'relative' as const, width: '100%', maxWidth: 880, margin: '0 auto', padding: '96px 48px 80px', display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: 28 },
  eyebrow: { fontSize: 12, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase' as const, color: 'rgba(250, 248, 244, 0.75)', display: 'inline-flex', alignItems: 'center', gap: 14 },
  rule: { width: 28, height: 1, background: 'rgba(250, 248, 244, 0.4)' },
  h1: { fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(2.6rem, 5.4vw, 4.8rem)', lineHeight: 1.02, letterSpacing: '-0.028em', margin: 0, color: '#FAF8F4' },
  italic: { fontFamily: 'var(--font-serif)', fontStyle: 'italic' as const, color: 'var(--amber-500)', fontSize: 'clamp(1.25rem, 2.1vw, 1.65rem)', lineHeight: 1.4, margin: 0, maxWidth: 620 },
  ctas: { display: 'flex', gap: 12, flexWrap: 'wrap' as const, justifyContent: 'center', marginTop: 12 },
  ctaPrimary: { display: 'inline-flex', alignItems: 'center', gap: 10, background: 'var(--amber-500)', color: '#fff', border: 0, borderRadius: 999, padding: '16px 28px', fontSize: 16, fontWeight: 500, cursor: 'pointer', textDecoration: 'none' },
  ctaGhost: { display: 'inline-flex', alignItems: 'center', gap: 10, background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.5)', borderRadius: 999, padding: '15px 26px', fontSize: 16, fontWeight: 500, cursor: 'pointer', textDecoration: 'none' },
  meta: { position: 'absolute' as const, right: 32, bottom: 24, fontSize: 11, color: 'rgba(255,255,255,0.45)', fontStyle: 'italic' as const, pointerEvents: 'none' as const },
}

export default function HeroVoluntario() {
  return (
    <header style={heroVStyles.wrap}>
      <div style={heroVStyles.bg}></div>
      <div style={heroVStyles.bgImage}></div>
      <div style={heroVStyles.greenScrim}></div>
      <div style={heroVStyles.inner}>
        <div style={heroVStyles.eyebrow}>
          <span style={heroVStyles.rule}></span>
          QUERO SER VOLUNTÁRIO · OSRV CUIABÁ
          <span style={heroVStyles.rule}></span>
        </div>
        <h1 style={heroVStyles.h1}>Doe seu tempo. Multiplique vidas.</h1>
        <p style={heroVStyles.italic}>Cada hora sua transforma uma rotina.</p>
        <div style={heroVStyles.ctas}>
          <a href="#inscricao" style={heroVStyles.ctaPrimary}>Quero me inscrever →</a>
          <a href="#areas" style={heroVStyles.ctaGhost}>Ver áreas de atuação</a>
        </div>
      </div>
      <div style={heroVStyles.meta}>foto · placeholder Unsplash</div>
    </header>
  )
}