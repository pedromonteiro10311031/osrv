import TopNav from '@/components/TopNav'
import HeroVoluntario from '@/components/HeroVoluntario'
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
      <HeroVoluntario />
      <WhyVolunteer />
      <Areas />
      <HowItWorks />
      <VolunteerForm />
      <FinalCTA />
      <Footer />
    </main>
  )
}