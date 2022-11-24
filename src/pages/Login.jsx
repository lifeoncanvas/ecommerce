import React from 'react'
import styled from 'styled-components';
import FormSuccess from '../components/FormSuccess';


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

const Tosignin = styled.h3`
 font-size:14px;
 width:100%;
`;

const  Signinpg = styled.span`
color:blue;

`

const Login = () => {
  return (
  //   <Container>
  //     <Wrapper>
  //       <Title>LOGIN AN ACCOUNT </Title>
  //       <Form>
  //         <Input placeholder="email"/>
  //         <Input placeholder="password"/>
  //       <Button>CREATE</Button>
  //       <ForgotPassword>Forgot password?</ForgotPassword>

  //       <Tosignin>Don't have an account?<Signinpg>Register</Signinpg></Tosignin>
  //       </Form>
       
  //     </Wrapper>
  //  </Container>
  <FormSuccess/>
  )
}

export default Login