// images
import { CarouselImages } from "../data/carousel"

export default function Carousel() {
    return (
        <div className='flex w-full h-[94dvh] overflow-hidden'>
            {CarouselImages.map(image => (
                <img 
                    key={image.id}
                    src={image.image} 
                    alt={image.title} 
                    className='w-full'
                />
            ))}
        </div>
    )
}