/**add hover */

export const NavBar = () => {
    return (
        <div className='navbar flex justify-between mx-10 font-face-bsr text-lg content-center py-5'>
            <div className='font-semibold'>JGC</div>
            <nav className='flex gap-8'>
                <a>About</a>
                <a>Skills</a>
                <a>Work</a>
                <a>Projects</a>
                <a>Contact</a>           
            </nav>
        </div>
    )
}