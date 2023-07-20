import { NextResponse } from "next/server";

interface Credentials {
  email: string;
  password: string;
}

export const handleValidateCredentials = (credentials: Credentials) => {
  const { email, password } = credentials;

  const emailRegex = /\S+@\S+\.\S+/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (!emailRegex.test(email)) {
    return NextResponse.json(
      {
        message: "Email inválido",
      },
      {
        status: 400,
      }
    );
  }

  if (!passwordRegex.test(password)) {
    return NextResponse.json(
      {
        message:
          "Senha inválida. A senha deve conter no mínimo 8 caracteres, sendo pelo menos um número e uma letra",
      },
      {
        status: 400,
      }
    );
  }

  return false;
};
