import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Billing = () => {
    const [servicesOpen1, setservicesOpen1] = useState(false);
    const toggleServices1 = () => {
        setservicesOpen1(!servicesOpen1);
    };
    return (
        <div>
            <div className="grid place-items-center">
                <h5 className='text-xl'>Billing & Shipping details</h5>
                <div className="flex flex-col  md:flex-row 2xl:w-8/12 xl:w-8/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 gap-8">
                    <div className="md:w-1/2 w-full">
                        <form className="mx-auto bg-white p-8 shadow-md">
                            <h2 className="text-2xl font-semibold mb-4">Billing Credentials</h2>
                            <div className="mb-4">
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="Name" type="text" placeholder="your Name" />
                            </div>
                            <div className="mb-4">
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="Contact-Number" type="text" placeholder="Contact-Number" />
                            </div>
                            <div className="mb-4">
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="Email" type="text" placeholder="Email-id" />
                            </div>
                            <div className="mb-4">
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="Comment" type="text" placeholder="Address-1" />
                            </div>
                            <div className="mb-4">
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="Comment" type="text" placeholder="Address-2" />
                            </div>
                            <div className="mb-4">
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="Comment" type="text" placeholder="Your City" />
                            </div>
                            <div className="mb-4">
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="Comment" type="text" placeholder="Your state" />
                            </div>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit">Submit
                            </button>
                        </form>
                        <button onClick={toggleServices1} className="text-theme bg-gray-300 hover:text-gray-900 focus:outline-none h-12 w-80">
                                Archive Categories-1
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
                            </button>
                            {servicesOpen1 && (
                                <div className="origin-top-left absolute left-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                                    <div className="2xl:w-80 xl:w-80 lg:w-96 md:w-60 sm:w-[35rem] w-[28rem] mx-auto">
                                        <Link
                                            to="./Conference"
                                            className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                                        > Home Health
                                        </Link>
                                        <Link
                                            to="./Conference"
                                            className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                                        >Long Term Care
                                        </Link>
                                        <Link
                                            to="./Conference"
                                            className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                                        > PQRS
                                        </Link>
                                        <Link
                                            to="Conference"
                                            className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                                        >RAC Audits
                                        </Link>
                                        <Link
                                            to="Conference"
                                            className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                                        > ICD-10 Training
                                        </Link>
                                        <Link
                                            to="Conference"
                                            className="block px-4 py-2 text-sm text-theme hover:bg-gray-300"
                                        > ASCs
                                        </Link>
                                    </div>
                                </div>
                            )}

                    </div>
                    <div className="md:w-1/2 w-full">
                        <form className="mx-auto bg-white p-8 shadow-md">
                            <h2 className="text-2xl font-semibold mb-4">Shipping Credentials</h2>
                            <div className="mb-4">
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="Name" type="text" placeholder="your Name" />
                            </div>
                            <div className="mb-4">
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="Contact-Number" type="text" placeholder="Contact-Number" />
                            </div>
                            <div className="mb-4">
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="Email" type="text" placeholder="Email-id" />
                            </div>
                            <div className="mb-4">
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="Comment" type="text" placeholder="Address-1" />
                            </div>
                            <div className="mb-4">
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="Comment" type="text" placeholder="Address-2" />
                            </div>
                            <div className="mb-4">
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="Comment" type="text" placeholder="Your City" />
                            </div>
                            <div className="mb-4">
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="Comment" type="text" placeholder="Your state" />
                            </div>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit">Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Billing