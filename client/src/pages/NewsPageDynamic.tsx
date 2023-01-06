const NewsPageDynamic = () => {
    return (
        <div className="w-full max-w-[1240px] mx-auto px-4 xl:px-0 py-4 minHeight text-white">
            <div id="card" className="">
                <h1 className="text-white font-extrabold text-3xl text-center p-4 mb-14">News</h1>
                <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">


                    <div className="flex flex-col md:flex-row overflow-hidden
                                        bg-gray-600 rounded-lg shadow-xl  mt-4 w-100 mx-2">
                        <div className="h-64 w-auto md:w-1/2">
                            <img className="inset-0 h-full w-full object-cover object-center"
                                 src="https://ih1.redbubble.net/image.3316883839.8937/ur,desk_mat_flatlay_prop,square,1000x1000.jpg"/>
                        </div>
                        <div className="w-full py-4 px-6 text-white flex flex-col justify-between">
                            <h3 className="font-semibold text-lg leading-tight truncate">News title</h3>
                            <p className="mt-2">
                                Dr. Perry Williams recently joined the faculty in the Department of Natural Resources
                                and Environmental Science at the University of Nevada, Reno, and was kind enough to
                                provide his biography to help us get to know him. Welcome to Nevada, Dr. Williams!
                            </p>
                            <p className="text-sm text-white uppercase tracking-wide font-semibold mt-2">
                                Author &bull; 01.01.2021
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row overflow-hidden
                                        bg-gray-600 rounded-lg shadow-xl  mt-4 w-100 mx-2">
                        <div className="h-64 w-auto md:w-1/2">
                            <img className="inset-0 h-full w-full object-cover object-center"
                                 src="https://cdn.oneesports.gg/cdn-data/2022/03/GenshinImpact_RaidenShogun_zoomed-1.jpg" alt=""/>
                        </div>
                        <div className="w-full py-4 px-6 text-white flex flex-col justify-between">
                            <h3 className="font-semibold text-lg leading-tight truncate">News title</h3>
                            <p className="mt-2">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged.
                            </p>
                            <p className="text-sm text-white uppercase tracking-wide font-semibold mt-2">
                                Author &bull; 01.01.2021
                            </p>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export {NewsPageDynamic}