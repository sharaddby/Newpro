import React from 'react';
import { Link } from 'react-router-dom';
import Bluefooter from './Bluefooter';
import Banner from './Banner';
const Essentials = () => {
    return (
        <div>
            
            <Banner/>
            <div className="grid w-100">
                <div className="2xl:w-9/12 xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center mx-auto">
                    <h1 className="text-4xl mt-20 font-semibold">Essential medical training courses</h1>
                    <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 w-100 gap-6 py-5">
                        <div className="pt-6 max-h-full">
                            <img src="../ese1.webp" alt="he" className="h-72 w-full" />
                            <div className="bg-slate-200 hover:bg-slate-300 p-5">
                                <p className="text-darksky">ESSENTIALS</p>
                                <p className="text-2xl">Fundamentals of Medicine Course</p>
                                <Link to="./Fundamentals_of_medicine_course" className="block py-2 text-lg text-darksky hover:bg-gray-300 font-semibold"
                                >LEARN MORE</Link>
                            </div>
                        </div>
                        <div className="pt-6 max-h-full">
                            <img src="../ese2.webp" alt="he" className="h-72 w-full" />
                            <div className="bg-slate-200 hover:bg-slate-300 p-5">
                                <p className="text-darksky">ESSENTIALS</p>
                                <p className="text-2xl">Anatomy Course</p>
                                <Link to="./Fundamentals_of_medicine_course" className="block py-2 text-lg text-darksky hover:bg-gray-300 font-semibold"
                                >LEARN MORE</Link>
                            </div>
                        </div>
                        <div className="pt-6 max-h-full">
                            <img src="../ese3.webp" alt="he" className="h-72 w-full" />
                            <div className="bg-slate-200 hover:bg-slate-300 p-5">
                                <p className="text-darksky">ESSENTIALS</p>
                                <p className="text-2xl">Medical Terminology Course</p>
                                <Link to="./Fundamentals_of_medicine_course" className="block py-2 text-lg text-darksky hover:bg-gray-300 font-semibold"
                                >LEARN MORE</Link>
                            </div>
                        </div>
                        <div className="pt-6 max-h-full">
                            <img src="../ese4.webp" alt="he" className="h-72 w-full" />
                            <div className="bg-slate-200 hover:bg-slate-300 p-5">
                                <p className="text-darksky">ESSENTIALS</p>
                                <p className="text-2xl">Pathophysiology Course</p>
                                <Link to="./Fundamentals_of_medicine_course" className="block py-2 text-lg text-darksky hover:bg-gray-300 font-semibold"
                                >LEARN MORE</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Bluefooter />
            </div>
        </div>
    )
}

export default Essentials