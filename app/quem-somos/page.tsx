import TopNav from '@/components/TopNav'
import PageHero from '@/components/PageHero'
import NossaHistoria from '@/components/NossaHistoria'
import OQueFazemos from '@/components/OQueFazemos'
import PorQueFazemos from '@/components/PorQueFazemos'
import LinhaTempo from '@/components/LinhaTempo'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function QuemSomos() {
  return (
    <main>
      <TopNav />
      <PageHero
        eyebrow="OBRAS SOCIAIS RAFAEL VERLANGIERI · JARDIM RENASCER"
        title="Mais que uma instituição."
        subtitle="Uma comunidade que se transforma junto."
        metaRight="CUIABÁ / MT"
      />
      <NossaHistoria />
      <OQueFazemos />
      <PorQueFazemos />
      <LinhaTempo />
      <FinalCTA />
      <Footer />
    </main>
  )
}