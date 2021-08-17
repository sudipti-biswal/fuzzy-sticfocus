import React from "react";

  
import "./trendinguser.scss";
import image55 from "../../../assets/img/image55.png";
import image555 from "../../../assets/img/image555.png";
import image122 from "../../../assets/img/image122.jpeg";
import covid from "../../../assets/img/covid.jpeg";
import {BiHash} from "react-icons/bi";
import{FaGreaterThan} from "react-icons/fa";
import{BsMusicNoteBeamed} from "react-icons/bs";
import {Carousel} from "react-bootstrap";
import { Box } from "@chakra-ui/layout";
import Footer from "../TrendingUser/footer/Footer";
export default function TrendingUser() {
    return (
      <Box w="100%">
<div className="app">
<Carousel >
  <Carousel.Item interval={1000}>
    <img
      
      src={ image55}
      alt=""
    />
    
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      
      src={ image555}
      alt=""
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      src={ image555}
      alt="e"
    />
     </Carousel.Item>
</Carousel>

   <div className="covid_heading">
     <h1><strong>COVID-19</strong> : learn some fact about coronavirus</h1>
     </div>
        <div className="circle_icon">
      <div className="Hash_tag">
     <BiHash/>
    </div>
    </div> 
  <div className="Learn_tag_info">
      <h1>LearnWithMe</h1>
      <p>Trending Hashtag</p>
</div>
<div className="greater_wrapper">
<h1 className="timer_wrapper">253.0M</h1>
    <FaGreaterThan className="greater_than"/>
</div> 
<div className="Testmonal_user">
  <img  src={image122}/>
</div>
<div className="circle_icon">
      <div className="music_tag">
     <BsMusicNoteBeamed/>
    </div>
    </div> 
  <div className="Learn_tag_info">
      <h1>Peaches</h1>
      <p>Trending Sound</p>
</div>
<div className="greater_wrapper">
<h1 className="timer_wrapper">243.0M</h1>
    <FaGreaterThan className="greater_than"/>
</div> 
<div className="Testmonal_user">
  <img  src={covid}/>
</div>

<Footer/>


</div>


</Box>


    )
}
   


    
