import React from 'react'

import styled from 'styled-components';
import data  from "../data"
import Product from './Product';

const Container = styled.div`
margin-top:2rem;
padding:20px;
display:flex;
flex-wrap:wrap;
justify-content:space-between;

`

const Title = styled.h4`
    font-size:40px;
`

const Products = () => {
  console.warn(data.popularProducts)
  return (
    <div>
     
    <Container>
      
        {data.popularProducts.map((item,index) => (
            <Product item={item} img={item.img}  title={item.title} price={item.price} key={index}/>
        ))}
    </Container>
    </div>
  )
}

export default Products