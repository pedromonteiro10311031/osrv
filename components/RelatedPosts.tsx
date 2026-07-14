'use client'

import { useState } from 'react'
import Link from 'next/link'
import { fixMediaUrl, type BlogPost } from '@/lib/wordpress'

const s = {
  section: {
    marginTop: 96,
    paddingTop: 64,
  },
  heading: {
    fontFamily: 'var(--font-serif)',
    fontWeight: 400,
    fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
    letterSpacing: '-0.018em',
    color: 'var(--pine-900)',
    margin: '0 0 40px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: 32,
    justifyContent: 'start' as const,
  },
  card: {
    display: 'flex',
    flexDirection: 'column' as const,
    textDecoration: 'none',
    color: 'inherit',
    borderRadius: 8,
    overflow: 'hidden',
    border: '1px solid var(--border-soft)',
    background: 'var(--paper-50)',
    transition: 'box-shadow 0.2s, transform 0.2s',
    maxWidth: 360,
    width: '100%',
  },
  cardHover: {
    boxShadow: '0 8px 24px rgba(0,0,0,0.09)',
    transform: 'translateY(-2px)',
  },
  imgWrap: {
    aspectRatio: '16/9' as const,
    background: 'var(--paper-300)',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
    display: 'block',
  },
  placeholder: {
    fontFamily: 'var(--font-serif)',
    fontSize: 20,
    color: 'var(--ink-300)',
    fontStyle: 'italic' as const,
  },
  body: {
    padding: '22px 24px 26px',
    display: 'flex',
    flexDirection: 'column' as const,
    flex: 1,
  },
  date: {
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    color: 'var(--fg-mute)',
    marginBottom: 10,
  },
  postTitle: {
    fontFamily: 'var(--font-serif)',
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 1.2,
    letterSpacing: '-0.01em',
    color: 'var(--ink-900)',
    margin: '0 0 10px',
  },
  excerpt: {
    fontSize: 15,
    lineHeight: 1.55,
    color: 'var(--fg-2)',
    margin: 0,
    flex: 1,
  },
  readMore: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    marginTop: 18,
    fontSize: 14,
    fontWeight: 500,
    color: 'var(--teal-700)',
  },
}

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, '').trim()
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

function RelatedCard({ post }: { post: BlogPost }) {
  const [hover, setHover] = useState(false)
  const rawImage = fixMediaUrl(post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '')
  const image = rawImage.startsWith('http') ? rawImage : ''
  const excerpt = stripHtml(post.excerpt?.rendered ?? '')

  return (
    <Link
      href={`/blog/${post.slug}`}
      style={hover ? { ...s.card, ...s.cardHover } : s.card}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={s.imgWrap}>
        {image ? (
          <img src={image} alt="" style={s.image} />
        ) : (
          <span style={s.placeholder}>sem imagem</span>
        )}
      </div>
      <div style={s.body}>
        <div style={s.date}>{formatDate(post.date)}</div>
        <h3
          style={s.postTitle}
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
        <p style={s.excerpt}>
          {excerpt.slice(0, 160)}{excerpt.length > 160 ? '…' : ''}
        </p>
        <span style={s.readMore}>Ler mais →</span>
      </div>
    </Link>
  )
}

export default function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (!posts || posts.length === 0) return null

  return (
    <section style={s.section} className="related-posts">
      <style>{`
        @media (max-width: 768px) {
          .related-posts .rp-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
      <h2 style={s.heading}>Veja também</h2>
      <div style={s.grid} className="rp-grid">
        {posts.map((post) => (
          <RelatedCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}
