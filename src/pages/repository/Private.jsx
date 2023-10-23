import React from "react";
import { styled } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Private = () => {
  const { repos } = useSelector((state) => state.repos);
  const publicRepos = repos.filter((el) => el.private);

  return (
    <Container>
      {publicRepos.map((el) => (
        <ContainerItem key={el.id}>
          <Link to={el.id}>
            <h3>{el.name}</h3>
            <p>{el.language}</p>
          </Link>
        </ContainerItem>
      ))}
    </Container>
  );
};

const Container = styled("div")`
  width: 30rem;
  height: 60vh;
  overflow-y: scroll;
`;

const ContainerItem = styled("div")`
  border-bottom: 1px solid #d4d4d4;
  padding: 1rem 0.5rem;
  a {
    color: #000;
    text-decoration: none;
  }
`;

