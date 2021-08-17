import React from "react";
import { Card } from "antd";

function Design() {

  return (
    <div className="courses">
      <div className="designtxt">
        <h1>What to learn next</h1>
        <h6>Students are viewing</h6>
      </div>
      
        <div className="cardcourse">
            <div className="cardsingle">
              <Card
                hoverable
                className="courseimg"
                cover={
                  <img
                    alt="example"
                    src="https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  />
                } >
                <div className="cardtxt">
                    <h6>The Complete 2021 Web development bootcamp</h6>
                    <p>Kaira Jha</p>
                    <h5>₹ 525</h5>
                    <button  className='btm1'>Best Seller</button>
                </div>  
              </Card>
            </div>

            <div className="cardsingle">
              <Card
                hoverable
                className="courseimg"
                cover={
                  <img
                    alt="example"
                    src="https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  />
                } >
                <div className="cardtxt">
                    <h6>The Complete 2021 Web development bootcamp</h6>
                    <p>Kaira Jha</p>
                    <h5>₹ 525</h5>
                    <button  className='btm1'>Best Seller</button>
                </div>  
              </Card>
            </div>

            <div className="cardsingle">
            <Card
              hoverable
              className="courseimg"
              cover={
                <img
                  alt="example"
                  src="https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                />
              } >
              <div className="cardtxt">
                  <h6>The Complete 2021 Web development bootcamp</h6>
                  <p>Kaira Jha</p>
                  <h5>₹ 525</h5>
                  <button  className='btm1'>Best Seller</button>
              </div>  
            </Card>
          </div>
        </div>
      </div>
  );
}

export default Design;
