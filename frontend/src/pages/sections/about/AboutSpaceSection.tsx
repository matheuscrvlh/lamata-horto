import nossoEspaco from '../../../assets/banners/nossoEspaco.png'

export default function AboutSpaceSection() {
    return (
        <section className='bg-moss py-20 md:py-28 px-6 md:px-[10vw]'>
            <div className='grid md:grid-cols-2 gap-12 md:gap-20 items-center'>
                <div>
                    <p className='text-xs text-eucalyptus/50 tracking-widest uppercase mb-4'>
                        Nosso espaço
                    </p>
                    <h2 className='font-display text-4xl md:text-5xl text-ivory leading-tight mb-6'>
                        Um lugar para<br />desacelerar.
                    </h2>
                    <p className='text-eucalyptus text-sm leading-relaxed mb-8'>
                        Nosso espaço em Santa Rita recebe visitantes com hora marcada de
                        quinta a domingo. Venha ver as plantas de perto, tirar suas dúvidas e
                        escolher a que mais combina com você.
                    </p>
                    <div className='grid grid-cols-2 gap-6 text-sm mb-10'>
                        <div>
                            <p className='text-xs text-eucalyptus/50 tracking-widest uppercase mb-2'>
                                Funcionamento
                            </p>
                            <p className='text-ivory'>Qui — Dom</p>
                            <p className='text-eucalyptus'>Com hora marcada</p>
                        </div>
                        <div>
                            <p className='text-xs text-eucalyptus/50 tracking-widest uppercase mb-2'>
                                Endereço
                            </p>
                            <p className='text-ivory'>Santa Rita</p>
                            <p className='text-eucalyptus'>Nova Iguaçu — RJ</p>
                        </div>
                    </div>
                    <a
                        href='https://wa.me/5521966104173?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20visita%20ao%20Horto%20Lamata.'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-block text-xs tracking-widest uppercase bg-ivory text-dark-green px-8 py-3.5 hover:bg-stone transition-colors'
                    >
                        Agendar visita
                    </a>
                </div>
                <div className='hidden md:block aspect-4/5 bg-dark-green/40 overflow-hidden'>
                    <img
                        src={nossoEspaco}
                        alt='Nosso espaço'
                        className='w-full h-full object-cover'
                    />
                </div>
            </div>
        </section>
    )
}
