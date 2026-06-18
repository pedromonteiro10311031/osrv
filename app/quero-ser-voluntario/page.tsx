import TopNav from '@/components/TopNav'
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
      <TopNav />
      <PageHero
        eyebrow="QUERO SER VOLUNTÁRIO · OSRV CUIABÁ"
        title="Doe seu tempo. Multiplique vidas."
        subtitle="Cada hora sua transforma uma rotina."
        bgImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=2000&q=80"
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