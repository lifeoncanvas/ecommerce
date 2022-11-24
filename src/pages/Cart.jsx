import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
margin-top:6rem;
`

const Wrapper = styled.div`
padding:20px;
`
const Title = styled.h1`
font-weight:300;
// text-align:center;
`
const Top = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:20px;
`
const TopButton = styled.button`
padding:10px;
font-weight:600;
cursor:pointer;
border: ${(props) => props.type === "filled" && "none" }
background-color: ${(props) => props.type === "filled" ? "black" : "transperent" }
color: ${(props) => props.type === "filled" && "white" }
`

const TopTexts = styled.div``
const TopText = styled.span`
text-decoration:none;
cursor:pointer;
margin:0px 10px;
`
const Bottom = styled.div`
display:flex;
justify-content:space-between;
`
const Info = styled.div`
flex:3;
`
const Product = styled.div`


`
const ProductDetails = styled.div`


`

const Summery = styled.div`
flex:1;
`


const Cart = () => {


  return (
    <Container>
       <Wrapper>
         <Title>YOUR BAG</Title>
         <Top>
            <TopButton>Continue Shopping</TopButton>
            <TopTexts>
            <TopText>Shopping bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>

            </TopTexts>
            <TopButton type="filled">Checkout Now</TopButton>
         </Top>
         <Bottom>
            <Info>
                <Product>
                    {/* {cartItems.length === 0 && <div>No items are added in the cart</div>} */}
                    <ProductDetails></ProductDetails>
                    <ProductDetails></ProductDetails>
                </Product>       
            </Info>
            <Summery>summery</Summery>
         </Bottom>
       </Wrapper>
    </Container>
  )
}

export default Cart