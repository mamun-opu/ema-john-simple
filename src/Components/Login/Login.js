import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './Login.css'
import { useState } from 'react';
import { userContext } from '../../App';
import { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    // console.log(loggedInUser);
    const [userInfo, setUserInfo] = useState({
        name: '',
        age:-1,
        phone: '',
        email: '',
        password: ''
    })
    const [isNewUser, setIsNewUser] = useState(false);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleSignIn = ()=> {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                const userDetails = {
                    name: user.displayName,
                    email: user.email
                }
                setLoggedInUser(userDetails)

            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                // console.log(errorMessage, errorCode, email, credential);
            });

    }
    const handleBtnSubmit = (e) =>{
        console.log('history: ', history)
        if (userInfo.email && userInfo.password) {
            firebase.auth().signInWithEmailAndPassword(userInfo.email, userInfo.password)
            .then((result) => {
                // Signed in
                // const user = result.user;
                const userDetails = {...userInfo}
                // console.log(userDetails);
                setLoggedInUser(userDetails);
                history.replace(from);
            })
            .catch((error) => {
                // var errorCode = error.code;
                // var errorMessage = error.message;
                // console.log(errorMessage);
                console.log(error)
            });
        }

        e.preventDefault();
    }

    const handleSignUp = (e)=> {

        if (userInfo.email && userInfo.password) {
            firebase.auth().createUserWithEmailAndPassword(userInfo.email, userInfo.password)
            .then((result) => {
                // Signed in 
                const userDetails = {...userInfo}
                setLoggedInUser(userDetails);
                // ...
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                // ..
            });
        }
        // console.log('clicked');

        e.preventDefault();
        // console.log(e.target.elements)
        // const {name, age, phone, email, password} = e.target.elements;
        // console.log(name.value, age.value, phone.value, email.value, password.value);
        // setUserInfo({
        //     name: name.value
        // })
        

    }
    const updateUserInfo = (e)=>{
        // console.log(e.target.name, e.target.value)
        const user = {...userInfo};
        user[e.target.name] = e.target.value;
        setUserInfo(user);
    }
    // console.log(userInfo);
    return (
        <div className = "signIn-section">
            <h2>sign in with <button className = 'sign-in' onClick = {handleSignIn}>Google</button></h2>
            {
                !isNewUser && 
                <div>
                    <form  onSubmit = {handleBtnSubmit}>
                        <input type="text" name="email" placeholder = 'your email..' id="email" onBlur = {updateUserInfo} required/>
                        <br />
                        <input type="password" name="password" placeholder = 'your password..' id="password" onBlur = {updateUserInfo} required/>
                        <br />
                        <input className = 'btn-primary' type="submit" value="sign-in" />
                        <br />
                    </form>
                    <h3>Do not have any account? <button  onClick = {()=>setIsNewUser(!isNewUser)} className = 'btn-primary' style = {{ borderRadius: '5px', padding: '5px'}}>sign-up</button> here</h3>
                </div> 
            }
            {
                isNewUser && 
                <div>
                    <form onSubmit = {handleSignUp}>
                        <input type="text" name="name" placeholder = 'your name..' id="name" onBlur = {updateUserInfo} required/>
                        <br />
                        <input type="number" placeholder = 'your age..' name="age" id="age" onBlur = {updateUserInfo} required/>
                        <br />
                        <input type="tel" placeholder = 'phn number..' name="phone" id="phone" onBlur = {updateUserInfo} required/>
                        <br />
                        <input type="text" name="email" placeholder = 'your email..' id="email" onBlur = {updateUserInfo} required/>
                        <br />
                        <input type="password" name="password" placeholder = 'your password..' id="password" onBlur = {updateUserInfo} required/>
                        <br />
                        <input className = 'btn-primary' type="submit" value="sign-up" />
                        <br />
                    </form>
                    <h3>Already have an account? <button  onClick = {()=>setIsNewUser(!isNewUser)} className = 'btn-primary' style = {{ borderRadius: '5px', padding: '5px'}}>sign-in</button> here</h3>
                </div>
            }
            
        </div>
    );
};

export default Login;