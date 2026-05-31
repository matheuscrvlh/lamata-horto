import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '../../../lib/animations'

const stats = [
    { value: '10+', label: 'Anos de experiência' },
    { value: '500+', label: 'Espécies cultivadas' },
    { value: '1.000+', label: 'Clientes atendidos' },
    { value: '1 ano', label: 'De suporte pós-adoção' },
]

export default function StatsSection() {
    return (
        <section className='bg-dark-green py-8 md:py-10 px-6 md:px-[10vw]'>
            <motion.div
                className='grid grid-cols-4 gap-px bg-eucalyptus/15'
                variants={stagger}
                initial='hidden'
                whileInView='visible'
                viewport={viewport}
            >
                {stats.map(s => (
                    <motion.div
                        key={s.label}
                        variants={fadeUp}
                        className='bg-dark-green px-3 md:px-8 py-5 md:py-7 flex flex-col gap-1'
                    >
                        <span className='font-display text-xl md:text-4xl text-ivory'>
                            {s.value}
                        </span>
                        <span className='text-[10px] md:text-xs text-eucalyptus tracking-wide leading-tight'>
                            {s.label}
                        </span>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}
