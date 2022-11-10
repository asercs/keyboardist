function Newsletter() {
    return (
        <div className="w-full max-w-[1240px] text-white mx-auto">
            <div className="p-8 md:p-16 flex flex-col justify-center items-center">
                <h1 className="font-extrabold text-3xl">NEWSLETTER</h1>
                <hr className="w-8 my-4 mb-8"/>
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 w-full md:px-24">
                    <input type="text" className="h-10 md:px-10 rounded-lg z-0 focus:shadow focus:outline-none col-span-2 text-black" placeholder="Email"/>
                    <button className="bg-cyan-300 text-white hover:bg-cyan-500 font-bold py-2 px-0 rounded col-span-1 mt-4 md:mt-0">
                        Subscribe
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Newsletter