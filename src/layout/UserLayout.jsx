import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router";
import { Tab, Tabs, styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  getReposGitHub,
  getReposOneUser,
  putProfile,
  searchOneUsers,
} from "../store/user/userThunk";
import { Button } from "../components/UI/Button";
import { Input } from "../components/UI/Input";
import { BioIcon, CompanyIcon, GeoPoint } from "../assets";

export const UserLayout = ({ variant }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { login } = useParams();
  const { user, oneUser } = useSelector((state) => state.user);
  const [value, setValue] = useState("publicrepos");
  const [edit, setEdit] = useState(false);
  const item = !variant ? user : oneUser;
  const [name, setName] = useState();
  const [bio, setBio] = useState();
  const [company, setCompany] = useState();
  const [location, setLocation] = useState();

  useEffect(() => {
    setName(item.name);
    setBio(item.bio);
    setCompany(item.company);
    setLocation(item.location);
  }, [item]);

  useEffect(() => {
    if (variant) {
      dispatch(searchOneUsers(login));
    }
  }, [dispatch, login, variant]);

  useEffect(() => {
    dispatch(!variant ? getReposGitHub() : getReposOneUser(login));
  }, [dispatch, login, variant]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(newValue);
  };

  const editHandler = () => {
    setEdit(!edit);
  };

  const saveHandler = (e) => {
    e.preventDefault()
    dispatch(
      putProfile({
        name,
        bio,
        company,
        location,
      })
    );
    setEdit(!edit);
  };

  return (
    <Container>
      {!variant && (
        <TabsStyle
          value={value}
          onChange={handleChange}
          aria-label="secondary tabs example"
        >
          <Tab value="publicrepos" label="Public repository" />
          <Tab value="privatrepos" label="Private repository" />
        </TabsStyle>
      )}
      <ContainerBlockOne>
        <BlockOne onSubmit={saveHandler}>
          <img src={item.avatar_url} alt="profile" />
          {edit ? (
            <ContainerEditInput>
              <Input value={name} onChange={(e) => setName(e.target.value)} />
              <Input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
              <Input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <Input value={bio} onChange={(e) => setBio(e.target.value)} />
            </ContainerEditInput>
          ) : (
            <ContainerEditItem>
              <h1>{item.name}</h1>
              <div>
                <p>
                  <GeoPoint />
                  {item.location}
                </p>
                <p>
                  <CompanyIcon />
                  {item.company}
                </p>
                <p>
                  <BioIcon />
                  {item.bio}
                </p>
              </div>
            </ContainerEditItem>
          )}
          {!variant && (
            <BlockTwo>
              <Button variant="outlined" onClick={editHandler}>
                {edit ? "Cancel" : "Edit profile"}
              </Button>
              {edit && <Button type="submit">Save</Button>}
            </BlockTwo>
          )}
          <h2>{item.login}</h2>
          <a target="blank" href={item.html_url}>
            {item.html_url}
          </a>
        </BlockOne>
        <div>
          <Outlet />
        </div>
      </ContainerBlockOne>
      <ContainerContributions>
        <img
          src={`https://ghchart.rshah.org/${item.login}`}
          alt="Name Your Github chart"
        />
      </ContainerContributions>
    </Container>
  );
};
const Container = styled("div")`
  max-width: 60rem;
  margin: 0rem auto;
`;
const ContainerContributions = styled("div")`
  display: flex;
  justify-content: center;
  img {
    width: 100%;
  }
`;
const ContainerEditInput = styled("div")`
  display: flex;
  flex-direction: column;
`;
const ContainerEditItem = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  svg {
    width: 1.3rem;
    path {
      fill: #555555;
    }
  }
`;
const ContainerBlockOne = styled("div")`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  @media (max-width: 830px) {
    display: block;
  }
  margin: 1rem auto;
`;
const BlockOne = styled("form")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  img {
    width: 20rem;
    /* height: 20rem; */
    border-radius: 99rem;
  }
`;
const BlockTwo = styled("div")`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1rem;
`;
const TabsStyle = styled(Tabs)`
  button {
    text-transform: none;
    color: #000;
  }
`;
