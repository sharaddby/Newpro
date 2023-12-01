import React from 'react'

const Practicode = () => {
  return (
    <div>
        <div className="grid w-full bg-green-800 bg-cover bg-center" style={{ backgroundImage: 'url("../ris.webp")' }}>
            <div className="2xl:w-8/12 xl:w-8/12 lg:w-8/12 md:w-8/12 sm:w-8/12 w-8/12 justify-center mx-auto py-20">
                <p className="text-white">Practicode</p>
                <h3 className="text-white text-3xl">AAPC empowers you to achieve your dreams<br /> with certifications for every <br />stage of your career.</h3>
            </div>
        </div>
        <div className="grid place-items-center mt-10">
                <div className="2xl:w-8/12 xl:w-8/12 lg:w-full md:w-full sm:w-full w-full justify-center mx-auto mt-20 mb-20">
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 w-100 gap-8">
                      <div>
                            <img src="../car3.webp" alt="hello"/>
                        </div>
                        <div>
                            <h1 className="pb-10 text-3xl">Here’s how it works:</h1>
                            <ul>
                                <li> 1. <span className="font-bold">We build</span> a team of certified subject matter experts
                                    who have experience with your specialty and facility type.
                                </li>
                                <li>2. <span className="font-bold"> We identify</span> any performance gaps, inaccuracies, or
                                    inefficiencies by performing a thorough review of your documentation, operations, denial
                                    reports, frequency reports, and EHR processes.
                                </li>
                                <li>3. <span className="font-bold"> We create a plan</span> that’s customized to your
                                    organization’s unique challenges and goals. And it’s always tailored to your staff,
                                    software, and workflows. 
                                </li>4. <span className="font-bold">We train your team</span>, equipping them with the knowledge
                                and expertise to resolve issues, increase productivity, and improve the overall performance
                                of your organization.  
                                <li>The result? A more efficient revenue cycle that ensures optimal, accurate
                                    reimbursement.  
                                </li>
                            </ul>
                            <button className="rounded-none bg-lightsky py-3 px-10 text-white mt-5">Lets talk</button>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="grid place-items-center mt-10">
                <div className="2xl:w-8/12 xl:w-8/12 lg:w-full md:w-full sm:w-full w-full justify-center mx-auto mt-10 mb-10">
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 w-100 gap-8">
                         <div>
                            <h1 className="pb-10 text-3xl">Our Trainers</h1>
                            <p>With more than 240,000 members in 39 countries, AAPC has access to industry experts all
                                around the world. Our trainers are subject matter experts who have been vetted, certified,
                                and meet all of these requirements:    </p>
                            <ul className="list-disc pl-10">
                                <li>Minimum of 5 years' experience </li>
                                <li> Current, relevant certifications </li>
                                <li>Proven track record in training  </li>
                                <li>Demonstrate expertise in national and regional payment and coding regulations  </li>
                            </ul>
                            <p> These strict requirements and expectations of our trainers ensure that they have the
                                knowledge, experience, and resources to help you with your organization's pain points.  </p>
                        </div>
                        <div>
                            <img src="../car2.webp" alt="hello"/>
                        </div>
                       
                    </div>
                </div>
            </div>
            <div className="grid place-items-center mt-10 bg-darkble">
                <div className="2xl:w-8/12 xl:w-8/12 lg:w-full md:w-full sm:w-full w-full justify-center mx-auto mt-10 mb-10">
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 w-100 gap-8">
                        <div>
                            <img src="../car1.webp" alt="hello"/>
                        </div>
                        <div>
                            <h1 className="pb-10 text-3xl text-white">Our Trainers</h1>
                            <p className="text-white text-justify">With more than 240,000 members in 39 countries, AAPC has access to industry experts all
                                around the world. Our trainers are subject matter experts who have been vetted, certified,
                                and meet all of these requirements:    With more than 240,000 members in 39 countries, AAPC has access to industry experts all
                                around the world. Our trainers are subject matter experts who have been vetted, certified,
                                and meet all of these requirements:    </p>
                            <p className="text-white">Specialties: telemedicine, post audit training, evaluation and management training, and clinical documentation training. </p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Practicode