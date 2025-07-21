"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Button, TextField, Box } from "@mui/material";
import { LoginRequest, SignupRequest } from "@models/interfaces/auth";
import useAuthForm from "../hooks/useAuthForm";
import { AccessTypes } from "@/models/enums";

type FormValues = LoginRequest | SignupRequest;

type AuthFormProps = {
  mode: AccessTypes;
  onSubmit: (data: FormValues) => void;
  isLoading?: boolean;
};

const AuthForm: React.FC<AuthFormProps> = ({ mode, onSubmit, isLoading }) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormValues>();

  const { fields, handleFormSubmit } = useAuthForm({
    mode,
    onSubmit,
    setError,
  });

  return (
    <Box component="form" onSubmit={handleSubmit(handleFormSubmit)} noValidate>
      {fields.map((field) => (
        <TextField
          key={field.name}
          label={field.label}
          type={field.type}
          fullWidth
          margin="normal"
          {...register(field.name as keyof FormValues)}
          error={!!errors[field.name as keyof FormValues]}
          helperText={errors[field.name as keyof FormValues]?.message as string}
        />
      ))}

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        disabled={isLoading}
        sx={{ mt: 2 }}
      >
        {mode === AccessTypes.login ? "Login" : "Sign Up"}
      </Button>
    </Box>
  );
};

export default AuthForm;
