// components
import TopBar from "../components/TopBar"
import Footer from "../components/Footer"

// pages
import HomeSection from "../sections/HomeSection"
import CatalogSection from "../sections/CatalogSection"
import VisitSection from "../sections/VisitSection"
import PhilosophySection from "../sections/PhilosophySection"
import ContactSection from "../sections/ContactSection"

export default function Home() {
    return (
        <div>
            <TopBar/>
            <HomeSection />
            <CatalogSection />
            <VisitSection />
            <PhilosophySection />
            <ContactSection />
            <Footer />
        </div>
    )
}