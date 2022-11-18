import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Products from '../components/Products';

const Container = styled.div``;
const Title = styled.h1`
margin:20px;

`;
const FilterContainer = styled.div`
display:flex;
justify-content:space-between;
`;
const Filter = styled.div`
margin:20px;
`;

const FilterText = styled.span`
font-size:20px;
font-weight:600;
margin-right:20px;
`

const Select = styled.select`
 padding:10px;
 margin-right:20px;
`
const Option = styled.option`
 
`


const ProductList = () => {
  return (
    
    <Container>
        
        <Title>Chocolate</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products</FilterText>
                <Select>
                    <Option disable selected>Color</Option>
                    <Option>Chocolate</Option>
                    <Option>Chocolate</Option>
                    <Option>Chocolate</Option>
                </Select>
             
            </Filter>
            <Filter>
            <FilterText>Sort Products</FilterText>
            <Select>
                    <Option  selected>Newest</Option>
                    <Option>Price(asc)</Option>
                    <Option>Price(desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Footer/>
    </Container>
  )
}

export default ProductList