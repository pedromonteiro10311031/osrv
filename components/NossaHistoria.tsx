const histStyles = {
  wrap: { background: 'var(--paper-100)', padding: '128px 0 136px' },
  inner: { maxWidth: 'var(--container)', margin: '0 auto', padding: '0 32px' },
  eyebrow: { fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'var(--pine-700)', marginBottom: 24 },
  h2: { fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(2.25rem, 4.2vw, 3.75rem)', lineHeight: 1.04, letterSpacing: '-0.03em', color: 'var(--ink-900)', margin: 0 },
  italic: { fontFamily: 'var(--font-serif)', fontStyle: 'italic' as const, color: 'var(--amber-500)', display: 'block', marginTop: 12, fontSize: 'clamp(1.5rem, 2.4vw, 2rem)', lineHeight: 1.15, letterSpacing: '-0.02em' },
  dropcap: { float: 'left' as const, fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 84, lineHeight: 0.85, color: 'var(--pine-700)', paddingRight: 14, paddingTop: 6, letterSpacing: '-0.04em' },
  para: { fontSize: 18, lineHeight: 1.65, color: 'var(--ink-700)', margin: '40px 0 24px' },
  para2: { fontSize: 18, lineHeight: 1.65, color: 'var(--ink-700)', margin: '24px 0 0' },
  pull: { fontFamily: 'var(--font-serif)', fontStyle: 'italic' as const, fontWeight: 400, fontSize: 'clamp(1.35rem, 2vw, 1.75rem)', lineHeight: 1.3, color: 'var(--ink-900)', margin: '48px 0', paddingLeft: 24, borderLeft: '2px solid var(--amber-500)' },
}

export default function NossaHistoria() {
  return (
    <section id="historia" style={histStyles.wrap} className="nossa-historia">
      <style>{`
        @media (max-width: 768px) {
          .nossa-historia .nh-inner {
            padding: 0 20px !important;
          }
        }
      `}</style>
      <div style={histStyles.inner} className="nh-inner">
        <div>
          <div style={histStyles.eyebrow}>Quem Somos</div>
          <h2 style={histStyles.h2}>
            Em Jardim Renascer, plantamos futuros.
            <span style={histStyles.italic}>Há mais de uma década.</span>
          </h2>
          <p style={histStyles.para}>
            <span style={histStyles.dropcap}>A</span>
            Obras Sociais Rafael Verlangieri nasceu da convicção de que o desenvolvimento sustentável de uma comunidade começa com o envolvimento dela mesma. No bairro Jardim Renascer e arredores, em Cuiabá / MT, atuamos buscando melhorar a qualidade de vida da nossa comunidade através da colaboração ativa e da construção coletiva.
          </p>
          <p style={histStyles.pull}>
            Nossa visão é alcançar resultados duradouros — não apenas atender, mas transformar.
          </p>
          <p style={histStyles.para2}>
            Acreditamos que cada criança que entra na OSRV leva consigo ferramentas que vão muito além do tatame ou da sala de aula: leva pertencimento, autoestima e a certeza de que pode escolher o próprio caminho.
          </p>
        </div>
      </div>
    </section>
  )
}