const phStyles = {
  wrap: {
    position: 'relative' as const,
    width: '100%',
    margin: 0,
    borderRadius: 0,
    overflow: 'hidden',
    minHeight: 'min(78vh, 720px)',
    color: '#FAF8F4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg: {
    position: 'absolute' as const,
    inset: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 38%',
    backgroundColor: '#1E4218',
  },
  overlay: {
    position: 'absolute' as const,
    inset: 0,
    background: 'linear-gradient(180deg, rgba(30,66,24,0.55) 0%, rgba(26,42,30,0.72) 100%)',
  },
  inner: {
    position: 'relative' as const,
    width: '100%',
    maxWidth: 'var(--container-wide)',
    padding: '120px 48px 96px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    textAlign: 'center' as const,
    gap: 28,
  },
  eyebrow: {
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '0.2em',
    textTransform: 'uppercase' as const,
    color: 'rgba(250, 248, 244, 0.75)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 14,
  },
  rule: { width: 36, height: 1, background: 'rgba(250,248,244,0.4)' },
  h1: {
    fontFamily: 'var(--font-serif)',
    fontWeight: 400,
    fontSize: 'clamp(2.8rem, 6vw, 5.25rem)',
    lineHeight: 0.98,
    letterSpacing: '-0.03em',
    margin: 0,
    color: '#FAF8F4',
    maxWidth: 1100,
  },
  sub: {
    fontFamily: 'var(--font-serif)',
    fontStyle: 'italic' as const,
    color: 'var(--amber-500)',
    fontSize: 'clamp(1.3rem, 1.8vw, 1.625rem)',
    lineHeight: 1.35,
    margin: 0,
    maxWidth: 760,
  },
}

interface PageHeroProps {
  eyebrow: string
  title: string
  subtitle?: string
  bgImage?: string
  actions?: React.ReactNode
}

export default function PageHero({ eyebrow, title, subtitle, bgImage, actions }: PageHeroProps) {
  return (
    <header style={phStyles.wrap} className="page-hero">
      <div style={{ ...phStyles.bg, backgroundImage: bgImage ? `url('${bgImage}')` : undefined }}></div>
      <div style={phStyles.overlay}></div>
      <div style={phStyles.inner}>
        <div style={phStyles.eyebrow}>
          <span style={phStyles.rule}></span>
          {eyebrow}
          <span style={phStyles.rule}></span>
        </div>
        <h1 style={phStyles.h1}>{title}</h1>
        {subtitle && <p style={phStyles.sub}>{subtitle}</p>}
        {actions && <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center', marginTop: 6 }}>{actions}</div>}
      </div>
    </header>
  )
}
