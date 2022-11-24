import React from 'react'

import styled from 'styled-components'
import { Badge } from "@material-ui/core";
import { Search,ShoppingCartOutlined,MenuIcon } from "@material-ui/icons";
import DragHandleIcon from '@material-ui/icons/DragHandle';
import logo from '../images/logo5.svg'
import { HashLink as Link } from 'react-router-hash-link';


const Container = styled.div`
background-color:#fff;
    height:75px;
    position: fixed;
    z-index:100;
    top: 0;
    right: 0;
    left: 0;
    
    
    
`

const Wrapper = styled.div`
padding:10px 20px ;
display:flex;
justify-content:space-between;
align-items:center;

`

const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:start;
`

const LinkItems = styled(Link)`
text-decoration:none;
font-size:14px;
cursor:pointer;
margin-left:25px;
color:#000;
`

const Language = styled.div`
    font-size:14px;
    cursor:pointer;
`

const SearchContainer = styled.div`
    border:1px solid lightgray;
    display:flex;
    align-items:center;
    margin-left:25px;
    padding:5px;
`

const Input = styled.input`
border:none;
`

const Center = styled.div`
    flex:1;
    text-align:center;
`

const Logo = styled.img`
    height:60px;
    
   
`
const Right = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
`

const MenuItem = styled.div`
   font-size:14px;
   cursor:pointer;
   margin-left:25px;

`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
           
           
            <Left>
                <LinkItems to="/">HOME</LinkItems>
                <LinkItems to='#about'> ABOUT </LinkItems>
                <LinkItems to='/productList'> PRODUCTS </LinkItems>
                
            </Left>
            <Center>
                <Logo src={logo}/></Center>
            <Right>
            <LinkItems to="/signup">REGISTER</LinkItems>
            <LinkItems to="/login">LOGIN</LinkItems>
             
                {/* <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined/>
                    </Badge>
                </MenuItem> */}
                {/* <MenuItem>
                    <DragHandleIcon/>
                </MenuItem> */}
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar