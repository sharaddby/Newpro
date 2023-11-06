import React from 'react';
import Tab from './Tab';
const tabs = [
    {
        label: 'Overview',
        content: <div>
            <div className="sm:w-11/12 w-100 justify-center mx-auto">
                <h4 className="text-2xl text-green-900 font-bold">Medical Coding Online Store</h4>
                <h4 className="text-2xl mt-5">Medical Coding Book Bundles</h4>
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white my-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white my-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white my-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

        </div>
    },
    {
        label: 'Bundles',
        content: <div>
            <div className="sm:w-11/12 w-100 justify-center mx-auto">
                <h4 className="text-2xl text-green-900 font-bold">Medical Coding Online Store</h4>
                <h4 className="text-2xl mt-5">Medical Coding Book Bundles</h4>
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white my-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white my-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white my-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

        </div>
    },
    {
        label: 'Bundles + Codify by AAPC',
        content: <div>
            <div className="sm:w-11/12 w-100 justify-center mx-auto">
                <h4 className="text-2xl text-green-900 font-bold">Medical Coding Online Store</h4>
                <h4 className="text-2xl mt-5">Medical Coding Book Bundles</h4>
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white my-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white my-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white my-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

        </div>
    },
    {
        label: 'ICD-10',
        content: <div>
            <div className="sm:w-11/12 w-100 justify-center mx-auto">
                <h4 className="text-2xl text-green-900 font-bold">Medical Coding Online Store</h4>
                <h4 className="text-2xl mt-5">Medical Coding Book Bundles</h4>
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white my-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white my-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white my-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

        </div>
    },
    {
        label: 'CPT',
        content: <div>
            <div className="sm:w-11/12 w-100 justify-center mx-auto">
                <h4 className="text-2xl text-green-900 font-bold">Medical Coding Online Store</h4>
                <h4 className="text-2xl mt-5">Medical Coding Book Bundles</h4>
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white my-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white my-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white my-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

        </div>
    },
    {
        label: 'HCPCS',
        content: <div>
            <div className="sm:w-11/12 w-100 justify-center mx-auto">
                <h4 className="text-2xl text-green-900 font-bold">Medical Coding Online Store</h4>
                <h4 className="text-2xl mt-5">Medical Coding Book Bundles</h4>
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white my-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white my-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white my-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

        </div>
    },
    {
        label: 'Coders Specialty Guides',
        content: <div>
            <div className="sm:w-11/12 w-100 justify-center mx-auto">
                <h4 className="text-2xl text-green-900 font-bold">Medical Coding Online Store</h4>
                <h4 className="text-2xl mt-5">Medical Coding Book Bundles</h4>
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white my-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white my-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white my-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

        </div>
    },
    {
        label: 'Reference Guides',
        content: <div>
            <div className="sm:w-11/12 w-100 justify-center mx-auto">
                <h4 className="text-2xl text-green-900 font-bold">Medical Coding Online Store</h4>
                <h4 className="text-2xl mt-5">Medical Coding Book Bundles</h4>
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white my-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white my-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white my-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

        </div>
    },
    {
        label: 'Medical Coding Books FAQs',
        content: <div>
            <div className="sm:w-11/12 w-100 justify-center mx-auto">
                <h4 className="text-2xl text-green-900 font-bold">Medical Coding Online Store</h4>
                <h4 className="text-2xl mt-5">Medical Coding Book Bundles</h4>
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white my-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white my-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white my-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

        </div>
    },
    {
        label: 'Medical Coding Book Updates',
        content: <div>
            <div className="sm:w-11/12 w-100 justify-center mx-auto">
                <h4 className="text-2xl text-green-900 font-bold">Medical Coding Online Store</h4>
                <h4 className="text-2xl mt-5">Medical Coding Book Bundles</h4>
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white my-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white my-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white my-2">
                        <img src="../book.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

        </div>
    },
    {
        label: 'Medical Coding eNewsletters',
        content: <div>
            <div className="sm:w-11/12 w-100 justify-center mx-auto">
                <h4 className="text-2xl text-green-900 font-bold mb-5">Medical Coding Online Store</h4>
                <img src="../hero.png" alt="gh" className="w-full" />
                <p className="">Get insights into the code changes that affect you, learn from case studies to improve revenue,
                     and discover trouble-shooting strategies to overcome your reporting challenges with AAPC's 
                     specialty-specific medical coding eNewsletters - available in 21 specialties. 6 AAPC CEUs 
                     are included in your annual subscription.</p>
                <ul className='list-disc pl-10'>
                    <li>Get insights into the code changes that affect you</li>
                    <li>Get insights into the code changes that affect you</li>
                    <li>Get insights into the code changes that affect you</li>
                    <li>Get insights into the code changes that affect you</li>
                    <li>Get insights into the code changes that affect you</li>
                </ul>
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                    <div className="bg-white mt-2">
                        <img src="../ebook.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../ebook.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../ebook.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../ebook.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../ebook.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../ebook.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../ebook.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../ebook.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../ebook.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white my-2">
                        <img src="../ebook.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white my-2">
                        <img src="../ebook.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white my-2">
                        <img src="../ebook.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    },
    {
        label: 'Compliance eNewsletters',
        content: <div><div className="sm:w-11/12 w-100 justify-center mx-auto">
        <h4 className="text-2xl text-green-900 font-bold mb-5">Medical Coding Online Store</h4>
        <img src="../hero.png" alt="gh" className="w-full" />
        <p className="">Get insights into the code changes that affect you, learn from case studies to improve revenue,
             and discover trouble-shooting strategies to overcome your reporting challenges with AAPC's 
             specialty-specific medical coding eNewsletters - available in 21 specialties. 6 AAPC CEUs 
             are included in your annual subscription.</p>
        <ul className='list-disc pl-10'>
            <li>Get insights into the code changes that affect you</li>
            <li>Get insights into the code changes that affect you</li>
            <li>Get insights into the code changes that affect you</li>
            <li>Get insights into the code changes that affect you</li>
            <li>Get insights into the code changes that affect you</li>
        </ul>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
            <div className="bg-white mt-2">
                <img src="../ebook.png" alt="gh" className="w-full" />
                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                <h5 className="pl-5">$239.99 $119.99</h5>
                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                    Learn More
                </button>
            </div>
            <div className="bg-white mt-2">
                <img src="../ebook.png" alt="gh" className="w-full" />
                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                <h5 className="pl-5">$239.99 $119.99</h5>
                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                    Learn More
                </button>
            </div>
            <div className="bg-white mt-2">
                <img src="../ebook.png" alt="gh" className="w-full" />
                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                <h5 className="pl-5">$239.99 $119.99</h5>
                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                    Learn More
                </button>
            </div>
            <div className="bg-white mt-2">
                <img src="../ebook.png" alt="gh" className="w-full" />
                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                <h5 className="pl-5">$239.99 $119.99</h5>
                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                    Learn More
                </button>
            </div>
            <div className="bg-white mt-2">
                <img src="../ebook.png" alt="gh" className="w-full" />
                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                <h5 className="pl-5">$239.99 $119.99</h5>
                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                    Learn More
                </button>
            </div>
            <div className="bg-white mt-2">
                <img src="../ebook.png" alt="gh" className="w-full" />
                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                <h5 className="pl-5">$239.99 $119.99</h5>
                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                    Learn More
                </button>
            </div>
            <div className="bg-white mt-2">
                <img src="../ebook.png" alt="gh" className="w-full" />
                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                <h5 className="pl-5">$239.99 $119.99</h5>
                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                    Learn More
                </button>
            </div>
            <div className="bg-white mt-2">
                <img src="../ebook.png" alt="gh" className="w-full" />
                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                <h5 className="pl-5">$239.99 $119.99</h5>
                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                    Learn More
                </button>
            </div>
            <div className="bg-white mt-2">
                <img src="../ebook.png" alt="gh" className="w-full" />
                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                <h5 className="pl-5">$239.99 $119.99</h5>
                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                    Learn More
                </button>
            </div>
            <div className="bg-white my-2">
                <img src="../ebook.png" alt="gh" className="w-full" />
                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                <h5 className="pl-5">$239.99 $119.99</h5>
                <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                    Learn More
                </button>
            </div>
            <div className="bg-white my-2">
                <img src="../ebook.png" alt="gh" className="w-full" />
                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                <h5 className="pl-5">$239.99 $119.99</h5>
                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                    Learn More
                </button>
            </div>
            <div className="bg-white my-2">
                <img src="../ebook.png" alt="gh" className="w-full" />
                <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                <h5 className="pl-5">$239.99 $119.99</h5>
                <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                    Learn More
                </button>
            </div>
        </div>
    </div>

        </div>
    },
    {
        label: 'Post-Acute eNewsletters',
        content: <div>
            <div className="sm:w-11/12 w-100 justify-center mx-auto">
                <h4 className="text-2xl text-green-900 font-bold mb-5">Medical Coding Online Store</h4>
                <img src="../hero.png" alt="gh" className="w-full" />
                <p className="">Get insights into the code changes that affect you, learn from case studies to improve revenue,
                     and discover trouble-shooting strategies to overcome your reporting challenges with AAPC's 
                     specialty-specific medical coding eNewsletters - available in 21 specialties. 6 AAPC CEUs 
                     are included in your annual subscription.</p>
                <ul className='list-disc pl-10'>
                    <li>Get insights into the code changes that affect you</li>
                    <li>Get insights into the code changes that affect you</li>
                    <li>Get insights into the code changes that affect you</li>
                    <li>Get insights into the code changes that affect you</li>
                    <li>Get insights into the code changes that affect you</li>
                </ul>
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                    <div className="bg-white mt-2">
                        <img src="../ebook.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../ebook.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../ebook.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../ebook.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../ebook.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../ebook.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../ebook.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../ebook.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../ebook.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white my-2">
                        <img src="../ebook.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white my-2">
                        <img src="../ebook.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white my-2">
                        <img src="../ebook.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

        </div>
    },
    {
        label: 'Tech & Innovation in Healthcare eNewsletter New!',
        content: <div>
            <div className="sm:w-11/12 w-100 justify-center mx-auto">
                <h4 className="text-2xl text-green-900 font-bold mb-5">Medical Coding Online Store</h4>
                <img src="../hero.png" alt="gh" className="w-full" />
                <p className="">Get insights into the code changes that affect you, learn from case studies to improve revenue,
                     and discover trouble-shooting strategies to overcome your reporting challenges with AAPC's 
                     specialty-specific medical coding eNewsletters - available in 21 specialties. 6 AAPC CEUs 
                     are included in your annual subscription.</p>
                <ul className='list-disc pl-10'>
                    <li>Get insights into the code changes that affect you</li>
                    <li>Get insights into the code changes that affect you</li>
                    <li>Get insights into the code changes that affect you</li>
                    <li>Get insights into the code changes that affect you</li>
                    <li>Get insights into the code changes that affect you</li>
                </ul>
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-100 gap-2 px-16">
                    <div className="bg-white mt-2">
                        <img src="../ebook.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../ebook.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../ebook.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../ebook.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../ebook.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../ebook.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../ebook.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../ebook.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white mt-2">
                        <img src="../ebook.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white my-2">
                        <img src="../ebook.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-footsky text-white font-bold py-2 px-4 rounded mt-2 ml-2 w-56">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white my-2">
                        <img src="../ebook.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white my-2">
                        <img src="../ebook.png" alt="gh" className="w-full" />
                        <h6 className="text-lg text-green-800 pl-5 mt-3">Hospital Inpatient Coder Bundle 2023</h6>
                        <h5 className="pl-5">$239.99 $119.99</h5>
                        <button className="bg-footsky hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ml-4 w-48">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

        </div>
    },
    {
        label: 'Partner Publications',
        content: <div>
            <div className="w-full justify-center mx-auto">
                <div className="flex flex-col md:flex-row gap-4 mx-auto">
                    <div className="sm:basis-full basis-full">
                        <h4 className="text-2xl text-darksky">Virtual Workshops: classNameroom Learning Without the classNameroom
                        </h4>
                        <p className="bg-gray-100 p-10 mt-5 font-semibold text-justify">AAPC Workshops provide in-depth
                            information on critical business of healthcare topics. Get
                            hands-on experience through interactive exercises and online discussions led by industry
                            experts. These events allow attendees to interact with presenters to discuss the unique
                            challenges they face, all from the convenience of home or office. Workshop recordings are
                            available on-demand shortly after live presentations are completed.</p>

                        <div className="mt-5">
                            <h4 className="text-2xl font-semibold">Upcoming Workshops</h4>
                        </div>
                        <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 mt-5">
                            <div className="">
                                <img src="../from.webp" alt="hell" />
                            </div>
                            <div className="col-span-3">
                                <h5 className="text-xl text-lightsky font-bold">From Confusion to Clarity: Mastering E/M
                                    Documentation Challenges</h5>
                                <p className="font-semibold text-xl mt-2">SEPTEMBER 26, 2023 | CEUs: 6.0 |</p>
                                <p className="font-semibold mt-2"><del>$189.95</del> <span className="text-red-600">$149.95</span></p>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <hr className="mt-2" />
                        <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 mt-5">
                            <div className="">
                                <img src="../from.webp" alt="hell" />
                            </div>
                            <div className="col-span-3">
                                <h5 className="text-xl text-lightsky font-bold">From Confusion to Clarity: Mastering E/M
                                    Documentation Challenges</h5>
                                <p className="font-semibold text-xl mt-2">SEPTEMBER 26, 2023 | CEUs: 6.0 |</p>
                                <p className="font-semibold mt-2"><del>$189.95</del> <span className="text-red-600">$149.95</span></p>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <hr className="mt-2" />
                        <div className="grid md:grid-cols-4 border border-y-1 border-x-0 border-gray-200 p-5">
                            <div className="text-left font-bold text-blue-600">Sort By Date</div>
                            <div className="text-left col-span-3 font-bold">Sort By Topics</div>
                        </div>

                        <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 mt-5">
                            <div className="">
                                <img src="../from.webp" alt="hell" />
                            </div>
                            <div className="col-span-3">
                                <h5 className="text-xl text-lightsky font-bold">From Confusion to Clarity: Mastering E/M
                                    Documentation Challenges</h5>
                                <p className="font-semibold text-xl mt-2">SEPTEMBER 26, 2023 | CEUs: 6.0 |</p>
                                <p className="font-semibold mt-2"><del>$189.95</del> <span className="text-red-600">$149.95</span></p>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <hr className="mt-2" />
                        <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 mt-5">
                            <div className="">
                                <img src="../from.webp" alt="hell" />
                            </div>
                            <div className="col-span-3">
                                <h5 className="text-xl text-lightsky font-bold">From Confusion to Clarity: Mastering E/M
                                    Documentation Challenges</h5>
                                <p className="font-semibold text-xl mt-2">SEPTEMBER 26, 2023 | CEUs: 6.0 |</p>
                                <p className="font-semibold mt-2"><del>$189.95</del> <span className="text-red-600">$149.95</span></p>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <hr className="mt-2" />
                        <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 mt-5">
                            <div className="">
                                <img src="../from.webp" alt="hell" />
                            </div>
                            <div className="col-span-3">
                                <h5 className="text-xl text-lightsky font-bold">From Confusion to Clarity: Mastering E/M
                                    Documentation Challenges</h5>
                                <p className="font-semibold text-xl mt-2">SEPTEMBER 26, 2023 | CEUs: 6.0 |</p>
                                <p className="font-semibold mt-2"><del>$189.95</del> <span className="text-red-600">$149.95</span></p>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <hr className="mt-2" />
                        <div className="grid border border-y-1 border-x-0 border-gray-200 p-3 mt-5">
                            <div className="text-center font-bold text-blue-600"> [Show more] </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    },  
];
function Shop() {
    return (
        <div className="App">
            <Tab tabs={tabs} />
        </div>
    );
}


export default Shop;
