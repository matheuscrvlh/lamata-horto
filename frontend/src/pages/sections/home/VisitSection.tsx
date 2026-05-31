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
                        Um pedaço de mata<br />cultivado à mão.
                    </h2>
                    <p className='text-eucalyptus text-sm leading-relaxed mb-7 max-w-sm'>
                        Nosso espaço em Santa Rita, Nova Iguaçu, recebe visitas com hora marcada.
                        Conheça as plantas de perto, tire suas dúvidas e leve uma espécie escolhida
                        ao seu ritmo.
                    </p>

                    <div className='flex gap-10'>
                        <div>
                            <p className='text-xs text-eucalyptus/50 tracking-widest uppercase mb-2'>
                                Dias
                            </p>
                            <p className='text-ivory text-sm'>Qui — Dom</p>
                        </div>
                        <div className='border-l border-eucalyptus/20 pl-10'>
                            <p className='text-xs text-eucalyptus/50 tracking-widest uppercase mb-2'>
                                Local
                            </p>
                            <p className='text-ivory text-sm'>Santa Rita</p>
                            <p className='text-eucalyptus text-sm'>Nova Iguaçu — RJ</p>
                        </div>
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
