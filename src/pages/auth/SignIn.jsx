import React from "react";
import * as yup from "yup";
import { styled } from "@mui/material";
import { Link } from "react-router-dom";
import { Page } from "./Page";
import { Input } from "../../components/UI/Input";
import { Button } from "../../components/UI/Button";
import { useFormik } from "formik";

export const SignIn = () => {
  const validationSchema = yup.object({
    email: yup.string().matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
    password: yup.string().min(6),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { values, errors, touched, handleChange, submitForm } = formik;

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm();
  };

  const isFormEmpty =
    values.email.trim().length > 0 && values.password.trim().length > 0;

  return (
    <>
      <Page>
        <form onSubmit={handleSubmit}>
          <ContainerStyled>
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
            <Button disabled={!isFormEmpty} type="submit">
              Войти
            </Button>
          </ContainerStyled>
        </form>
        <ContainerPathToSignUp>
          <p>
            Нет аккаунта, <Link to="/signup">зарегистрируйтесь</Link>
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
  Input {
    width: 30rem;
  }
`;
const ContainerPathToSignUp = styled("div")`
  margin-top: 30%;
  a {
    color: #0066ff;
  }
`;
