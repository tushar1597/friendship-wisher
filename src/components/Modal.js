/*THIS MODAL IS FOR ADDING LOCATION AND CONTENT*/
import React, { Component,Fragment } from 'react';
import '../styles/styles.css';
import dp1 from '../images/dp1.jpg';

class Modal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      let themeContent;
      if(this.props.themeNumber==1){
        themeContent=(
          <Fragment>
          <p className="theme-heading-1">Childhood <button type="button" className='back-btn' data-dismiss="modal">Back</button></p>
          <div className="main-container-1">
          <div className="layer-1"/>
          <p className='themeContent-1'>Childhood friendship is the next beautiful memory that can never be replaced.. <br/>Happy Friendship Day..</p>
          <div className="profile-from-container-1">
          <div className='ProfilePicContainer-1'><img src={dp1} className="profilepic"/></div>
          <p className="from1">From: Your_Name </p>
          </div>
          </div>
          </Fragment>
        )
      }
      else if(this.props.themeNumber==3){
        themeContent=(
          <Fragment>
          <p className="theme-heading-3">cute fingers<button type="button" className='back-btn' data-dismiss="modal">Back</button></p>
          <div className="main-container-3">
          <div className="layer-3"/>
          <p className='themeContent-3'>There is nothing on this earth more to be prized than true friendship..<br/>Happy Friendship Day..</p>
          <div className="profile-from-container-3">
          <div className='ProfilePicContainer-3'><img src={dp1} className="profilepic"/></div>
          <p className="from3">From: Your_Name </p>
          </div>
          </div>
          </Fragment>
        )
      }
      else if(this.props.themeNumber==2){
        themeContent=(
          <Fragment>
          <p className="theme-heading-2">hello Teddy <button type="button" className='back-btn' data-dismiss="modal">Back</button></p>
          <div className="main-container-2">
          <div className="layer-2"/>
          <p className='themeContent-2'>True friends are never apart.<br/>Maybe in distance but never in heart.. <br/>Happy Friendship Day..</p>
          <div className="profile-from-container-2">
          <div className='ProfilePicContainer-2'><img src={dp1} className="profilepic"/></div>
          <p className="from2">From: Your_Name </p>
          </div>
          </div>
          </Fragment>
        )
      }
      else if(this.props.themeNumber==4){
        themeContent=(
          <Fragment>
          <p className="theme-heading-4">Love<button type="button" className='back-btn' data-dismiss="modal">Back</button></p>
          <div className="main-container-4">
          <div className="layer-4"/>
          <p className='themeContent-4'>True friends are never apart.<br/>Maybe in distance but never in heart.. <br/>Happy Friendship Day..</p>
          <div className="profile-from-container-4">
          <div className='ProfilePicContainer-4'><img src={dp1} className="profilepic"/></div>
          <p className="from4">From: Your_Name </p>
          </div>
          </div>
          </Fragment>
        )
      }
        return (
            <div className="modal fade " id="themeModal" tabIndex="-2" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div className="modal-dialog addContentModalStyle" role="document">
                    <div className="modal-content modal-content-custom ">
                    {themeContent}
                    <div className="modal-body modal-body-custom">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
