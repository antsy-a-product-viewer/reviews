import React from 'react';
import moment from 'moment';
import Review from './Review.jsx';
import ReviewContainer from './ReviewContainer.jsx';
import modalStyles from './css/modalStyles.css.js';

const Modal = (props) => {
  if (!props.showModal) {
    return null;
  } else {
    return (
      <div style={modalStyles.modal} onClick={props.onClose}>
        <section style={modalStyles.modalMain}>
          <img style={modalStyles.image} src="https://i.etsystatic.com/iap/c08960/1735567682/iap_640x640.1735567682_9rntz5h8.jpg?version=0"></img>
          <div style={modalStyles.userInfo}>
            <img style ={modalStyles.profileImg} src={reviews[0].user_img}></img>
            <div style={modalStyles.username}>{reviews[0].user_name}</div>
            <div style={modalStyles.date}>{moment(reviews[0].created_at).format('MMM DD, YYYY')}</div>
            <div>
              {/* <Review review={reviews[0]}/> */}
            </div>
          </div>
          <button style={modalStyles.button} onClick={props.onClose}>
            <img style={modalStyles.buttonImg}src="https://cdn0.iconfinder.com/data/icons/elasto-online-store/26/00-ELASTOFONT-STORE-READY_close-512.png"></img>
          </button>
        </section>
      </div>
    );
  }
};

var reviews = [
  {
    "user_img": "https://s3-us-west-1.amazonaws.com/antsyuserimages/00010.jpg",
    "user_name": "Jalen Paucek",
    "created_at": "2014-02-15T21:43:09.000Z",
    "stars": 5,
    "review": "You can't connect the pixel without overriding the auxiliary RSS card!",
    "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00072.jpg",
    "item_name": "Ergonomic Concrete Tuna"
  },
  {
    "user_img": "https://s3-us-west-1.amazonaws.com/antsyuserimages/00027.jpg",
    "user_name": "Zella Blick",
    "created_at": "2014-03-14T22:37:45.000Z",
    "stars": 4,
    "review": "Try to hack the SQL transmitter, maybe it will navigate the multi-byte bus!",
    "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00030.jpg",
    "item_name": "Handmade Concrete Salad"
  },
  {
    "user_img": "https://s3-us-west-1.amazonaws.com/antsyuserimages/00024.jpg",
    "user_name": "Deangelo Schuppe",
    "created_at": "2014-03-27T15:37:49.000Z",
    "stars": 0,
    "review": "I'll generate the cross-platform COM firewall, that should driver the XSS pixel!",
    "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00091.jpg",
    "item_name": "Rustic Metal Chair"
  },
  {
    "user_img": "https://s3-us-west-1.amazonaws.com/antsyuserimages/00014.jpg",
    "user_name": "Stacey Spencer",
    "created_at": "2014-05-01T06:50:00.000Z",
    "stars": 3,
    "review": "We need to reboot the primary XML circuit!",
    "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00004.jpg",
    "item_name": "Generic Steel Soap"
  }
]

export default Modal;