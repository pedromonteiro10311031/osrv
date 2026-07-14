import PageHero from '@/components/PageHero'
import { TranspIntro, TranspIdentificacao, TranspCertificacoes, TranspDemonstracoes } from '@/components/TranspSectionsA'
import { TranspRecursos, TranspGovernanca, TranspParceiros, TranspOuvidoria } from '@/components/TranspSectionsB'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Transparencia() {
  return (
    <main>
      <PageHero
        eyebrow="TRANSPARÊNCIA · OSRV CUIABÁ"
        title="Tudo às claras."
        subtitle="Porque confiança se constrói com dados."
        bgImage="/images/hero-transparencia.jpg"
      />
      <TranspIntro />
      <TranspIdentificacao />
      <TranspCertificacoes />
      <TranspDemonstracoes />
      <TranspRecursos />
      <TranspGovernanca />
      <TranspParceiros />
      <TranspOuvidoria />
      <FinalCTA />
      <Footer />
    </main>
  )
}