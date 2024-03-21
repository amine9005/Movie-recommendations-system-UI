import React from 'react'
import { Link } from 'react-router-dom'
import UCard from './UCard'

const Upcoming = (props:any) => {
  return (
    <>
    <section className='upcoming'>
        <div className="container">
            <div className="heading flexSB">
                <h1>{props.title}</h1>
                <Link to='/'>View All</Link>
            </div>

            <div className="container">
                {props ? props.items.map((item:any)=>{
                    <UCard key={item.id} item={item}/>
                }):''}
            </div>
        </div>

    </section></>
  )
}

export default Upcoming