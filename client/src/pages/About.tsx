const About = () => {
    return (
        <div className="w-full max-w-[1240px] mx-auto px-4 xl:px-0 py-4 minHeight text-white">
            <div className="p-4 my-16 text-center">
                <h1 className="font-extrabold text-2xl mb-6">Introduction</h1>
                <h1 className="font-bold text-xl">Keyboardist is a website that helps geeks, gamers and everyone else access to world of mechanical keyboards.
                    You can find yourself a brand new or used keyboard, it can be built or barebones, mass market and even custom.
                </h1>
            </div>
            <div className="flex">
                <div className="flex flex-1 flex-col p-4 justify-center">
                    <h1 className="font-extrabold text-2xl mb-6">Who We Are</h1>
                    <h1 className="font-bold text-xl">
                        Our dedicated team of service masters and consults are passionate about helping you, and providing you everything you might need.
                        We are here to help you find the right keyboard for you, and we are here to help you with any questions you might have.
                    </h1>
                </div>
                <div className="flex flex-1 justify-center items-center">
                    <img src="https://sun9-87.userapi.com/impg/OpHTxdHbnae7kCbSsky18F72q7XR4e3REj-nTA/YCy4Hn94N1s.jpg?size=2000x2000&quality=95&sign=194d43a23a831e10d22ba50619804aec&type=album" alt="" className="max-h-80"/>
                </div>



            </div>
        </div>
    )
}

export { About }