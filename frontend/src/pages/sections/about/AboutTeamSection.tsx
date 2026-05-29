const team = [
    {
        name: 'Matheus Junger',
        role: 'Fundador',
        bio: 'Botânico formado pela UFRJ, Matheus passou dez anos estudando a flora da Mata Atlântica antes de fundar a Lamata. Para ele, cada planta carrega uma história de onde veio, como cresceu e como deve ser cuidada.',
        tags: 'Botânico · Paisagista · Lamata desde 2015',
    },
    {
        name: 'Fernando Rezende',
        role: 'Fundador',
        bio: 'Responsável pela expansão e operação da Lamata, Fernando traz a visão de negócio que permite ao horto crescer sem abrir mão dos seus princípios. É ele quem garante que cada experiência de compra reflita os valores da marca.',
        tags: 'Fundador · Gestão & Operações · Lamata desde 2018',
    },
]

export default function AboutTeamSection() {
    return (
        <section className='bg-stone py-20 md:py-24 px-6 md:px-[10vw]'>
            <div className='mb-12'>
                <p className='text-xs text-olive tracking-widest uppercase mb-4'>Equipe</p>
                <h2 className='font-display text-4xl md:text-5xl text-dark-green leading-tight'>
                    As pessoas por trás<br />do verde.
                </h2>
            </div>

            <div className='grid md:grid-cols-2 gap-8'>
                {team.map(member => (
                    <div key={member.name} className='bg-ivory p-8 flex flex-col gap-5'>
                        <div className='aspect-4/3 bg-eucalyptus/15 w-full' />
                        <div>
                            <p className='text-xs text-olive tracking-widest uppercase mb-2'>
                                {member.role}
                            </p>
                            <h3 className='font-display text-3xl text-dark-green mb-3'>
                                {member.name}
                            </h3>
                            <p className='text-sm text-moss leading-relaxed mb-4'>
                                {member.bio}
                            </p>
                            <p className='text-xs text-sage tracking-wide'>
                                {member.tags}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
