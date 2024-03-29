import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/header'

const Layout = () => {
  return (
    <div className='app'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout