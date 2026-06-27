import Link from 'next/link'
import { fixMediaUrl, type BlogPost } from '@/lib/wordpress'

const s = {
  section: {
    marginTop: 96,
    paddingTop: 64,
    borderTop: '1px solid rgba(30,66,24,0.15)',
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
  },
  card: {
    display: 'flex',
    flexDirection: 'column' as const,
    textDecoration: 'none',
    color: 'inherit',
  },
  image: {
    width: '100%',
    aspectRatio: '16/9' as const,
    objectFit: 'cover' as const,
    borderRadius: 6,
    marginBottom: 16,
    display: 'block',
  },
  placeholder: {
    width: '100%',
    aspectRatio: '16/9' as const,
    borderRadius: 6,
    marginBottom: 16,
    background: 'var(--paper-200, #e8dcd0)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 13,
    color: 'rgba(30,66,24,0.4)',
  },
  postTitle: {
    fontFamily: 'var(--font-serif)',
    fontWeight: 400,
    fontSize: 18,
    lineHeight: 1.3,
    letterSpacing: '-0.01em',
    color: 'var(--pine-900)',
    margin: '0 0 8px',
  },
  meta: {
    fontSize: 13,
    color: 'rgba(30,66,24,0.55)',
    letterSpacing: '0.04em',
  },
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
        {posts.map((post) => {
          const rawImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url
          const image = rawImage ? fixMediaUrl(rawImage) : null

          return (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              style={s.card}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.85' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
            >
              {image ? (
                <img src={image} alt="" style={s.image} />
              ) : (
                <div style={s.placeholder}>sem imagem</div>
              )}
              <h3
                style={s.postTitle}
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
              <p style={s.meta}>
                {new Date(post.date).toLocaleDateString('pt-BR', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}
              </p>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
