const footStyles = {
  wrap: { background: 'var(--pine-900)', color: 'rgba(250, 248, 244, 0.85)', padding: '80px 0 32px' },
  inner: { maxWidth: 'var(--container)', margin: '0 auto', padding: '0 32px' },
  top: { display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr 1.1fr', gap: 40, paddingBottom: 56, borderBottom: '1px solid rgba(255,255,255,0.12)' },
  brand: { display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 },
  word: {
    fontFamily: 'var(--font-serif)',
    fontWeight: 500,
    fontSize: 28,
    color: 'var(--paper-100)',
    letterSpacing: '-0.015em',
    lineHeight: 1,
  },
  blurb: { fontSize: 14, lineHeight: 1.6, color: 'rgba(250,248,244,0.7)', maxWidth: 320, marginBottom: 22 },
  social: { display: 'flex', gap: 10 },
  socialBtn: {
    width: 36, height: 36, borderRadius: '50%',
    background: 'rgba(255,255,255,0.08)',
    color: 'var(--paper-100)',
    border: '1px solid rgba(255,255,255,0.12)',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    textDecoration: 'none',
  },
  colH: {
    fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const,
    color: 'var(--amber-300)', marginBottom: 18,
  },
  list: { display: 'flex', flexDirection: 'column' as const, gap: 10, fontSize: 14, listStyle: 'none', padding: 0, margin: 0 },
  link: { color: 'rgba(250,248,244,0.75)', textDecoration: 'none' },
  bottom: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' as const, gap: 16, paddingTop: 32 },
  fine: { fontSize: 12, color: 'rgba(250,248,244,0.55)' },
  badges: { display: 'flex', gap: 14, fontSize: 11, color: 'rgba(250,248,244,0.55)', letterSpacing: '0.08em', textTransform: 'uppercase' as const },
  badge: { display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 10px', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 4 },
}

export default function Footer() {
  return (
    <footer style={footStyles.wrap} id="contato">
      <div style={footStyles.inner}>
        <div style={footStyles.top}>
          <div>
            <div style={footStyles.brand}>
              <span style={footStyles.word}>OSRV</span>
            </div>
            <p style={footStyles.blurb}>
              Obras Sociais Rafael Verlangieri — ONG sediada em Cuiabá / MT,
              atendendo crianças e adolescentes em situação de vulnerabilidade social.
            </p>
            <div style={footStyles.social}>
              <a href="#" style={footStyles.socialBtn} aria-label="Instagram">IG</a>
              <a href="#" style={footStyles.socialBtn} aria-label="YouTube">YT</a>
              <a href="#" style={footStyles.socialBtn} aria-label="Email">@</a>
            </div>
          </div>
          <div>
            <div style={footStyles.colH}>A OSRV</div>
            <ul style={footStyles.list}>
              <li><a href="/quem-somos" style={footStyles.link}>Quem somos</a></li>
              <li><a href="/nossa-comunidade" style={footStyles.link}>Nossa comunidade</a></li>
              <li><a href="/venha-nos-conhecer" style={footStyles.link}>Venha nos conhecer</a></li>
            </ul>
          </div>
          <div>
            <div style={footStyles.colH}>Projetos e espaços</div>
            <ul style={footStyles.list}>
              <li><a href="/programas-e-projetos" style={footStyles.link}>Todos os projetos</a></li>
              <li><a href="/brecho" style={footStyles.link}>Brechó</a></li>
              <li><a href="/biblioteca" style={footStyles.link}>Biblioteca</a></li>
              <li><a href="/quero-ser-voluntario" style={footStyles.link}>Voluntariado</a></li>
            </ul>
          </div>
          <div>
            <div style={footStyles.colH}>Apoie</div>
            <ul style={footStyles.list}>
              <li><a href="/quero-ser-doador" style={footStyles.link}>Doar</a></li>
              <li><a href="/quero-ser-parceiro" style={footStyles.link}>Ser parceiro empresa</a></li>
            </ul>
          </div>
          <div>
            <div style={footStyles.colH}>Conteúdo e transparência</div>
            <ul style={footStyles.list}>
              <li><a href="/eventos-e-noticias" style={footStyles.link}>Eventos & notícias</a></li>
              <li><a href="/transparencia" style={footStyles.link}>Transparência</a></li>
            </ul>
          </div>
        </div>
        <div style={footStyles.bottom}>
          <div style={footStyles.fine}>
            © 2026 OSRV — Obras Sociais Rafael Verlangieri · Cuiabá / MT
          </div>
          <div style={footStyles.badges}>
            <span style={footStyles.badge}>CEBAS</span>
            <span style={footStyles.badge}>OSCIP</span>
          </div>
        </div>
      </div>
    </footer>
  )
}