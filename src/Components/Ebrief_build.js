import React, { useState } from 'react';
function RegistrationForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add form validation and submission logic here
        console.log('Form submitted with data:', formData);
    };

    return (
        <div>
            <div className="grid place-items-center mt-16">
                <div className="2xl:w-8/12 xl:w-8/12 lg:w-full md:w-full sm:w-full w-full justify-center mx-auto">
                    <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 w-100 gap-8">
                        <div className="p-5 col-span-2">
                            <h2 className="text-4xl mb-5">Build vs. Buy Curriculum: Which is Best for Your School?</h2>
                            <p className="text-lg text-why">You’re an education leader. You want to offer the best curriculum to your students.
                                You also want high exam pass rates, courses built to your specifications, to make the most of your instructors’
                                time, to use your budget wisely, and to set your students up for success in their future careers. So, when it
                                comes time to offer a new program at your school, you have a lot of factors to consider when deciding whether
                                to build or buy the curriculum. In this eBrief, we explore the pros and cons of both — so you can determine which
                                is best for your institution.</p>
                        </div>
                        <div className="bg-footsky p-5 my-5">
                            <h4 className="text-2xl mb-5 text-center text-white">Fill out the form below to download your free eBrief.</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="fname" className="block text-white text-sm font-bold mb-2">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="fname"
                                        name="fname"
                                        value={formData.fname}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border rounded"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="lname" className="block text-white text-sm font-bold mb-2">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="lname"
                                        name="lname"
                                        value={formData.lname}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border rounded"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border rounded"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="Phone" className="block text-white text-sm font-bold mb-2">
                                       Phone No
                                    </label>
                                    <input
                                        type="Phone"
                                        id="Phone"
                                        name="Phone"
                                        value={formData.Phone}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border rounded"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="fname" className="block text-white text-sm font-bold mb-2">
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        id="fname"
                                        name="fname"
                                        value={formData.fname}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border rounded"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="lname" className="block text-white text-sm font-bold mb-2">
                                        Job Title
                                    </label>
                                    <input
                                        type="text"
                                        id="lname"
                                        name="lname"
                                        value={formData.lname}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border rounded"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-36 rounded"
                                >
                                    Download
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegistrationForm;
