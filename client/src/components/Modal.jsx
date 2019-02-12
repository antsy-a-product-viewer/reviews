import React from 'react';

const modalStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.6)"
}

const modalMainStyle = {
  position: "fixed",
  background: "white",
  width: "80%",
  height: "auto",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
}

const Modal = (props) => {
  if (!props.showModal) {
    return null;
  } else {
    return (
      <div className="modal" style={modalStyle}>
        <section className="modal-main" style={modalMainStyle}>
          {props.children}
          <button onClick={props.onClose}>Close</button>
        </section>
      </div>
    )
  }
}

export default Modal;