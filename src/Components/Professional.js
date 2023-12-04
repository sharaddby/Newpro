import { React, useState } from 'react'

const Professional = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const closeDropdown = () => {
        setIsOpen(false);
    };
    const toggleDropdown1 = () => {
        setIsOpen1(!isOpen1);
    };
    const closeDropdown1 = () => {
        setIsOpen(false);
    };


    return (
        <div>
            <div className="grid 2xl:w-8/12 xl:w-8/12 lg:w-11/12 md:w-full sm:w-full w-full mx-auto">
                <h1 className="text-2xl mt-5 mb-5 font-semibold">Personal & Career Development Online Courses</h1>
                <div className="bg-blue-500 h-56">
                    <p className="relative text-2xl text-white pt-16 pl-16">Learning Never Ends</p>
                    <h1 className="text-lg relative text-white pl-16 mt-5">Stay ahead of the competition, enroll now with AAPC's
                        Personal & Professional Development catalog.</h1>
                </div>
                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 w-100 bg-green-950">
                    <div className="pt-6">
                        <p className=" text-lg text-center text-yellow-700">Personal & Career Development Online Courses</p>
                    </div>
                    <div className="pt-6">
                        <form className="flex items-center mx-5">
                            <label for="voice-search" className="sr-only">Search</label>
                            <div className="relative w-full">
                                <input type="text"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Search" required />
                            </div>
                            <button type="submit"
                                className="inline-flex items-center py-2 px-8 my-3 ml-2 text-lg font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="grid 2xl:w-8/12 xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center mx-auto">
                <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-w-full">
                    <div className="flex items-center my-2">
                        <input checked id="checked-checkbox" type="checkbox" value=""
                        className="w-4 h-4 text-blue-600 bg-gray-200 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />               
                        <label for="checked-checkbox" className="ml-2 text-md font-medium text-gray-900 dark:text-gray-300 mt-5">
                        Not an AAPC Member? Add an AAPC Membership to get the discounts listed below, or login here.</label>
                    </div>
                    <div className="flex items-center my-2">
                        <h3 className="px-8">View</h3>
                        <div className="relative inline-block text-left">
                            <button
                                onClick={toggleDropdown}
                                onBlur={closeDropdown}
                                type="button"
                                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-24 py-3 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:bg-gray-50 active:text-gray-800"
                                id="options-menu"
                                aria-haspopup="true"
                                aria-expanded={isOpen}
                            >
                                Options
                            </button>

                            {isOpen && (
                                <div
                                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                                    onBlur={closeDropdown}
                                >
                                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                        <a href="a" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="options-menu-0">
                                            Action 1
                                        </a>
                                        <a href="a" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="options-menu-1">
                                            Action 2
                                        </a>
                                        <a href="a" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="options-menu-2">
                                            Action 3
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center my-2">
                        <h3 className="px-5">short by</h3>
                        <div className="relative inline-block text-left">
                            <button
                                onClick={toggleDropdown1}
                                onBlur={closeDropdown1}
                                type="button"
                                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-24 py-3 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:bg-gray-50 active:text-gray-800"
                                id="options-menu"
                                aria-haspopup="true"
                                aria-expanded={isOpen1}
                            >
                                Options
                            </button>

                            {isOpen1 && (
                                <div
                                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                                    onBlur={closeDropdown1}
                                >
                                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                        <a href="a" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="options-menu-0">
                                            Action 1
                                        </a>
                                        <a href="a" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="options-menu-1">
                                            Action 2
                                        </a>
                                        <a href="a" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="options-menu-2">
                                            Action 3
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid 2xl:w-8/12 cl:w-8/12 lg:w-full md:w-full sm:w-full w-full justify-center mx-auto">
                <div className="grid 2xl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1">
                    <div className="bg-slate-100 pl-10">
                        <img src="../pro.jpg" alt="..." />
                        <p className="text-xl text-lightsky">LGBT+ Equality in the Workplace -</p>
                        <del>$222</del><p className="text-lightsky">(Member: <span className="text-red-700">$44</span>)</p>
                        <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
                            <img src="../video-icon-elearning.png" alt="display" />
                            <img src="../cart.png" alt="display" />
                        </div>
                    </div>
                    <div className="bg-slate-100 pl-10">
                        <img src="../pro.jpg" alt="..." />
                        <p className="text-xl text-lightsky">LGBT+ Equality in the Workplace -</p>
                        <del>$222</del><p className="text-lightsky">(Member: <span className="text-red-700">$44</span>)</p>
                        <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
                            <img src="../video-icon-elearning.png" alt="display" />
                            <img src="../cart.png" alt="display" />
                        </div>
                    </div>
                    <div className="bg-slate-100 pl-10">
                        <img src="../pro.jpg" alt="..." />
                        <p className="text-xl text-lightsky">LGBT+ Equality in the Workplace -</p>
                        <del>$222</del><p className="text-lightsky">(Member: <span className="text-red-700">$44</span>)</p>
                        <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
                            <img src="../video-icon-elearning.png" alt="display" />
                            <img src="../cart.png" alt="display" />
                        </div>
                    </div>
                    <div className="bg-slate-100 pl-10">
                        <img src="../pro.jpg" alt="..." />
                        <p className="text-xl text-lightsky">LGBT+ Equality in the Workplace -</p>
                        <del>$222</del><p className="text-lightsky">(Member: <span className="text-red-700">$44</span>)</p>
                        <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
                            <img src="../video-icon-elearning.png" alt="display" />
                            <img src="../cart.png" alt="display" />
                        </div>
                    </div>
                    <div className="bg-slate-100 pl-10">
                        <img src="../pro.jpg" alt="..." />
                        <p className="text-xl text-lightsky">LGBT+ Equality in the Workplace -</p>
                        <del>$222</del><p className="text-lightsky">(Member: <span className="text-red-700">$44</span>)</p>
                        <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
                            <img src="../video-icon-elearning.png" alt="display" />
                            <img src="../cart.png" alt="display" />
                        </div>
                    </div>
                    <div className="bg-slate-100 pl-10">
                        <img src="../pro.jpg" alt="..." />
                        <p className="text-xl text-lightsky">LGBT+ Equality in the Workplace -</p>
                        <del>$222</del><p className="text-lightsky">(Member: <span className="text-red-700">$44</span>)</p>
                        <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
                            <img src="../video-icon-elearning.png" alt="display" />
                            <img src="../cart.png" alt="display" />
                        </div>
                    </div>
                    <div className="bg-slate-100 pl-10">
                        <img src="../pro.jpg" alt="..." />
                        <p className="text-xl text-lightsky">LGBT+ Equality in the Workplace -</p>
                        <del>$222</del><p className="text-lightsky">(Member: <span className="text-red-700">$44</span>)</p>
                        <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
                            <img src="../video-icon-elearning.png" alt="display" />
                            <img src="../cart.png" alt="display" />
                        </div>
                    </div>
                    <div className="bg-slate-100 pl-10">
                        <img src="../pro.jpg" alt="..." />
                        <p className="text-xl text-lightsky">LGBT+ Equality in the Workplace -</p>
                        <del>$222</del><p className="text-lightsky">(Member: <span className="text-red-700">$44</span>)</p>
                        <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
                            <img src="../video-icon-elearning.png" alt="display" />
                            <img src="../cart.png" alt="display" />
                        </div>
                    </div>
                    <div className="bg-slate-100 pl-10">
                        <img src="../pro.jpg" alt="..." />
                        <p className="text-xl text-lightsky">LGBT+ Equality in the Workplace -</p>
                        <del>$222</del><p className="text-lightsky">(Member: <span className="text-red-700">$44</span>)</p>
                        <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
                            <img src="../video-icon-elearning.png" alt="display" />
                            <img src="../cart.png" alt="display" />
                        </div>
                    </div>
                    <div className="bg-slate-100 pl-10">
                        <img src="../pro.jpg" alt="..." />
                        <p className="text-xl text-lightsky">LGBT+ Equality in the Workplace -</p>
                        <del>$222</del><p className="text-lightsky">(Member: <span className="text-red-700">$44</span>)</p>
                        <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
                            <img src="../video-icon-elearning.png" alt="display" />
                            <img src="../cart.png" alt="display" />
                        </div>
                    </div>
                    <div className="bg-slate-100 pl-10">
                        <img src="../pro.jpg" alt="..." />
                        <p className="text-xl text-lightsky">LGBT+ Equality in the Workplace -</p>
                        <del>$222</del><p className="text-lightsky">(Member: <span className="text-red-700">$44</span>)</p>
                        <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
                            <img src="../video-icon-elearning.png" alt="display" />
                            <img src="../cart.png" alt="display" />
                        </div>
                    </div>
                    <div className="bg-slate-100 pl-10">
                        <img src="../pro.jpg" alt="..." />
                        <p className="text-xl text-lightsky">LGBT+ Equality in the Workplace -</p>
                        <del>$222</del><p className="text-lightsky">(Member: <span className="text-red-700">$44</span>)</p>
                        <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
                            <img src="../video-icon-elearning.png" alt="display" />
                            <img src="../cart.png" alt="display" />
                        </div>
                    </div>
                    <div className="bg-slate-100 pl-10">
                        <img src="../pro.jpg" alt="..." />
                        <p className="text-xl text-lightsky">LGBT+ Equality in the Workplace -</p>
                        <del>$222</del><p className="text-lightsky">(Member: <span className="text-red-700">$44</span>)</p>
                        <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
                            <img src="../video-icon-elearning.png" alt="display" />
                            <img src="../cart.png" alt="display" />
                        </div>
                    </div>
                    <div className="bg-slate-100 pl-10">
                        <img src="../pro.jpg" alt="..." />
                        <p className="text-xl text-lightsky">LGBT+ Equality in the Workplace -</p>
                        <del>$222</del><p className="text-lightsky">(Member: <span className="text-red-700">$44</span>)</p>
                        <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
                            <img src="../video-icon-elearning.png" alt="display" />
                            <img src="../cart.png" alt="display" />
                        </div>
                    </div>
                    <div className="bg-slate-100 pl-10">
                        <img src="../pro.jpg" alt="..." />
                        <p className="text-xl text-lightsky">LGBT+ Equality in the Workplace -</p>
                        <del>$222</del><p className="text-lightsky">(Member: <span className="text-red-700">$44</span>)</p>
                        <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
                            <img src="../video-icon-elearning.png" alt="display" />
                            <img src="../cart.png" alt="display" />
                        </div>
                    </div>
                    <div className="bg-slate-100 pl-10">
                        <img src="../pro.jpg" alt="..." />
                        <p className="text-xl text-lightsky">LGBT+ Equality in the Workplace -</p>
                        <del>$222</del><p className="text-lightsky">(Member: <span className="text-red-700">$44</span>)</p>
                        <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
                            <img src="../video-icon-elearning.png" alt="display" />
                            <img src="../cart.png" alt="display" />
                        </div>
                    </div>
                    <div className="bg-slate-100 pl-10">
                        <img src="../pro.jpg" alt="..." />
                        <p className="text-xl text-lightsky">LGBT+ Equality in the Workplace -</p>
                        <del>$222</del><p className="text-lightsky">(Member: <span className="text-red-700">$44</span>)</p>
                        <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
                            <img src="../video-icon-elearning.png" alt="display" />
                            <img src="../cart.png" alt="display" />
                        </div>
                    </div>
                    <div className="bg-slate-100 pl-10">
                        <img src="../pro.jpg" alt="..." />
                        <p className="text-xl text-lightsky">LGBT+ Equality in the Workplace -</p>
                        <del>$222</del><p className="text-lightsky">(Member: <span className="text-red-700">$44</span>)</p>
                        <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
                            <img src="../video-icon-elearning.png" alt="display" />
                            <img src="../cart.png" alt="display" />
                        </div>
                    </div>
                </div>
                <nav aria-label="Page navigation example">
                    <ul className="inline-flex -space-x-px text-sm">
                        <li>
                            <a href="good" className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                        </li>
                        <li>
                            <a href="good" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                        </li>
                        <li>
                            <a href="good" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                        </li>
                        <li>
                            <a href="good" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                        </li>
                        <li>
                            <a href="good" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                        </li>
                        <li>
                            <a href="good" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                        </li>
                        <li>
                            <a href="good" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>


    )
}

export default Professional