import React, { useState } from 'react';
import './Payment.css';
import { useStateValue} from './StateProvider';
import {Link} from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import { CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState('');
    // error message 
    const [error , setError] = useState(null);
    const [disabled , setDisabled] = useState(true);


    const handleSubmit =e => {
        // do all the fancy strips stuff 
    }
    const handleChange = event => {
        // listen for changesin the CardElement
        // and display any error as the customer types thier card details
        setDisabled (event.empty);
        setError(event.error ? event.error.message : '');

    }
    return (
    <div className='payment'>
        <div className="payment-container">
            <h1>
                Checkout(
                    <Link to='./Checkout'>{basket?.length} items</Link>
                )
            </h1>
            {/* Payment section - Delivery Address */}
            <div className="payment-section">
                <div className="payment-title">
                    <h3>Delivery Address: </h3>
                </div>
                <div className="payment-address">
                    
                    <p>{user?.email}</p>
                    <p>Park Line React Lahore</p>
                    <p>Punjab, Pakistan </p>
                </div>
            </div>
            {/* Payment section - review item  */}

            <div className="payment-section">
                <div className="payment-title">
                   <h3>Review item & Delivery </h3>
                </div>
                <div className='payment-items'>
                    {
                        basket.map(item =>(
                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                        ))
                    }
                </div>
            </div>
    
            {/* Payment section - Payment method */}
        
            <div className="payment-section">
                <div className="payment-title">
                    <h3>Payment method</h3>
                </div>
                <div className='payment-detail'>
                    {/* Strip magic will go here */}

                    <from onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                    
                            <div className="payment-priceContainer">
                                <CurrencyFormat
                                    renderText={(value) =>(
                                    <>
                                       <h3>Order Total: {value}</h3>
                                    </>
                                     )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket) }
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                    />

                                    <button disabled={processing || disabled || succeeded}>
                                        <span>
                                            {processing ? <p>Processing</p> : 'Buy Now'}                                        
                                        </span>    
                                    </button>
                            </div>
                    </from>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment