'use client'

import { useState } from 'react'

const IDENT = [
  ['Razão social', 'Obras Sociais Rafael Verlangieri'],
  ['CNPJ', '00.000.000/0001-00'],
  ['Endereço', '[Rua, número, bairro, Cuiabá / MT, CEP]'],
  ['Data de fundação', '[DD/MM/AAAA]'],
  ['Natureza jurídica', 'Associação privada sem fins lucrativos'],
  ['Telefone', '(65) 9 0000-0000'],
  ['E-mail institucional', 'contato@osrv.org.br'],
  ['E-mail transparência', 'transparencia@osrv.org.br'],
]

const CERTS = [
  { n: '01', tag: 'CEBAS', title: 'CEBAS', sub: 'Certificado de Entidade Beneficente de Assistência Social', desc: 'Concedido pelo Governo Federal a entidades de assistência social, saúde ou educação. Lei nº 12.101/2009.', status: 'Vigente até [MM/AAAA]' },
  { n: '02', tag: 'OSCIP', title: 'OSCIP', sub: 'Organização da Sociedade Civil de Interesse Público', desc: 'Qualificação concedida pelo Ministério da Justiça conforme Lei nº 9.790/1999.', status: 'Vigente' },
  { n: '03', tag: 'UP', title: 'Utilidade Pública', sub: 'Município de Cuiabá e Estado de Mato Grosso', desc: 'Reconhecimento concedido pelos governos municipal e estadual em [ano].', status: 'Vigente' },
]

const FIN_DOCS = ['Balanço Patrimonial', 'DRE — Demonstração do Resultado do Exercício', 'Demonstração de Fluxo de Caixa', 'Notas Explicativas', 'Parecer de Auditoria']
const FIN_YEARS = [2025, 2024, 2023, 2022, 2021]

const s = {
  section: { maxWidth: 'var(--container)', margin: '0 auto', padding: '0 32px' },
  eyebrow: { fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'var(--pine-700)', marginBottom: 14 },
  eyebrowDark: { fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'var(--amber-300)', marginBottom: 14 },
  h2: { fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(2rem, 3.6vw, 3rem)', lineHeight: 1.04, letterSpacing: '-0.025em', color: 'var(--ink-900)', margin: '0 0 14px' },
  h2Dark: { fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(2rem, 3.6vw, 3rem)', lineHeight: 1.04, letterSpacing: '-0.025em', color: 'var(--paper-100)', margin: '0 0 14px' },
  sub: { fontFamily: 'var(--font-serif)', fontStyle: 'italic' as const, color: 'var(--amber-500)', fontSize: 'clamp(1.1rem, 1.6vw, 1.35rem)', margin: '0 0 48px' },
}

function TranspHero() {
  return (
    <header style={{ position: 'relative', minHeight: 'min(64vh, 580px)', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2200&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(30,66,24,0.55) 0%, rgba(26,42,30,0.72) 100%)' }}></div>
      <div style={{ position: 'relative', width: '100%', maxWidth: 860, margin: '0 auto', padding: '120px 32px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22, textAlign: 'center' }}>
        <p style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(250,248,244,0.72)', margin: 0 }}>Transparência · OSRV Cuiabá</p>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(3.25rem, 7vw, 5.5rem)', color: 'var(--paper-100)', margin: 0, lineHeight: 1 }}>Tudo às claras.</h1>
        <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--amber-500)', fontSize: 'clamp(1.3rem, 2.4vw, 1.9rem)', margin: 0, lineHeight: 1.25 }}>Porque confiança se constrói com dados.</p>
      </div>
    </header>
  )
}

function TranspIntro() {
  return (
    <section id="compromisso" style={{ background: 'var(--bg-page)', padding: '120px 0' }} className="transp-intro">
      <style>{`
        @media (max-width: 768px) {
          .transp-intro {
            padding-top: 56px !important;
            padding-bottom: 56px !important;
          }
          .transp-intro .ti-inner {
            padding: 0 20px !important;
            box-sizing: border-box;
            max-width: 100% !important;
          }
        }
      `}</style>
      <div style={s.section} className="ti-inner">
        <div style={s.eyebrow}>Nosso compromisso</div>
        <h2 style={s.h2}>Cada real importa. E você merece saber para onde vai.</h2>
        <p style={{ ...s.sub }}>Transparência não é exceção — é o nosso padrão.</p>
        <p style={{ maxWidth: 720, fontSize: 17, lineHeight: 1.65, color: 'var(--fg-2)' }}>
          Na OSRV, a transparência é um princípio inegociável. Disponibilizamos publicamente todas as informações sobre nossa estrutura, finanças, projetos e resultados. Acreditamos que quem doa, apoia ou colabora tem o direito de saber exatamente como cada recurso é aplicado.
        </p>
      </div>
    </section>
  )
}

function TranspIdentificacao() {
  return (
    <section id="dados-institucionais" style={{ background: 'var(--bg-page)', padding: '120px 0' }} className="transp-ident">
      <style>{`
        @media (max-width: 768px) {
          .transp-ident {
            padding-top: 56px !important;
            padding-bottom: 56px !important;
          }
          .transp-ident .tid-inner {
            padding: 0 20px !important;
            box-sizing: border-box;
            max-width: 100% !important;
          }
          .transp-ident .tid-data-grid {
            grid-template-columns: 1fr !important;
            column-gap: 0 !important;
          }
          .transp-ident .tid-docs-grid {
            grid-template-columns: 1fr !important;
          }
          .transp-ident .tid-doc-card {
            flex-wrap: wrap !important;
          }
          .transp-ident .tid-doc-download {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
      <div style={s.section} className="tid-inner">
        <div>
          <div style={s.eyebrow}>Quem somos, oficialmente</div>
          <h2 style={s.h2}>Dados institucionais.</h2>
          <p style={s.sub}>Tudo registrado, tudo verificável.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', columnGap: 56, rowGap: 0, marginBottom: 40 }} className="tid-data-grid">
            {IDENT.map(([label, value], i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 5, padding: '18px 0', borderBottom: '1px solid var(--border-soft)' }}>
                <span style={{ fontSize: 11.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--ink-500)' }}>{label}</span>
                <span style={{ fontSize: 17, color: 'var(--ink-900)', fontWeight: 500 }}>{value}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }} className="tid-docs-grid">
            {['Estatuto Social', 'Ata de Fundação'].map((title) => (
              <div key={title} style={{ display: 'flex', alignItems: 'center', gap: 18, padding: 24, background: 'var(--paper-50)', borderRadius: 8, border: '1px solid var(--border-soft)' }} className="tid-doc-card">
                <span style={{ flex: 'none', width: 48, height: 48, borderRadius: 8, background: 'var(--pine-100)', color: 'var(--pine-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>📄</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: 19, color: 'var(--ink-900)', lineHeight: 1.2 }}>{title}</div>
                </div>
                <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '10px 18px', border: '1px solid var(--border-hard)', borderRadius: 999, fontSize: 14, color: 'var(--ink-900)', textDecoration: 'none' }} className="tid-doc-download">⬇ Baixar PDF</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TranspCertificacoes() {
  return (
    <section id="certificacoes" style={{ background: 'var(--pine-900)', padding: '120px 0' }} className="transp-certs">
      <style>{`
        @media (max-width: 768px) {
          .transp-certs {
            padding-top: 56px !important;
            padding-bottom: 56px !important;
          }
          .transp-certs .tc-inner {
            padding: 0 20px !important;
            box-sizing: border-box;
            max-width: 100% !important;
          }
          .transp-certs .tc-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      <div style={s.section} className="tc-inner">
        <div style={s.eyebrowDark}>Reconhecimentos oficiais</div>
        <h2 style={s.h2Dark}>Certificados que validam nosso trabalho.</h2>
        <p style={{ ...s.sub }}>Concedidos por órgãos públicos federais e estaduais.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="tc-grid">
          {CERTS.map((c) => (
            <div key={c.n} style={{ display: 'flex', flexDirection: 'column', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 8, padding: '40px 30px 30px' }}>
              <div style={{ width: 76, height: 76, borderRadius: '50%', border: '2px solid var(--amber-500)', background: 'rgba(243,156,42,0.12)', color: 'var(--amber-300)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: 24, fontSize: 11, fontWeight: 700, letterSpacing: '0.1em' }}>
                🏆<span>{c.tag}</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 24, color: 'var(--paper-100)', margin: '0 0 8px', fontWeight: 500 }}>{c.title}</h3>
              <div style={{ fontSize: 14, color: 'var(--amber-300)', fontStyle: 'italic', fontFamily: 'var(--font-serif)', marginBottom: 16, lineHeight: 1.35 }}>{c.sub}</div>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'rgba(250,248,244,0.78)', margin: '0 0 22px' }}>{c.desc}</p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12.5, fontWeight: 600, color: 'rgba(250,248,244,0.85)', padding: '7px 14px', borderRadius: 999, border: '1px solid rgba(255,255,255,0.18)', background: 'rgba(255,255,255,0.05)', alignSelf: 'flex-start' as const }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--pine-300)' }}></span>
                {c.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TranspDemonstracoes() {
  return (
    <section id="demonstracoes" style={{ background: 'var(--bg-page)', padding: '120px 0' }} className="transp-demos">
      <style>{`
        @media (max-width: 768px) {
          .transp-demos {
            padding-top: 56px !important;
            padding-bottom: 56px !important;
          }
          .transp-demos .td-inner {
            padding: 0 20px !important;
            box-sizing: border-box;
            max-width: 100% !important;
          }
          .transp-demos .td-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      <div style={s.section} className="td-inner">
        <div style={s.eyebrow}>Finanças auditadas</div>
        <h2 style={s.h2}>Demonstrações financeiras anuais.</h2>
        <p style={s.sub}>Auditadas e disponíveis para download.</p>
        <p style={{ maxWidth: 680, fontSize: 16, lineHeight: 1.65, color: 'var(--fg-2)', marginTop: -32, marginBottom: 48 }}>
          Publicamos todas as demonstrações financeiras dos últimos 5 anos. Cada documento foi auditado por contabilidade especializada em terceiro setor.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="td-grid">
          {FIN_YEARS.map((year, i) => (
            <div key={year} style={{ display: 'flex', flexDirection: 'column', background: 'var(--paper-50)', border: '1px solid var(--border-soft)', borderRadius: 8, padding: 28 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 18 }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: 40, fontWeight: 500, color: 'var(--ink-900)', lineHeight: 1 }}>{year}</span>
                {i === 0 && <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--amber-700)', background: 'var(--amber-100)', padding: '5px 10px', borderRadius: 999 }}>Mais recente</span>}
              </div>
              <div style={{ flex: 1 }}>
                {FIN_DOCS.map((d, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '11px 0', borderBottom: j < FIN_DOCS.length - 1 ? '1px solid var(--border-soft)' : 'none', cursor: 'pointer' }}>
                    <span style={{ color: 'var(--pine-700)', flex: 'none' }}>📄</span>
                    <span style={{ flex: 1, fontSize: 14, color: 'var(--ink-700)', lineHeight: 1.3 }}>{d}</span>
                    <span style={{ color: 'var(--ink-300)', flex: 'none' }}>⬇</span>
                  </div>
                ))}
              </div>
              <a href="#" style={{ marginTop: 22, display: 'flex', justifyContent: 'center', padding: '11px 18px', border: '1px solid var(--border-hard)', borderRadius: 999, fontSize: 14, color: 'var(--ink-900)', textDecoration: 'none' }}>
                Baixar pacote completo (.zip)
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { TranspHero, TranspIntro, TranspIdentificacao, TranspCertificacoes, TranspDemonstracoes }