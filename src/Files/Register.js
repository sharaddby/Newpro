import React, { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted with data:', formData);
    };

    return (
        <div>
            <div className="grid place-items-center mt-5">
                <div className="flex flex-col md:flex-row 2xl:w-8/12 xl:w-8/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 gap-8">
                    <div className="md:w-1/2 w-full">
                        <form className="bg-white shadow-2xl rounded px-24 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                            <div className='flex md:flex-row flex-col'>
                                <div className="md:w-1/2 w-full">
                                    <p>Cancel</p>
                                </div> 
                            </div>
                            <div className="mb-4">
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Email Address"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-6">
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-6">
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    placeholder="Conform Password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="firstName"
                                    type="text"
                                    placeholder="First Name"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="lastName"
                                    type="text"
                                    placeholder="Last Name"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Create to checkout
                                </button>
                            </div>
                            <p className='text-md'>Already have an account? <span>Sign In</span></p>
                        </form>
                    </div>
                    <div className="md:w-1/2 w-full">
                        <form className="bg-white shadow-2xl rounded px-24 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                            <div className='flex md:flex-row flex-col'>
                                <div className="md:w-1/2 w-full">
                                    <p>Cancel</p>
                                </div>
                            </div>
                            <div className="mb-4">
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Email Address"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-6">
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-6">
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    placeholder="Conform Password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="firstName"
                                    type="text"
                                    placeholder="First Name"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="lastName"
                                    type="text"
                                    placeholder="Last Name"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Create to checkout
                                </button>
                            </div>
                            <p className='text-md'>Already have an account? <span>Sign In</span></p>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default Register