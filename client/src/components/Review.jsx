import React from 'react';

const containerStyle = {
  width: 700
}

const profileImgStyle = {
  borderRadius: "50px",
  float: "left",
  maxWidth: "75%",
  maxHeight: "75%"
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

const reviewItemStyle ={
  float: "left"
}

const reviewItemTextStyle ={
  float: "left",
  margin: "25px"
}


const Review = (props) => {
  return (
    <div style={containerStyle}>
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
        <div className="review-item">
          <img src="https://i.etsystatic.com/10759216/d/il/b478b8/1418735868/il_75x75.1418735868_dnlw.jpg?version=0" style={reviewItemStyle}></img>
          <div style={reviewItemTextStyle}>Anatomical Heart Brooch, Real Anatomy Pin Stained Glass, Tiff...</div>
        </div>
      </div>
    </div>
  )
}

export default Review;