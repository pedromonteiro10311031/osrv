import React from 'react'
import Link from 'next/link'
import type { Projeto } from '@/lib/projetos'

interface Props {
  projeto: Projeto
  /** Array completo de projetos — usado para calcular anterior/próximo. */
  projetos: Projeto[]
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

const TAG_COLORS: Record<string, string> = {
  ESPORTE:  'var(--pine-700)',
  EDUCAÇÃO: 'var(--teal-700)',
  CUIDADO:  'var(--terracota-700)',
}

// ─── Inline-style objects ─────────────────────────────────────────────────────

const s = {
  // Hero
  hero: {
    position: 'relative' as const,
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    overflow: 'hidden',
    margin: 0,
    borderRadius: 0,
    color: '#fff',
  },
  heroBg: (photo: string): React.CSSProperties => ({
    position: 'absolute',
    inset: 0,
    backgroundImage: `url('${photo}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center 30%',
  }),
  heroOverlay: {
    position: 'absolute' as const,
    inset: 0,
    background: 'linear-gradient(180deg, rgba(30,66,24,0.55) 0%, rgba(26,42,30,0.72) 100%)',
    pointerEvents: 'none' as const,
  },
  heroInner: {
    position: 'relative' as const,
    width: '100%',
    maxWidth: 'var(--container-wide)',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    textAlign: 'center' as const,
    gap: 20,
  },
  tagRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  tagBadge: (color: string): React.CSSProperties => ({
    display: 'inline-flex',
    alignItems: 'center',
    background: color,
    color: '#fff',
    fontFamily: 'var(--font-sans)',
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    padding: '5px 14px',
    borderRadius: 'var(--r-pill)',
  }),
  tagN: {
    fontFamily: 'var(--font-sans)',
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '0.16em',
    textTransform: 'uppercase' as const,
    color: 'rgba(250,248,244,0.5)',
  },
  heroTitle: {
    fontFamily: 'var(--font-serif)',
    fontWeight: 400,
    lineHeight: 0.98,
    letterSpacing: '-0.03em',
    color: 'var(--paper-100)',
    maxWidth: 820,
    margin: '0 auto',
  },
  heroSubtitle: {
    fontFamily: 'var(--font-serif)',
    fontStyle: 'italic' as const,
    color: 'var(--amber-500)',
    margin: 0,
    lineHeight: 1.4,
  },
  heroStatsRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 4,
  },
  heroStatsText: {
    fontFamily: 'var(--font-sans)',
    fontSize: 14,
    color: 'rgba(250,248,244,0.7)',
  },

  // Back bar
  backBar: {
    background: 'var(--paper-50)',
    borderBottom: '1px solid var(--border-soft)',
  },
  backBarInner: {
    maxWidth: 'var(--container)',
    margin: '0 auto',
  },
  backLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    fontFamily: 'var(--font-sans)',
    fontSize: 14,
    fontWeight: 500,
    color: 'var(--pine-700)',
    textDecoration: 'none' as const,
  },

  // Section wrappers
  section: (bg: string): React.CSSProperties => ({
    background: bg,
  }),
  inner: {
    maxWidth: 'var(--container)',
    margin: '0 auto',
  },

  // Typography
  eyebrow: {
    fontFamily: 'var(--font-sans)',
    fontSize: 12,
    fontWeight: 600,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.14em',
    color: 'var(--pine-700)',
    marginBottom: 16,
  },
  eyebrowLight: {
    fontFamily: 'var(--font-sans)',
    fontSize: 12,
    fontWeight: 700,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.16em',
    color: 'var(--pine-300)',
    margin: 0,
  },
  h2: {
    fontFamily: 'var(--font-serif)',
    fontWeight: 400,
    lineHeight: 1.1,
    letterSpacing: '-0.02em',
    color: 'var(--ink-900)',
    margin: 0,
  },
  h2Light: {
    fontFamily: 'var(--font-serif)',
    fontWeight: 400,
    lineHeight: 1.1,
    letterSpacing: '-0.02em',
    color: 'var(--paper-100)',
    margin: 0,
  },
  amberSub: {
    fontFamily: 'var(--font-serif)',
    fontStyle: 'italic' as const,
    fontSize: '1.1rem',
    color: 'var(--amber-500)',
    margin: 0,
  },
  body: {
    fontFamily: 'var(--font-sans)',
    fontSize: 17,
    lineHeight: 1.7,
    color: 'var(--ink-700)',
    maxWidth: 680,
    margin: 0,
  },
  bodyLight: {
    fontFamily: 'var(--font-sans)',
    fontSize: 17,
    lineHeight: 1.65,
    color: 'rgba(250,248,244,0.75)',
    maxWidth: '52ch',
    margin: 0,
  },

  // Stat cards
  statCard: {
    background: 'var(--paper-50)',
    border: '1px solid var(--border-soft)',
    borderRadius: 'var(--r-md)',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 12,
  },
  statValue: {
    fontFamily: 'var(--font-serif)',
    fontWeight: 400,
    lineHeight: 1,
    color: 'var(--pine-700)',
    letterSpacing: '-0.04em',
    margin: 0,
  },
  statLabel: {
    fontFamily: 'var(--font-sans)',
    fontSize: 15,
    fontWeight: 600,
    color: 'var(--ink-900)',
  },
  statSub: {
    fontFamily: 'var(--font-sans)',
    fontSize: 14,
    color: 'var(--ink-500)',
    lineHeight: 1.5,
  },

  // Schedule box
  scheduleBox: {
    background: 'var(--pine-900)',
    color: 'var(--paper-100)',
    borderRadius: 'var(--r-md)',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 20,
  },
  scheduleItem: {
    paddingBottom: 16,
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    display: 'flex',
    justifyContent: 'space-between' as const,
    alignItems: 'baseline' as const,
    gap: 16,
  },
  scheduleDay: {
    fontFamily: 'var(--font-serif)',
    fontSize: 16,
    fontWeight: 500,
    color: 'var(--paper-100)',
  },
  scheduleTime: {
    fontFamily: 'var(--font-sans)',
    fontSize: 14,
    color: 'rgba(250,248,244,0.65)',
    flexShrink: 0,
  },
  scheduleLocal: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    marginTop: 4,
  },
  scheduleLocalText: {
    fontFamily: 'var(--font-sans)',
    fontSize: 14,
    color: 'rgba(250,248,244,0.6)',
  },

  // Conquistas
  conquistaCard: {
    background: 'var(--paper-100)',
    border: '1px solid var(--border-soft)',
    borderRadius: 'var(--r-md)',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 12,
  },
  conquistaBar: {
    width: 36,
    height: 3,
    background: 'var(--pine-500)',
    borderRadius: 2,
    flexShrink: 0,
  },
  conquistaTitle: {
    fontFamily: 'var(--font-serif)',
    fontWeight: 500,
    fontSize: '1.05rem',
    lineHeight: 1.3,
    color: 'var(--pine-900)',
    margin: 0,
  },
  conquistaDesc: {
    fontFamily: 'var(--font-sans)',
    fontSize: 15,
    lineHeight: 1.65,
    color: 'var(--ink-700)',
    margin: 0,
  },

  // Buttons
  btnPrimary: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    background: 'var(--amber-500)',
    color: '#fff',
    borderRadius: 'var(--r-pill)',
    fontFamily: 'var(--font-sans)',
    fontSize: 16,
    fontWeight: 600,
    textDecoration: 'none' as const,
    border: 'none',
    cursor: 'pointer',
  },
  btnOutline: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    background: 'transparent',
    color: 'var(--paper-100)',
    border: '1.5px solid rgba(250,248,244,0.45)',
    borderRadius: 'var(--r-pill)',
    fontFamily: 'var(--font-sans)',
    fontSize: 16,
    fontWeight: 500,
    textDecoration: 'none' as const,
    cursor: 'pointer',
  },

  // Prev / Next
  prevNextSection: {
    background: 'var(--paper-50)',
    borderTop: '1px solid var(--border-soft)',
  },
  prevNextInner: {
    maxWidth: 'var(--container)',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'stretch',
    gap: 0,
  },
  prevNextCard: (align: 'left' | 'right'): React.CSSProperties => ({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    textDecoration: 'none',
    alignItems: align === 'right' ? 'flex-end' : 'flex-start',
  }),
  prevNextLabel: {
    fontFamily: 'var(--font-sans)',
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.14em',
    textTransform: 'uppercase' as const,
    color: 'var(--ink-300)',
    display: 'flex',
    alignItems: 'center',
    gap: 6,
  },
  prevNextTitle: {
    fontFamily: 'var(--font-serif)',
    fontWeight: 400,
    fontSize: '1.15rem',
    color: 'var(--pine-700)',
    lineHeight: 1.25,
    margin: 0,
  },
  prevNextDivider: {
    width: 1,
    background: 'var(--border-soft)',
    alignSelf: 'stretch',
    flexShrink: 0,
  },

  // Final CTA cards
  finalCtaCard: {
    background: 'var(--paper-50)',
    border: '1px solid var(--border-soft)',
    borderRadius: 'var(--r-md)',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 16,
  },
  finalCtaIcon: {
    width: 40,
    height: 40,
    background: 'var(--pine-100)',
    borderRadius: 'var(--r-sm)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  finalCtaTitle: {
    fontFamily: 'var(--font-serif)',
    fontWeight: 500,
    fontSize: '1.15rem',
    color: 'var(--ink-900)',
    margin: 0,
  },
  finalCtaDesc: {
    fontFamily: 'var(--font-sans)',
    fontSize: 15,
    lineHeight: 1.6,
    color: 'var(--ink-500)',
    margin: 0,
    flex: 1,
  },
  finalCtaLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    fontFamily: 'var(--font-sans)',
    fontSize: 14,
    fontWeight: 600,
    color: 'var(--pine-700)',
    textDecoration: 'none' as const,
  },
}

// ─── SVG atoms ────────────────────────────────────────────────────────────────

function IconArrow({ size = 18 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
    </svg>
  )
}

function IconChevronLeft({ size = 16 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 18-6-6 6-6"/>
    </svg>
  )
}

function IconChevronRight({ size = 16 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6"/>
    </svg>
  )
}

function IconUsers({ size = 16 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke="rgba(250,248,244,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  )
}

function IconMapPin({ size = 16, color = 'var(--amber-500)' }: { size?: number; color?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ProjetoPage({ projeto, projetos }: Props) {
  const idx  = projetos.findIndex(p => p.slug === projeto.slug)
  const prev = idx > 0 ? projetos[idx - 1] : null
  const next = idx < projetos.length - 1 ? projetos[idx + 1] : null

  const tagColor  = TAG_COLORS[projeto.tag] ?? 'var(--pine-700)'
  const descParas = projeto.descLonga.split(/\n\n+/).filter(Boolean)

  // "60+ crianças · 3x por semana" → ["60+ crianças", "3x por semana"]
  const statParts = projeto.stats.split('·').map(s => s.trim()).filter(Boolean)

  function splitStat(str: string): { value: string; label: string } {
    const match = str.match(/^([\d+×x]+\+?[^\s]*)\s+(.+)$/)
    if (match) return { value: match[1], label: match[2] }
    return { value: str, label: '' }
  }

  const statCards = [
    { ...splitStat(statParts[0] ?? ''), sub: `Faixa etária de ${projeto.faixaEtaria}.` },
    { ...splitStat(statParts[1] ?? ''), sub: 'Treinos regulares durante o ano letivo.' },
    { value: projeto.faixaEtaria, label: 'Faixa etária', sub: 'Vagas abertas o ano todo, entrada sem custo.' },
  ]

  // diasHorarios: linhas separadas por \n, cada linha "Dia · HH:MM–HH:MM"
  const scheduleLines = projeto.diasHorarios
    .split(/\n|;/)
    .map(l => l.trim())
    .filter(Boolean)
    .map(line => {
      const parts = line.split('·').map(p => p.trim())
      return { day: parts[0] ?? line, time: parts[1] ?? '' }
    })

  return (
    <>
      <style>{`
        /* Hero */
        .pj-hero { min-height: min(78vh, 720px); }
        .pj-hero-inner { padding: 12% 48px 56px; }
        .pj-hero-title { font-size: clamp(2.8rem, 6vw, 5.25rem); }
        .pj-hero-subtitle { font-size: clamp(1.1rem, 2vw, 1.4rem); }

        /* Back bar */
        .pj-back-bar { padding: 0 48px; }
        .pj-back-bar-inner { padding: 14px 0; }

        /* Section padding */
        .pj-section-sobre,
        .pj-section-stats,
        .pj-section-conquistas,
        .pj-section-final-cta { padding: 96px 48px; }
        .pj-section-como { padding: 96px 48px; }
        .pj-section-ajudar { padding: 96px 48px; }
        .pj-prevnext-section { padding: 0 48px; }
        .pj-prevnext-inner { padding: 48px 0; }

        /* Section headings */
        .pj-section-h2 { font-size: clamp(1.6rem, 2.8vw, 2.25rem); }
        .pj-section-h2-light { font-size: clamp(1.75rem, 3vw, 2.75rem); }

        /* Grids */
        .pj-stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .pj-stat-card { padding: 40px 32px 36px; }
        .pj-stat-value { font-size: clamp(3rem, 5vw, 4rem); }

        .pj-how-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; }
        .pj-schedule-box { padding: 40px 36px; }

        .pj-conquistas-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .pj-conquista-card { padding: 32px; }

        .pj-cta-buttons { display: flex; gap: 16px; flex-wrap: wrap; }
        .pj-btn-primary { padding: 17px 28px; }
        .pj-btn-outline  { padding: 16px 28px; }

        .pj-prevnext-card { padding: 0; }
        .pj-prevnext-divider { margin: 0 40px; }

        .pj-final-cta-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .pj-final-cta-card { padding: 36px 32px; }

        /* Hover */
        .pj-btn-primary:hover { background: var(--amber-700); }
        .pj-btn-outline:hover  { background: rgba(255,255,255,0.08); border-color: rgba(250,248,244,0.7); }
        .pj-prevnext-card:hover p { color: var(--pine-500); }
        .pj-final-cta-card:hover { box-shadow: 0 4px 24px rgba(0,0,0,0.09); }
        .pj-back-bar a:hover { text-decoration: underline; }

        /* ── MOBILE ─────────────────────────────────────────────────────── */
        @media (max-width: 768px) {
          .pj-hero { min-height: 440px; }
          .pj-hero-inner { padding: 40px 20px 44px; }
          .pj-hero-title { font-size: clamp(2.1rem, 9vw, 2.8rem); }
          .pj-hero-subtitle { font-size: 1.05rem; }

          .pj-back-bar { padding: 0 20px; }

          .pj-section-sobre,
          .pj-section-stats,
          .pj-section-conquistas,
          .pj-section-final-cta { padding: 64px 20px; }
          .pj-section-como { padding: 64px 20px; }
          .pj-section-ajudar { padding: 64px 20px; }
          .pj-prevnext-section { padding: 0 20px; }
          .pj-prevnext-inner { padding: 32px 0; flex-direction: column; gap: 0; }

          .pj-stats-grid { grid-template-columns: 1fr; gap: 16px; }
          .pj-stat-card { padding: 28px 24px; }
          .pj-stat-value { font-size: 3rem; }

          .pj-how-grid { grid-template-columns: 1fr; gap: 32px; }
          .pj-schedule-box { padding: 28px 24px; }

          .pj-conquistas-grid { grid-template-columns: 1fr; gap: 16px; }
          .pj-conquista-card { padding: 24px; }

          .pj-cta-buttons { flex-direction: column; }
          .pj-btn-primary,
          .pj-btn-outline { justify-content: center; text-align: center; }

          .pj-prevnext-card { padding: 20px 0; }
          .pj-prevnext-card--right { border-top: 1px solid var(--border-soft); align-items: flex-start !important; }
          .pj-prevnext-card--right p { text-align: left !important; }
          .pj-prevnext-divider { display: none; }

          .pj-final-cta-grid { grid-template-columns: 1fr; gap: 16px; }
          .pj-final-cta-card { padding: 28px 24px; }
        }

        /* ── TABLET ─────────────────────────────────────────────────────── */
        @media (min-width: 769px) and (max-width: 1024px) {
          .pj-hero-inner { padding: 48px 32px 52px; }
          .pj-back-bar { padding: 0 32px; }
          .pj-section-sobre,
          .pj-section-stats,
          .pj-section-conquistas,
          .pj-section-final-cta { padding: 80px 32px; }
          .pj-section-como { padding: 80px 32px; }
          .pj-section-ajudar { padding: 80px 32px; }
          .pj-prevnext-section { padding: 0 32px; }
          .pj-stats-grid { grid-template-columns: 1fr 1fr; }
          .pj-conquistas-grid { grid-template-columns: 1fr 1fr; }
          .pj-final-cta-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <header className="pj-hero" style={s.hero}>
        <div style={s.heroBg(projeto.photo)} />
        <div style={s.heroOverlay} />
        <div className="pj-hero-inner" style={s.heroInner}>
          <div style={s.tagRow}>
            <span style={s.tagBadge(tagColor)}>{projeto.tag}</span>
            <span style={s.tagN}>{projeto.n}</span>
          </div>
          <h1 className="pj-hero-title" style={s.heroTitle}>{projeto.title}</h1>
          <p className="pj-hero-subtitle" style={s.heroSubtitle}>{projeto.titleLong}</p>
          <div style={s.heroStatsRow}>
            <IconUsers />
            <span style={s.heroStatsText}>{projeto.stats}</span>
          </div>
        </div>
      </header>

      {/* ── BACK BAR ─────────────────────────────────────────────────────── */}
      <div className="pj-back-bar" style={s.backBar}>
        <div className="pj-back-bar-inner" style={s.backBarInner}>
          <Link href="/programas-e-projetos" style={s.backLink}>
            <IconChevronLeft />
            Todos os projetos
          </Link>
        </div>
      </div>

      {/* ── SOBRE O PROJETO ──────────────────────────────────────────────── */}
      <section className="pj-section-sobre" style={s.section('var(--paper-100)')}>
        <div style={s.inner}>
          <p style={s.eyebrow}>SOBRE O PROJETO</p>
          <h2 className="pj-section-h2" style={{ ...s.h2, marginBottom: 32 }}>
            {projeto.desc}
          </h2>
          <div>
            {descParas.map((para, i) => (
              <p key={i} style={{ ...s.body, marginBottom: i < descParas.length - 1 ? 20 : 0 }}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── NÚMEROS E IMPACTO ────────────────────────────────────────────── */}
      <section className="pj-section-stats" style={s.section('var(--paper-50)')}>
        <div style={s.inner}>
          <p style={s.eyebrow}>NÚMEROS E IMPACTO</p>
          <h2 className="pj-section-h2" style={{ ...s.h2, marginBottom: 48 }}>
            Resultados que aparecem{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--amber-500)' }}>
              dentro e fora do tatame.
            </em>
          </h2>
          <div className="pj-stats-grid">
            {statCards.map((card, i) => (
              <div key={i} className="pj-stat-card" style={s.statCard}>
                <div className="pj-stat-value" style={s.statValue}>{card.value}</div>
                <div style={s.statLabel}>{card.label}</div>
                <div style={s.statSub}>{card.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMO FUNCIONA ────────────────────────────────────────────────── */}
      <section className="pj-section-como" style={s.section('var(--paper-100)')}>
        <div style={s.inner}>
          <div className="pj-how-grid">
            <div>
              <p style={s.eyebrow}>COMO FUNCIONA</p>
              <h2 className="pj-section-h2" style={{ ...s.h2, marginBottom: 28 }}>
                {projeto.title} — da entrada ao tatame.
              </h2>
              <p style={s.body}>{projeto.comoFunciona}</p>
            </div>
            <div className="pj-schedule-box" style={s.scheduleBox}>
              <p style={s.eyebrowLight}>DIAS E HORÁRIOS</p>
              {scheduleLines.map((item, i) => (
                <div
                  key={i}
                  style={{
                    ...s.scheduleItem,
                    ...(i === scheduleLines.length - 1
                      ? { borderBottom: 'none', paddingBottom: 0 }
                      : {}),
                  }}
                >
                  <span style={s.scheduleDay}>{item.day}</span>
                  {item.time && <span style={s.scheduleTime}>{item.time}</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONQUISTAS ───────────────────────────────────────────────────── */}
      <section className="pj-section-conquistas" style={s.section('var(--paper-50)')}>
        <div style={s.inner}>
          <p style={s.eyebrow}>CONQUISTAS</p>
          <h2 className="pj-section-h2" style={{ ...s.h2, marginBottom: 12 }}>
            O que já conquistamos
          </h2>
          <p style={{ ...s.amberSub, marginBottom: 48 }}>
            Resultados que vão além dos campeonatos.
          </p>
          <div className="pj-conquistas-grid">
            {projeto.conquistas.map((c, i) => (
              <div key={i} className="pj-conquista-card" style={s.conquistaCard}>
                <div style={s.conquistaBar} />
                <h3 style={s.conquistaTitle}>{c.titulo}</h3>
                <p style={s.conquistaDesc}>{c.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ANTERIOR / PRÓXIMO ───────────────────────────────────────────── */}
      {(prev || next) && (
        <nav aria-label="Navegação entre projetos" className="pj-prevnext-section" style={s.prevNextSection}>
          <div className="pj-prevnext-inner" style={s.prevNextInner}>
            {prev ? (
              <Link
                href={`/programas-e-projetos/${prev.slug}`}
                className="pj-prevnext-card"
                style={s.prevNextCard('left')}
                aria-label={`Projeto anterior: ${prev.title}`}
              >
                <span style={s.prevNextLabel}>
                  <IconChevronLeft size={14} /> Projeto anterior
                </span>
                <p style={s.prevNextTitle}>{prev.title}</p>
                <span style={{ ...s.eyebrow, fontSize: 11, color: 'var(--ink-300)', marginBottom: 0 }}>
                  {prev.tag}
                </span>
              </Link>
            ) : (
              <div style={{ flex: 1 }} />
            )}

            <div style={s.prevNextDivider} className="pj-prevnext-divider" />

            {next ? (
              <Link
                href={`/programas-e-projetos/${next.slug}`}
                className="pj-prevnext-card pj-prevnext-card--right"
                style={s.prevNextCard('right')}
                aria-label={`Próximo projeto: ${next.title}`}
              >
                <span style={{ ...s.prevNextLabel, justifyContent: 'flex-end' }}>
                  Próximo projeto <IconChevronRight size={14} />
                </span>
                <p style={{ ...s.prevNextTitle, textAlign: 'right' }}>{next.title}</p>
                <span style={{ ...s.eyebrow, fontSize: 11, color: 'var(--ink-300)', marginBottom: 0 }}>
                  {next.tag}
                </span>
              </Link>
            ) : (
              <div style={{ flex: 1 }} />
            )}
          </div>
        </nav>
      )}
    </>
  )
}
