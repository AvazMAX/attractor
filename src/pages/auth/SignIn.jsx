import React from "react";
import { Page } from "./Page";
import { Button } from "../../components/UI/Button";
import { client_id } from "../../utils/constants";

export const SignIn = () => {
  const handleClick = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${client_id}`;
  };

  return (
    <>
      <Page>
        <Button onClick={handleClick}>Login with GitHub</Button>
      </Page>
    </>
  );
};

