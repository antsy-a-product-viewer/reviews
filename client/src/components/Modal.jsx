import React from 'react';
import styles from './css/modalStyles.css.js'

const Modal = (props) => {
  if (!props.showModal) {
    return null;
  } else {
    return (
      <div style={styles.modal}>
        <section style={styles.modalMain}>
          <img src="https://i.etsystatic.com/iap/c08960/1735567682/iap_640x640.1735567682_9rntz5h8.jpg?version=0"></img>
          <button onClick={props.onClose}>Close</button>
        </section>
      </div>
    );
  }
};

export default Modal;