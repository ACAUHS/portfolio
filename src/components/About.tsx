import img from '../IMG_6636.jpg'

export const About = () => {
    return (
        <div className="bg-whiter text-black flex flex-col h-screen justify-center items-center gap-8">
            <div className="header font-face-bsr text-4xl underline decoration-inherit decoration-2 underline-offset-4">About</div>
            <div className="main-section flex gap-10 justify-center">
                <div className="container font-face-bsr text-xl w-1/5">
                    My name is Joshua-Gabriel Camacho, and I am a Software Developer based in Toronto/Vancouver.
                    I mainly work in frontend development, and have an interest in learning the different technologies
                    available in the industry. I am also passionate about music: most notably hip-hop and jazz. 
                </div>
                <div className='photo w-1/6 border-black'>
                    <img className="border-4" src={img} />
                </div>
            </div>
        </div>
    )
}