import React,{useState} from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';


import Home from "./pages/Home";

import styled from 'styled-components'
import GlobalStyle from "./components/CreateGlobalStyles";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Product";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Form from "./pages/Form";
import Navbar from './components/Navbar';
import FormSignup from './components/FormSignup';
import FormSuccess from './components/FormSuccess';




const Container = styled.div`
   
`


function RoutesInfo() { 
  return (
    <BrowserRouter>
    <Navbar/>
   
    <Routes>
      
      {/* <Route path='/login' element={<FormSuccess/>}/>
      <Route path='/signup' element={<FormSignup/>}/> */}
      <Route path='/form' element={<Form/>}/>
      <Route path='/productList' element={<ProductList/>}/>
      <Route path='/products' element={<Product/>}/>
      <Route exact path='/' element={<Home/>}/>
    </Routes>  
  </BrowserRouter>
 
      
    
  )
}

export default RoutesInfo;
