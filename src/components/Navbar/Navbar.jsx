import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const {setCurrency}=useContext(CoinContext)
  const currencyHandler =(event)=>{
    switch(event.target.value){
      case "usd":{
        setCurrency({name:"usd",symbol:"$"});
        break;
      }
      case "eur":{
        setCurrency({name:"eur",symbol:"e"});
        break;
      }
    
      case "inr":{
        setCurrency({name:"inr",symbol:"i"});
        break;
      }
      case "nrp":{
        setCurrency({name:"nrp",symbol:"n"});
        break;
      }
      default:{
        setCurrency({name:"usd",symbol:"$"});
        break;
      }
    }

  }
  return (
    <div class='navbar'>
      <Link to={'/'}>
        <img src={logo} alt="" className='logo'/>
        </Link>
        <ul>
          <Link to={'/'}> <li>Home</li></Link>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div class="nav-right">
            <select onChange={currencyHandler}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
                <option value="nrp">NRP</option>

            </select>
            <button>Sign up<img src={arrow_icon} alt=""></img></button>
        </div>
      
    </div>
  )
}

export default Navbar
