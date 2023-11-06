import React, { useState } from 'react';
import Modal from './Modal';

function Membership() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => {
      setIsModalOpen(true);
    
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

    return (
        <div>
            <div className="grid place-items-center mt-5">
                <div class="flex flex-col md:flex-row 2xl:w-8/12 xl:w-8/12 lg:w-11/12 md:w-11/12 sm:w-11/12 w-11/12 justify-center">
                    <div className="2xl:w-1/2 xl:w-1/2 lg:1/2 md:w-1/2 sm:w-full w-full">
                        <div className="container mx-auto p-4">
                            <button onClick={openModal} className="p-2">
                                 Network with over 250,000 professionals
                            </button>
                            <Modal isOpen={isModalOpen} closeModal={closeModal}>
                                <p>Connect with over 250,000 professionals in the healthcare industry. Strengthen your 
                                professional support system with colleagues on a national and local level.</p>
                                <p>Participate in more than ½ million online forums posts on healthcare business topics
                                Access to a job database being updated daily</p>
                                <p>Attend local chapter meetings and events (more than 500 chapters nationwide)
                                Attend AAPC hosted regional and national conferences</p>
                            </Modal>
                        </div>
                        <div className="container mx-auto p-4">
                            <button onClick={openModal} className="p-2">
                                 Network with over 250,000 professionals
                            </button>
                            <Modal isOpen={isModalOpen} closeModal={closeModal}>
                                <p>swith over 250,000 professionals in the healthcare industry. Strengthen your 
                                professional support system with colleagues on a national and local level.</p>
                                <p>Participate in more than ½ million online forums posts on healthcare business topics
                                Access to a job database being updated daily</p>
                                <p>Attend local chapter meetings and events (more than 500 chapters nationwide)
                                Attend AAPC hosted regional and national conferences</p>
                            </Modal>
                        </div>
                    </div>
                    <div className="2xl:w-1/2 xl:w-1/2 lg:1/2 md:w-1/2 sm:w-full w-full">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Membership