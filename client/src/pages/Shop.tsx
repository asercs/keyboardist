import {Link} from "react-router-dom";
import Footer from "../components/Footer";
import React from "react";
import Select from "react-select";

const Shop = () => {


    const options = [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
    ]
    return (
        <div className="w-full max-w-[1240px] mx-auto px-4 xl:px-0 py-4">
            <div className="text-white">
                <h1 className="font-extrabold text-4xl text-center mb-10">Shop</h1>

                <div className="flex gap-4 text-lg font-bold justify-between">
                    <div id="filters" className="flex gap-4 flex-wrap">
                        <div className="item">
                            <Select options={options} isMulti placeholder="Availability" className="text-black" theme={(theme) => ({
                                ...theme,
                                colors: {
                                    ...theme.colors,
                                    neutral0: '#4B5563',
                                    primary25: 'hotpink',
                                    primary: 'black',
                                },
                            })}/>
                            {/*<details className="border-2 rounded-xl" open={isOpen}>*/}
                            {/*    <summary className="list-none p-3">Availability</summary>*/}
                            {/*    <div className="relative">*/}
                            {/*        <div className="p-4 bg-gray-600 rounded-2xl w-64 absolute top-4">*/}
                            {/*            <div className="border-b-2 p-2 font-bold">15 results</div>*/}
                            {/*            <div className="p-2">*/}
                            {/*                <ul>*/}
                            {/*                    <li>*/}
                            {/*                        <input id="default-checkbox" type="checkbox" value=""*/}
                            {/*                               className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>*/}
                            {/*                        <label htmlFor="default-checkbox"*/}
                            {/*                               className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default*/}
                            {/*                            checkbox</label>*/}
                            {/*                    </li>*/}
                            {/*                    <li>*/}
                            {/*                        <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>*/}
                            {/*                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Out of stock</label>*/}
                            {/*                    </li>*/}
                            {/*                </ul>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</details>*/}
                        </div>

                    </div>
                    <div id="sort">
                        <select
                            className="px-4 py-3 w-full bg-gray-600 rounded-md border-transparent focus:border-gray-500 focus:ring-0 text-md w-48">
                            <option value="">For what</option>
                            <option value="for-rent">For Rent</option>
                            <option value="for-sale">For Sale</option>
                        </select>
                    </div>




                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 my-10 pb-96">
                <Link to="/product">
                    <div className="bg-gray-600/40 rounded-md p-5 text-white flex flex-col justify-center items-center">
                        <div className="mb-4">
                            <img
                                src="https://cdn.shopify.com/s/files/1/1473/3902/products/0_96b338f0-446d-43ed-83a0-7a26c5d3dead_900x.jpg?v=1665646319"
                                alt="arrival" className="h-64 object-contain"/>
                        </div>
                        <div>
                            <h1 className="font-extrabold mb-2">Luna 80</h1>
                            <h2 className="font-bold">499 $</h2>
                        </div>
                    </div>
                </Link>

                <div className="bg-gray-600/40 rounded-md p-5 text-white flex flex-col justify-center items-center">
                    <div className="mb-4">
                        <img
                            src="https://cdn.shopify.com/s/files/1/1473/3902/products/0_96b338f0-446d-43ed-83a0-7a26c5d3dead_900x.jpg?v=1665646319"
                            alt="arrival" className="h-64 object-contain"/>
                    </div>
                    <div>
                        <h1 className="font-extrabold mb-2">Luna 80</h1>
                        <h2 className="font-bold">499 $</h2>
                    </div>
                </div>
                <div className="bg-gray-600/40 rounded-md p-5 text-white flex flex-col justify-center items-center">
                    <div className="mb-4">
                        <img
                            src="https://cdn.shopify.com/s/files/1/1473/3902/products/0_96b338f0-446d-43ed-83a0-7a26c5d3dead_900x.jpg?v=1665646319"
                            alt="arrival" className="h-64 object-contain"/>
                    </div>
                    <div>
                        <h1 className="font-extrabold mb-2">Luna 80</h1>
                        <h2 className="font-bold">499 $</h2>
                    </div>
                </div>
                <div className="bg-gray-600/40 rounded-md p-5 text-white flex flex-col justify-center items-center">
                    <div className="mb-4">
                        <img
                            src="https://cdn.shopify.com/s/files/1/1473/3902/products/0_96b338f0-446d-43ed-83a0-7a26c5d3dead_900x.jpg?v=1665646319"
                            alt="arrival" className="h-64 object-contain"/>
                    </div>
                    <div>
                        <h1 className="font-extrabold mb-2">Luna 80</h1>
                        <h2 className="font-bold">499 $</h2>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}




export {Shop}