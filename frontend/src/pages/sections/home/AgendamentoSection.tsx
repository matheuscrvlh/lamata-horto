import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, viewport } from '../../../lib/animations'

const monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
]

const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']

const features = [
    'Análise do espaço e da luz natural',
    'Indicação de espécies por ambiente',
    'Orçamento sem compromisso',
]

export default function AgendamentoSection() {
    const today = new Date()
    const [viewYear, setViewYear] = useState(today.getFullYear())
    const [viewMonth, setViewMonth] = useState(today.getMonth())
    const [selectedDay, setSelectedDay] = useState<number | null>(null)

    const firstWeekDay = new Date(viewYear, viewMonth, 1).getDay()
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate()

    const isPast = (day: number) => {
        if (viewYear < today.getFullYear()) return true
        if (viewYear === today.getFullYear() && viewMonth < today.getMonth()) return true
        if (viewYear === today.getFullYear() && viewMonth === today.getMonth() && day < today.getDate()) return true
        return false
    }

    const isCurrentMonth =
        viewYear === today.getFullYear() && viewMonth === today.getMonth()

    const prevMonth = () => {
        if (isCurrentMonth) return
        setSelectedDay(null)
        if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1) }
        else setViewMonth(m => m - 1)
    }

    const nextMonth = () => {
        setSelectedDay(null)
        if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1) }
        else setViewMonth(m => m + 1)
    }

    const whatsappUrl = () => {
        const msg = `Olá! Gostaria de agendar uma avaliação presencial do meu ambiente para o dia ${selectedDay} de ${monthNames[viewMonth]}. Podem me informar os horários disponíveis?`
        return `https://wa.me/5521966104173?text=${encodeURIComponent(msg)}`
    }

    // grid cells: null = empty, number = day
    const cells: (number | null)[] = [
        ...Array(firstWeekDay).fill(null),
        ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
    ]

    return (
        <section className='bg-white py-24 md:py-32 px-6 md:px-[10vw]'>
            <div className='grid md:grid-cols-2 gap-16 md:gap-28 items-center'>

                {/* Esquerda */}
                <motion.div
                    variants={fadeUp}
                    initial='hidden'
                    whileInView='visible'
                    viewport={viewport}
                >
                    <p className='text-xs text-olive tracking-widest uppercase mb-4'>Consultoria</p>
                    <h2 className='font-display text-5xl md:text-6xl lg:text-7xl text-dark-green leading-[1.05] mb-6'>
                        Vamos até<br />você.
                    </h2>
                    <p className='text-moss text-sm leading-relaxed mb-10 max-w-xs'>
                        Avaliamos seu ambiente, indicamos as espécies certas para cada canto
                        e saímos com um plano real na mão.
                    </p>
                    <div className='flex flex-col gap-4'>
                        {features.map(f => (
                            <div key={f} className='flex items-start gap-3'>
                                <span className='mt-1.5 w-1 h-1 rounded-full bg-olive shrink-0' />
                                <p className='text-sm text-moss'>{f}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Direita — Calendário */}
                <motion.div
                    variants={fadeUp}
                    initial='hidden'
                    whileInView='visible'
                    viewport={viewport}
                >
                    <p className='text-xs text-olive tracking-widest uppercase mb-6'>
                        Escolha uma data
                    </p>

                    <div className='border border-dark-green/15 p-5 md:p-6'>

                        {/* Header do mês */}
                        <div className='flex items-center justify-between mb-5'>
                            <button
                                onClick={prevMonth}
                                disabled={isCurrentMonth}
                                className='w-7 h-7 flex items-center justify-center text-dark-green/40 hover:text-dark-green disabled:opacity-20 disabled:cursor-not-allowed transition-colors'
                                aria-label='Mês anterior'
                            >
                                <svg width='7' height='12' viewBox='0 0 7 12' fill='none'>
                                    <path d='M6 1L1 6L6 11' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                </svg>
                            </button>

                            <p className='font-display text-lg text-dark-green'>
                                {monthNames[viewMonth]} {viewYear}
                            </p>

                            <button
                                onClick={nextMonth}
                                className='w-7 h-7 flex items-center justify-center text-dark-green/40 hover:text-dark-green transition-colors'
                                aria-label='Próximo mês'
                            >
                                <svg width='7' height='12' viewBox='0 0 7 12' fill='none'>
                                    <path d='M1 1L6 6L1 11' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                </svg>
                            </button>
                        </div>

                        {/* Cabeçalho dos dias da semana */}
                        <div className='grid grid-cols-7 mb-2'>
                            {weekDays.map(d => (
                                <div key={d} className='text-center text-[10px] text-sage tracking-widest uppercase py-1'>
                                    {d}
                                </div>
                            ))}
                        </div>

                        {/* Grade de dias */}
                        <div className='grid grid-cols-7 gap-y-1'>
                            {cells.map((day, i) => {
                                if (day === null) return <div key={`empty-${i}`} />

                                const past = isPast(day)
                                const selected = selectedDay === day
                                const isToday = isCurrentMonth && day === today.getDate()

                                return (
                                    <button
                                        key={day}
                                        onClick={() => !past && setSelectedDay(day)}
                                        disabled={past}
                                        className={`
                                            relative mx-auto flex items-center justify-center
                                            w-8 h-8 text-xs rounded-full transition-all duration-150
                                            ${selected
                                                ? 'bg-dark-green text-ivory font-semibold'
                                                : past
                                                    ? 'text-sage/40 cursor-not-allowed'
                                                    : 'text-dark-green hover:bg-dark-green/10 cursor-pointer'
                                            }
                                        `}
                                    >
                                        {day}
                                        {isToday && !selected && (
                                            <span className='absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-olive' />
                                        )}
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    {/* Confirmação + botão */}
                    <div className='mt-5'>
                        {selectedDay ? (
                            <p className='text-xs text-olive tracking-wide mb-4'>
                                {selectedDay} de {monthNames[viewMonth]} selecionado
                            </p>
                        ) : (
                            <p className='text-xs text-sage tracking-wide mb-4'>
                                Selecione um dia para continuar
                            </p>
                        )}

                        <a
                            href={whatsappUrl()}
                            target='_blank'
                            rel='noopener noreferrer'
                            className={`block w-full text-xs tracking-widest uppercase text-center px-8 py-5 transition-colors ${
                                selectedDay
                                    ? 'bg-dark-green text-ivory hover:bg-moss'
                                    : 'bg-dark-green/20 text-dark-green/30 pointer-events-none'
                            }`}
                        >
                            Agendar pelo WhatsApp
                        </a>

                        <p className='text-xs text-sage mt-4 tracking-wide'>
                            Atendemos no Rio de Janeiro · Resposta em até 24h
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
