import firebase from 'firebase';

// Web setup:
const config = {
  apiKey: "AIzaSyAfr_0wVWmyINt_oBya1Me5X2a__8DLVQ0",
  authDomain: "friendshipwisher.firebaseapp.com",
  databaseURL: "https://friendshipwisher.firebaseio.com",
  projectId: "friendshipwisher",
  storageBucket: "friendshipwisher.appspot.com",
  messagingSenderId: "575524168928"
    };

const app_initializer = firebase.initializeApp(config); //initialize the firebase app by its config.
//to provide firebase authentication.
const db = firebase.database(); //to send/retreive data from db
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider(); //to provide fb auth.

const storage = firebase.storage().ref(); //for using storage for images
export {facebookAuthProvider,app_initializer};

const auth = firebase.auth();
//For traveller
export {
    db,
    auth,
    storage,
};
