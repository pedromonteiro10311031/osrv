import TopNav from '@/components/TopNav'
import PageHero from '@/components/PageHero'
import ParceiroPorQue from '@/components/ParceiroPorQue'
import ParceiroComoAjudar from '@/components/ParceiroComoAjudar'
import ParceiroComoFunciona from '@/components/ParceiroComoFunciona'
import ParceiroAtuais from '@/components/ParceiroAtuais'
import ParceiroFormulario from '@/components/ParceiroFormulario'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function QueroSerParceiro() {
  return (
    <main>
      <TopNav />
      <PageHero
        eyebrow="QUERO SER PARCEIRO · OSRV CUIABÁ"
        title="Sua empresa pode mudar uma geração."
        subtitle="Impacto real. Reconhecimento genuíno."
        bgImage="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2200&q=80"
        metaLeft="JARDIM RENASCER · CUIABÁ"
        metaRight="CEBAS · OSCIP"
      />
      <ParceiroPorQue />
      <ParceiroComoAjudar />
      <ParceiroComoFunciona />
      <ParceiroAtuais />
      <ParceiroFormulario />
      <FinalCTA />
      <Footer />
    </main>
  )
}