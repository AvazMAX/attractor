import React, { useEffect } from "react";
import { Header } from "../pages/main/Header";
import { Outlet } from "react-router";
import { useDispatch } from "react-redux";
import { getUserGitHub } from "../store/user/userThunk";

export const Layout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserGitHub());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
