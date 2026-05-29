// components
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'

// sections
import HomeSection from './sections/home/HomeSection'
import StatsSection from './sections/home/StatsSection'
import CatalogSection from './sections/home/CatalogSection'
import VisitSection from './sections/home/VisitSection'
import PhilosophySection from './sections/home/PhilosophySection'
import TestimonialsSection from './sections/home/TestimonialsSection'
import ContactSection from './sections/home/ContactSection'

export default function Home() {
    return (
        <>
            <TopBar />
            <HomeSection />
            <StatsSection />
            <CatalogSection />
            <VisitSection />
            <PhilosophySection />
            <TestimonialsSection />
            <ContactSection />
            <Footer />
        </>
    )
}
