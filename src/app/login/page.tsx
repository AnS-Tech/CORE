"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAuth } from "src/hooks/useAuth";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuthContext } from "src/contexts/AuthContext";
import { useRouter } from "next/navigation";
import {
  CredentialsCardForm,
  LinkContainer,
  LoginContainer,
  OptionsContainer,
} from "./styles";
import { Heading } from "src/components/Heading";
import { Button } from "src/components/Button";
import { LoadingPage } from "src/components/LoadingPage";
import { Input } from "src/components/Input";
import { ButtonGoogle } from "src/components/ButtonGooggle";

interface IFormInputs {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingPage, setLoadingPage] = useState(true);
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
    setTimeout(() => {
      setLoadingPage(false);
    }, 500);
  }, [user]);

  if (loadingPage) return <LoadingPage />;

  return (
    <LoginContainer>
      <Heading>Login</Heading>
      <CredentialsCardForm onSubmit={handleSubmit(onSubmit)}>
        <Input
          label={"Email *"}
          register={register("email", { required: true })}
          errors={errors.email}
          style={{ marginBottom: "1rem" }}
        />

        <Input
          label={"Senha *"}
          register={register("password", { required: true })}
          errors={errors.password}
          style={{ marginBottom: "2.5rem" }}
        />

        <Button
          type="submit"
          loading={isLoading}
          disabled={isLoading}
          style={{ width: "100%", marginBottom: "1rem" }}
        >
          Entrar
        </Button>

        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ButtonGoogle type="button" onClick={signInWithGoogle} />
          <OptionsContainer>
            <LinkContainer href={"/redefinir-senha"}>
              Esqueci minha senha
            </LinkContainer>
            <LinkContainer href={"/cadastro"}>Criar conta</LinkContainer>
          </OptionsContainer>
        </div>
      </CredentialsCardForm>
    </LoginContainer>
  );
};

export default LoginPage;
