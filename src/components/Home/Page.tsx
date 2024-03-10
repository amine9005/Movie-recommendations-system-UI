import React from 'react'
import HomeCard from './HomeCard'

const Page = (items:any) => {
  return (
    <div className='homeContainer'>
        {items.map((item:any) => (
            <HomeCard key={item.id} item={item} />
                        ))}
    </div>
  )
}

export default Page