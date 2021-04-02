import React, { useContext } from 'react';
import firebase from "firebase/app";
import googleIcon from "../../icons/google.png"
import deleteIcon from "../../icons/delete.png"
import './Login.css'
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
     }else {
        firebase.app();
     }
    const [loggedInUser,setLoggedInUser]= useContext(UserContext);
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            const {displayName, email} = result.user;
            const signedInUser = {name:displayName , email};
            setLoggedInUser(signedInUser);
            storeAuthToken();
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            console.log(errorCode,errorMessage,email,credential);
        });
    }


    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
           sessionStorage.setItem('token', idToken);           
           history.replace(from);
          }).catch(function(error) {
            console.log(error);
          });
    }
    return (
        <div className="login">
            <h1>Login</h1>
            <button id="loginButton" onClick={handleGoogleSignIn}><img id="googleIcon" style={{width:'2rem'}} src={googleIcon} alt=""/> Continue With Google</button>
        </div>
    );
};

export default Login;