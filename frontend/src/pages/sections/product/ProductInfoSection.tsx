import { Link } from 'react-router-dom'
import type { Product } from '../../../types/products'

const WHATSAPP_NUMBER = '5521966104173'

const careItems = (p: Product) => [
    { label: 'Luz', value: p.sunlight },
    { label: 'Rega', value: p.watering },
    { label: 'Altura', value: `${p.height} cm` },
    { label: 'Largura', value: `${p.width} cm` },
    { label: 'Peso', value: `${p.weight} kg` },
]

interface Props {
    product: Product
}

export default function ProductInfoSection({ product }: Props) {
    const whatsappMsg = encodeURIComponent(
        `Olá! Tenho interesse na planta "${product.name}" (SKU: ${product.sku}). Podem me ajudar?`
    )
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`
    const whatsappVisitaUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de agendar uma visita ao Horto Lamata.')}`

    return (
        <div className='px-6 py-12 md:px-12 md:py-16 flex flex-col gap-8'>

            {/* Breadcrumb */}
            <Link
                to='/produtos'
                className='text-xs text-sage hover:text-moss transition-colors tracking-wide'
            >
                ← Voltar ao catálogo
            </Link>

            {/* Header */}
            <div>
                <p className='text-xs text-olive tracking-widest uppercase mb-2'>
                    {product.category} · {product.subCategory}
                </p>
                <h1 className='font-display text-4xl md:text-5xl text-dark-green leading-tight mb-1 capitalize'>
                    {product.name}
                </h1>
                <p className='text-xs text-sage tracking-wide'>
                    SKU: {product.sku}
                </p>
            </div>

            {/* Preço */}
            <div className='flex items-baseline gap-3'>
                {product.promotionalValue != null ? (
                    <>
                        <span className='font-display text-3xl text-dark-green'>
                            R$ {product.promotionalValue.toFixed(2).replace('.', ',')}
                        </span>
                        {product.value != null && product.promotionalValue < product.value && (
                            <span className='text-sage line-through text-sm'>
                                R$ {product.value.toFixed(2).replace('.', ',')}
                            </span>
                        )}
                    </>
                ) : (
                    <span className='text-sage text-sm tracking-wide'>Consultar preço</span>
                )}
            </div>

            {/* Descrição */}
            <div className='border-t border-stone pt-6'>
                <p className='text-sm text-moss leading-relaxed'>
                    {product.description}
                </p>
            </div>

            {/* Cuidados */}
            <div className='border-t border-stone pt-6'>
                <p className='text-xs text-sage tracking-widest uppercase mb-4'>
                    Cuidados
                </p>
                <div className='grid grid-cols-2 gap-4'>
                    {careItems(product).map(item => (
                        <div key={item.label}>
                            <p className='text-xs text-sage tracking-wide mb-0.5'>
                                {item.label}
                            </p>
                            <p className='text-sm text-dark-green font-medium capitalize'>
                                {item.value}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tags */}
            <div className='border-t border-stone pt-6 flex gap-2 flex-wrap'>
                {product.tags.map(tag => (
                    <span
                        key={tag}
                        className='text-xs text-olive border border-stone px-3 py-1 rounded-full capitalize tracking-wide'
                    >
                        {tag}
                    </span>
                ))}
                {product.featured && (
                    <span className='text-xs text-ivory bg-olive border border-olive px-3 py-1 rounded-full tracking-wide'>
                        Em destaque
                    </span>
                )}
            </div>

            {/* CTAs */}
            <div className='border-t border-stone pt-6 flex flex-col sm:flex-row gap-4'>
                <a
                    href={whatsappUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-dark-green text-ivory text-xs tracking-widest uppercase px-8 py-4 text-center hover:bg-moss transition-colors flex-1'
                >
                    Falar sobre este produto
                </a>
                <a
                    href={whatsappVisitaUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='border border-dark-green text-dark-green text-xs tracking-widest uppercase px-8 py-4 text-center hover:bg-dark-green hover:text-ivory transition-colors'
                >
                    Agendar visita
                </a>
            </div>

            {/* Estoque baixo */}
            {product.stock <= 5 && product.stock > 0 && (
                <p className='text-xs text-olive tracking-wide'>
                    Últimas {product.stock} unidades disponíveis.
                </p>
            )}

        </div>
    )
}
