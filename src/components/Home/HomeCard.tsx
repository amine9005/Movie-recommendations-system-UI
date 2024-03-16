import React from 'react'
import { Link } from 'react-router-dom'

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
          <h4>
            <span>Starring</span>
            {props.item.starring}
          </h4>

          <h4>
            <span>Genres</span>
            {props.item.genres}
          </h4>

          <h4>
            <span>Tags</span>
            {props.item.tags}
          </h4>

          <button className='primary-btn'>
              <i className='fa fa-play'></i>
          </button>

          <div className='playButton row'>
            <Link to={`/singlePage/${props.item.id}`}></Link>
            <button >
              <div className='img'>
              <img src='./images/play-button.png' alt='' />
              <img src='./images/play.png' alt='' className='change' />
              </div>
              WATCH TRAILER
            </button>

          </div>

        </div>
      </div>

    </div>
  )
}

export default HomeCard