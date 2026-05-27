import { useState, useEffect } from 'react'

// components
import TopBar from "../components/TopBar"

// sections
import HomeSection from "./sections/products/HomeSection"
import FiltersSections from './sections/products/FiltersSections'
import ProductsSections from "./sections/products/ProductsSections"

// data
import { products } from '../data/products'

// types
import type { Product, ProductFilters } from '../types/products'

export default function Products() {
    const [productsFiltereds, setProductsFiltereds] = useState<Product[]>([])
    const [filters, setFilters] = useState<ProductFilters>({})

    // onLoad
    useEffect(() => {
        setProductsFiltereds(products)
    }, [])

    return (
        <>
            <TopBar />
            <HomeSection />
            <FiltersSections 
                filters={filters}
                setFilters={setFilters}
            />
            <ProductsSections 
                productsFiltereds={productsFiltereds}
            />
        </>
    )
}