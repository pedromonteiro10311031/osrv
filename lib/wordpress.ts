const WP_API = process.env.WORDPRESS_API_URL || 'http://localhost/OSRV_Prod/wordpress'

export function fixMediaUrl(url: string): string {
  if (!url) return url
  return url.replace(/https?:\/\/localhost\/OSRV_Prod\/wordpress/, WP_API)
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
    const res = await fetch(`${WP_API}/wp-json/wp/v2/posts?_embed`, {
      next: { revalidate: 3600 },
    })

    if (!res.ok) throw new Error(`WordPress API error: ${res.status}`)

    return res.json()
  } catch (error) {
    console.error('Erro ao buscar posts do blog:', error)
    return []
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(
      `${WP_API}/wp-json/wp/v2/posts?slug=${slug}&_embed`,
      { next: { revalidate: 3600 } }
    )

    if (!res.ok) throw new Error('Failed to fetch post')

    const posts: BlogPost[] = await res.json()
    return posts[0] || null
  } catch (error) {
    console.error(`Erro ao buscar post ${slug}:`, error)
    return null
  }
}
