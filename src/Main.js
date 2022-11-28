import React ,{useState} from 'react'
// import './css/main.css'
import mainImg1 from './images/image-product-1.jpg'
import mainImg2 from './images/image-product-2.jpg'
import mainImg3 from './images/image-product-3.jpg'
import mainImg4 from './images/image-product-4.jpg'

import thumbnail1 from './images/image-product-1-thumbnail.jpg'
import thumbnail2 from './images/image-product-2-thumbnail.jpg'
import thumbnail3 from './images/image-product-3-thumbnail.jpg'
import thumbnail4 from './images/image-product-4-thumbnail.jpg'

import add from './images/icon-plus.svg'
import minus from './images/icon-minus.svg'

import Cart from './components/Cart'
// const mystyle = {
//   color: " hsl(26, 100%, 55%)",
//   // color: "hsl(25, 100%, 94%)",
//   opacity: "70%",  
//   pointer_events : "none"
// };
 
export const Main = ({
  setCartProductQuantity,
 }) => {
  
  const [btn, setBtn] =useState(false)
  const [count, setCount] = useState(0)
  const [img, setImage] = useState(mainImg1)

  const handleAddToCart = () => {
    setCartProductQuantity (count);
    setCount(0);
  };
  const addCountHandler = () => {
    setCount(count + 1);
  };
  const reduceCountHandler = () => {
    if (count === 0) {
      return;  
    }
    setCount(count - 1);
  };
  function toggleActive1() {
    if(btn)
    setBtn(btn=>!btn)
    setImage(mainImg1)
  }
  function toggleActive2() {
    if(btn)
    setBtn(btn=>!btn)
    setImage(mainImg2)
  } function toggleActive3() {
    if(btn)
    setBtn(btn=>!btn)
    setImage(mainImg3)
  } function toggleActive4() {
    if(btn)
    setBtn(btn=>!btn)
    setImage(mainImg4)
  }


  let check = btn ? ' active' : ' ';
  return (
    <div>
      <main>
        <div className='image_div'>
              <div>
                    <img className='main_image' src={img} alt='product' />
              </div>
              <div className='thumbnail_images'>
                <img className={`img_thumbnail ${check}`} alt='img_thumbnail' src={thumbnail1} onClick={toggleActive1}  /> 
                <img className={`img_thumbnail ${check}`}  alt='img_thumbnail' src={thumbnail2} onClick={toggleActive2} />
                    <img className='img_thumbnail' alt='img_thumbnail' src={thumbnail3} onClick={toggleActive3}  />
                    <img className='img_thumbnail' alt='img_thumbnail' src={thumbnail4} onClick={toggleActive4}  /> 
              </div>
        </div>
        <div className='counter_div'>
          <p className='details'>SNEAKER COMPANY</p>
          <h2>Fall Limited Edition Sneakers</h2>
          <p className='paragraph'>
            These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
          <div className='price_div'>
            <p className='price'>$125.00 <span>50%</span></p>
            <p className='price_crossed'>$250.00</p>
          </div>
          <div className='cart_container'>
              <div className='add_minus'>
                <span>
                  <img className='minus' src={minus} alt='minus' onClick={reduceCountHandler}/>
                  {count}
                  <img className='add' src={add} alt='add' onClick={addCountHandler} />

                </span>
            </div>
            <div className='add_to_cart' onClick={handleAddToCart}>
              <svg className="cart_white" width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#fff" fillRule="nonzero"></path></svg> 
             <p>Add To Cart</p>
            </div>
          </div>
        </div>
        
        </main>
        </div>
  )
}

export default Main
 
