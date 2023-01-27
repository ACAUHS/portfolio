export const NavBar = () => {
    return (
        <div className='navbar flex justify-between p-6 ml-24 mr-24 text-whiter'>
            <div className='mt-4'>Logo</div>
            <ul className='flex gap-8 mt-4 ml-12'>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Projects</li>
                <li>Contact</li>           
            </ul>
            <div className='bg-orange p-4 rounded'>
                <div className='contact-me shrink-0'>Contact Me!</div>
            </div>
        </div>
    )
}