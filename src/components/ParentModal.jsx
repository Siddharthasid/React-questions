import { useState } from "react";
import Modal from "../modals/Modal";

const ParentModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpenClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={handleModalOpenClose}>Open Modal</button>

      <Modal isOpen={isOpen}>
        <h2>Modal Title</h2>
        <p>Modal Details</p>
        <button onClick={handleModalOpenClose}>Close Modal</button>
      </Modal>
    </>
  );
};

export default ParentModal;
