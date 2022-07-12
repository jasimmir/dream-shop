import React from 'react';
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider';

function Header() {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className='header'>
        <Link to={"/"}>
        <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" className='header-logo' alt='this is amazon logo'></img>
        </Link>
        
        <div className='header-search'>
            <input type="text" className='header-searchInput' />
            <SearchIcon className='header-searchIcon'/>
        </div>
        <div className="header-nav">
            <Link to={"/login"}>
            <div className="header-option">
                <span className="header-optionLineOne">
                  Hello, User
                </span>
                <span className="header-optionLineTwo">
                  Sign In
                </span>
            </div>
            </Link>
            <div className="header-option">
            <span className="header-optionLineOne">
                  return
                </span>
                <span className="header-optionLineTwo">
                  & Orders 
                </span>
            </div>
            <div className="header-option">
            <span className="header-optionLineOne">
                  Your
                </span>
                <span className="header-optionLineTwo">
                  Prime
                </span>
            </div>
            <Link to={"/checkout"}>
                <div className="header-optionBasket">
                   <ShoppingBasketIcon/>
                   <span className="header-optionBasket header-optionLineTwo header-optionBasketCount" > {basket?.length} </span>
                </div>
            </Link>
            
            
        </div>
    </div>
  )
}

export default Header