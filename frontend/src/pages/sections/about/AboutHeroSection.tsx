import { CarouselImages } from '../../../data/carousel'

export default function AboutHeroSection() {
    return (
        <div className='relative w-full h-[50vh] md:h-[60vh] overflow-hidden'>
            <img
                src={CarouselImages[1].image}
                alt='Sobre a Lamata'
                className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-dark-green/50' />
            <div className='absolute inset-0 flex flex-col items-start justify-end px-6 pb-16 md:px-[10vw] md:pb-20'>
                <p className='text-xs text-ivory/60 tracking-widest uppercase mb-3'>
                    Lamata — Nova Iguaçu
                </p>
                <h1 className='font-display text-6xl md:text-8xl text-ivory leading-none'>
                    Sobre nós
                </h1>
            </div>
        </div>
    )
}
