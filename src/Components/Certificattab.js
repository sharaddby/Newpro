import {React,useState} from 'react'

const Certificattab = () => {
    const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
        <div class="grid place-items-center mt-10">
            <div class="2xl:w-10/12 xl:w-10/12 lg:w-full md:w-full sm:w-full w-full justify-center mx-auto mt-20 mb-20">       
                <h3 className='text-3xl'>All certifications</h3>
                
                <div className="grid 2xl:grid-cols-11 xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 space-x-1 mt-5">

                    <button
                    className={`${
                        activeTab === 'tab1' ? 'bg-blue-500' : 'bg-gray-200'
                    } px-4 mt-3 py-2 rounded-lg`}
                    onClick={() => handleTabClick('tab1')}
                    >
                    ALL
                    </button>
                    <button
                    className={`${
                        activeTab === 'tab2' ? 'bg-blue-500' : 'bg-gray-200'
                    } px-4 mt-3 py-2 rounded-lg`}
                    onClick={() => handleTabClick('tab2')}
                    >
                    CODING
                    </button>
                    <button
                    className={`${
                        activeTab === 'tab3' ? 'bg-blue-500' : 'bg-gray-200'
                    } px-4 mt-3 py-2 rounded-lg`}
                    onClick={() => handleTabClick('tab3')}
                    >
                    BILLING
                    </button>
                    <button
                    className={`${
                        activeTab === 'tab4' ? 'bg-blue-500' : 'bg-gray-200'
                    } px-4 mt-3 py-2 rounded-lg`}
                    onClick={() => handleTabClick('tab4')}
                    >
                    CORE
                    </button>
                    <button
                    className={`${
                        activeTab === 'tab5' ? 'bg-blue-500' : 'bg-gray-200'
                    } px-4 mt-3 py-2 rounded-lg`}
                    onClick={() => handleTabClick('tab5')}
                    >
                    AUDITING
                    </button>
                    <button
                    className={`${
                        activeTab === 'tab6' ? 'bg-blue-500' : 'bg-gray-200'
                    } px-4 mt-3 py-2 rounded-lg`}
                    onClick={() => handleTabClick('tab6')}
                    >
                    PRACTICE MANAGEMENT
                    </button>
                    <button
                    className={`${
                        activeTab === 'tab7' ? 'bg-blue-500' : 'bg-gray-200'
                    } px-4 mt-3 py-2 rounded-lg`}
                    onClick={() => handleTabClick('tab7')}
                    >
                    COMPLIANCE
                    </button>
                    <button
                    className={`${
                        activeTab === 'tab8' ? 'bg-blue-500' : 'bg-gray-200'
                    } px-1 mt-3 py-2 rounded-lg`}
                    onClick={() => handleTabClick('tab8')}
                    >
                    DOCUMENTATION
                    </button>
                    <button
                    className={`${
                        activeTab === 'tab9' ? 'bg-blue-500' : 'bg-gray-200'
                    } px-4 mt-3 py-2 rounded-lg`}
                    onClick={() => handleTabClick('tab9')}
                    >
                    SPECIALTY
                    </button>
                    <button
                    className={`${
                        activeTab === 'tab10' ? 'bg-blue-500' : 'bg-gray-200'
                    } px-4 mt-3 py-2 rounded-lg`}
                    onClick={() => handleTabClick('tab10')}
                    >
                   SCRIBE
                    </button>
                    <button
                    className={`${
                        activeTab === 'tab11' ? 'bg-blue-500' : 'bg-gray-200'
                    } px-4 mt-3  py-2 rounded-lg`}
                    onClick={() => handleTabClick('tab11')}
                    >
                  INSTRUCTOR
                    </button>
                </div>
                <div className="mt-4">
                    {activeTab === 'tab1' && (
                    <div className="p-4 bg-white rounded-lg shadow">
                        <div class="p-4 grid place-items-center mt-16">
                            <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:w-100 w-100 gap-4">
                               <div class="bg-slate-100 pl-10">
                                    <img src="../certi8.webp" alt="..."/>
                                    <p className='text-green-900'>CORE + CODING</p>
                                    <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                        Biller (CPB)® dual certifications</p>
                                    <button class="px-12 py-3 rounded-full">
                                        <a href="./Certified_Professional_Coder"
                                            class="rounded-full text-xl text-green-900">Read more</a>
                                    </button>
                                </div>
                                <div class="bg-slate-100 pl-10">
                                    <img src="../certi9.webp" alt="..."/>
                                    <p className='text-green-900'>CORE + CODING</p>
                                    <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                        Biller (CPB)® dual certifications</p>
                                    <button class="px-12 py-3 rounded-full">
                                        <a href="./Certified_Professional_Coder"
                                            class="rounded-full text-xl text-green-900">Read more</a>
                                    </button>
                                </div>
                                <div class="bg-slate-100 pl-10">
                                    <img src="../certi10.webp" alt="..."/>
                                    <p className='text-green-900'>CORE + CODING</p>
                                    <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                        Biller (CPB)® dual certifications</p>
                                    <button class="px-12 py-3 rounded-full">
                                        <a href="./Certified_Professional_Coder"
                                            class="rounded-full text-xl text-green-900">Read more</a>
                                    </button>
                                </div>
                                <div class="bg-slate-100 pl-10">
                                    <img src="../certi11.webp" alt="..."/>
                                    <p className='text-green-900'>CORE + CODING</p>
                                    <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                        Biller (CPB)® dual certifications</p>
                                    <button class="px-12 py-3 rounded-full">
                                        <a href="./Certified_Professional_Coder"
                                            class="rounded-full text-xl text-green-900">Read more</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    )}
                    {activeTab === 'tab2' && (
                    <div className="p-4 bg-white rounded-lg shadow">
                        <div className="p-4 bg-white rounded-lg shadow">
                        <div class="grid place-items-center mt-16">
                            <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 w-100 gap-4">
                                <div class="bg-slate-100 pl-10">
                                    <img src="../certi7.webp" alt="..."/>
                                    <p className='text-green-900'>CORE + CODING</p>
                                    <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                        Biller (CPB)® dual certifications</p>
                                    <button class="px-12 py-3 rounded-full">
                                        <a href="./Certified_Professional_Coder"
                                            class="rounded-full text-xl text-green-900">Read more</a>
                                    </button>
                                </div>
                                <div class="bg-slate-100 pl-10">
                                    <img src="../certi8.webp" alt="..."/>
                                    <p className='text-green-900'>CORE + CODING</p>
                                    <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                        Biller (CPB)® dual certifications</p>
                                    <button class="px-12 py-3 rounded-full">
                                        <a href="./Certified_Professional_Coder"
                                            class="rounded-full text-xl text-green-900">Read more</a>
                                    </button>
                                </div>
                                <div class="bg-slate-100 pl-10">
                                    <img src="../certi9.webp" alt="..."/>
                                    <p className='text-green-900'>CORE + CODING</p>
                                    <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                        Biller (CPB)® dual certifications</p>
                                    <button class="px-12 py-3 rounded-full">
                                        <a href="./Certified_Professional_Coder"
                                            class="rounded-full text-xl text-green-900">Read more</a>
                                    </button>
                                </div>
                                <div class="bg-slate-100 pl-10">
                                    <img src="../certi10.webp" alt="..."/>
                                    <p className='text-green-900'>CORE + CODING</p>
                                    <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                        Biller (CPB)® dual certifications</p>
                                    <button class="px-12 py-3 rounded-full">
                                        <a href="./Certified_Professional_Coder"
                                            class="rounded-full text-xl text-green-900">Read more</a>
                                    </button>
                                </div>
                                <div class="bg-slate-100 pl-10">
                                    <img src="../certi11.webp" alt="..."/>
                                    <p className='text-green-900'>CORE + CODING</p>
                                    <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                        Biller (CPB)® dual certifications</p>
                                    <button class="px-12 py-3 rounded-full">
                                        <a href="./Certified_Professional_Coder"
                                            class="rounded-full text-xl text-green-900">Read more</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    )}
                    {activeTab === 'tab3' &&(
                        <div className="p-4 bg-white rounded-lg shadow">
                           <div className="p-4 bg-white rounded-lg shadow">
                        <div class="grid place-items-center mt-16">
                            <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 w-100 gap-4">
                                <div class="bg-slate-100 pl-10">
                                    <img src="../certi7.webp" alt="..."/>
                                    <p className='text-green-900'>CORE + CODING</p>
                                    <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                        Biller (CPB)® dual certifications</p>
                                    <button class="px-12 py-3 rounded-full">
                                        <a href="./Certified_Professional_Coder"
                                            class="rounded-full text-xl text-green-900">Read more</a>
                                    </button>
                                </div>
                                <div class="bg-slate-100 pl-10">
                                    <img src="../certi8.webp" alt="..."/>
                                    <p className='text-green-900'>CORE + CODING</p>
                                    <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                        Biller (CPB)® dual certifications</p>
                                    <button class="px-12 py-3 rounded-full">
                                        <a href="./Certified_Professional_Coder"
                                            class="rounded-full text-xl text-green-900">Read more</a>
                                    </button>
                                </div>
                                <div class="bg-slate-100 pl-10">
                                    <img src="../certi9.webp" alt="..."/>
                                    <p className='text-green-900'>CORE + CODING</p>
                                    <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                        Biller (CPB)® dual certifications</p>
                                    <button class="px-12 py-3 rounded-full">
                                        <a href="./Certified_Professional_Coder"
                                            class="rounded-full text-xl text-green-900">Read more</a>
                                    </button>
                                </div>
                                <div class="bg-slate-100 pl-10">
                                    <img src="../certi10.webp" alt="..."/>
                                    <p className='text-green-900'>CORE + CODING</p>
                                    <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                        Biller (CPB)® dual certifications</p>
                                    <button class="px-12 py-3 rounded-full">
                                        <a href="./Certified_Professional_Coder"
                                            class="rounded-full text-xl text-green-900">Read more</a>
                                    </button>
                                </div>
                                <div class="bg-slate-100 pl-10">
                                    <img src="../certi11.webp" alt="..."/>
                                    <p className='text-green-900'>CORE + CODING</p>
                                    <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                        Biller (CPB)® dual certifications</p>
                                    <button class="px-12 py-3 rounded-full">
                                        <a href="./Certified_Professional_Coder"
                                            class="rounded-full text-xl text-green-900">Read more</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                        </div>
                    )}
                    {activeTab === 'tab4' &&(
                        <div className="p-4 bg-white rounded-lg shadow">
                           <div className="p-4 bg-white rounded-lg shadow">
                        <div class="grid place-items-center mt-16">
                            <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 w-100 gap-4">
                                <div class="bg-slate-100 pl-10">
                                    <img src="../certi4.webp" alt="..."/>
                                    <p className='text-green-900'>CORE + CODING</p>
                                    <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                        Biller (CPB)® dual certifications</p>
                                    <button class="px-12 py-3 rounded-full">
                                        <a href="./Certified_Professional_Coder"
                                            class="rounded-full text-xl text-green-900">Read more</a>
                                    </button>
                                </div>
                                <div class="bg-slate-100 pl-10">
                                    <img src="../certi5.webp" alt="..."/>
                                    <p className='text-green-900'>CORE + CODING</p>
                                    <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                        Biller (CPB)® dual certifications</p>
                                    <button class="px-12 py-3 rounded-full">
                                        <a href="./Certified_Professional_Coder"
                                            class="rounded-full text-xl text-green-900">Read more</a>
                                    </button>
                                </div>
                                <div class="bg-slate-100 pl-10">
                                    <img src="../certi6.webp" alt="..."/>
                                    <p className='text-green-900'>CORE + CODING</p>
                                    <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                        Biller (CPB)® dual certifications</p>
                                    <button class="px-12 py-3 rounded-full">
                                        <a href="./Certified_Professional_Coder"
                                            class="rounded-full text-xl text-green-900">Read more</a>
                                    </button>
                                </div>
                                <div class="bg-slate-100 pl-10">
                                    <img src="../certi7.webp" alt="..."/>
                                    <p className='text-green-900'>CORE + CODING</p>
                                    <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                        Biller (CPB)® dual certifications</p>
                                    <button class="px-12 py-3 rounded-full">
                                        <a href="./Certified_Professional_Coder"
                                            class="rounded-full text-xl text-green-900">Read more</a>
                                    </button>
                                </div>
                                <div class="bg-slate-100 pl-10">
                                    <img src="../certi8.webp" alt="..."/>
                                    <p className='text-green-900'>CORE + CODING</p>
                                    <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                        Biller (CPB)® dual certifications</p>
                                    <button class="px-12 py-3 rounded-full">
                                        <a href="./Certified_Professional_Coder"
                                            class="rounded-full text-xl text-green-900">Read more</a>
                                    </button>
                                </div>
                                <div class="bg-slate-100 pl-10">
                                    <img src="../certi9.webp" alt="..."/>
                                    <p className='text-green-900'>CORE + CODING</p>
                                    <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                        Biller (CPB)® dual certifications</p>
                                    <button class="px-12 py-3 rounded-full">
                                        <a href="./Certified_Professional_Coder"
                                            class="rounded-full text-xl text-green-900">Read more</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                        </div>
                    )}
                     {activeTab === 'tab5' &&(
                        <div className="p-4 bg-white rounded-lg shadow">
                            <div className="p-4 bg-white rounded-lg shadow">
                        <div class="grid place-items-center mt-16">
                            <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 w-100 gap-4">
                                <div class="bg-slate-100 pl-10">
                                    <img src="../certi4.webp" alt="..."/>
                                    <p className='text-green-900'>CORE + CODING</p>
                                    <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                        Biller (CPB)® dual certifications</p>
                                    <button class="px-12 py-3 rounded-full">
                                        <a href="./Certified_Professional_Coder"
                                            class="rounded-full text-xl text-green-900">Read more</a>
                                    </button>
                                </div>
                                <div class="bg-slate-100 pl-10">
                                    <img src="../certi8.webp" alt="..."/>
                                    <p className='text-green-900'>CORE + CODING</p>
                                    <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                        Biller (CPB)® dual certifications</p>
                                    <button class="px-12 py-3 rounded-full">
                                        <a href="./Certified_Professional_Coder"
                                            class="rounded-full text-xl text-green-900">Read more</a>
                                    </button>
                                </div>
                                <div class="bg-slate-100 pl-10">
                                    <img src="../certi9.webp" alt="..."/>
                                    <p className='text-green-900'>CORE + CODING</p>
                                    <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                        Biller (CPB)® dual certifications</p>
                                    <button class="px-12 py-3 rounded-full">
                                        <a href="./Certified_Professional_Coder"
                                            class="rounded-full text-xl text-green-900">Read more</a>
                                    </button>
                                </div>
                                <div class="bg-slate-100 pl-10">
                                    <img src="../certi10.webp" alt="..."/>
                                    <p className='text-green-900'>CORE + CODING</p>
                                    <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                        Biller (CPB)® dual certifications</p>
                                    <button class="px-12 py-3 rounded-full">
                                        <a href="./Certified_Professional_Coder"
                                            class="rounded-full text-xl text-green-900">Read more</a>
                                    </button>
                                </div>
                                <div class="bg-slate-100 pl-10">
                                    <img src="../certi11.webp" alt="..."/>
                                    <p className='text-green-900'>CORE + CODING</p>
                                    <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                        Biller (CPB)® dual certifications</p>
                                    <button class="px-12 py-3 rounded-full">
                                        <a href="./Certified_Professional_Coder"
                                            class="rounded-full text-xl text-green-900">Read more</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                        </div>
                    )}
                    {activeTab === 'tab6' &&(
                        <div className="p-4 bg-white rounded-lg shadow">
                            <div className="p-4 bg-white rounded-lg shadow">
                        <div class="grid place-items-center mt-16">
                            <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 w-100 gap-4">
                               <div class="bg-slate-100 pl-10">
                                    <img src="../certi5.webp" alt="..."/>
                                    <p className='text-green-900'>CORE + CODING</p>
                                    <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                        Biller (CPB)® dual certifications</p>
                                    <button class="px-12 py-3 rounded-full">
                                        <a href="./Certified_Professional_Coder"
                                            class="rounded-full text-xl text-green-900">Read more</a>
                                    </button>
                                </div>
                                <div class="bg-slate-100 pl-10">
                                    <img src="../certi8.webp" alt="..."/>
                                    <p className='text-green-900'>CORE + CODING</p>
                                    <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                        Biller (CPB)® dual certifications</p>
                                    <button class="px-12 py-3 rounded-full">
                                        <a href="./Certified_Professional_Coder"
                                            class="rounded-full text-xl text-green-900">Read more</a>
                                    </button>
                                </div>
                                <div class="bg-slate-100 pl-10">
                                    <img src="../certi9.webp" alt="..."/>
                                    <p className='text-green-900'>CORE + CODING</p>
                                    <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                        Biller (CPB)® dual certifications</p>
                                    <button class="px-12 py-3 rounded-full">
                                        <a href="./Certified_Professional_Coder"
                                            class="rounded-full text-xl text-green-900">Read more</a>
                                    </button>
                                </div>
                                <div class="bg-slate-100 pl-10">
                                    <img src="../certi10.webp" alt="..."/>
                                    <p className='text-green-900'>CORE + CODING</p>
                                    <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                        Biller (CPB)® dual certifications</p>
                                    <button class="px-12 py-3 rounded-full">
                                        <a href="./Certified_Professional_Coder"
                                            class="rounded-full text-xl text-green-900">Read more</a>
                                    </button>
                                </div>
                                <div class="bg-slate-100 pl-10">
                                    <img src="../certi11.webp" alt="..."/>
                                    <p className='text-green-900'>CORE + CODING</p>
                                    <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                        Biller (CPB)® dual certifications</p>
                                    <button class="px-12 py-3 rounded-full">
                                        <a href="./Certified_Professional_Coder"
                                            class="rounded-full text-xl text-green-900">Read more</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                        </div>
                    )}
                    {activeTab === 'tab7' &&(
                        <div className="p-4 bg-white rounded-lg shadow">
                           <div className="p-4 bg-white rounded-lg shadow">
                        <div class="grid place-items-center mt-16">
                            <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 w-100 gap-4">
                                <div class="bg-slate-100 pl-10">
                                    <img src="../certi8.webp" alt="..."/>
                                    <p className='text-green-900'>CORE + CODING</p>
                                    <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                        Biller (CPB)® dual certifications</p>
                                    <button class="px-12 py-3 rounded-full">
                                        <a href="./Certified_Professional_Coder"
                                            class="rounded-full text-xl text-green-900">Read more</a>
                                    </button>
                                </div>
                                <div class="bg-slate-100 pl-10">
                                    <img src="../certi11.webp" alt="..."/>
                                    <p className='text-green-900'>CORE + CODING</p>
                                    <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                        Biller (CPB)® dual certifications</p>
                                    <button class="px-12 py-3 rounded-full">
                                        <a href="./Certified_Professional_Coder"
                                            class="rounded-full text-xl text-green-900">Read more</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                        </div>
                    )}
                    {activeTab === 'tab8' &&(
                        <div className="p-4 bg-white rounded-lg shadow">
                            <div className="p-4 bg-white rounded-lg shadow">
                        <div class="grid place-items-center mt-16">
                            <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 w-100 gap-4">
                               <div class="bg-slate-100 pl-10">
                                    <img src="../certi9.webp" alt="..."/>
                                    <p className='text-green-900'>CORE + CODING</p>
                                    <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                        Biller (CPB)® dual certifications</p>
                                    <button class="px-12 py-3 rounded-full">
                                        <a href="./Certified_Professional_Coder"
                                            class="rounded-full text-xl text-green-900">Read more</a>
                                    </button>
                                </div>
                                <div class="bg-slate-100 pl-10">
                                    <img src="../certi11.webp" alt="..."/>
                                    <p className='text-green-900'>CORE + CODING</p>
                                    <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                        Biller (CPB)® dual certifications</p>
                                    <button class="px-12 py-3 rounded-full">
                                        <a href="./Certified_Professional_Coder"
                                            class="rounded-full text-xl text-green-900">Read more</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                        </div>
                    )}
                    {activeTab === 'tab9' &&(
                        <div className="p-4 bg-white rounded-lg shadow">
                           <div className="p-4 bg-white rounded-lg shadow">
                        <div class="grid place-items-center mt-16">
                            <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 w-100 gap-4">
                               <div class="bg-slate-100 pl-10">
                                    <img src="../certi3.webp" alt="..."/>
                                    <p className='text-green-900'>CORE + CODING</p>
                                    <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                        Biller (CPB)® dual certifications</p>
                                    <button class="px-12 py-3 rounded-full">
                                        <a href="./Certified_Professional_Coder"
                                            class="rounded-full text-xl text-green-900">Read more</a>
                                    </button>
                                </div>
                           </div>
                        </div>
                    </div>
                        </div>
                    )}
                    {activeTab === 'tab10' &&(
                        <div className="p-4 bg-white rounded-lg shadow">
                            <div className="p-4 bg-white rounded-lg shadow">
                        <div class="grid place-items-center mt-16">
                            <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 w-100 gap-4">
                                <div class="bg-slate-100 pl-10">
                                    <img src="../certi7.webp" alt="..."/>
                                    <p className='text-green-900'>CORE + CODING</p>
                                    <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                        Biller (CPB)® dual certifications</p>
                                    <button class="px-12 py-3 rounded-full">
                                        <a href="./Certified_Professional_Coder"
                                            class="rounded-full text-xl text-green-900">Read more</a>
                                    </button>
                                </div>
                                <div class="bg-slate-100 pl-10">
                                    <img src="../certi10.webp" alt="..."/>
                                    <p className='text-green-900'>CORE + CODING</p>
                                    <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                        Biller (CPB)® dual certifications</p>
                                    <button class="px-12 py-3 rounded-full">
                                        <a href="./Certified_Professional_Coder"
                                            class="rounded-full text-xl text-green-900">Read more</a>
                                    </button>
                                </div>
                                <div class="bg-slate-100 pl-10">
                                    <img src="../certi11.webp" alt="..."/>
                                    <p className='text-green-900'>CORE + CODING</p>
                                    <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                        Biller (CPB)® dual certifications</p>
                                    <button class="px-12 py-3 rounded-full">
                                        <a href="./Certified_Professional_Coder"
                                            class="rounded-full text-xl text-green-900">Read more</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                        </div>
                    )}
                    {activeTab === 'tab11' &&(
                        <div className="p-4 bg-white rounded-lg shadow">
                            <div className="p-4 bg-white rounded-lg shadow">
                        <div class="grid place-items-center mt-16">
                            <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 w-100 gap-4">
                                <div class="bg-slate-100 pl-10">
                                    <img src="../certi6.webp" alt="..."/>
                                    <p className='text-green-900'>CORE + CODING</p>
                                    <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                        Biller (CPB)® dual certifications</p>
                                    <button class="px-12 py-3 rounded-full">
                                        <a href="./Certified_Professional_Coder"
                                            class="rounded-full text-xl text-green-900">Read more</a>
                                    </button>
                                </div>
                                <div class="bg-slate-100 pl-10">
                                    <img src="../certi7.webp" alt="..."/>
                                    <p className='text-green-900'>CORE + CODING</p>
                                    <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                        Biller (CPB)® dual certifications</p>
                                    <button class="px-12 py-3 rounded-full">
                                        <a href="./Certified_Professional_Coder"
                                            class="rounded-full text-xl text-green-900">Read more</a>
                                    </button>
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

export default Certificattab