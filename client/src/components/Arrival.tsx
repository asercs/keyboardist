function Arrival() {

    return (
        <div className="w-full max-w-[1240px] mx-auto px-4 xl:px-0 py-4">
            <div className="text-white">
                <h1 className="font-extrabold text-2xl">New arrival</h1>
                    <h2 className="font-bold flex mt-1">show all
                        <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-4 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
</svg>

                </span>
                    </h2>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 my-10">
                <div className="bg-gray-600/40 rounded-md p-5 text-white flex flex-col justify-center items-center">
                    <div className="mb-4">
                        <img src="https://cdn.shopify.com/s/files/1/1473/3902/products/0_96b338f0-446d-43ed-83a0-7a26c5d3dead_900x.jpg?v=1665646319" alt="arrival" className="h-64 object-contain"/>
                    </div>
                    <div>
                        <h1 className="font-extrabold mb-2">Luna 80</h1>
                        <h2 className="font-bold">499 $</h2>
                    </div>
                </div>
                <div className="bg-gray-600/40 rounded-md p-5 text-white flex flex-col justify-center items-center">
                    <div className="mb-4">
                        <img src="https://cdn.shopify.com/s/files/1/1473/3902/products/1_1fe7a8c4-57e4-4d1a-8c18-725a4b20ff57_900x.jpg?v=1651044067" alt="arrival" className="h-64 object-contain"/>
                    </div>
                    <div>
                        <h1 className="font-extrabold mb-2">KBD75 V3</h1>
                        <h2 className="font-bold">199 $</h2>
                    </div>

                </div>
                <div className="bg-gray-600/40 rounded-md p-5 text-white flex flex-col justify-center items-center">
                    <div className="mb-4">
                        <img src="https://cdn.shopify.com/s/files/1/1473/3902/products/9f852ab494b8e0e7f5e8c55bdd487e76_900x.jpg?v=1654413010" alt="arrival" className="h-64 object-contain"/>
                    </div>
                    <div>
                        <h1 className="font-extrabold mb-2">KBD67 MKII</h1>
                        <h2 className="font-bold">269 $</h2>
                    </div>

                </div>
                <div className="bg-gray-600/40 rounded-md p-5 text-white flex flex-col justify-between items-center">
                    <div className="mb-4">
                        <img src="https://cdn.shopify.com/s/files/1/1473/3902/products/fb676d8db957bd5d94c3e1033c5a8175_900x.jpg?v=1662531218" alt="arrival" className="h-64 object-contain"/>
                    </div>
                    <div>
                        <h1 className="font-extrabold mb-2">KBDPad</h1>
                        <h2 className="font-bold">119 $</h2>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Arrival