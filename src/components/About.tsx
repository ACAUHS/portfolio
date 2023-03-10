import img from '../IMG_6636.jpg'

export const About = () => {
    return (
        <div className="bg-whiter flex flex-col h-screen mx-auto">
            <div className="header font-face-bsr mx-auto p-10 text-4xl min-h-1/2">About</div>
            <div className="main-section mx-auto flex justify-center pt-12">
                <div className="container font-face-bsr text-xl w-1/4 pt-10 pr-24 mr-9">
                    My name is Joshua-Gabriel Camacho, and I am a Software Developer based in Toronto/Vancouver.
                    I mainly work in frontend development, and have an interest in learning the different technologies
                    available in the industry. I am also passionate about music: most notably hip-hop and jazz. 
                </div>
                <div className='photo w-1/4 flex-none border-4 border-black'>
                    <img src={img}></img>
                </div>
            </div>
        </div>
    )
}