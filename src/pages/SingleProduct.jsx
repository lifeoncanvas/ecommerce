import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from "styled-components"
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import img from '../images/p1.png'
import{useLocation} from "react-router-dom"

const Container = styled.div``;
const Wrapper = styled.div`
 padding:50px;
 display:flex;
`;
const ImgContainer = styled.div`
background-color:#f5fcfd;
flex:1;
position:relative;
`;
// const Image = styled.img`


// `;



const Image = styled.img`
width:100%;
 height:90vh;
 object-fit:cover;

`

const InfoContainer = styled.div`
flex:1;
padding:0px 50px;
`;
const Title = styled.h1`
 font-weight:100;
 font-size:4rem;

`;
const Desc = styled.p`
 margin:20px 0px;
`;
const Price = styled.span`
  font-weight:100;
  font-size:40px;

`;

// const FilterContainer = styled.div`
// width:50%;
// margin:30px 0px;
// display:flex;
// justify-content:space-between;
// `
// const Filter = styled.div`
// display:flex;
// align-items:center;
// `
// const FilterTitle = styled.span`
// font-size:20px;
// font-weight:200;
// `
// const FilterColor = styled.div`
//  width:20px;
//  height:20px;
//  border-radius:50%;
//  background-color:${props => props.color};
//  margin:0px 5px;
//  cursor:pointer;
// `


const AddContainer = styled.div`
margin-top:4rem;
width:50%;
display:flex;
// flex-direction:column;
align-items:start;
justify-content:space-between;


`
const AmountContainer = styled.div`

display:flex;
align-items:center;
justify-content:space-between;
font-weight:700;
// margin-top:2rem;
`
const Amount = styled.span`
width:30px;
height:30px;
border-radius:10px;
border:1px solid teal;
display:flex;
align-items:center;
justify-content:center;
margin:0px 5px;

`
const Button = styled.button`
// margin-top:1rem;
padding:15px;
border:1px solid #000;
background-color:#f5fcfd;
cursor:pointer;
font-weight:500;

  &:hover{
    background-color:#f8f4f4;
  }

`
const Ingredients=styled.div``




const SingleProduct = ({item}) => {
  return (
    <Container>
      
        <Wrapper>
            <ImgContainer>
            
            <Image src={img}/>
            </ImgContainer>
            <InfoContainer>
               <Title>{item.title}</Title>
               <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea fuga unde laboriosam eligendi repellendus libero at debitis corporis sapiente ducimus? Recusandae cum illum perferendis dolor, nobis repellendus omnis accusantium atque consequatur distinctio doloribus similique consequuntur ullam, neque quo, vitae consectetur nulla ipsum expedita enim explicabo. Dolorum dolores totam quasi vel.</Desc>
               <Price>$ 20</Price>
               {/* <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color="black"/>
                    <FilterColor color="darkblue"/>
                    <FilterColor color="gray"/>
                    <FilterColor/>
                </Filter>
               

                <Filter></Filter>
               </FilterContainer> */}
               <AddContainer>
                  <AmountContainer>
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>
                  </AmountContainer>
                  <Button>Add to cart</Button>
               </AddContainer>

               <Ingredients>
                
               </Ingredients>

            </InfoContainer>
        </Wrapper>
       
    </Container>
  )
}

export default SingleProduct