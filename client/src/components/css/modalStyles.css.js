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
    height: 'auto',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    display: 'flex',
    justifyContent: 'space-between'
  },

  reviewContent: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: 500,
    maxHeight: 500
  },

  image: {
    // maxWidth: '60%',
    // maxHeight: '60%',
  },

  button: {
    padding: 'none',
    border: 'none',
    background: 'none',
    margin: 5
  },

  buttonImg: {
    width: 20,
    height: 20,
    background: 'white',
    margin: 10
  }
};