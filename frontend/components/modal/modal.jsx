import React from "react";
// import SignupContainer from '../session/signup_container'


// Need to thread props (history in particular through modal's children)
const Modal = ({ handleClose, show, children }) => {

  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <a className='modal-close-anchor'onClick={handleClose}>X</a>
        {children}
      </section>
    </div>
  );
}

export default Modal;