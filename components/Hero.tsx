const heroStyles = {
  wrap: {
    position: 'relative' as const,
    width: '100%',
    minHeight: 'min(82vh, 760px)',
    display: 'flex',
    alignItems: 'flex-end',
    color: '#fff',
    overflow: 'hidden',
    margin: 0,
    borderRadius: 0,
  },
  bg: {
    position: 'absolute' as const,
    inset: 0,
    background:
      'radial-gradient(ellipse at 22% 30%, #F8C175 0%, transparent 55%),' +
      'radial-gradient(ellipse at 80% 70%, #2E6826 0%, transparent 60%),' +
      'linear-gradient(160deg, #4A9B3E 0%, #1E4218 60%, #15445A 120%)',
  },
  bgImage: {
    position: 'absolute' as const,
    inset: 0,
    opacity: 0.7,
    mixBlendMode: 'multiply' as const,
    backgroundSize: 'cover',
    backgroundPosition: 'center 35%',
    backgroundImage: "url('https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=2000&q=80')",
  },
  scrim: {
    position: 'absolute' as const,
    inset: 0,
    background: 'rgba(0, 0, 0, 0.35)',
  },
  vignette: {
    position: 'absolute' as const,
    inset: 0,
    background: 'linear-gradient(90deg, rgba(31,42,46,0.55) 0%, rgba(31,42,46,0.0) 50%)',
  },
  inner: {
    position: 'relative' as const,
    width: '100%',
    maxWidth: 'var(--container-wide)',
    margin: '0 auto',
    padding: '64px 48px 56px',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 28,
  },
  eyebrow: {
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '0.18em',
    textTransform: 'uppercase' as const,
    color: 'rgba(250, 248, 244, 0.6)',
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  rule: {
    width: 36,
    height: 1,
    background: 'rgba(250, 248, 244, 0.35)',
  },
  h1: {
    fontFamily: 'var(--font-serif)',
    fontWeight: 400,
    fontSize: 'clamp(3rem, 6.4vw, 5.5rem)',
    lineHeight: 0.98,
    letterSpacing: '-0.03em',
    maxWidth: 920,
    margin: 0,
    color: '#FAF8F4',
  },
  italic: {
    fontFamily: 'var(--font-serif)',
    fontStyle: 'italic' as const,
    color: '#F39C2A',
  },
  lead: {
    fontSize: 18,
    lineHeight: 1.55,
    color: 'rgba(250, 248, 244, 0.8)',
    maxWidth: 580,
    margin: 0,
  },
  ctas: {
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap' as const,
    marginTop: 8,
  },
  ctaPrimary: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    background: 'var(--amber-500)',
    color: '#fff',
    border: 0,
    borderRadius: 999,
    padding: '16px 26px',
    fontSize: 16,
    fontWeight: 500,
    cursor: 'pointer',
    textDecoration: 'none',
  },
  ctaGhost: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    background: 'transparent',
    color: '#fff',
    border: '1px solid rgba(255,255,255,0.5)',
    borderRadius: 999,
    padding: '15px 26px',
    fontSize: 16,
    fontWeight: 500,
    cursor: 'pointer',
    textDecoration: 'none',
  },
  meta: {
    position: 'absolute' as const,
    right: 48,
    bottom: 56,
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)',
    letterSpacing: '0.08em',
    textTransform: 'uppercase' as const,
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
};

export default function Hero({ onDonateClick }: { onDonateClick?: () => void }) {
  return (
    <header style={heroStyles.wrap}>
      <div style={heroStyles.bg}></div>
      <div style={heroStyles.bgImage}></div>
      <div style={heroStyles.scrim}></div>
      <div style={heroStyles.vignette}></div>
      <div style={heroStyles.inner}>
        <div style={heroStyles.eyebrow}>
          <span style={heroStyles.rule}></span>
          OBRAS SOCIAIS RAFAEL VERLANGIERI · CUIABÁ / MT
        </div>
        <h1 style={heroStyles.h1}>
          Tire uma criança das ruas.<br/>
          <span style={heroStyles.italic}>Coloque ela em um lugar seguro.</span>
        </h1>
        <p style={heroStyles.lead}>
          Há mais de 12 anos transformando vidas em Jardim Renascer, Cuiabá.
        </p>
        <div style={heroStyles.ctas}>
          <a href="/doador" style={heroStyles.ctaPrimary}>
            Doar agora →
          </a>
          <a href="#projetos" style={heroStyles.ctaGhost}>
            Conhecer os projetos
          </a>
        </div>
      </div>
      <div style={heroStyles.meta}>
        📍 JARDIM RENASCER
      </div>
    </header>
  );
}