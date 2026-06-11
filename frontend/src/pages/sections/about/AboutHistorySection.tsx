import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '../../../lib/animations'

export default function AboutHistorySection() {
    return (
        <section className='py-20 md:py-28 px-6 md:px-[10vw] bg-ivory'>
            <div className='grid md:grid-cols-2 gap-12 md:gap-24 items-start'>
                <motion.div
                    variants={fadeUp}
                    initial='hidden'
                    whileInView='visible'
                    viewport={viewport}
                >
                    <p className='text-xs text-olive tracking-widest uppercase mb-4'>
                        Nossa história
                    </p>
                    <h2 className='font-display text-4xl md:text-5xl lg:text-6xl text-dark-green leading-tight'>
                        Um horto nascido<br />de uma obsessão.
                    </h2>
                </motion.div>

                <motion.div
                    className='flex flex-col gap-5 text-sm text-moss leading-relaxed md:pt-16'
                    variants={stagger}
                    initial='hidden'
                    whileInView='visible'
                    viewport={viewport}
                >
                    <motion.p variants={fadeUp}>
                        O Lamata Horto, fundada em 2021, nasceu com a proposta de integrar natureza,
                        paisagismo e sensações em ambientes que inspiram bem-estar e conexão.
                    </motion.p>
                    <motion.p variants={fadeUp}>
                        Especializada em plantas ornamentais, frutíferas, palmeiras, vasos, insumos
                        e projetos paisagísticos, o Lamata oferece soluções completas para transformar
                        espaços através da estética, autenticidade e do poder do verde.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    )
}
