export default function VisitSection() {
    return (
        <section className='bg-moss py-20 md:py-28 px-6 md:px-[10vw]'>
            <div className='grid md:grid-cols-2 gap-12 md:gap-20 items-center'>
                <div>
                    <p className='text-xs text-eucalyptus/50 tracking-widest uppercase mb-4'>
                        Visite
                    </p>
                    <h2 className='font-display text-4xl md:text-5xl lg:text-6xl text-ivory leading-tight mb-6'>
                        Um pedaço de mata<br />cultivado à mão.
                    </h2>
                    <p className='text-eucalyptus text-sm leading-relaxed mb-10 max-w-sm'>
                        Nosso espaço em Santa Rita, Nova Iguaçu, recebe visitas com hora marcada.
                        Caminhe entre as estufas, prove o café da casa e leve uma espécie escolhida
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
                </div>

                <div className='hidden md:block aspect-4/5 bg-dark-green/40 overflow-hidden'>
                    <div className='w-full h-full bg-eucalyptus/10' />
                </div>
            </div>
        </section>
    )
}
