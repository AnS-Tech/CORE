"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "src/hooks/useAuth";
import { z } from "zod";

interface IFormInputs {
  email: string;
  password: string;
}

const SignUpPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { signUp } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: zodResolver(
      z.object({
        email: z.string().email(),
        password: z.string().min(6),
      })
    ),
  });

  const onSubmit = async (data: IFormInputs) => {
    setIsLoading(true);
    try {
      await signUp(data);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        color: "white !important",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100%",
        backgroundImage:
          "url(https://images.hdqwalls.com/download/stock-chart-minimal-4k-8c-1920x1080.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1>Cadastro</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          gap: "1rem",
          flexDirection: "column",
          background: "black",
          padding: "5rem 3rem",
          borderRadius: "0.5rem",
          maxWidth: "500px",
        }}
      >
        <div>
          <label htmlFor="email">Email</label>
          <input {...register("email")} type="email" id="email" />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input {...register("password")} type="password" id="password" />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          style={{
            padding: "1rem",
            borderRadius: "0.5rem",
            border: "none",
            background: "red",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          {isLoading ? "Cadastrando..." : "Cadastrar"}
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
