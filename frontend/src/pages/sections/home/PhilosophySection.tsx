const principles = [
    {
        n: '01',
        title: 'Cultivo lento',
        text: 'Nada é forçado. Respeitamos o ciclo de cada espécie, do estaquio à entrega.',
    },
    {
        n: '02',
        title: 'Origem rastreável',
        text: 'Sementes e mudas com procedência conhecida, sem extração predatória.',
    },
    {
        n: '03',
        title: 'Acompanhamento',
        text: 'Um ano de consultoria pós-adoção, com nosso paisagista por mensagem.',
    },
]

export default function PhilosophySection() {
    return (
        <article className='bg-dark-green py-20 md:py-28 px-6 md:px-[10vw]'>
            <div className='grid md:grid-cols-2 gap-16 md:gap-24 items-start'>
                <div>
                    <p className='text-xs text-eucalyptus/50 tracking-widest uppercase mb-4'>
                        Filosofia
                    </p>
                    <h2 className='font-display text-4xl md:text-5xl lg:text-6xl text-ivory leading-tight mb-6'>
                        O verde não é<br />decoração.
                    </h2>
                    <p className='text-eucalyptus text-sm leading-relaxed max-w-sm'>
                        Fundado em 2015 pelo botânico Matheus Junger, nosso horto nasceu de uma
                        obsessão simples: trazer para dentro de casa a calma de uma mata bem cuidada.
                    </p>
                </div>

                <div className='flex flex-col'>
                    {principles.map((item, idx) => (
                        <div
                            key={item.n}
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
                        </div>
                    ))}
                </div>
            </div>
        </article>
    )
}
