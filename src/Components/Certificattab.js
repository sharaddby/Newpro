import { React, useState } from 'react'

const Certificattab = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <div>
            <div class="grid place-items-center mt-10">
                <div class="2xl:w-8/12 xl:w-8/12 lg:w-full md:w-full sm:w-full w-full justify-center mx-auto mt-20 mb-20">
                    <h3 className='text-3xl'>All certifications</h3>

                    <div className="grid 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 space-x-1 mt-5">

                        <button
                            className={`${activeTab === 'tab1' ? 'bg-blue-500' : 'bg-gray-200'
                                } px-3 mt-3 py-2 rounded-lg`}
                            onClick={() => handleTabClick('tab1')}
                        >
                            ALL
                        </button>
                        <button
                            className={`${activeTab === 'tab2' ? 'bg-blue-500' : 'bg-gray-200'
                                } px-3 mt-3 py-2 rounded-lg`}
                            onClick={() => handleTabClick('tab2')}
                        >
                            CODING
                        </button>
                        <button
                            className={`${activeTab === 'tab3' ? 'bg-blue-500' : 'bg-gray-200'
                                } px-3 mt-3 py-2 rounded-lg`}
                            onClick={() => handleTabClick('tab3')}
                        >
                            BILLING
                        </button>
                        <button
                            className={`${activeTab === 'tab4' ? 'bg-blue-500' : 'bg-gray-200'
                                } px-3 mt-3 py-2 rounded-lg`}
                            onClick={() => handleTabClick('tab4')}
                        >
                            CORE
                        </button>
                        <button
                            className={`${activeTab === 'tab5' ? 'bg-blue-500' : 'bg-gray-200'
                                } px-3 mt-3 py-2 rounded-lg`}
                            onClick={() => handleTabClick('tab5')}
                        >
                            AUDITING
                        </button>
                        <button
                            className={`${activeTab === 'tab6' ? 'bg-blue-500' : 'bg-gray-200'
                                } px-3 mt-3 py-2 rounded-lg`}
                            onClick={() => handleTabClick('tab6')}
                        >
                            PRACTICE MANAGEMENT
                        </button>
                        <button
                            className={`${activeTab === 'tab7' ? 'bg-blue-500' : 'bg-gray-200'
                                } px-3 mt-3 py-2 rounded-lg`}
                            onClick={() => handleTabClick('tab7')}
                        >
                            COMPLIANCE
                        </button>
                        <button
                            className={`${activeTab === 'tab8' ? 'bg-blue-500' : 'bg-gray-200'
                                } xl:px-1 mt-3 py-2 rounded-lg`}
                            onClick={() => handleTabClick('tab8')}
                        >
                            DOCUMENTATION
                        </button>
                        <button
                            className={`${activeTab === 'tab9' ? 'bg-blue-500' : 'bg-gray-200'
                                } px-3 mt-3 py-2 rounded-lg`}
                            onClick={() => handleTabClick('tab9')}
                        >
                            SPECIALTY
                        </button>
                        <button
                            className={`${activeTab === 'tab10' ? 'bg-blue-500' : 'bg-gray-200'
                                } px-3 mt-3 py-2 rounded-lg`}
                            onClick={() => handleTabClick('tab10')}
                        >
                            SCRIBE
                        </button>
                        <button
                            className={`${activeTab === 'tab11' ? 'bg-blue-500' : 'bg-gray-200'
                                } px-3 mt-3  py-2 rounded-lg`}
                            onClick={() => handleTabClick('tab11')}
                        >
                            INSTRUCTOR
                        </button>
                    </div>
                    <div className="mt-4">
                        {activeTab === 'tab1' && (
                            <div className="p-4 bg-white rounded-lg">
                                <div class="p-4 grid place-items-center mt-16">
                                    <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:w-100 w-100 gap-4">
                                        <div class="bg-slate-100 pl-10 hover:shadow-2xl ">
                                            <img src="../certi8.webp" alt="..." />
                                            <p className='text-green-900'>CORE + CODING</p>
                                            <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                                Biller (CPB)® dual certifications</p>
                                            <button class="py-3 rounded-full">
                                                <a href="./Certified_Professional_Coder"
                                                    class="rounded-full text-xl text-green-900 hover:footsky ">read more<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></a>
                                            </button>
                                        </div>
                                        <div class="bg-slate-100 pl-10 hover:shadow-2xl">
                                            <img src="../certi9.webp" alt="..." />
                                            <p className='text-green-900'>CORE + CODING</p>
                                            <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                                Biller (CPB)® dual certifications</p>
                                            <button class="py-3 rounded-full">
                                                <a href="./Certified_Professional_Coder"
                                                    class="rounded-full text-xl text-green-900 hover:footsky">read more<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></a>
                                            </button>
                                        </div>
                                        <div class="bg-slate-100 pl-10 hover:shadow-2xl">
                                            <img src="../certi10.webp" alt="..." />
                                            <p className='text-green-900'>CORE + CODING</p>
                                            <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                                Biller (CPB)® dual certifications</p>
                                            <button class="py-3 rounded-full">
                                                <a href="./Certified_Professional_Coder"
                                                    class="rounded-full text-xl text-green-900 hover:footsky">read more<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></a>
                                            </button>
                                        </div>
                                        <div class="bg-slate-100 pl-10 hover:shadow-2xl">
                                            <img src="../certi11.webp" alt="..." />
                                            <p className='text-green-900'>CORE + CODING</p>
                                            <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                                Biller (CPB)® dual certifications</p>
                                            <button class="py-3 rounded-full">
                                                <a href="./Certified_Professional_Coder"
                                                    class="rounded-full text-xl text-green-900 hover:footsky">read more<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'tab2' && (
                            <div className="p-4 bg-white">
                                <div class="grid place-items-center mt-16">
                                    <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 w-100 gap-4">
                                        <div class="bg-slate-100 pl-10 hover:shadow-2xl">
                                            <img src="../certi7.webp" alt="..." />
                                            <p className='text-green-900'>CORE + CODING</p>
                                            <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                                Biller (CPB)® dual certifications</p>
                                            <button class="py-3 rounded-full">
                                                <a href="./Certified_Professional_Coder"
                                                    class="rounded-full text-xl text-green-900 hover:footsky">read more<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></a>
                                            </button>
                                        </div>
                                        <div class="bg-slate-100 pl-10 hover:shadow-2xl">
                                            <img src="../certi8.webp" alt="..." />
                                            <p className='text-green-900'>CORE + CODING</p>
                                            <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                                Biller (CPB)® dual certifications</p>
                                            <button class="py-3 rounded-full">
                                                <a href="./Certified_Professional_Coder"
                                                    class="rounded-full text-xl text-green-900 hover:footsky">read more<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></a>
                                            </button>
                                        </div>
                                        <div class="bg-slate-100 pl-10 hover:shadow-2xl">
                                            <img src="../certi9.webp" alt="..." />
                                            <p className='text-green-900'>CORE + CODING</p>
                                            <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                                Biller (CPB)® dual certifications</p>
                                            <button class="py-3 rounded-full">
                                                <a href="./Certified_Professional_Coder"
                                                    class="rounded-full text-xl text-green-900 hover:footsky">read more<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></a>
                                            </button>
                                        </div>
                                        <div class="bg-slate-100 pl-10 hover:shadow-2xl">
                                            <img src="../certi10.webp" alt="..." />
                                            <p className='text-green-900'>CORE + CODING</p>
                                            <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                                Biller (CPB)® dual certifications</p>
                                            <button class="py-3 rounded-full">
                                                <a href="./Certified_Professional_Coder"
                                                    class="rounded-full text-xl text-green-900 hover:footsky">read more<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></a>
                                            </button>
                                        </div>
                                        <div class="bg-slate-100 pl-10 hover:shadow-2xl">
                                            <img src="../certi11.webp" alt="..." />
                                            <p className='text-green-900'>CORE + CODING</p>
                                            <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                                Biller (CPB)® dual certifications</p>
                                            <button class="py-3 rounded-full">
                                                <a href="./Certified_Professional_Coder"
                                                    class="rounded-full text-xl text-green-900 hover:footsky">read more<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'tab3' && (
                            <div className="p-4 bg-white">
                                <div class="grid place-items-center mt-16">
                                    <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 w-100 gap-4">
                                        <div class="bg-slate-100 pl-10 hover:shadow-2xl">
                                            <img src="../certi7.webp" alt="..." />
                                            <p className='text-green-900'>CORE + CODING</p>
                                            <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                                Biller (CPB)® dual certifications</p>
                                            <button class="py-3 rounded-full">
                                                <a href="./Certified_Professional_Coder"
                                                    class="rounded-full text-xl text-green-900 hover:footsky">read more<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></a>
                                            </button>
                                        </div>
                                        <div class="bg-slate-100 pl-10 hover:shadow-2xl">
                                            <img src="../certi8.webp" alt="..." />
                                            <p className='text-green-900'>CORE + CODING</p>
                                            <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                                Biller (CPB)® dual certifications</p>
                                            <button class="py-3 rounded-full">
                                                <a href="./Certified_Professional_Coder"
                                                    class="rounded-full text-xl text-green-900 hover:footsky">read more<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></a>
                                            </button>
                                        </div>
                                        <div class="bg-slate-100 pl-10 hover:shadow-2xl">
                                            <img src="../certi9.webp" alt="..." />
                                            <p className='text-green-900'>CORE + CODING</p>
                                            <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                                Biller (CPB)® dual certifications</p>
                                            <button class="py-3 rounded-full">
                                                <a href="./Certified_Professional_Coder"
                                                    class="rounded-full text-xl text-green-900 hover:footsky">read more<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></a>
                                            </button>
                                        </div>
                                        <div class="bg-slate-100 pl-10 hover:shadow-2xl">
                                            <img src="../certi10.webp" alt="..." />
                                            <p className='text-green-900'>CORE + CODING</p>
                                            <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                                Biller (CPB)® dual certifications</p>
                                            <button class="py-3 rounded-full">
                                                <a href="./Certified_Professional_Coder"
                                                    class="rounded-full text-xl text-green-900 hover:footsky">read more<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></a>
                                            </button>
                                        </div>
                                        <div class="bg-slate-100 pl-10 hover:shadow-2xl">
                                            <img src="../certi11.webp" alt="..." />
                                            <p className='text-green-900'>CORE + CODING</p>
                                            <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                                Biller (CPB)® dual certifications</p>
                                            <button class="py-3 rounded-full">
                                                <a href="./Certified_Professional_Coder"
                                                    class="rounded-full text-xl text-green-900 hover:footsky">read more<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'tab4' && (
                            <div className="p-4 bg-white">
                                <div class="grid place-items-center mt-16">
                                    <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 w-100 gap-4">
                                        <div class="bg-slate-100 pl-10 hover:shadow-2xl">
                                            <img src="../certi4.webp" alt="..." />
                                            <p className='text-green-900'>CORE + CODING</p>
                                            <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                                Biller (CPB)® dual certifications</p>
                                            <button class="py-3 rounded-full">
                                                <a href="./Certified_Professional_Coder"
                                                    class="rounded-full text-xl text-green-900 hover:footsky">read more<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></a>
                                            </button>
                                        </div>
                                        <div class="bg-slate-100 pl-10 hover:shadow-2xl">
                                            <img src="../certi5.webp" alt="..." />
                                            <p className='text-green-900'>CORE + CODING</p>
                                            <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                                Biller (CPB)® dual certifications</p>
                                            <button class="py-3 rounded-full">
                                                <a href="./Certified_Professional_Coder"
                                                    class="rounded-full text-xl text-green-900 hover:footsky">read more<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></a>
                                            </button>
                                        </div>
                                        <div class="bg-slate-100 pl-10 hover:shadow-2xl">
                                            <img src="../certi6.webp" alt="..." />
                                            <p className='text-green-900'>CORE + CODING</p>
                                            <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                                Biller (CPB)® dual certifications</p>
                                            <button class="py-3 rounded-full">
                                                <a href="./Certified_Professional_Coder"
                                                    class="rounded-full text-xl text-green-900 hover:footsky">read more<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></a>
                                            </button>
                                        </div>
                                        <div class="bg-slate-100 pl-10 hover:shadow-2xl">
                                            <img src="../certi7.webp" alt="..." />
                                            <p className='text-green-900'>CORE + CODING</p>
                                            <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                                Biller (CPB)® dual certifications</p>
                                            <button class="py-3 rounded-full">
                                                <a href="./Certified_Professional_Coder"
                                                    class="rounded-full text-xl text-green-900 hover:footsky">read more<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></a>
                                            </button>
                                        </div>
                                        <div class="bg-slate-100 pl-10 hover:shadow-2xl">
                                            <img src="../certi8.webp" alt="..." />
                                            <p className='text-green-900'>CORE + CODING</p>
                                            <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                                Biller (CPB)® dual certifications</p>
                                            <button class="py-3 rounded-full">
                                                <a href="./Certified_Professional_Coder"
                                                    class="rounded-full text-xl text-green-900 hover:footsky">read more<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></a>
                                            </button>
                                        </div>
                                        <div class="bg-slate-100 pl-10 hover:shadow-2xl">
                                            <img src="../certi9.webp" alt="..." />
                                            <p className='text-green-900'>CORE + CODING</p>
                                            <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                                Biller (CPB)® dual certifications</p>
                                            <button class="py-3 rounded-full">
                                                <a href="./Certified_Professional_Coder"
                                                    class="rounded-full text-xl text-green-900 hover:footsky">read more<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'tab5' && (
                            <div className="p-4 bg-white">
                                <div class="grid place-items-center mt-16">
                                    <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 w-100 gap-4">
                                        <div class="bg-slate-100 pl-10 hover:shadow-2xl">
                                            <img src="../certi4.webp" alt="..." />
                                            <p className='text-green-900'>CORE + CODING</p>
                                            <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                                Biller (CPB)® dual certifications</p>
                                            <button class="py-3 rounded-full">
                                                <a href="./Certified_Professional_Coder"
                                                    class="rounded-full text-xl text-green-900 hover:footsky">read more<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></a>
                                            </button>
                                        </div>
                                        <div class="bg-slate-100 pl-10 hover:shadow-2xl">
                                            <img src="../certi8.webp" alt="..." />
                                            <p className='text-green-900'>CORE + CODING</p>
                                            <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                                Biller (CPB)® dual certifications</p>
                                            <button class="py-3 rounded-full">
                                                <a href="./Certified_Professional_Coder"
                                                    class="rounded-full text-xl text-green-900 hover:footsky">read more<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></a>
                                            </button>
                                        </div>
                                        <div class="bg-slate-100 pl-10 hover:shadow-2xl">
                                            <img src="../certi9.webp" alt="..." />
                                            <p className='text-green-900'>CORE + CODING</p>
                                            <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                                Biller (CPB)® dual certifications</p>
                                            <button class="py-3 rounded-full">
                                                <a href="./Certified_Professional_Coder"
                                                    class="rounded-full text-xl text-green-900 hover:footsky">read more<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></a>
                                            </button>
                                        </div>
                                        <div class="bg-slate-100 pl-10 hover:shadow-2xl">
                                            <img src="../certi10.webp" alt="..." />
                                            <p className='text-green-900'>CORE + CODING</p>
                                            <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                                Biller (CPB)® dual certifications</p>
                                            <button class="py-3 rounded-full">
                                                <a href="./Certified_Professional_Coder"
                                                    class="rounded-full text-xl text-green-900 hover:footsky">read more<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></a>
                                            </button>
                                        </div>
                                        <div class="bg-slate-100 pl-10 hover:shadow-2xl">
                                            <img src="../certi11.webp" alt="..." />
                                            <p className='text-green-900'>CORE + CODING</p>
                                            <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                                Biller (CPB)® dual certifications</p>
                                            <button class="py-3 rounded-full">
                                                <a href="./Certified_Professional_Coder"
                                                    class="rounded-full text-xl text-green-900 hover:footsky">read more<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'tab6' && (
                            <div className="p-4 bg-white">
                                <div class="grid place-items-center mt-16">
                                    <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 w-100 gap-4">
                                        <div class="bg-slate-100 pl-10 hover:shadow-2xl">
                                            <img src="../certi5.webp" alt="..." />
                                            <p className='text-green-900'>CORE + CODING</p>
                                            <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                                Biller (CPB)® dual certifications</p>
                                            <button class="py-3 rounded-full">
                                                <a href="./Certified_Professional_Coder"
                                                    class="rounded-full text-xl text-green-900 hover:footsky">read more<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></a>
                                            </button>
                                        </div>
                                        <div class="bg-slate-100 pl-10 hover:shadow-2xl">
                                            <img src="../certi8.webp" alt="..." />
                                            <p className='text-green-900'>CORE + CODING</p>
                                            <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                                Biller (CPB)® dual certifications</p>
                                            <button class="py-3 rounded-full">
                                                <a href="./Certified_Professional_Coder"
                                                    class="rounded-full text-xl text-green-900 hover:footsky">read more<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></a>
                                            </button>
                                        </div>
                                        <div class="bg-slate-100 pl-10 hover:shadow-2xl">
                                            <img src="../certi9.webp" alt="..." />
                                            <p className='text-green-900'>CORE + CODING</p>
                                            <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                                Biller (CPB)® dual certifications</p>
                                            <button class="py-3 rounded-full">
                                                <a href="./Certified_Professional_Coder"
                                                    class="rounded-full text-xl text-green-900 hover:footsky">read more<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></a>
                                            </button>
                                        </div>
                                        <div class="bg-slate-100 pl-10 hover:shadow-2xl">
                                            <img src="../certi10.webp" alt="..." />
                                            <p className='text-green-900'>CORE + CODING</p>
                                            <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                                Biller (CPB)® dual certifications</p>
                                            <button class="py-3 rounded-full">
                                                <a href="./Certified_Professional_Coder"
                                                    class="rounded-full text-xl text-green-900 hover:footsky">read more<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></a>
                                            </button>
                                        </div>
                                        <div class="bg-slate-100 pl-10 hover:shadow-2xl">
                                            <img src="../certi11.webp" alt="..." />
                                            <p className='text-green-900'>CORE + CODING</p>
                                            <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                                Biller (CPB)® dual certifications</p>
                                            <button class="py-3 rounded-full">
                                                <a href="./Certified_Professional_Coder"
                                                    class="rounded-full text-xl text-green-900 hover:footsky">read more<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'tab7' && (
                            <div className="p-4 bg-white">
                                <div class="grid place-items-center mt-16">
                                    <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 w-100 gap-4">
                                        <div class="bg-slate-100 pl-10 hover:shadow-2xl">
                                            <img src="../certi8.webp" alt="..." />
                                            <p className='text-green-900'>CORE + CODING</p>
                                            <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                                Biller (CPB)® dual certifications</p>
                                            <button class="py-3 rounded-full">
                                                <a href="./Certified_Professional_Coder"
                                                    class="rounded-full text-xl text-green-900 hover:footsky">read more<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></a>
                                            </button>
                                        </div>
                                        <div class="bg-slate-100 pl-10 hover:shadow-2xl">
                                            <img src="../certi11.webp" alt="..." />
                                            <p className='text-green-900'>CORE + CODING</p>
                                            <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                                Biller (CPB)® dual certifications</p>
                                            <button class="py-3 rounded-full">
                                                <a href="./Certified_Professional_Coder"
                                                    class="rounded-full text-xl text-green-900 hover:footsky">read more<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'tab8' && (
                            <div className="p-4 bg-white">
                                <div class="grid place-items-center mt-16">
                                    <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 w-100 gap-4">
                                        <div class="bg-slate-100 pl-10 hover:shadow-2xl">
                                            <img src="../certi9.webp" alt="..." />
                                            <p className='text-green-900'>CORE + CODING</p>
                                            <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                                Biller (CPB)® dual certifications</p>
                                            <button class="py-3 rounded-full">
                                                <a href="./Certified_Professional_Coder"
                                                    class="rounded-full text-xl text-green-900 hover:footsky">read more<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></a>
                                            </button>
                                        </div>
                                        <div class="bg-slate-100 pl-10 hover:shadow-2xl">
                                            <img src="../certi11.webp" alt="..." />
                                            <p className='text-green-900'>CORE + CODING</p>
                                            <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                                Biller (CPB)® dual certifications</p>
                                            <button class="py-3 rounded-full">
                                                <a href="./Certified_Professional_Coder"
                                                    class="rounded-full text-xl text-green-900 hover:footsky">read more<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'tab9' && (
                            <div className="p-4 bg-white">
                                <div class="grid place-items-center mt-16">
                                    <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 w-100 gap-4">
                                        <div class="bg-slate-100 pl-10 hover:shadow-2xl">
                                            <img src="../certi3.webp" alt="..." />
                                            <p className='text-green-900'>CORE + CODING</p>
                                            <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                                Biller (CPB)® dual certifications</p>
                                            <button class="py-3 rounded-full">
                                                <a href="./Certified_Professional_Coder"
                                                    class="rounded-full text-xl text-green-900 hover:footsky">read more<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'tab10' && (
                            <div className="p-4 bg-white">
                                <div class="grid place-items-center mt-16">
                                    <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 w-100 gap-4">
                                        <div class="bg-slate-100 pl-10 hover:shadow-2xl">
                                            <img src="../certi7.webp" alt="..." />
                                            <p className='text-green-900'>CORE + CODING</p>
                                            <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                                Biller (CPB)® dual certifications</p>
                                            <button class="py-3 rounded-full">
                                                <a href="./Certified_Professional_Coder"
                                                    class="rounded-full text-xl text-green-900 hover:footsky">read more<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></a>
                                            </button>
                                        </div>
                                        <div class="bg-slate-100 pl-10 hover:shadow-2xl">
                                            <img src="../certi10.webp" alt="..." />
                                            <p className='text-green-900'>CORE + CODING</p>
                                            <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                                Biller (CPB)® dual certifications</p>
                                            <button class="py-3 rounded-full">
                                                <a href="./Certified_Professional_Coder"
                                                    class="rounded-full text-xl text-green-900 hover:footsky">read more<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></a>
                                            </button>
                                        </div>
                                        <div class="bg-slate-100 pl-10 hover:shadow-2xl">
                                            <img src="../certi11.webp" alt="..." />
                                            <p className='text-green-900'>CORE + CODING</p>
                                            <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                                Biller (CPB)® dual certifications</p>
                                            <button class="py-3 rounded-full">
                                                <a href="./Certified_Professional_Coder"
                                                    class="rounded-full text-xl text-green-900 hover:footsky">read more<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'tab11' && (
                            <div className="p-4 bg-white">
                                <div class="grid place-items-center mt-16">
                                    <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 w-100 gap-4">
                                        <div class="bg-slate-100 pl-10 hover:shadow-2xl">
                                            <img src="../certi6.webp" alt="..." />
                                            <p className='text-green-900'>CORE + CODING</p>
                                            <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                                Biller (CPB)® dual certifications</p>
                                            <button class="py-3 rounded-full">
                                                <a href="./Certified_Professional_Coder"
                                                    class="rounded-full text-xl text-green-900 hover:footsky">read more<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></a>
                                            </button>
                                        </div>
                                        <div class="bg-slate-100 pl-10 hover:shadow-2xl">
                                            <img src="../certi7.webp" alt="..." />
                                            <p className='text-green-900'>CORE + CODING</p>
                                            <p class="text-xl">Certified Professional Coder (CPC)® + Certified Professional
                                                Biller (CPB)® dual certifications</p>
                                            <button class="py-3 rounded-full">
                                                <a href="./Certified_Professional_Coder"
                                                    class="rounded-full text-xl text-green-900 hover:footsky">read more<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                                        <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></a>
                                            </button>
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