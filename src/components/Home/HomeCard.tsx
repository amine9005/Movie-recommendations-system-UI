import React from 'react'
import { Link } from 'react-router-dom'

interface item {
  id:string,cover:string,name:string,rating:number,time:string,desc:string,starring:string,genres:string,tags:Array<String>,video:string
}

const HomeCard = (props:{item:item}) => {
  return (
    <>
      <div className='box'>
        <div className='coverImage'>
          <img src={props.item.cover} alt='' />
        </div>
        <div className='content flex'>
          <div className='details row'>
            <h1>{props.item.name}</h1>
            <div className='rating flex'>
              <div className='rate'>
                <i className='fas fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star-half'></i>
              </div>
              <label>{props.item.rating}(Imdb)</label>
              <span>GP</span>
              <label>{props.item.time}</label>
            </div>
            <p>{props.item.desc}</p>
            <div className='cast'>
              <h4>
                <span>Starring </span>
                {props.item.starring}
              </h4>
              <h4>
                <span>Genres </span>
                {props.item.genres}
              </h4>
              <h4>
                <span>Tags </span>
                {props.item.tags}
              </h4>
            </div>
            <button className='primary-btn'>
              <i className='fas fa-play'></i> PLAY NOW
            </button>
          </div>
          <div className='palyButton row'>
            <Link to={`/singlepage/${props.item.id}`}>
              <button>
                <div className='img'>
                  <img src='./images/play-button.png' alt='' />
                  <img src='./images/play.png' className='change' />
                </div>
                WATCH TRAILER
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeCard