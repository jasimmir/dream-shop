import React from 'react';
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
  const [{ basket } , dispatch] =useStateValue();
  return (

    <div className='checkout'>
        
        <div className="checkout-left">
            <img  className='checkout-ad' src="https://fourthavenue.org/wp-content/uploads/2017/09/MINT-BANNER-1200-px-x-200px.jpg" alt="" />

            <div className="checkout-title">
                <h1>Your Shopping Basket </h1>
                {basket.map(item =>(
                  <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  />
                ))}
              
              </div>
        </div>
        <div className="checkout-right">
            <Subtotal/>
            {/* <h2>sub total going here</h2> */}
        </div>
    </div>
  )
}

export default Checkout