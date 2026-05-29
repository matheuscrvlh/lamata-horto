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

export default function AboutPhilosophySection() {
    return (
        <section className='bg-dark-green py-20 md:py-28 px-6 md:px-[10vw]'>
            <div className='mb-12'>
                <p className='text-xs text-eucalyptus/50 tracking-widest uppercase mb-4'>
                    Filosofia
                </p>
                <h2 className='font-display text-4xl md:text-5xl text-ivory leading-tight'>
                    Como trabalhamos
                </h2>
            </div>
            <div className='grid md:grid-cols-3 gap-0'>
                {principles.map((item, idx) => (
                    <div
                        key={item.n}
                        className={`py-8 md:py-0 md:px-8 border-b md:border-b-0 md:border-l border-eucalyptus/15 flex flex-col gap-4 ${
                            idx === 0 ? 'md:border-l-0 md:pl-0' : ''
                        }`}
                    >
                        <span className='text-eucalyptus/30 text-xs font-mono'>{item.n}</span>
                        <p className='text-ivory font-medium text-sm'>{item.title}</p>
                        <p className='text-eucalyptus text-sm leading-relaxed'>{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
