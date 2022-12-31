import React ,{useState} from 'react'
import {Data} from './components/Data'
import './css/main.css'
 

import add from './images/icon-plus.svg'
import minus from './images/icon-minus.svg'
import arrowRight from './images/icon-next.svg'
import arrowLeft from './images/icon-previous.svg'
import close from './images/icon-close.svg'
 



// import Cart from './components/Cart'
 
 
export const Main = ({
  setCartProductQuantity,
 }) => {
  
  // const [image, setImage] =useState(0)
  const [count, setCount] = useState(0)
  const [lightbox, setLightbox] = useState(false)
  const[main,setMain]=useState(0)
  
 
  const handleAddToCart = () => {
    setCartProductQuantity (count);
    setCount(0);
  };
  const addCountHandler = () => {
    setCount(count + 1);
  };
  const changeWithSliderRight = () => {
    if ( main === 3) {
      return;  
    }
    setMain(main+1);
  };
  const changeWithSliderLeft = () => {
    if (main === 0) {
      return;  
    }
    setMain(main-1);
  };
  const reduceCountHandler = () => {
    if (count === 0) {
      return;  
    }
    setCount(count - 1);
  };
  function toggleActive1() {
    setMain(0)
  }
  function toggleActive2() {
    setMain(1)
  } function toggleActive3() {
    setMain(2)
  } function toggleActive4() { 
    setMain(3)
  }
  const lightboxFunc=()=>{
    setLightbox(true)
  }
  const cancelLightbox=()=>{
    setLightbox(false)
  }
 

 return (
    <div>
      <main  >
        <div  className={`image_div ${lightbox === true ?'lightbox_blur':''}`}>
              <div>
                  <img className='main_image' src={Data[main].mainImg} alt='product' onClick={lightboxFunc}/>
              </div>
              <div className='thumbnail_images'>
                  <img  className={`img_thumbnail ${main === 0 ? 'active':''}`}   alt='img_thumbnail' src={Data[0].thumbImg}  onClick={toggleActive1}  /> 
                  <img className={`img_thumbnail ${main ===1 ? 'active':''}`}  alt='img_thumbnail' src={Data[1].thumbImg} onClick={toggleActive2}   />
                  <img className={`img_thumbnail ${main ===2 ? 'active':''}`} alt='img_thumbnail' src={Data[2].thumbImg} onClick={toggleActive3}  />  
                  <img className={`img_thumbnail ${main === 3 ? 'active':''}`}   alt='img_thumbnail'src={Data[3].thumbImg}   onClick={toggleActive4}   /> 
                    
              </div>
        </div>
        { lightbox &&
          <div className='image_div lightbox'>
            <img className='lightbox_close' src={close} alt='' onClick={cancelLightbox} />
                
              <div className='lightBox_div'>
                <img className='arrow_left' alt='' src={arrowLeft} onClick={changeWithSliderLeft}/>
                <img className='main_image' src={Data[main].mainImg} alt='product' />
                <img className='arrow_right' alt='' src={arrowRight} onClick={changeWithSliderRight} />
              </div>
              <div className='thumbnail_images'>
                  <img className={`img_thumbnail ${main === 0 ? 'active':''}`}   alt='img_thumbnail' src={Data[0].thumbImg} onClick={toggleActive1}  /> 
                  <img className={`img_thumbnail ${main === 1 ? 'active':''}`}   alt='img_thumbnail' src={Data[1].thumbImg} onClick={toggleActive2}  />
                  <img className={`img_thumbnail ${main === 2 ? 'active':''}`}   alt='img_thumbnail' src={Data[2].thumbImg} onClick={toggleActive3}  />  
                  <img className={`img_thumbnail ${main === 3 ? 'active':''}`}   alt='img_thumbnail' src={Data[3].thumbImg} onClick={toggleActive4}  /> 
                  
              </div>
        </div> 
        }
         
       
        <div   className={`counter_div ${lightbox === true ?'lightbox_blur':''}`}>
            <p className='details'>SNEAKER COMPANY</p>
            <h2>Fall Limited Edition Sneakers</h2>
            <p className='paragraph'>
              These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
            </p>
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
 
