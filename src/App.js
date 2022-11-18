// import Footer from './components/Footer';
import './css/style.css'
import { useState } from 'react';
// import './App.css';
import Nav from './components/Nav';
import Main from './Main';

function App() {
  const [productQuantity, setProductQuantity] = useState(0);
  const [cartProductQuantity, setCartProductQuantity] = useState(0);
  return (
    <div className="App">
      <Nav cartProductQuantity={cartProductQuantity}
        setCartProductQuantity={setCartProductQuantity } />
      {/* <Footer/> */}
      <Main  productQuantity={productQuantity}
        setProductQuantity={setProductQuantity}
        setCartProductQuantity={setCartProductQuantity}/>
    </div>
  );
}

export default App;
