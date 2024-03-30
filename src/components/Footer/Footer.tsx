import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <>
    <footer>
        <div className="container">
            <div className="box">
                <ul className="flex">
                    <li>Terms of Use</li>
                    <li>Privacy-Policy</li>
                    <li>Blog</li>
                    <li>FAQ</li>
                    <li>Watch List</li>
                </ul>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione est consequuntur, consequatur nostrum voluptatem quod eaque quae maiores consectetur eveniet! Eaque, nemo perferendis! Minima dolorum qui magnam, obcaecati eligendi in!</p>
            </div>
            <div className="box">
            <div className='img flexSB'>
              <img src='https://img.icons8.com/color/48/000000/apple-app-store--v3.png' alt='App Store' />
              <span>App Store</span>
              <img src='https://img.icons8.com/fluency/48/000000/google-play.png' alt='Play Store' />
              <span>Google Play Store</span>
            </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer