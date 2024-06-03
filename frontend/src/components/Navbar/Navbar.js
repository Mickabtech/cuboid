import React from 'react'
import "./Navbar.css" 
import RoundedButton from '../Button/RoundedButton.js';
import AppsIcon from '@mui/icons-material/Apps';


const Navbar = () => {


  return (

    <nav>
      
      <h1 className='txt'>Cubiod</h1> 

      <div className='leftside'>
      <RoundedButton content="Get Started" link="/login"/>
      <AppsIcon style={{ fontSize: 50, color: 'white', paddingRight: "3rem" }}/>
      </div>
      

    </nav>

  )
}

export default Navbar