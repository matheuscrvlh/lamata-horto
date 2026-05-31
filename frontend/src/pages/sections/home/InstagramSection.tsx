import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '../../../lib/animations'

import profileImg from '../../../assets/instagram/logo.jpg'
import feed1 from '../../../assets/instagram/1.png'
import feed2 from '../../../assets/instagram/2.png'
import feed3 from '../../../assets/instagram/3.png'
import feed4 from '../../../assets/instagram/4.png'
import feed5 from '../../../assets/instagram/5.png'
import feed6 from '../../../assets/instagram/6.png'

const feedImages = [feed1, feed2, feed3, feed4, feed5, feed6]

const INSTAGRAM_URL = 'https://www.instagram.com/entre_n0ss/'

export default function InstagramSection() {
    return (
        <section className='bg-ivory py-20 md:py-28 px-6 md:px-[10vw]'>
            <motion.div
                className='flex flex-col items-center'
                variants={fadeUp}
                initial='hidden'
                whileInView='visible'
                viewport={viewport}
            >
                <p className='text-xs text-olive tracking-widest uppercase mb-2'>Siga também</p>
                <h2 className='font-display text-4xl md:text-5xl text-dark-green mb-12 text-center'>
                    Kokedamas Artesanais
                </h2>

                {/* Card Instagram dark */}
                <div className='w-full max-w-117.5 bg-black border border-[#262626] font-sans'>

                    {/* Top nav */}
                    <div className='flex items-center justify-between px-4 py-3 border-b border-[#262626]'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='1.75'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            className='w-5 h-5 text-white/40'
                        >
                            <rect x='2' y='2' width='20' height='20' rx='5' ry='5' />
                            <circle cx='12' cy='12' r='4.5' />
                            <circle cx='17.5' cy='6.5' r='0.8' fill='currentColor' stroke='none' />
                        </svg>

                        <span className='text-sm font-semibold text-white tracking-tight'>
                            entre_n0ss
                        </span>

                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                            className='w-5 h-5 text-white/40'
                        >
                            <circle cx='5' cy='12' r='1.5' />
                            <circle cx='12' cy='12' r='1.5' />
                            <circle cx='19' cy='12' r='1.5' />
                        </svg>
                    </div>

                    {/* Perfil */}
                    <div className='px-5 pt-5 pb-4'>
                        <div className='flex items-center gap-5 mb-4'>
                            {/* Avatar */}
                            <div className='w-21.5 h-21.5 rounded-full shrink-0 overflow-hidden bg-[#1C1C1C] ring-2 ring-offset-2 ring-offset-black ring-[#262626]'>
                                <img src={profileImg} alt='entre_n0ss' className='w-full h-full object-cover' />
                            </div>

                            {/* Stats */}
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

                        {/* Nome e bio */}
                        <p className='text-sm font-semibold text-white leading-snug'>entre_n0ss</p>
                        <p className='text-xs text-[#A8A8A8] mt-1 leading-[1.6]'>
                            Entre nós.🌿<br />
                            Kokedamas artesanais.<br />
                            Produção manual • Design natural.<br />
                            📩 Sob encomenda.
                        </p>

                        {/* Botão seguir */}
                        <a
                            href={INSTAGRAM_URL}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='block w-full mt-3 bg-[#0095F6] hover:bg-[#1877F2] text-white text-xs font-semibold text-center py-1.75 rounded-lg transition-colors'
                        >
                            Seguir
                        </a>
                    </div>

                    {/* Feed grid */}
                    <motion.div
                        className='grid grid-cols-3 gap-px bg-[#262626]'
                        variants={stagger}
                        initial='hidden'
                        whileInView='visible'
                        viewport={viewport}
                    >
                        {feedImages.map((img, i) => (
                            <motion.a
                                key={i}
                                href={INSTAGRAM_URL}
                                target='_blank'
                                rel='noopener noreferrer'
                                variants={fadeUp}
                                className='aspect-square overflow-hidden bg-[#1C1C1C] block group'
                            >
                                <img
                                    src={img}
                                    alt={`Post ${i + 1}`}
                                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                                />
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

                <a
                    href={INSTAGRAM_URL}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='mt-6 text-xs text-olive hover:text-dark-green transition-colors tracking-wide'
                >
                    Ver perfil completo →
                </a>
            </motion.div>
        </section>
    )
}
