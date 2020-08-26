import React from "react";

const DeleteModal = ({ handleClose, show, deletePost, post }) => {

  const showHideClassName = show ? "modal display-block modal-z" : "modal display-none";
  debugger
  return (
    <div className={showHideClassName}>
      <section className="delete-modal-section">

        <div className='delete-modal'>
          <span className='delete-modal-sure'>Are you sure?</span>
          <span>
          </span>
        </div>

        <div className='delete-modal-buttons-div'>
          <div>
            <button className='delete-modal-buttons'>
              <span>Yes</span>
            </button>
          </div>
          <div>
            <button className='delete-modal-buttons' onClick={handleClose}>
              <span>No</span>
            </button>
          </div>
          
        </div>
      </section>
    </div>
  );
}

export default DeleteModal;