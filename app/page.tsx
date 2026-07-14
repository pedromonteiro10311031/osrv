import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import ImpactStats from '@/components/ImpactStats'
import ProjetosHub from '@/components/ProjetosHub'
import StoryFeature from '@/components/StoryFeature'
import DonationBlock from '@/components/DonationBlock'
import FinalCTA from '@/components/FinalCTA'




export default function Home() {
  return (
    <main>
      <Hero />
      <ImpactStats />
      <ProjetosHub />
      <StoryFeature />
      <DonationBlock />
      <FinalCTA />
      <Footer />
    </main>
  )
}