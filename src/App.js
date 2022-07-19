// import logo from './logo.svg';
import React , { useEffect } from 'react';
import './App.css';
import Header from './Header'
import Home from './Home';
import Hasimtest from './Hasimtest';
import Checkout from './Checkout';
import Payment from './Payment';
import {
        BrowserRouter as Router, 
        Route,
        Routes,
         }
from "react-router-dom";
import {BrowserRouter} from 'react-router-dom'
import Login from './Login';
import { auth} from './firebase';
import { useStateValue } from './StateProvider';
import {loadStripe} from '@stripe/stripe-js';
import {Elements, elements} from '@stripe/react-stripe-js';

// it will visible but no need of worry becauce it is public key
const promise = loadStripe(
  'pk_test_51LNChbGbxmYiWfbXOlXGmr9X2qwuDNVNB37CWz46UF94rFRCaOxe4KE1tbqqGml8ECU1yCb37ULi1LVhkbKAa3Q000oXMS9anQ'
);


// BEM approach for naming convention
function App() {

 const [{}, dispatch] = useStateValue();

 useEffect(()=>{
    // will only run once when the app component loads...

    auth.onAuthStateChanged(authUser => {
      console.log("THE USER IS -> " , authUser);
      if (authUser){
        // the user just logged in / the user was logged in 
      dispatch({
        type: 'SET_USER',
        user: authUser
      })
      }else {
        // the user is logged out 
         dispatch({
          type: 'SET_USER',
          user: null
         })
      }
    })
  },[])
  return (
    // <Router>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<div><Header/><Home/></div> }/>
            <Route exact path='/home' element={<div><Header/><Home/></div> }/>
            <Route exact path='/checkout' element={<div><Header/><Checkout/></div> }/>
            <Route exact path='/login' element={<div><Login/></div> }/>
            <Route exact path='/payment' element={
              <div>
                <Header/>
                <Elements stripe={promise}><Payment/></Elements>
              </div> }/>

            {/* the below line of code is for testing purpose */}
            <Route exact path='/test' element={<div><Hasimtest/></div> }/>
          </Routes>
        </BrowserRouter>
    </div>
      );
      //</Router>
}
export default App;