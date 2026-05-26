import { products } from "../../../data/products"

export default function ProductsSections() {
    return (
        <section>
            <div>
                {
                    products &&
                        products.map(p => (
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