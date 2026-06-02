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
        const q = filters.search
            ? filters.search.toLowerCase().trim().normalize('NFD').replace(/[̀-ͯ]/g, '')
            : ''
        return products.filter(p => {
            if (!p.active) return false
            if (filters.category && p.category !== filters.category) return false
            if (filters.subCategory && p.subCategory !== filters.subCategory) return false
            if (filters.featured === true && !p.featured) return false
            if (q) {
                const haystack = [
                    p.name,
                    p.description,
                    p.shortDescription,
                    p.subCategory,
                    p.category,
                    p.brand,
                    ...p.tags,
                ]
                    .join(' ')
                    .toLowerCase()
                    .normalize('NFD')
                    .replace(/[̀-ͯ]/g, '')
                if (!haystack.includes(q)) return false
            }
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
