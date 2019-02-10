import React from 'react';

const profileImgStyle = {
  borderRadius: "50px",
  float: "left"
}

const usernameStyle = {
  textDecoration: "underline",
  float: "left",
  margin: "5px"
}

const dateStyle = {
  float: "left",
  margin: "5px"
}

const starStyle = {
  width: "20px",
  height: "20px"
}

const starDiv = {
  clear: "both",
  margin: "5px"
}

const wrapperStyle = {
  float: "left"
}


const Review = (props) => {
  return (
    <div>
      <div className="profile-pic" style={wrapperStyle}>
        <img style ={profileImgStyle} src="https://i.etsystatic.com/iusa/71374a/55084077/iusa_75x75.55084077_ng7a.jpg?version=0"></img>
      </div>
      <div style={wrapperStyle}>
        <div className="review-info">
          <div style={usernameStyle}>sara</div>
          <div style={dateStyle}>Jan 3, 2019</div>
        </div>
        <div>
          <div className="stars" style={starDiv}>
            <img style={starStyle} src="https://www.iconsdb.com/icons/preview/black/star-xxl.png"></img>
            <img style={starStyle} src="https://www.iconsdb.com/icons/preview/black/star-xxl.png"></img>
            <img style={starStyle} src="https://www.iconsdb.com/icons/preview/black/star-xxl.png"></img>
            <img style={starStyle} src="https://www.iconsdb.com/icons/preview/black/star-xxl.png"></img>
            <img style={starStyle} src="https://www.iconsdb.com/icons/preview/black/star-xxl.png"></img>
          </div>
        </div>
        <div className="review-txt">
          <div>Beautiful piece of art! Great details, very high quality brooch. Wonderful seller!</div>
        </div>
      </div>
    </div>
  )
}

export default Review;