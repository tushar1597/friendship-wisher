import React, { Component,Fragment } from 'react';
import '../styles/styles.css'
import $ from 'jquery'
import Modal from './Modal'
import childhood from '../images/childhood.jpg';
import teddy from '../images/teddy.jpg';
import cuteFingers from '../images/fingers.jpg';


let themeNumber;

class Themes extends Component {
  constructor(props){
    super(props);
    this.state={
      themeNumber :4
    }
    this.setThemeNumber = this.setThemeNumber.bind(this);

  }
componentDidMount(){
  // console.log($('.theme-img').width());
  //   $('.theme-img').height('100%');
  // console.log($('.theme-img').height());
  //
  // $('.theme-img').height('100%');
}
setThemeNumber(num){
  this.setState({
    themeNumber:num
  })
}

  render() {
    if(this.state){
    return (
      <div className='container'>
      <div className="row">
        <div className="col-6 col-md-3 theme-box">
         <div className="thumbnail thumbnail-custom">
         <button  className="theme-btn" type='button' data-toggle="modal" data-target="#themeModal" onClick={()=>this.setThemeNumber(1)}>
             <div className='onlyImgContainer'><img src={childhood} className="theme-img" alt="Lights" style={{width:"100%",height:'100%'}}/></div>
             <div className="caption">
               <p className='theme-name'>Childhood</p>
             </div>
           </button>
         </div>
        </div>
        <div className="col-6 col-md-3 theme-box">
         <div className="thumbnail thumbnail-custom">
           <button  className="theme-btn" type='button' data-toggle="modal" data-target="#themeModal" onClick={()=>this.setThemeNumber(2)}>
             <div className='onlyImgContainer2'></div>
             <div className="caption">
               <p className='theme-name'>hello teddy</p>
             </div>
           </button>
         </div>
        </div>
        <div className="col-6  col-md-3 theme-box">
         <div className="thumbnail thumbnail-custom">
           <button  className="theme-btn" type='button' data-toggle="modal" data-target="#themeModal" onClick={()=>this.setThemeNumber(3)}>
             <div className='onlyImgContainer3'></div>
             <div className="caption">
               <p className='theme-name'>cute fingers</p>
             </div>
           </button>
         </div>
        </div>
        <div className="col-6  col-md-3 theme-box">
         <div className="thumbnail thumbnail-custom">
           <button  className="theme-btn" type='button' data-toggle="modal" data-target="#themeModal" onClick={()=>this.setThemeNumber(4)}>
             <div className='onlyImgContainer4'></div>
             <div className="caption">
               <p className='theme-name'>love</p>
             </div>
           </button>
         </div>
        </div>
        </div>
        <Modal themeNumber={this.state.themeNumber}/>
      </div>
    );
  }
  else{
    return(
      <h1>Heloo</h1>
    )
  }
  }
}

export default Themes
