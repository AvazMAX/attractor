import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { SignIn } from "../pages/auth/SignIn";
import { UserLayout } from "../layout/UserLayout";
import { Public } from "../pages/repository/Public";
import { Private } from "../pages/repository/Private";
import { Layout } from "../layout/Layout";
import { Users } from "../pages/users/Users";

export const AppRoutes = ({ token }) => (
  <Routes>
    <Route path="/" element={<SignIn />} />
    <Route path={`/${token}`} element={<Navigate to="/layout" />} />
    <Route path="/layout" element={<Layout />}>
      <Route path="users" element={<Users />} />
      <Route path="users/:login" element={<UserLayout variant />}>
        <Route index element={<Navigate to="publicrepos" />} />
        <Route path="publicrepos" element={<Public variant />} />
      </Route>
      <Route index element={<Navigate to="profile" />} />
      <Route path="profile" element={<UserLayout variant={false} />}>
        <Route index element={<Navigate to="publicrepos" />} />
        <Route path="publicrepos" element={<Public variant={false} />} />
        <Route path="privatrepos" element={<Private />} />
      </Route>
    </Route>
  </Routes>
);
