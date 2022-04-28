import React from 'react';
// import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
// import styled from 'styled-components';
import {auth} from '../util/connection'
// import {auth} from '../util/connection';
const SignIn = () => {
    const SignInWithFirebase = () => {
        const google_provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(google_provider)
        .then((re) =>{
            console.log(re);
        })
        .catch((err) => {
            console.log(err)
        })
        }
    return(
        <button onClick={SignInWithFirebase}>Sign in with Google</button>
    )
    };
    export default SignIn 
