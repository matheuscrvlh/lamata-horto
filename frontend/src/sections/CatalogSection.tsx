import { products } from "../data/products"

export default function CatalogSection() {
    return (
        <section className='h-full mt-20'>
            <div className='mx-[10vw]'>
                <p className='text-dark-green font-semibold text-3xl mb-10'>Catálogo</p>
                <div className='flex gap-10'>
                    {products.map(p => (
                        p.active 
                            && <div key={p.id}>
                                    <img src={p.images} alt={p.name} className='w-50 h-90'/>
                                    <p>{p.name}</p>
                                    <p>{p.value}</p>
                                </div>
                    ))}
                </div>
            </div>
        </section>
    )
}