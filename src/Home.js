import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
  return (
    <div className="home">
        <div className="home-container">
            <img className='home-image' src="https://m.media-amazon.com/images/I/61BvxKSpy3L._SX3000_.jpg" alt="" />
        
        <div className="home-row">
           <Product 
           id ="55255541"
           title='Best of Enimies - Lithonia Lighting MNSL L23 1LL 120V 40K 
           80CRI M6 White LED Strip Light, 120V, 2-Foot, 1-Light' 
           price={16.52} 
           image="https://m.media-amazon.com/images/I/A1viiZQoOTL._AC_UY218_.jpg"
           rating={2}
           />
           <Product
           id ="55255542"
           title='Book Club' 
           price={199.52} 
           image="https://m.media-amazon.com/images/I/91Dugw5TIDL._AC_UY218_.jpg"
           rating={5}
           />
        </div>
        <div className="home-row">
        <Product
           id ="55255541"
           title='Eating Our Way' 
           price={19.52} 
           image="https://m.media-amazon.com/images/I/71cLaOSoDEL._AC_UY218_.jpg"
           rating={5}
           />
        <Product
           id ="55255542"        
           title='Just add magic' 
           price={199.52} 
           image="https://m.media-amazon.com/images/I/916oBIv45uL._AC_UY218_.jpg"
           rating={5}
           />

        <Product
        id ="55255543"
           title='Book Club' 
           price={9.99} 
           image="https://m.media-amazon.com/images/I/91Dugw5TIDL._AC_UY218_.jpg"
           rating={5}
           />
        </div>
        <div className="home-row">
        <Product
        id ="55255544"
           title='Eating Our Way' 
           price={19.52} 
           image="https://m.media-amazon.com/images/I/71cLaOSoDEL._AC_UY218_.jpg"
           rating={5}
           />
       
        </div>
        <div className="home-row">

        <Product
        id ="55255545"
           title='Eating Our Way' 
           price={19.52} 
           image="https://m.media-amazon.com/images/I/71cLaOSoDEL._AC_UY218_.jpg"
           rating={5}
           />
        <Product
        id ="55255546"
           title='Just add magic' 
           price={199.52} 
           image="https://m.media-amazon.com/images/I/916oBIv45uL._AC_UY218_.jpg"
           rating={5}
           />

<Product
id ="55255547"
           title='Just add magic' 
           price={199.52} 
           image="https://m.media-amazon.com/images/I/916oBIv45uL._AC_UY218_.jpg"
           rating={5}
           />
        </div>
        </div>
    </div>
    )
}

export default Home