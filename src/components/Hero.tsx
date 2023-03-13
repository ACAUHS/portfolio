/** add animation for name and title */

 export const Hero = () => {
    return (
        <div className="container flex flex-col mx-auto h-screen bg-black justify-center">
            <div className="name font-face-bsr text-6xl self-center place-content-center h-fit mb-48">
                <span className="text-whiter underline decoration-inherit decoration-2 underline-offset-8">Joshua-Gabriel Camacho</span>
                <span className="flex justify-center font-face-bsr text-xl text-whiter mx-auto mt-2">Software Developer</span>
            </div>
        </div>
    )
}