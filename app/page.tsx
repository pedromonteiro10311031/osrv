import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import ImpactStats from '@/components/ImpactStats'
import ProjectsGrid from '@/components/ProjectsGrid'
import StoryFeature from '@/components/StoryFeature'
import DonationBlock from '@/components/DonationBlock'
import PartnersStrip from '@/components/PartnersStrip'




export default function Home() {
  return (
    <main>
      <Hero />
      <ImpactStats />
      <ProjectsGrid />
      <StoryFeature />
      <DonationBlock />
      <PartnersStrip />
      <Footer />
    </main>
  )
}