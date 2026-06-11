import { motion } from 'framer-motion'
import bannerVisite from '../../../assets/banners/bannerVisite.png'
import { fadeUp, fadeIn, viewport } from '../../../lib/animations'

export default function VisitSection() {
    return (
        <section className='grain-moss py-10 md:py-12 px-6 md:px-[10vw]'>
            <div className='grid md:grid-cols-2 gap-8 md:gap-14 items-center'>
                <motion.div
                    variants={fadeUp}
                    initial='hidden'
                    whileInView='visible'
                    viewport={viewport}
                >
                    <p className='text-xs text-eucalyptus/50 tracking-widest uppercase mb-3'>
                        Visite
                    </p>
                    <h2 className='font-display text-3xl md:text-4xl lg:text-5xl text-ivory leading-tight mb-4'>
                        Natureza e bem-estar.
                    </h2>
                    <p className='text-eucalyptus text-sm leading-relaxed mb-7 max-w-sm'>
                        Um espaço pensado para quem busca beleza, tranquilidade e conexão com a natureza.
                        Agende sua visita, estamos ansiosos para conhecê-los.
                    </p>

                    <div className='flex flex-col gap-4'>
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
                        <p className='text-eucalyptus/70 text-xs leading-relaxed max-w-sm'>
                            Estr. de Adrianópolis, 3180 — Vila Nossa Sra. da Conceição<br />
                            Nova Iguaçu — RJ, 26090-005
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className='hidden md:block aspect-video bg-dark-green/40 overflow-hidden'
                    variants={fadeIn}
                    initial='hidden'
                    whileInView='visible'
                    viewport={viewport}
                >
                    <img
                        src={bannerVisite}
                        alt='Espaço Lamata Horto'
                        className='w-full h-full object-cover'
                    />
                </motion.div>
            </div>
        </section>
    )
}
