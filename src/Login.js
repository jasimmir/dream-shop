import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom'

function Login() {
  return (
    <div className='login'>
        <Link to={"/"}>
        <img className="login-logo" src="https://pngimg.com/uploads/amazon/amazon_PNG7.png" alt='this is amazon logo'></img>
        </Link>
     
        <div className="login-container">
            <h1 >Sign-in</h1>

            <form action="">
                <h5>E-mail</h5>
                <input type="text" />

                <h5>Password</h5>
                <input type="password" />

                <button className='login-signInButton'>Sign in</button>
            </form>
            <p>
                By Signing-in you agree to the <strong>AMAZON FAKE CLONE </strong>
                condition of use & sale. Please see our privacy 
                notice, our cookies Notice and our interest-base
                ads notice.
            </p>
            <button className='login-registerButton'>Create your Amazon Account</button>
        </div>
     </div>
     
  )
}

export default Login