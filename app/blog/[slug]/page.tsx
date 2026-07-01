import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getBlogPostBySlug, getPostsByCategory, fixMediaUrl, fixContentUrls } from '@/lib/wordpress'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import RelatedPosts from '@/components/RelatedPosts'

const s = {
  hero: {
    position: 'relative' as const,
    width: '100%',
    minHeight: 'min(72vh, 640px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    color: '#FAF8F4',
  },
  heroBg: {
    position: 'absolute' as const,
    inset: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
    backgroundColor: '#1E4218',
  },
  heroOverlay: {
    position: 'absolute' as const,
    inset: 0,
    background: 'linear-gradient(180deg, rgba(30,66,24,0.45) 0%, rgba(20,36,18,0.82) 100%)',
  },
  heroInner: {
    position: 'relative' as const,
    width: '100%',
    maxWidth: 'var(--container-wide)',
    margin: '0 auto',
    padding: '120px 48px 96px',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    textAlign: 'center' as const,
    gap: 24,
  },
  eyebrow: {
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '0.2em',
    textTransform: 'uppercase' as const,
    color: 'var(--amber-500)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 12,
  },
  rule: { width: 32, height: 1, background: 'rgba(243,156,42,0.5)' },
  h1: {
    fontFamily: 'var(--font-serif)',
    fontWeight: 400,
    fontSize: 'clamp(2.2rem, 5vw, 4rem)',
    lineHeight: 1.05,
    letterSpacing: '-0.025em',
    margin: 0,
    color: '#FAF8F4',
    maxWidth: 900,
  },
  date: {
    fontSize: 13,
    color: 'rgba(250,248,244,0.6)',
    letterSpacing: '0.08em',
  },
  body: {
    background: 'var(--bg-page)',
    padding: '64px 24px 96px',
  },
  back: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    fontSize: 14,
    fontWeight: 500,
    color: 'var(--pine-700)',
    textDecoration: 'none',
    marginBottom: 48,
    letterSpacing: '0.02em',
  },
  content: {
    maxWidth: 720,
    margin: '0 auto',
  },
  prose: {
    fontSize: 17,
    lineHeight: 1.8,
    color: 'var(--pine-900)',
    fontFamily: 'var(--font-sans)',
  },
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) notFound()

  const category = post._embedded?.['wp:term']?.[0]?.[0]?.name ?? 'Sem categoria'
  const categoryId = post._embedded?.['wp:term']?.[0]?.[0]?.id
  const rawImage = fixMediaUrl(post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '')
  const featuredImage = rawImage.startsWith('http') ? rawImage : null

  const relatedPosts = categoryId ? await getPostsByCategory(categoryId, post.id, 3) : []

  return (
    <main>
      <header style={s.hero}>
        <div
          style={{
            ...s.heroBg,
            backgroundImage: featuredImage ? `url('${featuredImage}')` : undefined,
          }}
        />
        <div style={s.heroOverlay} />
        <div style={s.heroInner}>
          <div style={s.eyebrow}>
            <span style={s.rule} />
            {category}
            <span style={s.rule} />
          </div>
          <h1
            style={s.h1}
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          <p style={s.date}>{formatDate(post.date)}</p>
        </div>
      </header>

      <section style={s.body}>
        <div style={s.content}>
          <Link href="/blog" style={s.back}>
            ← Voltar para o Blog
          </Link>
          <div
            style={s.prose}
            dangerouslySetInnerHTML={{ __html: fixContentUrls(post.content.rendered) }}
          />
          <RelatedPosts posts={relatedPosts} />
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  )
}
