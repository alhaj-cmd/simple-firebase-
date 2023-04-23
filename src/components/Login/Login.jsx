import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/FirebaseInit';




const Login = () => {
    const [user, setUser] = useState(null);
    const auth =getAuth(app)
    console.log(auth)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();



    const handleGoogleSingnIn = () =>{
        // console.log('google signIN')
        signInWithPopup(auth, googleProvider)
    
    .then(result => {
        const loginuser = result.user;
        console.log(loginuser);
        setUser(loginuser)
    })
    .catch(error => {
        console.log('error', error.message)
    })
}
// handle Github signIn

const handleGithubSignIn = ( ) =>{
    signInWithPopup(auth, githubProvider)
    .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
    })
    .catch(error => {
        console.log(error)
    })
}

const handleSignOut = () =>{
    signOut(auth)
    .then(result => {
        console.log(result)
        setUser(null);
    })
    .catch(error => {
        console.log(error)
    })
}
    return (
        <div>
          { user ?  <button onClick={handleSignOut}>SignOut</button> :
            <div>
                <button onClick={handleGoogleSingnIn}>Google login</button>
                <button onClick={handleGithubSignIn}>githubSingIn</button>
                </div>
                }
           { user && <div>
                <h3>user : {user.displayName}</h3>
                <img src={user.photoURL} alt="" />
                <p>{user.email}</p>
            </div>}
        </div>
    );
};

export default Login;