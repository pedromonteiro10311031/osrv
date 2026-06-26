'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

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
  ['venha-nos-conhecer', 'Venha Nos Conhecer'],
  ['transparencia', 'Transparência'],
  ['blog', 'Blog'],
]

export default function TopNav({ onDonateClick }: { onDonateClick?: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Fecha o menu mobile automaticamente sempre que o usuário navega pra outra página
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const wrapStyle = {
    ...navStyles.wrap,
    background: scrolled ? 'rgba(250, 248, 244, 0.85)' : 'var(--paper-100)',
    borderBottom: scrolled ? '1px solid var(--border-soft)' : '1px solid transparent',
    backdropFilter: scrolled ? 'blur(10px)' : 'none',
  }

  return (
    <nav style={wrapStyle}>
      <div style={navStyles.inner}>
        <Link href="/" style={navStyles.brand}>
          <span style={navStyles.word}>OSRV</span>
        </Link>

        <div className="desktop-links" style={navStyles.links}>
          {items.map(([id, label]) => (
            <Link
              key={id}
              href={`/${id}`}
              style={{ ...navStyles.link, ...(pathname === `/${id}` ? navStyles.linkActive : {}) }}
            >
              {label}
            </Link>
          ))}
        </div>

        <Link href="/quero-ser-doador" className="desktop-cta" style={navStyles.cta}>
          Doar
        </Link>

        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          {items.map(([id, label]) => (
            <Link
              key={id}
              href={`/${id}`}
              className="mobile-link"
              style={pathname === `/${id}` ? { color: 'var(--pine-700)', fontWeight: 600 } : {}}
            >
              {label}
            </Link>
          ))}
          <Link href="/quero-ser-doador" className="mobile-cta">
            Doar
          </Link>
        </div>
      )}

      <style jsx>{`
        .hamburger-btn {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
        }
        .hamburger-btn span {
          display: block;
          width: 24px;
          height: 2px;
          background: var(--ink-900);
          border-radius: 2px;
        }
        .mobile-menu {
          display: none;
        }

        @media (max-width: 860px) {
          .desktop-links,
          .desktop-cta {
            display: none !important;
          }
          .hamburger-btn {
            display: flex;
          }
          .mobile-menu {
            display: flex;
            flex-direction: column;
            padding: 16px 32px 24px;
            background: var(--paper-100);
            border-bottom: 1px solid var(--border-soft);
          }
          .mobile-link {
            padding: 14px 0;
            font-size: 16px;
            color: var(--ink-700);
            text-decoration: none;
            border-bottom: 1px solid var(--border-soft);
          }
          .mobile-cta {
            margin-top: 16px;
            display: inline-flex;
            justify-content: center;
            background: var(--amber-500);
            color: #fff;
            border-radius: 999px;
            padding: 12px 22px;
            font-size: 15px;
            font-weight: 500;
            text-decoration: none;
          }
        }
      `}</style>
    </nav>
  )
}