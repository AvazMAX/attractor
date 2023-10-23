import { styled } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export const Header = () => {
  const navigate = useNavigate()
  const userData = useSelector((state) => state.user.user);
  return (
    <Container>
      <BlockFirst>
        <h1>GitHub</h1>
      </BlockFirst>
      <BloclSecond onClick={() => navigate('profile')}>
        <h4>{userData.login}</h4>
        <img src={userData.avatar_url} alt="profile" />
      </BloclSecond>
    </Container>
  );
};
const Container = styled("header")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #282727;
  color: #fff;
`;
const BlockFirst = styled("div")``;
const BloclSecond = styled("button")`
  color: #fff;
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: #282727;
  border: none;
  cursor: pointer;
  img {
    height: 4rem;
    border-radius: 99rem;
  }
`;
