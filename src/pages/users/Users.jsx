import React, { useEffect, useState } from "react";
import { Pagination, Stack, styled } from "@mui/material";
import { useDebounce } from "@uidotdev/usehooks";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "../../components/UI/Input";
import { Link } from "react-router-dom";
import { searchUsers } from "../../store/user/userThunk";

export const Users = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1);
  const debounce = useDebounce(value, 400);

  useEffect(() => {
    dispatch(searchUsers({ value: debounce, page }));
  }, [debounce, page, dispatch]);

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const changePageHandler = (e, newPage) => {
    setPage(newPage);
    dispatch(searchUsers({ value, page: newPage }));
  };

  return (
    <Container>
      <SearchBlock>
        <InputStyled
          type="name"
          value={value}
          onChange={changeHandler}
          placeholder="Search users"
        />
      </SearchBlock>
      {users?.items && users?.items?.length > 0 ? (
        <CompletedBlock>
          {users?.items?.map((el) => (
            <ContainerItem key={el.id}>
              <img src={el.avatar_url} alt="avatar" />
              <Link to={`${el.login}`}>{el.login}</Link>
            </ContainerItem>
          ))}
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
        </CompletedBlock>
      ) : (
        <NotFoundStyled>
          <img
            src="https://github.com/images/modules/search/dark.png"
            alt="searchcatgithub"
          />
        </NotFoundStyled>
      )}
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
  img {
    height: 30vh;
  }
`;
