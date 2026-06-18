const phStyles = {
  wrap: { position: 'relative' as const, width: '100%', minHeight: 'min(82vh, 760px)', display: 'flex', alignItems: 'center', color: 'var(--paper-100)', overflow: 'hidden', margin: 0, borderRadius: 0 },
  bg: { position: 'absolute' as const, inset: 0, backgroundSize: 'cover', backgroundPosition: 'center 38%', backgroundImage: "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2200&q=80')" },
  overlay: { position: 'absolute' as const, inset: 0, background: 'linear-gradient(180deg, rgba(30,66,24,0.55) 0%, rgba(26,42,30,0.72) 100%)', pointerEvents: 'none' as const },
  inner: { position: 'relative' as const, width: '100%', maxWidth: 'var(--container-wide)', margin: '0 auto', padding: '96px 48px 80px', display: 'flex', flexDirection: 'column' as const, alignItems: 'center', textAlign: 'center' as const, gap: 28 },
  eyebrow: { fontSize: 12, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase' as const, color: 'rgba(250, 248, 244, 0.75)', display: 'inline-flex', alignItems: 'center', gap: 14 },
  rule: { width: 36, height: 1, background: 'rgba(250, 248, 244, 0.45)' },
  h1: { fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(2.75rem, 6.4vw, 5.25rem)', lineHeight: 1.0, letterSpacing: '-0.03em', maxWidth: 1000, margin: 0, color: '#FAF8F4' },
  sub: { fontFamily: 'var(--font-serif)', fontStyle: 'italic' as const, fontWeight: 400, fontSize: 'clamp(1.4rem, 2.4vw, 1.875rem)', lineHeight: 1.3, color: 'var(--amber-500)', maxWidth: 700, margin: 0 },
  ctas: { display: 'flex', gap: 14, flexWrap: 'wrap' as const, justifyContent: 'center', marginTop: 12 },
  ctaPrimary: { display: 'inline-flex', alignItems: 'center', gap: 10, background: 'var(--amber-500)', color: '#fff', border: 0, borderRadius: 999, padding: '16px 28px', fontSize: 16, fontWeight: 500, cursor: 'pointer', textDecoration: 'none' },
  ctaGhost: { display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(31, 42, 46, 0.35)', color: 'var(--paper-100)', border: '1px solid rgba(250, 248, 244, 0.45)', borderRadius: 999, padding: '15px 28px', fontSize: 16, fontWeight: 500, cursor: 'pointer', textDecoration: 'none' },
  meta: { position: 'absolute' as const, left: 48, bottom: 32, fontSize: 11, color: 'rgba(255,255,255,0.65)', letterSpacing: '0.14em', textTransform: 'uppercase' as const, display: 'flex', alignItems: 'center', gap: 8 },
  metaRight: { position: 'absolute' as const, right: 48, bottom: 32, fontSize: 11, color: 'rgba(255,255,255,0.65)', letterSpacing: '0.14em', textTransform: 'uppercase' as const, display: 'flex', alignItems: 'center', gap: 8 },
}

export default function ParceiroHero() {
  return (
    <header style={phStyles.wrap}>
      <div style={phStyles.bg}></div>
      <div style={phStyles.overlay}></div>
      <div style={phStyles.inner}>
        <div style={phStyles.eyebrow}>
          <span style={phStyles.rule}></span>
          QUERO SER PARCEIRO · OSRV CUIABÁ
          <span style={phStyles.rule}></span>
        </div>
        <h1 style={phStyles.h1}>Sua empresa pode mudar<br/>uma geração.</h1>
        <p style={phStyles.sub}>Impacto real. Reconhecimento genuíno.</p>
        <div style={phStyles.ctas}>
          <a href="#formulario" style={phStyles.ctaPrimary}>Quero ser parceiro →</a>
          <a href="#beneficios" style={phStyles.ctaGhost}>Ver benefícios</a>
        </div>
      </div>
      <div style={phStyles.meta}>📍 JARDIM RENASCER · CUIABÁ</div>
      <div style={phStyles.metaRight}>🛡 CEBAS · OSCIP</div>
    </header>
  )
}