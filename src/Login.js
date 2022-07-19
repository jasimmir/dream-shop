import React, {useState} from 'react';
import './Login.css';
import {Link , useNavigate} from 'react-router-dom';
import {auth} from './firebase';

function Login() {
    const navigate = useNavigate();
    // const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e =>{
        e.preventDefault();
        // some fancy firebase login functionality 
        auth
            .signInWithEmailAndPassword(email, password)
            .then (auth => {
                    navigate('/checkout');
                })
                .catch(error =>alert.message);
    }
    const register = e =>{
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) =>{
            // it successfully created a new user with email and password
            console.log(auth);
            if (auth ){
                navigate('/')
            }
        })
        .catch(error=> alert(error.message))
        //some fancy firebase register functionality 
        
    }

  return (
    <div className='login'>
        <Link to={"/"}>
        <img className="login-logo" src="https://pngimg.com/uploads/amazon/amazon_PNG7.png" alt='this is amazon logo'></img>
        </Link>
     
        <div className="login-container">
            <h1 >Sign-in</h1>

            <form action="">
                <h5>E-mail</h5>
                <input type="text" value={email} onChange
                ={e => setEmail(e.target.value)}/>


                <h5>Password</h5>
                <input type="password" value={password} onChange
                ={e => setPassword (e.target.value)}/>

                <button type='submit' onClick={signIn} className='login-signInButton'>Sign in</button>
            </form>
            <p>
                By Signing-in you agree to the <strong>AMAZON FAKE CLONE </strong>
                condition of use & sale. Please see our privacy 
                notice, our cookies Notice and our interest-base
                ads notice.
            </p>
            <button onClick={register} className='login-registerButton'>Create your Amazon Account</button>
        </div>
     </div>
     
  )
}
export default Login

