import { createUserWithEmailAndPassword } from "firebase/auth";

import { NextRequest, NextResponse } from "next/server";
import { firebaseAuth } from "src/libs/firebase";
import { handleValidateCredentials } from "src/utils/verifyCredentials";

interface Credentials {
  email: string;
  password: string;
}

export async function POST(req: NextRequest) {
  const credentials: Promise<Credentials> = await req.json();
  const { email, password } = await credentials;

  const validation = handleValidateCredentials({ email, password });

  if (validation) {
    return validation;
  }

  return await createUserWithEmailAndPassword(firebaseAuth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return NextResponse.json({ user, message: "Usuário criado com sucesso" });
    })
    .catch((err) =>
      NextResponse.json(
        {
          err,
          message: "Dados inválidos",
        },
        {
          status: 400,
        }
      )
    );
}
