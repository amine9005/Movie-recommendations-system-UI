import React from 'react'
import Header from '../components/header/header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='app'>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default Layout