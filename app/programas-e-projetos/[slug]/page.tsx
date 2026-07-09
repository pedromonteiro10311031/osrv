import { notFound } from 'next/navigation'
import { getProjetoBySlug, projetos } from '@/lib/projetos'
import ProjetoPage from '@/components/ProjetoPage'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export function generateStaticParams() {
  return projetos.map(p => ({ slug: p.slug }))
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const projeto = getProjetoBySlug(slug)
  if (!projeto) notFound()

  return (
    <>
      <ProjetoPage projeto={projeto} projetos={projetos} />
      <FinalCTA />
      <Footer />
    </>
  )
}
