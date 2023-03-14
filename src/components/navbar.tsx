/**add hover */

export const NavBar = () => {
    return (
        <div className='navbar flex justify-between mx-10 font-face-bsr text-lg content-center py-5'>
            <a href="#" className='font-semibold hover:text-orange cursor-pointer'>JGC</a>
            <nav className='flex gap-8'>
                <a href="#About"className="hover:text-orange cursor-pointer">About</a>
                <a href="#"className="hover:text-orange cursor-pointer">Work</a>
                <a href="#"className="hover:text-orange cursor-pointer">Projects</a>
                <a href="#"className="hover:text-orange cursor-pointer">Contact</a>           
            </nav>
        </div>
    )
}