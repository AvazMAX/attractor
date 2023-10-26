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
  height: 10rem;
  margin: 2rem auto 0;
  /* max-width: 60rem; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
