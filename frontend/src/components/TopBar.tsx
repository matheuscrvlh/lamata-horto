export default function TopBar() {
    return (
        <nav className='w-full h-15'>
            <div className='flex justify-between items-center h-full mx-[10vw] bg-white'>
                <div>
                    logo
                </div>
                <div className='flex gap-8 items-center'>
                    <p>Catálogo</p>
                    <p className='
                        bg-dark-green text-white rounded-xl px-4 py-1 cursor-pointer
                    '>
                        Fale Conosco
                    </p>
                </div>
            </div>
        </nav>
    )
}