import React from 'react'
import About from '../components/About'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <>
     
      <Slider/>  
      <Categories/>
      <About/>
      <Products/>
    
    </>
  )
}

export default Home