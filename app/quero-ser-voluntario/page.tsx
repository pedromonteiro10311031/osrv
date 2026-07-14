import PageHero from '@/components/PageHero'
import Footer from '@/components/Footer'
import WhyVolunteer from '@/components/WhyVolunteer'
import Areas from '@/components/Areas'
import HowItWorks from '@/components/HowItWorks'
import VolunteerForm from '@/components/VolunteerForm'
import FinalCTA from '@/components/FinalCTA'



export default function QueroSerVoluntario() {
  return (
    <main>
      <PageHero
        eyebrow="QUERO SER VOLUNTÁRIO · OSRV CUIABÁ"
        title="Doe seu tempo. Multiplique vidas."
        subtitle="Cada hora sua transforma uma rotina."
        bgImage="/images/hero-voluntario.jpg"
      />
      <WhyVolunteer />
      <Areas />
      <HowItWorks />
      <VolunteerForm />
      <FinalCTA />
      <Footer />
    </main>
  )
}