import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeUp, viewport } from '../../../lib/animations'

export default function AboutContactSection() {
    return (
        <section id='contato' className='bg-ivory py-24 md:py-32 px-6 md:px-[10vw]'>
            <motion.div
                className='max-w-2xl'
                variants={fadeUp}
                initial='hidden'
                whileInView='visible'
                viewport={viewport}
            >
                <p className='text-xs text-olive tracking-widest uppercase mb-4'>Contato</p>
                <h2 className='font-display text-5xl md:text-6xl lg:text-7xl text-dark-green leading-tight mb-10'>
                    Vamos plantar<br />algo juntos?
                </h2>
                <div className='flex flex-col sm:flex-row gap-4 mb-10'>
                    <a
                        href='https://wa.me/5521966104173?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20visita%20ao%20Horto%20Lamata.'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='bg-dark-green text-ivory text-xs tracking-widest uppercase px-8 py-4 text-center hover:bg-moss transition-colors'
                    >
                        Agendar Visita
                    </a>
                    <Link
                        to='/produtos'
                        className='border border-dark-green text-dark-green text-xs tracking-widest uppercase px-8 py-4 text-center hover:bg-dark-green hover:text-ivory transition-colors'
                    >
                        Ver Catálogo
                    </Link>
                </div>
                <p className='text-sage text-sm tracking-wide'>
                    Santa Rita — Nova Iguaçu — RJ
                </p>
            </motion.div>
        </section>
    )
}
