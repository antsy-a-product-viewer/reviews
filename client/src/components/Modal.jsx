import React from 'react';

const Modal = (props) => {
  if (!props.showModal) {
    return null;
  } else {
    return (
      <div>
        <h1>This Is The Modal</h1>
      </div>
    )
  }
}

export default Modal;