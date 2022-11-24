import  styled  from 'styled-components'
import React from 'react'
import { Link } from 'react-router-dom'

const Container = styled.div`
 flex:1;
 margin:6px;
 height:70vh;
 position:relative;
`
const Image = styled.img`
width:100%;
height:100%;
object-fit:cover;
cursor:pointer;
`
const Info = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:start;
justify-content:start;


`
const Title = styled.h1`
    // color:white;
    padding-top:10px;
 padding-left:7rem;

    margin-bottom:20px;
    font-size:20px;
   
`
const Button = styled.button`
   border:none;
   padding:10px;
   background-color:white;
   color:gray;
   cursor:pointer;
   font-weight:600;
`

const CatLink = styled(Link)`

color:#000;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
      <CatLink to={`/products/${item.cat}`}>
      <Image src={item.img}/>
      <Info>
            <Title>{item.title}</Title>
            {/* <Button>SHOP NOW</Button> */}
      </Info>
      </CatLink>
    </Container>
  )
}

export default CategoryItem