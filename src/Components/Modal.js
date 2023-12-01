import React from 'react';
import Modal from 'react-modal';

const CustomModal = ({ isOpen, closeModal, title, content}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="modal"
      overlayClassName="modal-overlay"
      >
      <div className="modal-header">
       <h2>{title}</h2>
        <button onClick={closeModal}>&times;</button>
        <div className="modal-content">{content}</div>
      </div>
    </Modal>
  );
};

export default CustomModal;

