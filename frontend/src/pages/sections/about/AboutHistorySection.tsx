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
                        A Lamata nasceu em 2015 de uma ideia de Fernando Rezende, que junto com
                        seu filho Matheus decidiu criar um horto diferente do que existia por aqui.
                        Menos pressa, mais cuidado com cada planta.
                    </motion.p>
                    <motion.p variants={fadeUp}>
                        Em vez de velocidade, escolhemos o tempo certo de cada espécie. Em vez de
                        escala, escolhemos procedência. Em vez de apenas vender, decidimos
                        acompanhar cada planta por pelo menos um ano após a adoção.
                    </motion.p>
                    <motion.p variants={fadeUp}>
                        O que começou como um pequeno viveiro em Santa Rita, Nova Iguaçu,
                        se tornou um espaço de referência para quem entende que o verde dentro
                        de casa não é decoração. É presença.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    )
}
