export interface Product {
    id: number
    name: string
    description: string
    shortDescription: string
    value?: number
    promotionalValue?: number
    images: string
    category: string
    subCategory: string
    brand: string
    tags: string[]
    stock: number
    sku: string
    height: number
    width: number
    weight: number
    sunlight: string
    watering: string
    featured: boolean
    active: boolean
}

export interface ProductFilters {
    search?: string
    category?: string
    subCategory?: string
    brand?: string
    tags?: string[]
    minValue?: number
    maxValue?: number
    featured?: boolean
}

