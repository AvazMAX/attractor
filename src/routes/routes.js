import React from "react";
import { Route, Routes } from "react-router";
import { SignIn } from "../pages/auth/SignIn";
import { SignUp } from "../pages/auth/SignUp";
import { UserLayout } from "../layout/UserLayout";
import { Public } from "../pages/repository/Public";
import { Private } from "../pages/repository/Private";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/userlayout" element={<UserLayout />}>
        <Route path="publicrepos" element={<Public />} />
        <Route path="privatrepos" element={<Private />} />
      </Route>
    </Routes>
  );
};
