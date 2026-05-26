// components
import TopBar from "../components/TopBar"

// sections
import HomeSection from "./sections/products/HomeSection"
import ProductsSections from "./sections/products/ProductsSections"

export default function Products() {
    return (
        <>
            <TopBar />
            <HomeSection />
            <ProductsSections />
        </>
    )
}