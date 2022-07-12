// import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Home from './Home';
import Hasimtest from './Hasimtest';
import Checkout from './Checkout'
import {
        BrowserRouter as Router, 
        Route,
        Routes,
         }
from "react-router-dom";
import {BrowserRouter} from 'react-router-dom'
import Login from './Login';

// BEM approach for naming convention
function App() {
  return (
    // <Router>
      <div className="App">
        
        <BrowserRouter>
        
          <Routes>
            <Route exact path='/' element={<div><Header/><Home/></div> }/>
            <Route exact path='/home' element={<div><Header/><Home/></div> }/>
            <Route exact path='/checkout' element={<div><Header/><Checkout/></div> }/>
            <Route exact path='/login' element={<div><Login/></div> }/>

            {/* the below line of code is for testing purpose */}
            <Route exact path='/test' element={<div><Hasimtest/></div> }/>
          </Routes>
        </BrowserRouter>
       
    </div>
    // </Router>
      );
}

export default App;
