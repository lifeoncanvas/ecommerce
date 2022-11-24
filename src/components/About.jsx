import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
 height:100vh;
 display:flex;
 flex-direction:column;
 width:100vw;
 justify-content:center;
 align-items:center;

`;

const Title = styled.h1`
    font-size:60px;
`;
const Desc = styled.p`
margin-top:6rem;
width:70rem;
font-size:20px;

font-weight:500;
text-align:center;
letter-spacing:2px;
line-height:2rem;
`;


const About = () => {
  return (
        <Container id="about">
            <Title>About</Title>
            <Desc>
            My first taste of boba was in the 90s, just like much of America. Next to the Asian grocery store we visited every weekend was a tiny shop that seemed to pop up overnight. The signs were in a mix of English and Chinese and the nice shop owners explained to everyone curious that boba nai cha (bubble milk tea) was the most popular drink all over Taiwan.
            </Desc>
        </Container>
  )
}

export default About