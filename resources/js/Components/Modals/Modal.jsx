import React, { useEffect } from 'react';
import Modal from 'react-modal';

const CustomModal = ({ isOpen, onRequestClose, title, children, id = 'modal-c' }) => {
    useEffect(() => {
        const appElement = document.getElementById(id);
        if (appElement) {
            Modal.setAppElement(`#${id}`);
        } else {
            console.error(`No element found for selector #${id}`);
        }
    }, [id]);

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel={title}
            className="bg-white p-6 w-1/3 z-[100] mx-auto rounded shadow-lg"
            overlayClassName="fixed inset-0 bg-black z-[100] bg-opacity-50 flex justify-center items-center"
            appElement={document.getElementById(id) || document.body} 
        >
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            {children}
        </Modal>
    );
};

export default CustomModal;
