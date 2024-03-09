import React from 'react'
import HomeCard from './HomeCard'

const Page = (items:any) => {
  return (
    <div className='homeContainer'>
        {items.map((item:any) => (
            <HomeCard />
                        ))}
    </div>
  )
}

export default Page