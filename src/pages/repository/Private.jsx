import React from "react";
import { styled } from "@mui/material";
import { useSelector } from "react-redux";

export const Private = () => {
  const { repos } = useSelector((state) => state.repos);
  const publicRepos = repos.filter((el) => el.private);

  return (
    <Container
      style={publicRepos.length === 8 ? { overflowY: "scroll" } : null}
    >
      {publicRepos.map((el) => (
        <ContainerItem key={el.id}>
          <a href={el.html_url}>
            <h3>{el.name}</h3>
            <p>{el.language}</p>
          </a>
          <a href={el.owner.html_url}>{el.owner.login}</a>
        </ContainerItem>
      ))}
    </Container>
  );
};

const Container = styled("div")`
  width: 30rem;
  height: 80vh;
`;

const ContainerItem = styled("div")`
  border-bottom: 1px solid #d4d4d4;
  padding: 1rem 0.5rem;
  display: flex;
  align-items: end;
  justify-content: space-between;
  a {
    color: #000;
    text-decoration: none;
  }
`;
