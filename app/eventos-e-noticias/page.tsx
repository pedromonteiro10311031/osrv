import PageHero from '@/components/PageHero'
import BlogFeed from '@/components/BlogFeed'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function EventosENoticias() {
  return (
    <main>
      <PageHero
        eyebrow="EVENTOS E NOTÍCIAS · OSRV CUIABÁ"
        title="Histórias que transformam."
        subtitle="Acompanhe o dia a dia do Jardim Renascer."
      />
      <BlogFeed />
      <FinalCTA />
      <Footer />
    </main>
  )
}
