"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAuth } from "src/hooks/useAuth";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuthContext } from "src/contexts/AuthContext";
import { useRouter } from "next/navigation";

interface IFormInputs {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuthContext();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: zodResolver(
      z.object({
        email: z.string().email("Email inválido"),
        password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
      })
    ),
  });

  const { signIn, signInWithGoogle } = useAuth();

  const onSubmit = async (data: IFormInputs) => {
    setIsLoading(true);
    try {
      await signIn(data);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);
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
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label>Senha *</label>
          <input {...register("password", { required: true })} />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
        </div>

        <button type="submit">{!isLoading ? "Entrar" : "Entrando..."} </button>

        <button
          type="button"
          onClick={signInWithGoogle}
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
          GOOGLE
        </button>

        <Link href={"/cadastro"}>Criar conta</Link>
      </form>
    </div>
  );
};

export default LoginPage;
