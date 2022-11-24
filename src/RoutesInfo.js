import React,{useState} from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';


import Home from "./pages/Home";

import styled from 'styled-components'
import GlobalStyle from "./components/CreateGlobalStyles";
import ProductList from "./pages/ProductList";
import Product from "./pages/SingleProduct";
import Register from "./pages/SingleProduct";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SingleProduct from "./pages/SingleProduct";
import Form from "./pages/Form";
import Navbar from './components/Navbar';
import FormSignup from './components/FormSignup';
import FormSuccess from './components/FormSuccess';

import Footer from './components/Footer';
import Cart from './pages/Cart';

import Products from './components/Products';
import Done from './pages/Done';




const Container = styled.div`
   
`


const RoutesInfo = () => { 
  return (
    <BrowserRouter>
    <Navbar/>
   
    <Routes>
      
      <Route path='/login' element={<FormSuccess/>}/>
      <Route path='/signup' element={<FormSignup/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/products/:category' element={<Products/>}/>
      <Route path='/products' element={<Products/>}/>
      {/* <Route path='/form' element={<Form/>}/> */}
      <Route path='/login' element={<FormSuccess/>}/>
      <Route path='/login' element={<FormSuccess/>}/>
     
     
      <Route path='/done' element={ <Done/>}/>
      <Route path='/sp' element={ <SingleProduct/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/product/:id' element={<Product/>}/>
      <Route exact path='/' element={<Home/>}/>
    </Routes>  

    <Footer/>
  </BrowserRouter>
 
      
    
  )
}

export default RoutesInfo;
