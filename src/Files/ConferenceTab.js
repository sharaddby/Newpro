import { React, useState, useEffect } from 'react'

const ConferenceTab = () => {
    const [activeTab, setActiveTab] = useState('tab1');
    const [activeTab1, setActiveTab1] = useState('tab1');
    const url = "http://192.168.1.110/apis/get-conference.php";
    const [data, setData] = useState([]);

    const fetchInfo = () => {
        return fetch(url)
            .then((res) => res.json())
            .then((d) => setData(d))
    }
    useEffect(() => {
        fetchInfo();
    }, []);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    const handleTabClick1 = (tab) => {
        setActiveTab1(tab);

    };

    return (
        <div>
            <div className="grid place-items-center">
                <div className="sm:w-full w-full justify-center mx-auto mb-10">
                    <h3 className='text-lg font-semibold'>Live Audio Conferences by Industry Experts</h3>
                    <div className="grid 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 space-x-1">
                        <button
                            className={`${activeTab === 'tab1' ? 'bg-grinish text-white' : 'bg-gray-200'
                                } px-3 mt-3 py-2 rounded-lg`}
                            onClick={() => handleTabClick('tab1')}
                        >
                            Live Event
                        </button>
                        <button
                            className={`${activeTab === 'tab2' ? 'bg-grinish text-white' : 'bg-gray-200'
                                } px-3 mt-3 py-2 rounded-lg`}
                            onClick={() => handleTabClick('tab2')}
                        >
                            On Demand
                        </button>
                        <button
                            className={`${activeTab === 'tab3' ? 'bg-grinish text-white' : 'bg-gray-200'
                                } px-3 mt-3 py-2 rounded-lg`}
                            onClick={() => handleTabClick('tab3')}
                        >
                            Pre Recorded
                        </button>
                    </div>
                    <div className="mt-0">
                        {activeTab === 'tab1' && (
                            <div className='w-full overflow-x-auto overflow-y-auto h-[40rem] touch-auto'>
                                <div className="p-4 bg-white rounded-lg">
                                    <div className="p-4 grid place-items-center">
                                        <div className="grid w-full gap-4">
                                            <div>
                                                <table className="table-auto w-[150%] max-w-none h-96">
                                                    <thead className="py-10">
                                                        <tr className="bg-theme text-white h-10">
                                                            <th>Date</th>
                                                            <th>Conference</th>
                                                            <th>Speaker</th>
                                                            <th>Price</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {data.map((dataObj, index) => {
                                                            return (
                                                                <tr className="bg-slate-100">
                                                                    <td className='w-2/12'>{dataObj.webinarDate}</td>
                                                                    <td className="text-theme"><a href="./Conferencedetail">{dataObj.conferenceName}</a></td>
                                                                    <td className='w-2/12'>{dataObj.speaker}</td>
                                                                    <td>{dataObj["webinarPrices"][0]["price"]}</td>
                                                                    <td className='w-2/12 text-theme text-right'><a href="./Register">Register Now</a></td>
                                                                </tr>
                                                            );
                                                        })}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'tab2' && (
                            <div className='w-full overflow-x-auto overflow-y-auto h-[40rem] touch-auto'>
                                <div className="p-4 bg-white rounded-lg">
                                    <div className="p-4 grid place-items-center">
                                        <div className="grid w-full gap-4">
                                            <div >
                                            <table className="table-auto w-[150%] max-w-none h-auto">
                                                    <thead className="py-10">
                                                        <tr className="bg-theme text-white h-10">
                                                            <th>Date</th>
                                                            <th>Conference</th>
                                                            <th>Speaker</th>
                                                            <th>Price</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {data.map((dataObj, index) => {
                                                            return (
                                                                <tr className="bg-slate-100">
                                                                    <td className='w-2/12'>{dataObj.webinarDate}</td>
                                                                    <td className="text-theme"><a href="./Conferencedetail">{dataObj.conferenceName}</a></td>
                                                                    <td className='w-2/12'>{dataObj.speaker}</td>
                                                                    <td>{dataObj["webinarPrices"]["price"]}</td>
                                                                    <td className='w-2/12 text-theme text-right'><a href="./Register">Register Now</a></td>
                                                                </tr>
                                                            );
                                                        })}

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'tab3' && (
                            <div className='w-full overflow-x-auto overflow-y-auto h-[40rem] touch-auto'>
                                <div className="p-4 bg-white rounded-lg">
                                    <div className="p-4 grid place-items-center">
                                        <div className="grid w-full gap-4">
                                            <div >
                                                <table className="table-auto w-[150%] max-w-none h-auto">
                                                    <thead className="py-10">
                                                        <tr className="bg-theme text-white h-10">
                                                            <th>Date</th>
                                                            <th>Conference</th>
                                                            <th>Speaker</th>
                                                            <th>Price</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {data.map((dataObj, index) => {
                                                            return (
                                                                <tr className="bg-slate-100">
                                                                    <td className='w-2/12'>{dataObj.webinarDate}</td>
                                                                    <td className="text-theme"><a href="./Conferencedetail">{dataObj.conferenceName}</a></td>
                                                                    <td className='w-2/12'>{dataObj.speaker}</td>
                                                                    <td>{dataObj["webinarPrices"][0]}</td>
                                                                    <td className='w-2/12 text-theme text-right'><a href="./Register">Register Now</a></td>
                                                                </tr>
                                                            );
                                                        })}

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="sm:w-full w-full justify-center mx-auto mb-20">
                    <h3 className='text-lg font-semibold'>Related Events</h3>
                    <div className="grid 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 space-x-1">
                        <button
                            className={`${activeTab1 === 'tab1' ? 'bg-grinish text-white' : 'bg-gray-200'
                                } px-3 mt-3 py-2 rounded-lg`}
                            onClick={() => handleTabClick1('tab1')}
                        >
                            Live Event
                        </button>
                        <button
                            className={`${activeTab1 === 'tab2' ? 'bg-grinish text-white' : 'bg-gray-200'
                                } px-3 mt-3 py-2 rounded-lg`}
                            onClick={() => handleTabClick1('tab2')}
                        >
                            On Demand
                        </button>
                        <button
                            className={`${activeTab1 === 'tab3' ? 'bg-grinish text-white' : 'bg-gray-200'
                                } px-3 mt-3 py-2 rounded-lg`}
                            onClick={() => handleTabClick1('tab3')}
                        >
                            Pre Recorded
                        </button>
                    </div>
                    <div className="mt-0">
                        {activeTab === 'tab1' && (
                            <div className='w-full overflow-x-auto overflow-y-auto h-[40rem] touch-auto'>
                                <div className="p-4 bg-white rounded-lg">
                                    <div className="p-4 grid place-items-center">
                                        <div className="grid w-full gap-4">
                                            <div >
                                                <table className="table-auto w-[150%] max-w-none h-auto">
                                                    <thead className="py-10">
                                                        <tr className="bg-theme text-white h-10">
                                                            <th>Date</th>
                                                            <th>Conference</th>
                                                            <th>Speaker</th>
                                                            <th>Price</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {data.map((dataObj, index) => {
                                                            return (
                                                                <tr className="bg-slate-100">
                                                                    <td className='w-2/12'>{dataObj.webinarDate}</td>
                                                                    <td className="text-theme"><a href="./Conferencedetail">{dataObj.conferenceName}</a></td>
                                                                    <td className='w-2/12'>{dataObj.speaker}</td>
                                                                    <td>{dataObj["webinarPrices"]["price"]}</td>
                                                                    <td className='w-2/12 text-theme text-right'><a href="./Register">Register Now</a></td>
                                                                </tr>
                                                            );
                                                        })}

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'tab2' && (
                            <div className='w-full overflow-x-auto overflow-y-auto h-[40rem] touch-auto'>
                                <div className="p-4 bg-white rounded-lg">
                                    <div className="p-4 grid place-items-center">
                                        <div className="grid w-full gap-4">
                                            <div >
                                                <table className="table-auto w-[150%] max-w-none h-auto">
                                                    <thead className="py-10">
                                                        <tr className="bg-theme text-white h-10">
                                                            <th>Date</th>
                                                            <th>Conference</th>
                                                            <th>Speaker</th>
                                                            <th>Price</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {data.map((dataObj, index) => {
                                                            return (
                                                                <tr className="bg-slate-100">
                                                                    <td className='w-2/12'>{dataObj.webinarDate}</td>
                                                                    <td className="text-theme"><a href="./Conferencedetail">{dataObj.conferenceName}</a></td>
                                                                    <td className='w-2/12'>{dataObj.speaker}</td>
                                                                    <td>{dataObj["webinarPrices"]["price"]}</td>
                                                                    <td className='w-2/12 text-theme text-right'><a href="./Register">Register Now</a></td>
                                                                </tr>
                                                            );
                                                        })}

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'tab3' && (
                            <div className='w-full overflow-x-auto overflow-y-auto h-[40rem] touch-auto'>
                                <div className="p-4 bg-white rounded-lg">
                                    <div className="p-4 grid place-items-center">
                                        <div className="grid w-full gap-4">
                                            <div >
                                                <table className="table-auto w-[150%] max-w-none h-auto">
                                                    <thead className="py-10">
                                                        <tr className="bg-theme text-white h-10">
                                                            <th>Date</th>
                                                            <th>Conference</th>
                                                            <th>Speaker</th>
                                                            <th>Price</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {data.map((dataObj, index) => {
                                                            return (
                                                                <tr className="bg-slate-100">
                                                                    <td className='w-2/12'>{dataObj.webinarDate}</td>
                                                                    <td className="text-theme"><a href="./Conferencedetail">{dataObj.conferenceName}</a></td>
                                                                    <td className='w-2/12'>{dataObj.speaker}</td>
                                                                    <td>{dataObj["webinarPrices"]["1"]}</td>
                                                                    <td className='w-2/12 text-theme text-right'><a href="./Register">Register Now</a></td>
                                                                </tr>
                                                            );
                                                        })}

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ConferenceTab