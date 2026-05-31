// components
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'

// sections
import AboutHeroSection from './sections/about/AboutHeroSection'
import AboutHistorySection from './sections/about/AboutHistorySection'
import AboutTeamSection from './sections/about/AboutTeamSection'
import AboutPhilosophySection from './sections/about/AboutPhilosophySection'
import AboutSpaceSection from './sections/about/AboutSpaceSection'
import AboutContactSection from './sections/about/AboutContactSection'
import AgendamentoSection from './sections/home/AgendamentoSection'

export default function About() {
    return (
        <>
            <TopBar />
            <AboutHeroSection />
            <AboutHistorySection />
            <AboutTeamSection />
            <AboutPhilosophySection />
            <AboutSpaceSection />
            <AgendamentoSection />
            <AboutContactSection />
            <Footer />
        </>
    )
}
