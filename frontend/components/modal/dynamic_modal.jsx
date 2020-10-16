import React from "react";

export default ({ handleClose, show, children }) => {

  const showHideClassName = show ? "modal display-block modal-z" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="create-modal-main">
        {children}
      </section>
    </div>
  );
}
