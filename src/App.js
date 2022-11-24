import React,{useState} from 'react'
import GlobalStyle from './components/CreateGlobalStyles';
import Routes from './RoutesInfo.js';
import {popularProducts} from './data';


const App = () => {
  // const {productItems} = popularProducts;
  // const[cartItems,setCartItems] = useState([]);
  return (
    <div>
      <GlobalStyle/>
      <Routes />
    </div>
  )
}

export default App