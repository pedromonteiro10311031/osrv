import Link from 'next/link'

const partStyles = {
  wrap: {
    background: 'var(--paper-100)',
    padding: '120px 0',
    borderTop: '1px solid var(--border-soft)',
  },
  inner: {
    maxWidth: 'var(--container)',
    margin: '0 auto',
    padding: '0 32px',
  },
  card: {
    position: 'relative' as const,
    background: 'var(--paper-200)',
    border: '1px solid var(--border-soft)',
    borderRadius: 12,
    padding: '72px 64px',
    overflow: 'hidden',
    display: 'grid',
    gridTemplateColumns: '1.4fr auto',
    gap: 48,
    alignItems: 'center',
  },
  sealWrap: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    marginBottom: 28,
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.16em',
    textTransform: 'uppercase' as const,
    color: 'var(--pine-700)',
  },
  sealDot: {
    width: 8, height: 8, borderRadius: '50%',
    background: 'var(--amber-500)',
  },
  h2: {
    fontFamily: 'var(--font-serif)',
    fontWeight: 400,
    fontSize: 'clamp(2rem, 3.4vw, 2.875rem)',
    lineHeight: 1.1,
    letterSpacing: '-0.025em',
    color: 'var(--ink-900)',
    margin: '0 0 16px',
    maxWidth: 560,
  },
  sub: {
    fontFamily: 'var(--font-serif)',
    fontStyle: 'italic' as const,
    fontWeight: 400,
    fontSize: 22,
    lineHeight: 1.4,
    color: '#F39C2A',
    margin: '0 0 28px',
    maxWidth: 480,
  },
  btn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    background: 'var(--ink-900)',
    color: 'var(--paper-100)',
    border: 'none',
    fontSize: 15,
    fontWeight: 600,
    padding: '16px 28px',
    borderRadius: 999,
    cursor: 'pointer',
    textDecoration: 'none',
  },
  fine: {
    marginTop: 18,
    fontSize: 13,
    color: 'var(--ink-500)',
  },
  fineLink: {
    color: 'var(--teal-700)',
    textDecoration: 'underline',
    textUnderlineOffset: 3,
  },
}

export default function PartnersStrip() {
  return (
    <section id="parceiros" style={partStyles.wrap}>
      <div style={partStyles.inner}>
        <div style={partStyles.card}>
          <div>
            <div style={partStyles.sealWrap}>
              <span style={partStyles.sealDot}></span>
              VAGA ABERTA · PARCEIRO FUNDADOR 2026
            </div>
            <h2 style={partStyles.h2}>
              Seja o primeiro parceiro da OSRV em 2026.
            </h2>
            <p style={partStyles.sub}>
              Sua empresa pode transformar vidas no Jardim Renascer.
            </p>
            <div style={partStyles.fine}>
              Ou fale direto com a gente:{' '}
              <a href="mailto:parcerias@osrv.org.br" style={partStyles.fineLink}>
                parcerias@osrv.org.br
              </a>
            </div>
          </div>
          <Link href="/quero-ser-parceiro" style={partStyles.btn}>
            Quero ser parceiro →
          </Link>
        </div>
      </div>
    </section>
  )
}