import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { CarouselImages } from '../data/carousel'

export default function Carousel() {
    const [current, setCurrent] = useState(0)
    const total = CarouselImages.length

    const next = useCallback(() => setCurrent(c => (c + 1) % total), [total])
    const prev = () => setCurrent(c => (c - 1 + total) % total)

    useEffect(() => {
        const id = setInterval(next, 5000)
        return () => clearInterval(id)
    }, [next])

    return (
        <div className='relative w-full h-screen overflow-hidden'>
            {CarouselImages.map((image, i) => (
                <div
                    key={image.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                        i === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                >
                    <img
                        src={image.image}
                        alt={image.title}
                        className='w-full h-full object-cover'
                    />
                </div>
            ))}

            {/* Gradient overlay */}
            <div className='absolute inset-0 bg-linear-to-b from-dark-green/20 via-transparent to-dark-green/60' />

            {/* Hero text */}
            <div className='absolute inset-0 flex flex-col items-start justify-end px-6 pb-24 md:px-[10vw] md:pb-32'>
                <p className='text-xs text-ivory/70 tracking-widest uppercase mb-4'>
                    Horto Lamata — Nova Iguaçu
                </p>
                <h1 className='font-display text-5xl md:text-7xl lg:text-8xl text-ivory leading-[1.1] mb-8'>
                    O verde não é<br />decoração.<br />
                    <em>É presença.</em>
                </h1>
                <Link
                    to='/produtos'
                    className='text-xs tracking-widest uppercase bg-ivory text-dark-green px-8 py-3.5 hover:bg-stone transition-colors'
                >
                    Explorar catálogo
                </Link>
            </div>

            {/* Navigation arrows */}
            <button
                onClick={prev}
                aria-label='Anterior'
                className='absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-ivory/60 hover:text-ivory transition-colors text-4xl font-light leading-none select-none'
            >
                ‹
            </button>
            <button
                onClick={next}
                aria-label='Próximo'
                className='absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-ivory/60 hover:text-ivory transition-colors text-4xl font-light leading-none select-none'
            >
                ›
            </button>

            {/* Dots */}
            <div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 items-center'>
                {CarouselImages.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        aria-label={`Slide ${i + 1}`}
                        className={`h-px transition-all duration-300 bg-ivory ${
                            i === current ? 'w-8 opacity-100' : 'w-3 opacity-40'
                        }`}
                    />
                ))}
            </div>
        </div>
    )
}
