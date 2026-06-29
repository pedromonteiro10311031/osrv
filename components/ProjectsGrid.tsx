'use client'

import { useState } from 'react'
import Link from 'next/link'

const projStyles = {
  wrap: { background: 'var(--paper-200)', padding: '96px 0' },
  inner: { maxWidth: 'var(--container)', margin: '0 auto', padding: '0 32px' },
  head: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, gap: 32, flexWrap: 'wrap' as const },
  eyebrow: { fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'var(--pine-700)', marginBottom: 12 },
  h2: {
    fontFamily: 'var(--font-serif)',
    fontWeight: 400,
    fontSize: 'clamp(2rem, 3.6vw, 3rem)',
    lineHeight: 1.04,
    letterSpacing: '-0.025em',
    color: 'var(--ink-900)',
    margin: 0,
    maxWidth: 640,
  },
  italic: { fontStyle: 'italic' as const, color: 'var(--pine-700)' },
  intro: { fontSize: 17, lineHeight: 1.55, color: 'var(--fg-2)', maxWidth: 380, margin: 0 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, width: '100%' },
  card: {
    background: 'var(--paper-100)',
    borderRadius: 8,
    overflow: 'hidden',
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'inherit',
    display: 'flex',
    flexDirection: 'column' as const,
    transition: 'box-shadow 0.2s, transform 0.2s',
  },
  band: {
    aspectRatio: '5/4',
    position: 'relative' as const,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'flex-end' as const,
    padding: 18,
    color: '#fff',
  },
  bandScrim: { position: 'absolute' as const, inset: 0, background: 'linear-gradient(180deg, rgba(31,42,46,0) 40%, rgba(31,42,46,0.55) 100%)' },
  placeholder: {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontFamily: 'var(--font-serif)',
    fontSize: 28,
    color: 'rgba(255,255,255,0.22)',
    fontStyle: 'italic' as const,
    pointerEvents: 'none' as const,
  },
  tag: { position: 'relative' as const, fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const },
  body: { padding: '22px 24px 26px' },
  title: {
    fontFamily: 'var(--font-serif)',
    fontWeight: 500,
    fontSize: 24,
    lineHeight: 1.15,
    letterSpacing: '-0.015em',
    color: 'var(--ink-900)',
    margin: '0 0 10px',
  },
  desc: { fontSize: 15, lineHeight: 1.55, color: 'var(--fg-2)', margin: 0 },
  link: { display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 18, fontSize: 14, fontWeight: 500, color: 'var(--teal-700)' },
}

const PROJECTS = [
  {
    id: 'judo',
    eyebrow: 'PROJETO CARRO-CHEFE',
    title: 'Judô — disciplina, equilíbrio e respeito.',
    desc: 'O programa principal da OSRV. Treinos três vezes por semana, da faixa branca à amarela, com preparação física, ukemi e valores do tatame para a vida.',
    bg: 'linear-gradient(160deg, #4A9B3E 0%, #1E4218 100%)',
    photoHint: 'foto · treino de judô',
    featured: true,
  },
  {
    id: 'xadrez',
    eyebrow: 'PROJETO XADREZ',
    title: 'Xadrez — pensar antes de mover.',
    desc: 'Aulas semanais, torneios internos e participação em campeonatos municipais. Foco em concentração, raciocínio lógico e paciência.',
    bg: 'linear-gradient(160deg, #2E86AB 0%, #15445A 100%)',
    photoHint: 'foto · partida de xadrez',
    featured: false,
  },
  {
    id: 'radicais',
    eyebrow: 'PROJETO ESPORTES RADICAIS',
    title: 'Esportes radicais — coragem com segurança.',
    desc: 'Slackline, escalada e parkour adaptados. Cada salto começa com conferência de equipamento e respiração.',
    bg: 'linear-gradient(160deg, #BC7715 0%, #7A4A0F 100%)',
    photoHint: 'foto · slackline',
    featured: false,
  },
  {
    id: 'yoga',
    eyebrow: 'PROJETO YOGA',
    title: 'Yoga — respirar antes de reagir.',
    desc: 'Prática semanal de yoga infantil com pilares de respiração, alongamento e meditação curta.',
    bg: 'linear-gradient(160deg, #7B5EA7 0%, #3F2E5C 100%)',
    photoHint: 'foto · aula de yoga',
    featured: false,
  },
  {
    id: 'educacao',
    eyebrow: 'APOIO EDUCACIONAL',
    title: 'Reforço escolar, biblioteca e estudo dirigido.',
    desc: 'Acompanhamento pedagógico de matemática e português no contraturno. Três professoras, biblioteca aberta.',
    bg: 'linear-gradient(160deg, #D85A8B 0%, #5C2440 100%)',
    photoHint: 'foto · sala de estudo',
    featured: false,
  },
  {
    id: 'psicologia',
    eyebrow: 'ACOMPANHAMENTO PSICOLÓGICO',
    title: 'Escuta cuidada — toda semana, sem fila.',
    desc: 'Atendimento psicológico individual e em grupo, em parceria com a UFMT.',
    bg: 'linear-gradient(160deg, #E66060 0%, #5A1F1F 100%)',
    photoHint: 'foto · sala de escuta',
    featured: false,
  },
]

type Project = typeof PROJECTS[0]

function ProjectCard({ p }: { p: Project }) {
  const [hover, setHover] = useState(false)
  const cardStyle = {
    ...projStyles.card,
    boxShadow: hover ? '0 8px 24px rgba(0,0,0,0.12)' : 'none',
    transform: hover ? 'translateY(-2px)' : 'translateY(0)',
  }
  const eyebrowStyle = p.featured
    ? { ...projStyles.tag, color: 'var(--amber-300)' }
    : projStyles.tag

  return (
    <Link href={`/programas-e-projetos#${p.id}`} style={cardStyle} className="projects-card" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div style={{ ...projStyles.band, background: p.bg }} className="projects-card-band">
        <span style={projStyles.placeholder} className="card-placeholder">{p.photoHint}</span>
        <div style={projStyles.bandScrim}></div>
        <span style={eyebrowStyle}>{p.eyebrow}</span>
      </div>
      <div style={projStyles.body} className="projects-card-body">
        <h3 style={projStyles.title} className="projects-card-title">{p.title}</h3>
        <p style={projStyles.desc} className="projects-card-desc">{p.desc}</p>
        <span style={projStyles.link} className="projects-card-link">Conhecer o projeto →</span>
      </div>
    </Link>
  )
}

export default function ProjectsGrid() {
  return (
    <section id="projetos" style={projStyles.wrap}>
      <div style={projStyles.inner} className="projects-inner">
        <div style={projStyles.head}>
          <div>
            <div style={projStyles.eyebrow}>OS SEIS PROJETOS</div>
            <h2 style={projStyles.h2} className="projects-h2">
              Esporte, mente e cuidado
              <span style={projStyles.italic}> caminham junto.</span>
            </h2>
          </div>
          <p style={projStyles.intro} className="projects-intro">
            Cada criança que entra na OSRV é atendida por vários projetos ao
            mesmo tempo. Não escolhemos entre o tatame e a aula de matemática
            — fazemos os dois, e o lanche da tarde no meio.
          </p>
        </div>
        <div style={projStyles.grid} className="projects-grid">
          {PROJECTS.map((p) => <ProjectCard key={p.id} p={p} />)}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .projects-grid .card-placeholder {
            display: none;
          }
          .projects-inner {
            padding: 48px 20px !important;
          }
          .projects-h2 {
            font-size: clamp(1.4rem, 6vw, 1.65rem) !important;
            line-height: 1.05 !important;
          }
          .projects-intro {
            font-size: 0.9rem !important;
            line-height: 1.4 !important;
          }
          .projects-card-band {
            aspect-ratio: 4/3 !important;
          }
          .projects-card-body {
            padding: 12px !important;
          }
          .projects-card-title {
            font-size: 0.95rem !important;
          }
          .projects-card-desc {
            font-size: 0.8rem !important;
          }
          .projects-card-link {
            font-size: 0.8rem !important;
          }
        }
      `}</style>
    </section>
  )
}