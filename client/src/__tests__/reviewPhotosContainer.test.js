import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme';
import ReviewPhotosContainer from '../components/ReviewPhotosContainer.jsx';

configure({ adapter: new Adapter() });

it('should render correctly with reviewImages from props', () => {
  const props = {
    reviewImages: reviewImages
  };
  const reviewPhotosContainer = mount(<ReviewPhotosContainer {...props}/>);
  
  expect(reviewPhotosContainer).toMatchSnapshot();
});

// it ('should allow rotating the carousel to the right', () => {
//   const props = {
//     reviewImages: reviewImages
//   };
//   const reviewPhotosContainer = mount(<ReviewPhotosContainer {...props}/>);
//   // const clickRight = 
//   jest.spyOn(ReviewPhotosContainer.prototype, 'clickRight');

//   console.log(reviewPhotosContainer.find('#click-right').debug());

//   reviewPhotosContainer.find('#click-right').simulate('click');

//   expect(ReviewPhotosContainer.prototype.clickRight).toHaveBeenCalled();
// });


const reviewImages = [
  {
      "review_id": 896,
      "user_img": "https://s3-us-west-1.amazonaws.com/antsyuserimages/00002.jpg",
      "user_name": "Santina Kulas",
      "created_at": "2014-04-18T13:22:26.000Z",
      "stars": 4,
      "review": "The USB card is down, program the haptic sensor so we can generate the IB microchip!",
      "review_img": null,
      "item_id": 58,
      "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00058.jpg",
      "item_name": "Gorgeous Fresh Mouse",
      "price": 922
  },
  {
      "review_id": 764,
      "user_img": "https://s3-us-west-1.amazonaws.com/antsyuserimages/00016.jpg",
      "user_name": "Santa Predovic",
      "created_at": "2014-05-03T17:17:53.000Z",
      "stars": 3,
      "review": "You can't bypass the firewall without navigating the multi-byte AI port!",
      "review_img": null,
      "item_id": 58,
      "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00058.jpg",
      "item_name": "Gorgeous Fresh Mouse",
      "price": 922
  },
  {
      "review_id": 347,
      "user_img": "https://s3-us-west-1.amazonaws.com/antsyuserimages/00013.jpg",
      "user_name": "Adela Prosacco",
      "created_at": "2014-05-04T23:39:10.000Z",
      "stars": 1,
      "review": "We need to program the cross-platform COM feed!",
      "review_img": null,
      "item_id": 92,
      "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00092.jpg",
      "item_name": "Rustic Cotton Soap",
      "price": 122
  },
  {
      "review_id": 587,
      "user_img": "https://s3-us-west-1.amazonaws.com/antsyuserimages/00004.jpg",
      "user_name": "Dr. Ford Lehner",
      "created_at": "2014-08-08T15:29:40.000Z",
      "stars": 1,
      "review": "We need to hack the primary TCP port!",
      "review_img": null,
      "item_id": 92,
      "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00092.jpg",
      "item_name": "Rustic Cotton Soap",
      "price": 122
  },
  {
      "review_id": 412,
      "user_img": "https://s3-us-west-1.amazonaws.com/antsyuserimages/00007.jpg",
      "user_name": "Lesley Kirlin",
      "created_at": "2014-08-30T22:47:57.000Z",
      "stars": 2,
      "review": "You can't bypass the monitor without calculating the bluetooth RAM pixel!",
      "review_img": null,
      "item_id": 61,
      "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00061.jpg",
      "item_name": "Licensed Concrete Mouse",
      "price": 238
  },
  {
      "review_id": 533,
      "user_img": "https://s3-us-west-1.amazonaws.com/antsyuserimages/00004.jpg",
      "user_name": "Dr. Ford Lehner",
      "created_at": "2014-11-15T05:14:15.000Z",
      "stars": 5,
      "review": "bypassing the microchip won't do anything, we need to input the redundant EXE monitor!",
      "review_img": null,
      "item_id": 61,
      "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00061.jpg",
      "item_name": "Licensed Concrete Mouse",
      "price": 238
  },
  {
      "review_id": 322,
      "user_img": "https://s3-us-west-1.amazonaws.com/antsyuserimages/00013.jpg",
      "user_name": "Adela Prosacco",
      "created_at": "2015-02-10T12:28:12.000Z",
      "stars": 5,
      "review": "Try to parse the SMS protocol, maybe it will generate the haptic program!",
      "review_img": null,
      "item_id": 22,
      "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00022.jpg",
      "item_name": "Handmade Wooden Soap",
      "price": 68
  }
];
