/**add hover */

export const NavBar = () => {
    return (
        <div className='navbar flex justify-between mx-10 font-face-bsr text-lg content-center py-5'>
            <div className='font-semibold hover:text-orange cursor-pointer'>JGC</div>
            <nav className='flex gap-8'>
                <a className="hover:text-orange cursor-pointer">About</a>
                <a className="hover:text-orange cursor-pointer">Work</a>
                <a className="hover:text-orange cursor-pointer">Projects</a>
                <a className="hover:text-orange cursor-pointer">Contact</a>           
            </nav>
        </div>
    )
}