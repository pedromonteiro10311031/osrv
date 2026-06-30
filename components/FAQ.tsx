'use client'

import { useState } from 'react'

const faqStyles = {
  wrap: { background: 'var(--paper-100)', padding: '40px 0 140px' },
  inner: { maxWidth: 'var(--container)', margin: '0 auto', padding: '0 32px' },
  layout: { display: 'grid', gridTemplateColumns: '0.9fr 1.2fr', gap: 80, alignItems: 'start' },
  eyebrow: { fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'var(--pine-700)', marginBottom: 14 },
  h2: { fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(2rem, 3.4vw, 2.5rem)', lineHeight: 1.05, letterSpacing: '-0.025em', color: 'var(--ink-900)', margin: '0 0 22px' },
  italic: { fontStyle: 'italic' as const, color: 'var(--pine-700)' },
  lead: { fontSize: 16, lineHeight: 1.65, color: 'var(--fg-2)', margin: '0 0 22px', maxWidth: 380 },
  contactBox: { marginTop: 28, paddingTop: 24, borderTop: '1px solid var(--border-soft)' },
  contactLabel: { fontSize: 13, color: 'var(--fg-3)', margin: '0 0 10px' },
  contactRow: { display: 'flex', flexDirection: 'column' as const, gap: 8, fontSize: 15 },
  contactItem: { display: 'inline-flex', alignItems: 'center', gap: 10, color: 'var(--ink-900)', textDecoration: 'none', fontWeight: 500 },
  list: { display: 'flex', flexDirection: 'column' as const, borderTop: '1px solid var(--border-hard)' },
  item: { borderBottom: '1px solid var(--border-soft)' },
  trigger: { width: '100%', background: 'transparent', border: 0, padding: '24px 0', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 24, cursor: 'pointer', textAlign: 'left' as const, fontFamily: 'var(--font-serif)', fontSize: 21, fontWeight: 500, color: 'var(--ink-900)', letterSpacing: '-0.01em', lineHeight: 1.3 },
  triggerOpen: { color: 'var(--pine-900)' },
  chevron: { flex: 'none' as const, color: 'var(--fg-3)', marginTop: 4, transition: 'transform 0.2s' },
  chevronOpen: { transform: 'rotate(180deg)', color: 'var(--pine-700)' },
  panel: { overflow: 'hidden', display: 'grid', transition: 'grid-template-rows 0.2s' },
  body: { overflow: 'hidden', minHeight: 0 },
  bodyInner: { paddingBottom: 28, paddingRight: 64, fontSize: 16, lineHeight: 1.7, color: 'var(--fg-2)' },
  bodyStrong: { color: 'var(--ink-900)', fontWeight: 600 },
}

const FAQS = [
  {
    q: 'Minha doação é dedutível do Imposto de Renda?',
    a: 'Sim — até 6% do imposto devido, se você declara pelo modelo completo. A OSRV é certificada como CEBAS e OSCIP. Você recebe um recibo oficial com CNPJ e número da declaração no fim do ano, pronto para anexar à declaração.',
  },
  {
    q: 'Posso cancelar a doação recorrente quando quiser?',
    a: 'Sim, a qualquer momento, com um clique. Na sua área de doador você encontra o botão "Cancelar recorrência". Não pedimos motivo, não pedimos confirmação por telefone. Você também pode escrever para doadores@osrv.org.br que respondemos no mesmo dia útil.',
  },
  {
    q: 'Recebo recibo da minha doação?',
    a: 'Sim, sempre. Para cada doação você recebe um recibo eletrônico por email logo após a confirmação do pagamento. No fim de cada ano fiscal, mandamos também um extrato consolidado anual em PDF — o documento que a Receita aceita na declaração do IR.',
  },
  {
    q: 'Como sei que o dinheiro chegou e está sendo usado?',
    a: 'Três coisas: (1) você recebe confirmação imediata por email da transação; (2) uma vez por mês, enviamos um recado curto do time contando o que rolou nos projetos; (3) publicamos um relatório financeiro anual auditado, disponível para download na página de Transparência.',
  },
]

function FaqItem({ q, a, isOpen, onToggle }: { q: string, a: string, isOpen: boolean, onToggle: () => void }) {
  return (
    <div style={faqStyles.item}>
      <button style={{ ...faqStyles.trigger, ...(isOpen ? faqStyles.triggerOpen : {}) }} className="faq-trigger" onClick={onToggle} aria-expanded={isOpen}>
        <span>{q}</span>
        <span style={{ ...faqStyles.chevron, ...(isOpen ? faqStyles.chevronOpen : {}) }} className="faq-chevron">▾</span>
      </button>
      <div style={{ ...faqStyles.panel, gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
        <div style={faqStyles.body}>
          <div style={faqStyles.bodyInner} className="faq-body-inner">{a}</div>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0)
  return (
    <section id="faq" style={faqStyles.wrap} className="faq-section">
      <style>{`
        @media (max-width: 768px) {
          .faq-section .faq-inner {
            padding: 0 20px !important;
          }
          .faq-section .faq-layout {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .faq-section .faq-trigger {
            font-size: 1.05rem !important;
            padding: 18px 0 !important;
            line-height: 1.25 !important;
          }
          .faq-section .faq-chevron {
            font-size: 1.05rem !important;
          }
          .faq-section .faq-body-inner {
            font-size: 0.9rem !important;
            line-height: 1.55 !important;
            padding-bottom: 18px !important;
            padding-right: 24px !important;
          }
        }
      `}</style>
      <div style={faqStyles.inner} className="faq-inner">
        <div style={faqStyles.layout} className="faq-layout">
          <div>
            <div style={faqStyles.eyebrow}>PERGUNTAS FREQUENTES</div>
            <h2 style={faqStyles.h2}>
              Tudo o que você precisa saber<br/>
              <span style={faqStyles.italic}>antes de doar.</span>
            </h2>
            <p style={faqStyles.lead}>
              Reunimos as perguntas que mais recebemos. Não achou a sua? Fale com o time direto — geralmente respondemos no mesmo dia.
            </p>
            <div style={faqStyles.contactBox}>
              <p style={faqStyles.contactLabel}>Falar com o time de doadores</p>
              <div style={faqStyles.contactRow}>
                <a href="mailto:doadores@osrv.org.br" style={faqStyles.contactItem}>✉ doadores@osrv.org.br</a>
                <a href="#" style={faqStyles.contactItem}>💬 WhatsApp · (65) 99000-0000</a>
              </div>
            </div>
          </div>
          <div style={faqStyles.list}>
            {FAQS.map((f, i) => (
              <FaqItem key={f.q} q={f.q} a={f.a} isOpen={openIdx === i} onToggle={() => setOpenIdx(openIdx === i ? -1 : i)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}