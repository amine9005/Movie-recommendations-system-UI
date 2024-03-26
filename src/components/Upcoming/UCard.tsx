import React from 'react'

interface item {
  id:string,cover:string,name:string,time:string
}
const UCard = (props:{item:item}) => {
  return (
    <>
      <div className='movieBox'>
        <div className='img'>
          <img src={props.item.cover} alt='' />
        </div>
        <div className='text'>
          <h3>{props.item.name}</h3>
          <span>{props.item.time}</span> <br />
          {/*<Link to={`/singlepage/${id}`}>*/}
          <button className='primary-btn'>
            <i className='fa fa-play'></i> PLAY NOW
          </button>
          {/*</Link>*/}
        </div>
      </div>
    </>
  )
}

export default UCard