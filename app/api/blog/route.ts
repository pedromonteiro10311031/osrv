import { NextRequest, NextResponse } from 'next/server'
import { getBlogPosts } from '@/lib/wordpress'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const page = parseInt(searchParams.get('page') || '1')
  const perPage = parseInt(searchParams.get('perPage') || '6')
  const categoryId = searchParams.get('categoryId') || undefined

  try {
    const data = await getBlogPosts(page, perPage, categoryId ? parseInt(categoryId) : undefined)
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { posts: [], totalPages: 1, totalPosts: 0 },
      { status: 500 }
    )
  }
}
