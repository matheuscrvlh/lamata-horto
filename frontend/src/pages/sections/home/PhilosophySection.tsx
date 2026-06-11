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

export default function PhilosophySection() {
    return (
        <article className='grain-dark-green py-20 md:py-28 px-6 md:px-[10vw]'>
            <div className='grid md:grid-cols-2 gap-16 md:gap-24 items-start'>
                <motion.div
                    variants={fadeUp}
                    initial='hidden'
                    whileInView='visible'
                    viewport={viewport}
                >
                    <p className='text-xs text-eucalyptus/50 tracking-widest uppercase mb-4'>
                        Filosofia
                    </p>
                    <h2 className='font-display text-4xl md:text-5xl lg:text-6xl text-ivory leading-tight mb-6'>
                        O verde não é<br />decoração.
                    </h2>
                    <p className='text-eucalyptus text-sm leading-relaxed max-w-sm'>
                        Fundado em 2015 por Fernando Rezende junto com seu filho Matheus, o horto
                        nasceu do desejo de cuidar bem de cada planta antes de ela chegar até você.
                    </p>
                </motion.div>

                <motion.div
                    className='flex flex-col'
                    variants={stagger}
                    initial='hidden'
                    whileInView='visible'
                    viewport={viewport}
                >
                    {principles.map((item, idx) => (
                        <motion.div
                            key={item.n}
                            variants={fadeUp}
                            className={`flex gap-6 items-start py-7 ${
                                idx < principles.length - 1 ? 'border-b border-eucalyptus/15' : ''
                            } ${idx === 0 ? 'border-t border-eucalyptus/15' : ''}`}
                        >
                            <span className='text-eucalyptus/30 text-xs font-mono pt-0.5 shrink-0'>
                                {item.n}
                            </span>
                            <div>
                                <p className='text-ivory text-sm font-medium mb-1.5'>{item.title}</p>
                                <p className='text-eucalyptus text-sm leading-relaxed'>{item.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </article>
    )
}
