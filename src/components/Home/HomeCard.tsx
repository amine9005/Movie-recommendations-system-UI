import React from 'react'

interface item {
  id:string,cover:string,name:string,rating:number,time:string,desc:string,starring:string,genres:string,tags:Array<String>,video:string
}

const HomeCard = (props:{item:item}) => {
  return (
    <div className='box'>
      <div className="coverImage">
        <img src={props.item.cover} alt=''/>
      </div>
      <div className="content flex">
        <h1>{props.item.name}</h1>
        <div className="rating flex">
          <i className='fa fa-star'></i>
          <i className='fa fa-star'></i>
          <i className='fa fa-star'></i>
          <i className='fa fa-star-half'></i>
        </div>
        <label>{props.item.rating}</label>
        <span>GP</span>
        <label>{props.item.time}</label>
        <p>{props.item.desc}</p>
        <div className='cast'>
          <h4><span>Starring</span>{props.item.starring}</h4>
          
        </div>
      </div>

    </div>
  )
}

export default HomeCard