import React, { useState } from "react";
import { styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "../../components/UI/Input";
import { Button } from "../../components/UI/Button";
import { searchUsers } from "../../store/repos/reposThunk";

export const Users = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.repos);
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    setValue(e.target.value);
    dispatch(searchUsers(e.target.value));
  };

  const searchHandler = () => {
    dispatch(searchUsers(value));
  };

  return (
    <Container>
      <SearchBlock>
        <InputStyled value={value} onChange={changeHandler} />
        <Button onClick={searchHandler}>Search</Button>
      </SearchBlock>
      <CompletedBlock>
        {users?.items?.map((el) => (
          <ContainerItem key={el.id}>
            <img src={el.avatar_url} alt="avatar" />
            <h2>{el.login}</h2>
          </ContainerItem>
        ))}
      </CompletedBlock>
    </Container>
  );
};
const Container = styled("div")`
  max-width: 60rem;
  margin: 2rem auto;
`;
const SearchBlock = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin: 0 auto;
`;
const CompletedBlock = styled("div")``;
const ContainerItem = styled("div")`
  img {
    border-radius: 99rem;
    height: 10rem;
  }
`;
const InputStyled = styled(Input)`
  width: 20rem;
`;
