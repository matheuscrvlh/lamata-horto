import type { Dispatch, SetStateAction } from 'react'
import { products } from '../../../data/products'
import type { ProductFilters } from '../../../types/products'

interface Props {
    filters: ProductFilters
    setFilters: Dispatch<SetStateAction<ProductFilters>>
    resultCount: number
}

const categoryLabel: Record<string, string> = {
    planta: 'Plantas',
    insumo: 'Insumos',
}

const allCategories = [...new Set(products.map(p => p.category))]

const subCategoriesFor = (category?: string) =>
    [...new Set(
        products
            .filter(p => !category || p.category === category)
            .map(p => p.subCategory)
    )]

const hasActive = (f: ProductFilters) =>
    !!(f.search || f.category || f.subCategory || f.featured)

export default function FiltersSections({ filters, setFilters, resultCount }: Props) {
    const subCategories = subCategoriesFor(filters.category)

    const setCategory = (cat: string) =>
        setFilters(prev => ({
            ...prev,
            category: prev.category === cat ? undefined : cat,
            subCategory: undefined,
        }))

    const setSubCategory = (sub: string) =>
        setFilters(prev => ({
            ...prev,
            subCategory: prev.subCategory === sub ? undefined : sub,
        }))

    const toggleFeatured = () =>
        setFilters(prev => ({ ...prev, featured: prev.featured ? undefined : true }))

    const clearAll = () => setFilters({})

    const active = hasActive(filters)

    return (
        <section className='sticky top-16 z-40 bg-ivory border-b border-stone'>
            <div className='px-6 md:px-[10vw] py-4'>

                {/* Desktop */}
                <div className='hidden md:flex items-center gap-4'>

                    {/* Search */}
                    <div className='relative shrink-0'>
                        <svg
                            className='absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-sage pointer-events-none'
                            viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'
                        >
                            <circle cx='11' cy='11' r='8' />
                            <path d='M21 21l-4.35-4.35' />
                        </svg>
                        <input
                            type='text'
                            placeholder='Buscar produto…'
                            value={filters.search ?? ''}
                            onChange={e => setFilters(prev => ({ ...prev, search: e.target.value || undefined }))}
                            className='pl-8 pr-3 py-2 text-xs text-dark-green placeholder-sage bg-transparent border border-stone hover:border-olive focus:border-dark-green focus:outline-none transition-colors w-44'
                        />
                    </div>

                    <div className='h-4 w-px bg-stone shrink-0' />

                    {/* Categoria */}
                    <div className='flex gap-2 shrink-0'>
                        {allCategories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setCategory(cat)}
                                className={`text-xs tracking-widest uppercase px-4 py-2 border transition-colors ${
                                    filters.category === cat
                                        ? 'border-dark-green bg-dark-green text-ivory'
                                        : 'border-stone text-moss hover:border-olive'
                                }`}
                            >
                                {categoryLabel[cat] ?? cat}
                            </button>
                        ))}
                    </div>

                    <div className='h-4 w-px bg-stone shrink-0' />

                    {/* Subcategoria */}
                    <div className='flex gap-2 items-center flex-wrap'>
                        {subCategories.map(sub => (
                            <button
                                key={sub}
                                onClick={() => setSubCategory(sub)}
                                className={`text-xs capitalize tracking-wide px-3 py-1.5 rounded-full border transition-colors ${
                                    filters.subCategory === sub
                                        ? 'border-olive bg-olive text-ivory'
                                        : 'border-stone text-moss hover:border-olive'
                                }`}
                            >
                                {sub}
                            </button>
                        ))}
                    </div>

                    <div className='h-4 w-px bg-stone shrink-0' />

                    {/* Em destaque */}
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

                    {/* Count + limpar */}
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

                {/* Mobile */}
                <div className='md:hidden flex flex-col gap-3'>
                    {/* Search mobile */}
                    <div className='relative'>
                        <svg
                            className='absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-sage pointer-events-none'
                            viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'
                        >
                            <circle cx='11' cy='11' r='8' />
                            <path d='M21 21l-4.35-4.35' />
                        </svg>
                        <input
                            type='text'
                            placeholder='Buscar produto…'
                            value={filters.search ?? ''}
                            onChange={e => setFilters(prev => ({ ...prev, search: e.target.value || undefined }))}
                            className='w-full pl-8 pr-3 py-2.5 text-xs text-dark-green placeholder-sage bg-transparent border border-stone focus:border-dark-green focus:outline-none transition-colors'
                        />
                    </div>

                    <div className='flex gap-2 overflow-x-auto pb-1 scrollbar-none'>
                        {allCategories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setCategory(cat)}
                                className={`text-xs tracking-widest uppercase px-4 py-2 border transition-colors shrink-0 ${
                                    filters.category === cat
                                        ? 'border-dark-green bg-dark-green text-ivory'
                                        : 'border-stone text-moss'
                                }`}
                            >
                                {categoryLabel[cat] ?? cat}
                            </button>
                        ))}

                        <div className='w-px h-6 bg-stone self-center shrink-0' />

                        {subCategories.map(sub => (
                            <button
                                key={sub}
                                onClick={() => setSubCategory(sub)}
                                className={`text-xs capitalize tracking-wide px-3 py-1.5 rounded-full border transition-colors shrink-0 ${
                                    filters.subCategory === sub
                                        ? 'border-olive bg-olive text-ivory'
                                        : 'border-stone text-moss'
                                }`}
                            >
                                {sub}
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
