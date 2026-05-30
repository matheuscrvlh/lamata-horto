import { testimonials } from '../../../data/testimonials'

export default function TestimonialsSection() {
    return (
        <section className='bg-ivory py-12 md:py-28 px-6 md:px-[10vw]'>
            <div className='mb-8 md:mb-12'>
                <p className='text-xs text-olive tracking-widest uppercase mb-2'>Depoimentos</p>
                <h2 className='font-display text-3xl md:text-5xl text-dark-green'>
                    O que nossos clientes dizem.
                </h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6'>
                {testimonials.map(t => (
                    <div
                        key={t.id}
                        className='bg-white border border-stone p-5 md:p-8 flex flex-col gap-4 md:gap-6'
                    >
                        <span className='hidden md:block font-display text-5xl text-stone leading-none'>"</span>
                        <p className='text-xs md:text-sm text-moss leading-relaxed flex-1'>
                            {t.text}
                        </p>
                        <div className='border-t border-stone pt-4 md:pt-5'>
                            <p className='text-dark-green text-xs md:text-sm font-medium'>{t.name}</p>
                            <p className='text-sage text-xs tracking-wide mt-0.5'>{t.location}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
