import matheusJunger from '../../../assets/persons/matheusJunger.jpeg'

const team = [
    {
        name: 'Matheus Junger',
        role: 'Fundador',
        bio: 'Botânico formado pela UFRJ e fundador da Lamata. Cuida pessoalmente do acervo e do atendimento desde o início.',
        tags: 'Botânico · Paisagista · Lamata desde 2015',
        photo: matheusJunger,
    },
    {
        name: 'Fernando Rezende',
        role: 'Fundador',
        bio: 'Criador da Lamata e pai do Matheus. Foi ele quem deu origem ao horto e mantém vivo o espírito do projeto desde o primeiro dia.',
        tags: 'Fundador · Lamata desde 2015',
        photo: null,
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
                        <div className='aspect-4/3 bg-eucalyptus/15 w-full overflow-hidden'>
                            {member.photo && (
                                <img
                                    src={member.photo}
                                    alt={member.name}
                                    className='w-full h-full object-cover'
                                />
                            )}
                        </div>
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
