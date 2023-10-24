import React, { useState } from "react";
import { Pagination, Stack, styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "../../components/UI/Input";
import { Button } from "../../components/UI/Button";
import { searchUsers } from "../../store/repos/reposThunk";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";

export const Users = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.repos);
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1);

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const searchWithDebounce = debounce((searchValue) => {
    dispatch(searchUsers({ value: searchValue }));
  }, 300); // Adjust the debounce delay as needed

  const changePageHandler = (e, newPage) => {
    setPage(newPage);
    dispatch(searchUsers({ page: newPage }));
  };

  const searchHandler = () => {
    dispatch(searchUsers({ value }));
  };

  return (
    <Container>
      <SearchBlock>
        <InputStyled
          value={value}
          onChange={changeHandler}
          onKeyUp={() => searchWithDebounce(value)}
        />
        <Button onClick={searchHandler}>Search</Button>
      </SearchBlock>
      {users?.items && users?.items?.length > 0 ? (
        <CompletedBlock>
          {users?.items?.map((el) => (
            <ContainerItem key={el.id}>
              <img src={el.avatar_url} alt="avatar" />
              <Link to="">{el.login}</Link>
            </ContainerItem>
          ))}
        </CompletedBlock>
      ) : (
        <NotFoundStyled>
          <img
            src="https://github.com/images/modules/search/dark.png"
            alt="searchcatgithub"
          />
        </NotFoundStyled>
      )}
      <PagintaionStyled>
        <Stack spacing={10}>
          <Pagination
            count={Math.ceil(users?.total_count / 10)}
            color="primary"
            page={page}
            onChange={(e, newPage) => changePageHandler(e, newPage)}
          />
        </Stack>
      </PagintaionStyled>
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
  border: 1px solid #d4d4d4;
  border-radius: 1rem;
  padding: 1rem;
  margin: 1rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  img {
    border-radius: 99rem;
    height: 5rem;
  }
  a {
    font-size: 1.2rem;
    color: #0040ff;
    font-weight: 600;
    &:hover {
      text-decoration: underline;
    }
  }
`;
const InputStyled = styled(Input)`
  width: 20rem;
`;
const PagintaionStyled = styled("div")`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;
const NotFoundStyled = styled("div")`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;
