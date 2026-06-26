import Link from 'next/link'

const storyStyles = {
  wrap: {
    background: '#1A2A1E',
    color: 'var(--paper-100)',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'stretch' as const,
    minHeight: 640,
  },
  portrait: {
    position: 'relative' as const,
    width: '100%',
    minHeight: 640,
    overflow: 'hidden',
  },
  portraitImg: {
    position: 'absolute' as const,
    inset: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 30%',
    backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80')",
  },
  portraitOverlay: {
    position: 'absolute' as const,
    inset: 0,
    background: 'rgba(0, 0, 0, 0.25)',
    pointerEvents: 'none' as const,
  },
  caption: {
    position: 'absolute' as const,
    top: 24,
    right: 24,
    background: 'rgba(0,0,0,0.4)',
    color: 'rgba(255,255,255,0.9)',
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.14em',
    textTransform: 'uppercase' as const,
    padding: '6px 10px',
    borderRadius: 4,
  },
  content: {
    padding: '120px 64px 120px 80px',
    maxWidth: 620,
    alignSelf: 'center' as const,
  },
  eyebrow: { fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: '#F8C175', marginBottom: 14 },
  quote: {
    fontFamily: 'var(--font-serif)',
    fontWeight: 400,
    fontSize: 'clamp(1.875rem, 3vw, 2.5rem)',
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
    color: 'var(--paper-100)',
    margin: '0 0 36px',
  },
  italic: { fontFamily: 'var(--font-serif)', fontStyle: 'italic' as const, color: '#F39C2A' },
  body: { fontSize: 17, lineHeight: 1.65, color: 'rgba(250, 248, 244, 0.9)', margin: '0 0 24px', maxWidth: 540 },
  attrib: { display: 'flex', alignItems: 'center', gap: 14, marginTop: 28 },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: '50%',
    background: 'linear-gradient(140deg, var(--amber-300), var(--amber-700))',
    flex: 'none' as const,
  },
  name: { fontSize: 15, fontWeight: 600, color: 'var(--paper-100)' },
  role: { fontSize: 13, color: 'rgba(250,248,244,0.7)' },
  link: { display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 28, color: '#F8C175', fontSize: 14, fontWeight: 500, textDecoration: 'underline' },
}

export default function StoryFeature() {
  return (
    <section style={storyStyles.wrap} className="story-feature">
      <style>{`
        @media (max-width: 768px) {
          .story-feature {
            grid-template-columns: 1fr !important;
            min-height: unset !important;
          }
          .story-feature .story-portrait {
            min-height: unset !important;
            aspect-ratio: 16 / 9;
          }
          .story-feature .story-content {
            padding: 48px 28px !important;
            max-width: 100% !important;
          }
        }
      `}</style>
      <div style={storyStyles.portrait} className="story-portrait">
        <div style={storyStyles.portraitImg}></div>
        <div style={storyStyles.portraitOverlay}></div>
        <span style={storyStyles.caption}>MARÇO 2026</span>
      </div>
      <div style={storyStyles.content} className="story-content">
        <div style={storyStyles.eyebrow}>UMA HISTÓRIA · JARDIM RENASCER</div>
        <h2 style={storyStyles.quote}>
          Ela nunca havia comido chocolate.
          <span style={storyStyles.italic}> Alguns momentos mudam tudo.</span>
        </h2>
        <p style={storyStyles.body}>
          Durante uma ação com a Cacau Show, distribuímos chocolates para as
          crianças da OSRV. Uma menina segurou a embalagem sem abrir por um tempo.
        </p>
        <p style={storyStyles.body}>
          Quando perguntaram o que havia acontecido, ela disse que nunca havia
          comido chocolate antes — e chorou. Momentos assim são o motivo pelo
          qual existimos.
        </p>
        <div style={storyStyles.attrib}>
          <div style={storyStyles.avatar}></div>
          <div>
            <div style={storyStyles.name}>Uma criança do Jardim Renascer</div>
            <div style={storyStyles.role}>Ação OSRV × Cacau Show</div>
          </div>
        </div>
        <Link href="/quem-somos" style={storyStyles.link}>Ler a história completa →</Link>
      </div>
    </section>
  )
}