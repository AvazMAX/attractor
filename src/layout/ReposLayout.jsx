import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { Tab, Tabs, styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getReposGitHub } from "../store/repos/reposThunk";

export const UserLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user: item } = useSelector((state) => state.user);
  const [value, setValue] = useState("publicrepos");

  useEffect(() => {
    dispatch(getReposGitHub());
  }, [dispatch]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(newValue);
  };

  return (
    <>
      <TabsStyle
        value={value}
        onChange={handleChange}
        aria-label="secondary tabs example"
      >
        <Tab value="publicrepos" label="Public repository" />
        <Tab value="privatrepos" label="Private repository" />
      </TabsStyle>
      <Container>
        <BlockOne>
          <img src={item.avatar_url} alt="profile" />
          <h1>{item.name}</h1>
          <h2>{item.login}</h2>
          <p>{item.location}</p>
          <a target="blank" href={item.html_url}>
            {item.html_url}
          </a>
          <p>{item.email}</p>
          <p>{item.company}</p>
          <p>{item.bio}</p>
        </BlockOne>
        <div>
          <Outlet />
        </div>
      </Container>
    </>
  );
};
const Container = styled("div")`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  max-width: 60rem;
  margin: 1rem auto;
`;
const BlockOne = styled("div")`
  img {
    border-radius: 99rem;
  }
`;
const TabsStyle = styled(Tabs)`
  button {
    text-transform: none;
    color: #000;
  }
`;
