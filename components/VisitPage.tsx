'use client'

// Sections for "Venha Nos Conhecer". TopNav e Footer ficam em page.tsx.

const HERO_PHOTO = 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=2200&q=80'

const HOURS: [string, string][] = [
  ['Segunda a sexta', '08h às 18h'],
  ['Sábado', '08h às 12h'],
  ['Domingo e feriados', 'Fechado'],
]

const CHANNELS: [string, string, string][] = [
  ['📞', 'Telefone / WhatsApp', '(65) 9 0000-0000'],
  ['✉', 'E-mail', 'contato@osrv.org.br'],
  ['📷', 'Instagram', '@osrv.cuiaba'],
]

const FINDS: [string, string, string][] = [
  ['🎓', 'As salas de aula', 'Espaço de alfabetização, reforço e xadrez.'],
  ['📖', 'A biblioteca', 'Acervo aberto para a comunidade inteira.'],
  ['🛍', 'O brechó', 'Economia solidária que sustenta os projetos.'],
]

/* ---------------------------------------------------------------- shared */

const wrap: React.CSSProperties = { maxWidth: 'var(--container)', margin: '0 auto', padding: '0 32px' }
const pad = 'clamp(72px, 9vw, 116px) 0'

const ui = {
  eyebrow: { fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'var(--pine-700)', margin: 0 },
  title:   { fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 'var(--fs-h2)', lineHeight: 1.06, letterSpacing: '-0.02em', color: 'var(--ink-900)', margin: '14px 0 0' },
  sub:     { fontFamily: 'var(--font-serif)', fontStyle: 'italic' as const, fontWeight: 400, fontSize: 'clamp(1.25rem, 2.2vw, 1.625rem)', lineHeight: 1.2, color: 'var(--amber-500)', margin: '12px 0 0' },
}

interface SectionHeadProps {
  eyebrow: string
  title: string
  subtitle?: string
  light?: boolean
  tight?: boolean
}

function SectionHead({ eyebrow, title, subtitle, light, tight }: SectionHeadProps) {
  return (
    <div style={{ maxWidth: 760, marginBottom: tight ? 'clamp(20px, 2.5vw, 28px)' : 'clamp(36px, 5vw, 56px)' }}>
      <p style={{ ...ui.eyebrow, color: light ? 'var(--amber-300)' : 'var(--pine-700)' }}>{eyebrow}</p>
      <h2 style={{ ...ui.title, color: light ? 'var(--paper-100)' : 'var(--ink-900)' }}>{title}</h2>
      {subtitle && <p style={ui.sub}>{subtitle}</p>}
    </div>
  )
}

type BtnVariant = 'primary' | 'outlineDark' | 'outlineGreen' | 'outlineInk'

const btnBase: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9,
  borderRadius: 999, padding: '14px 26px', fontFamily: 'var(--font-sans)',
  fontSize: 15, fontWeight: 500, cursor: 'pointer', textDecoration: 'none',
  border: '1px solid transparent', whiteSpace: 'nowrap',
  transition: 'background 0.12s ease, border-color 0.12s ease, color 0.12s ease',
}

const btnVariants: Record<BtnVariant, React.CSSProperties> = {
  primary:      { background: 'var(--amber-500)', color: '#fff' },
  outlineDark:  { background: 'transparent', color: 'var(--paper-100)', borderColor: 'rgba(250,248,244,0.55)' },
  outlineGreen: { background: 'transparent', color: 'var(--pine-700)', borderColor: 'var(--pine-500)' },
  outlineInk:   { background: 'transparent', color: 'var(--ink-900)', borderColor: 'var(--border-hard)' },
}

const hoverBg: Record<BtnVariant, [string, string]> = {
  primary:      ['var(--amber-700)', 'var(--amber-500)'],
  outlineDark:  ['rgba(250,248,244,0.12)', 'transparent'],
  outlineGreen: ['var(--pine-100)', 'transparent'],
  outlineInk:   ['var(--paper-200)', 'transparent'],
}

interface BtnProps {
  variant?: BtnVariant
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  href?: string
}

function Btn({ variant = 'primary', children, onClick, href }: BtnProps) {
  const [on, off] = hoverBg[variant]
  return (
    <a
      href={href || '#'}
      style={{ ...btnBase, ...btnVariants[variant] }}
      onClick={onClick}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = on }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = off }}
    >
      {children}
    </a>
  )
}

function scrollTo(id: string) {
  return (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

/* ------------------------------------------------------------------ Hero */

function Hero() {
  return (
    <header style={{ position: 'relative', minHeight: 620, display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `url('${HERO_PHOTO}')`, backgroundSize: 'cover', backgroundPosition: 'center 40%' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(30,66,24,0.55) 0%, rgba(26,42,30,0.72) 100%)' }} />
      <div style={{ position: 'relative', width: '100%', maxWidth: 'var(--container)', margin: '0 auto', padding: 'clamp(72px, 10vw, 120px) 32px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 22 }}>
        <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(250,248,244,0.7)', margin: 0 }}>
          VENHA NOS CONHECER · OSRV CUIABÁ
        </p>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(2.75rem, 6vw, 5rem)', lineHeight: 1.0, letterSpacing: '-0.03em', color: 'var(--paper-100)', margin: 0, maxWidth: 900 }}>
          A porta está sempre aberta.
        </h1>
        <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(1.375rem, 2.6vw, 2rem)', lineHeight: 1.2, color: 'var(--amber-500)', margin: 0 }}>
          Conhecer de perto muda tudo.
        </p>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center', marginTop: 10 }}>
          <Btn variant="primary" onClick={scrollTo('endereco')}>Como chegar →</Btn>
          <Btn variant="outlineDark" onClick={scrollTo('agendar')}>Agendar visita</Btn>
        </div>
      </div>
    </header>
  )
}

/* --------------------------------------------------------------- Convite */

function Convite() {
  return (
    <section style={{ background: 'var(--paper-100)', padding: pad }}>
      <div style={wrap}>
        <SectionHead
          eyebrow="VENHA VER COM SEUS PRÓPRIOS OLHOS"
          title="Nenhum relatório substitui uma visita."
          subtitle="Você é nosso convidado."
        />
        <p style={{ fontSize: 'clamp(1.0625rem, 1.6vw, 1.25rem)', lineHeight: 1.72, color: 'var(--fg-2)', maxWidth: 720, margin: 0 }}>
          A gente pode contar muita coisa por aqui — mas nada se compara a sentir a energia do Jardim Renascer
          pessoalmente. Ver as crianças no tatame, ouvir a movimentação da biblioteca, conhecer quem faz a OSRV
          acontecer todos os dias. Se você quer doar, fazer parceria, ser voluntário ou só conhecer melhor o nosso
          trabalho, venha tomar um café com a gente. Será um prazer receber você.
        </p>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------ AddressMap */

interface InfoBlockProps {
  icon: string
  label: string
  children: React.ReactNode
}

function InfoBlock({ icon, label, children }: InfoBlockProps) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '44px 1fr', gap: 16, alignItems: 'start', paddingBottom: 24, borderBottom: '1px solid var(--border-soft)' }}>
      <div style={{ width: 44, height: 44, borderRadius: 8, background: 'var(--pine-100)', color: 'var(--pine-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>
        {icon}
      </div>
      <div>
        <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--ink-700)', marginBottom: 6 }}>{label}</div>
        <div style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--fg-2)' }}>{children}</div>
      </div>
    </div>
  )
}

function AddressMap() {
  return (
    <section id="endereco" style={{ background: 'var(--paper-100)', padding: pad, borderTop: '1px solid var(--border-soft)' }}>
      <div style={wrap}>
        <SectionHead tight eyebrow="ONDE ESTAMOS" title="Fácil de encontrar." subtitle="No coração do Jardim Renascer." />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'center' }} className="vp-address-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <InfoBlock icon="📍" label="Endereço">
              Rua Exemplo, 123 · Jardim Renascer<br />Cuiabá / MT · CEP 00000-000
            </InfoBlock>
            <p style={{ fontSize: 'clamp(1.0625rem, 1.6vw, 1.25rem)', lineHeight: 1.65, color: 'var(--fg-2)', maxWidth: '40ch', margin: 0 }}>
              Estamos de portas abertas no Jardim Renascer, em Cuiabá. Toque a campainha — tem sempre alguém para te receber e um café passando.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 4 }}>
              <Btn variant="primary">Abrir no Google Maps →</Btn>
              <Btn variant="outlineGreen">🧭 Abrir no Waze</Btn>
            </div>
          </div>
          <div className="vp-map" style={{
            position: 'relative', minHeight: 440, borderRadius: 'var(--r-md)', overflow: 'hidden',
            background: 'var(--paper-200)', border: '1px solid var(--border-soft)',
            backgroundImage: 'linear-gradient(var(--paper-300) 1px, transparent 1px), linear-gradient(90deg, var(--paper-300) 1px, transparent 1px)',
            backgroundSize: '38px 38px',
          }}>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14, color: 'var(--ink-500)' }}>
              <div style={{ width: 56, height: 56, borderRadius: '50% 50% 50% 0', background: 'var(--amber-500)', transform: 'rotate(-45deg)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-2)' }}>
                <span style={{ transform: 'rotate(45deg)', color: '#fff', fontSize: 24 }}>📍</span>
              </div>
              <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--ink-500)' }}>Mapa — Google Maps embed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* --------------------------------------------------------------- Horários */

function Hours() {
  return (
    <section style={{ background: 'var(--pine-900)', color: 'var(--paper-100)', padding: pad }}>
      <div style={wrap}>
        <SectionHead light eyebrow="QUANDO VISITAR" title="Nossos horários." subtitle="Mas se precisar de outro horário, é só combinar." />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }} className="vp-hours-grid">
          <div>
            {HOURS.map(([day, time], i) => (
              <div key={day} style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 20, padding: '20px 0', borderBottom: i < HOURS.length - 1 ? '1px solid rgba(255,255,255,0.14)' : 'none' }}>
                <span style={{ fontSize: 'clamp(1.0625rem, 1.6vw, 1.25rem)', color: 'var(--paper-100)' }}>{day}</span>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.25rem, 2vw, 1.625rem)', whiteSpace: 'nowrap', color: time === 'Fechado' ? 'rgba(250,248,244,0.55)' : 'var(--amber-300)' }}>{time}</span>
              </div>
            ))}
          </div>
          <div style={{ background: 'rgba(243,156,42,0.12)', border: '1px solid rgba(243,156,42,0.35)', borderRadius: 'var(--r-md)', padding: 'clamp(24px, 3vw, 32px)' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: 'var(--amber-300)', marginBottom: 14 }}>
              <span style={{ fontSize: 22 }}>👥</span>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--paper-100)' }}>Visitas guiadas</span>
            </div>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: 'rgba(250,248,244,0.9)', margin: 0 }}>
              Para grupos, escolas ou empresas, agende com antecedência. Montamos um roteiro especial para você conhecer todos os projetos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* --------------------------------------------------------------- Schedule */

function Schedule() {
  return (
    <section id="agendar" style={{ background: 'var(--paper-100)', padding: pad }}>
      <div style={wrap}>
        <div style={{ maxWidth: 760, marginBottom: 'clamp(36px, 5vw, 56px)' }}>
          <p style={ui.eyebrow}>VAMOS MARCAR?</p>
          <h2 style={ui.title}>Agende sua visita.</h2>
          <p style={ui.sub}>Respondemos em até 24 horas para confirmar.</p>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--fg-2)', margin: '18px 0 0', maxWidth: '56ch' }}>
            Preencha o formulário e nossa equipe entra em contato para combinar o melhor dia e horário.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="vp-schedule-grid">
          {CHANNELS.map(([icon, label, value]) => (
            <div key={label} style={{ background: 'var(--paper-50)', border: '1px solid var(--border-soft)', borderRadius: 'var(--r-md)', padding: 30, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span style={{ width: 46, height: 46, borderRadius: 8, background: 'var(--pine-100)', color: 'var(--pine-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>{icon}</span>
              <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--ink-700)' }}>{label}</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.375rem', color: 'var(--ink-900)' }}>{value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------ WhatToFind */

function WhatToFind() {
  return (
    <section style={{ background: 'var(--paper-100)', padding: pad, borderTop: '1px solid var(--border-soft)' }}>
      <div style={wrap}>
        <SectionHead eyebrow="O QUE ESPERAR" title="Um pouco do que você vai ver por aqui." subtitle="Cada espaço com uma história." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="vp-finds-grid">
          {FINDS.map(([icon, title, desc]) => (
            <div key={title} style={{ background: 'var(--paper-50)', border: '1px solid var(--border-soft)', borderRadius: 'var(--r-md)', padding: 28, display: 'flex', flexDirection: 'column', gap: 14 }}>
              <span style={{ fontSize: 30 }}>{icon}</span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: '1.3125rem', lineHeight: 1.15, color: 'var(--ink-900)', margin: 0 }}>{title}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--fg-2)', margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- PageCTA */

function PageCTA() {
  const rule: React.CSSProperties = { flex: 1, height: 1, background: 'var(--border-hard)', maxWidth: 80 }
  return (
    <section style={{ background: 'var(--paper-100)', padding: pad, borderTop: '1px solid var(--border-soft)' }}>
      <div style={{ ...wrap, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 18 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, width: '100%', maxWidth: 340, justifyContent: 'center' }}>
          <span style={rule} />
          <span style={{ ...ui.eyebrow, whiteSpace: 'nowrap' }}>APOIE A OSRV</span>
          <span style={rule} />
        </div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', lineHeight: 1.04, letterSpacing: '-0.025em', color: 'var(--ink-900)', margin: 0 }}>
          Faça parte dessa história.
        </h2>
        <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(1.375rem, 2.4vw, 1.875rem)', lineHeight: 1.2, color: 'var(--amber-500)', margin: 0 }}>
          Não importa o tamanho do gesto.
        </p>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center', marginTop: 14 }}>
          <Btn variant="primary" href="/quero-ser-doador">♥ Quero doar</Btn>
          <Btn variant="outlineGreen" href="/quero-ser-voluntario">Ser voluntário</Btn>
          <Btn variant="outlineGreen" href="/quero-ser-parceiro">Parceria empresa</Btn>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------- Page root */

export default function VisitPage() {
  return (
    <div className="visit-page">
      <style>{`
        @media (max-width: 768px) {
          .visit-page section > div {
            padding-left: 20px !important;
            padding-right: 20px !important;
            box-sizing: border-box;
            max-width: 100% !important;
          }
          .visit-page .vp-address-grid {
            grid-template-columns: 1fr !important;
          }
          .visit-page .vp-map {
            min-height: unset !important;
            aspect-ratio: 16 / 9;
          }
          .visit-page .vp-hours-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .visit-page .vp-schedule-grid {
            grid-template-columns: 1fr !important;
          }
          .visit-page .vp-finds-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      <Hero />
      <Convite />
      <AddressMap />
      <Hours />
      <Schedule />
      <WhatToFind />
      <PageCTA />
    </div>
  )
}
