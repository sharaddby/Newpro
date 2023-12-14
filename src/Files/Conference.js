import React from 'react';
import ConferenceTab from './ConferenceTab';

const Conference = () => {
    return (
        <div>
            <div className="grid place-items-center">
                <div className="flex flex-col  md:flex-row 2xl:w-8/12 xl:w-8/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 gap-8">
                    <div className="md:w-1/4 w-full">
                        <div className="border border-gray-500 p-3 my-2">
                            <p className="text-lg text-theme"><a href="./Conference" >Live Event</a></p>
                        </div>
                        <div className="border border-gray-500 p-3 my-2">
                            <p className="text-lg text-theme"><a href="./Conference">On Demand</a></p>
                        </div>
                        <div className="border border-gray-500 p-3 my-2">
                            <p className="text-lg text-theme"><a href="./Conference">Pre Recorded</a></p>
                        </div>
                        <div className="border border-gray-500 p-3 my-2">
                            <p className="text-lg text-theme"><a href="./Conference">Best Sellers</a></p>
                        </div>
                        <div className="border border-gray-500 p-3 my-2">
                            <p className="text-lg text-theme"><a href="./Conference">Special Offers</a></p>
                        </div>
                        <div className="border border-gray-500 p-3 my-2">
                            <p className="text-lg text-theme"><a href="./Conference">Free Webinars</a></p>
                        </div>
                        <div className="border border-gray-500 p-3 my-2">
                            <p className="text-lg text-theme"><a href="./Conference">Free CEUs</a></p>
                        </div>
                        <div className="border border-gray-500 p-3 my-2">
                            <p className="text-lg text-theme"><a href="./Conference">Why AudioEducator</a></p>
                        </div>
                        <div className="border border-gray-500 p-3 my-2">
                            <p className="text-lg text-theme"><a href="./Conference">Testimonials</a></p>
                        </div>
                    </div>
                    <div className="md:w-3/4 w-full">
                        <ConferenceTab/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Conference