import React, {useState} from "react";
import {Button, Menu, MenuItem, Modal, styled} from "@mui/material";
import {Button as MyButton} from "../../components/UI/Button";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router";

export const Header = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const userData = useSelector((state) => state.user.user);
    const [openModal, setOpenModal] = useState(false);
    const open = Boolean(anchorEl);
    const meatBall = [
        {id: 1, title: "Users"},
        {id: 2, title: "Profile"},
        {id: 3, title: "Log out"},
    ];

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const clickHandler = (id) => {
        id === 1
            ? navigate("/layout/users")
            : id === 2
                ? navigate("/layout/profile")
                : setOpenModal((prev) => !prev);
        handleClose();
    };
    const handleCloseModal = () => {
        setOpenModal(false);
    };
    const logoutHandler = () => {
        navigate("/");
        localStorage.removeItem("token");
        window.location.reload();
        return {type: "auth/logout"};
    };
    return (
        <Container>
            <BlockFirst>
                <h1>GitHub</h1>
            </BlockFirst>
            <BlockSecond>
                <h4>{userData.login}</h4>
                <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                >
                    <img src={userData.avatar_url} alt="profile"/>
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        "aria-labelledby": "basic-button",
                    }}
                    sx={{right: "0"}}
                >
                    {meatBall.map((el) => (
                        <MenuItem key={el.id} onClick={() => clickHandler(el.id)}>
                            {el.title}
                        </MenuItem>
                    ))}
                </Menu>
            </BlockSecond>
            <ModalStyled open={openModal} onClose={handleCloseModal}>
                <Content>
                    <h1>Log out?</h1>
                    <div>
                        <MyButton onClick={logoutHandler}>Yes</MyButton>
                        <MyButton onClick={handleCloseModal}>No</MyButton>
                    </div>
                </Content>
            </ModalStyled>
        </Container>
    );
};
const Container = styled("header")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #000000;
  color: #fff;
`;
const BlockFirst = styled("div")``;
const BlockSecond = styled("div")`
  display: flex;
  align-items: center;
  gap: 1rem;

  Button {
    color: #fff;
    text-transform: none;
    cursor: pointer;
  }

  background-color: #000000;
  border: none;

  img {
    height: 4rem;
    border-radius: 99rem;
  }
`;
const ModalStyled = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled("div")`
  background-color: #fff;
  padding: 2rem 5rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    gap: 0.8rem;
  }
`;
