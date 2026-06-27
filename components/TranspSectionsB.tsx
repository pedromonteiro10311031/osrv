'use client'

import { useState } from 'react'
import Link from 'next/link'

type Seg = { value: number; label: string; color: string }

const ORIGEM: Seg[] = [
  { value: 45, label: 'Doações de pessoa física', color: 'var(--pine-500)' },
  { value: 30, label: 'Parcerias empresariais', color: 'var(--amber-500)' },
  { value: 15, label: 'Editais públicos e privados', color: 'var(--teal-500)' },
  { value: 7,  label: 'Eventos e campanhas', color: 'var(--terracota-500)' },
  { value: 3,  label: 'Brechó e outras receitas', color: 'var(--ink-300)' },
]

const APLICACAO: Seg[] = [
  { value: 60, label: 'Projetos diretos (atividades com as crianças)', color: 'var(--pine-500)' },
  { value: 20, label: 'Manutenção e infraestrutura', color: 'var(--teal-500)' },
  { value: 15, label: 'Alimentação e materiais', color: 'var(--amber-500)' },
  { value: 5,  label: 'Administrativo', color: 'var(--ink-300)' },
]

const REPORTS = [
  { year: 2025 }, { year: 2024 }, { year: 2023 }, { year: 2022 },
]

const GOV_DOCS = [
  'Organograma institucional',
  'Composição da diretoria (mandato vigente)',
  'Composição dos conselhos',
  'Código de conduta e ética',
  'Política de privacidade (LGPD)',
  'Política de prevenção a fraudes',
]

const s = {
  section:    { maxWidth: 'var(--container)', margin: '0 auto', padding: '0 32px' },
  eyebrow:    { fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'var(--pine-700)', marginBottom: 14 },
  eyebrowDark:{ fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'var(--amber-300)', marginBottom: 14 },
  h2:         { fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(2rem, 3.6vw, 3rem)', lineHeight: 1.04, letterSpacing: '-0.025em', color: 'var(--ink-900)', margin: '0 0 14px' },
  h2Dark:     { fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(2rem, 3.6vw, 3rem)', lineHeight: 1.04, letterSpacing: '-0.025em', color: 'var(--paper-100)', margin: '0 0 14px' },
  sub:        { fontFamily: 'var(--font-serif)', fontStyle: 'italic' as const, color: 'var(--amber-500)', fontSize: 'clamp(1.1rem, 1.6vw, 1.35rem)', margin: '0 0 48px', display: 'block' },
}

const field: React.CSSProperties = {
  width: '100%', boxSizing: 'border-box', padding: '12px 14px',
  border: '1px solid var(--border-hard)', borderRadius: 4,
  fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--ink-900)',
  background: 'var(--paper-50)', outline: 'none',
}

const label: React.CSSProperties = {
  display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--ink-700)', marginBottom: 6,
}

/* ---------------------------------------------------------------- DONUT */

function DonutChart({ data, size = 190 }: { data: Seg[]; size?: number }) {
  const r = 46, cx = 60, cy = 60, sw = 15
  const circ = 2 * Math.PI * r
  let acc = 0
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} style={{ flex: 'none', maxWidth: '100%' }} className="donut-svg">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--paper-300)" strokeWidth={sw} />
      {data.map((seg, i) => {
        const len = (seg.value / 100) * circ
        const el = (
          <circle key={i} cx={cx} cy={cy} r={r} fill="none" stroke={seg.color} strokeWidth={sw}
            strokeDasharray={`${len} ${circ - len}`} strokeDashoffset={-acc}
            transform={`rotate(-90 ${cx} ${cy})`} strokeLinecap="butt" />
        )
        acc += len
        return el
      })}
    </svg>
  )
}

function DonutBlock({ title, data, className }: { title: string; data: Seg[]; className?: string }) {
  return (
    <div className={className}>
      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 21, fontWeight: 500, color: 'var(--ink-900)', margin: '0 0 28px' }} className="donut-title">{title}</h3>
      <div style={{ display: 'flex', alignItems: 'center', gap: 36, flexWrap: 'wrap' }} className="donut-row">
        <DonutChart data={data} />
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 13, flex: 1, minWidth: 230 }} className="donut-legend">
          {data.map((seg, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
              <span style={{ flex: 'none', width: 11, height: 11, borderRadius: 3, background: seg.color, transform: 'translateY(1px)' }} />
              <span style={{ flex: 'none', fontSize: 15, fontWeight: 700, color: 'var(--ink-900)', minWidth: 38, fontVariantNumeric: 'tabular-nums' }}>{seg.value}%</span>
              <span style={{ fontSize: 14.5, color: 'var(--ink-700)', lineHeight: 1.35 }}>{seg.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

/* --------------------------------------------------------------- RECURSOS */

export function TranspRecursos() {
  return (
    <section id="recursos" style={{ background: 'var(--bg-page)', padding: '0 0 120px' }} className="transp-recursos">
      <style>{`
        @media (max-width: 768px) {
          .transp-recursos .tr-inner {
            padding: 0 20px !important;
            box-sizing: border-box;
            max-width: 100% !important;
          }
          .transp-recursos .tr-grid {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
          /* Separador entre os dois blocos */
          .transp-recursos .donut-block + .donut-block {
            border-top: 1px solid var(--border-soft);
            padding-top: 40px;
            margin-top: 40px;
          }
          /* Título do bloco alinhado com o restante da seção */
          .transp-recursos .donut-title {
            font-size: 18px !important;
            margin-bottom: 24px !important;
          }
          /* Donut centralizado, tamanho reduzido */
          .transp-recursos .donut-row {
            flex-direction: column !important;
            align-items: center !important;
            gap: 24px !important;
          }
          .transp-recursos .donut-svg {
            width: 148px !important;
            height: 148px !important;
          }
          /* Legenda em 1 coluna, empilhada */
          .transp-recursos .donut-legend {
            display: flex !important;
            flex-direction: column !important;
            gap: 14px !important;
            flex: unset !important;
            min-width: unset !important;
            width: 100% !important;
          }
          .transp-recursos .donut-legend li {
            align-items: flex-start !important;
          }
        }
      `}</style>
      <div style={s.section} className="tr-inner">
        <div style={{ borderTop: '1px solid var(--border-soft)', paddingTop: 88 }}>
          <div style={s.eyebrow}>Aplicação de recursos</div>
          <h2 style={s.h2}>Cada doação tem destino claro.</h2>
          <span style={s.sub}>Veja como dividimos o que recebemos.</span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 56 }} className="tr-grid">
            <DonutBlock title="Origem dos recursos" data={ORIGEM} className="donut-block" />
            <DonutBlock title="Aplicação dos recursos" data={APLICACAO} className="donut-block" />
          </div>
          <p style={{ fontSize: 13, color: 'var(--ink-500)', marginTop: 40, fontStyle: 'italic' }}>
            *Dados referentes ao exercício de 2025, auditados em janeiro de 2026.
          </p>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------- RELATÓRIOS */

function ReportCard({ year }: { year: number }) {
  const [hover, setHover] = useState(false)
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={{
        position: 'relative', aspectRatio: '3/4', borderRadius: 8, overflow: 'hidden',
        background: 'rgba(250,248,244,0.1)', display: 'flex', flexDirection: 'column',
        justifyContent: 'space-between', padding: 22, border: '1px solid rgba(255,255,255,0.12)',
        boxShadow: hover ? '0 12px 40px rgba(0,0,0,0.35)' : '0 2px 8px rgba(0,0,0,0.18)',
        transform: hover ? 'translateY(-4px)' : 'none',
        transition: 'box-shadow 0.18s ease, transform 0.18s ease',
      }}>
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--paper-100)' }}>Relatório Anual</div>
        <div>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 4vw, 3.4rem)', fontWeight: 500, color: 'var(--paper-100)', lineHeight: 1 }}>{year}</div>
          <div style={{ width: 40, height: 3, background: 'var(--amber-500)', marginTop: 14, borderRadius: 2 }} />
        </div>
      </div>
      <a href="#" style={{ display: 'flex', justifyContent: 'center', padding: '11px 18px', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 999, fontSize: 14, color: 'var(--paper-100)', textDecoration: 'none' }}>
        ⬇ Baixar PDF
      </a>
    </div>
  )
}

export function TranspRelatorios() {
  return (
    <section id="relatorios" style={{ background: 'var(--pine-900)', padding: '120px 0' }} className="transp-relatorios">
      <style>{`
        @media (max-width: 768px) {
          .transp-relatorios .trel-inner { padding: 0 20px !important; box-sizing: border-box; max-width: 100% !important; }
          .transp-relatorios .trel-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 16px !important; }
        }
      `}</style>
      <div style={s.section} className="trel-inner">
        <div style={s.eyebrowDark}>Atividades e impacto</div>
        <h2 style={s.h2Dark}>Relatórios anuais.</h2>
        <span style={s.sub}>Tudo que fizemos, ano a ano.</span>
        <p style={{ maxWidth: 680, fontSize: 16, lineHeight: 1.65, color: 'rgba(250,248,244,0.82)', marginTop: -32, marginBottom: 48 }}>
          Mais do que números financeiros, contamos as histórias por trás de cada projeto. Quantas
          crianças atendemos, quais resultados alcançamos e o que aprendemos no caminho.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }} className="trel-grid">
          {REPORTS.map((r) => <ReportCard key={r.year} year={r.year} />)}
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------- GOVERNANÇA */

export function TranspGovernanca() {
  return (
    <section id="governanca" style={{ background: 'var(--bg-page)', padding: '0 0 120px' }} className="transp-gov">
      <style>{`
        @media (max-width: 768px) {
          .transp-gov .tg-inner { padding: 0 20px !important; box-sizing: border-box; max-width: 100% !important; }
          .transp-gov .tg-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
      <div style={s.section} className="tg-inner">
        <div style={{ borderTop: '1px solid var(--border-soft)', paddingTop: 88 }}>
          <div style={s.eyebrow}>Quem toma as decisões</div>
          <h2 style={s.h2}>Estrutura de governança.</h2>
          <span style={s.sub}>Conselho ativo, decisões coletivas.</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }} className="tg-grid">
            <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--fg-2)', margin: 0 }}>
              A OSRV é administrada por uma diretoria executiva e supervisionada por um conselho fiscal
              e um conselho consultivo, todos eleitos em assembleia geral e atuando voluntariamente.
            </p>
            <div>
              <div style={{ fontSize: 11.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--ink-500)', marginBottom: 8 }}>
                Documentos para download
              </div>
              {GOV_DOCS.map((d, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderBottom: '1px solid var(--border-soft)', cursor: 'pointer' }}>
                  <span style={{ color: 'var(--pine-700)' }}>📄</span>
                  <span style={{ flex: 1, fontSize: 14, color: 'var(--ink-700)' }}>{d}</span>
                  <span style={{ color: 'var(--ink-300)' }}>⬇</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------- PARCEIROS */

export function TranspParceiros() {
  return (
    <section id="parceiros" style={{ background: 'var(--bg-page)', padding: '0 0 120px' }} className="transp-parceiros">
      <style>{`
        @media (max-width: 768px) {
          .transp-parceiros .tp-inner { padding: 0 20px !important; box-sizing: border-box; max-width: 100% !important; }
          .transp-parceiros .tp-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
      <div style={s.section} className="tp-inner">
        <div style={{ borderTop: '1px solid var(--border-soft)', paddingTop: 88 }}>
          <div style={s.eyebrow}>Quem caminha conosco</div>
          <h2 style={s.h2}>Empresas e instituições que apoiam.</h2>
          <span style={s.sub}>Cada apoio aqui está documentado.</span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }} className="tp-grid">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} style={{
                aspectRatio: '3/2', borderRadius: 8, background: 'var(--paper-200)',
                border: '1px solid var(--border-soft)', display: 'flex', alignItems: 'center',
                justifyContent: 'center', color: 'var(--ink-300)', fontSize: 13.5, fontWeight: 500,
              }}>
                Logo parceiro {i + 1}
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13, color: 'var(--ink-500)', marginTop: 28 }}>
            Para conhecer detalhes de cada parceria, consulte os Relatórios Anuais.
          </p>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------- OUVIDORIA */

function OuvidoriaForm() {
  const [open, setOpen] = useState(false)
  const [sent, setSent] = useState(false)

  if (sent) {
    return (
      <div style={{ padding: 20, background: 'var(--pine-100)', border: '1px solid var(--pine-300)', borderRadius: 8, display: 'flex', gap: 14, alignItems: 'flex-start' }}>
        <span style={{ flex: 'none', width: 40, height: 40, borderRadius: '50%', background: 'var(--pine-500)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>✓</span>
        <div>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: 19, color: 'var(--pine-900)' }}>Manifestação enviada.</div>
          <p style={{ fontSize: 14.5, color: 'var(--ink-700)', marginTop: 6, lineHeight: 1.55 }}>
            Recebemos sua mensagem e respondemos em até 7 dias úteis. Obrigado por nos ajudar a melhorar.
          </p>
        </div>
      </div>
    )
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--amber-500)', color: '#fff', border: 0, borderRadius: 999, padding: '12px 22px', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}
      >
        Abrir formulário de ouvidoria →
      </button>
    )
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true) }}
      style={{ display: 'grid', gap: 16, padding: 24, background: 'var(--paper-200)', border: '1px solid var(--border-soft)', borderRadius: 8 }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="to-form-row">
        <div>
          <label style={label}>Nome <span style={{ color: 'var(--ink-300)', fontWeight: 400 }}>(opcional)</span></label>
          <input style={field} type="text" placeholder="Seu nome" />
        </div>
        <div>
          <label style={label}>E-mail <span style={{ color: 'var(--ink-300)', fontWeight: 400 }}>(opcional)</span></label>
          <input style={field} type="email" placeholder="voce@email.com" />
        </div>
      </div>
      <div>
        <label style={label}>Tipo de manifestação</label>
        <select style={{ ...field, appearance: 'none' }} defaultValue="">
          <option value="" disabled>Selecione uma opção</option>
          <option>Dúvida</option>
          <option>Sugestão</option>
          <option>Reclamação</option>
          <option>Denúncia</option>
          <option>Solicitação de informação</option>
        </select>
      </div>
      <div>
        <label style={label}>Mensagem</label>
        <textarea style={{ ...field, minHeight: 110, resize: 'vertical', lineHeight: 1.5 }} placeholder="Escreva sua manifestação" />
      </div>
      <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, cursor: 'pointer', fontSize: 14, color: 'var(--ink-700)', lineHeight: 1.45 }}>
        <input type="checkbox" style={{ width: 16, height: 16, marginTop: 2, accentColor: 'var(--pine-500)', flex: 'none' }} />
        Desejo manter minha identidade em sigilo
      </label>
      <div>
        <button type="submit" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--amber-500)', color: '#fff', border: 0, borderRadius: 999, padding: '12px 22px', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>
          Enviar manifestação →
        </button>
      </div>
    </form>
  )
}

export function TranspOuvidoria() {
  return (
    <section id="ouvidoria" style={{ background: 'var(--bg-page)', padding: '0 0 120px' }} className="transp-ouvidoria">
      <style>{`
        @media (max-width: 768px) {
          .transp-ouvidoria .to-inner { padding: 0 20px !important; box-sizing: border-box; max-width: 100% !important; }
          .transp-ouvidoria .to-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .transp-ouvidoria .to-form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <div style={s.section} className="to-inner">
        <div style={{ borderTop: '1px solid var(--border-soft)', paddingTop: 88 }}>
          <div style={s.eyebrow}>Dúvidas, sugestões ou denúncias</div>
          <h2 style={s.h2}>Fale conosco.</h2>
          <span style={s.sub}>Toda manifestação recebida é respondida em até 7 dias úteis.</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }} className="to-grid">
            <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--fg-2)', margin: 0 }}>
              Se você tem dúvidas sobre nossos dados financeiros, quer solicitar informações adicionais ou
              precisa reportar algo, use um dos canais abaixo. Todas as manifestações são tratadas com
              confidencialidade quando solicitado.
            </p>
            <div style={{ background: 'var(--paper-50)', border: '1px solid var(--border-soft)', borderRadius: 8, padding: '8px 28px 28px' }}>
              {([['✉', 'E-mail', 'transparencia@osrv.org.br'], ['📞', 'WhatsApp', '(65) 9 0000-0000']] as [string, string, string][]).map(([icon, lbl, value]) => (
                <div key={lbl} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '20px 0', borderBottom: '1px solid var(--border-soft)' }}>
                  <span style={{ flex: 'none', width: 44, height: 44, borderRadius: '50%', background: 'var(--pine-100)', color: 'var(--pine-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>{icon}</span>
                  <div>
                    <div style={{ fontSize: 11.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-500)' }}>{lbl}</div>
                    <div style={{ fontSize: 16, color: 'var(--ink-900)', fontWeight: 500, marginTop: 2 }}>{value}</div>
                  </div>
                </div>
              ))}
              <div style={{ paddingTop: 20 }}>
                <OuvidoriaForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------- CTA */

export function TranspCTA({ onDonate }: { onDonate?: () => void }) {
  return (
    <section id="apoie" style={{ background: 'var(--bg-page)', padding: '0 0 120px' }}>
      <div style={s.section}>
        <div style={{ borderTop: '1px solid var(--border-soft)', paddingTop: 104, textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 22 }}>
            <span style={{ width: 48, height: 1, background: 'var(--border-hard)', display: 'block' }} />
            <span style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'var(--pine-700)' }}>Apoie a OSRV</span>
            <span style={{ width: 48, height: 1, background: 'var(--border-hard)', display: 'block' }} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', color: 'var(--ink-900)', margin: 0, letterSpacing: '-0.02em' }}>
            Faça parte dessa história.
          </h2>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--amber-500)', fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', margin: '14px auto 0' }}>
            Não importa o tamanho do gesto.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginTop: 36 }}>
            <button
              onClick={onDonate}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--amber-500)', color: '#fff', border: 0, borderRadius: 999, padding: '14px 28px', fontSize: 15, fontWeight: 600, cursor: 'pointer' }}
            >
              ♥ Quero doar
            </button>
            <Link href="/quero-ser-voluntario" style={{ display: 'inline-flex', alignItems: 'center', padding: '14px 28px', border: '1px solid var(--border-hard)', borderRadius: 999, fontSize: 15, color: 'var(--ink-900)', textDecoration: 'none', fontWeight: 500 }}>
              Ser voluntário
            </Link>
            <Link href="/quero-ser-parceiro" style={{ display: 'inline-flex', alignItems: 'center', padding: '14px 28px', border: '1px solid var(--border-hard)', borderRadius: 999, fontSize: 15, color: 'var(--ink-900)', textDecoration: 'none', fontWeight: 500 }}>
              Parceria empresa
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
