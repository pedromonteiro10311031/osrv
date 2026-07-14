// Estilos visuais compartilhados entre VolunteerForm e ParceiroFormulario.
// Não contém lógica de estado, submissão ou chamadas de API.

export const sharedFormStyles = {
  label: {
    fontSize: 13,
    fontWeight: 600,
    color: 'var(--ink-700)',
  },
  input: {
    fontFamily: 'var(--font-sans)',
    fontSize: 16,
    color: 'var(--ink-900)',
    background: '#fff',
    padding: '14px 16px',
    border: '1px solid var(--ink-200)',
    borderRadius: 4,
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box' as const,
  },
  textarea: {
    fontFamily: 'var(--font-sans)',
    fontSize: 16,
    lineHeight: 1.55,
    color: 'var(--ink-900)',
    background: '#fff',
    padding: '14px 16px',
    border: '1px solid var(--ink-200)',
    borderRadius: 4,
    outline: 'none',
    width: '100%',
    minHeight: 130,
    resize: 'vertical' as const,
    boxSizing: 'border-box' as const,
  },
  submit: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    background: 'var(--amber-500)',
    color: '#fff',
    border: 0,
    borderRadius: 999,
    padding: '16px 30px',
    fontSize: 16,
    fontWeight: 500,
    cursor: 'pointer',
  },
  card: {
    background: '#fff',
    border: '1px solid var(--border-soft)',
    borderRadius: 12,
    padding: '48px',
    boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px 24px',
  },
  field: { display: 'flex', flexDirection: 'column' as const, gap: 8 },
  fieldFull: { gridColumn: '1 / -1' },
}

// Gera a media query mobile para um formulário.
// sectionClass: classe da section wrapper (ex: 'volunteer-form')
// prefix: prefixo das classes filhas (ex: 'vf')
export function formMobileCSS(sectionClass: string, prefix: string): string {
  return `
    @media (max-width: 768px) {
      .${sectionClass} {
        padding-top: 56px !important;
        padding-bottom: 56px !important;
      }
      .${sectionClass} .${prefix}-inner {
        padding: 0 20px !important;
        box-sizing: border-box;
        max-width: 100% !important;
      }
      .${sectionClass} .${prefix}-card {
        padding: 32px 20px 28px !important;
        box-sizing: border-box;
      }
      .${sectionClass} .${prefix}-grid {
        grid-template-columns: 1fr !important;
        gap: 18px !important;
      }
      .${sectionClass} .${prefix}-footer {
        flex-direction: column !important;
        align-items: stretch !important;
        gap: 16px !important;
        margin-top: 24px !important;
      }
      .${sectionClass} .${prefix}-submit {
        width: 100% !important;
        justify-content: center !important;
      }
    }
  `
}
