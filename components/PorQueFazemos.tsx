const porqueStyles = {
  wrap: { background: 'var(--paper-100)', padding: '128px 0 136px' },
  inner: { maxWidth: 'var(--container)', margin: '0 auto', padding: '0 32px' },
  head: { display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 128, alignItems: 'end', marginBottom: 56 },
  eyebrow: { fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'var(--pine-700)', marginBottom: 14 },
  h2: { fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(1.875rem, 3.4vw, 2.75rem)', lineHeight: 1.04, letterSpacing: '-0.03em', color: 'var(--ink-900)', margin: 0 },
  italic: { fontFamily: 'var(--font-serif)', fontStyle: 'italic' as const, color: 'var(--amber-500)', display: 'block', marginTop: 6, fontSize: 'clamp(1.2rem, 2vw, 1.625rem)', lineHeight: 1.15 },
  intro: { fontSize: 16, lineHeight: 1.6, color: 'var(--ink-700)', margin: 0, maxWidth: 460 },
  list: { borderTop: '1px solid var(--paper-300)' },
  row: { display: 'grid', gridTemplateColumns: '120px 1fr 1.4fr', gap: 32, padding: '22px 0 24px', borderBottom: '1px solid var(--paper-300)', alignItems: 'baseline' },
  num: { fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 'clamp(2rem, 3.2vw, 2.75rem)', lineHeight: 0.9, color: 'var(--pine-700)', letterSpacing: '-0.04em', fontStyle: 'italic' as const },
  rowTitle: { fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 'clamp(1.125rem, 1.4vw, 1.35rem)', lineHeight: 1.2, letterSpacing: '-0.015em', color: 'var(--ink-900)', margin: 0 },
  rowDesc: { fontSize: 15, lineHeight: 1.5, color: 'var(--ink-700)', margin: 0, maxWidth: 540 },
}

const VALORES = [
  { n: '01', title: 'Pertencimento e empoderamento', desc: 'Quem se sente parte da solução se torna agente da mudança. A comunidade reconhece a OSRV como casa — e isso muda tudo.' },
  { n: '02', title: 'Colaboração e compartilhamento', desc: 'A comunidade se fortalece quando trabalha junta em torno de um objetivo comum. Famílias, voluntários e parceiros constroem cada projeto.' },
  { n: '03', title: 'Sustentabilidade dos programas', desc: 'O apoio da comunidade garante a continuidade das atividades a longo prazo. Não fazemos projetos para encerrar — fazemos para durar.' },
  { n: '04', title: 'Impacto social mensurável', desc: 'Redução da vulnerabilidade, melhoria da qualidade de vida e construção de futuro. Acompanhamos cada criança, cada família, cada ano.' },
]

export default function PorQueFazemos() {
  return (
    <section id="por-que" style={porqueStyles.wrap}>
      <div style={porqueStyles.inner}>
        <div style={porqueStyles.head}>
          <div>
            <div style={porqueStyles.eyebrow}>Por que fazemos</div>
            <h2 style={porqueStyles.h2}>
              Comunidade não é palavra.
              <span style={porqueStyles.italic}>É método.</span>
            </h2>
          </div>
          <p style={porqueStyles.intro}>
            Acreditamos que o envolvimento da comunidade é fundamental para o sucesso de qualquer programa educacional a longo prazo. Quando as pessoas se sentem parte da solução, elas cuidam do que constroem.
          </p>
        </div>
        <div style={porqueStyles.list}>
          {VALORES.map((v) => (
            <div key={v.n} style={porqueStyles.row}>
              <div style={porqueStyles.num}>{v.n}</div>
              <h3 style={porqueStyles.rowTitle}>{v.title}</h3>
              <p style={porqueStyles.rowDesc}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}