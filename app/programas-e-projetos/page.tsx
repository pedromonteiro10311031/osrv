import TopNav from '@/components/TopNav'
import PageHero from '@/components/PageHero'
import Introducao from '@/components/Introducao'
import ImpactoReal from '@/components/ImpactoReal'
import ProjetosHub from '@/components/ProjetosHub'
import Complementares from '@/components/Complementares'
import Footer from '@/components/Footer'

export default function ProgramasEProjetos() {
  return (
    <main>
      <TopNav />
      <PageHero
        eyebrow="PROGRAMAS E PROJETOS · OSRV CUIABÁ"
        title="Tudo que acontece no Jardim Renascer."
        subtitle="Esporte, educação, arte e cuidado — todo dia."
        metaLeft="JARDIM RENASCER · CUIABÁ / MT"
        metaRight="06 PROJETOS · 250+ CRIANÇAS"
      />
      <Introducao />
      <ImpactoReal />
      <ProjetosHub />
      <Complementares />
      <Footer />
    </main>
  )
}