import { useParams, Navigate } from 'react-router-dom'

// components
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'

// sections
import ProductImageSection from './sections/product/ProductImageSection'
import ProductInfoSection from './sections/product/ProductInfoSection'

// data
import { products } from '../data/products'

export default function ProductDetail() {
    const { id } = useParams()
    const product = products.find(p => p.id === Number(id))

    if (!product) return <Navigate to='/produtos' replace />

    return (
        <>
            <TopBar />
            <main className='min-h-screen pt-16'>
                <div className='grid md:grid-cols-2 min-h-[calc(100vh-4rem)]'>
                    <ProductImageSection product={product} />
                    <ProductInfoSection product={product} />
                </div>
            </main>
            <Footer />
        </>
    )
}
