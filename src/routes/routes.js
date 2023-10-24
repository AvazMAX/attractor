import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { SignIn } from "../pages/auth/SignIn";
import { SignUp } from "../pages/auth/SignUp";
import { UserLayout } from "../layout/UserLayout";
import { Public } from "../pages/repository/Public";
import { Private } from "../pages/repository/Private";
import { Layout } from "../layout/Layout";
import { Users } from "../pages/users/Users";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/layout" element={<Layout />}>
        <Route path="users" element={<Users />} />
        <Route path="users/:login" element={<UserLayout variant />}>
          <Route
            path="/layout/users/:login"
            element={<Navigate to="publicrepos" />}
          />
          <Route path="publicrepos" element={<Public variant />} />
        </Route>
        <Route path="profile" element={<UserLayout variant={false} />}>
          <Route
            path="/layout/profile"
            element={<Navigate to="publicrepos" />}
          />
          <Route path="publicrepos" element={<Public variant={false} />} />
          <Route path="privatrepos" element={<Private />} />
        </Route>
      </Route>
    </Routes>
  );
};
