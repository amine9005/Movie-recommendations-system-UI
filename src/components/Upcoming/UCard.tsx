import React from 'react'

const UCard = (props:{item:{id:string,cover:string,name:string,time:string}}) => {
  return (
    <>
      <div className='movieBox'>
        <div className="img">
          <img src={props.item.cover} alt={"cover not available: "+props.item.cover}/>
        </div>
        <div className="text">
          <h3>{props.item.name}</h3>
          <span>{props.item.time}</span>
          <button className="primary-btn">
            <i className='fa fa-play'></i> Play Now
          </button>
        </div>
      </div>
    </>
  )
}

export default UCard