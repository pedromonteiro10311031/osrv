import PageHero from '@/components/PageHero'
import BlogFeed from '@/components/BlogFeed'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Blog() {
  return (
    <main>
      <PageHero
        eyebrow="BLOG · OSRV CUIABÁ"
        title="Histórias que transformam."
        subtitle="Acompanhe o dia a dia do Jardim Renascer."
        bgImage="/images/hero-blog.jpg"
      />
      <BlogFeed />
      <FinalCTA />
      <Footer />
    </main>
  )
}
