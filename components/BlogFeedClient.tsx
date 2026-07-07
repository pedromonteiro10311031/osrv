'use client'

import { useState, useEffect } from 'react'
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
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginTop: 48,
    paddingBottom: 64,
  },
  pageBtn: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    border: '1px solid var(--pine-700)',
    background: 'transparent',
    color: 'var(--pine-900)',
    fontSize: 14,
    fontWeight: 500,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease',
  },
  pageBtnActive: {
    background: 'var(--pine-700)',
    color: '#FAF8F4',
    border: '1px solid var(--pine-700)',
  },
  arrowBtn: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    border: '1px solid rgba(30,66,24,0.3)',
    background: 'transparent',
    color: 'var(--pine-900)',
    fontSize: 16,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
  const rawImage = fixMediaUrl(post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '')
  const featuredImage = rawImage.startsWith('http') ? rawImage : ''
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
  initialTotalPages?: number
}

export default function BlogFeedClient({ posts: initialPosts, categories, initialTotalPages = 1 }: Props) {
  const [activeCategory, setActiveCategory] = useState<number | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(initialTotalPages)
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    async function fetchPage() {
      setLoading(true)
      try {
        const params = new URLSearchParams({
          page: String(currentPage),
          perPage: '6',
          ...(activeCategory ? { categoryId: String(activeCategory) } : {}),
        })
        const res = await fetch(`/api/blog?${params}`)
        const data = await res.json()
        setPosts(data.posts)
        setTotalPages(data.totalPages)
      } finally {
        setLoading(false)
      }
    }
    fetchPage()
  }, [currentPage, activeCategory])

  const paginationDisabledStyle = loading
    ? { opacity: 0.5, cursor: 'not-allowed' as const, pointerEvents: 'none' as const }
    : {}

  return (
    <>
      {categories.length > 0 && (
        <div style={s.pills}>
          <button
            style={activeCategory === null ? { ...s.pill, ...s.pillActive } : s.pill}
            onClick={() => { setActiveCategory(null); setCurrentPage(1) }}
          >
            Todos
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              style={activeCategory === cat.id ? { ...s.pill, ...s.pillActive } : s.pill}
              onClick={() => { setActiveCategory(cat.id); setCurrentPage(1) }}
            >
              {cat.name}
            </button>
          ))}
        </div>
      )}

      {loading ? (
        <div style={{ minHeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ color: 'var(--ink-400)', fontSize: 16 }}>Carregando...</p>
        </div>
      ) : (
        <div style={{ minHeight: 600 }}>
          {posts.length === 0 ? (
            <p style={s.empty}>Nenhuma publicação encontrada nessa categoria.</p>
          ) : (
            <div style={s.grid}>
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      )}

      {totalPages > 1 && (
        <div style={{ ...s.pagination, ...paginationDisabledStyle }}>
          <button
            style={{
              ...s.arrowBtn,
              opacity: currentPage === 1 ? 0.4 : 1,
              cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
            }}
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1 || loading}
          >
            ←
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              style={currentPage === page ? { ...s.pageBtn, ...s.pageBtnActive } : s.pageBtn}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}

          <button
            style={{
              ...s.arrowBtn,
              opacity: currentPage === totalPages ? 0.4 : 1,
              cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
            }}
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages || loading}
          >
            →
          </button>
        </div>
      )}
    </>
  )
}
