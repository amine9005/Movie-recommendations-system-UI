import React from 'react'
import { homeData } from '../../dummyData'
import Page from './Page'

const Home = () => {
  const [items, setItems] = React.useState(homeData)
  return (
    <section className='home'>
      <Page items={items}>

      </Page>
      <div className="margins"></div>
    </section>
  )
}

export default Home