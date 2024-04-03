import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { homeData } from '../../dummyData'

const Watch = () => {
  const {id} = useParams()
  const [items, setItems] = useState(homeData)

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

              </div>
            </div>

          </section>
        </>
      )):''}
    </>
  )
}

export default Watch