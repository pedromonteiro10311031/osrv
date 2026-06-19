'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const navStyles = {
  wrap: {
    position: 'sticky' as const,
    top: 0,
    zIndex: 50,
    transition: 'background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
  },
  inner: {
    maxWidth: 'var(--container-wide)',
    margin: '0 auto',
    padding: '16px 32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 24,
  },
  brand: { display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flex: 'none' },
  word: {
    fontFamily: 'var(--font-serif)',
    fontWeight: 500,
    fontSize: 24,
    color: 'var(--ink-900)',
    letterSpacing: '-0.015em',
    lineHeight: 1,
  },
  links: {
    display: 'flex',
    gap: 22,
    fontSize: 14,
    fontWeight: 500,
    flexWrap: 'nowrap' as const,
  },
  link: {
    color: 'var(--ink-700)',
    textDecoration: 'none',
    paddingBottom: 4,
    borderBottom: '2px solid transparent',
    whiteSpace: 'nowrap' as const,
    transition: 'color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
  },
  linkActive: { color: 'var(--ink-900)', borderBottomColor: 'var(--pine-500)' },
  cta: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    background: 'var(--amber-500)',
    color: '#fff',
    border: 0,
    borderRadius: 999,
    padding: '11px 22px',
    fontSize: 14,
    fontWeight: 500,
    cursor: 'pointer',
    textDecoration: 'none',
    whiteSpace: 'nowrap' as const,
    flex: 'none' as const,
  },
}

const items: [string, string][] = [
  ['quem-somos', 'Quem Somos'],
  ['programas-e-projetos', 'Projetos'],
  ['quero-ser-voluntario', 'Voluntariado'],
  ['quero-ser-parceiro', 'Parceiros'],
  ['transparencia', 'Transparência'],
]

export default function TopNav({ onDonateClick }: { onDonateClick?: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const wrapStyle = {
    ...navStyles.wrap,
    background: scrolled ? 'rgba(250, 248, 244, 0.85)' : 'var(--paper-100)',
    borderBottom: scrolled ? '1px solid var(--border-soft)' : '1px solid transparent',
    backdropFilter: scrolled ? 'blur(10px)' : 'none',
  }

  return (
    <nav style={wrapStyle}>
      <div style={navStyles.inner}>
        <a href="/" style={navStyles.brand}>
          <span style={navStyles.word}>OSRV</span>
        </a>
        <div style={navStyles.links}>
          {items.map(([id, label]) => (
            <a
              key={id}
              href={`/${id}`}
              style={{ ...navStyles.link, ...(pathname === `/${id}` ? navStyles.linkActive : {}) }}
            >
              {label}
            </a>
          ))}
        </div>
        <a href="/quero-ser-doador" style={navStyles.cta}>
          Doar
        </a>
      </div>
    </nav>
  )
}