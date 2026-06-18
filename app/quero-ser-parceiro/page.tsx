import TopNav from '@/components/TopNav'
import ParceiroHero from '@/components/ParceiroHero'
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
      <ParceiroHero />
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