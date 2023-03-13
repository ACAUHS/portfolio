/**add hover */

export const NavBar = () => {
    return (
        <div className='navbar flex justify-between mx-10 pb-5 font-face-bsr text-lg'>
            <div className='mt-4 font-semibold'>JGC</div>
            <nav className='flex gap-8 mt-4 ml-12'>
                <a>About</a>
                <a>Skills</a>
                <a>Work</a>
                <a>Projects</a>
                <a>Contact</a>           
            </nav>
        </div>
    )
}