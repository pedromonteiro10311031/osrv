const WP_API = process.env.NEXT_PUBLIC_WORDPRESS_API_URL
  || process.env.WORDPRESS_API_URL
  || 'http://localhost/OSRV_Prod/wordpress'

export function fixMediaUrl(url: string): string {
  if (!url) return ''
  if (url.startsWith(WP_API)) return url
  const match = url.match(/\/wp-content\/uploads\/.+/)
  if (match) return `${WP_API}${match[0]}`
  return ''
}

export function fixContentUrls(html: string): string {
  if (!html) return html
  return html.replace(
    /https?:\/\/[^"'\s]+\/wp-content\/uploads\//g,
    `${WP_API}/wp-content/uploads/`
  )
}

export type WpCategory = {
  id: number
  name: string
  slug: string
  taxonomy: string
}

export type BlogPost = {
  id: number
  title: { rendered: string }
  slug: string
  content: { rendered: string }
  excerpt: { rendered: string }
  date: string
  featured_media?: number
  categories?: number[]
  _embedded?: {
    'wp:featuredmedia'?: { source_url: string }[]
    // wp:term[0] = categorias, wp:term[1] = tags
    'wp:term'?: WpCategory[][]
  }
  acf?: Record<string, unknown>
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    // TODO: trocar para `next: { revalidate: 3600 }` antes de produção (cache: 'no-store' é só pra fase de testes)
    const res = await fetch(`${WP_API}/wp-json/wp/v2/posts?_embed`, {
      cache: 'no-store',
    })

    if (!res.ok) throw new Error(`WordPress API error: ${res.status}`)

    return res.json()
  } catch (error) {
    console.error('Erro ao buscar posts do blog:', error)
    return []
  }
}

// TODO: trocar para `next: { revalidate: 3600 }` antes de produção (cache: 'no-store' é só pra fase de testes)
export async function getPostsByCategory(categoryId: number, excludePostId: number, limit = 3): Promise<BlogPost[]> {
  try {
    const res = await fetch(
      `${WP_API}/wp-json/wp/v2/posts?categories=${categoryId}&exclude=${excludePostId}&per_page=${limit}&_embed`,
      { cache: 'no-store' }
    )
    if (!res.ok) throw new Error('Failed to fetch posts by category')
    return res.json()
  } catch (error) {
    console.error('Erro ao buscar posts relacionados:', error)
    return []
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(
      `${WP_API}/wp-json/wp/v2/posts?slug=${slug}&_embed`,
      // TODO: trocar para `next: { revalidate: 3600 }` antes de produção (cache: 'no-store' é só pra fase de testes)
      { cache: 'no-store' }
    )

    if (!res.ok) throw new Error('Failed to fetch post')

    const posts: BlogPost[] = await res.json()
    return posts[0] || null
  } catch (error) {
    console.error(`Erro ao buscar post ${slug}:`, error)
    return null
  }
}
