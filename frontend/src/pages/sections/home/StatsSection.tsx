const stats = [
    { value: '10+', label: 'Anos de experiência' },
    { value: '500+', label: 'Espécies cultivadas' },
    { value: '1.000+', label: 'Clientes atendidos' },
    { value: '1 ano', label: 'De suporte pós-adoção' },
]

export default function StatsSection() {
    return (
        <section className='bg-dark-green py-16 px-6 md:px-[10vw]'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-px bg-eucalyptus/15'>
                {stats.map(s => (
                    <div
                        key={s.label}
                        className='bg-dark-green px-8 py-10 flex flex-col gap-2'
                    >
                        <span className='font-display text-4xl md:text-5xl text-ivory'>
                            {s.value}
                        </span>
                        <span className='text-xs text-eucalyptus tracking-wide'>
                            {s.label}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    )
}
