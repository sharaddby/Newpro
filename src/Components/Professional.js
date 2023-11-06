import React from 'react'

const Professional = () => {
  return (
    <div>
        <div class="grid 2xl:w-8/12 xl:w-8/12 lg:w-8/12 md:w-full sm:w-full w-full mx-auto">
            <h1 class="text-2xl mt-5 mb-5 font-semibold">Personal & Career Development Online Courses</h1>
            <div class="bg-green-800 h-56">
                <p class="relative text-2xl text-white pt-16 pl-16">Learning Never Ends</p>
                <h1 class="text-lg relative text-white pl-16 mt-5">Stay ahead of the competition, enroll now with AAPC's
                    Personal & Professional Development catalog.</h1>
            </div>
            <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 w-100 bg-green-950 h-20">
                <div class="pt-6">
                    <p class=" text-lg text-center text-yellow-700">Personal & Career Development Online Courses</p>
                </div>
                <div class="pt-6">
                    <form class="flex items-center">
                        <label for="voice-search" class="sr-only">Search</label>
                        <div class="relative w-full">
                            <input type="text"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search" required/>
                        </div>
                        <button type="submit"
                            class="inline-flex items-center py-2.5 px-16 ml-2 text-lg font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </div>
    <div class="grid 2xl:w-8/12 xl:w-8/12 lg:w-full md:w-full sm:w-full w-full justify-center mx-auto">
        <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-w-full">
            <div class="flex items-center">
                <input checked id="checked-checkbox" type="checkbox" value=""
                    class="w-4 h-4 text-blue-600 bg-gray-200 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>               <label for="checked-checkbox" class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300 mt-5">Not
                    an AAPC Member? Add an AAPC Membership to get the discounts listed below, or login here. </label>
            </div>
            <div class="flex items-center">
                <h3 class="px-5 py-5 mt-5">View</h3>
                <button id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownAvatarName"
                    class="mt-5 flex items-center text-md  text-gray-900  hover:text-black dark:hover:text-gray-200 md:mr-0 focus:ring-2 ring-2 focus:ring-inset-gray-100 dark:focus:ring-gray-700 dark:text-white border-green-500 w-72 px-3 py-3"
                    type="button">
                    <span class="sr-only">Open user menu</span>
                    All Category
                    <svg class="w-2.5 h-2.5 ml-36" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 1 4 4 4-4" />
                    </svg>
                </button>
               <div id="dropdownAvatarName"
                    class="border-green-500 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
                        <li>
                            <a href="good"
                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                        </li>
                        <li>
                            <a href="good"
                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                        </li>
                        <li>
                            <a href="good"
                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                        </li>
                    </ul>
                    <div class="py-2">
                        <a href="good"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign
                            out</a>
                    </div>
                </div>
            </div>
            <div class="flex items-center">
                <h3 class="px-5 py-5 mt-5">short by</h3>
                <button id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownAvatarName"
                    class="mt-5 flex items-center text-md  text-gray-900  hover:text-black dark:hover:text-gray-200 md:mr-0 focus:ring-2 ring-2 focus:ring-inset-gray-100 dark:focus:ring-gray-700 dark:text-white border-green-500 w-72 px-3 py-3"
                    type="button">
                    <span class="sr-only">Open user menu</span>
                    All Category
                    <svg class="w-2.5 h-2.5 ml-36" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 1 4 4 4-4" />
                    </svg>
                </button>
                <div id="dropdownAvatarName"
                    class="border-green-500 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
                        <li>
                            <a href="good"
                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                        </li>
                        <li>
                            <a href="good"
                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                        </li>
                        <li>
                            <a href="good"
                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                        </li>
                    </ul>
                    <div class="py-2">
                        <a href="good"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign
                            out</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="grid 2xl:w-8/12 cl:w-8/12 lg:w-full md:w-full sm:w-full w-full justify-center mx-auto">
        <div class="grid 2xl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1">
            <div class="bg-slate-100 pl-10">
                <img src="../pro.jpg" alt="..."/>
                <p class="text-xl text-lightsky">LGBT+ Equality in the Workplace -</p>
                <del>$222</del><p class="text-lightsky">(Member: <span class="text-red-700">$44</span>)</p>
                <div class="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
                    <img src="../video-icon-elearning.png" alt="display"/>
                    <img src="../cart.png" alt="display"/>
                </div>
            </div>
            <div class="bg-slate-100 pl-10">
                <img src="../pro.jpg" alt="..."/>
                <p class="text-xl text-lightsky">LGBT+ Equality in the Workplace -</p>
                <del>$222</del><p class="text-lightsky">(Member: <span class="text-red-700">$44</span>)</p>
                <div class="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
                    <img src="../video-icon-elearning.png" alt="display"/>
                    <img src="../cart.png" alt="display"/>
                </div>
            </div>
            <div class="bg-slate-100 pl-10">
                <img src="../pro.jpg" alt="..."/>
                <p class="text-xl text-lightsky">LGBT+ Equality in the Workplace -</p>
                <del>$222</del><p class="text-lightsky">(Member: <span class="text-red-700">$44</span>)</p>
                <div class="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
                    <img src="../video-icon-elearning.png" alt="display"/>
                    <img src="../cart.png" alt="display"/>
                </div>
            </div>
            <div class="bg-slate-100 pl-10">
                <img src="../pro.jpg" alt="..."/>
                <p class="text-xl text-lightsky">LGBT+ Equality in the Workplace -</p>
                <del>$222</del><p class="text-lightsky">(Member: <span class="text-red-700">$44</span>)</p>
                <div class="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
                    <img src="../video-icon-elearning.png" alt="display"/>
                    <img src="../cart.png" alt="display"/>
                </div>
            </div>
            <div class="bg-slate-100 pl-10">
                <img src="../pro.jpg" alt="..."/>
                <p class="text-xl text-lightsky">LGBT+ Equality in the Workplace -</p>
                <del>$222</del><p class="text-lightsky">(Member: <span class="text-red-700">$44</span>)</p>
                <div class="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
                    <img src="../video-icon-elearning.png" alt="display"/>
                    <img src="../cart.png" alt="display"/>
                </div>
            </div>
            <div class="bg-slate-100 pl-10">
                <img src="../pro.jpg" alt="..."/>
                <p class="text-xl text-lightsky">LGBT+ Equality in the Workplace -</p>
                <del>$222</del><p class="text-lightsky">(Member: <span class="text-red-700">$44</span>)</p>
                <div class="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
                    <img src="../video-icon-elearning.png" alt="display"/>
                    <img src="../cart.png" alt="display"/>
                </div>
            </div>
            <div class="bg-slate-100 pl-10">
                <img src="../pro.jpg" alt="..."/>
                <p class="text-xl text-lightsky">LGBT+ Equality in the Workplace -</p>
                <del>$222</del><p class="text-lightsky">(Member: <span class="text-red-700">$44</span>)</p>
                <div class="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
                    <img src="../video-icon-elearning.png" alt="display"/>
                    <img src="../cart.png" alt="display"/>
                </div>
            </div>
            <div class="bg-slate-100 pl-10">
                <img src="../pro.jpg" alt="..."/>
                <p class="text-xl text-lightsky">LGBT+ Equality in the Workplace -</p>
                <del>$222</del><p class="text-lightsky">(Member: <span class="text-red-700">$44</span>)</p>
                <div class="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
                    <img src="../video-icon-elearning.png" alt="display"/>
                    <img src="../cart.png" alt="display"/>
                </div>
            </div>
            <div class="bg-slate-100 pl-10">
                <img src="../pro.jpg" alt="..."/>
                <p class="text-xl text-lightsky">LGBT+ Equality in the Workplace -</p>
                <del>$222</del><p class="text-lightsky">(Member: <span class="text-red-700">$44</span>)</p>
                <div class="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
                    <img src="../video-icon-elearning.png" alt="display"/>
                    <img src="../cart.png" alt="display"/>
                </div>
            </div>
            <div class="bg-slate-100 pl-10">
                <img src="../pro.jpg" alt="..."/>
                <p class="text-xl text-lightsky">LGBT+ Equality in the Workplace -</p>
                <del>$222</del><p class="text-lightsky">(Member: <span class="text-red-700">$44</span>)</p>
                <div class="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
                    <img src="../video-icon-elearning.png" alt="display"/>
                    <img src="../cart.png" alt="display"/>
                </div>
            </div>
            <div class="bg-slate-100 pl-10">
                <img src="../pro.jpg" alt="..."/>
                <p class="text-xl text-lightsky">LGBT+ Equality in the Workplace -</p>
                <del>$222</del><p class="text-lightsky">(Member: <span class="text-red-700">$44</span>)</p>
                <div class="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
                    <img src="../video-icon-elearning.png" alt="display"/>
                    <img src="../cart.png" alt="display"/>
                </div>
            </div>
            <div class="bg-slate-100 pl-10">
                <img src="../pro.jpg" alt="..."/>
                <p class="text-xl text-lightsky">LGBT+ Equality in the Workplace -</p>
                <del>$222</del><p class="text-lightsky">(Member: <span class="text-red-700">$44</span>)</p>
                <div class="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
                    <img src="../video-icon-elearning.png" alt="display"/>
                    <img src="../cart.png" alt="display"/>
                </div>
            </div>
            <div class="bg-slate-100 pl-10">
                <img src="../pro.jpg" alt="..."/>
                <p class="text-xl text-lightsky">LGBT+ Equality in the Workplace -</p>
                <del>$222</del><p class="text-lightsky">(Member: <span class="text-red-700">$44</span>)</p>
                <div class="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
                    <img src="../video-icon-elearning.png" alt="display"/>
                    <img src="../cart.png" alt="display"/>
                </div>
            </div>
            <div class="bg-slate-100 pl-10">
                <img src="../pro.jpg" alt="..."/>
                <p class="text-xl text-lightsky">LGBT+ Equality in the Workplace -</p>
                <del>$222</del><p class="text-lightsky">(Member: <span class="text-red-700">$44</span>)</p>
                <div class="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
                    <img src="../video-icon-elearning.png" alt="display"/>
                    <img src="../cart.png" alt="display"/>
                </div>
            </div>
            <div class="bg-slate-100 pl-10">
                <img src="../pro.jpg" alt="..."/>
                <p class="text-xl text-lightsky">LGBT+ Equality in the Workplace -</p>
                <del>$222</del><p class="text-lightsky">(Member: <span class="text-red-700">$44</span>)</p>
                <div class="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
                    <img src="../video-icon-elearning.png" alt="display"/>
                    <img src="../cart.png" alt="display"/>
                </div>
            </div>
            <div class="bg-slate-100 pl-10">
                <img src="../pro.jpg" alt="..."/>
                <p class="text-xl text-lightsky">LGBT+ Equality in the Workplace -</p>
                <del>$222</del><p class="text-lightsky">(Member: <span class="text-red-700">$44</span>)</p>
                <div class="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
                    <img src="../video-icon-elearning.png" alt="display"/>
                    <img src="../cart.png" alt="display"/>
                </div>
            </div>
            <div class="bg-slate-100 pl-10">
                <img src="../pro.jpg" alt="..."/>
                <p class="text-xl text-lightsky">LGBT+ Equality in the Workplace -</p>
                <del>$222</del><p class="text-lightsky">(Member: <span class="text-red-700">$44</span>)</p>
                <div class="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
                    <img src="../video-icon-elearning.png" alt="display"/>
                    <img src="../cart.png" alt="display"/>
                </div>
            </div>
            <div class="bg-slate-100 pl-10">
                <img src="../pro.jpg" alt="..."/>
                <p class="text-xl text-lightsky">LGBT+ Equality in the Workplace -</p>
                <del>$222</del><p class="text-lightsky">(Member: <span class="text-red-700">$44</span>)</p>
                <div class="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
                    <img src="../video-icon-elearning.png" alt="display"/>
                    <img src="../cart.png" alt="display"/>
                </div>
            </div>
        </div>
        <nav aria-label="Page navigation example">
            <ul class="inline-flex -space-x-px text-sm">
              <li>
                <a href="good" class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
              </li>
              <li>
                <a href="good" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
              </li>
              <li>
                <a href="good" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
              </li>
              <li>
                <a href="good" aria-current="page" class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
              </li>
              <li>
                <a href="good" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
              </li>
              <li>
                <a href="good" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
              </li>
              <li>
                <a href="good" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
              </li>
            </ul>
          </nav>
    </div>

</div>
   
    
  )
}

export default Professional