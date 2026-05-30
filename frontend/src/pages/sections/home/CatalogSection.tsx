import { Link } from 'react-router-dom'
import { products } from '../../../data/products'
import ProductCard from '../../../components/ProductCard'

export default function CatalogSection() {
    const activeProducts = products.filter(p => p.active && p.featured).slice(0, 4)

    return (
        <section className='py-20 px-6 md:px-[10vw]'>
            <div className='flex items-end justify-between mb-12'>
                <div>
                    <p className='text-xs text-olive tracking-widest uppercase mb-2'>Seleção</p>
                    <h2 className='font-display text-4xl md:text-5xl text-dark-green'>Catálogo</h2>
                </div>
                <Link
                    to='/produtos'
                    className='hidden md:block text-sm text-olive hover:text-dark-green transition-colors tracking-wide'
                >
                    Ver todos →
                </Link>
            </div>

            <div className='grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-12'>
                {activeProducts.map(p => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>

            <div className='md:hidden mt-10 text-center'>
                <Link
                    to='/produtos'
                    className='text-sm text-olive hover:text-dark-green transition-colors tracking-wide'
                >
                    Ver todos os produtos →
                </Link>
            </div>
        </section>
    )
}
