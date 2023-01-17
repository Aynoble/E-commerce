import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  background-color: purple;
  display: flex;
  justify-content: center;
  ${mobile({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  })};
`;
const Text = styled.p`
  color: #fff;
  font-weight: 500;
  padding: 8px 0px;
  ${mobile({ fontSize: "12px" })};
`;

const Announcement = () => {
  return (
    <Container>
      <Text>Super Deal! Free Shipping on Orders over $50</Text>
    </Container>
  );
};

export default Announcement;
