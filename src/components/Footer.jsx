import React from 'react'
import styled from 'styled-components';
import { Facebook,Instagram,Twitter} from '@material-ui/icons';
import logo from '../images/logo4.svg'

const Container = styled.div`
display:flex;
`
const Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
`
const Logo = styled.img`
   height:40%;
   width:40%;
  
`
const  Desc = styled.p`
margin:20px 0px;
`;
const  SocialContainer = styled.div`
display:flex;
`;
const  SocialIcon = styled.div`
    width:40px;
    height:40px;
    border-radius:50px;
    color:white;
    background-color:#${props => props.color};
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:20px;
    `; 

const Center = styled.div`
flex:1.5PX;
padding:20px;
margin-left:20px;

`;

const Title = styled.h3`
     margin-bottom:30px;
`;

const List = styled.ul`
   margin:0;
   padding:0;
   list-style:none;
   display:flex;
   flex-wrap:wrap;
`;

const ListItem = styled.li`
  width:50%;
  margin-bottom:10px;
`;

const Right = styled.div`
flex:1;
padding:20px;
`;

const ContactItem = styled.div`
margin-bottom:20px;
display:flex;
align-items:center;
`


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo src={logo}></Logo>
            <Desc>
            Nowadays, it seems like you can go anywhere – even small town America – and see at least one shop that sells boba. But, what the heck is boba, where did it come from, and how do you drink it? As a long time boba addict, let me take you into the wonderfully sweet and chewy world of boba!  
            </Desc>
           
        </Left>
        <Center>
            <Title>USEFULL LINKS</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Carts</ListItem>
                <ListItem>Products</ListItem>
                <ListItem>About</ListItem>
                <ListItem>Register</ListItem>
                <ListItem>Register</ListItem>
                <ListItem>Products</ListItem>
                <ListItem>About</ListItem>
                <ListItem>Register</ListItem>
                <ListItem>Register</ListItem>
            </List>
        </Center>
        <Right>
            <Title>CONTACT US </Title>
            <ContactItem></ContactItem>
            <ContactItem>+6 78 756 65</ContactItem>
            <ContactItem>11233@gmail.com</ContactItem>
            <SocialContainer>
                <SocialIcon color="385999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
            </SocialContainer>
        </Right>
    </Container>
  )
}

export default Footer