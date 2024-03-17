import React from 'react'
import HomeCard from './HomeCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Page = (items:any) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  return (
    <div className='homeContainer'>
      <Slider {...settings}>
        {items ? items.items.map((item:any) => (
            <HomeCard key={item.id} item={item} />
                        )):''}
      </Slider>
    </div>
  )
}

export default Page