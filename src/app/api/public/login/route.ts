import { NextRequest, NextResponse } from "next/server";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "src/libs/firebase";

interface Credentials {
  email: string;
  password: string;
}

export async function POST(req: NextRequest) {
  const credentials: Promise<Credentials> = await req.json();
  const { email, password } = await credentials;

  return await signInWithEmailAndPassword(firebaseAuth, email, password)
    .then((res) =>
      NextResponse.json({
        res,
      })
    )
    .catch((err) =>
      NextResponse.json({
        err,
      })
    );
}
