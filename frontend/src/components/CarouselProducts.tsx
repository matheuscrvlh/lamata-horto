// images
import { CarouselImages } from "../data/carousel"

export default function CarouselProducts() {
    return (
        <div className='flex w-full h-[94dvh] overflow-hidden'>
            {CarouselImages.map(image => (
                <img 
                    key={image.id}
                    src={image.image} 
                    alt={image.title} 
                    className='w-full h-100'
                />
            ))}
        </div>
    )
}