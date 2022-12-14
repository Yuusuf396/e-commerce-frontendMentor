import React, { useState, useRef } from 'react'
import '../css/nav.css'
import '../css/main.css'
import cart from  '../images/icon-cart.svg'
import avatar from '../images/image-avatar.png'
import logo from '../images/logo.svg'
import Cart from './Cart'
import harmburger from '../images/icon-menu.svg'
import close from '../images/icon-close.svg'
import {Hooks} from '../components/Hooks'

const links = [
  'Collections',
  'Men',
  'Women',
  'About',
  'Contact'
];


export const Nav = ({ cartProductQuantity, setCartProductQuantity }) => {
  const [openCart, setOpenCart] = useState(false);
  const [hamburger, setHamburger] = useState(false)
  const ref = useRef();
  
Hooks(ref,() => setHamburger(false));

  //   function oplen() {
       
  //     setOpenCart(openCart => !openCart);
  // }
  const handleHamburger = () => {
    setHamburger(!hamburger);
    console.log('object');
  };

  let check = hamburger ? ' active_tab' : '';

    const listItems = links.map(link =>
      <li className='nav_link'><a href='#r'> {link}</a></li>
    );
  return (
    <>
      <nav className='navbar'  ref={ref} >
        <div className='links'>
          <div className='hamburger' onClick={handleHamburger}>
            <img src={harmburger} alt='' />
          </div>
          <div className='logo'>
            <img  alt='' src={logo} />
          </div>
          <div className={`navlinks ${check}`}>
            <img className='close_btn' src={close} alt='' onClick={()=>setHamburger(!hamburger)} />
            <ul>{listItems}</ul>
          </div>
        </div>
        <div className='nav_img'>
          <img className='cart'   src={cart} alt=''  onClick={() => setOpenCart(true)} />
          {/* <svg class="cart" onClick={() => setOpenCart(true)} data-notification-count="5" width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero"></path></svg>  */}
          {cartProductQuantity > 0 && (
                <span className="cart-basket">{cartProductQuantity}</span>
              )}
   
          <img className='avatar' alt='' src={avatar} />
       </div>
      </nav>
      {
          openCart &&(
            <Cart
              setOpenCart={setOpenCart}
              cartProductQuantity={cartProductQuantity}
            setCartProductQuantity={setCartProductQuantity} />
            
          )
        }
    </>
    )
}

export default Nav