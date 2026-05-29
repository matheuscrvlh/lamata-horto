import { useState, useMemo } from 'react'

// components
import TopBar from "../components/TopBar"
import Footer from "../components/Footer"

// sections
import HomeSection from "./sections/products/HomeSection"
import FiltersSections from './sections/products/FiltersSections'
import ProductsSections from "./sections/products/ProductsSections"

// data
import { products } from '../data/products'

// types
import type { ProductFilters } from '../types/products'

export default function Products() {
    const [filters, setFilters] = useState<ProductFilters>({})

    const productsFiltereds = useMemo(() => {
        return products.filter(p => {
            if (!p.active) return false
            if (filters.subCategory && p.subCategory !== filters.subCategory) return false
            if (filters.brand && p.brand !== filters.brand) return false
            if (filters.tags?.length && !filters.tags.some(t => p.tags.includes(t))) return false
            if (filters.minValue !== undefined && p.promotionalValue < filters.minValue) return false
            if (filters.maxValue !== undefined && p.promotionalValue > filters.maxValue) return false
            if (filters.featured === true && !p.featured) return false
            return true
        })
    }, [filters])

    return (
        <>
            <TopBar />
            <HomeSection />
            <FiltersSections
                filters={filters}
                setFilters={setFilters}
                resultCount={productsFiltereds.length}
            />
            <ProductsSections
                productsFiltereds={productsFiltereds}
            />
            <Footer />
        </>
    )
}
