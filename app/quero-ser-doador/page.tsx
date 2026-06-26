import PageHero from '@/components/PageHero'
import OQueSuaDoacaoFaz from '@/components/OQueSuaDoacaoFaz'
import DonationBlock from '@/components/DonationBlock'
import ParaOndeVai from '@/components/ParaOndeVai'
import FAQ from '@/components/FAQ'
import FormasPagamento from '@/components/FormasPagamento'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function QueroSerDoador() {
  return (
    <main>
      <PageHero
        eyebrow="QUERO SER DOADOR · OSRV CUIABÁ"
        title="Sua doação faz uma criança sorrir hoje."
        subtitle="Escolha como você quer transformar vidas."
        bgImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=2000&q=80"
      />
      <DonationBlock
        eyebrow="ESCOLHA SUA MODALIDADE"
        subtitle="Doe uma vez. Ou esteja com a gente todo mês."
        lead="A doação mensal é o que mantém a quadra aberta, o tatame preparado e o lanche servido sem sobressaltos. Mas qualquer valor, em qualquer formato, chega no Jardim Renascer."
        bullets={[
          '✓ Recibo dedutível do IR (CEBAS · OSCIP)',
          '✓ Doação mensal: cancele a qualquer momento, 1 clique',
          '✓ Relatório financeiro anual público',
        ]}
      />
      <OQueSuaDoacaoFaz />
      <ParaOndeVai />
      <FormasPagamento />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}