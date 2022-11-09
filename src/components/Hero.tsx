function Hero() {

    return (
        <section className="flex md:flex-row flex-col-reverse sm:py-16 py-6 max-w-[1240px] mx-auto mt-10">
            <div className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6">
                <div className="flex flex-row  items-center py-[6px] px-4 bg-gradient-to-r from-gray-500/20 to-gray-400/20 rounded-[10px] mb-2">
                    <p className="font-normal text-[18px] leading-[30.8px] flex items-center">
                        <span className="text-white mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round"
        d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"/>
  <path strokeLinecap="round" strokeLinejoin="round"
        d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"/>
</svg>
                    </span>
                        <span className="text-white">Most popular</span>
                    </p>
                </div>

                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                        Mode 65
                    </h1>
                </div>

                <h1 className="font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
                    IN STOCK KIT
                </h1>
                <button className="text-white py-2 px-6 mt-8 bg-gradient-to-r from-cyan-300/80 to-cyan-200/80 rounded-2xl font-bold text-xl">Buy now</button>
            </div>

            <div className="flex-1 flex justify-center items-center md:my-0 my-10 relative">
                <img src="https://www.alexotos.com/wp-content/uploads/2021/08/DSCF0165.png" alt="billing" className="w-[100%] h-[100%] relative z-[5] object-contain" />

                {/* gradient start */}
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                {/* gradient end */}
            </div>

        </section>
    )
}

export default Hero
