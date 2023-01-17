import React from "react";
import styled from "styled-components";
import CategoryItems from "./CategoryItems";
import { Categoriess } from "./data";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ flexDirection: "column", padding: "0px" })};
`;

const Categories = () => {
  return (
    <Container>
      {Categoriess.map((category) => (
        <CategoryItems key={category.id} item={category} />
      ))}
    </Container>
  );
};

export default Categories;
