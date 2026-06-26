'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BlogPost, WpCategory, fixMediaUrl } from '@/lib/wordpress'

const s = {
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 },
  card: {
    background: 'var(--paper-50)',
    borderRadius: 8,
    overflow: 'hidden',
    textDecoration: 'none',
    color: 'inherit',
    display: 'flex',
    flexDirection: 'column' as const,
    border: '1px solid var(--border-soft)',
    transition: 'box-shadow 0.2s, transform 0.2s',
  },
  cardHover: {
    boxShadow: '0 8px 24px rgba(0,0,0,0.09)',
    transform: 'translateY(-2px)',
  },
  imgWrap: {
    aspectRatio: '16/9',
    background: 'var(--paper-300)',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: { width: '100%', height: '100%', objectFit: 'cover' as const, display: 'block' },
  imgPlaceholder: {
    fontFamily: 'var(--font-serif)',
    fontSize: 20,
    color: 'var(--ink-300)',
    fontStyle: 'italic' as const,
  },
  body: { padding: '22px 24px 26px', display: 'flex', flexDirection: 'column' as const, flex: 1 },
  date: {
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    color: 'var(--fg-mute)',
    marginBottom: 10,
  },
  title: {
    fontFamily: 'var(--font-serif)',
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 1.2,
    letterSpacing: '-0.01em',
    color: 'var(--ink-900)',
    margin: '0 0 10px',
  },
  excerpt: { fontSize: 15, lineHeight: 1.55, color: 'var(--fg-2)', margin: 0, flex: 1 },
  readMore: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    marginTop: 18,
    fontSize: 14,
    fontWeight: 500,
    color: 'var(--teal-700)',
  },
  pills: { display: 'flex', gap: 8, flexWrap: 'wrap' as const, marginBottom: 40 },
  pill: {
    fontSize: 13,
    fontWeight: 500,
    padding: '6px 16px',
    borderRadius: 999,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'var(--border-hard)',
    background: 'transparent',
    color: 'var(--ink-700)',
    cursor: 'pointer',
    transition: 'background 0.15s, color 0.15s, border-color 0.15s',
  },
  pillActive: {
    background: 'var(--pine-500)',
    color: '#fff',
    borderColor: 'var(--pine-500)',
  },
  empty: {
    textAlign: 'center' as const,
    padding: '64px 0',
    color: 'var(--fg-3)',
    fontSize: 17,
    fontFamily: 'var(--font-serif)',
    fontStyle: 'italic' as const,
  },
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, '').trim()
}

function PostCard({ post }: { post: BlogPost }) {
  const [hover, setHover] = useState(false)
  const featuredImage = fixMediaUrl(post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '')
  const excerpt = stripHtml(post.excerpt.rendered)

  return (
    <Link
      href={`/blog/${post.slug}`}
      style={hover ? { ...s.card, ...s.cardHover } : s.card}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={s.imgWrap}>
        {featuredImage ? (
          <img src={featuredImage} alt={post.title.rendered} style={s.img} />
        ) : (
          <span style={s.imgPlaceholder}>sem imagem</span>
        )}
      </div>
      <div style={s.body}>
        <div style={s.date}>{formatDate(post.date)}</div>
        <h3 style={s.title} dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        <p style={s.excerpt}>
          {excerpt.slice(0, 160)}{excerpt.length > 160 ? '…' : ''}
        </p>
        <span style={s.readMore}>Ler mais →</span>
      </div>
    </Link>
  )
}

type Props = {
  posts: BlogPost[]
  categories: WpCategory[]
}

export default function BlogFeedClient({ posts, categories }: Props) {
  const [activeCategory, setActiveCategory] = useState<number | null>(null)

  const filtered = activeCategory === null
    ? posts
    : posts.filter((p) => p.categories?.includes(activeCategory))

  return (
    <>
      {categories.length > 0 && (
        <div style={s.pills}>
          <button
            style={activeCategory === null ? { ...s.pill, ...s.pillActive } : s.pill}
            onClick={() => setActiveCategory(null)}
          >
            Todos
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              style={activeCategory === cat.id ? { ...s.pill, ...s.pillActive } : s.pill}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>
      )}

      {filtered.length === 0 ? (
        <p style={s.empty}>Nenhuma publicação encontrada nessa categoria.</p>
      ) : (
        <div style={s.grid}>
          {filtered.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </>
  )
}
