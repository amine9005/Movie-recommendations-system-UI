import React, { useState } from 'react'
import './Trending.scss'
import { trending } from '../../dummyData'
import Page from '../Home/Page'


const Trending = () => {
    const [item,setItem] = useState(trending)
  return (
    <>
        <section className='trending'>
            <Page items={item}/>
        </section>
    </>
  )
}

export default Trending