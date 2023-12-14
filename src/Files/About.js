import React from 'react';

const Conference = () => {
    return (
        <div>
            <div className="grid place-items-center">
                <div className="flex flex-col  md:flex-row 2xl:w-8/12 xl:w-8/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 gap-8">
                    <div className="md:w-1/4 w-full">
                        <div className="border border-gray-500 p-3 my-2">
                            <p className="text-lg text-conf"><a href="./Conference">Live Event</a></p>
                        </div>
                        <div className="border border-gray-500 p-3 my-2">
                            <p className="text-lg text-conf"><a href="./Conference">On Demand</a></p>
                        </div>
                        <div className="border border-gray-500 p-3 my-2">
                            <p className="text-lg text-conf"><a href="./Conference">Pre Recorded</a></p>
                        </div>
                        <div className="border border-gray-500 p-3 my-2">
                            <p className="text-lg text-conf"><a href="./Conference">Best Sellers</a></p>
                        </div>
                        <div className="border border-gray-500 p-3 my-2">
                            <p className="text-lg text-conf"><a href="./Conference">Special Offers</a></p>
                        </div>
                        <div className="border border-gray-500 p-3 my-2">
                            <p className="text-lg text-conf"><a href="./Conference">Free Webinars</a></p>
                        </div>
                        <div className="border border-gray-500 p-3 my-2">
                            <p className="text-lg text-conf"><a href="./Conference">Free CEUs</a></p>
                        </div>
                        <div className="border border-gray-500 p-3 my-2">
                            <p className="text-lg text-conf"><a href="./Conference">Why AudioEducator</a></p>
                        </div>
                        <div className="border border-gray-500 p-3 my-2">
                            <p className="text-lg text-conf"><a href="./Conference">Testimonials</a></p>
                        </div>
                    </div>
                    <div className="md:w-3/4 w-full">
                        <h5 className='text-xl mb-5'>About AudioEducator</h5>
                        <p className='text-justify text-lg'>AudioEducator.com is the leading source of business-enhancing information for healthcare professionals. Our audioconferences, CDs, transcripts and other quality products are designed to educate and improve the lives of healthcare professionals on a daily basis. Attend a live audioconference or purchase a CD and get the vital information you need to know in a straightforward manner without any fluff or filler material. Only the top experts in the industry conduct our audio seminars so you know you are getting the right information from the right person every time. Signing up for an audioconference is a valuable way to train and inform as many people as you desire without leaving the office. And our question-and-answer segments that conclude every audioconference give you the opportunity to get expert advice on the topics that really matter to you and your bottom line. We're so confident in the quality of our products and presentations that we back all of them with a quality guarantee. If you don’t walk away from an audio seminar or a CD with valuable tips to improve your business, we will refund you – guaranteed.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Conference