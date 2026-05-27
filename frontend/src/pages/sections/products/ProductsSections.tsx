import { products } from "../../../data/products"

// types
import type { Product } from "../../../types/products"

// interfaces
interface Props {
    productsFiltereds: Product[]
}

export default function ProductsSections({ productsFiltereds }: Props) {
    return (
        <section>
            <div>
                {
                    products &&
                        productsFiltereds.map(p => (
                            <div key={p.id}>
                                <img src={p.images} alt={p.name} />
                                <p>{p.name}</p>
                                <p>{p.value}</p>
                            </div>
                        ))
                }
            </div>
        </section>
    )
}