import type { Dispatch, SetStateAction } from 'react'
import { products } from '../../../data/products'
import type { ProductFilters } from '../../../types/products'

interface Props {
    filters: ProductFilters
    setFilters: Dispatch<SetStateAction<ProductFilters>>
    resultCount: number
}

const allTags = [...new Set(products.flatMap(p => p.tags))]
const allSubCategories = [...new Set(products.map(p => p.subCategory))]

const hasActiveFilters = (f: ProductFilters) =>
    !!(f.tags?.length || f.subCategory || f.featured || f.minValue !== undefined || f.maxValue !== undefined)

export default function FiltersSections({ filters, setFilters, resultCount }: Props) {
    const toggleTag = (tag: string) => {
        setFilters(prev => {
            const existing = prev.tags ?? []
            return {
                ...prev,
                tags: existing.includes(tag)
                    ? existing.filter(t => t !== tag)
                    : [...existing, tag],
            }
        })
    }

    const toggleSubCategory = (sub: string) => {
        setFilters(prev => ({
            ...prev,
            subCategory: prev.subCategory === sub ? undefined : sub,
        }))
    }

    const toggleFeatured = () => {
        setFilters(prev => ({
            ...prev,
            featured: prev.featured ? undefined : true,
        }))
    }

    const clearAll = () => setFilters({})

    const active = hasActiveFilters(filters)

    return (
        <section className='sticky top-16 z-40 bg-ivory border-b border-stone'>
            <div className='px-6 md:px-[10vw] py-4'>
                {/* Desktop layout */}
                <div className='hidden md:flex items-center gap-6'>

                    {/* SubCategory */}
                    {allSubCategories.length > 1 && (
                        <>
                            <div className='flex gap-2 items-center shrink-0'>
                                {allSubCategories.map(sub => (
                                    <button
                                        key={sub}
                                        onClick={() => toggleSubCategory(sub)}
                                        className={`text-xs tracking-widest uppercase px-4 py-2 border transition-colors ${
                                            filters.subCategory === sub
                                                ? 'border-dark-green bg-dark-green text-ivory'
                                                : 'border-stone text-moss hover:border-olive'
                                        }`}
                                    >
                                        {sub}
                                    </button>
                                ))}
                            </div>
                            <div className='h-4 w-px bg-stone shrink-0' />
                        </>
                    )}

                    {/* Tags */}
                    <div className='flex gap-2 items-center flex-wrap'>
                        <span className='text-xs text-sage tracking-wide shrink-0'>Tags</span>
                        {allTags.map(tag => (
                            <button
                                key={tag}
                                onClick={() => toggleTag(tag)}
                                className={`text-xs tracking-wide px-3 py-1.5 rounded-full border transition-colors capitalize ${
                                    filters.tags?.includes(tag)
                                        ? 'border-olive bg-olive text-ivory'
                                        : 'border-stone text-moss hover:border-olive'
                                }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>

                    <div className='h-4 w-px bg-stone shrink-0' />

                    {/* Featured */}
                    <button
                        onClick={toggleFeatured}
                        className={`flex items-center gap-2 text-xs tracking-wide whitespace-nowrap transition-colors shrink-0 ${
                            filters.featured ? 'text-dark-green font-medium' : 'text-sage hover:text-moss'
                        }`}
                    >
                        <span className={`w-8 h-4 rounded-full flex items-center transition-colors px-0.5 ${
                            filters.featured ? 'bg-dark-green' : 'bg-stone'
                        }`}>
                            <span className={`w-3 h-3 rounded-full bg-white transition-transform ${
                                filters.featured ? 'translate-x-4' : 'translate-x-0'
                            }`} />
                        </span>
                        Em destaque
                    </button>

                    {/* Spacer + result count + clear */}
                    <div className='ml-auto flex items-center gap-4 shrink-0'>
                        <span className='text-xs text-sage'>
                            {resultCount} {resultCount === 1 ? 'produto' : 'produtos'}
                        </span>
                        {active && (
                            <button
                                onClick={clearAll}
                                className='text-xs text-olive hover:text-dark-green transition-colors tracking-wide'
                            >
                                Limpar ×
                            </button>
                        )}
                    </div>
                </div>

                {/* Mobile layout */}
                <div className='md:hidden flex flex-col gap-3'>
                    {/* Tags — horizontal scroll */}
                    <div className='flex gap-2 overflow-x-auto pb-1 scrollbar-none'>
                        {allSubCategories.map(sub => (
                            <button
                                key={sub}
                                onClick={() => toggleSubCategory(sub)}
                                className={`text-xs tracking-widest uppercase px-4 py-2 border transition-colors shrink-0 ${
                                    filters.subCategory === sub
                                        ? 'border-dark-green bg-dark-green text-ivory'
                                        : 'border-stone text-moss'
                                }`}
                            >
                                {sub}
                            </button>
                        ))}
                        {allTags.map(tag => (
                            <button
                                key={tag}
                                onClick={() => toggleTag(tag)}
                                className={`text-xs tracking-wide px-3 py-1.5 rounded-full border transition-colors capitalize shrink-0 ${
                                    filters.tags?.includes(tag)
                                        ? 'border-olive bg-olive text-ivory'
                                        : 'border-stone text-moss'
                                }`}
                            >
                                {tag}
                            </button>
                        ))}
                        <button
                            onClick={toggleFeatured}
                            className={`text-xs tracking-wide px-3 py-1.5 border transition-colors shrink-0 ${
                                filters.featured
                                    ? 'border-dark-green bg-dark-green text-ivory'
                                    : 'border-stone text-moss'
                            }`}
                        >
                            Em destaque
                        </button>
                    </div>

                    {/* Count + clear */}
                    <div className='flex items-center justify-between'>
                        <span className='text-xs text-sage'>
                            {resultCount} {resultCount === 1 ? 'produto' : 'produtos'}
                        </span>
                        {active && (
                            <button
                                onClick={clearAll}
                                className='text-xs text-olive hover:text-dark-green transition-colors'
                            >
                                Limpar filtros ×
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
