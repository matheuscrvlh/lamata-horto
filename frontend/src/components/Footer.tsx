import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className='bg-dark-green px-6 md:px-[10vw]'>
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-8 py-12 border-b border-eucalyptus/15'>
                <Link to='/' className='font-display text-2xl tracking-[0.2em] text-ivory'>
                    LAMATA
                </Link>
                <div className='flex gap-8 text-sm text-eucalyptus'>
                    <Link to='/produtos' className='hover:text-ivory transition-colors tracking-wide'>
                        Catálogo
                    </Link>
                    <a href='#contato' className='hover:text-ivory transition-colors tracking-wide'>
                        Contato
                    </a>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-2 py-6'>
                <p className='text-eucalyptus/40 text-xs tracking-wide'>
                    2026 © Lamata — Todos os direitos reservados.
                </p>
                <a
                    href='https://www.mthcode.com.br'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-eucalyptus/30 text-xs hover:text-eucalyptus/60 transition-colors'
                >
                    Desenvolvido por MTHCODE
                </a>
            </div>
        </footer>
    )
}
