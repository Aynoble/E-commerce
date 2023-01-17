import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";
import { slideContent } from "./data";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 100vh;
  min-width: 100%;
  position: relative;
  align-items: center;
  display: flex;
  overflow-x: hidden;
  ${mobile({ display: "none" })};
`;
const Arrow = styled.div`
  flex: 1;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  align-items: center;
  position: absolute;
  display: flex;
  justify-content: center;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  z-index: 2;
  background-color: #fff;
  opacity: 0.5;
`;

const Wrapper = styled.div`
  display: flex;
  transform: translateX(-${(props) => props.SlideIndex}00%);
  transition: all 1.5s ease;
  min-width: 100%;
`;

const Slide = styled.div`
  align-items: center;
  min-width: 100%;
  background-color: #${(props) => props.bg};
  height: 100vh;
  display: flex;
`;
const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  height: 100%;
  justity-content: center;
  margin-left: 50px;
  margin-rigth: 50px;
`;
const Image = styled.img`
  object-fit: contain;
  height: 80%;
  margin-right: auto;
  // transform: scale(1.25);
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 50px;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  width: 60%;
`;

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "right") {
      setIndex((index) => {
        if (index === 0) {
          return 1;
        } else if (index === 1) {
          return 2;
        } else if (index === 2) {
          return 0;
        } else {
        }
      });
    } else if (direction === "left") {
      setIndex((index) => {
        if (index === 0) {
          return 2;
        } else if (index === 1) {
          return 0;
        } else if (index === 2) {
          return 1;
        }
      });
    } else {
    }
  };

  return (
    <Container bg="98D2EB">
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper SlideIndex={index}>
        {slideContent.map((content) => (
          <Slide key={content.id} bg={content.color}>
            <ImageContainer>
              <Image src={content.img} alt="SlideImage" />
            </ImageContainer>
            <TextContainer>
              <Title>{content.title}</Title>
              <Desc>{content.desc}</Desc>
              <Button>{content.button}</Button>
            </TextContainer>
          </Slide>
        ))}
      </Wrapper>

      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
