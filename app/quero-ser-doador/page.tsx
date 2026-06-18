import TopNav from '@/components/TopNav'
import PageHero from '@/components/PageHero'
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
      <PageHero
        eyebrow="QUERO SER DOADOR · OSRV CUIABÁ"
        title="Sua doação faz uma criança sorrir hoje."
        subtitle="Escolha como você quer transformar vidas."
        bgImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=2000&q=80"
      />
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