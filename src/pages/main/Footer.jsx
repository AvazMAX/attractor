import { styled } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <Container>
      <h1>GitHub</h1>
    </Container>
  );
};
const Container = styled("footer")`
  background-color: #000000;
  color: #fff;
  text-align: center;
  padding: 10% 0;
`;
