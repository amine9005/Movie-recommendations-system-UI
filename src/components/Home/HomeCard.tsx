import React from 'react'

interface item {
  id:String,cover:String,name:String,rating:Number,time:Date,desc:String,starring:String,genres:String
}

const HomeCard = (item:item) => {
  return (
    <div>HomeCard</div>
  )
}

export default HomeCard