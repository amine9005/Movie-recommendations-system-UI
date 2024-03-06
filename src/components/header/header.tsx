import React from 'react'
import "./header.scss"
import { Link } from 'react-router-dom'

const header = () => {
  return (
    <><header >
        <div className='container flexSB'>
            <nav className='flexSB'>
                <div className="logo">
                    {/* <img src='../images/logo.png'></img> */}
                </div>
                <ul className='flexSB'>
                    <Link to='/'>Home</Link>
                    <Link to='/series'>Series</Link>
                    <Link to='/movies'>Movies</Link>
                    <Link to='/pages'>Pages</Link>
                    <Link to='/pricing'>Pricing</Link>
                    <Link to='/contact'>Contact</Link>

                </ul>
            </nav>
        </div>
    </header></>
  )
}

export default header