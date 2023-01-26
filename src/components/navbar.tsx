export const NavBar = () => {
    return (
        <div className='navbar flex justify-between p-6 bg-blai'>
            <div className='text-3xl text-yeli'>Logo</div>
            <ul className='flex gap-8 mr-8 mt-1 text-yeli'>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Projects</li>
                <li>Contact</li>           
            </ul>
        </div>
    )
}