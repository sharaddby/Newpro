import React from 'react';
import { Link } from 'react-router-dom';
import Bluefooter from './Bluefooter';
const Essentials = () => {
    return (
        <div>
            <div class="grid w-100">
                <div class="2xl:w-full xl:w-full lg:w-full md:w-full sm:w-full w-full justify-center mx-auto">
                    <div class="bg-darksky h-72" style={{ backgroundImage: 'url("../hbg.webp")' }}>
                        <div class="2xl:w-10/12 xl:w-10/12 lg:w-full md:w-full sm:w-full w-full justify-center mx-auto">
                            <p class="relative text-white pt-28 pl-48">ESSENTIALS</p>
                            <h2 class="text-4xl relative text-white  pl-48">Set yourself up for success. Get the <br /> essential training
                            you need.</h2>
                        </div>
                    </div>
                    <div class="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 w-100 bg-gray-300 h-20">
                        <div class="col-span-3 pt-6">
                            <p class=" text-gray-700 text-lg text-center">50% off + FREE books on select exam preparation training
                                packages through August 31st.</p>
                        </div>
                        <div class="pt-6">
                            <button class="rounded-none text-lightgreen text-2xl">Save Changes</button>
                        </div>
                    </div>
                    <div class="2xl:w-8/12 xl:w-8/12 lg:w-full md:w-full sm:w-full w-full justify-center mx-auto">
                        <h1 class="text-4xl mt-20 font-semibold">Essential medical training courses</h1>
                        <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 w-100 gap-6 py-5">
                            <div class="pt-6 max-h-full">
                                <img src="../ese1.webp" alt="he" class="h-72 w-full" />
                                <div class="bg-slate-200 hover:bg-slate-300 p-5">
                                    <p class="text-darksky">ESSENTIALS</p>
                                    <p class="text-2xl">Fundamentals of Medicine Course</p>
                                    <Link to="./Fundamentals_of_medicine_course" className="block py-2 text-lg text-darksky hover:bg-gray-300 font-semibold"
                                    >LEARN MORE</Link>
                                </div>
                            </div>
                            <div class="pt-6 max-h-full">
                                <img src="../ese2.webp" alt="he" class="h-72 w-full" />
                                <div class="bg-slate-200 hover:bg-slate-300 p-5">
                                    <p class="text-darksky">ESSENTIALS</p>
                                    <p class="text-2xl">Anatomy Course</p>
                                    <Link to="./Fundamentals_of_medicine_course" className="block py-2 text-lg text-darksky hover:bg-gray-300 font-semibold"
                                    >LEARN MORE</Link> 
                                </div>
                            </div>
                            <div class="pt-6 max-h-full">
                                <img src="../ese3.webp" alt="he" class="h-72 w-full" />
                                <div class="bg-slate-200 hover:bg-slate-300 p-5">
                                    <p class="text-darksky">ESSENTIALS</p>
                                    <p class="text-2xl">Medical Terminology Course</p>
                                    <Link to="./Fundamentals_of_medicine_course" className="block py-2 text-lg text-darksky hover:bg-gray-300 font-semibold"
                                    >LEARN MORE</Link>
                                </div>
                            </div>
                            <div class="pt-6 max-h-full">
                                <img src="../ese4.webp" alt="he" class="h-72 w-full" />
                                <div class="bg-slate-200 hover:bg-slate-300 p-5">
                                    <p class="text-darksky">ESSENTIALS</p>
                                    <p class="text-2xl">Pathophysiology Course</p>
                                    <Link to="./Fundamentals_of_medicine_course" className="block py-2 text-lg text-darksky hover:bg-gray-300 font-semibold"
                                    >LEARN MORE</Link> 
                                </div>
                            </div>
                         </div>
                    </div>
                    <Bluefooter/>
                </div>
            </div>
        </div>
    )
}

export default Essentials