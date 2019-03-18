import React, { Component,Fragment } from 'react';
import '../styles/styles.css'
import Header from './Header'
import { Link } from "react-router-dom";
class LandingPage extends Component {
componentDidMount(){

}
  render() {
    return (
      <div>
          <Header/>
      <div className="landingPageContainer">

      <div className="container landingPage-content-box">
      <p className="friend-quote">Good Friends are like stars. You don't always see them but you know they're always there.. <br/>So, this Friendship Day.. <br/>Wish your friends with your own custom wish. Let them know how special they are. <br/>Just click on
      the link below and generate your wish link.</p>
      <Link to='/wall' className="btn-generate">Generate Wish Link</Link>
      </div>
      </div>



      </div>
    );
  }
}

export default LandingPage
