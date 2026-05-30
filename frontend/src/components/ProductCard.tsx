import { Link } from 'react-router-dom'
import type { Product } from '../types/products'

interface Props {
    product: Product
}

export default function ProductCard({ product }: Props) {
    return (
        <Link to={`/produtos/${product.id}`} className='group block'>
            <div className='overflow-hidden aspect-square bg-stone/40'>
                <img
                    src={product.images}
                    alt={product.name}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                />
            </div>
            <div className='mt-3 px-1'>
                <p className='text-xs text-olive tracking-widest uppercase mb-1'>
                    {product.subCategory}
                </p>
                <p className='text-dark-green font-medium capitalize'>
                    {product.name}
                </p>
                <div className='flex items-baseline gap-2 mt-1'>
                    <span className='text-dark-green font-semibold text-sm'>
                        R$ {product.promotionalValue.toFixed(2).replace('.', ',')}
                    </span>
                    {product.promotionalValue < product.value && (
                        <span className='text-sage line-through text-xs'>
                            R$ {product.value.toFixed(2).replace('.', ',')}
                        </span>
                    )}
                </div>
            </div>
        </Link>
    )
}
