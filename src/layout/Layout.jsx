import React from "react";
import { Header } from "../pages/main/Header";
import { Outlet } from "react-router";
import { Footer } from "../pages/main/Footer";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
