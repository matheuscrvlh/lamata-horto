// components
import TopBar from "../components/TopBar"
import Footer from "../components/Footer"

// pages
import HomeSection from "./sections/home/HomeSection"
import CatalogSection from "./sections/home/CatalogSection"
import VisitSection from "./sections/home/VisitSection"
import PhilosophySection from "./sections/home/PhilosophySection"
import ContactSection from "./sections/home/ContactSection"

export default function Home() {
    return (
        <>
            <TopBar/>
            <HomeSection />
            <CatalogSection />
            <VisitSection />
            <PhilosophySection />
            <ContactSection />
            <Footer />
        </>
    )
}