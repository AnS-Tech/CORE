"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAuth } from "src/hooks/useAuth";
import { useState } from "react";

interface IFormInputs {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);

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

  const { signIn } = useAuth();

  const onSubmit = async (data: IFormInputs) => {
    setIsLoading(true);
    try {
      await signIn(data);
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
      <h1>Login</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          gap: "1rem",
          flexDirection: "column",
          background: "black",
          padding: "5rem 3rem",
          borderRadius: "0.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label>Email *</label>
          <input {...register("email", { required: true })} />
          {errors.email && <span>Este campo é obrigatório</span>}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label>Senha *</label>
          <input {...register("password", { required: true })} />
          {errors.password && <span>Este campo é obrigatório</span>}
        </div>

        {isLoading ? (
          <button type="button" disabled>
            {" "}
            Carregando...{" "}
          </button>
        ) : (
          <button type="submit"> Entrar </button>
        )}
      </form>
    </div>
  );
};

export default LoginPage;
