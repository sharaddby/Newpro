import React from 'react'

const Contact = () => {
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
            <div className="ml-8">
              <p>For assistance with or questions about your service, please contact a representative:</p>
              <p>Phone: 866-458-2965</p>
              <p>Fax: 800-508-2592</p>
              <p>Email Us: customerservice@audioeducator.com</p>
              <p>Mailing Address:</p>
              <p>Audio Educator,</p>
              <p>2222 Sedwick Drive, Suite #101</p>
              <p>Durham, NC 27713</p>
              <p>www.audioeducator.com</p>
            </div>
             <form className="mx-auto bg-white p-8 shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Registration Form</h2>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Name">
                  Name
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Name" type="text" placeholder="Enter your Name" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Email">
                  Email address
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Email" type="text" placeholder="Sharad@gmail.com" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Telephone">
                  Telephone
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Telephone" type="text" placeholder="Enter your Telephone" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold my-5" htmlFor="Comment">
                  Comment
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Comment" type="text" placeholder="Enter your Comment" />
              </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit">Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact


