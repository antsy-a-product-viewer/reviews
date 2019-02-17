import React from 'react';
import moment from 'moment';
import _ from 'underscore';
import Star from './Star.jsx'
import Item from './Item.jsx';
import modalStyles from './css/modalStyles.css.js';

const Modal = (props) => {
  if (!props.showModal) {
    return null;
  } else {
    console.log(props.reviews.user_img);
    return (
      <div style={modalStyles.modal} onClick={props.onClose}>
        <section style={modalStyles.modalMain}>
          <img style={modalStyles.image} src={props.reviews.review_img}></img>
          <div>
            <div style={modalStyles.userInfo}>
              <img style ={modalStyles.profileImg} src={props.reviews.user_img}></img>
              <div style={modalStyles.username}>{props.reviews.user_name}</div>
              <div style={modalStyles.date}>{moment(props.reviews.created_at).format('MMM DD, YYYY')}</div>
            </div>
            <div style={modalStyles.review}>
              <Star stars={props.reviews.stars}/>
              <div>{props.reviews.review}</div>
            </div>
            <div style={modalStyles.item}>
              <Item showPrice="true" review={props.reviews}/>
            </div>
          </div>
          <button style={modalStyles.button} onClick={props.onClose}>
            <img style={modalStyles.buttonImg} src="https://cdn0.iconfinder.com/data/icons/elasto-online-store/26/00-ELASTOFONT-STORE-READY_close-512.png"></img>
          </button>
        </section>
      </div>
    );
  }
};

export default Modal;
