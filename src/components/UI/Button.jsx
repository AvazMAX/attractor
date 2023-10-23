import React from "react";
import { Button as MuiButton } from "@mui/material";

export const Button = ({ children, type, variant = "contained", onClick, disabled }) => {
  return (
    <MuiButton
      type={type}
      onClick={onClick}
      variant={variant}
      disabled={disabled}
      style={{ textTransform: "none" }}
    >
      {children}
    </MuiButton>
  );
};
