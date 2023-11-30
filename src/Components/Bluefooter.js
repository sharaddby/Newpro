import React from 'react'

const Bluefooter = () => {
  return (
    <div>
        <div>
      <div className="grid place-items-center mb-10">
        <div className="2xl:w-8/12 xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center mx-auto">
          <div className="grid place-items-center bg-darkble 2xl:h-60 xl:h-56 lg:h-52 md:h-48 sm:h-44 h-44">
            <div className="pl-10 pt-10 ">
              <p className="text-white text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-3xl text-center pb-10">
                Feeling stuck or stagnant in your career?
              </p>
              <button className="py-2 text-center w-96 bg-blue-500 hover:bg-blue-600">
                <a
                  href="https://tailwindui.com/documentation"
                  className="text-xl text-white"
                >
                  TALK TO A CAREER COUNSELOR
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Bluefooter