export const NavBar = () => {
    return (
        <div className='navbar flex justify-between p-6 bg-'>
            <div className='text-3xl'>Logo</div>
            <ul className='flex gap-8 mr-8'>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Projects</li>
                <li>Contact</li>           
            </ul>
        </div>
    )
}