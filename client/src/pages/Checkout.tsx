import React from "react";

// const Checkout = (props: string) => {
const Checkout = () => {
    return (
        <div className="w-full max-w-[1240px] mx-auto px-4 xl:px-0 py-4 h-screen overflow-auto my-auto">
            <div
                className="upper_card flex border border-cyan-300 p-4 text-xl text-white justify-center items-center gap-2 mb-4">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                </div>
                <div>You have 20 minutes or 3 attempts to complete the payment</div>
            </div>
            <div
                className="card  flex flex-col border border-cyan-300 p-4 text-xl text-white justify-center items-center gap-2">
                <h1 className="font-extrabold text-3xl md:text-2xl">Keyboardist</h1>

                <h2 className="font-bold text-2xl mb-2 md:mb-16">49.99$</h2>

                <form className="flex flex-wrap gap-3 w-full p-5">
                    <label className="relative w-full flex flex-col">
                        <span className="font-bold mb-3">Card number</span>
                        <input className="rounded-md peer text-black pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
                               type="text" name="card_number" placeholder="0000 0000 0000 0000"/>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                        </svg>
                    </label>

                    <label className="relative flex-1 flex flex-col">
                        <span className="font-bold mb-3">Expire date</span>
                        <input className="rounded-md peer text-black pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
                               type="text" name="expire_date" placeholder="MM/YY"/>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                    </label>

                    <label className="relative flex-1 flex flex-col">
                        <span className="font-bold flex items-center gap-3 mb-3">
                          CVC/CVV
                          <span className="relative group">
                            <span
                                className="hidden group-hover:flex justify-center items-center px-2 py-1 text-xs absolute -right-2 transform translate-x-full -translate-y-1/2 w-max top-1/2 bg-black text-white">It's a code on the back of your card!</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                          </span>
                        </span>
                        <input className="rounded-md peer text-black pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
                               type="text" name="card_cvc" placeholder="&bull;&bull;&bull;"/>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                        </svg>
                    </label>

                    <label className="relative w-full flex flex-col">
                        <span className="font-bold mb-3">Email</span>
                        <input className="rounded-md peer text-black pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
                               type="text" name="card_number" placeholder="example@keyboardist.kz"/>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6">
                            <path strokeLinecap="round"
                                  d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"/>
                        </svg>
                    </label>

                    <label className="relative w-full flex flex-col">
                        <span className="font-bold mb-3">Phone number</span>
                        <input className="rounded-md peer text-black pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
                               type="text" name="card_number" placeholder="+7 (777) - 777 - 77 - 77"/>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                        </svg>
                    </label>

                    <label className="relative w-full flex flex-col mt-6">
                        <button className="bg-cyan-300 py-3 font-bold rounded-md">Pay now</button>
                    </label>
                </form>
            </div>
        </div>
    );
}

export {Checkout};