import React, { useEffect, useState } from 'react'
import "./Navbar.css" 
import RoundedButton from '../Button/RoundedButton.js';
import AppsIcon from '@mui/icons-material/Apps';


const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  }, [])

  return (

    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      
      <h1>Cubiod</h1> 

      <div className='leftside'>
      <RoundedButton content="Get Started" link="/login"/>
      <AppsIcon style={{ fontSize: 50, color: 'white' }}/>
      </div>
      

    </nav>

  )
}

export default Navbar