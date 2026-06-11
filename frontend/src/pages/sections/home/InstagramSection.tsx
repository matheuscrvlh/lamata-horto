import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, viewport } from '../../../lib/animations'

import igProfile from '../../../assets/instagram/logo.jpg'
import ttProfile from '../../../assets/tiktok/logo.jpg'
import igFeed1 from '../../../assets/instagram/1.png'
import igFeed2 from '../../../assets/instagram/2.png'
import igFeed3 from '../../../assets/instagram/3.png'
import igFeed4 from '../../../assets/instagram/4.png'
import igFeed5 from '../../../assets/instagram/5.png'
import igFeed6 from '../../../assets/instagram/6.png'
import ttFeed1 from '../../../assets/tiktok/1.png'
import ttFeed2 from '../../../assets/tiktok/2.png'
import ttFeed3 from '../../../assets/tiktok/3.png'
import ttFeed4 from '../../../assets/tiktok/4.png'
import ttFeed5 from '../../../assets/tiktok/5.png'
import ttFeed6 from '../../../assets/tiktok/6.png'

const igFeedImages = [igFeed1, igFeed2, igFeed3, igFeed4, igFeed5, igFeed6]
const ttFeedImages = [ttFeed1, ttFeed2, ttFeed3, ttFeed4, ttFeed5, ttFeed6]

const INSTAGRAM_URL = 'https://www.instagram.com/entre_n0ss/'
const TIKTOK_URL = 'https://www.tiktok.com/@lamata.horto'
const tiktokCounts = ['38.4k', '12.1k', '61.7k', '9.3k', '27.5k', '44.2k']

const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 70 : -70, opacity: 0 }),
    center: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
    exit: (dir: number) => ({
        x: dir > 0 ? -70 : 70,
        opacity: 0,
        transition: { duration: 0.28 },
    }),
}

function InstagramCard() {
    return (
        <div className='bg-black border border-[#262626] font-sans'>
            {/* Top nav */}
            <div className='flex items-center justify-between px-4 py-3 border-b border-[#262626]'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.75' strokeLinecap='round' strokeLinejoin='round' className='w-5 h-5 text-white/40'>
                    <rect x='2' y='2' width='20' height='20' rx='5' ry='5' />
                    <circle cx='12' cy='12' r='4.5' />
                    <circle cx='17.5' cy='6.5' r='0.8' fill='currentColor' stroke='none' />
                </svg>
                <span className='text-sm font-semibold text-white tracking-tight'>entre_n0ss</span>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-5 h-5 text-white/40'>
                    <circle cx='5' cy='12' r='1.5' />
                    <circle cx='12' cy='12' r='1.5' />
                    <circle cx='19' cy='12' r='1.5' />
                </svg>
            </div>

            {/* Profile */}
            <div className='px-5 pt-5 pb-4'>
                <div className='flex items-center gap-5 mb-4'>
                    <div className='w-21.5 h-21.5 rounded-full shrink-0 overflow-hidden bg-[#1C1C1C] ring-2 ring-offset-2 ring-offset-black ring-[#262626]'>
                        <img src={igProfile} alt='entre_n0ss' className='w-full h-full object-cover' />
                    </div>
                    <div className='flex flex-1 justify-around text-center'>
                        <div>
                            <p className='text-sm font-semibold text-white'>10</p>
                            <p className='text-xs text-[#A8A8A8]'>publicações</p>
                        </div>
                        <div>
                            <p className='text-sm font-semibold text-white'>100</p>
                            <p className='text-xs text-[#A8A8A8]'>seguidores</p>
                        </div>
                        <div>
                            <p className='text-sm font-semibold text-white'>10</p>
                            <p className='text-xs text-[#A8A8A8]'>seguindo</p>
                        </div>
                    </div>
                </div>
                <p className='text-sm font-semibold text-white leading-snug'>entre_n0ss</p>
                <p className='text-xs text-[#A8A8A8] mt-1 leading-[1.6]'>
                    Entre nós.🌿<br />
                    Kokedamas artesanais.<br />
                    Produção manual • Design natural.<br />
                    📩 Sob encomenda.
                </p>
                <a href={INSTAGRAM_URL} target='_blank' rel='noopener noreferrer' className='block w-full mt-3 bg-[#0095F6] hover:bg-[#1877F2] text-white text-xs font-semibold text-center py-1.5 rounded-lg transition-colors'>
                    Seguir
                </a>
            </div>

            {/* Feed */}
            <div className='grid grid-cols-3 gap-px bg-[#262626]'>
                {igFeedImages.map((img, i) => (
                    <a key={i} href={INSTAGRAM_URL} target='_blank' rel='noopener noreferrer' className='aspect-square overflow-hidden bg-[#1C1C1C] block group'>
                        <img src={img} alt={`Post ${i + 1}`} className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300' />
                    </a>
                ))}
            </div>
        </div>
    )
}

function TikTokCard() {
    return (
        <div className='bg-black border border-[#2F2F2F] font-sans'>
            {/* Top nav */}
            <div className='flex items-center justify-between px-4 py-3 border-b border-[#2F2F2F]'>
                <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='w-5 h-5 text-white/40'>
                    <path d='M15 18l-6-6 6-6' />
                </svg>
                <span className='text-sm font-semibold text-white tracking-tight'>lamata.horto</span>
                <svg viewBox='0 0 24 24' fill='currentColor' className='w-5 h-5 text-white/40'>
                    <circle cx='5' cy='12' r='1.5' />
                    <circle cx='12' cy='12' r='1.5' />
                    <circle cx='19' cy='12' r='1.5' />
                </svg>
            </div>

            {/* Profile */}
            <div className='px-5 pt-5 pb-4 flex flex-col items-center text-center'>
                <div className='w-20 h-20 rounded-full overflow-hidden bg-[#1C1C1C] mb-3'>
                    <img src={ttProfile} alt='lamata.horto' className='w-full h-full object-cover' />
                </div>
                <p className='text-sm font-bold text-white mb-0.5'>Lamata Horto</p>
                <p className='text-xs text-white/50 mb-4'>@lamata.horto</p>

                <div className='flex gap-7 mb-4'>
                    <div>
                        <p className='text-base font-bold text-white'>126</p>
                        <p className='text-xs text-white/50'>seguindo</p>
                    </div>
                    <div>
                        <p className='text-base font-bold text-white'>19,6mil</p>
                        <p className='text-xs text-white/50'>seguidores</p>
                    </div>
                    <div>
                        <p className='text-base font-bold text-white'>1,4mi</p>
                        <p className='text-xs text-white/50'>curtidas</p>
                    </div>
                </div>

                <p className='text-xs text-white/60 leading-relaxed mb-4 max-w-xs'>
                    Bastidores do horto e a vida das plantas 🌿
                </p>

                <a href={TIKTOK_URL} target='_blank' rel='noopener noreferrer' className='block w-full max-w-xs bg-[#FE2C55] hover:bg-[#e0284e] text-white text-xs font-semibold text-center py-1.5 rounded-md transition-colors'>
                    Seguir
                </a>
            </div>

            {/* Tab bar */}
            <div className='flex border-t border-[#2F2F2F]'>
                {/* Grid tab — active */}
                <div className='flex-1 flex flex-col items-center py-2.5 gap-0.5 border-b-2 border-white'>
                    <svg viewBox='0 0 24 24' fill='currentColor' className='w-5 h-5 text-white'>
                        <rect x='2' y='2' width='6' height='9' rx='1' />
                        <rect x='10' y='2' width='6' height='9' rx='1' />
                        <rect x='18' y='2' width='4' height='9' rx='1' />
                        <rect x='2' y='13' width='6' height='9' rx='1' />
                        <rect x='10' y='13' width='6' height='9' rx='1' />
                        <rect x='18' y='13' width='4' height='9' rx='1' />
                    </svg>
                </div>

                {/* Bolsa tab */}
                <div className='flex-1 flex flex-col items-center py-2.5 gap-0.5 border-b-2 border-transparent'>
                    <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.6' strokeLinecap='round' strokeLinejoin='round' className='w-5 h-5 text-white/35'>
                        <path d='M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z' />
                        <line x1='3' y1='6' x2='21' y2='6' />
                        <path d='M16 10a4 4 0 01-8 0' />
                    </svg>
                </div>

                {/* Republi tab */}
                <div className='flex-1 flex flex-col items-center py-2.5 gap-0.5 border-b-2 border-transparent'>
                    <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.6' strokeLinecap='round' strokeLinejoin='round' className='w-5 h-5 text-white/35'>
                        <polyline points='17 1 21 5 17 9' />
                        <path d='M3 11V9a4 4 0 014-4h14' />
                        <polyline points='7 23 3 19 7 15' />
                        <path d='M21 13v2a4 4 0 01-4 4H3' />
                    </svg>
                </div>
            </div>

            {/* Video grid */}
            <div className='grid grid-cols-3 gap-px bg-[#2F2F2F]'>
                {ttFeedImages.map((img, i) => (
                    <a key={i} href={TIKTOK_URL} target='_blank' rel='noopener noreferrer' className='aspect-square overflow-hidden bg-[#1C1C1C] block group relative'>
                        <img src={img} alt={`Vídeo ${i + 1}`} className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300' />
                        <div className='absolute bottom-1 left-1 flex items-center gap-0.5 text-white text-[10px] font-semibold drop-shadow-sm'>
                            <svg viewBox='0 0 12 12' fill='currentColor' className='w-2.5 h-2.5'>
                                <path d='M3 2l7 4-7 4z' />
                            </svg>
                            {tiktokCounts[i]}
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

const platforms = [
    {
        label: 'Siga também',
        title: 'Kokedamas Artesanais',
        link: 'Ver perfil no Instagram',
        href: INSTAGRAM_URL,
        card: <InstagramCard />,
    },
    {
        label: 'Nos siga também',
        title: 'Lamata no TikTok',
        link: 'Ver perfil no TikTok',
        href: TIKTOK_URL,
        card: <TikTokCard />,
    },
]

export default function InstagramSection() {
    const [current, setCurrent] = useState(0)
    const [dir, setDir] = useState(1)

    const go = (d: 1 | -1) => {
        setDir(d)
        setCurrent(c => (c + d + 2) % 2)
    }

    const active = platforms[current]

    return (
        <section className='bg-ivory py-20 md:py-28 px-6 md:px-[10vw]'>
            <motion.div
                className='flex flex-col items-center'
                variants={fadeUp}
                initial='hidden'
                whileInView='visible'
                viewport={viewport}
            >
                <p className='text-xs text-olive tracking-widest uppercase mb-2'>
                    {active.label}
                </p>
                <h2 className='font-display text-4xl md:text-5xl text-dark-green mb-12 text-center'>
                    {active.title}
                </h2>

                {/* Card */}
                <div className='w-full max-w-117.5 overflow-hidden'>
                    <AnimatePresence mode='wait' custom={dir}>
                        <motion.div
                            key={current}
                            custom={dir}
                            variants={slideVariants}
                            initial='enter'
                            animate='center'
                            exit='exit'
                        >
                            {active.card}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation */}
                <div className='flex items-center gap-5 mt-6'>
                    <button
                        onClick={() => go(-1)}
                        className='text-olive/60 hover:text-dark-green transition-colors p-1'
                        aria-label='Anterior'
                    >
                        <svg viewBox='0 0 20 20' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='w-5 h-5'>
                            <path d='M12.5 15l-5-5 5-5' />
                        </svg>
                    </button>

                    <div className='flex gap-2'>
                        {platforms.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => { setDir(i > current ? 1 : -1); setCurrent(i) }}
                                className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${i === current ? 'bg-dark-green' : 'bg-olive/25'}`}
                                aria-label={`Ir para plataforma ${i + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={() => go(1)}
                        className='text-olive/60 hover:text-dark-green transition-colors p-1'
                        aria-label='Próximo'
                    >
                        <svg viewBox='0 0 20 20' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='w-5 h-5'>
                            <path d='M7.5 5l5 5-5 5' />
                        </svg>
                    </button>
                </div>

                <a
                    href={active.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='mt-4 text-xs text-olive hover:text-dark-green transition-colors tracking-wide'
                >
                    {active.link} →
                </a>
            </motion.div>
        </section>
    )
}
