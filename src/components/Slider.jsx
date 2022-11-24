import React, { useState } from 'react'

import styled from "styled-components"
import { ArrowLeftOutlined,ArrowRightOutlined } from "@material-ui/icons";

import img from '../images/hero.jpg'
import {sliderItems} from "../data"
import {Link} from "react-router-dom"

const Container = styled.div`

    width:100%;
    height:100vh;
    display:flex;
    // background-color:coral;
    position:relative;
    overflow:hidden;
`

const Arrow = styled.div`
    width:50px;
    height:50px;
    background-color:#fff7f7;
    border-radius:50%;
    display:flex;
    align-items :center;
    justify-content:center;
    position:absolute;
    top:0;
    bottom:0;
    left: ${props=> props.direction  === "left" && "10px"};
    right: ${props=> props.direction  === "right" && "10px"};
    margin:auto;
    cursor:pointer;
    z-index:2;

`

const Wrapper = styled.div`
  height:100%;
  display:flex;
  transition:all 1.5s ease;
  transform:translateX(${(props)=>props.slideIndex * -100}vw);
`

const Slide = styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
background-color: #${props=> props.bg}
`

const ImageContainer = styled.div`
height:100%;
 margin-top:10rem;
flex:1;
`

const Image = styled.img`

 height:80%;
 margin:20px;
`
const InfoContainer = styled.div`
flex:1;
padding:50px;
`
const Title = styled.h1`
 font-size:70px;
`
const Desc = styled.p`
margin:50px 0px;
font-size:20px;
font-weight:500;
letter-spacing:2px;
`

const Button = styled(Link)`
padding:10px;
text-decoration:none;
color:#000;
border:1px solid #000;
font-size:15px;
background-color:transparent;
cursor:pointor;
`


const Slider = () => {
  const [slideIndex,setSlideIndex] = useState(0)
  const handleClick = (direction) => {
      if(direction === "left"){
        setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2);
      } else {
        setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0);
      }
  }

  return (
    <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <ArrowLeftOutlined  />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {sliderItems.map(item=>(
            <Slide bg={item.bg} key={item.id}>
            <ImageContainer>
                <Image src={item.img}/>
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>

              <Button to="/products">Order now</Button>
            </InfoContainer>
            </Slide>
              ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
          <ArrowRightOutlined  />
        </Arrow>
    </Container>
  )
}

export default Slider