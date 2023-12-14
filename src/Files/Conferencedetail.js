import { React, useState, useEffect } from 'react'
const Conferencedetail = () => {
    const url = "http://192.168.1.110/apis/get-conference-detail.php?id=320";
    const [data, setData] = useState([]);

    const fetchInfo = () => {
        return fetch(url)
            .then((res) => res.json())
            .then((d) => setData(d))
    }
    useEffect(() => {
        fetchInfo();
    }, []);
    return (
        <div>
            <div className="grid place-items-center mt-5">
                <div className="flex flex-col md:flex-row 2xl:w-8/12 xl:w-8/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 gap-8">
                    <div className="md:w-8/12 w-full">
                        <div className="p-5 border border-gray-300">
                            {data.map((dataObj, index) => {
                                return (
                                    <p className="text-md text-justify mb-2">
                                        {dataObj.conferenceName}
                                    </p>
                                );
                            })}
                             {data.map((dataObj, index) => {
                                return (
                           <div>
                                <table className="table-auto w-11/12">
                                    <thead className="">
                                        <tr className="bg-theme text-white h-10">
                                            <th colSpan={4} className="text-left">Event Information</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-slate-100">
                                            <td className='w-2/6'>Product format</td>
                                            <td>{dataObj.webinarType}</td>
                                        </tr>
                                        <tr>
                                            <td>Presenter(s)</td>
                                            <td>{dataObj.industry}</td>
                                        </tr>
                                        <tr className="bg-slate-100">
                                            <td>Conference Date</td>
                                            <td>{dataObj.webinarDate}</td>
                                        </tr>
                                        <tr>
                                            <td>Lenght</td>
                                            <td>{dataObj.duration}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                             );
                            })}
                        </div>
                        <div className="p-5 border border-gray-300 mt-5">
                            <p className="text-xl text-theme mb-2">
                                Download File
                            </p>
                            <p className="text-md mb-2">
                                Conference Material (Password Required) (5.2 MB)
                            </p>
                        </div>
                        <div className="p-5 border border-gray-300 mt-5">
                            {data.map((dataObj, index) => {
                                return (
                                    <p className="text-md text-justify mb-2">
                                        {dataObj.description}
                                    </p>
                                );
                            })}
                            <div className="grid place-items-center mb-5">
                                <div className="w-64">
                                    <button className="px-12 py-1 bg-grinish hover:bg-grinish text-white rounded-full">
                                        <a href="https://tailwindui.com/documentation" className="text-white rounded-full">Order Now</a>
                                    </button>
                                </div>
                            </div>
                            <div className="grid place-items-center mb-5">
                                <div className="w-64">
                                    <button className="px-12 py-1 bg-grinish hover:bg-grinish text-white rounded-full">
                                        <a href="https://tailwindui.com/documentation" className="text-white rounded-full">Wishlist</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="p-5 border border-gray-300 my-5">
                            <div className="grid place-items-center">
                                <div className="sm:w-full w-full justify-center mx-auto">
                                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 w-100 gap-8">
                                        <div className="bg-slate-200 p-5 hover:shadow-2xl">
                                            <p className='text-theme'>The Value Based Modifier Program n</p>
                                            <p className='text-right'>Jeanne Chamberlin</p>
                                        </div>
                                        <div className="bg-slate-200 p-5 hover:shadow-2xl">
                                            <p className='text-theme'>The Value Based Modifier Program n</p>
                                            <p className='text-right'>Jeanne Chamberlin</p>
                                        </div>
                                        <div className="bg-slate-200 p-5 hover:shadow-2xl">
                                            <p className='text-theme'>The Value Based Modifier Program n</p>
                                            <p className='text-right'>Jeanne Chamberlin</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                              
                    <div className="md:w-4/12 w-full">
                        <div className="p-5 border border-gray-300 bg-theme">
                            <p className="text-lg text-center font-semibold text-white">Order Form</p>
                            <p className="text-md text-center text-white">(select the formet below)</p>
                            {data.map((dataObj, index) => {
                                return (
                                    <>
                            <div class="flex items-center">
                                <input type="checkbox" id="myCheckbox" class="form-checkbox h-3 w-3 text-indigo-600" />
                                <label for="myCheckbox" class="ml-2 text-white">{dataObj["webinarPrices"][0]["price"]} {dataObj["webinarPrices"][0]["type"]}</label>
                            </div>
                             <div class="flex items-center">
                                <input type="checkbox" id="myCheckbox" class="form-checkbox h-3 w-3 text-indigo-600" />
                                <label for="myCheckbox" class="ml-2 text-white">{dataObj["webinarPrices"][1]["price"]} {dataObj["webinarPrices"][1]["type"]}</label>
                            </div>
                           <div class="flex items-center">
                                <input type="checkbox" id="myCheckbox" class="form-checkbox h-3 w-3 text-indigo-600" />
                                <label for="myCheckbox" class="ml-2 text-white">{dataObj["webinarPrices"][2]["price"]} {dataObj["webinarPrices"][2]["type"]}</label>
                            </div>
                            <div class="flex items-center">
                                <input type="checkbox" id="myCheckbox" class="form-checkbox h-3 w-3 text-indigo-600" />
                                <label for="myCheckbox" class="ml-2 text-white">{dataObj["webinarPrices"][3]["price"]} {dataObj["webinarPrices"][3]["type"]}</label>
                            </div>
                            <div class="flex items-center">
                                <input type="checkbox" id="myCheckbox" class="form-checkbox h-3 w-3 text-indigo-600" />
                                <label for="myCheckbox" class="ml-2 text-white">{dataObj["webinarPrices"][4]["price"]} {dataObj["webinarPrices"][4]["type"]}</label>
                            </div>
                             <div class="flex items-center">
                                <input type="checkbox" id="myCheckbox" class="form-checkbox h-3 w-3 text-indigo-600" />
                                <label for="myCheckbox" class="ml-2 text-white">{dataObj["webinarPrices"][5]["price"]} {dataObj["webinarPrices"][5]["type"]}</label>
                            </div>
                           <div class="flex items-center">
                                <input type="checkbox" id="myCheckbox" class="form-checkbox h-3 w-3 text-indigo-600" />
                                <label for="myCheckbox" class="ml-2 text-white">{dataObj["webinarPrices"][6]["price"]} {dataObj["webinarPrices"][6]["type"]}</label>
                            </div>
                            <div class="flex items-center">
                                <input type="checkbox" id="myCheckbox" class="form-checkbox h-3 w-3 text-indigo-600" />
                                <label for="myCheckbox" class="ml-2 text-white">{dataObj["webinarPrices"][7]["price"]} {dataObj["webinarPrices"][7]["type"]}</label>
                            </div>
                             <div class="flex items-center">
                                <input type="checkbox" id="myCheckbox" class="form-checkbox h-3 w-3 text-indigo-600" />
                                <label for="myCheckbox" class="ml-2 text-white">{dataObj["webinarPrices"][8]["price"]} {dataObj["webinarPrices"][8]["type"]}</label>
                            </div>
                            <div class="flex items-center">
                                <input type="checkbox" id="myCheckbox" class="form-checkbox h-3 w-3 text-indigo-600" />
                                <label for="myCheckbox" class="ml-2 text-white">{dataObj["webinarPrices"][9]["price"]} {dataObj["webinarPrices"][9]["type"]}</label>
                            </div>
                           <div class="flex items-center">
                                <input type="checkbox" id="myCheckbox" class="form-checkbox h-3 w-3 text-indigo-600" />
                                <label for="myCheckbox" class="ml-2 text-white">{dataObj["webinarPrices"][10]["price"]} {dataObj["webinarPrices"][10]["type"]}</label>
                            </div>
                             <div class="flex items-center">
                                <input type="checkbox" id="myCheckbox" class="form-checkbox h-3 w-3 text-indigo-600" />
                                <label for="myCheckbox" class="ml-2 text-white">{dataObj["webinarPrices"][11]["price"]} {dataObj["webinarPrices"][11]["type"]}</label>
                            </div>
                            <div class="flex items-center">
                                <input type="checkbox" id="myCheckbox" class="form-checkbox h-3 w-3 text-indigo-600" />
                                <label for="myCheckbox" class="ml-2 text-white">{dataObj["webinarPrices"][12]["price"]} {dataObj["webinarPrices"][12]["type"]}</label>
                            </div>
                            <div className="grid place-items-center mb-5">
                                <div className="w-64">
                                    <button className="px-12 py-1 bg-grinish hover:bg-grinish text-white rounded-full">
                                        <a href="./Billing" className="text-white rounded-full">Add to cart</a>
                                    </button>
                                </div>
                            </div>
                            <div class="flex items-center">
                                <label for="myCheckbox" class="ml-2 text-white">You can also call customer care at 1-866-458-2965 for bulk order.</label>
                            </div>
                            </>
                            );
                            })}
                        </div>
                        <div className="p-5 border border-gray-300 my-5">
                            <table className="table-auto">
                                <tbody>
                                    <tr className="my-5">
                                        <td className='w-2/6'><img src="./phone1_icon.jpg" alt='ji' /></td>
                                        <td>1-866-458-2965</td>
                                    </tr>
                                    <tr className="my-5">
                                        <td><img src="./mail_icon1.jpg" alt='ji' /></td>
                                        <td>customerservice@audioeducator.com</td>
                                    </tr>
                                    <tr className="my-5">
                                        <td><img src="./fax_icon.jpg" alt='ji' /></td>
                                        <td>Tue, mar,15,2020</td>
                                    </tr>
                                    <tr className="my-5">
                                        <td><img src="./pdf.jpg" alt='ji' /></td>
                                        <td>Tue, mar,15,2020</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="border border-gray-300 my-5">
                            <h6 className='text-xl font-semibold my-2 px-5'>About the speaker</h6>
                            <img src="./conf.jpg" alt='ji' />
                            <p className='p-5 text-justify'>AAPC was founded in 1988 to provide education and professional certification to physician-based medical
                                coders and to elevate the standards of medical coding by providing student training, certification,
                                ongoing education, networking, and audits, more info</p>
                        </div>
                        <div className="border border-gray-300 my-2 p-3">
                            <h6 className='text-xl font-semibold'>why AudioEducator</h6>
                            <p className='text-md'>save money on travel</p>
                            <p className='text-md'>meet your specific training need</p>
                            <p className='text-md'>Keep learning after the event</p>
                            <p className='text-md'>save time training your whole staff.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Conferencedetail