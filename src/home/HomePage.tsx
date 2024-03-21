import React, { useState } from 'react'
import Home from '../components/Home/Home'
import Upcoming from '../components/Upcoming/Upcoming'
import { upcome } from '../dummyData';

const HomePage = () => {

  const [upcoming,setUpcoming] = useState(upcome)
  return (
    <>
    <Home/>
    <Upcoming items={upcoming} title="Upcoming Movies"/>
    </>
  )
}

export default HomePage