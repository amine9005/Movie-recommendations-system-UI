import React from 'react'
import { Link } from 'react-router-dom'
import UCard from './UCard'
import Slider from 'react-slick'

const SampleNextArrow = (props:any) =>{
    const {onClick} = props

    return (
      <div className='control-btn' onClick={onClick}>
        <button className='next'>
          <i className='fa fa-chevron-right'></i>
        </button>
      </div>
    )
  }

  const SamplePrevArrow = (props:any) =>{
    const {onClick} = props

    return (
      <div className='control-btn' onClick={onClick}>
        <button className='prev'>
          <i className='fa fa-chevron-left'></i>
        </button>
      </div>
    )
  }
const Upcoming = (props:any) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      }
  return (
    <>
      <section className='upcoming'>
        <div className='container'>
          <div className='heading flexSB'>
            <h1>{props.title}</h1>
            <Link to='/'>View All</Link>
          </div>

          <div className='content'>
            <Slider {...settings}>

              {props.items ? props.items.map((item:any) => {
                return (
                  <>
                    <UCard key={item.id} item={item} />
                  </>
                )
              }):''}
            </Slider>

          </div>

        </div>
      </section>
    </>
  )
}

export default Upcoming