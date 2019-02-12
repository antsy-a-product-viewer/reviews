import React from 'react';

const Modal = (props) => {

  if (!props.showModal) {
    return null;
  } else {
    return (
      <div>
        <h1>{props.children}</h1>
        <div>
          <button onClick={props.onClose}>Close</button>
        </div>
      </div>
    )
  }
}

export default Modal;