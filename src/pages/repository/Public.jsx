import React from "react";
import { styled } from "@mui/material";
import { useSelector } from "react-redux";

export const Public = ({ variant }) => {
  const { repos, oneUserRepos } = useSelector((state) => state.user);
  const publicRepos = repos.filter((el) => !el.private);
  const data = !variant ? publicRepos : oneUserRepos;

  return (
    <Container style={data.length >= 7 ? { overflowY: "scroll" } : null}>
      {data.map((el) => (
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
  width: 25rem;
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
