import { React, useState } from 'react'
const Online_code = () => {
    // State to store form data
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        Occupation: '',
    });
    const [isChecked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(!isChecked);
    };

    // Function to handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your registration logic here, such as sending data to a server
        console.log('Form submitted:', formData);
    };


    return (
        <div>
            <div className="grid place-items-center mt-16">
                <div class="2xl:w-8/12 xl:w-8/12 lg:w-8/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center mx-auto">
                    <h3 className='text-3xl mb-10'>Convert ICD-9 to ICD-10, or Convert ICD-10 to ICD-9 Codes</h3>
                    <div className='grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:2xl:grid-cols-1 mx-auto bg-gray-200'>
                        <div className='ml-10 mt-10'>
                            <h4 className='text-2xl mb-3'>Translator</h4>
                            <input
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded mb-10"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />ICD-9 to ICD-10
                            <input
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />ICD-10 to ICD-9
                            <div className="mb-4">
                                <div className='grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:2xl:grid-cols-2 mx-auto'>
                                    <div className='#'>
                                        <input
                                            type="text"
                                            id="Occupation"
                                            name="Occupation"
                                            value={formData.Occupation}
                                            onChange={handleInputChange}
                                            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                            required
                                        />
                                    </div>
                                    <div className='#'>
                                        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                                        >Go</button>
                                    </div>
                                </div>
                            </div>
                            <div className='grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:2xl:grid-cols-1 mx-auto mb-5'>
                                <div>
                                    <p className='text-md'>Powered by Codify</p>
                                </div>
                                <div>
                                    <p className='text-md'>Add to your website</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="max-w-md mx-auto mt-8 p-6 bg-white border rounded-md shadow-md">
                                <h2 className="text-2xl font-semibold mb-6">Register</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="Occupation" className="block text-sm font-medium text-gray-600">
                                            Occupation
                                        </label>
                                        <input
                                            type="text"
                                            id="Occupation"
                                            name="Occupation"
                                            value={formData.Occupation}
                                            onChange={handleInputChange}
                                            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                                    >
                                        Register
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="grid sm:2xl:grid-cols-1 mx-auto">
                        <h4 className='text-2xl my-5'>ICD-10 Coding Resources</h4>
                        <p className='text-lg ml-5'>Ask An AAPC Expert</p>
                        <img src="./faq_code_explained.webp" alt="work" />
                        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 w-100">
                            <div className='flex flex-row'>
                                <img src="./icd10manual.webp" alt="work" />
                                <p className='text-md ml-5'>ICD-10 Books & Manuals</p>
                            </div>
                            <div className='flex flex-row'>
                                <img src="./icd10-cm-pcs.webp" alt="work" />
                                <p className='text-md ml-5'>ICD-10 Mapping</p>
                            </div>
                        </div>


                    </div>
                    <div className='grid sm:2xl:grid-cols-1 mx-auto'>
                        <div className='my-5'>
                            <p className='text-lg'>
                                <b>Note:</b> For a better explanation of the code format, please refer to our ICD-10 conversion and mapping tutorial. For help with mapping, consider our ICD-10 mapping services.
                            </p>
                        </div>
                        <div className='mb-5'>
                            <p className='text-lg'>
                                <b>Disclaimer: </b> This tool is based on the General Equivalency Mapping (GEM) files published by CMS, and is not intended to be used as an ICD-10 conversion, ICD-10 mapping, or ICD-9 to ICD-10 crosswalk tool. Keep in mind that while many codes in ICD-9-CM map directly to codes in ICD-10-CM, in some cases, a clinical analysis may be required to determine which code or codes should be selected for your mapping. Always review mapping results before applying them.
                            </p>
                        </div>
                    </div>
                    <div className='grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:2xl:grid-cols-1 mx-auto gap-4 mb-5'>
                        <div className='bg-green-100'>
                            <p className='m-10 text-lg'>For group purchases or to inquire about in-person training, please call
                                844-825-1679
                                or have us call you.</p>
                        </div>
                        <div className='bg-green-100'>
                            <p className='m-10 text-lg'>For individual purchases, questions, or technical issues,
                                800-626-2633
                                or have us call you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Online_code