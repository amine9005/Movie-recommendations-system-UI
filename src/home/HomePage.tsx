import React, { useState } from 'react'
import Home from '../components/Home/Home'
import Upcoming from '../components/Upcoming/Upcoming'
import { latest,upcome } from '../dummyData';
import Trending from '../components/Trending/Trending';

const HomePage = () => {

  const [upcoming,setUpcoming] = useState(upcome)
  const [late,setLatest] = useState(latest)
  return (
    <>
      <Home/>
      <Upcoming items={upcoming} title="Upcoming Movies"/>
      <Upcoming items={late} title="Latest Movies"/>
      <Trending/>
    </>
  )
}

export default HomePage