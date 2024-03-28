import React, { useState } from 'react'
import Home from '../components/Home/Home'
import Upcoming from '../components/Upcoming/Upcoming'
import { latest, upcome, recommended } from '../dummyData';
import Trending from '../components/Trending/Trending';

const HomePage = () => {

  const [upcoming,setUpcoming] = useState(upcome)
  const [late,setLatest] = useState(latest)
  const [recommend , setRecommend] = useState(recommended)
  return (
    <>
      <Home/>
      <Upcoming items={upcoming} title="Upcoming Movies"/>
      <Upcoming items={late} title="Latest Movies"/>
      <Trending/>
      <Upcoming items={recommend} title="Recommended Movies"/>

    </>
  )
}

export default HomePage