import React, { Component,Fragment } from 'react';
import '../styles/styles.css'
import { Link } from "react-router-dom";
import headerSVG from '../images/header.svg';
import logo from '../images/01_Fw.png';
import { database } from "../firebase_folder";
import { db } from "../firebase_folder/firebase";
import dp1 from '../images/dp1.jpg';
import ReactLoader from './ReactLoader';

class FinalDesign extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    let userID = this.props.userID.substr(1);
    let userPath = db.ref(`UserDetails/${userID}`);
    userPath.once("value", function(snapshot) {
      let ref = snapshot.val();
      if(ref){
        console.log(ref.email);
        console.log(ref.theme);
        this.props.setThemeNumber(ref.theme,ref.name,ref.imageURL);
      }
      else{
        console.log('Page Not Found');
      }
    }.bind(this));

  }
  render(){
    if(this.props.themeNumber == 1){
      return (
        <Fragment>
        <p className="theme-heading-1"><Link to='./'><img className='fw' src={logo}/></Link><Link to='./wall' className='new-btn'>generate new</Link></p>
        <div className="main-container-fd-1">
        <div className="layer-1"/>
        <p className='themeContent-1'>Childhood friendship is the next beautiful memory that can never be replaced.. <br/>Happy Friendship Day..</p>
        <div className="profile-from-container-1">
        <div className='ProfilePicContainer-1'><img src={this.props.userDpURL} className="profilepic"/></div>
        <p className="from1">From: {this.props.userName} </p>
        </div>
        </div>
        </Fragment>
      )
    }
    else if(this.props.themeNumber == 2){
      return(
      <Fragment>
      <p className="theme-heading-2"><Link to='./'><img className='fw' src={logo}/></Link><Link to='./wall' className='new-btn'>generate new</Link></p>
      <div className="main-container-fd-2">
      <div className="layer-2"/>
      <p className='themeContent-2 margin-null'>True friends are never apart.<br/>Maybe in distance but never in heart.. <br/>Happy Friendship Day..</p>
      <div className="profile-from-container-2">
      <div className='ProfilePicContainer-2'><img src={this.props.userDpURL} className="profilepic"/></div>
      <p className="from2">From: {this.props.userName} </p>
      </div>
      </div>
      </Fragment>)
    }
    else if(this.props.themeNumber == 3){
      return(
        <Fragment>
        <p className="theme-heading-3"><Link to='./'><img className='fw' src={logo}/></Link><Link to='./wall' className='new-btn'>generate new</Link></p>
        <div className="main-container-fd-3">
        <div className="layer-3"/>
        <p className='themeContent-3'>There is nothing on this earth more to be prized than true friendship..<br/>Happy Friendship Day..</p>
        <div className="profile-from-container-3">
        <div className='ProfilePicContainer-3'><img src={this.props.userDpURL} className="profilepic"/></div>
        <p className="from3">From: {this.props.userName} </p>
        </div>
        </div>
        </Fragment>
      )
    }
    else if(this.props.themeNumber == 4){
      return(
        <Fragment>
        <p className="theme-heading-4"><Link to='./'><img className='fw' src={logo}/></Link><Link to='./wall' className='new-btn'>generate new</Link></p>
        <div className="main-container-fd-4">
        <div className="layer-4"/>
        <p className='themeContent-4'>True friends are never apart.<br/>Maybe in distance but never in heart.. <br/>Happy Friendship Day..</p>
        <div className="profile-from-container-4">
        <div className='ProfilePicContainer-4'><img src={this.props.userDpURL} className="profilepic"/></div>
        <p className="from4">From: {this.props.userName} </p>
        </div>
        </div>
        </Fragment>
      )
    }
    else
    {
    return(
      <ReactLoader/>
    )}
  }
}
export default FinalDesign
