import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function TopBar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', handler, { passive: true })
        return () => window.removeEventListener('scroll', handler)
    }, [])

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled || menuOpen
                ? 'bg-ivory/95 backdrop-blur-sm shadow-sm'
                : 'bg-transparent'
        }`}>
            <div className='flex justify-between items-center h-16 px-6 md:px-[10vw]'>
                <Link
                    to='/'
                    className={`font-display text-2xl font-medium tracking-[0.2em] transition-colors ${
                        scrolled || menuOpen ? 'text-dark-green' : 'text-ivory'
                    }`}
                >
                    LAMATA
                </Link>

                {/* Desktop */}
                <div className='hidden md:flex gap-8 items-center'>
                    <Link
                        to='/produtos'
                        className={`text-sm tracking-wide transition-colors hover:opacity-70 ${
                            scrolled ? 'text-moss' : 'text-ivory'
                        }`}
                    >
                        Catálogo
                    </Link>
                    <Link
                        to='/sobre'
                        className={`text-sm tracking-wide transition-colors hover:opacity-70 ${
                            scrolled ? 'text-moss' : 'text-ivory'
                        }`}
                    >
                        Sobre
                    </Link>
                    <a
                        href='#contato'
                        className={`text-xs tracking-widest uppercase px-6 py-2.5 transition-colors ${
                            scrolled
                                ? 'bg-dark-green text-ivory hover:bg-moss'
                                : 'bg-ivory text-dark-green hover:bg-stone'
                        }`}
                    >
                        Fale Conosco
                    </a>
                </div>

                {/* Mobile hamburger */}
                <button
                    className='md:hidden flex flex-col justify-center gap-1.5 w-8 h-8'
                    onClick={() => setMenuOpen(o => !o)}
                    aria-label='Abrir menu'
                >
                    <span className={`block w-6 h-px transition-all duration-300 origin-center ${
                        menuOpen ? 'rotate-45 translate-y-[7px] bg-dark-green' : scrolled ? 'bg-dark-green' : 'bg-ivory'
                    }`} />
                    <span className={`block w-6 h-px transition-all duration-300 ${
                        menuOpen ? 'opacity-0 bg-dark-green' : scrolled ? 'bg-dark-green' : 'bg-ivory'
                    }`} />
                    <span className={`block w-6 h-px transition-all duration-300 origin-center ${
                        menuOpen ? '-rotate-45 -translate-y-[7px] bg-dark-green' : scrolled ? 'bg-dark-green' : 'bg-ivory'
                    }`} />
                </button>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ${
                menuOpen ? 'max-h-56' : 'max-h-0'
            }`}>
                <div className='border-t border-stone/50 px-6 py-5 flex flex-col gap-5'>
                    <Link
                        to='/produtos'
                        className='text-sm tracking-wide text-moss hover:text-dark-green transition-colors'
                        onClick={() => setMenuOpen(false)}
                    >
                        Catálogo
                    </Link>
                    <Link
                        to='/sobre'
                        className='text-sm tracking-wide text-moss hover:text-dark-green transition-colors'
                        onClick={() => setMenuOpen(false)}
                    >
                        Sobre
                    </Link>
                    <a
                        href='#contato'
                        className='text-xs tracking-widest uppercase bg-dark-green text-ivory px-6 py-3 text-center hover:bg-moss transition-colors'
                        onClick={() => setMenuOpen(false)}
                    >
                        Fale Conosco
                    </a>
                </div>
            </div>
        </nav>
    )
}
