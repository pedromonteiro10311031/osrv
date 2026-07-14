'use client'

import { useState } from 'react'
import Link from 'next/link'

const apStyles = {
  wrap: { background: 'var(--bg-page)', padding: '120px 0 96px' },
  inner: { maxWidth: 'var(--container)', margin: '0 auto', padding: '0 32px' },
  head: { marginBottom: 64 },
  eyebrow: { fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'var(--pine-700)', marginBottom: 16 },
  h2: { fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(2rem, 3.6vw, 3rem)', lineHeight: 1.05, letterSpacing: '-0.022em', color: 'var(--ink-900)', margin: 0, maxWidth: 720 },
  sub: { fontFamily: 'var(--font-serif)', fontStyle: 'italic' as const, color: 'var(--amber-500)', fontSize: 'clamp(1.0625rem, 1.4vw, 1.25rem)', marginTop: 12 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 },
  card: { background: 'var(--paper-100)', border: '1px solid var(--border-soft)', borderRadius: 8, padding: '40px 32px 32px', display: 'flex', flexDirection: 'column' as const, gap: 12, transition: 'box-shadow 0.2s, border-color 0.2s' },
  ico: { width: 52, height: 52, borderRadius: 999, background: 'var(--pine-100)', color: 'var(--pine-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 },
  cardTag: { fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'var(--pine-700)' },
  cardTitle: { fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 28, lineHeight: 1.1, letterSpacing: '-0.018em', color: 'var(--ink-900)', margin: '4px 0 8px' },
  cardDesc: { fontSize: 15.5, lineHeight: 1.6, color: 'var(--fg-2)', margin: 0, flex: 1 },
  ctaPrimary: { marginTop: 24, display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--amber-500)', color: '#fff', border: 0, borderRadius: 999, padding: '12px 22px', fontSize: 14, fontWeight: 600, textDecoration: 'none', alignSelf: 'flex-start' as const },
  ctaOutline: { marginTop: 24, display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: 'var(--pine-700)', border: '1px solid var(--pine-500)', borderRadius: 999, padding: '11px 22px', fontSize: 14, fontWeight: 600, textDecoration: 'none', alignSelf: 'flex-start' as const },
}

function ApoioCard({ tag, title, desc, cta, ctaStyle, href }: { tag: string, title: string, desc: string, cta: string, ctaStyle: string, href: string }) {
  const [hover, setHover] = useState(false)
  return (
    <div style={{ ...apStyles.card, boxShadow: hover ? '0 8px 24px rgba(0,0,0,0.10)' : 'none', borderColor: hover ? 'var(--amber-500)' : 'var(--border-soft)' }} className="final-cta-card" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <span style={apStyles.cardTag} className="final-cta-card-tag">{tag}</span>
      <h3 style={apStyles.cardTitle} className="final-cta-card-title">{title}</h3>
      <p style={apStyles.cardDesc} className="final-cta-card-desc">{desc}</p>
      <Link href={href} style={ctaStyle === 'primary' ? apStyles.ctaPrimary : apStyles.ctaOutline} className={ctaStyle === 'primary' ? 'final-cta-cta-primary' : 'final-cta-cta-outline'}>{cta} →</Link>
    </div>
  )
}

export default function FinalCTA() {
  return (
    <section style={apStyles.wrap} id="apoiar" className="final-cta">
      <style>{`
        @media (max-width: 768px) {
          .final-cta {
            padding-top: 36px !important;
            padding-bottom: 36px !important;
          }
          .final-cta .final-cta-inner {
            padding: 0 20px !important;
          }
          .final-cta .final-cta-head {
            margin-bottom: 24px !important;
          }
          .final-cta .final-cta-h2 {
            font-size: clamp(1.4rem, 6vw, 1.65rem) !important;
            line-height: 1.05 !important;
          }
          .final-cta .final-cta-sub {
            font-size: 0.95rem !important;
          }
          .final-cta .final-cta-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .final-cta .final-cta-card {
            padding: 16px 16px !important;
            gap: 6px !important;
          }
          .final-cta .final-cta-card-tag {
            font-size: 9px !important;
            letter-spacing: 0.1em !important;
          }
          .final-cta .final-cta-card-title {
            font-size: 1.15rem !important;
            font-weight: 500 !important;
          }
          .final-cta .final-cta-card-desc {
            font-size: 0.82rem !important;
            line-height: 1.35 !important;
          }
          .final-cta .final-cta-cta-primary,
          .final-cta .final-cta-cta-outline {
            padding: 8px 14px !important;
            font-size: 0.8rem !important;
          }
        }
      `}</style>
      <div style={apStyles.inner} className="final-cta-inner">
        <div style={apStyles.head} className="final-cta-head">
          <div style={apStyles.eyebrow}>VOCÊ TAMBÉM PODE AJUDAR</div>
          <h2 style={apStyles.h2} className="final-cta-h2">Cada projeto precisa de você.</h2>
          <p style={apStyles.sub} className="final-cta-sub">Escolha como fazer parte.</p>
        </div>
        <div style={apStyles.grid} className="final-cta-grid">
          <ApoioCard tag="DOAÇÃO" title="Doe" desc="Sua doação financia diretamente as atividades, materiais e equipe dos seis projetos. Doação única ou mensal." cta="Quero doar" ctaStyle="primary" href="/quero-ser-doador" />
          <ApoioCard tag="VOLUNTARIADO" title="Seja voluntário" desc="Tempo, habilidade e presença são tão importantes quanto recursos. Treine, ensine, organize ou apoie nos bastidores." cta="Ser voluntário" ctaStyle="outline" href="/quero-ser-voluntario" />
          <ApoioCard tag="PARCERIA EMPRESA" title="Empresa parceira" desc="Empresas podem patrocinar projetos inteiros, doar material e gerar impacto coletivo. Conheça as modalidades." cta="Parceria empresa" ctaStyle="outline" href="/quero-ser-parceiro" />
        </div>
      </div>
    </section>
  )
}
