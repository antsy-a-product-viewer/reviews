import React from 'react';
import Review from './Review.jsx';
import ReviewContainer from './ReviewContainer.jsx';
import styles from './css/modalStyles.css.js';

const Modal = (props) => {
  if (!props.showModal) {
    return null;
  } else {
    return (
      <div style={styles.modal} onClick={props.onClose}>
        <section style={styles.modalMain}>
          <img style={styles.image} src="https://i.etsystatic.com/iap/c08960/1735567682/iap_640x640.1735567682_9rntz5h8.jpg?version=0"></img>
          <ReviewContainer showPrice="true"/>
          <button style={styles.button} onClick={props.onClose}>
            <img style={styles.buttonImg}src="https://cdn0.iconfinder.com/data/icons/elasto-online-store/26/00-ELASTOFONT-STORE-READY_close-512.png"></img>
          </button>
        </section>
      </div>
    );
  }
};

export default Modal;