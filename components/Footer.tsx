import Link from 'next/link'

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
    <footer style={footStyles.wrap} id="contato" className="site-footer footer-wrap">
      <style>{`
        @media (max-width: 768px) {
          .footer-wrap {
            padding: 48px 0 24px !important;
          }
          .site-footer .footer-inner {
            padding: 0 20px !important;
          }
          .site-footer .footer-top {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          .site-footer .footer-bottom {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .site-footer .footer-brand-logo {
            font-size: 1.4rem !important;
          }
          .site-footer .footer-blurb {
            font-size: 0.85rem !important;
            line-height: 1.5 !important;
          }
          .site-footer .footer-social-btn {
            width: 32px !important;
            height: 32px !important;
            font-size: 0.7rem !important;
          }
          .site-footer .footer-col-h {
            font-size: 0.7rem !important;
          }
          .site-footer .footer-list {
            gap: 8px !important;
          }
          .site-footer .footer-link {
            font-size: 0.875rem !important;
          }
          .site-footer .footer-fine {
            font-size: 0.7rem !important;
          }
          .site-footer .footer-badges {
            gap: 10px !important;
          }
          .site-footer .footer-badge {
            font-size: 0.65rem !important;
            padding: 4px 8px !important;
          }
        }
      `}</style>
      <div style={footStyles.inner} className="footer-inner">
        <div style={footStyles.top} className="footer-top">
          <div>
            <div style={footStyles.brand}>
              <span style={footStyles.word} className="footer-brand-logo">OSRV</span>
            </div>
            <p style={footStyles.blurb} className="footer-blurb">
              Obras Sociais Rafael Verlangieri — ONG sediada em Cuiabá / MT,
              atendendo crianças e adolescentes em situação de vulnerabilidade social.
            </p>
            <div style={footStyles.social}>
              <a href="#" style={footStyles.socialBtn} className="footer-social-btn" aria-label="Instagram">IG</a>
              <a href="#" style={footStyles.socialBtn} className="footer-social-btn" aria-label="YouTube">YT</a>
              <a href="#" style={footStyles.socialBtn} className="footer-social-btn" aria-label="Email">@</a>
            </div>
          </div>
          <div>
            <div style={footStyles.colH} className="footer-col-h">A OSRV</div>
            <ul style={footStyles.list} className="footer-list">
              <li><Link href="/quem-somos" style={footStyles.link} className="footer-link">Quem somos</Link></li>
            </ul>
          </div>
          <div>
            <div style={footStyles.colH} className="footer-col-h">Projetos e espaços</div>
            <ul style={footStyles.list} className="footer-list">
              <li><Link href="/programas-e-projetos" style={footStyles.link} className="footer-link">Todos os projetos</Link></li>
              <li><Link href="/brecho" style={footStyles.link} className="footer-link">Brechó</Link></li>
              <li><Link href="/biblioteca" style={footStyles.link} className="footer-link">Biblioteca</Link></li>
              <li><Link href="/quero-ser-voluntario" style={footStyles.link} className="footer-link">Voluntariado</Link></li>
            </ul>
          </div>
          <div>
            <div style={footStyles.colH} className="footer-col-h">Apoie</div>
            <ul style={footStyles.list} className="footer-list">
              <li><Link href="/quero-ser-doador" style={footStyles.link} className="footer-link">Doar</Link></li>
              <li><Link href="/quero-ser-parceiro" style={footStyles.link} className="footer-link">Ser parceiro empresa</Link></li>
            </ul>
          </div>
          <div>
            <div style={footStyles.colH} className="footer-col-h">Conteúdo e transparência</div>
            <ul style={footStyles.list} className="footer-list">
              <li><Link href="/blog" style={footStyles.link} className="footer-link">Blog</Link></li>
              <li><Link href="/transparencia" style={footStyles.link} className="footer-link">Transparência</Link></li>
            </ul>
          </div>
        </div>
        <div style={footStyles.bottom} className="footer-bottom">
          <div style={footStyles.fine} className="footer-fine">
            © 2026 OSRV — Obras Sociais Rafael Verlangieri · Cuiabá / MT
          </div>
          <div style={footStyles.badges} className="footer-badges">
            <span style={footStyles.badge} className="footer-badge">CEBAS</span>
            <span style={footStyles.badge} className="footer-badge">OSCIP</span>
          </div>
        </div>
      </div>
    </footer>
  )
}