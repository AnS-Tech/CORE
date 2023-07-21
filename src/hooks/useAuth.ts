"use client";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { signInEmail } from "src/libs/firebase/auth/signin";
import { signUpEmail } from "src/libs/firebase/auth/signup";
import { signOutFirebase } from "src/libs/firebase/auth/signout";
import { signInGoogle } from "src/libs/firebase/auth/googleAuth";

interface Credentials {
  email: string;
  password: string;
}

export const useAuth = () => {
  const router = useRouter();
  const signIn = useCallback(async (credentials: Credentials) => {
    const { email, password } = credentials;

    return await signInEmail(email, password)
      .then((res) => {
        if (res?.error)
          return alert("Erro ao logar, verifique suas credenciais");
        alert("Login realizado com sucesso");
        router.push("/");
        return res;
      })
      .catch((err) => {
        alert(err);
        return err;
      });
  }, []);

  const signUp = useCallback(async (credentials: Credentials) => {
    const { email, password } = credentials;

    return await signUpEmail(email, password)
      .then((res) => {
        if (res?.error) return alert(res.error);
        alert("Cadastro realizado com sucesso");
        router.push("/");
        return res;
      })
      .catch((err) => {
        alert(err);
        return err;
      });
  }, []);

  const signOut = useCallback(async () => {
    return await signOutFirebase()
      .then((res) => {
        if (res?.error) return alert(res.error);
        alert("Logout realizado com sucesso");
        router.push("/login");
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  const signInWithGoogle = useCallback(async () => {
    return await signInGoogle()
      .then(() => {
        alert("Login realizado com sucesso");
        router.push("/");
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return {
    signIn,
    signUp,
    signOut,
    signInWithGoogle,
  };
};
