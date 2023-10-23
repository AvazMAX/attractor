import React from "react";
import * as Yup from "yup";
import { styled } from "@mui/material";
import { Link } from "react-router-dom";
import { Page } from "./Page";
import { Input } from "../../components/UI/Input";
import { Button } from "../../components/UI/Button";
import { useFormik } from "formik";

export const SignUp = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(6).required(),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null])
      .required(),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { values, errors, touched, handleChange, handleSubmit } = formik;

  const isFormEmpty =
    values.firstName.trim().length > 0 &&
    values.lastName.trim().length > 0 &&
    values.email.trim().length > 0 &&
    values.password.trim().length > 0 &&
    values.confirmPassword.trim().length > 0;

  return (
    <>
      <Page>
        <form onSubmit={handleSubmit}>
          <ContainerStyled>
            <Input
              type="text"
              label="Введите имя"
              name="firstName"
              id="firstName"
              value={values.firstName}
              onChange={handleChange}
              error={touched.name && errors.name}
            />
            <Input
              type="text"
              label="Введите фамилию"
              name="lastName"
              id="lastName"
              value={values.lastName}
              onChange={handleChange}
              error={touched.lastName && errors.lastName}
            />
            <Input
              type="email"
              label="Введите email"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              error={touched.email && errors.email}
            />
            <Input
              type="password"
              label="Введите пароль"
              name="password"
              id="password"
              value={values.password}
              onChange={handleChange}
              error={touched.password && errors.password}
            />
            <Input
              type="password"
              label="Введите повторный пароль"
              name="confirmPassword"
              id="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              error={touched.confirmPassword && errors.confirmPassword}
            />
            <Button disabled={!isFormEmpty} type="submit">
              Регистрация
            </Button>
          </ContainerStyled>
        </form>
        <ContainerPathToSignUp>
          <p>
            Есть аккаунт, <Link to="/">войдите</Link>
          </p>
        </ContainerPathToSignUp>
      </Page>
    </>
  );
};

const ContainerStyled = styled("div")`
  display: flex;
  gap: 1rem;
  margin-top: 30%;
  input {
    width: 30rem;
  }
`;

const ContainerPathToSignUp = styled("div")`
  margin-top: 30%;
  a {
    color: #0066ff;
  }
`;
