import React, { useRef } from 'react'
import '../css/main.css'
import thumbnail1 from '../images/image-product-1-thumbnail.jpg'
import clearIcon from '../images/icon-delete.svg'
import {Hooks} from '../components/Hooks'

const Cart = ({
  setOpenCart,
  cartProductQuantity,
  setCartProductQuantity,
})=> {
  const ref = useRef();
  Hooks(ref,() => setOpenCart(false));

 
  return (
   <>
      <div className='cart_open' ref={ref} >
          <div>
            <p className='cart_header' >Cart</p>  
           </div> 
        <div className='cart_box'>{
          cartProductQuantity === 0 ? (
            <p className='empty_cart_text'>Your cart Is empty</p>
            
          ):(
          <div> 
            <div className='cart_content'>
            <div className='cart_text'>
              <img className='image_cart_product' src={thumbnail1} alt='' />
              <div>
                  <p>Fall Limited Edition sneakers</p>
                  <p>$125.00 x {cartProductQuantity} <span className='calculated_amount'>${125 * cartProductQuantity}</span> </p>
              </div>
              <img className='delete_button' src={clearIcon} alt=''onClick={()=>setCartProductQuantity(0)}/>
            </div>
          </div>
          <button className='checkout_button'>Checkout</button>
        </div>
            
          )
        }
      </div>
    
      </div>
 </>
  )
}

export default Cart