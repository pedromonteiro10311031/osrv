const introStyles = {
  wrap: { background: 'var(--bg-page)', padding: '120px 0' },
  inner: {
    maxWidth: 'var(--container)',
    margin: '0 auto',
    padding: '0 32px',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'flex-start' as const,
    gap: 0,
  },
  eyebrow: {
    fontSize: 12, fontWeight: 600, letterSpacing: '0.14em',
    textTransform: 'uppercase' as const, color: 'var(--pine-700)',
    marginBottom: 16,
  },
  h2: {
    fontFamily: 'var(--font-serif)',
    fontWeight: 400,
    fontSize: 'clamp(2.25rem, 4.4vw, 3.5rem)',
    lineHeight: 1.04,
    letterSpacing: '-0.025em',
    color: 'var(--ink-900)',
    margin: 0,
    maxWidth: 880,
  },
  sub: {
    fontFamily: 'var(--font-serif)',
    fontStyle: 'italic' as const,
    color: 'var(--amber-500)',
    fontSize: 'clamp(1.125rem, 1.6vw, 1.375rem)',
    lineHeight: 1.4,
    marginTop: 14,
    marginBottom: 56,
    maxWidth: 720,
  },
  body: {
    fontSize: 18,
    lineHeight: 1.7,
    color: 'var(--fg-1)',
    margin: 0,
    maxWidth: 720,
  },
  pullquote: {
    marginTop: 24,
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 32,
    width: '100%',
    maxWidth: 1080,
  },
  pillar: { display: 'flex', flexDirection: 'column' as const, gap: 8 },
  pillarIco: {
    width: 36, height: 36,
    borderRadius: 999,
    background: 'var(--pine-100)',
    color: 'var(--pine-700)',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    marginBottom: 6,
  },
  pillarLbl: {
    fontFamily: 'var(--font-serif)',
    fontSize: 20, fontWeight: 500,
    color: 'var(--ink-900)',
    letterSpacing: '-0.01em',
  },
  pillarSub: { fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.5 },
}

const pillars = [
  ['Corpo', 'Esporte, postura e energia bem gasta.'],
  ['Mente', 'Reforço escolar, xadrez e leitura.'],
  ['Emoção', 'Escuta, yoga e respiração.'],
  ['Comunidade', 'Família, bairro e cultura junto.'],
]

export default function Introducao() {
  return (
    <section style={introStyles.wrap} id="abordagem" className="introducao">
      <style>{`
        @media (max-width: 768px) {
          .introducao {
            padding-top: 56px !important;
            padding-bottom: 56px !important;
          }
          .introducao .intro-inner {
            padding: 0 20px !important;
            box-sizing: border-box;
            max-width: 100% !important;
          }
          .introducao .intro-pillars {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px !important;
            max-width: 100% !important;
          }
        }
      `}</style>
      <div style={introStyles.inner} className="intro-inner">
        <div style={introStyles.eyebrow}>NOSSA ABORDAGEM</div>
        <h2 style={introStyles.h2}>Desenvolvimento integral, não atividade isolada.</h2>
        <p style={introStyles.sub}>Cada projeto se conecta com os outros.</p>
        <p style={introStyles.body}>
          Na OSRV, não pensamos em atividades separadas — pensamos em pessoas
          inteiras. Uma criança que pratica judô também precisa de apoio
          escolar. Quem aprende xadrez também precisa de escuta. Por isso,
          nossos projetos foram desenhados para conversarem entre si,
          formando uma rede de apoio que atende a criança em todas as suas
          dimensões: corpo, mente, emoção e comunidade.
        </p>
        <div style={introStyles.pullquote} className="intro-pillars">
          {pillars.map(([lbl, sub]) => (
            <div key={lbl} style={introStyles.pillar}>
              <span style={introStyles.pillarIco}>●</span>
              <span style={introStyles.pillarLbl}>{lbl}</span>
              <span style={introStyles.pillarSub}>{sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}