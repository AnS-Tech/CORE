import { createUserWithEmailAndPassword } from "firebase/auth";

import { NextRequest, NextResponse } from "next/server";
import { firebaseAuth } from "src/libs/firebase";

interface Credentials {
  email: string;
  password: string;
}

export async function POST(req: NextRequest) {
  const credentials: Promise<Credentials> = await req.json();
  const { email, password } = await credentials;

  return await createUserWithEmailAndPassword(firebaseAuth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return NextResponse.json({ user });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return NextResponse.json({ errorCode, errorMessage });
    });
}
