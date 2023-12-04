import React from 'react'

const Banner1 = () => {
  return (
    <div>
        <div className="grid w-full bg-green-800 bg-cover bg-center py-56" style={{ backgroundImage: 'url("../ris.webp")' }}>
                <div className="2xl:w-8/12 xl:w-8/12 lg:w-8/12 md:w-8/12 sm:w-8/12 w-8/12 justify-center mx-auto">
                    <p className="text-white text-xl">BUSINESS AND ACADEMIC SOLUTIONS</p>
                    <h3 className="text-white text-5xl">You have revenue goals.<br/>We help you meet them.</h3>
                    <button class="px-12 py-3 my-5 rounded-full bg-gray-500">
                        <a href="https://tailwindui.com/documentation"
                            class="rounded-full text-xl text-white">LET'S TALK 
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-fw text-sm h-8 w-6 inline-block text-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                            <path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></a>
                    </button>
                 </div>
             </div>
             <div className="grid place-items-center">
                <div className="w-full justify-center mx-auto bg-gray-200">
                    <div className="flex flex-col 2xl:w-8/12 xl:w-full lg:w-full md:w-full sm:w-full w-full justify-center mx-auto">
                        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 w-100 bg-gray-200 mt-0">
                            <div className="py-5 col-span-2">
                                <p className="text-gray-700 text-lg text-center">
                                    Take 50% off everything you need to get certified. Pay over time starting at 0% financing.</p>
                            </div>
                            <div className="sm:pt-4">
                                <button className="text-green-700 hover:text-green-800 font-bold py-2 px-4 rounded text-lg">
                                    Save Now<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right fa-fw text-sm h-5 w-6 inline-block text-green-800" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg>
                                </button>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Banner1