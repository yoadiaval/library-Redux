import { useEffect } from "react";
import ReactDOM from "react-dom";

function Modal({ children, onClose }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="border-8 overflow-auto bg-amber-300 fixed inset-[50px] md:inset-[100px] place-content-center p-8 md:p-[60px] drop-shadow-2xl rounded">
        <div className="flex flex-col justify-between h-full">
          {children}
          
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
