import React from 'react'
function Cart() {
    return (
        <div>
            <div className="grid place-items-center mt-5">
                <div className="flex flex-row 2xl:w-8/12 xl:w-8/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-between border-b pb-2">
                    <div className="flex flex-col w-100">
                        <p className="text-lg">My shopping cart</p>
                    </div>
                    <div className="flex flex-col w-100">
                        <p className="text-lg"><button className="px-2 py-1 bg-conf hover:bg-conf text-white">
                            <a href="https://tailwindui.com/documentation" className="text-white">Continue Shopping</a>
                        </button></p>
                    </div>
                    <div className="flex flex-col w-100">
                        <p className="text-lg"><button className="px-2 py-1 bg-conf hover:bg-conf text-white">
                            <a href="https://tailwindui.com/documentation" className="text-white">Empty cart</a>
                        </button></p>
                    </div>
                </div>
                <div className="flex flex-row 2xl:w-8/12 xl:w-8/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-between border-b pb-2">
                    <div className="flex flex-col w-100 py-2">
                        <p className="text-lg">Item</p>
                    </div>
                    <div className="flex flex-col w-100">
                        <p className="text-lg">product Name</p>
                    </div>
                    <div className="flex flex-col w-100">
                        <p className="text-lg">Quantity</p>
                    </div>
                    <div className="flex flex-col w-100">
                        <p className="text-lg">Price</p>
                    </div>
                </div>
                <div className="flex flex-row 2xl:w-8/12 xl:w-8/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-between border-b pb-2">
                    <div className="flex flex-col w-100">
                        <p className="text-lg">1</p>
                    </div>
                    <div className="flex flex-col w-100">
                        <p className="text-lg">HUMAN RESOURCE WEBINAR PACK Of 3</p>
                    </div>
                    <div className="flex flex-col w-100">
                        <p className="text-lg">
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                        </p>
                    </div>
                    <div className="flex flex-col w-100">
                        <p className="text-lg">10000</p>
                    </div>
                </div>
                <div className="flex flex-row 2xl:w-8/12 xl:w-8/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-between border-b pb-2">
                    <div className="flex flex-col w-100">
                    </div>
                    <div className="flex flex-col w-100">
                        <p className="text-lg">Recorded</p>
                    </div>
                    <div className="flex flex-col w-100 py-2">
                        <p className="text-lg"><button className="px-2 py-1 bg-conf hover:bg-conf text-white">
                            <a href="https://tailwindui.com/documentation" className="text-white">update</a>
                        </button></p>
                    </div>
                    <div className="flex flex-col w-100">
                    </div>
                </div>
                <div className="flex flex-row 2xl:w-8/12 xl:w-8/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-between border-b pb-2">
                    <div className="flex flex-col w-100">
                        <p>ENTER COUPON CODE</p>
                        <div class="relative mb-4 flex w-full flex-wrap items-stretch">
                            <input
                                type="search"
                                class="relative flex-auto border border-solid dark:focus:border-primary"
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="button-addon1" />
                            <button className="px-6 py-1 bg-conf hover:bg-conf text-white">
                                <a href="https://tailwindui.com/documentation" className="text-white">update</a>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col w-100">
                        <p className="text-lg"></p>
                    </div>
                     <div className="flex flex-col w-100 py-2">
                        <p className="text-lg">Sub Total :<span className='font-semibold'>$3,000.00</span></p> 
                        <p className="text-lg">Discount :<span className='font-semibold'>$0.00</span></p> 
                        <p className="text-lg">Total :<span className='font-semibold'>$3,000.00</span></p>
                        <button className="px-6 py-1 bg-conf hover:bg-conf text-white">
                            <a href="https://tailwindui.com/documentation" className="text-white">Proceed To Pay</a>
                        </button>
                    </div>
                    <div className="flex flex-col w-100">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart