import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
 
 height:100vh;
background-repeat:no-repeat;
  background: url("https://i.pinimg.com/564x/76/33/86/7633865de3cb7a575bd2615616e39e3b.jpg") ;
 background-repeat:no-repeat;
 background-size:cover;
 display:flex;
align-items:center;
justify-content:center;

 `
const Wrapper = styled.div`
    padding:20px;
    width:40%;
    background-color:#fff;
`
const Title = styled.h1`
    font-size:24px;
    font-weight:300;
`
const Form = styled.form`
    display:flex;
    flex-wrap:wrap;
`
const Input = styled.input`
flex:1;
min-width:40%;
margin:20px 10px 0px 0px;
padding:10px;
`
const ForgotPassword = styled.a`
font-size:14px;
margin:20px 0px;

`

const Button = styled.button`
width:98%;
height:40px;
border:none;
margin-top:9px;
paddiing:15px 20px;
cursor:pointer;
`

const Signup = () => {
  return (
    <Container>
      
      <Wrapper>
        <Title>CREATE AN ACCOUNT </Title>
        <Form>
          <Input placeholder="name"/>
          <Input placeholder="last name"/>
          <Input placeholder="username"/>
          <Input placeholder="email"/>
          <Input placeholder="password"/>
          <Input placeholder="confirm password"/>
        
          <Button>CREATE</Button>
        <ForgotPassword>Forgot password?</ForgotPassword>
        </Form>
       
      </Wrapper>
   </Container>
  )
}

export default Signup