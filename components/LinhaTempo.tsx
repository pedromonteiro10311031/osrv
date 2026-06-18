const trajStyles = {
  wrap: { background: 'var(--pine-900)', color: 'var(--paper-100)', display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'stretch' as const, minHeight: 640 },
  content: { padding: '120px 80px', maxWidth: 640, alignSelf: 'center' as const, textAlign: 'left' as const },
  eyebrow: { fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: '#F8C175', marginBottom: 18 },
  h2: { fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 'clamp(1.875rem, 3vw, 2.5rem)', lineHeight: 1.2, letterSpacing: '-0.02em', color: 'var(--paper-100)', margin: 0 },
  italic: { fontFamily: 'var(--font-serif)', fontStyle: 'italic' as const, fontWeight: 400, color: '#F39C2A', display: 'block', marginTop: 10, fontSize: 'clamp(1.25rem, 2vw, 1.625rem)', lineHeight: 1.18, letterSpacing: '-0.015em' },
  para: { fontSize: 17, lineHeight: 1.7, color: 'rgba(250,248,244,0.9)', margin: '32px 0 0', maxWidth: 540 },
  paraNext: { fontSize: 17, lineHeight: 1.7, color: 'rgba(250,248,244,0.9)', margin: '20px 0 0', maxWidth: 540 },
  portrait: { position: 'relative' as const, width: '100%', minHeight: 640, overflow: 'hidden' },
  portraitImg: { position: 'absolute' as const, inset: 0, backgroundSize: 'cover', backgroundPosition: 'center 38%', backgroundImage: "url('https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1600&q=80')" },
  portraitOverlay: { position: 'absolute' as const, inset: 0, background: 'rgba(0,0,0,0.25)', pointerEvents: 'none' as const },
  caption: { position: 'absolute' as const, top: 24, right: 24, background: 'rgba(0,0,0,0.4)', color: 'rgba(255,255,255,0.9)', fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, padding: '6px 10px', borderRadius: 4 },
}

export default function LinhaTempo() {
  return (
    <section id="trajetoria" style={trajStyles.wrap}>
      <div style={trajStyles.content}>
        <div style={trajStyles.eyebrow}>Nossa Trajetória</div>
        <h2 style={trajStyles.h2}>
          Marcos que nos trouxeram até aqui.
          <span style={trajStyles.italic}>Uma história que ainda está sendo escrita.</span>
        </h2>
        <p style={trajStyles.para}>
          A OSRV nasceu em Jardim Renascer com um sonho simples: oferecer às crianças e adolescentes da comunidade um lugar seguro, cheio de possibilidades. Com o judô como projeto carro-chefe, a instituição foi crescendo — adicionando xadrez, esportes radicais, reforço escolar, yoga e acompanhamento psicológico ao longo dos anos.
        </p>
        <p style={trajStyles.paraNext}>
          Cada projeto que surgiu veio de uma necessidade real da comunidade. Não planejamos em salas fechadas — ouvimos, experimentamos e construímos junto com as famílias do bairro. Hoje, mais de 250 crianças passam pela OSRV regularmente. E a história continua.
        </p>
      </div>
      <div style={trajStyles.portrait}>
        <div style={trajStyles.portraitImg}></div>
        <div style={trajStyles.portraitOverlay}></div>
        <span style={trajStyles.caption}>JARDIM RENASCER</span>
      </div>
    </section>
  )
}