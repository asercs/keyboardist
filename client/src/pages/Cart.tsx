
const Cart = () => {
    return (
        <div className="w-full max-w-[1240px] mx-auto px-4 xl:px-0 py-4 minHeight">
            <div className="text-white">
                <div className="p-4">
                    <div className="font-extrabold grid grid-cols-6 hidden md:grid border-b-2 border-gray-500 pb-4">
                        <div className="col-span-3">
                            <h1>
                                Product
                            </h1>
                        </div>
                        <div className="col-span-1 text-right">
                            <h1>
                                Price
                            </h1>
                        </div>
                        <div className="col-span-1 text-right">
                            <h1>
                                Quantity
                            </h1>
                        </div>
                        <div className="col-span-1 text-right">
                            <h1>
                                Total
                            </h1>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-6 my-4 border-b-2 border-gray-500 pb-4">
                        <div className="col-span-2 md:col-span-3 flex">
                            <img src="https://cdn.shopify.com/s/files/1/0238/7342/1376/products/DSC_7562_180x.png?v=1666911980" alt="" className="max-h-32"/>
                            <h1 className="pl-4">NicePBT Vasilisa</h1>
                        </div>
                        <h1 className="text-left md:text-right col-span-2 md:col-span-1 py-2 md:py-0">84.99$</h1>
                        <div className="col-span-2 md:col-span-1 flex justify-start md:justify-end">
                            <div className="flex flex-row h-10 w-24 rounded-lg relative bg-transparent">
                                <button
                                    className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                    <span className="m-auto text-2xl font-thin">−</span>
                                </button>
                                <input type="text"
                                       className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                                       name="custom-input-number" value="0"></input>
                                <button
                                    className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                    <span className="my-auto text-2xl font-thin">+</span>
                                </button>
                            </div>
                        </div>

                        <h1 className="text-right hidden md:block">84.99$</h1>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-6 my-4 border-b-2 border-gray-500 pb-4">
                        <div className="col-span-2 md:col-span-3 flex">
                            <img src="https://cdn.shopify.com/s/files/1/0238/7342/1376/products/DSC_7562_180x.png?v=1666911980" alt="" className="max-h-32"/>
                            <h1 className="pl-4">NicePBT Vasilisa</h1>
                        </div>
                        <h1 className="text-left md:text-right col-span-2 md:col-span-1 py-2 md:py-0">84.99$</h1>
                        <div className="col-span-2 md:col-span-1 flex justify-start md:justify-end">
                            <div className="flex flex-row h-10 w-24 rounded-lg relative bg-transparent">
                                <button
                                    className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                    <span className="m-auto text-2xl font-thin">−</span>
                                </button>
                                <input type="text"
                                       className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                                       name="custom-input-number" value="0"></input>
                                <button
                                    className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                    <span className="my-auto text-2xl font-thin">+</span>
                                </button>
                            </div>
                        </div>

                        <h1 className="text-right hidden md:block">84.99$</h1>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-6 my-4 border-b-2 border-gray-500 pb-4">
                        <div className="col-span-2 md:col-span-3 flex">
                            <img src="https://cdn.shopify.com/s/files/1/0238/7342/1376/products/DSC_7562_180x.png?v=1666911980" alt="" className="max-h-32"/>
                            <h1 className="pl-4">NicePBT Vasilisa</h1>
                        </div>
                        <h1 className="text-left md:text-right col-span-2 md:col-span-1 py-2 md:py-0">84.99$</h1>
                        <div className="col-span-2 md:col-span-1 flex justify-start md:justify-end">
                            <div className="flex flex-row h-10 w-24 rounded-lg relative bg-transparent">
                                <button
                                    className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                    <span className="m-auto text-2xl font-thin">−</span>
                                </button>
                                <input type="text"
                                       className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                                       name="custom-input-number" value="0"></input>
                                <button
                                    className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                    <span className="my-auto text-2xl font-thin">+</span>
                                </button>
                            </div>
                        </div>

                        <h1 className="text-right hidden md:block">84.99$</h1>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between">
                        <div>
                            <h1 className="mb-2">Add a note to your order</h1>
                            <textarea name="" id="" className="rounded-md w-full md:w-80 h-20 text-black p-2"></textarea>
                        </div>
                        <div className="flex flex-col items-end">
                            <h1 className="mb-2 font-extrabold">Subtotal: 49.99$</h1>
                            <h2 className="mb-2">Taxes and shipping calculated at checkout</h2>
                            <button className="px-4 py-2 bg-cyan-300 font-bold rounded-md">CHECK OUT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Cart }