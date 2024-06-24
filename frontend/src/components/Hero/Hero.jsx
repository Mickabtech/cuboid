import React from 'react'
import './Hero.css'
import RoundedButton from "../Button/RoundedButton";
import AppleIcon from '@mui/icons-material/Apple';
import ShopIcon from '@mui/icons-material/Shop';
import bitter from "../../assets/PngItem_1444358.png"
import mobile from "../../assets/mobile.png.png"
import wing from "../../assets/pngwing.com.png"




const Hero = () => {


  return (
    <div className='total'>
    <div className='Hero'>
     <div className='hero-text'>
      <h1>Connect with your friends easily</h1>
      <p>The best app for your communication</p>
      <div className='btn'>
      <RoundedButton content="chat now" icon={AppleIcon} link="/chat" color="blue" txt="white" />
      <RoundedButton content="chat now" icon={ShopIcon} link="/chat" color="green" />
      </div>
      </div>

    </div>

    <div className='downhere'>
      <img src={bitter} alt='router' />
      <img src={mobile} alt='router' />
      <img src={wing} alt="wing" />
    </div>
    </div>
  )
}

export default Hero