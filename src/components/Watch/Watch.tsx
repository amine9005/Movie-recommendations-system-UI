import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { homeData } from '../../dummyData'
import Upcoming from '../Upcoming/Upcoming'
import { recommended } from '../../dummyData'

const Watch = () => {
  const {id} = useParams()
  const [items, setItems] = useState(homeData)
  const [recommend , setRecommend] = useState(recommended)


  useEffect(() => {
    let item = homeData.find((item) => item.id === parseInt(id!))
    if (item){
      setItems([item])
    }
  },[id])
  return (
    <>
      {items ? items.map((item) => (
        <>
          <section className='watchPage'>
            <div className="watchHeading">
              <h1>{item.name}</h1>
              <span> | {item.time} | </span> <span>HD</span>
            </div>
            <div className="container">
              <video src={item.video} controls/>
              <div className='para'>
                <h3>{item.date}</h3>
                <p>{item.desc}</p>
              </div>
              <div className='social'>
              <h3>Share : </h3>
                <img src='https://img.icons8.com/color/48/000000/facebook-new.png' />
                <img src='https://img.icons8.com/fluency/48/000000/twitter-circled.png' />
                <img src='https://img.icons8.com/fluency/48/000000/linkedin-circled.png' />
              </div>
            </div>
            <Upcoming items={recommend} title="Recommended Movies"/>

          </section>
        </>
      )):''}
    </>
  )
}

export default Watch