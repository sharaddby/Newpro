import React from 'react'

const Credential = () => {
    return (
        <div>
            <div className="2xl:w-8/12 xl:w-9/12 lg:w-11/12 md:11/12 sm:11/12 w-11/12 justify-center mx-auto">
                <div className="flex flex-col md:flex-row gap-4 mx-auto">
                    <div className="md:basis-full sm:basis-full basis-full">
                        <h3 className="text-3xl my-2 text-green-900 font-semibold">Medical Coding Credential Verification</h3>
                        <p className='my-2'>You can verify the AAPC medical coding credentials or other certifications/status of a
                            prospective/existing employee, contractor, or consultant with a member's ID# and last name.</p>
                        <p className='my-2'><b>Note to credentialed members:</b> Please ensure you provide your last name and member ID as it is
                            recorded in <span className="text-green-900">your account.</span></p>
                        <div className="flex flex-col md:flex-row gap-4 mx-auto">
                            <div className="md:basis-full sm:basis-full basis-full">
                                <form className="sm:w-full w-full bg-gray-200 mx-auto">
                                    <div className="md:flex md:items-center mb-6">
                                        <label className="block text-gray-900 font-bold p-5">
                                            <input className="mr-2 leading-tight" type="checkbox" />
                                            <span className="text-md">
                                                Validate a member's credential(s) with Member ID and Last Name:
                                            </span>
                                        </label>
                                    </div>
                                    <div className="md:flex md:items-center m-5">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                                for="Member">
                                                Member ID
                                            </label>
                                        </div>
                                        <div className="md:w-2/3">
                                            <input
                                                className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                                id="Member" type="text" value="" />
                                        </div>
                                    </div>
                                    <div className="md:flex md:items-center m-5">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                                for="inline-full-name">
                                                Last Name
                                            </label>
                                        </div>
                                        <div className="md:w-2/3">
                                            <input
                                                className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                                id="inline-full-name" type="text" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="md:flex md:items-center">
                                        <div className="md:w-1/3"></div>
                                        <div className="md:w-2/3">
                                            <button
                                                className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded float-right m-5"
                                                type="button">
                                                Validate
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="md:basis-full sm:basis-full basis-full">
                                <form className="2xl:w-11/12 xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 bg-gray-200 mx-auto">
                                    <div className="md:flex md:items-center mb-6">
                                        <label className="block text-gray-900 font-bold p-5">
                                            <input className="mr-2 leading-tight" type="checkbox" />
                                            <span className="text-md">
                                                Validate a member's credential(s) with Member ID and Last Name:
                                            </span>
                                        </label>
                                    </div>
                                    <div className="md:flex md:items-center m-5">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                                for="Email">
                                                Email ID
                                            </label>
                                        </div>
                                        <div className="md:w-2/3">
                                            <input
                                                className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                                id="Member" type="text" value="" />
                                        </div>
                                    </div>
                                    <div className="md:flex md:items-center m-5">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                                for="inline-full-name">
                                                Last Name
                                            </label>
                                        </div>
                                        <div className="md:w-2/3">
                                            <input
                                                className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                                id="inline-full-name" type="text" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="md:flex md:items-center">
                                        <div className="md:w-1/3"></div>
                                        <div className="md:w-2/3">
                                            <button
                                                className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded float-right m-5"
                                                type="button">
                                                Validate
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <h4 className='text-2xl'>Verification Results</h4>
                        <div className="grid">
                            <table className="table-auto">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2">Credential</th>
                                        <th className="px-4 py-2">Earned Date</th>
                                        <th className="px-4 py-2">Renewal Date</th>
                                        <th className="px-4 py-2">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border px-4 py-2 text-center">Non-Member</td>
                                        <td className="border px-4 py-2 text-center">Na</td>
                                        <td className="border px-4 py-2 text-center">Na</td>
                                        <td className="border px-4 py-2 text-center"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="grid my-5">
                            <h4 className="font-bold text-2xl mb-3">Terms of Use</h4>
                            <p className="text-lg text-justify"> AAPC provides this online system as a service to employers in the
                                healthcare industry, and
                                users of the system are granted access on the strict condition of their willingness to agree
                                to and abide by these terms. The use of this system for any purpose other than the
                                verification of an individual's credentials, including compilations of data or other
                                commercial purposes, is prohibited.</p>
                            <p className="text-lg text-justify"> AAPC will make every effort to ensure that the information provided
                                through this system is
                                accurate and current. It cannot, however, guarantee the absolute accuracy of the
                                information, and all persons using the system do so at their own risk. In addition, each
                                user assumes the responsibility to ensure that any information is applicable to the correct
                                individual for whom verification is sought. Users acknowledge that AAPC shall not be liable
                                to users or to any other party for any decision made or action taken in reliance upon such
                                information obtained through this service. It is the responsibility of the user to confirm
                                the last name and member ID or email of the individual whose credentials are being verified
                                before using this tool.</p>
                            <p className="text-lg"> By using this tool, you agree to these terms.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Credential