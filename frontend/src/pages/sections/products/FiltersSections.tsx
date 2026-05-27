import type { ProductFilters } from "../../../types/products"

interface Props {
    filters: ProductFilters
    setFilters: (filters: ProductFilters) => void
}

export default function filtersSections({ filters, setFilters }: Props) {
    return (
        <section></section>
    )
}