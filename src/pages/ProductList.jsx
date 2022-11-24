import React, { useState } from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Cart from './Cart';
// import{CartProvider} from 'react-use-cart'
// import { useLocation } from 'react-router';

const Container = styled.div`
margin-top:7rem;
`;
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


const ProductList = ({productItems}) => {
    // const location = useLocation();
    // const cat = location.pathname.split("/")[2];
    // const [filter, setFilters] = useState({});
    // const [sort, setSort] = useState("newest");

    // const handleFilters = (e) => {
    //     const value = e.target.value;
    //     setFilters({
    //         ...filter,
    //        [e.target.name]:value,
    //     });
    // };

    // console.log(filter)
  return (
    
    <Container>
        
        
        {/* <FilterContainer>
            <Filter>
                <FilterText>Filter Products</FilterText>
                <Select name="flavour" >
                    <Option disable >Color</Option>
                    <Option>Chocolate</Option>
                    <Option>Strawberry</Option>
                    <Option>Vinella</Option>
                </Select>
             
            </Filter>
            <Filter>
            <FilterText>Sort Products</FilterText>
            <Select onChange={e=>setSort(e.target.value)}>
                    <Option value="newest">Newest</Option>
                    <Option value="asc">Price(asc)</Option>
                    <Option value="desc">Price(desc)</Option>
                </Select>
            </Filter>
        </FilterContainer> */}
        {/* <CartProvider> */}
        <Products />
        
        {/* </CartProvider> */}
    </Container>
  )
}

export default ProductList