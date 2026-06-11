import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '../../../lib/animations'

const principles = [
    {
        n: '01',
        title: 'Atendimento personalizado',
        text: 'Ajudamos você a escolher e cuidar das plantas ideais para o seu espaço e rotina.',
    },
    {
        n: '02',
        title: 'Presentes que permanecem vivos.',
        text: 'Crie arranjos personalizados para surpreender com natureza e significado.',
    },
    {
        n: '03',
        title: 'Experiência que continua',
        text: 'Da escolha aos cuidados diários, oferecemos suporte, manutenção e produtos para o desenvolvimento saudável das plantas.',
    },
]

export default function AboutPhilosophySection() {
    return (
        <section className='grain-dark-green py-20 md:py-28 px-6 md:px-[10vw]'>
            <motion.div
                className='mb-12'
                variants={fadeUp}
                initial='hidden'
                whileInView='visible'
                viewport={viewport}
            >
                <p className='text-xs text-eucalyptus/50 tracking-widest uppercase mb-4'>
                    Filosofia
                </p>
                <h2 className='font-display text-4xl md:text-5xl text-ivory leading-tight'>
                    Como trabalhamos
                </h2>
            </motion.div>

            <motion.div
                className='grid md:grid-cols-3 gap-0'
                variants={stagger}
                initial='hidden'
                whileInView='visible'
                viewport={viewport}
            >
                {principles.map((item, idx) => (
                    <motion.div
                        key={item.n}
                        variants={fadeUp}
                        className={`py-8 md:py-0 md:px-8 border-b md:border-b-0 md:border-l border-eucalyptus/15 flex flex-col gap-4 ${
                            idx === 0 ? 'md:border-l-0 md:pl-0' : ''
                        }`}
                    >
                        <span className='text-eucalyptus/30 text-xs font-mono'>{item.n}</span>
                        <p className='text-ivory font-medium text-sm'>{item.title}</p>
                        <p className='text-eucalyptus text-sm leading-relaxed'>{item.text}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}
