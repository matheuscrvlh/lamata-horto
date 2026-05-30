export default function AboutHistorySection() {
    return (
        <section className='py-20 md:py-28 px-6 md:px-[10vw] bg-ivory'>
            <div className='grid md:grid-cols-2 gap-12 md:gap-24 items-start'>
                <div>
                    <p className='text-xs text-olive tracking-widest uppercase mb-4'>
                        Nossa história
                    </p>
                    <h2 className='font-display text-4xl md:text-5xl lg:text-6xl text-dark-green leading-tight'>
                        Um horto nascido<br />de uma obsessão.
                    </h2>
                </div>
                <div className='flex flex-col gap-5 text-sm text-moss leading-relaxed md:pt-16'>
                    <p>
                        A Lamata nasceu em 2015 de uma ideia de Fernando Rezende, que junto com
                        seu filho Matheus decidiu criar um horto diferente do que existia por aqui.
                        Menos pressa, mais cuidado com cada planta.
                    </p>
                    <p>
                        Em vez de velocidade, escolhemos o tempo certo de cada espécie. Em vez de
                        escala, escolhemos procedência. Em vez de apenas vender, decidimos
                        acompanhar cada planta por pelo menos um ano após a adoção.
                    </p>
                    <p>
                        O que começou como um pequeno viveiro em Santa Rita, Nova Iguaçu,
                        se tornou um espaço de referência para quem entende que o verde dentro
                        de casa não é decoração. É presença.
                    </p>
                </div>
            </div>
        </section>
    )
}
