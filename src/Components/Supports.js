import React from 'react';
import Tab from './Tab';
import { Link } from 'react-router-dom';
const tabs = [
    {
        label: 'Conferences',
        content: <div>
            <div class="sm:w-11/12 w-100 justify-center mx-auto">
                <h2 className="text-4xl text-green-900 font-semibold">Conferences</h2>
                <p className='my-5'>Have a question about an AAPC conference? Get all your answers here.</p>
                <h3 className='text-3xl my-5'>Frequently Asked Questions</h3>
                <p>For questions about approved content, CEU requirements and how and when to submit CEUs, see
                    our CEU <span className="text-green-900">Information page.</span></p>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > Where will I find my handouts for the conference?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                >What are the benefits of staying at the host hotel?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > What does my conference registration include?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                >Will I meet any of the National Advisory Board, the AAPCCA Board, or any of the AAPC staff at conference?</Link>
            </div>
        </div>
    },
    {
        label: 'Workshops',
        content: <div>
            <div class="sm:w-11/12 w-100 justify-center mx-auto">
                <h2 className="text-4xl text-green-900 font-semibold">Workshops</h2>
                <p className='my-5'>Have a question about an AAPC conference? Get all your answers here.</p>
                <h3 className='text-3xl my-5'>Frequently Asked Questions</h3>
                <p>For questions about approved content, CEU requirements and how and when to submit CEUs, see
                    our CEU <span className="text-green-900">Information page.</span></p>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > Where will I find my handouts for the conference?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                >What are the benefits of staying at the host hotel?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > What does my conference registration include?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                >Will I meet any of the National Advisory Board, the AAPCCA Board, or any of the AAPC staff at conference?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > Where will I find my handouts for the conference?</Link>
            </div>
        </div>

    },
    {
        label: 'Webinars',
        content: <div>
            <div class="sm:w-11/12 w-100 justify-center mx-auto">
                <h2 className="text-4xl text-green-900 font-semibold">Webinars</h2>
                <p className='my-5'>Have a question about an AAPC conference? Get all your answers here.</p>
                <h3 className='text-3xl my-5'>Frequently Asked Questions</h3>
                <p>For questions about approved content, CEU requirements and how and when to submit CEUs, see
                    our CEU <span className="text-green-900">Information page.</span></p>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > Where will I find my handouts for the conference?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                >What are the benefits of staying at the host hotel?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > What does my conference registration include?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                >Will I meet any of the National Advisory Board, the AAPCCA Board, or any of the AAPC staff at conference?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > Where will I find my handouts for the conference?</Link>
            </div>
        </div>
    },
    {
        label: 'Corporate membership',
        content: <div>
            <div class="sm:w-11/12 w-100 justify-center mx-auto">
                <h2 className="text-4xl text-green-900 font-semibold">Corporate membership</h2>
                <p className='my-5'>Have a question about an AAPC conference? Get all your answers here.</p>
                <h3 className='text-3xl my-5'>Frequently Asked Questions</h3>
                <p>For questions about approved content, CEU requirements and how and when to submit CEUs, see
                    our CEU <span className="text-green-900">Information page.</span></p>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > Where will I find my handouts for the conference?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                >What are the benefits of staying at the host hotel?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > What does my conference registration include?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                >Will I meet any of the National Advisory Board, the AAPCCA Board, or any of the AAPC staff at conference?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > Where will I find my handouts for the conference?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                >What are the benefits of staying at the host hotel?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > What does my conference registration include?</Link>
            </div>
        </div>
    },


    {
        label: 'Practicode',
        content: <div>
            <div class="sm:w-11/12 w-100 justify-center mx-auto">
                <h2 className="text-4xl text-green-900 font-semibold">Practicode</h2>
                <p className='my-5'>Have a question about an AAPC conference? Get all your answers here.</p>
                <h3 className='text-3xl my-5'>Frequently Asked Questions</h3>
                <p>For questions about approved content, CEU requirements and how and when to submit CEUs, see
                    our CEU <span className="text-green-900">Information page.</span></p>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > Where will I find my handouts for the conference?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                >What are the benefits of staying at the host hotel?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > What does my conference registration include?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                >Will I meet any of the National Advisory Board, the AAPCCA Board, or any of the AAPC staff at conference?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > Where will I find my handouts for the conference?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                >What are the benefits of staying at the host hotel?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > What does my conference registration include?</Link>
            </div>
        </div>,
    },
    {
        label: 'Electronic (LRP) exams',
        content: <div>
            <div class="sm:w-11/12 w-100 justify-center mx-auto">
                <h2 className="text-4xl text-green-900 font-semibold">Electronic (LRP) exams</h2>
                <p className='my-5'>Have a question about an AAPC conference? Get all your answers here.</p>
                <h3 className='text-3xl my-5'>Frequently Asked Questions</h3>
                <p>For questions about approved content, CEU requirements and how and when to submit CEUs, see
                    our CEU <span className="text-green-900">Information page.</span></p>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > Where will I find my handouts for the conference?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                >What are the benefits of staying at the host hotel?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > What does my conference registration include?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                >Will I meet any of the National Advisory Board, the AAPCCA Board, or any of the AAPC staff at conference?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > Where will I find my handouts for the conference?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                >What are the benefits of staying at the host hotel?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > What does my conference registration include?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                >Will I meet any of the National Advisory Board, the AAPCCA Board, or any of the AAPC staff at conference?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > Where will I find my handouts for the conference?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                >What are the benefits of staying at the host hotel?</Link>
            </div>
        </div>,
    },
    {
        label: 'In-person exams',
        content: <div>
            <div class="sm:w-11/12 w-100 justify-center mx-auto">
                <h2 className="text-4xl text-green-900 font-semibold">In-person exams</h2>
                <p className='my-5'>Have a question about an AAPC conference? Get all your answers here.</p>
                <h3 className='text-3xl my-5'>Frequently Asked Questions</h3>
                <p>For questions about approved content, CEU requirements and how and when to submit CEUs, see
                    our CEU <span className="text-green-900">Information page.</span></p>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > Where will I find my handouts for the conference?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                >What are the benefits of staying at the host hotel?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > What does my conference registration include?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                >Will I meet any of the National Advisory Board, the AAPCCA Board, or any of the AAPC staff at conference?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > Where will I find my handouts for the conference?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                >What are the benefits of staying at the host hotel?</Link>
            </div>
        </div>,
    },
    {
        label: 'International test center exams',
        content: <div>
            <div class="sm:w-11/12 w-100 justify-center mx-auto">
                <h2 className="text-4xl text-green-900 font-semibold">International test center exams</h2>
                <p className='my-5'>Have a question about an AAPC conference? Get all your answers here.</p>
                <h3 className='text-3xl my-5'>Frequently Asked Questions</h3>
                <p>For questions about approved content, CEU requirements and how and when to submit CEUs, see
                    our CEU <span className="text-green-900">Information page.</span></p>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > Where will I find my handouts for the conference?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                >What are the benefits of staying at the host hotel?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > What does my conference registration include?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                >Will I meet any of the National Advisory Board, the AAPCCA Board, or any of the AAPC staff at conference?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > Where will I find my handouts for the conference?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                >What are the benefits of staying at the host hotel?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > What does my conference registration include?</Link>
            </div>
        </div>,
    },
    {
        label: 'Blackboard',
        content: <div>
            <div class="sm:w-11/12 w-100 justify-center mx-auto">
                <h2 className="text-4xl text-green-900 font-semibold">Blackboard</h2>
                <p className='my-5'>Have a question about an AAPC conference? Get all your answers here.</p>
                <h3 className='text-3xl my-5'>Frequently Asked Questions</h3>
                <p>For questions about approved content, CEU requirements and how and when to submit CEUs, see
                    our CEU <span className="text-green-900">Information page.</span></p>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > Where will I find my handouts for the conference?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                >What are the benefits of staying at the host hotel?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > What does my conference registration include?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                >Will I meet any of the National Advisory Board, the AAPCCA Board, or any of the AAPC staff at conference?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > Where will I find my handouts for the conference?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                >What are the benefits of staying at the host hotel?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > What does my conference registration include?</Link>
            </div>
        </div>,
    },
    {
        label: 'Project Xtern',
        content: <div>
            <div class="sm:w-11/12 w-100 justify-center mx-auto">
                <h2 className="text-4xl text-green-900 font-semibold">Project Xtern</h2>
                <p className='my-5'>Have a question about an AAPC conference? Get all your answers here.</p>
                <h3 className='text-3xl my-5'>Frequently Asked Questions</h3>
                <p>For questions about approved content, CEU requirements and how and when to submit CEUs, see
                    our CEU <span className="text-green-900">Information page.</span></p>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > Where will I find my handouts for the conference?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                >What are the benefits of staying at the host hotel?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > What does my conference registration include?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                >Will I meet any of the National Advisory Board, the AAPCCA Board, or any of the AAPC staff at conference?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > Where will I find my handouts for the conference?</Link>
            </div>
        </div>,
    },
    {
        label: 'CEU vendors',
        content: <div>
            <div class="sm:w-11/12 w-100 justify-center mx-auto">
                <h2 className="text-4xl text-green-900 font-semibold">CEU vendors</h2>
                <p className='my-5'>Have a question about an AAPC conference? Get all your answers here.</p>
                <h3 className='text-3xl my-5'>Frequently Asked Questions</h3>
                <p>For questions about approved content, CEU requirements and how and when to submit CEUs, see
                    our CEU <span className="text-green-900">Information page.</span></p>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > Where will I find my handouts for the conference?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                >What are the benefits of staying at the host hotel?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > What does my conference registration include?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                >Will I meet any of the National Advisory Board, the AAPCCA Board, or any of the AAPC staff at conference?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > Where will I find my handouts for the conference?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                >What are the benefits of staying at the host hotel?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > What does my conference registration include?</Link>
            </div>
        </div>,
    },
    {
        label: 'Books',
        content: <div>
            <div class="sm:w-11/12 w-100 justify-center mx-auto">
                <h2 className="text-4xl text-green-900 font-semibold">Books</h2>
                <p className='my-5'>Have a question about an AAPC conference? Get all your answers here.</p>
                <h3 className='text-3xl my-5'>Frequently Asked Questions</h3>
                <p>For questions about approved content, CEU requirements and how and when to submit CEUs, see
                    our CEU <span className="text-green-900">Information page.</span></p>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > Where will I find my handouts for the conference?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                >What are the benefits of staying at the host hotel?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > What does my conference registration include?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                >Will I meet any of the National Advisory Board, the AAPCCA Board, or any of the AAPC staff at conference?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > Where will I find my handouts for the conference?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                >What are the benefits of staying at the host hotel?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > What does my conference registration include?</Link>
            </div>
        </div>,
    },
    {
        label: 'Codify by AAPC',
        content: <div>
            <div class="sm:w-11/12 w-100 justify-center mx-auto">
                <h2 className="text-4xl text-green-900 font-semibold">Codify by AAPC</h2>
                <p className='my-5'>Have a question about an AAPC conference? Get all your answers here.</p>
                <h3 className='text-3xl my-5'>Frequently Asked Questions</h3>
                <p>For questions about approved content, CEU requirements and how and when to submit CEUs, see
                    our CEU <span className="text-green-900">Information page.</span></p>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > Where will I find my handouts for the conference?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                >What are the benefits of staying at the host hotel?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > What does my conference registration include?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                >Will I meet any of the National Advisory Board, the AAPCCA Board, or any of the AAPC staff at conference?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > Where will I find my handouts for the conference?</Link>
            </div>
        </div>,
    },
    {
        label: 'Areas of focus',
        content: <div>
            <div class="sm:w-11/12 w-100 justify-center mx-auto">
                <h2 className="text-4xl text-green-900 font-semibold">Areas of focus</h2>
                <p className='my-5'>Have a question about an AAPC conference? Get all your answers here.</p>
                <h3 className='text-3xl my-5'>Frequently Asked Questions</h3>
                <p>For questions about approved content, CEU requirements and how and when to submit CEUs, see
                    our CEU <span className="text-green-900">Information page.</span></p>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > Where will I find my handouts for the conference?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                >What are the benefits of staying at the host hotel?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                > What does my conference registration include?</Link>
                <Link href="ss" className="block px-4 py-2 text-md text-green-900 hover:bg-gray-300"
                >Will I meet any of the National Advisory Board, the AAPCCA Board, or any of the AAPC staff at conference?</Link>
            </div>
        </div>,
    },
];
function Supports() {
    return (
        <div className="App">
            <Tab tabs={tabs}/>
        </div>
    );
}


export default Supports;
