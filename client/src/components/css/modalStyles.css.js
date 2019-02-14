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
    marginLeft: 'auto',
    // margin: 5,
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
    height: 50,
    margin: 10
  },

  userInfo: {
    display: 'flex'
  },

  username: {
    textDecoration: 'underline',
    margin: 5
  },

  date: {
    margin: 5
  }
};
