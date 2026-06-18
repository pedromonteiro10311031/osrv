import TopNav from '@/components/TopNav'
import HeroDoar from '@/components/HeroDoar'
import OQueSuaDoacaoFaz from '@/components/OQueSuaDoacaoFaz'
import ModalidadeDoacao from '@/components/ModalidadeDoacao'
import ParaOndeVai from '@/components/ParaOndeVai'
import FAQ from '@/components/FAQ'
import FormasPagamento from '@/components/FormasPagamento'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function QueroSerDoador() {
  return (
    <main>
      <TopNav />
      <HeroDoar />
      <ModalidadeDoacao />
      <OQueSuaDoacaoFaz />
      <ParaOndeVai />
      <FormasPagamento />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}