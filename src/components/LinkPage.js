import React, { Component,Fragment } from 'react';
import '../styles/styles.css'
import $ from 'jquery'
import Header from './Header'
import 'font-awesome/css/font-awesome.min.css';

let generatedLink;
class LinkPage extends Component {
  constructor(props){
    super(props);
    let linkFromLocalStorage = localStorage.getItem('generatedLink');
    if(!this.props.generatedLink && linkFromLocalStorage){
      this.props.setGeneratedLink(linkFromLocalStorage,false);
    }
    else{
      console.log('page not found');

    }
  }

  render() {
    if(this.props.generatedLink){
      let waLink = 'whatsapp://send?text='+this.props.generatedLink;
    return(
      <Fragment>
      <Header/>
      <div className="landingPageContainer">
      <div className="container linkPage-content-box">
        <p className="linkpage-content">Thanks for using Friendship Wisher<br/> Here is your wish link share it to your friends and wish them a very happy friendship day..</p>
        <div className='link-share-container'>
        <a href={this.props.generatedLink} className='generated-link'><p className='link-text'>{this.props.generatedLink}</p></a>
        <a className='wa-share-wrapper' href={waLink}><i className="fa fa-whatsapp wa-icon"></i><p className='wa-share'>Share</p></a>
      </div>
      </div>
      </div>
      </Fragment>
    )
  }
  else{
    return(<h1>404! Page Not Found</h1>)
  }
}
}

export default LinkPage
