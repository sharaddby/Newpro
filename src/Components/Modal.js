import React from 'react';

const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="bg-white w-1/2 p-6 rounded-lg shadow-lg">
        <div className="text-right">
          <button onClick={closeModal}>Close</button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
