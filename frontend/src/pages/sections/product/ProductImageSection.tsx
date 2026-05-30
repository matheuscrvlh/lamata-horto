import type { Product } from '../../../types/products'

interface Props {
    product: Product
}

export default function ProductImageSection({ product }: Props) {
    return (
        <div className='md:sticky md:top-16 h-[50vh] md:h-[calc(100vh-4rem)] overflow-hidden bg-stone/30'>
            <img
                src={product.images}
                alt={product.name}
                className='w-full h-full object-cover'
            />
        </div>
    )
}
