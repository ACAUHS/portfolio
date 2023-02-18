export const NavBar = () => {
    return (
        <div className='navbar flex justify-between py-6 ml-24 mr-24 font-face-bsr text-lg'>
            <div className='mt-4 font-semibold'>JGC</div>
            <nav className='flex gap-8 mt-4 ml-12'>
                <a>About</a>
                <a>Skills</a>
                <a>Work</a>
                <a>Projects</a>
                <a>Contact</a>           
            </nav>
            <div className='bg-orange p-4 rounded'>
                <a className='contact-me shrink-0'>Contact Me!</a>
            </div>
        </div>
    )
}