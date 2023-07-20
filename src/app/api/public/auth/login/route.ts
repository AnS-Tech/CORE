import { NextRequest, NextResponse } from "next/server";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "src/libs/firebase";

interface LoginBody {
  email: string;
  password: string;
}

export async function POST(req: NextRequest) {
  const credentials: Promise<LoginBody> = await req.json();
  const { email, password } = await credentials;

  if (email === undefined || password === undefined) {
    return NextResponse.json(
      {
        message: "Email e senha são obrigatórios",
      },
      {
        status: 400,
      }
    );
  }

  return await signInWithEmailAndPassword(firebaseAuth, email, password)
    .then((res) =>
      NextResponse.json({
        res,
        message: "Login realizado com sucesso",
      })
    )
    .catch((err) =>
      NextResponse.json(
        {
          err,
          message: "Email ou senha incorretos",
        },
        {
          status: 400,
        }
      )
    );
}
