import React from 'react'

const Bluebanner = () => {
  return (
    <div>
         <div className="grid place-items-center mt-10 bg-darkble">
            <div className="2xl:w-8/12 xl:w-8/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center mx-auto mt-20 mb-20">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 w-100 gap-8">
                    <div>
                        <h1 className="pt-20 pb-10 text-white">BUSINESS SOLUTIONS</h1>
                        <h1 className="text-3xl text-white pb-5">Empower your employees with an AAPC certification.</h1>
                        <p className="text-white pb-5">Supporting your employees in getting certified, or adding
                            certifications, can improve
                            productivity,
                            eliminate skill gaps, and drive revenue for your organization.</p>
                    </div>
                    <div>
                        <img src="../im.webp" alt="..." className="w-full"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Bluebanner