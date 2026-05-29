import ProductCard from '../../../components/ProductCard'
import type { Product } from '../../../types/products'

interface Props {
    productsFiltereds: Product[]
}

export default function ProductsSections({ productsFiltereds }: Props) {
    if (productsFiltereds.length === 0) {
        return (
            <section className='py-24 px-6 md:px-[10vw] text-center'>
                <p className='text-sage text-sm tracking-wide'>Nenhum produto encontrado.</p>
            </section>
        )
    }

    return (
        <section className='py-16 px-6 md:px-[10vw]'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12'>
                {productsFiltereds.map(p => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </section>
    )
}
