import { getBlogPosts, WpCategory } from '@/lib/wordpress'
import BlogFeedClient from './BlogFeedClient'

const s = {
  wrap: { background: 'var(--paper-100)', padding: '120px 0' },
  inner: { maxWidth: 'var(--container)', margin: '0 auto', padding: '0 32px' },
  head: { marginBottom: 48 },
  eyebrow: {
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '0.14em',
    textTransform: 'uppercase' as const,
    color: 'var(--pine-700)',
    marginBottom: 12,
  },
  h2: {
    fontFamily: 'var(--font-serif)',
    fontWeight: 400,
    fontSize: 'clamp(2rem, 3.6vw, 3rem)',
    lineHeight: 1.04,
    letterSpacing: '-0.025em',
    color: 'var(--ink-900)',
    margin: '0 0 16px',
  },
  italic: { fontStyle: 'italic' as const, color: 'var(--pine-700)' },
  subtitle: { fontSize: 17, lineHeight: 1.55, color: 'var(--fg-2)', margin: 0, maxWidth: 560 },
  empty: {
    textAlign: 'center' as const,
    padding: '64px 0',
    color: 'var(--fg-3)',
    fontSize: 17,
    fontFamily: 'var(--font-serif)',
    fontStyle: 'italic' as const,
  },
}

export default async function BlogFeed() {
  const { posts, totalPages } = await getBlogPosts(1, 6)

  // Extrai categorias únicas dos posts já embutidos — sem chamada extra à API
  const categoriesMap = new Map<number, WpCategory>()
  for (const post of posts) {
    const terms = post._embedded?.['wp:term']?.[0] ?? []
    for (const cat of terms) {
      if (!categoriesMap.has(cat.id)) {
        categoriesMap.set(cat.id, cat)
      }
    }
  }
  const categories = Array.from(categoriesMap.values())

  return (
    <section style={s.wrap} className="blog-feed">
      <style>{`
        @media (max-width: 768px) {
          .blog-feed {
            padding-top: 56px !important;
            padding-bottom: 56px !important;
          }
        }
      `}</style>
      <div style={s.inner}>
        <div style={s.head}>
          <div style={s.eyebrow}>BLOG</div>
          <h2 style={s.h2}>
            Histórias que transformam
            <span style={s.italic}> vidas no Renascer.</span>
          </h2>
          <p style={s.subtitle}>
            Notícias, eventos e histórias do dia a dia da comunidade OSRV.
          </p>
        </div>

        {posts.length === 0 ? (
          <p style={s.empty}>Nenhuma publicação encontrada. Em breve, novidades por aqui.</p>
        ) : (
          <BlogFeedClient posts={posts} categories={categories} initialTotalPages={totalPages} />
        )}
      </div>
    </section>
  )
}
