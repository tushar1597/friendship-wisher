import React, { Component,Fragment } from 'react';
import '../styles/styles.css'
import Header from './Header'
import ArrowHeading from './ArrowHeading'
import Themes from './Themes'
import $ from 'jquery'
import { database } from "../firebase_folder";
import { db } from "../firebase_folder/firebase";
import firebase from 'firebase';
import ReactLoader from './ReactLoader';
import { Redirect} from 'react-router-dom';

let selectedPic64;
let selectedFile;
let isFileSelected=false;
let uploadedImgDownloadURL;

class Wall extends Component {
constructor(props){
  super(props);
  this.storageImgToFirebase = this.storageImgToFirebase.bind(this);
  this.saveDetails = this.saveDetails.bind(this);
}

componentDidMount(){
  console.log('componentDidMount wall');
  $('.completeHeader').css('box-shadow', '10px 5px 15px lightgray');
}
componentDidUpdate(){

}
placeOver(id,starId){
  $('#'+starId).show();
  $('#'+id).css({top:0,fontSize:'14px',color:'#ce497c'});

}

storageImgToFirebase(userID){

}

checkVal(labelId,inpId,starId){
    $('#'+starId).hide();

  let s = ($('#'+inpId).val());

  if(s.trim()){
  ($('#'+labelId).css({color:'gray'}));
    }
  else{
  ($('#'+labelId).css({top:'32px',fontSize:'16px',color:'gray'}));
  }
//Checking if email already exists or not?============================================================
  if(s.trim()){
    let email = $('#email').val().trim();

    let id = email.replace(/\./g , "=");
    let userPath = db.ref(`RegisteredUsers/${id}`);

    userPath.once("value", function(snapshot) {
      // console.log("Snapshot==",snapshot.val());
      if(snapshot.val() && snapshot.val().email){
        document.getElementById('email').focus();
        $('#alreadyExistID').show();
      }
      else{
        $('#alreadyExistID').hide();
      }

    });
    }

//====================================================================================================
}

encodeImageFileAsURL(){
  console.log("File selected");
let e=document.getElementById('fileId');
let  file = e.files[0];
console.log(file);
selectedFile = file;
isFileSelected = true;
// var reader = new FileReader();
// reader.onloadend = function() {
//   selectedPic64 = reader.result;
//
//   console.log('RESULT', selectedPic64)
// }
// reader.readAsDataURL(file);
}

saveDetails(){

  console.log("Called..");
  let name = $('#name').val().trim();
  let email = $('#email').val().trim();
  let theme = $('#themeId').val();
  let themeNum;
  switch(theme){
    case 'Childhood':
      {
        themeNum=1;
        break;
      }
      case 'Hello Teddy':
        {
          themeNum=2;
          break;
        }
        case 'Cute Fingers':
          {
            themeNum=3;
            break;
          }
          case 'Love':
            {
              themeNum=4;
              break;
            }
  }
  console.log(name.length);
  console.log(email.length);
  let id = email.replace(/\./g , "=");
  let userID;
  console.log(id);
  if(name.length && email.length && isFileSelected){
    this.props.setIsLoading(true);
    database.createRegisteredUsers(id);
    let usercount = 'usercount'
    let userPath = db.ref(`UserCount`);
    userPath.once("value", function(snapshot) {
  let dbResponse = snapshot.val();
  console.log(dbResponse);

//usercount updation=============================================================================
  if(dbResponse){
    //if usercount present then updating it..
    userID = dbResponse.UserCount+1;
    console.log(userID);
    db.ref(`UserCount`).update({UserCount:userID,});
  }
  else{
    //If usercount not there than updating it.
    database.createUserCount(1);
    userID = 1;
  }
//==================================================================================================
    console.log('user entered in db');
    console.log(userID);
    console.log(name);
    console.log(email);
    console.log(themeNum);

    //storing image to firebase storage=============================================================
    // Create a root reference
    let filename = selectedFile.name;

    let storageRef = firebase.storage().ref('/userImages/'+userID);
    let uploadTask = storageRef.put(selectedFile);

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed', function(snapshot){
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log('Upload is paused');
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log('Upload is running');
              break;
          }
        }, function(error) {
          console.log(error);
          // Handle unsuccessful uploads
        }, function() {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            uploadedImgDownloadURL = downloadURL;
            console.log('File available at', downloadURL);
            database.createUserDetails(userID,name,email,uploadedImgDownloadURL,themeNum);
          });
        });

    //storing image to firebase storage=============================================================
    //storing the generatedLink=====================================================================
    let generatedLink = "https://friendshipwisher.herokuapp.com/design:"+userID.toString();
    localStorage.setItem('generatedLink',generatedLink);
    this.props.setGeneratedLink(generatedLink,true);


}.bind(this));

}


}

  render() {
    if(this.props.isLoading && !this.props.shouldRedirectToLinkPage){
      return(
        <ReactLoader/>
      )
    }
    else if(this.props.shouldRedirectToLinkPage){
      return(
        <Redirect to='/Link'/>
      );
    }
    else{
      return(
      <div>
          <Header/>
          <ArrowHeading headingContent={'Register yourself'} width={"180px"} marginTop={'110px'} id={"1"}/>

          <div className='formContainer'>
          <form className="form-horizontal" className="wallForm">
          <div className="form-group" >
            <label className="control-label col-sm-2 label-custom" id='name-label' htmlFor="name">Your good name<span className='star' id='star1'>*</span></label>
            <div className="col-sm-12">
              <input required={true} type="text" className="form-control input-box-custom" id="name" onFocus={()=>this.placeOver('name-label','star1')} onBlur={()=>this.checkVal('name-label','name','star1')} />
            </div>
          </div>
            <div className="form-group">
              <label className="control-label col-sm-2 label-custom" id='email-label' htmlFor="email">Your Email<span className="star" id='star2'>*</span></label>
              <div className="col-sm-12">
                <input required={true} type="email" className="form-control input-box-custom" id="email" onFocus={()=>this.placeOver('email-label','star2')} onBlur={()=>this.checkVal('email-label','email','star2')}/>
                <p id='alreadyExistID' className="emailExist">Email alreay exists*</p>
              </div>
            </div>

              <ArrowHeading headingContent={'Choose Theme'} id={'2'} width={"140px"} marginTop={'10px'}/>

            <div className="choose-theme-container">
            <Themes/>
            </div>
            <div className="form-group dropdownList">
              <label htmlFor="sel1">Choose Your Favourite Theme:</label>
              <select className="form-control form-control-custom" id="themeId">
                <option>Childhood</option>
                <option>Hello Teddy</option>
                <option>Cute Fingers</option>
                <option>Love</option>
              </select>

            </div>
              <ArrowHeading headingContent={'Upload Your Pic'} id={'3'} width={"170px"} marginTop={'-20px'}/>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <input required={true} type='file' accept="audio/*" id="fileId" className='uploadPic' onChange={this.encodeImageFileAsURL}/>
                </div>
              </div>

            <div className="form-group">
              <div className="col-sm-12">
                <button type="submit" onClick={this.saveDetails} className="btn btn-submit">Generate Wish Link</button>
              </div>
            </div>

          </form>
          </div>

      </div>
    );
  }
 }
}

export default Wall
