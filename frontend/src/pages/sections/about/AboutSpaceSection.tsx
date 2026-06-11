import { motion } from 'framer-motion'
import nossoEspaco from '../../../assets/banners/nossoEspaco.png'
import { fadeUp, fadeIn, viewport } from '../../../lib/animations'

export default function AboutSpaceSection() {
    return (
        <section className='grain-moss py-20 md:py-28 px-6 md:px-[10vw]'>
            <div className='grid md:grid-cols-2 gap-12 md:gap-20 items-center'>
                <motion.div
                    variants={fadeUp}
                    initial='hidden'
                    whileInView='visible'
                    viewport={viewport}
                >
                    <p className='text-xs text-eucalyptus/50 tracking-widest uppercase mb-4'>
                        Nosso espaço
                    </p>
                    <h2 className='font-display text-4xl md:text-5xl text-ivory leading-tight mb-6'>
                        Um lugar para<br />desacelerar.
                    </h2>
                    <p className='text-eucalyptus text-sm leading-relaxed mb-8'>
                        Um espaço pensado para quem busca beleza, tranquilidade e conexão com a natureza.
                        Agende sua visita, estamos ansiosos para conhecê-los.
                    </p>
                    <div className='flex flex-col gap-4 mb-10'>
                        <div className='flex gap-10'>
                            <div>
                                <p className='text-xs text-eucalyptus/50 tracking-widest uppercase mb-2'>
                                    Seg — Sex
                                </p>
                                <p className='text-ivory text-sm'>08h às 17h</p>
                            </div>
                            <div className='border-l border-eucalyptus/20 pl-10'>
                                <p className='text-xs text-eucalyptus/50 tracking-widest uppercase mb-2'>
                                    Sábado
                                </p>
                                <p className='text-ivory text-sm'>08h às 12h</p>
                            </div>
                        </div>
                        <p className='text-eucalyptus/70 text-xs leading-relaxed'>
                            Estr. de Adrianópolis, 3180 — Vila Nossa Sra. da Conceição<br />
                            Nova Iguaçu — RJ, 26090-005
                        </p>
                    </div>
                    <a
                        href='https://wa.me/5521966104173?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20visita%20ao%20Horto%20Lamata.'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-block text-xs tracking-widest uppercase bg-ivory text-dark-green px-8 py-3.5 hover:bg-stone transition-colors'
                    >
                        Agendar visita
                    </a>
                </motion.div>

                <motion.div
                    className='hidden md:block aspect-4/5 bg-dark-green/40 overflow-hidden'
                    variants={fadeIn}
                    initial='hidden'
                    whileInView='visible'
                    viewport={viewport}
                >
                    <img
                        src={nossoEspaco}
                        alt='Nosso espaço'
                        className='w-full h-full object-cover'
                    />
                </motion.div>
            </div>
        </section>
    )
}
