import { FavoriteOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import {useCart} from "react-use-cart";


import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Info = styled.div`
opacity:0;
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
background: linear-gradient(90deg, rgba(233,165,140,0.5) 0%, rgba(233,194,180,0.5) 35%, rgba(247,242,239,0.5) 100%);
 
z-index:3;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
transition:all 0.5s ease;
cursor:pointor;
`

const Icons = styled.div`
display:flex;
align-items:center;
justify-content:center;
`

const Container = styled.div`

flex:1;
margin:5px;
min-width:280px;
height:350px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
background-color:#f5fbfd;
position:relative;


    &:hover ${Info}{
        opacity:5;
    }
`



const Circle = styled.div`
   width:200px;
   height:200px;
   border-radius:50%;
   background-color:white;
   position:absolute;

`
const Image = styled.img`
height:75%;
z-index:2;
`

const Icon = styled.div`
width:40px;
height:40px;
border-radius:50%;
background-color:white;
display:flex;
align-items:center;
justify-content:center;
margin:10px;
cursor:pointer;
transition:all 0.5s ease;

    &:hover{
        background-color:#e9f5f5;
        transform:scale(1.1);
        
    }

`
const Title = styled.h1`
font-family: 'Libre Baskerville', serif;
font-size:2rem;
text-transform:capatalize;
font-wight:100;

`
const Price = styled.h1`
`
const Button = styled.button`

 padding: 1rem 2rem;
 background-color:#fff;
 border-none;
 outline:none;


`

const Product = (props) => {
    const { addItem } = useCart();

  return (
    
    <Container>
       
        <Circle/>
        
        <Image src={props.img}/>
       
        <Info>
        {/* <Icons>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <FavoriteOutlined/>
            </Icon>
            
        </Icons> */}
           
            <Title>{props.title}</Title>
            <Price>{props.price}</Price>
            <Button onClick = {() => addItem(props.item)}>add to cart</Button>
            
          
            
            
        </Info>
       
    </Container>
  
  )
}

export default Product