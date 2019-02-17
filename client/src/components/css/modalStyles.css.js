export default {
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.6)'
  },

  modalMain: {
    position: 'fixed',
    background: 'white',
    width: '65%',
    height: 565,
    top: '45%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    display: 'flex'
  },

  reviewContent: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: 500,
    maxHeight: 500
  },

  image: {
    width: 565,
    height: 565,
  },

  button: {
    padding: 'none',
    border: 'none',
    background: 'none',
    transform: 'translate(1140px, 25px)'
  },

  buttonImg: {
    width: 20,
    height: 20,
    background: 'white',
    margin: 10
  },

  profileImg: {
    borderRadius: 50,
    width: 50,
    height: 50
  },

  userInfo: {
    display: 'flex',
    margin: 20
  },

  username: {
    textDecoration: 'underline',
    margin: 5,
    marginLeft: 15,
    alignSelf: 'center'
  },

  date: {
    margin: 5,
    alignSelf: 'center'
  },

  star: {
    width: '20px',
    height: '20px'
  },

  review: {
    margin: 20
  },

  item: {
    margin: 20
  }
};
