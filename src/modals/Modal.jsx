import { createPortal } from "react-dom";

const Modal = ({ children, isOpen }) => {
  if (!isOpen) return null;
  return createPortal(
    <div className="modal-overlay">
      <div className="modal">{children}</div>
    </div>,
    document.body
  );
};

export default Modal;
