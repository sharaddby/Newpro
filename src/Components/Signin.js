

import React, { useState } from 'react';
const Signin = () => {
    const [formData, setFormData] = useState({
        UserName: '',
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
        // Add your registration logic here
        console.log('Form submitted with data:', formData);
    };

    return (
        <div className="flex items-center justify-center">
            <form className="bg-white shadow-2xl rounded px-24 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <div className='flex md:flex-row flex-col'>
                    <div className="md:w-1/2 w-full">
                        <p>Cancel</p>
                    </div>
                    <div className="md:w-1/2 w-full mb-2">
                        <img src="./logo512.png" alt="" className='h-10' />
                    </div>
                </div>
                <div className="mb-4">
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="UserName"
                        type="text"
                        placeholder="User Name"
                        name="UserName"
                        value={formData.UserName}
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
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Sine In to Checkout
                    </button>
                </div>
                <p className='text-md py-5'>Forgot password?</p>
                <p className='text-md pb-5'>-----------Or-----------</p>
                <p className='text-md pb-5'>Don't have an account?</p>
            </form>
        </div>
    );
};
export default Signin