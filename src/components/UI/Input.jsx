import { TextField } from "@mui/material";
import React, { forwardRef } from "react";

export const Input = forwardRef(
  ({ value, error, onChange, label, type, id }, ref) => {
    return (
      <TextField
        inputRef={ref}
        id={id}
        label={label}
        variant="standard"
        onChange={onChange}
        value={value}
        type={type}
        error={error}
        sx={{ borderTopLeftRadius: "1rem" }}
      />
    );
  }
);
