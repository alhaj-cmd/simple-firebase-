import React from 'react';
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import app from '../Firebase/FirebaseInit';
const provider = new GoogleAuthProvider()

const handleGoogleSingnIn = () =>{
    console.log('google signIN')
}

const Login = () => {
    const auth =getAuth(app)
    return (
        <div>
            <button onClick={handleGoogleSingnIn}>Google login</button>
        </div>
    );
};

export default Login;