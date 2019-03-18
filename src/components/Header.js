import React, { Component,Fragment } from 'react';
import '../styles/styles.css'
import headerSVG from '../images/header.svg';
import logo from '../images/01_Fw.png';
class Header extends Component{
  render(){
    return(
    <div className="completeHeader">
      <div className="header-content ">
      <img className='logo' src={logo}/>
      <p className="fw-heading">Friendship Wisher</p>
      <hr className="custom-hr"/>
      <p className='fw-subheading'>Wish your friends Happy Friendship Day..</p>
      </div>


    </div>)
  }
}
export default Header
