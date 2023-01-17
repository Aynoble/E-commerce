import React from "react";
import styled from "styled-components";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  border-bottom: 0.5px solid #e1f2fe;
  ${mobile({ height: "50px" })};
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({
    paddingTop: "2px",
    paddingBottom: "12px",
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
  })};
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const LanguageWrapper = styled.div`
  flex: 0.1;
  display: flex;
  align-items: center;
  ${mobile({ display: "none" })};
`;
const LanguageText = styled.p``;
const LanguageArrow = styled.div``;

const InputContainer = styled.div`
  margin-left: 5px;
  display: flex;
  border: 1px solid #e1f2fe;
  flex: 0.9;
  align-items: center;
  padding: 8px 4px;
  width: 100%;
  justify-content: space-between;
`;
const Input = styled.input`
  border: none;
  outline-width: 0;
  ${mobile({ width: "50px" })};
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

const Logo = styled.h1`
  ${mobile({ fontSize: "24px", flex: "2" })};
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  ${mobile({ justifyContent: "center" })};
`;

const RightWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Button = styled.button`
  border: 1px solid #e1f2fe;
  padding: 10px 10px;
  cursor: pointer;
  margin-right: 5px;
  ${mobile({ padding: "5px 2px", fontSize: "12px" })};
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <LanguageWrapper>
            <LanguageText>EN</LanguageText>
            <LanguageArrow>
              <ArrowDropDownIcon />
            </LanguageArrow>
          </LanguageWrapper>
          <InputContainer>
            <Input placeholder="Search" />

            <SearchIcon
              style={{
                justifyContent: "flex-end !important",
                fontSize: "16px",
              }}
            />
          </InputContainer>
        </Left>
        <Center>
          <Logo>PAULDIYA</Logo>
        </Center>
        <Right>
          <RightWrapper>
            <Button>REGISTER</Button>
            <Button>SIGN IN</Button>
            <IconButton aria-label="cart">
              <ShoppingCartIcon style={{ color: "#98D2EB" }} />
            </IconButton>
          </RightWrapper>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
